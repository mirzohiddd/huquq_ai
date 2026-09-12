"use strict";
/**
 * Markazlashtirilgan tarif (Credit) konfiguratsiyasi.
 * Foydalanuvchi qaysi tarifni sotib olsa, shu yerdagi limit avtomatik
 * qo'llanadi — admin hech kimga qo'lda limit belgilamaydi.
 * Narx/limitlarni o'zgartirish uchun faqat shu fayl (yoki .env) tahrirlanadi.
 */

const PLANS = {
  free: {
    label: "Bepul",
    priceUzs: 0,
    dailyLimit: 5,
    useClaude: false,
  },
  basic: {
    label: "Basic",
    priceUzs: parseInt(process.env.BASIC_PLAN_PRICE_UZS || "19000", 10),
    dailyLimit: parseInt(process.env.BASIC_PLAN_DAILY_LIMIT || "30", 10),
    useClaude: false,
  },
  pro: {
    label: "Pro",
    priceUzs: parseInt(process.env.PRO_PLAN_PRICE_UZS || "49000", 10),
    dailyLimit: parseInt(process.env.PRO_DAILY_LIMIT || "200", 10),
    useClaude: true,
  },
  premium: {
    label: "Premium",
    priceUzs: parseInt(process.env.PREMIUM_PLAN_PRICE_UZS || "99000", 10),
    dailyLimit: parseInt(process.env.PREMIUM_PLAN_DAILY_LIMIT || "500", 10),
    useClaude: true,
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

module.exports = { PLANS, PLAN_DAYS, PAID_TIERS, getPlanConfig, isPaidTier };
