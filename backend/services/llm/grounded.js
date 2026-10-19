"use strict";
/**
 * RAG MANBALARI + PROMPT + "O'YLAB TOPILGAN MODDA" TEKSHIRUVI.
 *
 * Manbalar uch qatlamdan (hammasi lex.uz'dan yuklangan LegalChunk bazasi):
 *   1) lokal BM25 qidiruv (localAI/search.js) — aniq atamalar, modda raqami;
 *   2) vektor qidiruv (legalRetrieval.js) — kundalik tildagi savollar uchun
 *      (vaqt chegarasi bilan; ishlamasa jim o'tkazib yuboriladi);
 *   3) saytning tekshirilgan lokal javobi (kuratorlik qilingan vaziyatlar,
 *      dars mavzulari) — u qaysi moddalarga tayangan bo'lsa, o'shalar ham
 *      ruxsat etilgan manba.
 *
 * Model faqat shu manbalardan modda keltira oladi. Javobdagi HAR BIR modda
 * raqami ruxsat etilgan ro'yxat bilan solishtiriladi (`unverifiedCitations`);
 * begona raqam bo'lsa javob qabul qilinmaydi (tiered.js qayta so'raydi yoki
 * lokal javobga qaytadi).
 */
const { searchLaws } = require("../localAI/search");
const { retrieveLegalContext } = require("../legalRetrieval");

const VECTOR_TIMEOUT_MS = 4000;

const withTimeout = (p, ms) =>
  Promise.race([p, new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms))]);

const keyOf = (code, num) => `${code}|${String(num).trim()}`;

/** @returns {Promise<{ list: object[], allowed: Set<string> }>} */
async function gatherSources({ query, lang, codes, cfg, localAnswer }) {
  const ru = lang === "ru";
  const out = new Map();
  const add = (s) => {
    if (!s.articleNumber || out.size >= cfg.ragArticles || out.has(keyOf(s.lawCode, s.articleNumber))) return;
    const text = String(s.text || "").replace(/\s+/g, " ").trim();
    if (text) out.set(keyOf(s.lawCode, s.articleNumber), { ...s, text: text.slice(0, cfg.articleChars) });
  };

  const [bm25, vector] = await Promise.all([
    searchLaws(query, { lang, codes, limit: cfg.ragArticles }).catch(() => null),
    withTimeout(retrieveLegalContext(query, cfg.ragArticles, codes || null), VECTOR_TIMEOUT_MS).catch(() => null),
  ]);

  // BM25 va vektor natijalari navbatma-navbat — ikkalasining eng yaxshisi kirsin
  const a = (bm25?.hits || []).map((h) => {
    const d = bm25.state.docs[h.docIdx];
    return {
      lawCode: d.lawCode,
      lawName: ru && d.lawNameRu ? d.lawNameRu : d.lawName,
      articleNumber: d.articleNumber,
      title: (ru && d.titleRu) || d.title || "",
      text: (ru && d.textRu) || d.text,
    };
  });
  // Vektor natijasi faqat o'zbekcha — rus tilida RASMIY ruscha matn lokal indeksdan olinadi
  const docs = bm25?.state?.docs || [];
  const b = (vector?.chunks || []).map((c) => {
    const d = ru ? docs.find((x) => x.lawCode === c.lawCode && x.articleNumber === String(c.articleNumber)) : null;
    return {
      lawCode: c.lawCode,
      lawName: (d && d.lawNameRu) || c.lawName,
      articleNumber: c.articleNumber,
      title: (d && d.titleRu) || c.title || "",
      text: (d && d.textRu) || c.text,
    };
  });
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if (a[i]) add(a[i]);
    if (b[i]) add(b[i]);
  }

  const list = [...out.values()];
  const allowed = new Set(list.map((s) => String(s.articleNumber)));
  for (const n of citedNumbers(localAnswer || "")) allowed.add(n);
  return { list, allowed };
}

/** Matndagi modda raqamlari: "44-modda", "155- moddasi", "статья 44", "44-статья". */
function citedNumbers(text) {
  const found = new Set();
  const res = [
    /(\d{1,4}(?:[-–]\d{1,3})*)\s*[-–]?\s*modda/gi,
    /стать(?:я|и|е|ей|ю|ёй)\s*(\d{1,4}(?:[-–]\d{1,3})*)/gi,
    /(\d{1,4}(?:[-–]\d{1,3})*)\s*[-–]?\s*стать/gi,
    /(?:ст\.|article)\s*(\d{1,4}(?:[-–]\d{1,3})*)/gi,
  ];
  for (const re of res) for (const m of String(text).matchAll(re)) found.add(m[1].replace(/–/g, "-"));
  return found;
}

function unverifiedCitations(answer, allowed) {
  return [...citedNumbers(answer)].filter((n) => !allowed.has(n));
}

function sourcesBlock(list, lang) {
  if (!list.length) {
    return lang === "ru"
      ? "ИСТОЧНИКИ: по этому вопросу в базе статьи не найдены."
      : "MANBALAR: bu savol bo'yicha bazadan modda topilmadi.";
  }
  const head = lang === "ru" ? "ИСТОЧНИКИ (база Lex.uz):" : "MANBALAR (Lex.uz bazasi):";
  const art = lang === "ru" ? "статья" : "modda";
  const body = list.map((s, i) => {
    const num = lang === "ru" ? `${art} ${s.articleNumber}` : `${s.articleNumber}-${art}`;
    return `[${i + 1}] ${s.lawName}, ${num}${s.title ? ` — ${s.title}` : ""}\n${s.text}`;
  });
  return [head, ...body].join("\n\n");
}

module.exports = { gatherSources, citedNumbers, unverifiedCitations, sourcesBlock };
