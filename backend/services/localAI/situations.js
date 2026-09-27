"use strict";
/**
 * LOKAL AI — HAYOTIY VAZIYATNI TANIB OLISH.
 *
 * ⚠️ Nima uchun kerak (2026-09-27): odamlar qonunni qonun tilida emas,
 * kundalik tilda so'raydi — "meni erim urdi", "ishdan haydashdi",
 * "qarzimni qaytarmayapti". Qonun matnida esa "oilaviy (maishiy)
 * zo'ravonlik", "mehnat shartnomasini bekor qilish" deyilgan. Faqat
 * so'zlar bo'yicha qidiruv ("erim", "urdi") bunday savolga HECH NARSA
 * topmasdi yoki tasodifiy moddani chiqarardi.
 *
 * Vaziyat tanilsa:
 *   • javob shu vaziyatga BEVOSITA tegishli, bazadan tekshirilgan
 *     moddalar (`pins`) bilan boshlanadi;
 *   • qo'shimcha qidiruv faqat vaziyat kodekslari ichida olib boriladi;
 *   • javobga amaliy "Nima qilish kerak" qadamlari qo'shiladi.
 *
 * Tartib muhim: aniqroq vaziyat oldinda (zo'ravonlik ajrashishdan,
 * aliment va bola masalasi umumiy ajrashishdan oldin).
 */
const { normalize, uzCyrToLatin, isUzCyrillic } = require("./text");

const SITUATIONS = [
  ...require("./situationsFamily"),
  ...require("./situationsWork"),
  ...require("./situationsCivil"),
  ...require("./situationsCrime"),
];

const clean = (s) => normalize(s).replace(/\s+/g, " ").trim();

/* Kirill matn ikki ko'rinishda tekshiriladi: asl holida (ruscha naqshlar)
   va lotinga o'girilgan holda (o'zbekcha). "Эрим мени урди" da ў/қ/ғ/ҳ
   harflari yo'q — `isUzCyrillic` uni tanimaydi, lekin bu o'zbekcha. */
function variants(text = "") {
  const out = [clean(isUzCyrillic(text) ? uzCyrToLatin(text) : text)];
  if (/[а-яё]/i.test(text)) out.push(clean(uzCyrToLatin(text)));
  return out.filter(Boolean);
}

/** @returns {object|null} birinchi mos vaziyat */
function detectSituation(text = "") {
  const vs = variants(text);
  if (!vs.length) return null;
  return SITUATIONS.find((s) => vs.some((t) => s.match(t))) || null;
}

/** Vaziyat moddalarini indeksdagi hujjat raqamlariga aylantirish. */
function pinnedDocs(situation, state) {
  return situation.pins
    .map(([code, num]) => state.docs.findIndex((d) => d.lawCode === code && d.articleNumber === num))
    .filter((i) => i >= 0);
}

module.exports = { detectSituation, pinnedDocs, SITUATIONS };
