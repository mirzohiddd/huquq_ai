"use strict";
/**
 * SAVOL-JAVOB MARKAZI — barcha savollarni yig'adi va tekshiradi.
 *
 * ⚠️ NIMA UCHUN BU BO'LIM BOR (AEO/GEO):
 * `/qonun/MK/106` sahifasi "Mehnat kodeksi 106-modda" so'roviga javob
 * beradi. Lekin odam ham, AI tizimi ham qonunni MODDA RAQAMI bilan
 * emas, SAVOL bilan qidiradi: "mehnat shartnomasi yozma bo'lishi
 * shartmi?". Shu oraliqni to'ldirish uchun savol shaklidagi ochiq
 * sahifalar qurildi — ular `QAPage` sxemasi bilan beriladi, ya'ni
 * javob mashinalari (Google AI Overview, Perplexity, ChatGPT) uchun
 * tayyor, manbasi ko'rsatilgan javob bo'ladi.
 *
 * ⚠️ MATNDA ANIQ RAQAM YO'Q — muddat, foiz, summa va modda raqami
 * yozilmaydi. Har bir savol `refs` orqali HAQIQIY moddaga bog'langan
 * va modda matni sahifa chizilganda `LegalChunk` dan JONLI olinadi
 * (`qaPages.js` → `attachQuotes`). lex.uz yangilanganda javob ham
 * o'z-o'zidan yangilanadi.
 *
 * ⚠️ HAVOLALAR BAZADAN TEKSHIRILADI: `node scripts/verifyQaRefs.js`.
 * Faqat "modda bor" tekshiruvi YETARLI EMAS — mavjud, lekin noto'g'ri
 * moddaga havola sahifada jimgina noto'g'ri iqtibos ko'rsatardi,
 * shuning uchun skript moddaning SARLAVHASINI ham chiqaradi.
 */
const { AREAS } = require("./areas");

const FILES = [
  "mehnat-a",
  "mehnat-b",
  "oila-a",
  "oila-b",
  "meros-a",
  "meros-b",
  "uy-joy-a",
  "uy-joy-b",
  "istemolchi-a",
  "istemolchi-b",
  "shartnoma-a",
  "shartnoma-b",
  "jinoyat-a",
  "jinoyat-b",
  "mamuriy",
  "soliq",
  "konstitutsiya-a",
  "konstitutsiya-b",
];

const QUESTIONS = FILES.flatMap((f) => require(`./${f}`));

/* ── Tekshiruvlar: xato MODUL YUKLANISHIDA darhol chiqadi ──
   Bu xatolar "jim" turadi — savol shunchaki ro'yxatdan tushib qoladi
   yoki sahifa yarim chiziladi va sezilmasdan qolib ketadi. */
(function validate() {
  const areaKeys = new Set(AREAS.map((a) => a.key));
  const seen = new Set();

  for (const q of QUESTIONS) {
    const at = `savol "${q?.slug || "(slug yo'q)"}"`;
    if (!q.slug || !/^[a-z0-9-]+$/.test(q.slug)) {
      throw new Error(`${at}: slug yo'q yoki noto'g'ri (faqat a-z, 0-9, -)`);
    }
    if (seen.has(q.slug)) throw new Error(`${at}: slug TAKRORLANGAN`);
    seen.add(q.slug);

    if (!areaKeys.has(q.area)) throw new Error(`${at}: noma'lum soha "${q.area}"`);

    for (const field of ["q", "short"]) {
      if (!q[field]?.uz || !q[field]?.ru) {
        throw new Error(`${at}: "${field}" ikkala tilda bo'lishi kerak`);
      }
    }
    if (!q.body?.uz?.length || !q.body?.ru?.length) {
      throw new Error(`${at}: "body" ikkala tilda bo'lishi kerak`);
    }
    if (!q.refs?.length) {
      throw new Error(`${at}: kamida bitta qonun havolasi (refs) bo'lishi shart`);
    }
    for (const r of q.refs) {
      if (!r.code || !r.article) throw new Error(`${at}: refs to'liq emas`);
    }
  }
})();

const bySlug = new Map(QUESTIONS.map((q) => [q.slug, q]));

/** Bitta savol yoki `undefined`. */
const findQuestion = (slug) => bySlug.get(String(slug || ""));

/** Soha bo'yicha savollar (tartib — fayllardagi tartib). */
const questionsOfArea = (key) => QUESTIONS.filter((q) => q.area === key);

/** Sahifada ko'rsatiladigan til varianti. */
const pick = (v, lang) => (lang === "ru" ? v.ru : v.uz);

module.exports = {
  QUESTIONS,
  AREAS,
  findQuestion,
  questionsOfArea,
  pick,
};
