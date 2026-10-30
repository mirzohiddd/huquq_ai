"use strict";
/**
 * BOT — SAYTGA TELEGRAM ORQALI KIRISH (`/start login_<token>`, 2026-10-30).
 * Hisob bor bo'lsa — darhol tasdiqlanadi; yo'q bo'lsa raqam so'raladi,
 * kontakt kelgach hisob ochiladi va so'rov o'sha hisob bilan tasdiqlanadi.
 * Sayt (routes/authTelegram.js → poll) shundan keyin o'zi kiradi.
 */
const crypto = require("crypto");
const { TgLogin } = require("../models/tgLogin");

const hash = (t) => crypto.createHash("sha256").update(String(t)).digest("hex");

function createSiteLogin({ safeSend, acc, tx, mainMenu, SITE_URL }) {
  const pending = new Map(); // tgId → { token, at } — raqam kutilmoqda

  async function approve(chatId, tgId, token, userId) {
    const r = await TgLogin.updateOne({ hash: hash(token), userId: null }, { $set: { userId } });
    const X = tx(tgId);
    if (!r.modifiedCount) {
      return safeSend(chatId, X.site_login_expired, { reply_markup: { inline_keyboard: [[{ text: X.btn_open_site, url: `${SITE_URL}/login` }]] } });
    }
    await safeSend(chatId, X.site_login_ok, mainMenu(acc.getLang(tgId)));
    return safeSend(chatId, X.site_login_back, { reply_markup: { inline_keyboard: [[{ text: X.btn_open_site, url: `${SITE_URL}/chat` }]] } });
  }

  /** `/start login_<token>` — `true`: shu yerda ishlandi */
  async function onStart(msg, token, sendNotRegistered) {
    const chatId = msg.chat.id;
    const tgId = msg.from.id;
    if (!acc.userLang.has(tgId)) acc.userLang.set(tgId, (await acc.loadLang(tgId)) || "uz");
    const userId = await acc.findOrLinkUser(tgId, msg.from.username);
    if (userId) return approve(chatId, tgId, token, userId);
    if (acc.isBlocked(tgId)) return sendNotRegistered(chatId, tgId);
    pending.set(String(tgId), { token, at: Date.now() });
    return sendNotRegistered(chatId, tgId); // «📱 Raqamni yuborish» — bir bosishda hisob
  }

  /** Kontakt bilan hisob ochilgach / topilgach — kutilayotgan kirishni tasdiqlaydi */
  async function afterContact(chatId, tgId, userId) {
    const p = pending.get(String(tgId));
    if (!p || !userId) return;
    pending.delete(String(tgId));
    if (Date.now() - p.at > 10 * 60 * 1000) return;
    await approve(chatId, tgId, p.token, userId);
  }

  return { onStart, afterContact };
}

module.exports = { createSiteLogin };
