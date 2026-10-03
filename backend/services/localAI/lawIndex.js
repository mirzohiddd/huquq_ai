"use strict";
/**
 * LOKAL AI — QONUN MODDALARINING XOTIRADAGI QIDIRUV INDEKSI (BM25).
 *
 * Manba: `LegalChunk` — lex.uz'dan yuklangan va har 24 soatda
 * yangilanadigan moddalar (sayt kutubxonasi, Konstitutsiya va
 * "Qonunchilik hujjatlari" sahifasi aynan shu bazani ko'rsatadi).
 * Ya'ni AI faqat SAYTDA BOR matndan javob topadi.
 *
 * ⚠️ `embedding` maydoni ATAYLAB o'qilmaydi — har bir hujjatning ~19 KB
 * qismi shu maydon va u bu yerda kerak emas (vektor qidiruv tashqi
 * embedding API'siga bog'liq, lokal rejim esa API'siz ishlaydi).
 *
 * Indeks ikki tilda quriladi: `uz` (title/text) va `ru` (rasmiy rus
 * tarjimasi — titleRu/textRu). Savol tiliga qarab kerakli indeks olinadi.
 *
 * Qayta qurish: birinchi so'rovda (yoki server ishga tushgach fonda) va
 * keyin har REBUILD_MS da — lex.uz yangilanishi indeksga ham tushadi.
 *
 * ⚠️ XOTIRA (2026-10-02): production'da "JavaScript heap out of memory"
 * (heap ~256 MB) xatosidan keyin indeks qayta qurildi — matnlar heap'dan
 * tashqaridagi Buffer'da (corpus.js), BM25 ro'yxatlari tipli massivda
 * (postings.js), bazadan o'qish esa kursor bilan, bo'lib-bo'lib.
 * O'lchov: indeks 54 MB → ~8 MB heap.
 */
const { LegalChunk } = require("../../models");
const { getLaws } = require("../lawRegistry");
const { tokenize } = require("./text");
const { packPostings } = require("./postings");
const { assemble, readSnapshot, writeSnapshot } = require("./corpus");

const REBUILD_MS = 6 * 60 * 60 * 1000;
const RETRY_MS = 10 * 60 * 1000; // yangilash yiqilsa — darhol qayta urinilmaydi
const TITLE_WEIGHT = 3; // sarlavhadagi so'z matndagidan 3 barobar muhim
const FETCH_PARALLEL = 6;
const YIELD_EVERY = 200;

let state = null; // { docs, uz, ru, builtAt }
let building = null;
let retryAt = 0;

/* Indekslash sinxron va og'ir (15 mln belgi) — har YIELD_EVERY moddada
   navbat boshqa so'rovlarga beriladi, server bu paytda "qotib" qolmaydi. */
const breathe = () => new Promise((r) => setImmediate(r));

function addDoc(lists, docLen, docIdx, title, text) {
  const tf = new Map();
  for (const t of tokenize(title)) tf.set(t, (tf.get(t) || 0) + TITLE_WEIGHT);
  let len = 0;
  for (const t of tokenize(text)) {
    tf.set(t, (tf.get(t) || 0) + 1);
    len++;
  }
  docLen[docIdx] = len + TITLE_WEIGHT * 2;
  for (const [term, n] of tf) {
    let list = lists.get(term);
    if (!list) lists.set(term, (list = []));
    list.push(docIdx, n);
  }
}

/** Bitta til indeksi. `pick(doc)` → [sarlavha, matn] yoki null (matn yo'q). */
async function indexLang(docs, pick) {
  const lists = new Map();
  const docLen = new Array(docs.length).fill(0);
  for (let i = 0; i < docs.length; i++) {
    const pair = pick(docs[i]);
    if (pair) addDoc(lists, docLen, i, pair[0], pair[1]);
    if (i % YIELD_EVERY === YIELD_EVERY - 1) await breathe();
  }
  const lens = docLen.filter((n) => n > 0);
  const avgLen = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
  return { ...packPostings(lists, docs.length), docLen, avgLen };
}

/* Tillar KETMA-KET indekslanadi: vaqtinchalik ro'yxatlar (bir til uchun
   ~7 MB) ixcham massivga o'tkazilgach, keyingi til boshlanadi. */
async function indexDocs(docs, builtAt) {
  const uz = await indexLang(docs, (d) => [d.title, d.text]);
  const ru = await indexLang(docs, (d) => {
    const text = d.textRu;
    return text ? [d.titleRu, text] : null;
  });
  return { docs, uz, ru, builtAt };
}

/* ⚠️ Moddalar KODEKS BO'YICHA PARALLEL olinadi. O'lchandi: bitta
   ketma-ket kursor 7126 moddani 235 s da o'qidi (Atlas har bir ~19 KB
   hujjatni diskdan o'qiydi), parallel so'rovlar — 40 s.

   XOTIRA: avval 21 ta kodeksning HAMMASI bir vaqtda to'liq massiv bo'lib
   kelardi (~31 MB satr + nusxalar). Endi bir vaqtda FETCH_PARALLEL ta
   kursor, har bir modda matni kelishi bilan Buffer'ga o'tkaziladi. */
async function fetchCorpus() {
  const laws = (await getLaws()).map((l) => ({
    code: l.code,
    name: l.name || l.code,
    nameRu: l.nameI18n?.ru || l.name || l.code,
  }));
  const parts = new Array(laws.length);
  let next = 0;
  const worker = async () => {
    while (next < laws.length) {
      const i = next++;
      const rows = [];
      const cursor = LegalChunk.find({ lawCode: laws[i].code })
        .select("articleNumber title text titleRu textRu -_id")
        .lean()
        .cursor({ batchSize: 100 });
      for await (const d of cursor) {
        rows.push({
          num: d.articleNumber,
          title: d.title || "",
          titleRu: d.titleRu || "",
          uz: Buffer.from(d.text || "", "utf8"),
          ru: Buffer.from(d.textRu || "", "utf8"),
        });
      }
      parts[i] = rows;
    }
  };
  await Promise.all(Array.from({ length: FETCH_PARALLEL }, worker));
  return assemble(laws, parts);
}

const heapMb = () => Math.round(process.memoryUsage().heapUsed / 1048576);

async function build() {
  const t0 = Date.now();
  const corpus = await fetchCorpus();
  if (!corpus.docs.length) throw new Error("LegalChunk bo'sh — qonunlar hali yuklanmagan");
  state = await indexDocs(corpus.docs, Date.now());
  /* Disk nusxasi: server qayta ishga tushganda korpus bazadan qayta
     o'qilmaydi (bir zumda tiklanadi), yangilanish esa fonda ketadi. */
  writeSnapshot(corpus);
  console.log(
    `🔎 Lokal AI indeksi qurildi: ${corpus.docs.length} modda, ` +
      `${state.uz.vocab.length}+${state.ru.vocab.length} o'zak, ${Date.now() - t0} ms, heap ${heapMb()} MB`,
  );
  return state;
}

/* Birinchi yuklash: disk nusxasi bo'lsa — undan, aks holda bazadan. */
async function load() {
  const snap = readSnapshot();
  if (!snap) return build();
  state = await indexDocs(snap.docs, snap.savedAt);
  return state;
}

function refreshIfStale() {
  const now = Date.now();
  if (!state || building || now - state.builtAt <= REBUILD_MS || now < retryAt) return;
  building = build()
    .catch((e) => {
      retryAt = Date.now() + RETRY_MS;
      console.warn("Lokal AI indeksi yangilanmadi:", e.message);
    })
    .finally(() => (building = null));
}

/**
 * Tayyor indeksni qaytaradi. Eskirgan bo'lsa — eskisi darhol qaytadi va
 * yangisi FONDA quriladi (foydalanuvchi kutib qolmasligi uchun).
 */
async function getIndex() {
  if (!state) {
    if (!building) building = load().finally(() => (building = null));
    await building;
  }
  refreshIfStale();
  return state;
}

/** Server ishga tushganda fonda chaqiriladi (birinchi savol kutmasin). */
function warmLawIndex(delayMs = 5000) {
  setTimeout(() => {
    getIndex().catch((e) => console.warn("Lokal AI indeksi:", e.message));
  }, delayMs).unref?.();
}

module.exports = { getIndex, warmLawIndex };
