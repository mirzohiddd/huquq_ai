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
 * 2026-09-27: chat uchun YAGONA yo'l. Avvalgi `AI_MODE=llm` almashtirgichi
 * va chatning LLM zanjiri foydalanuvchi talabi bilan olib tashlandi
 * ("API'larni butunlay olib tashla"). Kundalik tildagi savollar
 * ("meni erim urdi") endi hayotiy vaziyat sifatida taniladi — situations.js.
 */
const { searchLaws } = require("./search");
const { matchQa } = require("./qaMatch");
const { composeAnswer, composeSituation, localText } = require("./compose");
const { detectSituation, pinnedDocs } = require("./situations");
const { tokenize, isUzCyrillic, uzCyrToLatin } = require("./text");
const { warmLawIndex } = require("./lawIndex");

/* `strict` — kalit so'z filtri savolni "huquqiy emas" deb topgan holat.
   Bunday savol baribir bazadan qidiriladi (masalan "Himoyachi qachondan
   ishtirok etadi?" — filtrda "himoyachi" so'zi yo'q), lekin javob faqat
   savol so'zlarining KO'PCHILIGI (va kamida 2 tasi) moddada topilsagina
   beriladi — bitta tasodifiy so'z ("ob-havo") javobga asos bo'lmaydi. */
const STRICT_COVERAGE = 0.67;

/* "Qaysi moddaga asoslanding?", "isbot keltir" — o'zi mavzusiz davom savoli.
   Uning javobi OLDINGI savol vaziyatining moddalari bo'lishi kerak; avval u
   alohida qidirilib, "modda"/"asos" so'zlariga mos tasodifiy modda chiqardi. */
const FOLLOW_UP =
  /qaysi (modda|kodeks|qonun)|asoslan|isbot|dalil|manba|qayerda yozilgan|какая статья|какой закон|на основании|основани|докаж|источник/i;

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
    // Hayotiy vaziyat ("erim urdi", "ishdan haydashdi") — kalit so'z
    // filtri uni rad etgan bo'lsa ham (strict) bu aniq huquqiy savol.
    let situation = detectSituation(query);
    if (!situation && prevUserText && (FOLLOW_UP.test(msg) || tokenize(query).length < 4)) {
      situation = detectSituation(prevUserText);
    }
    if (situation) {
      const { hits, state, terms } = await searchLaws(`${query} ${situation.terms}`, {
        lang,
        codes: situation.codes,
        onlyCodes: true,
        limit: 6,
      });
      const pinned = pinnedDocs(situation, state);
      const { answer, found } = composeSituation({ situation, pinned, hits, state, terms, lang });
      return { answer, category, provider: "local", found };
    }

    const qa = strict ? null : matchQa(query, lang, codes);
    const { hits, state, terms } = await searchLaws(query, { lang, codes, limit: 6 });
    const opts = strict ? { minCoverage: STRICT_COVERAGE, minMatched: 2 } : {};
    const { answer, found } = composeAnswer({ hits, state, terms, qa, lang, ...opts });
    return { answer, category, provider: "local", found };
  } catch (err) {
    console.error("Lokal AI xatosi:", err.message);
    return { answer: L.notFound, category, provider: "local", found: false };
  }
}

module.exports = { localLegalAnswer, warmLawIndex };
