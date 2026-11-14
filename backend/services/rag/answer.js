"use strict";
/**
 * LLM JAVOBI + ISHONCH TEKSHIRUVI — OpenAI va bepul zanjir uchun YAGONA yo'l.
 *
 * Bosqichlar:
 *   1. model javob yozadi (faqat berilgan manbalar asosida);
 *   2. javobdagi HAR BIR modda raqami ruxsat etilganlar bilan solishtiriladi;
 *      begona raqam bo'lsa — bir marta tuzatish so'raladi;
 *   3. baribir qolsa — faqat o'sha jumlalar olib tashlanadi (citations.js);
 *      avval shu yerda BUTUN javob tashlanib, "topilmadi" shabloni chiqardi;
 *   4. ichki kontekst oshkor bo'lsa ("taqdim etilgan manbalarda…") — qayta
 *      yozdiriladi;
 *   5. "Manbalar" bo'limini tizim o'zi qo'shadi — tekshirilgan, havolali.
 * null — javob yaroqsiz (chaqiruvchi zaxiraga o'tadi).
 */
const { unverifiedCitations } = require("../llm/grounded");
const { fixMessage } = require("../llm/prompts");
const { stripUnverified, attachSources } = require("./citations");

/* ⚠️ "Manbalar" so'zining O'ZI oshkor qilish emas (javobda shunday bo'lim
   bor) — faqat ichki kontekstga ishora qiluvchi iboralar ushlanadi. */
const LEAK = /MANBALAR \(Lex|TEKSHIRILGAN JAVOB|SAYT BILIMI|taqdim etilgan (manba|ma['ʼ‘’]?lumot)|berilgan manbalar|manbalarda (yo['ʼ‘’]?q|keltirilgan|ko['ʼ‘’]?rsatilgan|mavjud)|sayt(ning)? javobi|ИСТОЧНИКИ \(база|ЗНАНИЯ САЙТА|в (предоставленных|приведённых|приведенных) источник|ответ сайта/i;
const LEAK_FIX = {
  uz: "Javobni qayta yozing: \"taqdim etilgan manbalar\", \"manbalarda yo'q\", \"sayt javobi\" kabi iboralarni ishlatmang — bor moddalar asosida to'g'ridan-to'g'ri yurist kabi javob bering.",
  ru: "Перепишите ответ: не упоминайте «предоставленные источники», «в источниках нет», «ответ сайта» — отвечайте прямо, как юрист, на основе имеющихся статей.",
};

/**
 * @param {{ call: (msgs: object[]) => Promise<{text: string, model: string}>, messages: object[],
 *           allowed: Set<string>, list: object[], lang: string, voice?: boolean }} p
 * @returns {Promise<{ text, model, provider?, sources: object[], guard: object }|null>}
 */
async function groundedAnswer({ call, messages, allowed, list, refs = [], lang, voice = false, deadline = 0 }) {
  // Vaqt oz qolgan bo'lsa qayta so'ralmaydi — tasdiqlanmagan jumla shunchaki olib tashlanadi
  const tight = () => deadline && deadline - Date.now() < 14000;
  const guard = { unverified: [], retried: false, stripped: false, leakFixed: false };
  let out = await call(messages);
  let text = out.text;

  let bad = unverifiedCitations(text, allowed);
  if (bad.length) {
    guard.unverified = bad;
    const fixed = tight() ? null : await call([...messages, { role: "assistant", content: text }, { role: "user", content: fixMessage(bad, lang) }]).catch(() => null);
    if (fixed) {
      guard.retried = true;
      out = fixed;
      text = out.text;
      bad = unverifiedCitations(text, allowed);
    }
    if (bad.length) {
      const cleaned = stripUnverified(text, bad, lang);
      if (!cleaned) {
        console.warn(`[AI] tekshirilmagan modda (${bad.join(", ")}) — javob yaroqsiz`);
        return null;
      }
      console.warn(`[AI] tekshirilmagan modda (${bad.join(", ")}) — jumlalar olib tashlandi`);
      guard.stripped = true;
      text = cleaned;
    }
  }

  if (LEAK.test(text) && !tight()) {
    const again = await call([...messages, { role: "assistant", content: text }, { role: "user", content: LEAK_FIX[lang === "ru" ? "ru" : "uz"] }]);
    if (LEAK.test(again.text) || unverifiedCitations(again.text, allowed).length) return null;
    guard.leakFixed = true;
    out = again;
    text = again.text;
  }

  // Chiqish chegarasida uzilgan javob — chala qolgan oxirgi jumla/band olib tashlanadi
  if (out.truncated) {
    const cut = text.replace(/\n[^\n]*$/, "").trim();
    if (cut.length > text.length * 0.6) text = cut;
  }
  // Ichi bo'sh qolgan oxirgi sarlavha ("**Nima qilish kerak**" va h.k.) ko'rsatilmaydi
  text = text.replace(/\n+(?:#{1,4}\s*)?\*\*[^*\n]{3,60}\*\*:?\s*$/, "").trim();

  // Ovozli javobda havola ro'yxati o'qilmaydi
  const final = voice ? { text, sources: [] } : attachSources(text, [...list, ...refs], lang);
  return { text: final.text, model: out.model, provider: out.provider, sources: final.sources, guard };
}

module.exports = { groundedAnswer };
