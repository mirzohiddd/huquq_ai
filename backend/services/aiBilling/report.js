"use strict";
/**
 * ADMIN HISOBOTI: daromad (to'lovlar) − AI xarajati = taxminiy sof foyda.
 *
 * Daromad ikki manbadan (ikkalasi ham haqiqiy pul):
 *   - Payment (Click/Payme/Uzum) — `status: "paid"`, shu oyda to'langan;
 *   - PurchaseRequest (Telegram orqali qo'lda buyurtma) — `status: "done"`,
 *     shu oyda yakunlangan (`priceUzs` buyurtma paytidagi narx).
 * Xarajat — AiUsage dagi HAQIQIY narxlar (yozilgan paytdagi tarif bo'yicha).
 * Oy chegaralari Toshkent vaqti (UTC+5) bo'yicha.
 */
const mongoose = require("mongoose");
const { AiUsage } = require("../../models/aiBilling");
const { Payment, User } = require("../../models");
const { current } = require("./settings");
const { periods } = require("./usage");
const { TIER_IDS } = require("./defaults");

const PurchaseRequest = () => require("../../models/purchaseRequest").PurchaseRequest;

function monthRange(month) {
  const m = /^(\d{4})-(\d{2})$/.exec(month || "") ? month : periods().month;
  const [y, mo] = m.split("-").map(Number);
  const from = new Date(Date.UTC(y, mo - 1, 1) - 5 * 3600 * 1000);
  const to = new Date(Date.UTC(y, mo, 1) - 5 * 3600 * 1000);
  return { month: m, from, to };
}

const SUM_FIELDS = {
  requests: { $sum: 1 },
  inputTokens: { $sum: "$inputTokens" },
  cachedTokens: { $sum: "$cachedTokens" },
  outputTokens: { $sum: "$outputTokens" },
  seconds: { $sum: "$seconds" },
  chars: { $sum: "$chars" },
  costUsd: { $sum: "$costUsd" },
  cacheHits: { $sum: { $cond: ["$cacheHit", 1, 0] } },
};
const group = (month, by) =>
  AiUsage.aggregate([{ $match: { month } }, { $group: { _id: by, ...SUM_FIELDS } }, { $sort: { costUsd: -1 } }]);

async function revenue(from, to) {
  const [pay, orders] = await Promise.all([
    Payment.aggregate([
      { $match: { status: "paid", paidAt: { $gte: from, $lt: to } } },
      { $group: { _id: "$plan", uzs: { $sum: "$amount" }, count: { $sum: 1 } } },
    ]),
    PurchaseRequest().aggregate([
      { $match: { status: "done", updatedAt: { $gte: from, $lt: to } } },
      { $group: { _id: "$tier", uzs: { $sum: "$priceUzs" }, count: { $sum: 1 } } },
    ]),
  ]);
  const byTier = {};
  for (const r of [...pay, ...orders]) {
    const t = TIER_IDS.includes(r._id) ? r._id : "boshqa";
    byTier[t] = { uzs: (byTier[t]?.uzs || 0) + r.uzs, count: (byTier[t]?.count || 0) + r.count };
  }
  return { byTier, totalUzs: Object.values(byTier).reduce((s, r) => s + r.uzs, 0) };
}

/** Oylik umumiy hisobot. */
async function monthReport(month) {
  const r = monthRange(month);
  const s = current();
  const [byKind, byTier, byModel, byDay, rev, activePaid] = await Promise.all([
    group(r.month, "$kind"),
    group(r.month, "$tier"),
    group(r.month, { provider: "$provider", model: "$model", kind: "$kind" }),
    AiUsage.aggregate([{ $match: { month: r.month } }, { $group: { _id: "$day", costUsd: { $sum: "$costUsd" }, requests: { $sum: 1 } } }, { $sort: { _id: 1 } }]),
    revenue(r.from, r.to),
    User.aggregate([
      { $match: { plan: { $in: ["basic", "pro", "premium"] }, planExpiresAt: { $gt: new Date() } } },
      { $group: { _id: "$plan", count: { $sum: 1 } } },
    ]),
  ]);
  const costUsd = byKind.reduce((a, k) => a + k.costUsd, 0);
  const costUzs = costUsd * s.usdToUzs;
  const subscribers = Object.fromEntries(activePaid.map((a) => [a._id, a.count]));
  const tiers = TIER_IDS.map((t) => {
    const u = byTier.find((x) => x._id === t) || {};
    const cfg = s.tiers[t];
    const spent = u.costUsd || 0;
    return {
      tier: t,
      mode: cfg.mode,
      model: cfg.model,
      deepModel: cfg.deepModel,
      subscribers: subscribers[t] || 0,
      usage: u,
      budgetUsd: cfg.tierMonthlyBudgetUsd,
      remainingUsd: cfg.tierMonthlyBudgetUsd > 0 ? Math.max(0, cfg.tierMonthlyBudgetUsd - spent) : null,
      revenueUzs: rev.byTier[t]?.uzs || 0,
      netUzs: (rev.byTier[t]?.uzs || 0) - spent * s.usdToUzs,
    };
  });
  return {
    month: r.month,
    usdToUzs: s.usdToUzs,
    totals: {
      revenueUzs: rev.totalUzs,
      costUsd,
      costUzs,
      netUzs: rev.totalUzs - costUzs,
      globalBudgetUsd: s.globalMonthlyBudgetUsd,
      globalRemainingUsd: s.globalMonthlyBudgetUsd > 0 ? Math.max(0, s.globalMonthlyBudgetUsd - costUsd) : null,
    },
    byKind,
    tiers,
    byModel,
    byDay,
    revenue: rev,
  };
}

/** Foydalanuvchilar kesimida (eng ko'p sarflaganlar birinchi). */
async function userReport(month, { page = 1, limit = 25 } = {}) {
  const r = monthRange(month);
  const s = current();
  const rows = await AiUsage.aggregate([
    { $match: { month: r.month, userId: { $ne: null } } },
    { $group: { _id: "$userId", ...SUM_FIELDS, kinds: { $addToSet: "$kind" } } },
    { $sort: { costUsd: -1 } },
    { $facet: { items: [{ $skip: (page - 1) * limit }, { $limit: limit }], total: [{ $count: "n" }] } },
  ]);
  const items = rows[0]?.items || [];
  const ids = items.map((i) => i._id);
  const [users, pays] = await Promise.all([
    User.find({ _id: { $in: ids } }).select("username fullName email plan planExpiresAt").lean(),
    Payment.aggregate([
      { $match: { userId: { $in: ids }, status: "paid", paidAt: { $gte: r.from, $lt: r.to } } },
      { $group: { _id: "$userId", uzs: { $sum: "$amount" } } },
    ]),
  ]);
  const { getUserTier } = require("../../models");
  return {
    month: r.month,
    total: rows[0]?.total?.[0]?.n || 0,
    items: items.map((i) => {
      const u = users.find((x) => String(x._id) === String(i._id)) || {};
      const tier = getUserTier(u);
      const budget = s.tiers[tier]?.monthlyBudgetUsd || 0;
      const paidUzs = pays.find((p) => String(p._id) === String(i._id))?.uzs || 0;
      return {
        userId: i._id,
        username: u.username || "—",
        fullName: u.fullName || "",
        tier,
        ...i,
        _id: undefined,
        tokens: i.inputTokens + i.outputTokens,
        budgetUsd: budget,
        remainingUsd: budget > 0 ? Math.max(0, budget - i.costUsd) : null,
        paidUzs,
        netUzs: paidUzs - i.costUsd * s.usdToUzs,
      };
    }),
  };
}

module.exports = { monthReport, userReport, monthRange };
