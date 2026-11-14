"use strict";
/**
 * GIBRID QIDIRUV — bitta usulga tayanilmaydi (2026-11-14).
 *
 * To'rt kanal parallel ishlaydi, natijalar birlashtiriladi:
 *   number  — modda raqami bo'yicha ANIQ qidiruv (kodeks aytilmasa — suhbat
 *             kontekstidagi kodekslar; ular ham bo'lmasa — nomzodlar ro'yxati);
 *   bm25raw — foydalanuvchining xom matni bo'yicha (so'zma-so'z + fuzzy);
 *   bm25norm— NORMALLASHTIRILGAN savol + qonun atamalari bo'yicha;
 *   vector  — semantik qidiruv (ma'no bo'yicha).
 * Birlashtirish — RRF (Reciprocal Rank Fusion): har kanal o'z tartibi
 * bo'yicha ball beradi, bir nechta kanalda chiqqan modda yuqoriga ko'tariladi.
 * Keyin qayta tartiblash: atamalar sarlavhada uchrasa va kodeks savol
 * sohasiga mos kelsa — qo'shimcha ball.
 *
 * ⚠️ CHEGARA ataylab YUMSHOQ: avval qattiq chegara tufayli kerakli modda
 * LLM'ga umuman yetib bormasdi. Bu yerda faqat aniq shovqin kesiladi
 * (xom matn kanalida savol so'zlarining yarmidan kami mos kelgan moddalar).
 */
const { getIndex } = require("../localAI/lawIndex");
const { searchLaws } = require("../localAI/search");
const { tokenize } = require("../localAI/text");
const { vectorSearch } = require("./vector");
const { parseArticleNumbers, parseLawCodes } = require("../articleLookup");
const { SITE_URL, path } = require("../seoPages/meta");

const RRF_K = 60;
const WEIGHT = { number: 4, bm25norm: 1.2, vector: 1.1, bm25raw: 0.7 };
const RAW_MIN_COVERAGE = 0.5;
const NORM_MIN_COVERAGE = 0.3;
const MIN_RELEVANCE = 0.22;

const idOf = (d) => `${d.lawCode}:${d.articleNumber}`;

/** Modda raqami kanali. Kodeks noma'lum va kontekst ham yo'q — `ambiguous`. */
function numberChannel(state, numbers, explicit, context) {
  const out = { hits: [], ambiguous: null, others: [] };
  for (const num of numbers) {
    const all = [];
    state.docs.forEach((d, i) => d.articleNumber === num && all.push(i));
    if (!all.length) continue;
    const pick = (codes) => codes.flatMap((c) => all.filter((i) => state.docs[i].lawCode === c));
    let chosen = explicit.length ? pick(explicit) : pick(context).slice(0, 3);
    if (!chosen.length && all.length === 1) chosen = all;
    out.hits.push(...chosen);
    const rest = all.filter((i) => !chosen.includes(i)).map((i) => state.docs[i]);
    if (!chosen.length) out.ambiguous = { number: num, candidates: rest };
    else if (!explicit.length) out.others.push({ number: num, candidates: rest });
  }
  return out;
}

/**
 * @param {{ msg: string, u: object, lang?: string, codes?: string|string[]|null,
 *           limit?: number, articleChars?: number }} p   u — understand() natijasi
 * @returns {Promise<{ docs: object[], trace: object }>}
 *   docs[i]: { id, lawCode, lawName, articleNumber, title, text, score, via[], direct, sourceUrl }
 */
async function hybridRetrieve({ msg, u, lang = "uz", codes = null, limit = 6, articleChars = 1400 }) {
  const state = await getIndex();
  const ru = lang === "ru";
  const catCodes = [].concat(codes || []).filter(Boolean);
  const ctxCodes = [...new Set([...(u.codes || []), ...catCodes])];
  const explicit = parseLawCodes(msg);
  const numbers = [...new Set([...parseArticleNumbers(msg), ...(u.articles || [])])];
  const normQuery = [u.standalone, ...(u.keywords || [])].filter(Boolean).join(" ").slice(0, 900);
  const kwQuery = (u.keywords || []).join(" ");

  const num = numberChannel(state, numbers, explicit, ctxCodes);
  const safe = (p) => p.catch(() => ({ hits: [] }));
  const [raw, norm, kw, vec] = await Promise.all([
    safe(searchLaws(msg, { lang, codes: catCodes, limit: 8 })),
    normQuery ? safe(searchLaws(normQuery, { lang: "uz", codes: ctxCodes, limit: 8 })) : { hits: [] },
    kwQuery ? safe(searchLaws(kwQuery, { lang: "uz", limit: 8 })) : { hits: [] },
    // Aniq modda so'ralgan bo'lsa semantik qidiruv faqat shovqin beradi (articleLookup.js izohi)
    num.hits.length && explicit.length ? { hits: [] } : vectorSearch(normQuery || msg, { limit: 8 }),
  ]);

  const byKey = new Map(state.docs.map((d, i) => [idOf(d), i]));
  const channels = {
    number: num.hits,
    bm25raw: raw.hits.filter((h) => h.direct || h.coverage >= RAW_MIN_COVERAGE).map((h) => h.docIdx),
    bm25norm: [...norm.hits, ...kw.hits].filter((h) => h.direct || h.coverage >= NORM_MIN_COVERAGE).sort((a, b) => b.score - a.score).map((h) => h.docIdx),
    vector: vec.hits.map((h) => byKey.get(`${h.lawCode}:${h.articleNumber}`)).filter((i) => i !== undefined),
  };

  // RRF birlashtirish (dublikatlar bitta yozuvga yig'iladi)
  const pool = new Map();
  for (const [name, list] of Object.entries(channels)) {
    [...new Set(list)].forEach((docIdx, rank) => {
      const e = pool.get(docIdx) || { docIdx, score: 0, via: [] };
      e.score += WEIGHT[name] / (RRF_K + rank);
      e.via.push(name);
      pool.set(docIdx, e);
    });
  }

  // Qayta tartiblash: atamalar sarlavhada + kodeks savol sohasida
  const kwTokens = new Set(tokenize(kwQuery || normQuery));
  for (const e of pool.values()) {
    const d = state.docs[e.docIdx];
    const tt = tokenize(d.title || "");
    const fit = tt.length ? tt.filter((t) => kwTokens.has(t)).length / tt.length : 0;
    e.score *= 1 + 0.6 * fit;
    if (ctxCodes.includes(d.lawCode)) e.score *= 1.25;
    e.direct = e.via.includes("number");
  }
  const ranked = [...pool.values()].sort((a, b) => b.direct - a.direct || b.score - a.score);
  const top = ranked.find((e) => !e.direct)?.score || ranked[0]?.score || 1;

  const docs = ranked
    .map((e) => ({ ...e, relevance: e.direct ? 1 : Math.min(1, e.score / top) }))
    .filter((e) => e.direct || e.relevance >= MIN_RELEVANCE)
    .slice(0, limit + num.hits.length)
    .map((e) => {
      const d = state.docs[e.docIdx];
      return {
        id: idOf(d),
        lawCode: d.lawCode,
        lawName: ru && d.lawNameRu ? d.lawNameRu : d.lawName,
        articleNumber: d.articleNumber,
        title: (ru && d.titleRu) || d.title || "",
        text: String((ru && d.textRu) || d.text || "").replace(/\s+/g, " ").trim().slice(0, e.direct ? Math.max(articleChars, 2400) : articleChars),
        score: Math.round(e.relevance * 100) / 100,
        via: e.via,
        direct: e.direct,
        sourceUrl: `${SITE_URL}${path.article(d.lawCode, d.articleNumber)}`,
      };
    })
    .filter((d) => d.text);

  const brief = (d) => ({ lawCode: d.lawCode, lawName: ru && d.lawNameRu ? d.lawNameRu : d.lawName, title: (ru && d.titleRu) || d.title || "" });
  return {
    docs,
    ambiguous: num.ambiguous && { number: num.ambiguous.number, candidates: num.ambiguous.candidates.map(brief) },
    others: num.others.map((o) => ({ number: o.number, candidates: o.candidates.map(brief) })),
    numbers,
    trace: {
      query: { raw: msg, normalized: normQuery, keywords: u.keywords || [], codes: ctxCodes, numbers },
      channels: Object.fromEntries(Object.entries(channels).map(([k, v]) => [k, v.slice(0, 8).map((i) => idOf(state.docs[i]))])),
      vectorError: vec.error || null,
    },
  };
}

module.exports = { hybridRetrieve };
