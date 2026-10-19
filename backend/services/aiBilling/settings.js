"use strict";
/**
 * AI sozlamalari — bazadagi (admin o'zgartirgan) qiymatlar + standartlar.
 *
 * `current()` SINXRON: chat yo'lida har so'rovda bazaga borilmaydi —
 * xotiradagi nusxa 30 soniyada bir yangilanadi, admin saqlaganda esa
 * darhol. Server ishga tushishi bilan `loadSettings()` chaqiriladi.
 *
 * ⚠️ Admin kiritgan qiymat TOZALANADI (`sanitize`): noto'g'ri tur yoki
 * manfiy son saqlanmaydi — aks holda bitta xato maydon (masalan "abc"
 * limit) butun chatni yiqitardi.
 */
const { AiSettings } = require("../../models/aiBilling");
const { DEFAULTS, TIER_IDS, EFFORTS } = require("./defaults");
const { setPlanOverrides } = require("../../config/plans");

const REFRESH_MS = 30 * 1000;
let cache = structuredClone(DEFAULTS);
let loadedAt = 0;

const num = (v, def, { min = 0, max = 1e9 } = {}) => {
  const n = Number(v);
  return Number.isFinite(n) && n >= min && n <= max ? n : def;
};
const limitOrNull = (v, def) => (v === null || v === "" || v === undefined ? def : num(v, def, { max: 100000 }));
const modelName = (v, def) => (typeof v === "string" && /^[\w.:-]{2,60}$/.test(v.trim()) ? v.trim() : def);

function sanitizeTier(src = {}, def) {
  return {
    mode: src.mode === "local" || src.mode === "openai" ? src.mode : def.mode,
    model: modelName(src.model, def.model),
    deepModel: src.deepModel === "" ? "" : modelName(src.deepModel, def.deepModel),
    reasoningEffort: EFFORTS.includes(src.reasoningEffort) ? src.reasoningEffort : def.reasoningEffort,
    deepReasoningEffort: EFFORTS.includes(src.deepReasoningEffort) ? src.deepReasoningEffort : def.deepReasoningEffort,
    maxOutputTokens: num(src.maxOutputTokens, def.maxOutputTokens, { min: 200, max: 16000 }),
    ragArticles: num(src.ragArticles, def.ragArticles, { min: 1, max: 15 }),
    articleChars: num(src.articleChars, def.articleChars, { min: 300, max: 6000 }),
    historyTurns: num(src.historyTurns, def.historyTurns, { max: 20 }),
    monthlyTokenLimit: num(src.monthlyTokenLimit, def.monthlyTokenLimit),
    monthlyBudgetUsd: num(src.monthlyBudgetUsd, def.monthlyBudgetUsd, { max: 10000 }),
    tierMonthlyBudgetUsd: num(src.tierMonthlyBudgetUsd, def.tierMonthlyBudgetUsd, { max: 1e6 }),
    dailyLimit: limitOrNull(src.dailyLimit, def.dailyLimit),
    voiceDailyLimit: limitOrNull(src.voiceDailyLimit, def.voiceDailyLimit),
    images: typeof src.images === "boolean" ? src.images : def.images,
    docAnalysis: typeof src.docAnalysis === "boolean" ? src.docAnalysis : def.docAnalysis,
  };
}

function sanitizePrices(src, def, keys) {
  const out = { ...def };
  for (const [name, p] of Object.entries(src || {})) {
    if (!/^[\w.:-]{2,60}$/.test(name) || !p || typeof p !== "object") continue;
    out[name] = Object.fromEntries(keys.map((k) => [k, num(p[k], def[name]?.[k] ?? 0, { max: 10000 })]));
  }
  return out;
}

function sanitize(src = {}) {
  const d = DEFAULTS;
  return {
    llmEnabled: typeof src.llmEnabled === "boolean" ? src.llmEnabled : d.llmEnabled,
    usdToUzs: num(src.usdToUzs, d.usdToUzs, { min: 1, max: 1e6 }),
    cacheTtlHours: num(src.cacheTtlHours, d.cacheTtlHours, { max: 24 * 90 }),
    perMinuteLimit: num(src.perMinuteLimit, d.perMinuteLimit, { min: 1, max: 600 }),
    globalMonthlyBudgetUsd: num(src.globalMonthlyBudgetUsd, d.globalMonthlyBudgetUsd, { max: 1e6 }),
    tiers: Object.fromEntries(TIER_IDS.map((t) => [t, sanitizeTier(src.tiers?.[t], d.tiers[t])])),
    pricing: sanitizePrices(src.pricing, d.pricing, ["input", "cachedInput", "output"]),
    audio: sanitizePrices(src.audio, d.audio, ["perMinute", "perMillionChars"]),
  };
}

function apply(data) {
  cache = sanitize(data);
  loadedAt = Date.now();
  // Admin tarif limitlarini o'zgartirgan bo'lsa — config/plans.js orqali
  // HAMMA joyga (usageLimit, Pricing, Profil) avtomatik tarqaladi
  setPlanOverrides(
    Object.fromEntries(
      TIER_IDS.map((t) => [t, { dailyLimit: cache.tiers[t].dailyLimit, voiceDailyLimit: cache.tiers[t].voiceDailyLimit }]),
    ),
  );
  return cache;
}

async function loadSettings() {
  try {
    const doc = await AiSettings.findOne({ key: "global" }).lean();
    return apply(doc?.data || {});
  } catch (err) {
    console.warn("AI sozlamalari o'qilmadi (standartlar ishlatiladi):", err.message);
    loadedAt = Date.now(); // baza ishlamasa har so'rovda qayta urinilmasin
    return cache;
  }
}

/** Sinxron o'qish; muddati o'tgan bo'lsa fonda yangilanadi. */
function current() {
  if (Date.now() - loadedAt > REFRESH_MS) {
    loadedAt = Date.now();
    loadSettings().catch(() => {});
  }
  return cache;
}

async function saveSettings(patch, adminName = "") {
  const p = patch || {};
  const next = sanitize({
    ...cache,
    ...p,
    // Har tarif ALOHIDA birlashtiriladi — qisman yuborilgan tarif boshqa maydonlarini yo'qotmasin
    tiers: Object.fromEntries(TIER_IDS.map((t) => [t, { ...cache.tiers[t], ...(p.tiers?.[t] || {}) }])),
    pricing: { ...cache.pricing, ...(p.pricing || {}) },
    audio: { ...cache.audio, ...(p.audio || {}) },
  });
  await AiSettings.findOneAndUpdate(
    { key: "global" },
    { $set: { data: next, updatedBy: adminName } },
    { upsert: true },
  );
  return apply(next);
}

async function resetSettings(adminName = "") {
  await AiSettings.findOneAndUpdate({ key: "global" }, { $set: { data: {}, updatedBy: adminName } }, { upsert: true });
  return apply({});
}

const tierConfig = (tier) => current().tiers[tier] || current().tiers.free;

module.exports = { loadSettings, current, saveSettings, resetSettings, tierConfig, sanitize };
