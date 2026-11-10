"use strict";
/**
 * SAYTNING O'Z BILIMI — LLM uchun qo'shimcha kontekst (2026-11-09).
 *
 * Foydalanuvchi talabi: AI javobni "butun sayt, butun tizimdan" izlasin —
 * faqat Lex.uz moddalaridan emas. Shuning uchun moddalarga qo'shimcha:
 *   1) saytning tayyor savol-javoblari (qaContent, haqiqiy moddalarga bog'langan);
 *   2) darslar mavzulari (oddiy tildagi tushuntirish, misol, ogohlantirish).
 * Bu matnlar modda raqami keltirish uchun asos EMAS (u faqat MANBALARdan),
 * ular tushuntirish va amaliy maslahat uchun. Qo'lda yozilgan savol-javobdagi
 * modda raqamlari tekshirilgan (scripts/verifyQaRefs.js), shuning uchun
 * ular ham ruxsat etilganlar ro'yxatiga qo'shiladi (`numbers`).
 */
const { searchTopics } = require("../localAI/lessonTopics");
const { matchQa } = require("../localAI/qaMatch");

const MIN_COVERAGE = 0.5; // bitta so'z tasodifan mos kelgan mavzu shovqin bo'ladi

function siteContext(query, lang, codes) {
  const ru = lang === "ru";
  const parts = [];
  const numbers = new Set();
  try {
    const qa = matchQa(query, lang, codes) || matchQa(query, lang);
    if (qa) {
      const q = qa.q;
      const pick = (v) => (v && (ru ? v.ru || v.uz : v.uz)) || "";
      const body = [].concat(pick(q.body) || []).join("\n").slice(0, 1800);
      parts.push(`${ru ? "Вопрос-ответ сайта" : "Saytdagi savol-javob"}: ${pick(q.q)}\n${pick(q.short)}\n${body}`);
      for (const r of q.refs || []) if (r.article) numbers.add(String(r.article));
    }
  } catch (_) {
    /* savol-javob bazasi bo'lmasa — o'tkazib yuboriladi */
  }
  try {
    for (const r of searchTopics(query, 3)) {
      if (r.coverage < MIN_COVERAGE) continue;
      const t = r.topic;
      const text = [t.text, t.example && `Misol: ${t.example}`, t.warning && `Diqqat: ${t.warning}`]
        .filter(Boolean)
        .join("\n")
        .slice(0, 1200);
      parts.push(`${ru ? "Урок" : "Dars"} «${t.lesson}» — ${t.heading || ""}\n${text}`);
      if (parts.length >= 3) break;
    }
  } catch (_) {
    /* darslar yuklanmagan bo'lsa — o'tkazib yuboriladi */
  }
  if (!parts.length) return { text: "", numbers };
  const head = ru
    ? "ЗНАНИЯ САЙТА (уроки и готовые ответы — для объяснения, номера статей только из ИСТОЧНИКОВ):"
    : "SAYT BILIMI (darslar va tayyor javoblar — tushuntirish uchun; modda raqami faqat MANBALARdan):";
  return { text: `${head}\n\n${parts.join("\n\n")}`, numbers };
}

module.exports = { siteContext };
