"use strict";
/**
 * LOKAL AI — SAYTDAGI TAYYOR SAVOL-JAVOBLARDAN MOSINI TOPISH.
 *
 * Manba: `services/qaContent/` — saytning "Savol-javob markazi"
 * (/savollar). Har bir javob qo'lda yozilgan, haqiqiy moddalarga
 * (`refs`) bog'langan va havolalari bazadan tekshirilgan
 * (`scripts/verifyQaRefs.js`). Savol ular bilan MA'NODA mos kelsa,
 * javobga shu tayyor tushuntirish ham qo'shiladi.
 *
 * ⚠️ Moslik QAT'IY: savol so'zlarining ham, tayyor savol so'zlarining
 * ham kamida yarmi ustma-ust tushishi shart. Yumshoq moslik boshqa
 * mavzudagi tayyor javobni "topib", foydalanuvchini chalg'itardi.
 */
const { QUESTIONS } = require("../qaContent");
const { queryPrefixes } = require("./text");

const MIN_OVERLAP = 2;
const MIN_RATIO = 0.5;

let prepared = null;

function prepare() {
  if (prepared) return prepared;
  prepared = QUESTIONS.map((q) => ({
    q,
    uz: new Set(queryPrefixes(q.q.uz)),
    ru: new Set(queryPrefixes(q.q.ru)),
  }));
  return prepared;
}

/**
 * @returns {null | { q: object, score: number }} eng mos tayyor savol
 */
function matchQa(query, lang = "uz", codes = null) {
  const qTokens = new Set(queryPrefixes(query));
  if (qTokens.size < 2) return null;

  /* Savol mavzusi (kodeksi) ma'lum bo'lsa — faqat shu kodeksga tayanadigan
     tayyor javob olinadi. Aks holda "mehnat shartnomasi qanday tuziladi"
     savoliga umumiy (fuqarolik) shartnoma haqidagi javob tanlanardi. */
  const wanted = (Array.isArray(codes) ? codes : [codes]).filter(Boolean);
  const fits = (item) => !wanted.length || item.q.refs.some((r) => wanted.includes(r.code));

  let best = null;
  for (const item of prepare()) {
    if (!fits(item)) continue;
    const target = lang === "ru" && /[а-яё]/i.test(query) ? item.ru : item.uz;
    if (!target.size) continue;
    let overlap = 0;
    for (const t of qTokens) if (target.has(t)) overlap++;
    if (overlap < MIN_OVERLAP) continue;
    const ratioQa = overlap / target.size;
    const ratioQ = overlap / qTokens.size;
    if (ratioQa < MIN_RATIO || ratioQ < MIN_RATIO) continue;
    const score = ratioQa + ratioQ;
    if (!best || score > best.score) best = { q: item.q, score };
  }
  return best;
}

module.exports = { matchQa };
