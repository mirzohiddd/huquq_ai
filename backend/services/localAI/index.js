"use strict";
/**
 * LOKAL AI — TASHQI API'SIZ, FAQAT SAYT MA'LUMOTLARIDAN JAVOB.
 * ═══════════════════════════════════════════════════════════════
 *
 * Foydalanuvchi talabi (2026-09-26): "AI faqat sayt ichidagi
 * ma'lumotlardan javob yozsin, o'zidan to'qib chiqarmasin, hech qanday
 * API'larsiz" — Marsit loyihasidagi yordamchi kabi.
 *
 * Qanday ishlaydi:
 *   1. Savol tokenlarga bo'linadi va o'zaklanadi (text.js).
 *   2. Saytning tayyor savol-javoblari orasidan mosi qidiriladi (qaMatch.js).
 *   3. Barcha qonun moddalari bo'yicha BM25 qidiruv (lawIndex.js, search.js).
 *   4. Javob FAQAT topilgan matnlardan yig'iladi (compose.js).
 *
 * Hech qanday LLM, embedding yoki boshqa tashqi xizmat chaqirilmaydi.
 *
 * Rejim `.env` dagi `AI_MODE` bilan tanlanadi:
 *   AI_MODE=local (standart) — shu lokal tizim;
 *   AI_MODE=llm             — avvalgi LLM zanjiri (legalAI.js, o'zgarmagan).
 * Eski yo'l O'CHIRILMADI — kerak bo'lsa bitta o'zgaruvchi bilan qaytadi.
 */
const { searchLaws } = require("./search");
const { matchQa } = require("./qaMatch");
const { composeAnswer, localText } = require("./compose");
const { tokenize, isUzCyrillic, uzCyrToLatin } = require("./text");
const { warmLawIndex } = require("./lawIndex");

/* `strict` — kalit so'z filtri savolni "huquqiy emas" deb topgan holat.
   Bunday savol baribir bazadan qidiriladi (masalan "Himoyachi qachondan
   ishtirok etadi?" — filtrda "himoyachi" so'zi yo'q), lekin javob faqat
   savol so'zlarining KO'PCHILIGI (va kamida 2 tasi) moddada topilsagina
   beriladi — bitta tasodifiy so'z ("ob-havo") javobga asos bo'lmaydi. */
const STRICT_COVERAGE = 0.67;

function isLocalMode() {
  return String(process.env.AI_MODE || "local").toLowerCase() !== "llm";
}

/**
 * @param {{ msg: string, prevUserText?: string, lang?: string,
 *           codes?: string|string[]|null, category?: string, hasImage?: boolean,
 *           strict?: boolean }} p
 * @returns {Promise<{ answer: string, category: string, provider: string, found: boolean }>}
 */
async function localLegalAnswer({
  msg,
  prevUserText = "",
  lang = "uz",
  codes = null,
  category = "boshqa",
  hasImage = false,
  strict = false,
}) {
  // O'zbek kirill yozuvi — baza lotin yozuvida, javob esa o'zbekcha
  // (til aniqlagich kirillni "ru" deb hisoblaydi).
  const uzCyr = isUzCyrillic(msg);
  if (uzCyr) lang = "uz";
  const L = localText(lang);
  if (hasImage) return { answer: L.image, category, provider: "local", found: false };

  let query = uzCyr ? uzCyrToLatin(msg) : msg;

  // Qisqa davom savoli ("muddati qancha?") — mavzu oldingi savoldan olinadi
  if (tokenize(query).length < 2 && prevUserText) {
    query = `${prevUserText} ${query}`.slice(-600);
  }

  try {
    const qa = strict ? null : matchQa(query, lang);
    const { hits, state, terms } = await searchLaws(query, { lang, codes, limit: 6 });
    const opts = strict ? { minCoverage: STRICT_COVERAGE, minMatched: 2 } : {};
    const { answer, found } = composeAnswer({ hits, state, terms, qa, lang, ...opts });
    return { answer, category, provider: "local", found };
  } catch (err) {
    console.error("Lokal AI xatosi:", err.message);
    return { answer: L.notFound, category, provider: "local", found: false };
  }
}

module.exports = { isLocalMode, localLegalAnswer, warmLawIndex };
