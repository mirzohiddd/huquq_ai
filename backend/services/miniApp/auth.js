"use strict";
/**
 * TELEGRAM MINI APP — kirish (initData tekshiruvi).
 *
 * Telegram mini app ochilganda `initData` satrini beradi. U bot tokeni bilan
 * imzolangan: secret = HMAC_SHA256("WebAppData", botToken), hash =
 * HMAC_SHA256(secret, data_check_string). Imzo to'g'ri bo'lsa, foydalanuvchi
 * ID si haqiqatan Telegram'dan kelgan — parol so'ralmaydi.
 * https://core.telegram.org/bots/webapps#validating-data-received-via-the-mini-app
 */
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { User } = require("../../models");

const MAX_AGE_SEC = 24 * 3600; // eski (o'g'irlangan) initData qayta ishlatilmasin

/** @returns {{ id: string, first_name?: string, last_name?: string, username?: string, language_code?: string } | null} */
function verifyInitData(initData, botToken = process.env.TELEGRAM_BOT_TOKEN) {
  if (!initData || !botToken || typeof initData !== "string" || initData.length > 4096) return null;
  const params = new URLSearchParams(initData);
  const hash = params.get("hash");
  if (!hash || !/^[a-f0-9]{64}$/.test(hash)) return null;
  params.delete("hash");
  const check = [...params.entries()]
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([k, v]) => `${k}=${v}`)
    .join("\n");
  const secret = crypto.createHmac("sha256", "WebAppData").update(botToken).digest();
  const calc = crypto.createHmac("sha256", secret).update(check).digest();
  if (!crypto.timingSafeEqual(calc, Buffer.from(hash, "hex"))) return null;
  const authDate = Number(params.get("auth_date")) || 0;
  if (Date.now() / 1000 - authDate > MAX_AGE_SEC) return null;
  try {
    const user = JSON.parse(params.get("user") || "null");
    return user?.id ? { ...user, id: String(user.id) } : null;
  } catch {
    return null;
  }
}

/** Reytingda ko'rinadigan qisqa ism: "Dilnoza R." */
function displayName(user, tg) {
  const first = (user.firstName || tg?.first_name || "").trim();
  const last = (user.lastName || tg?.last_name || "").trim();
  if (first) return last ? `${first} ${last[0].toUpperCase()}.` : first;
  return "Foydalanuvchi";
}

/**
 * initData → saytdagi oddiy foydalanuvchi tokeni (chat va AI yo'llari ham
 * shu token bilan ishlaydi). Hisob topilmasa — `{ needsRegister: true }`.
 */
async function loginWithInitData(initData) {
  const tg = verifyInitData(initData);
  if (!tg) return { error: "invalid" };
  const user = await User.findOne({ telegramId: tg.id }).select("username firstName lastName isBlocked telegramLang").lean();
  if (!user) return { needsRegister: true, tg };
  if (user.isBlocked) return { error: "blocked" };
  const token = jwt.sign({ id: user._id, username: user.username, type: "user" }, process.env.JWT_SECRET, { expiresIn: "7d" });
  const lang = user.telegramLang || (tg.language_code === "ru" ? "ru" : "uz");
  return { token, user, tg, lang, name: displayName(user, tg) };
}

module.exports = { verifyInitData, loginWithInitData, displayName };
