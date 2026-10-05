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
const { composeAnswer, localText } = require("./compose");
const { composeSituation } = require("./composeSituation");
const { detectSituation, pinnedDocs } = require("./situations");
const { matchIntent } = require("./intents");
const { searchTopics } = require("./lessonTopics");
const { composeTopic } = require("./composeTopic");
const { tokenize, isUzCyrillic, uzCyrToLatin } = require("./text");
const { warmLawIndex, getIndex } = require("./lawIndex");
const { parseArticleNumbers, parseLawCodes } = require("../articleLookup");
const { colloquial } = require("./vocab");
const { outOfScopeAnswer } = require("./outOfScope");

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

/** Vaziyat (barcha tillar) yoki dars mavzusiga biriktirilgan niyat (o'zbekcha). */
function pickTarget(text, uz) {
  const first = uz ? matchIntent(text, true) : null;
  if (first) return { topic: first };
  const situation = detectSituation(text);
  if (situation) return { situation };
  const topic = uz ? matchIntent(text) : null;
  return topic ? { topic } : null;
}

/* Mavzu qidiruvi natijasiga ishonch: savol so'zlarining ko'pchiligi mos
   kelishi VA mavzu sarlavhasida yoki ibora sifatida uchrashi shart.
   Chegaralar 45 ta real savol bo'yicha tanlangan — past chegarada
   aloqasiz mavzular ("fuqarolikdan chiqish" → bojxona) o'tib ketardi. */
function confident(r, minCov = 0.6) {
  // Bitta ma'noli so'zli savol ("prokuror nima qiladi?") — so'z sarlavhada bo'lsa yetarli
  if (r.coverage === 1 && r.headFit === 1) return true;
  return r.coverage >= minCov && r.matched >= 2 && (r.headFit >= 0.5 || r.phrase >= 0.5);
}

/** Muqobil javob (qayta generatsiya uchun) — topilmasa null. */
async function alternative({ query, uz, exact, lang, codes, strict, skipTopics, done }) {
  if (!skipTopics && uz && !exact) {
    const topics = searchTopics(query, 4).filter((t) => confident(t, 0.5));
    const first = pickTarget(query, uz)?.topic;
    const t = topics.find((x) => x.topic !== first);
    if (t) return done(composeTopic({ topic: t.topic, state: await getIndex(), lang }));
  }
  const { hits, terms } = await searchLaws(query, { lang, codes, limit: 6 });
  const res = composeAnswer({ hits, state: await getIndex(), terms, qa: null, lang, minCoverage: STRICT_COVERAGE, minMatched: 2, needTitle: uz && !strict });
  return res.found ? done(res) : null;
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
  variant = 0,
}) {
  // O'zbek kirill yozuvi — baza lotin yozuvida, javob esa o'zbekcha
  // (til aniqlagich kirillni "ru" deb hisoblaydi).
  const uzCyr = isUzCyrillic(msg);
  if (uzCyr) lang = "uz";
  const L = localText(lang);
  if (hasImage) return { answer: L.image, category, provider: "local", found: false };

  let query = uzCyr ? uzCyrToLatin(msg) : msg;
  const done = ({ answer, found }) => ({ answer, category, provider: "local", found });

  // "Qaysi moddaga asoslanding?" — OLDINGI savol butunlay qayta ishlanadi
  // (javobi qaysi yo'ldan kelgan bo'lsa ham — vaziyat, mavzu yoki modda).
  if (prevUserText && FOLLOW_UP.test(msg) && tokenize(query).length < 7) {
    query = prevUserText.slice(-600);
  } else if (tokenize(query).length < 2 && prevUserText) {
    // Qisqa davom savoli ("muddati qancha?") — mavzu oldingi savoldan olinadi
    query = `${prevUserText} ${query}`.slice(-600);
  }

  // Kundalik so'zlarga qonun atamasi qo'shiladi ("maosh" → "ish haqi") — vocab.js
  query = colloquial(query);

  try {
    const state = await getIndex();
    const uz = lang !== "ru";
    // Aniq modda so'ralgan ("JK 169-modda") — vaziyat/mavzu emas, o'sha modda
    const exact = parseArticleNumbers(query).length > 0 && parseLawCodes(query).length > 0;

    /* QAYTA GENERATSIYA (`variant`): javob boshqa yo'ldan olinadi —
       1: kuratorlik qilingan vaziyat/niyat chetlab o'tiladi (dars mavzusi
       qidiruvi), 2: faqat qonun matni bo'yicha qidiruv. Hech qaysi yo'l
       natija bermasa — odatdagi javob (variant 0) qaytadi. */
    const v = variant % 3;
    if (v > 0) {
      const alt = await alternative({ query, uz, exact, lang, codes, strict, skipTopics: v === 2, done });
      if (alt) return alt;
    }

    // 1–2. Hayotiy vaziyat yoki ko'p so'raladigan savol (kuratorlik qilingan)
    let target = exact ? null : pickTarget(query, uz);
    if (!target && !exact && prevUserText && tokenize(query).length < 4) {
      target = pickTarget(prevUserText, uz);
    }
    if (target?.situation) {
      const pinned = pinnedDocs(target.situation, state);
      return done(composeSituation({ situation: target.situation, pinned, state, lang }));
    }
    if (target?.topic) return done(composeTopic({ topic: target.topic, state, lang }));

    // Sayt bazasida yo'q soha (pensiya, fuqarolik…) — aloqasiz modda o'rniga halol javob
    const scoped = exact ? null : outOfScopeAnswer(query, lang);
    // `scoped` — mavzu filtri rad etgan savolda ham bu halol javob ko'rsatilsin (legalAI.js)
    if (scoped) return { ...done({ answer: scoped, found: false }), scoped: true };

    // 3. Dars mavzulari bo'yicha qidiruv — faqat YUQORI ishonchda (lessonTopics.js)
    // Savolda kodeks aytilgan bo'lsa ("Fuqarolik kodeksi bo'yicha da'vo muddati") —
    // faqat o'sha kodeksga havolali mavzular (avval Soliq kodeksi darsi chiqardi)
    const named = parseLawCodes(query);
    const topics = uz && !exact
      ? searchTopics(query, named.length ? 12 : 4).filter((t) => !named.length || t.topic.lawRefs.some((r) => named.includes(r.code))).slice(0, 4)
      : [];
    if (topics[0] && confident(topics[0])) {
      const related = topics.slice(1).filter((t) => t.topic.lawRefs.length && confident(t, 0.5)).slice(0, 2);
      return done(composeTopic({ topic: topics[0].topic, state, lang, related: related.map((r) => r.topic) }));
    }

    // 4. Qonun matni bo'yicha qidiruv (aniq modda, tayyor savol-javob)
    const qa = strict ? null : matchQa(query, lang, codes);
    const { hits, terms } = await searchLaws(query, { lang, codes, limit: 6 });
    const opts = strict || uz ? { minCoverage: STRICT_COVERAGE, minMatched: 2, needTitle: uz } : {};
    const res = composeAnswer({ hits, state, terms, qa, lang, ...opts });
    if (res.found || strict) return done(res);

    // 5. Topilmadi — to'qib chiqarilgan javob o'rniga halol javob + yaqin mavzular
    // Yaqin mavzu faqat kamida 2 ta savol so'zi mos kelsa — avval bitta umumiy
    // so'z bilan aloqasiz mavzular ("Ko'p uchraydigan xatolar") taklif qilinardi
    const near = topics.filter((t) => t.coverage >= 0.5 && t.matched >= 2).slice(0, 3).map((t) => t.topic.heading);
    return done({ answer: near.length ? `${L.notFound}\n\n${L.near}\n${near.map((h) => `• «${h}»`).join("\n")}` : L.notFound, found: false });
  } catch (err) {
    console.error("Lokal AI xatosi:", err.message);
    return { answer: L.notFound, category, provider: "local", found: false };
  }
}

module.exports = { localLegalAnswer, warmLawIndex };
