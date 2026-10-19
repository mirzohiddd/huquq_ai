"use strict";
/**
 * AI sozlamalarining STANDART qiymatlari (admin hali hech narsa
 * o'zgartirmagan holat). Admin panelidagi har bir maydon shu tuzilmada.
 *
 * Tariflar bo'yicha qaror:
 *   free    — LOKAL AI (sayt bazasidan, tashqi API'siz, xarajat $0). Bu
 *             2026-09-27 dan beri ishlab turgan chat — bepul tarif sifati
 *             o'zgarmaydi. Admin xohlasa "openai" ga o'tkaza oladi.
 *   basic   — gpt-5-nano: arzon, lekin LLM — lokal AI'dan erkinroq
 *             tushuntiradi (har javob baribir RAG moddalariga bog'langan).
 *   pro     — gpt-5-mini: professional tahlil, hujjat va rasm bilan ishlash.
 *   premium — gpt-5.4-mini + murakkab savol/hujjatda gpt-5.4 (chuqur tahlil).
 *
 * Narxlar — OpenAI rasmiy narx sahifasidan (2026-10-19, standart tier,
 * $ / 1M token). Narx o'zgarsa kod emas, admin paneli yangilanadi.
 *
 * Budjetlar — tarif narxidan kelib chiqib ATAYLAB past: Basic 19 000
 * so'm ≈ $1,5, Pro 49 000 ≈ $3,9, Premium 99 000 ≈ $7,8. Foydalanuvchi
 * oylik budjeti tugasa javob TO'XTAMAYDI — lokal AI'ga o'tadi.
 */
const TIER = (o) => ({
  mode: "openai", // "local" | "openai"
  model: "gpt-5-nano",
  deepModel: "", // murakkab savol/hujjat uchun (bo'sh — yo'q)
  reasoningEffort: "low", // minimal | low | medium | high
  deepReasoningEffort: "medium",
  maxOutputTokens: 1200,
  ragArticles: 5, // promptga beriladigan qonun moddalari soni
  articleChars: 1400, // har modda matnidan nechta belgi
  historyTurns: 4, // oldingi nechta xabar (kontekst)
  monthlyTokenLimit: 0, // foydalanuvchi boshiga, 0 = cheksiz
  monthlyBudgetUsd: 0, // foydalanuvchi boshiga, 0 = cheksiz
  tierMonthlyBudgetUsd: 0, // butun tarif bo'yicha, 0 = cheksiz
  dailyLimit: null, // null = config/plans.js dagi qiymat
  voiceDailyLimit: null,
  images: false, // rasm tahlili
  docAnalysis: false, // yuklangan hujjatga LLM bilan javob
  ...o,
});

const DEFAULTS = {
  llmEnabled: true, // umumiy o'chirgich: false — hamma lokal AI'da
  usdToUzs: 12700,
  cacheTtlHours: 72,
  perMinuteLimit: 8, // bitta foydalanuvchi daqiqasiga nechta LLM chaqiruvi
  globalMonthlyBudgetUsd: 150, // butun sayt bo'yicha oylik chegara
  tiers: {
    free: TIER({ mode: "local", model: "gpt-5-nano", maxOutputTokens: 700, ragArticles: 3, historyTurns: 2, monthlyTokenLimit: 60000, monthlyBudgetUsd: 0.05, tierMonthlyBudgetUsd: 10 }),
    basic: TIER({ model: "gpt-5-nano", maxOutputTokens: 1200, ragArticles: 4, monthlyTokenLimit: 1500000, monthlyBudgetUsd: 0.5, tierMonthlyBudgetUsd: 40 }),
    pro: TIER({ model: "gpt-5-mini", maxOutputTokens: 2000, ragArticles: 6, historyTurns: 6, monthlyTokenLimit: 4000000, monthlyBudgetUsd: 1.6, tierMonthlyBudgetUsd: 60, images: true, docAnalysis: true }),
    premium: TIER({ model: "gpt-5.4-mini", deepModel: "gpt-5.4", maxOutputTokens: 3200, ragArticles: 8, articleChars: 2000, historyTurns: 8, monthlyTokenLimit: 6000000, monthlyBudgetUsd: 3.5, tierMonthlyBudgetUsd: 80, images: true, docAnalysis: true }),
  },
  // $ / 1M token
  pricing: {
    "gpt-5.5": { input: 5, cachedInput: 0.5, output: 30 },
    "gpt-5.4": { input: 2.5, cachedInput: 0.25, output: 15 },
    "gpt-5.4-mini": { input: 0.75, cachedInput: 0.075, output: 4.5 },
    "gpt-5.4-nano": { input: 0.2, cachedInput: 0.02, output: 1.25 },
    "gpt-5-mini": { input: 0.25, cachedInput: 0.025, output: 2 },
    "gpt-5-nano": { input: 0.05, cachedInput: 0.005, output: 0.4 },
    "gpt-4.1-mini": { input: 0.4, cachedInput: 0.1, output: 1.6 },
    "gpt-4o-mini": { input: 0.15, cachedInput: 0.075, output: 0.6 },
  },
  // Ovoz: STT — $/daqiqa, TTS — $/1M belgi
  audio: {
    "groq:whisper-large-v3": { perMinute: 0.111 / 60 },
    "groq:whisper-large-v3-turbo": { perMinute: 0.04 / 60 },
    "edge:neural": { perMillionChars: 0 },
    "elevenlabs:eleven_flash_v2_5": { perMillionChars: 150 },
  },
};

const TIER_IDS = ["free", "basic", "pro", "premium"];
const EFFORTS = ["minimal", "low", "medium", "high"];

module.exports = { DEFAULTS, TIER_IDS, EFFORTS };
