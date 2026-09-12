"use strict";
/**
 * Markazlashtirilgan tarif (Credit) konfiguratsiyasi.
 * Foydalanuvchi qaysi tarifni sotib olsa, shu yerdagi limit avtomatik
 * qo'llanadi — admin hech kimga qo'lda limit belgilamaydi.
 * Narx/limitlarni o'zgartirish uchun faqat shu fayl (yoki .env) tahrirlanadi.
 *
 * ⚠️ MUHIM QOIDA: bu yerda FAQAT haqiqatda QO'LLANADIGAN imkoniyatlar
 * turadi. Har bir maydon backendda majburlanadi:
 *   dailyLimit      → middleware/usageLimit.js  (AI savollari)
 *   useClaude       → services/legalAI.js       (premium AI modeli)
 *   lessonLimit     → routes/lessons.js         (nechta dars ochiq)
 *   testLimit       → routes/tests.js           (nechta test ochiq)
 *   voiceDailyLimit → middleware/usageLimit.js  (ovozli chat)
 * Yangi maydon qo'shilsa — u ham majburlanishi SHART, aks holda
 * Pricing bo'limida yolg'on va'da paydo bo'ladi.
 *
 * `null` = cheksiz (cheklov qo'llanmaydi).
 */

/* .env dan butun son o'qish — noto'g'ri qiymat berilsa standartga qaytadi
   (aks holda NaN limit hamma narsani bloklab qo'yardi). */
function envInt(name, fallback) {
  const raw = parseInt(process.env[name] || "", 10);
  return Number.isFinite(raw) && raw >= 0 ? raw : fallback;
}

/* Kontent cheklovi — sondan tashqari CHEKSIZ qiymatni ham qabul qiladi.
   `.env` da `all` (yoki `null`) yozilsa cheklov umuman qo'llanmaydi.
   Oddiy `envInt` yaramaydi: u `null` ni qaytara olmaydi va "cheksiz"
   tarifni raqamga aylantirib qo'yardi. */
function envLimit(name, fallback) {
  const raw = String(process.env[name] || "").trim().toLowerCase();
  if (!raw) return fallback;
  if (raw === "all" || raw === "null" || raw === "-1") return null;
  const n = parseInt(raw, 10);
  return Number.isFinite(n) && n >= 0 ? n : fallback;
}

const PLANS = {
  free: {
    label: "Bepul",
    priceUzs: 0,
    dailyLimit: envInt("FREE_PLAN_DAILY_LIMIT", 5),
    useClaude: false,
    // Bepul tarifda platforma FAQAT tanishtirish uchun ochiq:
    // bitta dars va bitta test. Qolganlari tarif sotib olinganda ochiladi.
    lessonLimit: envLimit("FREE_PLAN_LESSON_LIMIT", 1),
    testLimit: envLimit("FREE_PLAN_TEST_LIMIT", 1),
    voiceDailyLimit: envInt("FREE_PLAN_VOICE_LIMIT", 2),
  },
  basic: {
    label: "Basic",
    priceUzs: envInt("BASIC_PLAN_PRICE_UZS", 19000),
    dailyLimit: envInt("BASIC_PLAN_DAILY_LIMIT", 30),
    useClaude: false,
    /* Kontent BOSQICHMA-BOSQICH ochiladi: Basic — boshlang'ich to'plam
       (5 dars + 5 test), Pro — kengaytirilgan (30 dars + BARCHA test),
       Premium — hammasi. Shu sabab tariflar bir-biridan faqat AI
       hajmi bilan emas, o'quv kontenti hajmi bilan ham farq qiladi. */
    lessonLimit: envLimit("BASIC_PLAN_LESSON_LIMIT", 5),
    testLimit: envLimit("BASIC_PLAN_TEST_LIMIT", 5),
    voiceDailyLimit: envInt("BASIC_PLAN_VOICE_LIMIT", 5),
  },
  pro: {
    label: "Pro",
    priceUzs: envInt("PRO_PLAN_PRICE_UZS", 49000),
    dailyLimit: envInt("PRO_DAILY_LIMIT", 200),
    useClaude: true,
    // 30 ta dars, TESTLAR esa cheklovsiz (`null`)
    lessonLimit: envLimit("PRO_PLAN_LESSON_LIMIT", 30),
    testLimit: envLimit("PRO_PLAN_TEST_LIMIT", null),
    voiceDailyLimit: envInt("PRO_PLAN_VOICE_LIMIT", 15),
  },
  premium: {
    label: "Premium",
    priceUzs: envInt("PREMIUM_PLAN_PRICE_UZS", 99000),
    dailyLimit: envInt("PREMIUM_PLAN_DAILY_LIMIT", 500),
    useClaude: true,
    // Eng yuqori tarif — hech qanday kontent cheklovi yo'q
    lessonLimit: envLimit("PREMIUM_PLAN_LESSON_LIMIT", null),
    testLimit: envLimit("PREMIUM_PLAN_TEST_LIMIT", null),
    voiceDailyLimit: envInt("PREMIUM_PLAN_VOICE_LIMIT", 30),
  },
};

const PLAN_DAYS = 30; // obuna muddati (kun)
const PAID_TIERS = ["basic", "pro", "premium"];

function getPlanConfig(tier) {
  return PLANS[tier] || PLANS.free;
}

function isPaidTier(tier) {
  return PAID_TIERS.includes(tier);
}

/**
 * Ro'yxatdagi nechta element ochiq ekanini aytadi.
 * `limit === null` (cheksiz) bo'lsa har doim `true`.
 * @param {number|null} limit  tarifdagi cheklov
 * @param {number} index       elementning tartib raqami (0 dan)
 */
function isWithinLimit(limit, index) {
  return limit === null || limit === undefined || index < limit;
}

/**
 * Qulflangan kontentga urinilganda QAYSI tarifni taklif qilish kerak.
 *
 * ⚠️ Har doim eng arzon tarifni taklif qilish NOTO'G'RI: Basic olgan
 * foydalanuvchi 6-darsga urinsa, unga yana Basic taklif qilinardi —
 * ya'ni allaqachon sotib olgan tarifi. Shuning uchun joriy tarifdan
 * YUQORIDAGI, cheklovi haqiqatan KATTAROQ bo'lgan birinchi tarif
 * qaytariladi (dars va test uchun alohida — Pro'da testlar cheksiz,
 * lekin darslar 30 ta).
 *
 * @param {"lesson"|"test"} kind
 * @param {string} currentTier
 */
function nextTierFor(kind, currentTier) {
  const key = kind === "test" ? "testLimit" : "lessonLimit";
  const current = getPlanConfig(currentTier)[key];
  const order = ["free", ...PAID_TIERS];
  const from = order.indexOf(currentTier);

  for (let i = (from < 0 ? 0 : from) + 1; i < order.length; i++) {
    const limit = getPlanConfig(order[i])[key];
    if (limit === null || limit === undefined) return order[i]; // cheksiz
    if (current !== null && current !== undefined && limit > current) {
      return order[i];
    }
  }
  // Yuqorida hech nima yo'q — eng yuqori tarif
  return PAID_TIERS[PAID_TIERS.length - 1];
}

module.exports = {
  PLANS,
  PLAN_DAYS,
  PAID_TIERS,
  getPlanConfig,
  isPaidTier,
  isWithinLimit,
  nextTierFor,
};
