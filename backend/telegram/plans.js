"use strict";
/**
 * BOT — «💎 Tariflar», «👤 Hisobim» va buyurtma berish (2026-10-03).
 *
 * Oqim: Tariflar → tarifni tanlash → tasdiqlash ekrani (raqam ko'rsatiladi)
 * → «✅ Buyurtma berish» → `services/purchaseRequests.js` adminga Telegram
 * xabari yuboradi. Raqam yo'q bo'lsa (saytdan ulangan eski hisob) avval
 * kontakt so'raladi, so'ng tasdiqlash ekrani avtomatik ochiladi.
 */
const { User, getUserTier } = require("../models");
const { PLANS, PAID_TIERS, getPlanConfig, isPaidTier } = require("../config/plans");
const { getUsageStats } = require("../middleware/usageLimit");
const { createPurchaseRequest } = require("../services/purchaseRequests");
const { formatPhone } = require("../utils/phone");
const { esc } = require("./ui");
const { fill } = require("./texts");

const { ICON, P } = require("./plansTexts");

const price = (n) => Number(n || 0).toLocaleString("ru-RU");

function registerPlans({ bot, safeSend, getLang, contactMenu, SITE_URL }) {
  const pendingOrder = new Map(); // tgId -> tier (raqam kutilmoqda)

  function featureLine(cfg, X) {
    return [
      fill(X.q, { n: cfg.dailyLimit }),
      cfg.lessonLimit == null ? X.lessonsAll : fill(X.lessons, { n: cfg.lessonLimit }),
      cfg.testLimit == null ? X.testsAll : fill(X.tests, { n: cfg.testLimit }),
      fill(X.voice, { n: cfg.voiceDailyLimit }),
    ].join(" · ");
  }

  async function showPlans(chatId, tgId, userId) {
    const X = P[getLang(tgId)] || P.uz;
    const user = userId ? await User.findById(userId).select("plan planExpiresAt").lean() : null;
    const tier = getUserTier(user);
    const lines = PAID_TIERS.map((t) => {
      const c = PLANS[t];
      return `${ICON[t]} <b>${c.label}</b> — ${price(c.priceUzs)} ${X.perMonth}\n<i>${featureLine(c, X)}</i>`;
    });
    const text = [X.title, fill(X.current, { plan: getPlanConfig(tier).label }), "", lines.join("\n\n"), "", X.pick].join("\n");
    const rows = PAID_TIERS.map((t) => [
      { text: `${ICON[t]} ${PLANS[t].label} — ${price(PLANS[t].priceUzs)}`, callback_data: `buy:${t}` },
    ]);
    return safeSend(chatId, text, { reply_markup: { inline_keyboard: rows } });
  }

  async function showConfirm(chatId, tgId, userId, tier) {
    const X = P[getLang(tgId)] || P.uz;
    const user = await User.findById(userId).select("phone plan planExpiresAt").lean();
    if (getUserTier(user) === tier) return safeSend(chatId, X.already);
    if (!user?.phone) {
      pendingOrder.set(tgId, tier);
      return safeSend(chatId, X.need_phone, contactMenu(tgId));
    }
    const cfg = getPlanConfig(tier);
    return safeSend(chatId, fill(X.confirm, { plan: cfg.label, price: price(cfg.priceUzs), phone: formatPhone(user.phone) }), {
      reply_markup: {
        inline_keyboard: [
          [{ text: X.btn_order, callback_data: `order:${tier}` }],
          [{ text: X.btn_back, callback_data: "plans" }],
        ],
      },
    });
  }

  async function placeOrder(chatId, from, userId, tier) {
    const X = P[getLang(from.id)] || P.uz;
    const user = await User.findById(userId).lean();
    const [first, ...rest] = String(user?.fullName || "").split(" ");
    const r = await createPurchaseRequest({
      userId,
      tier,
      firstName: user?.firstName || first || from.first_name,
      lastName: user?.lastName || rest.join(" ") || from.last_name || "",
      phone: user?.phone,
      telegramUsername: from.username || "",
      telegramId: String(from.id),
      source: "telegram",
    });
    if (!r.ok) return safeSend(chatId, `⚠️ ${esc(r.error)}`);
    if (r.duplicate) return safeSend(chatId, X.duplicate);
    return safeSend(chatId, fill(X.ordered, { plan: getPlanConfig(tier).label, phone: formatPhone(r.request.phone) }));
  }

  async function showAccount(chatId, tgId, userId) {
    const X = P[getLang(tgId)] || P.uz;
    const user = await User.findById(userId).lean();
    if (!user) return null;
    const tier = getUserTier(user);
    let planLine = `${ICON[tier]} <b>${getPlanConfig(tier).label}</b>`;
    if (isPaidTier(tier) && user.planExpiresAt) {
      const n = Math.max(0, Math.ceil((new Date(user.planExpiresAt) - Date.now()) / 864e5));
      planLine += ` (${fill(X.days, { n })})`;
    }
    const usage = await getUsageStats(userId).catch(() => null);
    const text = [
      X.acc_title,
      "",
      `👤 ${X.name}: <b>${esc(user.fullName || user.username)}</b>`,
      `📞 ${X.phone}: ${user.phone ? `<code>${formatPhone(user.phone)}</code>` : X.none}`,
      `💳 ${X.plan}: ${planLine}`,
      usage ? `📊 ${X.today}: <b>${usage.used}/${usage.limit}</b>` : null,
    ]
      .filter((x) => x !== null)
      .join("\n");
    return safeSend(chatId, text, {
      reply_markup: {
        inline_keyboard: [[{ text: X.btn_plans, callback_data: "plans" }], [{ text: X.btn_site, url: SITE_URL }]],
      },
    });
  }

  /** Callback'lar: `plans`, `buy:<tier>`, `order:<tier>` — `true` = ishlandi */
  async function handleCallback(query, userId) {
    const data = String(query.data || "");
    if (data !== "plans" && !/^(buy|order):/.test(data)) return false;
    await bot.answerCallbackQuery(query.id).catch(() => {});
    const chatId = query.message.chat.id;
    const tgId = query.from.id;
    if (data === "plans") await showPlans(chatId, tgId, userId);
    else {
      const [kind, tier] = data.split(":");
      if (!isPaidTier(tier)) return true;
      if (kind === "buy") await showConfirm(chatId, tgId, userId, tier);
      else await placeOrder(chatId, query.from, userId, tier);
    }
    return true;
  }

  /** Raqam yuborilgandan keyin kutilayotgan buyurtma bo'lsa — davom ettiradi */
  async function resumeAfterContact(chatId, tgId, userId) {
    const tier = pendingOrder.get(tgId);
    if (!tier) return false;
    pendingOrder.delete(tgId);
    await showConfirm(chatId, tgId, userId, tier);
    return true;
  }

  return { showPlans, showAccount, handleCallback, resumeAfterContact };
}

module.exports = { registerPlans };
