"use strict";
/**
 * PULLIK AI'GA RUXSAT — tarif, budjet va tezlik chegaralari.
 *
 * Tarif HAR SO'ROVDA bazadan `getUserTier()` bilan aniqlanadi — obuna
 * muddati tugasa yoki yangi tarif sotib olinsa, keyingi xabardanoq yangi
 * model/limit qo'llanadi (alohida "sinxronlash" shart emas).
 *
 * Ruxsat berilmasa chat TO'XTAMAYDI: javob lokal AI'dan (sayt bazasidan)
 * keladi, sabab esa `reason` da qaytadi va foydalanuvchiga qisqa izoh
 * ko'rsatiladi.
 */
const { User, getUserTier } = require("../../models");
const { current, tierConfig } = require("./settings");
const { userMonth, monthTotals } = require("./usage");

const TIER_TTL = 60 * 1000;
const tierCache = new Map(); // userId → { tier, at }

async function tierOf(userId) {
  if (!userId) return "free";
  const hit = tierCache.get(String(userId));
  if (hit && Date.now() - hit.at < TIER_TTL) return hit.tier;
  const user = await User.findById(userId).select("plan planExpiresAt").lean().catch(() => null);
  const tier = getUserTier(user);
  tierCache.set(String(userId), { tier, at: Date.now() });
  if (tierCache.size > 5000) tierCache.delete(tierCache.keys().next().value);
  return tier;
}

/** To'lovdan keyin darhol yangi tarif ishlashi uchun (payment.js chaqiradi). */
function forgetTier(userId) {
  tierCache.delete(String(userId));
}

/* Daqiqalik chegara — bitta foydalanuvchi pullik modelni ketma-ket
   "portlatib" budjetni bir zumda yeb qo'ymasligi uchun. */
const minuteHits = new Map();
function rateOk(key, perMinute) {
  const now = Date.now();
  const list = (minuteHits.get(key) || []).filter((t) => now - t < 60000);
  if (list.length >= perMinute) {
    minuteHits.set(key, list);
    return false;
  }
  list.push(now);
  minuteHits.set(key, list);
  if (minuteHits.size > 5000) minuteHits.delete(minuteHits.keys().next().value);
  return true;
}

let totalsCache = { at: 0, data: { byTier: {}, total: 0 } };
async function totals() {
  if (Date.now() - totalsCache.at < 60 * 1000) return totalsCache.data;
  const data = await monthTotals();
  totalsCache = { at: Date.now(), data };
  return data;
}

/**
 * @returns {Promise<{ ok: boolean, tier: string, cfg: object, reason?: string }>}
 *   reason: local_mode | disabled | no_key | rate | user_tokens | user_budget | tier_budget | global_budget
 */
async function checkAccess(userId, rateKey) {
  const s = current();
  const tier = await tierOf(userId);
  const cfg = tierConfig(tier);
  const deny = (reason) => ({ ok: false, tier, cfg, reason });

  if (cfg.mode !== "openai") return deny("local_mode");
  if (!s.llmEnabled) return deny("disabled");
  if (!process.env.OPENAI_API_KEY) return deny("no_key");
  if (!rateOk(String(userId || rateKey || "anon"), s.perMinuteLimit)) return deny("rate");

  const [mine, all] = await Promise.all([userMonth(userId), totals()]);
  if (cfg.monthlyTokenLimit > 0 && mine.tokens >= cfg.monthlyTokenLimit) return deny("user_tokens");
  if (cfg.monthlyBudgetUsd > 0 && mine.costUsd >= cfg.monthlyBudgetUsd) return deny("user_budget");
  if (cfg.tierMonthlyBudgetUsd > 0 && (all.byTier[tier] || 0) >= cfg.tierMonthlyBudgetUsd) return deny("tier_budget");
  if (s.globalMonthlyBudgetUsd > 0 && all.total >= s.globalMonthlyBudgetUsd) return deny("global_budget");
  return { ok: true, tier, cfg, used: mine };
}

module.exports = { checkAccess, tierOf, forgetTier, rateOk };
