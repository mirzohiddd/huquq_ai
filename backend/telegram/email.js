"use strict";
/**
 * BOT — RO'YXATNI YAKUNLASH: telefon + EMAIL (2026-10-30).
 *
 * Telegram orqali ochilgan hisobda ikkalasi ham bo'lishi shart:
 *  1. telefon — «📱 Raqamni yuborish» (Telegram tasdiqlagan kontakt);
 *  2. email — foydalanuvchi yozadi, unga 6 xonali kod yuboriladi, kod botga
 *     yozilgach `emailVerified: true` bo'ladi.
 *
 * ⚠️ XAVFSIZLIK: email TASDIQLANMAGUNCHA hisobga yozilmaydi (birovning
 * emailini egallab olib bo'lmaydi). Bazada kodning faqat HASH'i turadi,
 * 10 daqiqa amal qiladi, 5 ta noto'g'ri urinishdan keyin bekor bo'ladi.
 * Boshqa hisobdagi yoki bloklangan email qabul qilinmaydi.
 */
const crypto = require("crypto");
const { User, BannedEmail } = require("../models");
const { sendOTPEmail } = require("../services/emailService");
const { missingOf } = require("../services/miniApp/auth");

const EMAIL_RE = /^[^\s@]{1,64}@[^\s@]{1,190}\.[a-z]{2,}$/i;
const TTL_MS = 10 * 60 * 1000;
const MAX_TRIES = 5;
const hash = (code) => crypto.createHash("sha256").update(String(code)).digest("hex");

function createEmailStep({ safeSend, tx, mainMenu, getLang, contactMenu, appMessage }) {
  const complete = new Set(); // ro'yxati to'liq hisoblar (har xabarda bazaga bormaslik uchun)

  /** Nima yetishmaydi: "phone" | "email" | null */
  async function missing(userId) {
    const id = String(userId);
    if (complete.has(id)) return null;
    const u = await User.findById(userId).select("phone email emailVerified googleId").lean();
    const m = u ? missingOf(u) : null;
    if (!m) complete.add(id);
    return m;
  }

  /** Yetishmayotgan qadamni so'raydi */
  async function ask(chatId, tgId, what) {
    const X = tx(tgId);
    if (what === "phone") return safeSend(chatId, X.need_phone, contactMenu(tgId));
    return safeSend(chatId, X.email_ask, { reply_markup: { remove_keyboard: true } });
  }

  async function sendCode(chatId, tgId, userId, email) {
    const X = tx(tgId);
    if (await BannedEmail.exists({ email })) return safeSend(chatId, X.email_taken);
    if (await User.exists({ email, _id: { $ne: userId } })) return safeSend(chatId, X.email_taken);
    const code = String(crypto.randomInt(100000, 1000000));
    const u = await User.findByIdAndUpdate(userId, {
      $set: { pendingEmail: email, pendingEmailCode: hash(code), pendingEmailExpires: new Date(Date.now() + TTL_MS), pendingEmailTries: 0 },
    }).select("firstName").lean();
    try {
      await sendOTPEmail(email, code, u?.firstName || "");
    } catch (err) {
      console.error("bot email kodi yuborilmadi:", err.message);
      return safeSend(chatId, X.email_send_fail);
    }
    return safeSend(chatId, X.email_code_sent.replace("{email}", email));
  }

  async function checkCode(chatId, tgId, userId, code) {
    const X = tx(tgId);
    const u = await User.findById(userId).select("pendingEmail pendingEmailCode pendingEmailExpires pendingEmailTries");
    if (!u?.pendingEmail || !u.pendingEmailExpires || u.pendingEmailExpires < new Date() || u.pendingEmailTries >= MAX_TRIES) {
      return safeSend(chatId, X.email_code_expired);
    }
    if (hash(code) !== u.pendingEmailCode) {
      u.pendingEmailTries += 1;
      await u.save();
      return safeSend(chatId, X.email_code_wrong);
    }
    if (await User.exists({ email: u.pendingEmail, _id: { $ne: userId } })) return safeSend(chatId, X.email_taken);
    u.email = u.pendingEmail;
    u.emailVerified = true;
    u.pendingEmail = u.pendingEmailCode = u.pendingEmailExpires = null;
    u.pendingEmailTries = 0;
    await u.save();
    complete.add(String(userId));
    await safeSend(chatId, X.email_done, mainMenu(getLang(tgId)));
    const a = appMessage(getLang(tgId)); // ro'yxat to'liq — ilovani ochish tugmasi
    return safeSend(chatId, a.text, a.opts);
  }

  /**
   * Ro'yxati to'liq bo'lmagan foydalanuvchi xabari. `true` — xabar shu yerda
   * ishlandi (AI'ga, darslarga o'tmaydi); `false` — hisob to'liq.
   */
  async function handle(msg, userId) {
    const what = await missing(userId);
    if (!what) return false;
    const chatId = msg.chat.id;
    const tgId = msg.from.id;
    const text = String(msg.text || "").trim();
    if (what === "email" && EMAIL_RE.test(text)) await sendCode(chatId, tgId, userId, text.toLowerCase());
    else if (what === "email" && /^\d{6}$/.test(text)) await checkCode(chatId, tgId, userId, text);
    else await ask(chatId, tgId, what);
    return true;
  }

  return { missing, ask, handle, forget: (userId) => complete.delete(String(userId)) };
}

module.exports = { createEmailStep };
