"use strict";
/**
 * BARCHA HUJJATLAR BO'YLAB MODDA QIDIRUVI.
 *
 * "Mehnat shartnomasi" deb yozilsa — qaysi kodeksda bo'lishidan qat'i
 * nazar, sarlavhasi yoki matnida shu ibora bor moddalar chiqadi.
 * "106-modda" / "статья 106" — aniq raqam bo'yicha (hujjat filtri bilan).
 *
 * Manba — lokal AI korpusi (xotirada, `LegalChunk` ning nusxasi):
 * bazaga har qidiruvda 7000+ ta og'ir hujjat so'rovi yuborilmaydi.
 */
const { getIndex } = require("../localAI/lawIndex");
const { normalize, uzCyrToLatin } = require("../localAI/text");

const ART_RE =
  /^\s*(?:(?:статья|ст\.?|article)\s*(\d+(?:-\d+)*)|(\d+(?:-\d+)*)\s*(?:-?\s*modda\w*|\.|-?\s*статья)?)\s*$/i;

/** So'rov modda raqamimi → raqam yoki null. */
function articleNumberOf(q = "") {
  const m = String(q).trim().match(ART_RE);
  return m ? m[1] || m[2] : null;
}

/* ⚠️ XOTIRA (o'lchangan, 2026-10-02) — production'dagi "JavaScript heap
   out of memory" xatosining ASOSIY sababi shu yerda edi.

   Avval har bir moddaning normallashtirilgan nusxasi (4 ta satr) JS
   xotirasida saqlanardi: birinchi qidiruvdan keyin heap 70 MB → 255 MB
   (+185 MB) ga sakrardi, V8 chegarasi esa 512 MB RAM'li serverda ~256 MB.

   Endi normallashtirilgan MATN bitta UTF-8 Buffer'da (heap'dan
   tashqarida, ~16 MB), qidiruv esa `Buffer.indexOf` bilan. Sarlavhalar
   kichik (~1 MB) — ular satr bo'lib qoladi. Natija avvalgisi bilan
   AYNAN bir xil: matn tartibi ham o'sha ("uz" + bo'sh joy + "ru"). */
let prepared = null; // { builtAt, docs, titles[], tuLen, hay: Buffer, offsets }
let preparing = null;

const breathe = () => new Promise((r) => setImmediate(r));
const SEP = "\n"; // normallashtirilgan matnda uchramaydi (bo'sh joyga aylanadi)

async function prepare(state) {
  const n = (s) => normalize(uzCyrToLatin(s || "")).replace(/\s+/g, " ");
  const { docs } = state;
  const titles = new Array(docs.length);
  const tuLen = new Uint16Array(docs.length);
  const offsets = new Uint32Array(docs.length + 1);
  const chunks = [];
  let size = 0;
  for (let i = 0; i < docs.length; i++) {
    const d = docs[i];
    const tu = n(d.title);
    titles[i] = tu + " " + n(d.titleRu);
    tuLen[i] = Math.min(tu.length, 0xffff);
    const chunk = Buffer.from(n(d.text) + " " + n(d.textRu) + SEP, "utf8");
    offsets[i] = size;
    chunks.push(chunk);
    size += chunk.length;
    // Normallashtirish og'ir — server boshqa so'rovlarga javob bera olsin
    if (i % 200 === 199) await breathe();
  }
  offsets[docs.length] = size;
  return { builtAt: state.builtAt, docs, titles, tuLen, offsets, hay: Buffer.concat(chunks, size) };
}

async function ready() {
  const state = await getIndex();
  if (prepared && prepared.builtAt === state.builtAt) return prepared;
  if (!preparing) {
    preparing = prepare(state)
      .then((p) => (prepared = p))
      .finally(() => (preparing = null));
  }
  return preparing;
}

/** Bayt joylashuvi → modda tartib raqami (ikkilik qidiruv). */
function docAt(offsets, pos) {
  let lo = 0;
  let hi = offsets.length - 1;
  while (lo + 1 < hi) {
    const mid = (lo + hi) >> 1;
    if (offsets[mid] <= pos) lo = mid;
    else hi = mid;
  }
  return lo;
}

/** Matnida `needle` uchraydigan moddalar (1 — bor). Har moddada bir marta. */
function mark(p, needle) {
  const hits = new Uint8Array(p.docs.length);
  if (!needle) return hits.fill(1); // bo'sh satr har qanday matnda "bor"
  let pos = 0;
  while ((pos = p.hay.indexOf(needle, pos, "utf8")) !== -1) {
    const i = docAt(p.offsets, pos);
    hits[i] = 1;
    pos = p.offsets[i + 1];
  }
  return hits;
}

function snippet(text, words) {
  const t = String(text || "").replace(/\s+/g, " ");
  const low = normalize(t);
  let at = -1;
  for (const w of words) {
    at = low.indexOf(w);
    if (at >= 0) break;
  }
  if (at < 0) return t.slice(0, 180);
  const start = Math.max(0, at - 70);
  return (start ? "…" : "") + t.slice(start, start + 200).trim() + "…";
}

/**
 * @param {string} q
 * @param {{ lang?: string, codes?: string[], limit?: number }} opts
 */
async function searchArticles(q, { lang = "uz", codes = null, limit = 40 } = {}) {
  const p = await ready();
  const allow = codes && codes.length ? new Set(codes) : null;
  const allowed = (d) => !allow || allow.has(d.lawCode);
  const num = articleNumberOf(q);
  if (num) {
    return p.docs
      .filter((d) => d.articleNumber === num && allowed(d))
      .slice(0, limit)
      .map((d) => view(d, lang, 100, []));
  }
  const phrase = normalize(uzCyrToLatin(q)).replace(/\s+/g, " ").trim();
  const words = phrase.split(" ").filter((w) => w.length >= 3);
  if (!words.length) return [];
  const stems = words.map((w) => w.slice(0, Math.max(4, Math.min(w.length, 6))));
  const inText = mark(p, phrase);
  // Bitta so'zli so'rovda "barcha o'zaklar matnda" bahosi 0 — hisoblanmaydi
  const stemsInText = stems.length > 1 ? stems.map((s) => mark(p, s)) : null;
  const out = [];
  for (let i = 0; i < p.docs.length; i++) {
    if (!allowed(p.docs[i])) continue;
    const title = p.titles[i];
    let score = 0;
    if (title.includes(phrase)) score = 10;
    else if (stems.every((s) => title.includes(s))) score = 6;
    else if (inText[i]) score = 4;
    else if (stemsInText && stemsInText.every((m) => m[i])) score = 1;
    if (score) out.push({ i, score });
  }
  /* Teng bahoda qisqa sarlavha oldinda — u iboraga aynan bag'ishlangan. */
  out.sort((a, b) => b.score - a.score || p.tuLen[a.i] - p.tuLen[b.i]);
  return out.slice(0, limit).map(({ i, score }) => view(p.docs[i], lang, score, words));
}

function view(d, lang, score, words) {
  const textRu = lang === "ru" ? d.textRu : "";
  const ru = Boolean(textRu);
  return {
    code: d.lawCode,
    lawName: ru ? d.lawNameRu : d.lawName,
    articleNumber: d.articleNumber,
    title: (ru ? d.titleRu : d.title) || d.title,
    snippet: snippet(ru ? textRu : d.text, words),
    score,
  };
}

module.exports = { searchArticles, articleNumberOf };
