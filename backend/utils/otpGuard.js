"use strict";
/**
 * EMAIL TASDIQLASH KODI (OTP) HIMOYASI.
 *
 * ⚠️ NIMA UCHUN KERAK (2026-09-13 xavfsizlik auditi): `verify-otp` da
 * urinishlar soni UMUMAN cheklanmagan edi. Kod 6 xonali (900 000 variant)
 * va 10 daqiqa amal qiladi. `/api/auth` limiti qurilma bo'yicha
 * (`X-Device-Id`) ishlaydi va hujumchi uni har so'rovda almashtira oladi —
 * ya'ni kodni tanlab topib, BEGONA emailga hisob ochish mumkin edi.
 *
 * Yechim — hisob (email) bo'yicha hisoblagich: MAX_ATTEMPTS ta xatodan
 * keyin kod BAZADAN O'CHIRILADI va faqat yangi kod so'rash mumkin bo'ladi.
 * Kalit email bo'lgani uchun qurilma/IP almashtirish yordam bermaydi.
 *
 * Xotirada saqlanadi: server qayta ishga tushsa hisoblagich nolga
 * qaytadi, lekin kod ham baribir 10 daqiqada eskiradi — tanlab topish
 * uchun yetarli urinish to'planmaydi.
 */
const crypto = require("crypto");

const MAX_ATTEMPTS = 5;
const RESEND_COOLDOWN_MS = 60 * 1000;
const ENTRY_TTL_MS = 30 * 60 * 1000;

const failures = new Map(); // email -> { count, at }
const lastSent = new Map(); // email -> timestamp

setInterval(() => {
  const now = Date.now();
  for (const [k, v] of failures) if (now - v.at > ENTRY_TTL_MS) failures.delete(k);
  for (const [k, t] of lastSent) if (now - t > ENTRY_TTL_MS) lastSent.delete(k);
}, 5 * 60 * 1000).unref?.();

/** Satrlarni vaqt bo'yicha xavfsiz solishtirish (timing attack'ga qarshi). */
function safeEqual(a, b) {
  const x = Buffer.from(String(a ?? ""));
  const y = Buffer.from(String(b ?? ""));
  if (x.length !== y.length) return false;
  return crypto.timingSafeEqual(x, y);
}

/** Xato urinishni qayd etadi. `true` — limit tugadi, kodni bekor qilish kerak. */
function recordOtpFailure(email) {
  const e = failures.get(email) || { count: 0, at: Date.now() };
  e.count += 1;
  e.at = Date.now();
  failures.set(email, e);
  return e.count >= MAX_ATTEMPTS;
}

function clearOtpFailures(email) {
  failures.delete(email);
}

/** Yangi kod yuborishga necha soniya qolgani (0 — yuborish mumkin). */
function resendWaitSeconds(email) {
  const t = lastSent.get(email);
  if (!t) return 0;
  const left = RESEND_COOLDOWN_MS - (Date.now() - t);
  return left > 0 ? Math.ceil(left / 1000) : 0;
}

function markOtpSent(email) {
  lastSent.set(email, Date.now());
}

module.exports = {
  MAX_ATTEMPTS,
  safeEqual,
  recordOtpFailure,
  clearOtpFailures,
  resendWaitSeconds,
  markOtpSent,
};
