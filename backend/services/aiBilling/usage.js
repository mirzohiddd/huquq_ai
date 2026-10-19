"use strict";
/**
 * AI XARAJATINI HISOBLASH VA YOZISH.
 *
 * Narx formulasi (OpenAI): keshlangan kirish tokenlari arzonroq narxda,
 * qolgan kirish — oddiy narxda, chiqish (reasoning tokenlari BILAN —
 * OpenAI ularni completion_tokens ichida hisoblaydi va pul oladi) —
 * chiqish narxida. Narx jadvali admin panelida (settings.pricing).
 *
 * Yozish xatosi hech qachon foydalanuvchi javobini buzmaydi — jim
 * logga tushadi.
 */
const mongoose = require("mongoose");
const { AiUsage } = require("../../models/aiBilling");
const { current } = require("./settings");
const { ctx } = require("./context");

const M = 1e6;

/** "2026-10-19" va "2026-10" — Toshkent vaqti bo'yicha (UTC+5). */
function periods(d = new Date()) {
  const t = new Date(d.getTime() + 5 * 3600 * 1000).toISOString();
  return { day: t.slice(0, 10), month: t.slice(0, 7) };
}

function priceOf(model) {
  const p = current().pricing;
  if (p[model]) return p[model];
  // "gpt-5-mini-2025-08-07" kabi sanali nomlar — asosiy nom narxi
  const base = Object.keys(p)
    .sort((a, b) => b.length - a.length)
    .find((k) => model.startsWith(`${k}-`));
  return base ? p[base] : null;
}

function llmCost(model, { inputTokens = 0, cachedTokens = 0, outputTokens = 0 }) {
  const p = priceOf(model);
  if (!p) return 0;
  const fresh = Math.max(0, inputTokens - cachedTokens);
  return (fresh * p.input + cachedTokens * (p.cachedInput ?? p.input) + outputTokens * p.output) / M;
}

function audioCost(key, { seconds = 0, chars = 0 }) {
  const a = current().audio[key];
  if (!a) return 0;
  return (seconds / 60) * (a.perMinute || 0) + (chars / M) * (a.perMillionChars || 0);
}

const toId = (v) => (v && mongoose.isValidObjectId(v) ? new mongoose.Types.ObjectId(String(v)) : null);

/**
 * @param {object} e — { kind, provider, model, inputTokens, cachedTokens,
 *   outputTokens, reasoningTokens, seconds, chars, costUsd?, cacheHit, tier?, userId? }
 */
async function recordUsage(e) {
  try {
    const c = ctx();
    const { day, month } = periods();
    const userId = e.userId ?? c.userId;
    // Tarif kontekstda bo'lmasa (STT/TTS) — foydalanuvchidan aniqlanadi
    const tier = e.tier || c.tier || (userId ? await require("./budget").tierOf(userId) : "free");
    const costUsd =
      e.costUsd ??
      (e.kind === "stt" || e.kind === "tts"
        ? audioCost(`${e.provider}:${e.model}`, e)
        : llmCost(e.model, e));
    await AiUsage.create({
      userId: toId(userId),
      tier,
      kind: e.kind || c.kind || "chat",
      channel: e.channel || c.channel || "web",
      provider: e.provider || "",
      model: e.model || "",
      inputTokens: e.inputTokens || 0,
      cachedTokens: e.cachedTokens || 0,
      outputTokens: e.outputTokens || 0,
      reasoningTokens: e.reasoningTokens || 0,
      seconds: Math.round((e.seconds || 0) * 10) / 10,
      chars: e.chars || 0,
      costUsd: e.cacheHit ? 0 : costUsd,
      cacheHit: !!e.cacheHit,
      day,
      month,
    });
    return costUsd;
  } catch (err) {
    console.warn("AI sarfini yozib bo'lmadi:", err.message);
    return 0;
  }
}

/** Foydalanuvchining joriy oydagi sarfi (budjet tekshiruvi uchun). */
async function userMonth(userId) {
  const id = toId(userId);
  if (!id) return { tokens: 0, costUsd: 0 };
  const [r] = await AiUsage.aggregate([
    { $match: { userId: id, month: periods().month } },
    { $group: { _id: null, tokens: { $sum: { $add: ["$inputTokens", "$outputTokens"] } }, costUsd: { $sum: "$costUsd" } } },
  ]);
  return { tokens: r?.tokens || 0, costUsd: r?.costUsd || 0 };
}

/** Joriy oyda tarif va butun sayt bo'yicha sarf ($). */
async function monthTotals() {
  const rows = await AiUsage.aggregate([
    { $match: { month: periods().month } },
    { $group: { _id: "$tier", costUsd: { $sum: "$costUsd" } } },
  ]);
  const byTier = Object.fromEntries(rows.map((r) => [r._id, r.costUsd]));
  return { byTier, total: rows.reduce((s, r) => s + r.costUsd, 0) };
}

module.exports = { recordUsage, userMonth, monthTotals, llmCost, audioCost, periods, priceOf };
