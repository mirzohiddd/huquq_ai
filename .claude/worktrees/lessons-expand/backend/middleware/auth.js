"use strict";
const jwt = require("jsonwebtoken");

// JWT tekshirishda ruxsat etilgan algoritmni aniq cheklaymiz — bu
// "algorithm confusion" turidagi hujumlarga qarshi standart himoya.
const JWT_VERIFY_OPTS = { algorithms: ["HS256"] };

// ── Bloklangan foydalanuvchilar uchun tezkor (fast-path) invalidatsiya ──
// Muammo: JWT stateless bo'lgani uchun, admin foydalanuvchini bloklaganda
// bazadagi isBlocked=true darhol kuchga kirmaydi — token muddati (odatda
// 7 kun) tugagunicha eski token ishlayverardi. Bu Set shu bo'shliqni
// yopadi: bloklash amalga oshirilgan zahoti shu yerga qo'shiladi va har
// so'rovda tekshiriladi. 30 daqiqadan keyin o'zi tozalanadi (xotira
// oshib ketmasligi uchun) — bu vaqt ichida allaqachon barcha kelgusi
// tekshiruvlar (masalan keyingi login urinishi) bazadan to'g'ri isBlocked
// holatini o'qiydi, shuning uchun uzoq muddatli haqiqat manbai baribir DB.
const recentlyBlockedUserIds = new Set();
const BLOCK_CACHE_MS = 30 * 60 * 1000;

function markUserBlocked(userId) {
  const id = String(userId);
  recentlyBlockedUserIds.add(id);
  setTimeout(() => recentlyBlockedUserIds.delete(id), BLOCK_CACHE_MS).unref?.();
}

function markUserUnblocked(userId) {
  recentlyBlockedUserIds.delete(String(userId));
}

function makeGuard(type) {
  return function guard(req, res, next) {
    const header = req.headers.authorization || "";
    if (!header.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Avtorizatsiya talab qilinadi" });
    }
    const token = header.slice(7);
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET, JWT_VERIFY_OPTS);
      if (decoded.type !== type) {
        return res.status(403).json({ error: "Ruxsat yo'q" });
      }
      if (type === "user" && recentlyBlockedUserIds.has(String(decoded.id))) {
        return res.status(403).json({ error: "Hisobingiz bloklangan" });
      }
      req.authUser = decoded;
      next();
    } catch {
      return res.status(401).json({ error: "Token yaroqsiz yoki muddati tugagan" });
    }
  };
}

function optionalUserGuard(req, res, next) {
  const header = req.headers.authorization || "";
  if (!header.startsWith("Bearer ")) {
    req.authUser = null;
    return next();
  }
  const token = header.slice(7);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET, JWT_VERIFY_OPTS);
    if (
      decoded.type === "user" &&
      !recentlyBlockedUserIds.has(String(decoded.id))
    ) {
      req.authUser = decoded;
    } else {
      req.authUser = null;
    }
  } catch {
    req.authUser = null;
  }
  next();
}

module.exports = {
  userGuard:         makeGuard("user"),
  adminGuard:        makeGuard("admin"),
  optionalUserGuard,
  markUserBlocked,
  markUserUnblocked,
};
