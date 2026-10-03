"use strict";
/**
 * BOT — KIRISH OQIMLARI: kirish ekrani, /start (deep link bilan),
 * raqam yuborish orqali ro'yxatdan o'tish va xush kelibsiz xabari.
 * `telegram-bot.js` dan ajratildi (200 qator qoidasi).
 */
const { User } = require("../models");
const { getPlanConfig } = require("../config/plans");
const { T, fill } = require("./texts");
const ui = require("./ui");

function createFlows({ safeSend, acc, ai, plans, SITE_URL }) {
  const { getLang } = acc;
  const tx = (tgId) => T[getLang(tgId)] || T.uz;
  const mainMenu = (lang) => ui.mainMenu(lang);

  /** Hisob ulanmagan foydalanuvchiga kirish ekrani (yoki bloklangan xabari) */
  async function sendNotRegistered(chatId, tgId) {
    const X = tx(tgId);
    if (acc.isBlocked(tgId)) return safeSend(chatId, X.blocked, { reply_markup: { remove_keyboard: true } });
    await safeSend(chatId, fill(X.onboard, { free: getPlanConfig("free").dailyLimit }), ui.contactMenu(X));
    return safeSend(chatId, X.onboard_site, {
      reply_markup: {
        inline_keyboard: [
          [{ text: X.btn_link_site, url: `${SITE_URL}/login?tg=link` }],
          [{ text: X.btn_open_site, url: SITE_URL }],
        ],
      },
    });
  }

  async function sendWelcome(chatId, tgId, userId) {
    const u = await User.findById(userId).select("firstName fullName").lean().catch(() => null);
    const name = u?.firstName || String(u?.fullName || "").split(" ")[0];
    return safeSend(chatId, fill(tx(tgId).welcome, { name: name ? `, ${ui.esc(name)}` : "" }), mainMenu(getLang(tgId)));
  }

  /** Hisob bormi? Bo'lsa — welcome, bo'lmasa — kirish ekrani */
  async function startScreen(chatId, from) {
    const userId = await acc.findOrLinkUser(from.id, from.username);
    return userId ? sendWelcome(chatId, from.id, userId) : sendNotRegistered(chatId, from.id);
  }

  async function onStart(msg, payload) {
    const chatId = msg.chat.id;
    const tgId = msg.from.id;
    ai.resetSession(tgId);
    if (/^link_[a-f0-9]+$/.test(payload)) {
      if (!acc.userLang.has(tgId)) acc.userLang.set(tgId, "uz");
      const res = await acc.linkByToken(msg.from, payload.slice(5));
      const X = tx(tgId);
      if (res === "linked" || res === "already")
        return safeSend(chatId, res === "linked" ? X.linked : X.already_linked, mainMenu(getLang(tgId)));
      if (res === "blocked") return sendNotRegistered(chatId, tgId);
      return safeSend(chatId, X.link_expired, {
        reply_markup: { inline_keyboard: [[{ text: X.btn_link_site, url: `${SITE_URL}/login?tg=link` }]] },
      });
    }
    // Til hali tanlanmagan bo'lsa — avval til, keyin (callback'da) kirish ekrani
    if (!(await acc.loadLang(tgId))) return safeSend(chatId, T.uz.lang_choose, ui.langKeyboard);
    return startScreen(chatId, msg.from);
  }

  async function onContact(msg) {
    const chatId = msg.chat.id;
    const tgId = msg.from.id;
    const X = tx(tgId);
    const r = await acc.signupByContact(msg);
    if (r.status === "foreign") return safeSend(chatId, X.contact_foreign);
    if (r.status === "bad") return safeSend(chatId, X.contact_bad);
    if (r.status === "blocked") return sendNotRegistered(chatId, tgId);
    if (r.status === "exists")
      return safeSend(chatId, X.contact_exists, {
        reply_markup: { inline_keyboard: [[{ text: X.btn_link_site, url: `${SITE_URL}/login?tg=link` }]] },
      });
    const userId = await acc.findOrLinkUser(tgId, msg.from.username);
    if (r.status === "created") {
      await safeSend(chatId, fill(X.signed_up, { name: ui.esc(r.name) }), mainMenu(getLang(tgId)));
    } else {
      await safeSend(chatId, X.phone_saved, mainMenu(getLang(tgId)));
    }
    if (userId) await plans.resumeAfterContact(chatId, tgId, userId);
  }

  return { sendNotRegistered, sendWelcome, startScreen, onStart, onContact };
}

module.exports = { createFlows };
