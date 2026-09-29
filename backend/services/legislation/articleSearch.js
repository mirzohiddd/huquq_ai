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

let prepared = null; // { builtAt, rows: [{ d, tu, xu, tr, xr }] }

async function rows() {
  const state = await getIndex();
  if (prepared && prepared.builtAt === state.builtAt) return prepared.rows;
  const n = (s) => normalize(uzCyrToLatin(s || "")).replace(/\s+/g, " ");
  prepared = {
    builtAt: state.builtAt,
    rows: state.docs.map((d) => ({
      d,
      tu: n(d.title),
      xu: n(d.text),
      tr: n(d.titleRu),
      xr: n(d.textRu),
    })),
  };
  return prepared.rows;
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
  const all = await rows();
  const allow = codes && codes.length ? new Set(codes) : null;
  const num = articleNumberOf(q);
  if (num) {
    return all
      .filter((r) => r.d.articleNumber === num && (!allow || allow.has(r.d.lawCode)))
      .slice(0, limit)
      .map((r) => view(r, lang, 100, []));
  }
  const phrase = normalize(uzCyrToLatin(q)).replace(/\s+/g, " ").trim();
  const words = phrase.split(" ").filter((w) => w.length >= 3);
  if (!words.length) return [];
  const stems = words.map((w) => w.slice(0, Math.max(4, Math.min(w.length, 6))));
  const out = [];
  for (const r of all) {
    if (allow && !allow.has(r.d.lawCode)) continue;
    const title = r.tu + " " + r.tr;
    const text = r.xu + " " + r.xr;
    let score = 0;
    if (title.includes(phrase)) score = 10;
    else if (stems.every((s) => title.includes(s))) score = 6;
    else if (text.includes(phrase)) score = 4;
    else if (stems.every((s) => text.includes(s))) score = stems.length > 1 ? 1 : 0;
    if (score) out.push({ r, score });
  }
  /* Teng bahoda qisqa sarlavha oldinda — u iboraga aynan bag'ishlangan. */
  out.sort((a, b) => b.score - a.score || a.r.tu.length - b.r.tu.length);
  return out.slice(0, limit).map(({ r, score }) => view(r, lang, score, words));
}

function view(r, lang, score, words) {
  const ru = lang === "ru" && r.d.textRu;
  return {
    code: r.d.lawCode,
    lawName: ru ? r.d.lawNameRu : r.d.lawName,
    articleNumber: r.d.articleNumber,
    title: (ru ? r.d.titleRu : r.d.title) || r.d.title,
    snippet: snippet(ru ? r.d.textRu : r.d.text, words),
    score,
  };
}

module.exports = { searchArticles, articleNumberOf };
