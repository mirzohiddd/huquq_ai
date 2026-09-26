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
 */
const fs = require("fs");
const path = require("path");
const { LegalChunk } = require("../../models");
const { getLaws } = require("../lawRegistry");
const { tokenize } = require("./text");

const REBUILD_MS = 6 * 60 * 60 * 1000;
const TITLE_WEIGHT = 3; // sarlavhadagi so'z matndagidan 3 barobar muhim

let state = null; // { docs, uz, ru, builtAt }
let building = null;

function emptyLang() {
  return { postings: new Map(), docLen: [], avgLen: 1, vocab: [] };
}

function addDoc(idx, docIdx, title, text) {
  const tf = new Map();
  for (const t of tokenize(title)) tf.set(t, (tf.get(t) || 0) + TITLE_WEIGHT);
  let len = 0;
  for (const t of tokenize(text)) {
    tf.set(t, (tf.get(t) || 0) + 1);
    len++;
  }
  idx.docLen[docIdx] = len + TITLE_WEIGHT * 2;
  for (const [term, n] of tf) {
    let list = idx.postings.get(term);
    if (!list) idx.postings.set(term, (list = []));
    list.push(docIdx, n);
  }
}

function finish(idx) {
  const lens = idx.docLen.filter((n) => n > 0);
  idx.avgLen = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
  idx.vocab = [...idx.postings.keys()].sort(); // prefiks qidiruvi uchun tartiblangan
}

/* ⚠️ Moddalar KODEKS BO'YICHA PARALLEL olinadi. O'lchandi: bitta
   ketma-ket kursor 7126 moddani 235 s da o'qidi (Atlas har bir ~19 KB
   hujjatni diskdan o'qiydi), 21 ta parallel so'rov — 40 s. */
async function fetchDocs() {
  const laws = await getLaws();
  const parts = await Promise.all(
    laws.map((law) =>
      LegalChunk.find({ lawCode: law.code })
        .select("articleNumber title text titleRu textRu -_id")
        .lean()
        .then((rows) =>
          rows.map((d) => ({
            lawCode: law.code,
            lawName: law.name || law.code,
            lawNameRu: law.nameI18n?.ru || law.name || law.code,
            articleNumber: d.articleNumber,
            title: d.title || "",
            text: d.text || "",
            titleRu: d.titleRu || "",
            textRu: d.textRu || "",
          })),
        ),
    ),
  );
  return parts.flat();
}

/* Disk nusxasi: server qayta ishga tushganda korpus bazadan qayta
   o'qilmaydi (bir zumda tiklanadi), yangilanish esa fonda ketadi. */
const SNAPSHOT = path.join(__dirname, "../../.cache/local-ai-corpus.json");

function readSnapshot() {
  try {
    const raw = JSON.parse(fs.readFileSync(SNAPSHOT, "utf8"));
    return Array.isArray(raw.docs) && raw.docs.length ? raw : null;
  } catch {
    return null;
  }
}

function writeSnapshot(docs) {
  try {
    fs.mkdirSync(path.dirname(SNAPSHOT), { recursive: true });
    fs.writeFileSync(SNAPSHOT, JSON.stringify({ savedAt: Date.now(), docs }));
  } catch (e) {
    console.warn("Lokal AI snapshot yozilmadi:", e.message);
  }
}

function indexDocs(docs, builtAt) {
  const uz = emptyLang();
  const ru = emptyLang();
  docs.forEach((d, i) => {
    addDoc(uz, i, d.title, d.text);
    if (d.textRu) addDoc(ru, i, d.titleRu, d.textRu);
    else ru.docLen[i] = 0;
  });
  finish(uz);
  finish(ru);
  return { docs, uz, ru, builtAt };
}

async function build() {
  const t0 = Date.now();
  const docs = await fetchDocs();
  if (!docs.length) throw new Error("LegalChunk bo'sh — qonunlar hali yuklanmagan");
  state = indexDocs(docs, Date.now());
  writeSnapshot(docs);
  console.log(
    `🔎 Lokal AI indeksi qurildi: ${docs.length} modda, ` +
      `${state.uz.vocab.length}+${state.ru.vocab.length} o'zak, ${Date.now() - t0} ms`,
  );
  return state;
}

/**
 * Tayyor indeksni qaytaradi. Eskirgan bo'lsa — eskisi darhol qaytadi va
 * yangisi FONDA quriladi (foydalanuvchi kutib qolmasligi uchun).
 */
async function getIndex() {
  if (!state) {
    const snap = readSnapshot();
    if (snap) state = indexDocs(snap.docs, snap.savedAt);
  }
  if (state && Date.now() - state.builtAt > REBUILD_MS && !building) {
    building = build()
      .catch((e) => console.warn("Lokal AI indeksi yangilanmadi:", e.message))
      .finally(() => (building = null));
  }
  if (state) return state;
  if (!building) {
    building = build().finally(() => (building = null));
  }
  return building;
}

/** Server ishga tushganda fonda chaqiriladi (birinchi savol kutmasin). */
function warmLawIndex(delayMs = 5000) {
  setTimeout(() => {
    getIndex().catch((e) => console.warn("Lokal AI indeksi:", e.message));
  }, delayMs).unref?.();
}

module.exports = { getIndex, warmLawIndex };
