"use strict";
/**
 * BOT — TIL, FOYDALANUVCHINI TOPISH, HISOBNI ULASH, RAQAM ORQALI RO'YXAT.
 *
 * Kirish yo'llari (2026-10-03):
 *  1. «📱 Raqamni yuborish» — Telegram kontaktidan hisob bir zumda ochiladi.
 *     Raqam TELEGRAM tomonidan tasdiqlangan (`phoneVerified: true`).
 *  2. Saytdagi hisob — `/start link_<token>` (sayt yaratgan bir martalik havola).
 *
 * ⚠️ XAVFSIZLIK: kontakt raqami saytdagi mavjud hisob raqamiga mos kelsa
 * ham AVTOMATIK ULANMAYDI. Saytdagi raqam tasdiqlanmagan — begona odam
 * saytda birovning raqamini yozib qo'yib, egasini O'Z hisobiga ulatib,
 * uning savollarini o'qishi mumkin bo'lardi. Bunday holatda sayt orqali
 * ulash taklif qilinadi (u yerda parol bilan kiriladi).
 */
const crypto = require("crypto");
const { User } = require("../models");
const { normalizePhone, cleanName } = require("../utils/phone");

const SUPPORTED = ["uz", "ru"];
const CACHE_TTL_MS = 5 * 60 * 1000;

function createAccount() {
  const userLang = new Map(); // tgId -> "uz"|"ru"
  /* tgId(string) -> { id, at }. TTL bilan: avval kesh abadiy edi va admin
     bloklagan yoki o'chirgan foydalanuvchi botdan foydalanishda davom etardi.
     ⚠️ `telegram-bot.js` buni `verifiedUsers` nomi bilan eksport qiladi —
     `routes/admin.js` foydalanuvchini o'chirganda `.delete()` chaqiradi. */
  const verifiedUsers = new Map();
  const blocked = new Set(); // tgId(string)

  const getLang = (tgId) => userLang.get(tgId) || "uz";

  /** Tilni keshga yuklaydi; `null` — hali tanlanmagan */
  async function loadLang(tgId) {
    if (userLang.has(tgId)) return userLang.get(tgId);
    try {
      const u = await User.findOne({ telegramId: String(tgId) }).select("telegramLang").lean();
      if (u?.telegramLang && SUPPORTED.includes(u.telegramLang)) {
        userLang.set(tgId, u.telegramLang);
        return u.telegramLang;
      }
    } catch (err) {
      console.error("loadLang xato:", err.message);
    }
    return null;
  }

  function setLang(tgId, lang) {
    if (!SUPPORTED.includes(lang)) return;
    userLang.set(tgId, lang);
    User.updateOne({ telegramId: String(tgId) }, { $set: { telegramLang: lang } }).catch((err) =>
      console.error("setLang xato:", err.message),
    );
  }

  function remember(tgId, user) {
    if (user.isBlocked) {
      blocked.add(tgId);
      verifiedUsers.delete(tgId);
      return null;
    }
    blocked.delete(tgId);
    verifiedUsers.set(tgId, { id: user._id, at: Date.now() });
    return user._id;
  }

  /** Ulangan hisob ID'si yoki `null` (ulanmagan / bloklangan) */
  async function findOrLinkUser(telegramUserId, telegramUsername) {
    const tgId = String(telegramUserId);
    const hit = verifiedUsers.get(tgId);
    if (hit && Date.now() - hit.at < CACHE_TTL_MS) return hit.id;
    try {
      const user = await User.findOne({ telegramId: tgId }).select("isBlocked telegramUsername");
      if (user) {
        if (telegramUsername && user.telegramUsername !== telegramUsername) {
          User.updateOne({ _id: user._id }, { telegramUsername }).catch(() => {});
        }
        return remember(tgId, user);
      }
      verifiedUsers.delete(tgId);
      // Eski oqim: saytda Telegram username yozib qo'ygan foydalanuvchi
      if (telegramUsername) {
        const pending = await User.findOne({
          pendingTelegramUsername: telegramUsername.toLowerCase().replace("@", ""),
          emailVerified: true,
          telegramVerified: { $ne: true },
        });
        if (pending) {
          pending.telegramId = tgId;
          pending.telegramUsername = telegramUsername;
          pending.telegramVerified = true;
          pending.pendingTelegramUsername = null;
          await pending.save();
          return remember(tgId, pending);
        }
      }
    } catch (err) {
      console.error("findOrLinkUser xato:", err.message);
    }
    return null;
  }

  const isBlocked = (tgId) => blocked.has(String(tgId));

  /** `/start link_<token>` — saytdagi hisobni ulash */
  async function linkByToken(from, token) {
    const tgId = String(from.id);
    const existing = await User.findOne({ telegramId: tgId });
    if (existing) {
      remember(tgId, existing);
      return existing.isBlocked ? "blocked" : "already";
    }
    const user = await User.findOne({ otpCode: `tglink_${token}`, otpExpires: { $gt: new Date() } });
    if (!user) return "expired";
    user.telegramId = tgId;
    user.telegramUsername = from.username || null;
    user.telegramVerified = true;
    user.otpCode = null;
    user.otpExpires = null;
    if (userLang.has(from.id)) user.telegramLang = userLang.get(from.id);
    await user.save();
    remember(tgId, user);
    return user.isBlocked ? "blocked" : "linked";
  }

  async function uniqueUsername(tgId) {
    const base = `tg${tgId}`.slice(0, 26);
    if (!(await User.exists({ username: base }))) return base;
    return `${base}_${crypto.randomBytes(2).toString("hex")}`;
  }

  /**
   * Kontakt yuborildi → hisob ochiladi.
   * @returns {Promise<{status:"created"|"already"|"exists"|"foreign"|"bad"|"blocked", name?:string}>}
   */
  async function signupByContact(msg) {
    const c = msg.contact;
    if (!c || String(c.user_id) !== String(msg.from.id)) return { status: "foreign" };
    const tgId = String(msg.from.id);
    const phone = normalizePhone(c.phone_number);
    if (!phone) return { status: "bad" };

    const linked = await User.findOne({ telegramId: tgId });
    if (linked) {
      if (!linked.phone) {
        linked.phone = phone;
        linked.phoneVerified = true;
        await linked.save();
      }
      return remember(tgId, linked) ? { status: "already" } : { status: "blocked" };
    }
    if (await User.exists({ phone })) return { status: "exists" };

    const firstName = cleanName(c.first_name || msg.from.first_name) || "Foydalanuvchi";
    const lastName = cleanName(c.last_name || msg.from.last_name);
    const user = await User.create({
      username: await uniqueUsername(tgId),
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`.trim(),
      phone,
      phoneVerified: true,
      authProvider: "telegram",
      telegramId: tgId,
      telegramUsername: msg.from.username || null,
      telegramVerified: true,
      telegramLang: getLang(msg.from.id),
      lastLogin: new Date(),
    });
    remember(tgId, user);
    return { status: "created", name: firstName };
  }

  return {
    userLang,
    verifiedUsers,
    getLang,
    loadLang,
    setLang,
    findOrLinkUser,
    isBlocked,
    linkByToken,
    signupByContact,
  };
}

module.exports = { createAccount };
