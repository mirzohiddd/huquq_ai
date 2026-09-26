"use strict";
/**
 * LOKAL AI — SAVOLGA MOS MODDALARNI TOPISH.
 *
 * Tartib:
 *   1. Savolda ANIQ modda aytilgan bo'lsa ("JK 168-modda", "Mehnat
 *      kodeksi 106-moddasi") — o'sha modda to'g'ridan-to'g'ri olinadi.
 *   2. Aks holda BM25 baholash: savol so'zlari qaysi moddalarda ko'p
 *      va qanchalik NODIR uchrasa, modda shuncha yuqori turadi. Har bir
 *      savol so'zi prefiks bo'yicha moslanadi (text.js), bitta harf
 *      xato yozilgan so'z ham topiladi.
 *   3. Savol mavzusi (kategoriya) bergan kodeksga ustunlik beriladi,
 *      savolda kodeks nomi aytilgan bo'lsa — FAQAT o'sha kodeksdan.
 *
 * Natija bilan birga ISHONCH ko'rsatkichi (`coverage`) qaytadi: savol
 * so'zlarining qancha qismi moddada topilgani. Past bo'lsa javob
 * o'ylab topilmaydi — "topilmadi" deyiladi (compose.js).
 */
const { getIndex } = require("./lawIndex");
const { queryPrefixes, distance } = require("./text");
const { expandQuery } = require("../legalRetrievalQuery");
const { parseArticleNumbers, parseLawCodes } = require("../articleLookup");

const K1 = 1.2;
const B = 0.75;
const CATEGORY_BOOST = 1.35;
const MAX_EXPANSION = 60; // bitta prefiksga mos keladigan so'zlar chegarasi

/* Jinoiy mavzudagi savol ko'pincha JARAYON haqida bo'ladi ("ushlanganning
   huquqlari", "himoyachi") — ustunlik protsessual va ijro kodekslariga ham
   beriladi. legalAI.js dagi kategoriya xaritasiga TEGILMADI. */
const RELATED = { JK: ["JPK", "JIK"] };

/** Tartiblangan lug'atda prefiks bilan boshlanadigan so'zlar. */
function byPrefix(vocab, prefix) {
  let lo = 0;
  let hi = vocab.length;
  while (lo < hi) {
    const mid = (lo + hi) >> 1;
    if (vocab[mid] < prefix) lo = mid + 1;
    else hi = mid;
  }
  const out = [];
  for (let i = lo; i < vocab.length && vocab[i].startsWith(prefix); i++) {
    out.push(vocab[i]);
    if (out.length >= MAX_EXPANSION) break;
  }
  return out;
}

/** Prefiks lug'atda umuman bo'lmasa — 1 harf farqli variantlari. */
function fuzzy(prefix, vocab) {
  if (prefix.length < 5 || /^\d+$/.test(prefix)) return [];
  const seen = new Set();
  for (const v of vocab) {
    if (v[0] !== prefix[0] || v.length < prefix.length) continue;
    const head = v.slice(0, prefix.length);
    if (!seen.has(head) && distance(prefix, head, 1) <= 1) seen.add(head);
    if (seen.size >= 3) break;
  }
  return [...seen].flatMap((h) => byPrefix(vocab, h));
}

/** Savol → [{ prefix, weight, own, terms[] }]. */
function queryGroups(query, idx) {
  const own = queryPrefixes(query);
  const extra = queryPrefixes(expandQuery(query)).filter((p) => !own.includes(p));
  const groups = [];
  for (const [list, weight, isOwn] of [[own, 1, true], [extra, 0.5, false]]) {
    for (const prefix of list) {
      let terms = byPrefix(idx.vocab, prefix);
      let w = weight;
      if (!terms.length) {
        terms = fuzzy(prefix, idx.vocab);
        w *= 0.7;
      }
      if (terms.length) groups.push({ prefix, weight: w, own: isOwn, terms });
    }
  }
  return { groups, ownCount: own.length };
}

function directHits(query, state, fallbackCodes) {
  const numbers = parseArticleNumbers(query);
  if (!numbers.length) return [];
  const explicit = parseLawCodes(query);
  const codes = explicit.length ? explicit : fallbackCodes;
  if (!codes.length) return [];
  const hits = [];
  state.docs.forEach((d, i) => {
    if (codes.includes(d.lawCode) && numbers.includes(d.articleNumber)) {
      hits.push({ docIdx: i, score: 99, coverage: 1, direct: true });
    }
  });
  return hits.slice(0, 3);
}

/**
 * @param {string} query
 * @param {{ lang?: string, codes?: string[]|string|null, limit?: number }} opts
 * @returns {Promise<{ hits: object[], state: object, terms: string[] }>}
 */
async function searchLaws(query, { lang = "uz", codes = null, limit = 3 } = {}) {
  const state = await getIndex();
  const baseCodes = (Array.isArray(codes) ? codes : [codes]).filter(Boolean);
  const catCodes = [...baseCodes, ...baseCodes.flatMap((c) => RELATED[c] || [])];
  const explicit = parseLawCodes(query);

  const useRu = lang === "ru" && /[а-яё]/i.test(query) && state.ru.vocab.length;
  const idx = useRu ? state.ru : state.uz;

  const { groups, ownCount } = queryGroups(query, idx);
  const terms = groups.filter((g) => g.own).map((g) => g.prefix);
  const direct = directHits(query, state, baseCodes);
  if (direct.length) return { hits: direct, state, terms };
  if (!groups.length) return { hits: [], state, terms };

  const N = state.docs.length;
  const scores = new Map();
  const matched = new Map();

  for (const g of groups) {
    // Guruh ichidagi barcha so'z shakllari bitta so'z sifatida sanaladi
    const tfByDoc = new Map();
    for (const term of g.terms) {
      const list = idx.postings.get(term);
      for (let k = 0; k < list.length; k += 2) {
        tfByDoc.set(list[k], (tfByDoc.get(list[k]) || 0) + list[k + 1]);
      }
    }
    const df = tfByDoc.size;
    const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
    for (const [doc, tf] of tfByDoc) {
      if (explicit.length && !explicit.includes(state.docs[doc].lawCode)) continue;
      const norm = tf + K1 * (1 - B + (B * idx.docLen[doc]) / idx.avgLen);
      scores.set(doc, (scores.get(doc) || 0) + g.weight * idf * ((tf * (K1 + 1)) / norm));
      if (g.own) matched.set(doc, (matched.get(doc) || 0) + 1);
    }
  }

  const ranked = [];
  for (const [doc, raw] of scores) {
    const coverage = ownCount ? (matched.get(doc) || 0) / ownCount : 0;
    let score = raw * (0.4 + coverage);
    if (catCodes.includes(state.docs[doc].lawCode)) score *= CATEGORY_BOOST;
    ranked.push({ docIdx: doc, score, coverage, matched: matched.get(doc) || 0 });
  }
  ranked.sort((a, b) => b.score - a.score);
  return { hits: ranked.slice(0, limit), state, terms };
}

module.exports = { searchLaws };
