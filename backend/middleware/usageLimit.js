"use strict";
/**
 * Kunlik AI savol limitini tekshiradi.
 * Limit oshganda foydalanuvchi keyingi kun 00:00 UTC da ochiladi.
 */
const { UsageLog, GuestUsageLog, User, getUserTier } = require("../models");
const { getClientIp } = require("./security");
const { getPlanConfig } = require("../config/plans");

// Kunlik limit — foydalanuvchining faol tarifiga qarab config/plans.js dan
// AVTOMATIK olinadi (admin qo'lda belgilamaydi).
function effectiveLimit(user) {
  return getPlanConfig(getUserTier(user)).dailyLimit;
}

// Login qilmagan (mehmon) foydalanuvchilar uchun kunlik limit — IP bo'yicha.
// .env orqali sozlanadi (GUEST_DAILY_LIMIT), default: 3. Ro'yxatdan o'tgan
// foydalanuvchining default limiti (5) dan pastroq — ro'yxatdan o'tishga
// undash va IP-asosli chetlab o'tishning (masalan IP almashtirish) real
// xarajat ta'sirini kamaytirish uchun. Zarur bo'lsa bu raqamni bemalol
// o'zgartirsangiz bo'ladi — bu shunchaki boshlang'ich tavsiya.
const GUEST_DAILY_LIMIT = parseInt(process.env.GUEST_DAILY_LIMIT || "3", 10);

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function getUnblockTime() {
  const tomorrow = new Date();
  tomorrow.setUTCDate(tomorrow.getUTCDate() + 1);
  tomorrow.setUTCHours(0, 0, 0, 0);
  return tomorrow;
}

function msUntilUnblock(unblockTime) {
  return Math.max(0, new Date(unblockTime) - Date.now());
}

/**
 * Qolgan vaqtni 3 tilda formatlaydi
 * lang: "uz" | "ru" | "en"
 */
function formatTimeLeft(ms, lang = "uz") {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);

  if (lang === "ru") {
    if (h > 0) return `${h} ч ${m} мин`;
    return `${m} мин`;
  }
  if (lang === "en") {
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
  }
  // uz (default)
  if (h > 0) return `${h} soat ${m} daqiqa`;
  return `${m} daqiqa`;
}

/**
 * unblockAt vaqtini mahalliy ko'rinishda formatlaydi
 * Masalan: "ertaga 03:00" yoki "07:30"
 */
function formatUnblockAt(unblockTime, lang = "uz") {
  const now = new Date();
  const dt = new Date(unblockTime);

  // Toshkent: UTC+5
  const offsetMs = 5 * 60 * 60 * 1000;
  const localNow = new Date(now.getTime() + offsetMs);
  const localDt = new Date(dt.getTime() + offsetMs);

  const hh = String(localDt.getUTCHours()).padStart(2, "0");
  const mm = String(localDt.getUTCMinutes()).padStart(2, "0");
  const timeStr = `${hh}:${mm}`;

  const isTomorrow = localDt.getUTCDate() !== localNow.getUTCDate();

  if (lang === "ru")
    return isTomorrow ? `завтра в ${timeStr}` : `сегодня в ${timeStr}`;
  if (lang === "en")
    return isTomorrow ? `tomorrow at ${timeStr}` : `today at ${timeStr}`;
  return isTomorrow ? `ertaga ${timeStr} da` : `bugun ${timeStr} da`;
}

/**
 * Limit oshganda { limitExceeded, used, limit, unblockAt, timeLeft, unblockAtStr } qaytaradi.
 * Muvaffaqiyatli bo'lsa null qaytaradi.
 */
async function checkAndIncrement(userId) {
  const date = todayStr();
  const user = await User.findById(userId)
    .select("dailyLimit plan planExpiresAt")
    .lean();
  const limit = effectiveLimit(user);

  // ATOMIC: count < limit bo'lgandagina increment qiladi
  // Bu parallel so'rovlarda ham limitni kafolatli saqlaydi
  const log = await UsageLog.findOneAndUpdate(
    { userId, date, count: { $lt: limit } },
    { $inc: { count: 1 } },
    { upsert: false, new: true },
  );

  // log null = yozuv yo'q (birinchi savol) yoki limit to'lgan
  if (!log) {
    // Birinchi savol bo'lsa upsert
    const existing = await UsageLog.findOne({ userId, date }).lean();
    if (!existing) {
      await UsageLog.create({ userId, date, count: 1 });
      return null; // OK, birinchi savol
    }
    // Limit to'lgan
    const unblockAt = getUnblockTime();
    const msLeft = msUntilUnblock(unblockAt);
    return {
      limitExceeded: true,
      used: existing.count,
      limit,
      unblockAt,
      msLeft,
      timeLeft: {
        uz: formatTimeLeft(msLeft, "uz"),
        ru: formatTimeLeft(msLeft, "ru"),
        en: formatTimeLeft(msLeft, "en"),
      },
      unblockAtStr: {
        uz: formatUnblockAt(unblockAt, "uz"),
        ru: formatUnblockAt(unblockAt, "ru"),
        en: formatUnblockAt(unblockAt, "en"),
      },
    };
  }

  return null; // OK
}

/**
 * checkAndIncrement bilan bir xil atomic pattern — faqat login qilmagan
 * (mehmon) foydalanuvchilar uchun, userId o'rniga IP bo'yicha.
 */
async function checkAndIncrementGuest(ip) {
  const date = todayStr();
  const limit = GUEST_DAILY_LIMIT;

  const log = await GuestUsageLog.findOneAndUpdate(
    { ip, date, count: { $lt: limit } },
    { $inc: { count: 1 } },
    { upsert: false, new: true },
  );

  if (!log) {
    const existing = await GuestUsageLog.findOne({ ip, date }).lean();
    if (!existing) {
      await GuestUsageLog.create({ ip, date, count: 1 });
      return null; // OK, birinchi savol
    }
    const unblockAt = getUnblockTime();
    const msLeft = msUntilUnblock(unblockAt);
    return {
      limitExceeded: true,
      used: existing.count,
      limit,
      unblockAt,
      msLeft,
      timeLeft: {
        uz: formatTimeLeft(msLeft, "uz"),
        ru: formatTimeLeft(msLeft, "ru"),
        en: formatTimeLeft(msLeft, "en"),
      },
      unblockAtStr: {
        uz: formatUnblockAt(unblockAt, "uz"),
        ru: formatUnblockAt(unblockAt, "ru"),
        en: formatUnblockAt(unblockAt, "en"),
      },
    };
  }

  return null; // OK
}

/**
 * Express middleware — web chat uchun.
 * Login qilingan bo'lsa — tarifga qarab userId-asosli limit.
 * Login qilinmagan (mehmon) bo'lsa — IP-asosli kichik bepul limit
 * (GUEST_DAILY_LIMIT). Avval mehmonlar umuman bloklanardi (401), endi
 * ular ham AI'ni sinab ko'ra oladi va limit tugagach ro'yxatdan o'tishga
 * taklif qilinadi (javobda registerRequired:true bo'ladi).
 */
async function webLimitGuard(req, res, next) {
  try {
    const userId = req.authUser?.id;

    if (!userId) {
      const ip = getClientIp(req);
      const guestResult = await checkAndIncrementGuest(ip);
      if (guestResult) {
        return res.status(429).json({
          error: `Bepul ${guestResult.limit} ta savol tugadi. Davom ettirish uchun ro'yxatdan o'ting.`,
          limitExceeded: true,
          guest: true,
          registerRequired: true,
          used: guestResult.used,
          limit: guestResult.limit,
        });
      }
      return next();
    }

    const result = await checkAndIncrement(userId);
    if (result) {
      return res.status(429).json({
        error: `Kunlik limit tugadi (${result.limit} ta savol). ${result.unblockAtStr.uz} ochiladi.`,
        limitExceeded: true,
        used: result.used,
        limit: result.limit,
        unblockAt: result.unblockAt,
        timeLeft: result.timeLeft.uz,
        unblockAtStr: result.unblockAtStr,
      });
    }
    next();
  } catch (err) {
    console.error("usageLimit error:", err.message);
    next();
  }
}

/**
 * Mobile limit guard.
 * Login qilingan bo'lsa — oddiy userId-asosli limit.
 * Login qilinmagan (mehmon) bo'lsa — IP-asosli limit (avval bu holatda
 * hech qanday tekshiruv bo'lmagan, ya'ni AI so'rovlar chekloмасди edi).
 */
async function mobileLimitGuard(req, res, next) {
  try {
    const userId = req.authUser?.id;

    if (!userId) {
      const ip = getClientIp(req);
      const result = await checkAndIncrementGuest(ip);
      if (result) {
        return res.status(429).json({
          error: `Kunlik bepul limit tugadi (${result.limit} ta savol). Ko'proq savol berish uchun ro'yxatdan o'ting, yoki ${result.unblockAtStr.uz} qayta urinib ko'ring.`,
          limitExceeded: true,
          guest: true,
          used: result.used,
          limit: result.limit,
          unblockAt: result.unblockAt,
          timeLeft: result.timeLeft.uz,
          unblockAtStr: result.unblockAtStr,
        });
      }
      return next();
    }

    const result = await checkAndIncrement(userId);
    if (result) {
      return res.status(429).json({
        error: `Kunlik limit tugadi (${result.limit} ta savol). ${result.unblockAtStr.uz} ochiladi.`,
        limitExceeded: true,
        used: result.used,
        limit: result.limit,
        unblockAt: result.unblockAt,
        timeLeft: result.timeLeft.uz,
        unblockAtStr: result.unblockAtStr,
      });
    }
    next();
  } catch (err) {
    console.error("mobileLimitGuard error:", err.message);
    next();
  }
}

/**
 * Foydalanuvchining bugungi foydalanish statistikasini qaytaradi
 */
/**
 * Mehmon (login qilmagan) foydalanuvchining bugungi holati — IP bo'yicha.
 * Frontend chat oynasida "yana N ta bepul savol qoldi" ni ko'rsatish uchun.
 */
async function getGuestUsageStats(ip) {
  const date = todayStr();
  const log = await GuestUsageLog.findOne({ ip, date }).lean();
  const used = log?.count || 0;
  return {
    guest: true,
    used,
    limit: GUEST_DAILY_LIMIT,
    remaining: Math.max(0, GUEST_DAILY_LIMIT - used),
  };
}

async function getUsageStats(userId) {
  const date = todayStr();
  const log = await UsageLog.findOne({ userId, date }).lean();
  const user = await User.findById(userId)
    .select("dailyLimit plan planExpiresAt")
    .lean();
  const limit = effectiveLimit(user);
  const used = log?.count || 0;

  if (used >= limit) {
    const unblockAt = getUnblockTime();
    const msLeft = msUntilUnblock(unblockAt);
    return {
      used,
      limit,
      remaining: 0,
      unblockAt,
      timeLeft: {
        uz: formatTimeLeft(msLeft, "uz"),
        ru: formatTimeLeft(msLeft, "ru"),
        en: formatTimeLeft(msLeft, "en"),
      },
      unblockAtStr: {
        uz: formatUnblockAt(unblockAt, "uz"),
        ru: formatUnblockAt(unblockAt, "ru"),
        en: formatUnblockAt(unblockAt, "en"),
      },
    };
  }

  return { used, limit, remaining: Math.max(0, limit - used) };
}

/* ── OVOZLI CHAT LIMITI — endi TARIFGA bog'liq ──────────────────
   Avval bu qiymat hamma uchun qat'iy 5 edi: Premium sotib olgan ham,
   bepul foydalanuvchi ham bir xil ovoz limitiga tushardi. Endi u
   `config/plans.js` dagi `voiceDailyLimit` dan olinadi (bepul 2,
   Basic 5, Pro 15, Premium 30). */
async function voiceLimitOf(userId) {
  const user = await User.findById(userId).select("plan planExpiresAt").lean();
  return getPlanConfig(getUserTier(user)).voiceDailyLimit;
}

/* Mehmonlar uchun ovoz limiti — ATAYLAB juda past.
   Ovozli so'rov eng qimmat amal (nutqni matnga o'girish + AI + ovoz
   sintezi), shuning uchun u ro'yxatdan o'tganlar uchun mo'ljallangan. */
const GUEST_VOICE_LIMIT = parseInt(
  process.env.GUEST_VOICE_DAILY_LIMIT || "2",
  10,
);

async function voiceLimitGuard(req, res, next) {
  try {
    const userId = req.authUser?.id;

    /* ⚠️ TUZATILGAN TESHIK (2026-08-07): bu yerda avval
       `if (!userId) return next();` turgan edi — ya'ni LOGIN
       QILMAGAN foydalanuvchi ovoz endpointlarini CHEKSIZ ishlata
       olardi. Bu to'g'ridan-to'g'ri pul xarajati (STT + AI + TTS) va
       xizmatni ishdan chiqarish uchun eng oson yo'l edi.
       Endi mehmonlar ham qurilma+IP bo'yicha kunlik limitga tushadi. */
    if (!userId) {
      const ip = getClientIp(req);
      const device = String(req.headers["x-device-id"] || "").slice(0, 64);
      const key = `${ip}|${device}`;
      const date = todayStr() + "_guestvoice";
      const log = await GuestUsageLog.findOneAndUpdate(
        { ip: key, date, count: { $lt: GUEST_VOICE_LIMIT } },
        { $inc: { count: 1 } },
        { upsert: false, new: true },
      );
      if (!log) {
        const existing = await GuestUsageLog.findOne({ ip: key, date }).lean();
        if (!existing) {
          await GuestUsageLog.create({ ip: key, date, count: 1 });
          return next();
        }
        return res.status(429).json({
          limitExceeded: true,
          registerRequired: true,
          error: {
            uz: `Ovozli xizmat mehmonlar uchun kuniga ${GUEST_VOICE_LIMIT} marta. Davom etish uchun ro'yxatdan o'ting — bepul.`,
            ru: `Голосовой сервис для гостей — ${GUEST_VOICE_LIMIT} раза в день. Зарегистрируйтесь бесплатно, чтобы продолжить.`,
          },
          used: existing.count,
          limit: GUEST_VOICE_LIMIT,
        });
      }
      return next();
    }

    const date = todayStr() + "_voice";
    const VOICE_LIMIT = await voiceLimitOf(userId);

    const log = await UsageLog.findOneAndUpdate(
      { userId, date, count: { $lt: VOICE_LIMIT } },
      { $inc: { count: 1 } },
      { upsert: false, new: true },
    );

    if (!log) {
      const existing = await UsageLog.findOne({ userId, date }).lean();
      if (!existing) {
        await UsageLog.create({ userId, date, count: 1 });
        return next(); // birinchi savol
      }
      // Limit tugadi
      const unblockAt = getUnblockTime();
      const msLeft = msUntilUnblock(unblockAt);
      return res.status(429).json({
        limitExceeded: true,
        error: {
          uz: `Kunlik ovozli chat limiti tugadi (${VOICE_LIMIT} ta savol). ${formatUnblockAt(unblockAt, "uz")} ochiladi.`,
          ru: `Дневной лимит голосового чата исчерпан (${VOICE_LIMIT} вопросов). Откроется ${formatUnblockAt(unblockAt, "ru")}.`,
          en: `Daily voice limit reached (${VOICE_LIMIT} questions). Opens at ${formatUnblockAt(unblockAt, "en")}.`,
        },
        used: existing.count,
        limit: VOICE_LIMIT,
        unblockAt,
        timeLeft: {
          uz: formatTimeLeft(msLeft, "uz"),
          ru: formatTimeLeft(msLeft, "ru"),
          en: formatTimeLeft(msLeft, "en"),
        },
      });
    }

    next();
  } catch (err) {
    console.error("voiceLimitGuard xato:", err.message);
    next();
  }
}

module.exports = {
  webLimitGuard,
  mobileLimitGuard,
  voiceLimitGuard,
  checkAndIncrement,
  getUsageStats,
  getGuestUsageStats,
  GUEST_DAILY_LIMIT,
};
