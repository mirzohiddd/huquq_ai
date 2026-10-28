"use strict";
/**
 * SAYT BO'LIMLARIGA OID SO'ROVLAR (2026-10-28).
 *
 * "Testlar ber", "dars ber", "Konstitutsiyani ko'rsat" — bu huquqiy savol
 * emas, saytdagi bo'limni so'rash. Avval bunday xabar qonun bazasidan
 * qidirilib, "aniq mos modda topilmadi" + tasodifiy mavzular ("Ekspeditorning
 * javobgarligi") qaytardi — foydalanuvchi AI'ni tushunmaydi deb o'ylardi.
 * Endi qisqa javob va bo'limga havola beriladi.
 *
 * Faqat QISQA (≤ 7 so'z), raqamsiz xabar — "Konstitutsiya 25-modda" yoki
 * "testlar bo'yicha ish beruvchi..." kabi haqiqiy savollar bu yerga tushmaydi.
 */
const { normalize, isUzCyrillic, uzCyrToLatin } = require("./text");

const SECTIONS = [
  {
    re: /(^|\s)(test|testlar\S*|testni|testga|тест\S*|viktorina|викторин\S*)(\s|$)/,
    path: "/tests",
    uz: "**Huquqiy testlar** — mavzular bo'yicha savollar, har javobdan keyin to'g'ri variant va izoh ko'rsatiladi. Bilimingizni sinab ko'ring:",
    ru: "**Юридические тесты** — вопросы по темам, после каждого ответа показывается правильный вариант и пояснение. Проверьте свои знания:",
    link: { uz: "Testlarni boshlash", ru: "Начать тесты" },
  },
  {
    re: /(^|\s)(dars|darslar\S*|darslik\S*|darsni|урок\S*|курс\S*|kurs\S*)(\s|$)/,
    path: "/lessons",
    uz: "**Darslar** — huquqni noldan, oddiy tilda o'rganish: mehnat, oila, iste'molchi, meros, jinoiy javobgarlik va boshqa mavzular, har birida misollar va qonun havolalari.",
    ru: "**Уроки** — право простым языком с нуля: труд, семья, права потребителей, наследство, уголовная ответственность и другие темы, с примерами и ссылками на законы.",
    link: { uz: "Darslarni ochish", ru: "Открыть уроки" },
  },
  {
    re: /(^|\s)(kutubxona\S*|kodeks(lar)?\S*|qonunlar|библиотек\S*|кодекс(ы|ов)?)(\s|$)/,
    path: "/library",
    askOnly: true, // "Mehnat kodeksi" — huquqiy savol, faqat "kodekslarni ko'rsat" bu yerga
    uz: "**Qonunlar kutubxonasi** — O'zbekistonning amaldagi kodekslari moddama-modda, qidiruv bilan (manba: Lex.uz).",
    ru: "**Библиотека законов** — действующие кодексы Узбекистана постатейно, с поиском (источник: Lex.uz).",
    link: { uz: "Kutubxonani ochish", ru: "Открыть библиотеку" },
  },
  {
    re: /(^|\s)(konstitutsiya\S*|конституци\S*)(\s|$)/,
    path: "/constitution",
    askOnly: true,
    uz: "**Konstitutsiya** — to'liq matn, boblar bo'yicha mundarija va qidiruv bilan.",
    ru: "**Конституция** — полный текст с оглавлением по главам и поиском.",
    link: { uz: "Konstitutsiyani o'qish", ru: "Читать Конституцию" },
  },
  {
    re: /(^|\s)(tarif\S*|narx(lar)?\S*|obuna\S*|тариф\S*|цен(а|ы)|подписк\S*)(\s|$)/,
    path: "/#pricing",
    uz: "**Tariflar** — Bepul, Basic, Pro va Premium; pullik tariflarda kuchliroq AI, hujjat va rasm tahlili.",
    ru: "**Тарифы** — Бесплатный, Basic, Pro и Premium; в платных тарифах более мощный ИИ, анализ документов и фото.",
    link: { uz: "Tariflarni ko'rish", ru: "Смотреть тарифы" },
  },
];

// So'rov fe'llari (so'z boshi bilan) yoki faqat bo'lim nomi ("testlar", "testlar kerak")
const ASK = /(^|\s)(ber|bering|beri|kerak|korsat\S*|qayerda|bormi|och|ochib|ochish|ishla\S*|yech\S*|boshla\S*|oqi\S*|organ\S*|дай\S*|покаж\S*|где|нужн\S*|хочу|открой|начать)(\s|$)/;
const QUESTION_WORDS = /(huquq|majburiyat|modda|jazo|javobgar|shartnoma|muddat|прав|обязан|стать|наказ)/;

/** @returns {{ answer: string, category: string, found: true } | null} */
function siteHelp(msg = "", lang = "uz") {
  const raw = isUzCyrillic(msg) ? uzCyrToLatin(msg) : msg;
  const text = normalize(raw).replace(/\s+/g, " ").trim();
  if (!text || /\d/.test(text) || text.split(" ").length > 7) return null;
  const sec = SECTIONS.find((s) => s.re.test(text));
  if (!sec || QUESTION_WORDS.test(text)) return null;
  if ((sec.askOnly || text.split(" ").length > 2) && !ASK.test(text)) return null;
  const L = lang === "ru" ? "ru" : "uz";
  const tail =
    L === "ru"
      ? "Если у вас есть конкретный юридический вопрос — напишите его здесь, я отвечу."
      : "Aniq huquqiy savolingiz bo'lsa — shu yerga yozing, javob beraman.";
  return { answer: `${sec[L]}\n\n👉 [${sec.link[L]}](${sec.path})\n\n${tail}`, category: "boshqa", found: true };
}

module.exports = { siteHelp };
