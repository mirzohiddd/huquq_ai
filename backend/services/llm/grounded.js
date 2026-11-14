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
const { hybridRetrieve } = require("../rag/retrieve");
const { understand } = require("../rag/understand");
const { siteContext } = require("./siteContext");
const { getIndex } = require("../localAI/lawIndex");
const { SITE_URL, path } = require("../seoPages/meta");

/* 2026-11-14: qidiruv gibrid bo'ldi (rag/retrieve.js — modda raqami + xom
   matn + normallashtirilgan savol + semantik). Bu funksiya uni LLM uchun
   tayyorlaydi: manbalar ro'yxati, ruxsat etilgan modda raqamlari, qo'shimcha
   kontekst. `u` — so'rov tahlili (rag/understand.js); berilmasa qoidalar bilan. */
/** @returns {Promise<{ list: object[], allowed: Set<string>, extra: string, ambiguous: object|null, trace: object }>} */
async function gatherSources({ query, lang, codes, cfg, localAnswer, msg, history, u }) {
  const text = msg || query;
  const und = u || (await understand({ msg: text, history, lang, codes, useLlm: false }));
  const r = await hybridRetrieve({ msg: text, u: und, lang, codes, limit: cfg.ragArticles, articleChars: cfg.articleChars });
  const list = r.docs;

  const allowed = new Set(list.map((s) => String(s.articleNumber)));
  for (const n of citedNumbers(localAnswer || "")) allowed.add(n);
  /* Foydalanuvchi O'ZI yozgan raqam va yordamchining oldingi (o'sha paytda
     tekshirilgan) javoblaridagi moddalar — to'qima emas. Avval model
     "135-modda" ni shunchaki qayta tilga olgani uchun javob rad etilardi. */
  for (const n of r.numbers) allowed.add(n);
  for (const m of history || []) if (m.role === "assistant") for (const n of citedNumbers(m.content || "")) allowed.add(n);
  // Darslar va tayyor savol-javoblar ham (2026-11-09) — "butun saytdan" izlash
  const site = siteContext(und.standalone || query || text, lang, codes);
  for (const n of site.numbers) allowed.add(n);

  const ru = lang === "ru";
  const names = (c) => c.candidates.slice(0, 16).map((x) => `${x.lawName}${x.title ? ` («${x.title}»)` : ""}`).join("; ");
  const notes = [];
  if (r.ambiguous) {
    notes.push(ru
      ? `СТАТЬЯ ${r.ambiguous.number} есть в нескольких законах, и из разговора неясно, какой нужен: ${names(r.ambiguous)}. Не пересказывайте её содержание наугад — перечислите варианты и спросите, какой закон имеется в виду.`
      : `${r.ambiguous.number}-MODDA bir nechta hujjatda bor va suhbatdan qaysi biri kerakligi aniq emas: ${names(r.ambiguous)}. Mazmunini taxmin qilib yozmang — variantlarni sanab, qaysi qonun ekanini so'rang.`);
  }
  for (const o of r.others) {
    if (o.candidates.length) notes.push(ru ? `Статья ${o.number} есть и в других законах: ${names(o)}.` : `${o.number}-modda boshqa hujjatlarda ham bor: ${names(o)}.`);
  }
  const extra = [site.text, ...notes].filter(Boolean).join("\n\n");

  /* Sayt bilimi/lokal javob orqali ruxsat etilgan, lekin qidiruvda chiqmagan
     moddalar (masalan MK 560) ham "Manbalar"da havolasi bilan ko'rinsin —
     faqat savol sohasidagi kodekslardan, matnsiz (LLM kontekstiga qo'shilmaydi). */
  const have = new Set(list.map((d) => d.id));
  const scope = new Set([...(und.codes || []), ...list.map((d) => d.lawCode)]);
  const refs = (await getIndex()).docs
    .filter((d) => allowed.has(String(d.articleNumber)) && scope.has(d.lawCode) && !have.has(`${d.lawCode}:${d.articleNumber}`))
    .slice(0, 40)
    .map((d) => ({ id: `${d.lawCode}:${d.articleNumber}`, lawCode: d.lawCode, lawName: ru && d.lawNameRu ? d.lawNameRu : d.lawName, articleNumber: d.articleNumber, title: (ru && d.titleRu) || d.title || "", score: null, sourceUrl: `${SITE_URL}${path.article(d.lawCode, d.articleNumber)}` }));
  return { list, refs, allowed, extra, ambiguous: r.ambiguous, trace: r.trace };
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

function sourcesBlock(list, lang, extra = "") {
  const tail = extra ? `\n\n${extra}` : "";
  /* Modda topilmasa ham model RAD ETMASIN (2026-11-09): umumiy tamoyillar
     bilan javob beradi, faqat modda raqamini yozmaydi. */
  if (!list.length) {
    return (lang === "ru"
      ? "ИСТОЧНИКИ: точных статей по вопросу нет — ответьте по общим принципам права Узбекистана, без номеров статей."
      : "MANBALAR: aniq modda matni yo'q — O'zbekiston huquqining umumiy tamoyillari asosida javob bering, modda raqamisiz.") + tail;
  }
  const head = lang === "ru" ? "ИСТОЧНИКИ (база Lex.uz):" : "MANBALAR (Lex.uz bazasi):";
  const art = lang === "ru" ? "статья" : "modda";
  const body = list.map((s, i) => {
    const num = lang === "ru" ? `${art} ${s.articleNumber}` : `${s.articleNumber}-${art}`;
    // Aniq so'ralgan modda ALOHIDA belgilanadi — boshqalar orasida yo'qolmasin
    const mark = s.direct ? (lang === "ru" ? " ← ПОЛЬЗОВАТЕЛЬ СПРОСИЛ ИМЕННО ЭТУ СТАТЬЮ" : " ← FOYDALANUVCHI AYNAN SHU MODDANI SO'RADI") : "";
    return `[${i + 1}] ${s.lawName}, ${num}${s.title ? ` — ${s.title}` : ""}${mark}\n${s.text}`;
  });
  return [head, ...body].join("\n\n") + tail;
}

module.exports = { gatherSources, citedNumbers, unverifiedCitations, sourcesBlock };
