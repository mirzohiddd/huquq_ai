"use strict";
/**
 * Kuchli xavfsizlik middleware to'plami
 * - XSS, SQL/NoSQL injection himoya
 * - Brute-force himoya
 * - Shubhali so'rovlarni bloklash
 * - Input sanitizatsiya
 * - Security headers
 */

/* ══════════════════════════════════════════════════════════════
   BRUTE-FORCE HIMOYASI — QURILMA bo'yicha, IP bo'yicha EMAS.

   ⚠️ NIMA UCHUN O'ZGARTIRILDI (foydalanuvchi so'rovi, 2026-08-07):
   avval blok IP manzil bo'yicha qo'yilardi. Bu quyidagini anglatardi:
   bitta odam ofisda/kafeda/uyda 5 marta parolni xato kiritsa, O'SHA
   Wi-Fi tarmog'idagi HAMMA odam 15 daqiqaga kira olmay qolardi.
   Mobil operatorlarda holat battar — minglab abonent bitta tashqi IP
   ortida turadi (CGNAT), ya'ni bitta xato butun operatorni bloklardi.

   Endi asosiy kalit — QURILMA. Brauzer birinchi kirishda tasodifiy
   identifikator yaratib `localStorage` da saqlaydi va uni har so'rovda
   `X-Device-Id` sarlavhasida yuboradi.

   ⚠️ Faqat qurilma identifikatoriga tayanish YETARLI EMAS: hujumchi
   uni har so'rovda o'zgartirib qo'yishi mumkin. Shuning uchun himoya
   UCH QATLAMLI:

     1) QURILMA  — 5 urinish  → 15 daqiqa   (asosiy, oddiy foydalanuvchi
                                             faqat shunga duch keladi)
     2) HISOB    — 10 urinish → 15 daqiqa   (bitta hisobga qaratilgan
                                             hujum: qurilma almashsa ham
                                             o'sha login himoyalanadi)
     3) IP       — 50 urinish → 15 daqiqa   (bitta mashinadan ommaviy
                                             urinish; chegara ataylab
                                             yuqori — umumiy Wi-Fi
                                             tasodifan bloklanmasin)

   Uchala hisoblagich mustaqil ishlaydi va biri ishga tushsa ham 429
   qaytariladi.
   ══════════════════════════════════════════════════════════════ */
const crypto = require("crypto");

const MAX_DEVICE_ATTEMPTS = 5;
const MAX_ACCOUNT_ATTEMPTS = 10;
const MAX_IP_ATTEMPTS = 50;
const BLOCK_DURATION_MS = 15 * 60 * 1000; // 15 daqiqa
const ATTEMPT_WINDOW_MS = 15 * 60 * 1000;

// scope -> Map(kalit -> { count, resetAt, blockedUntil })
const trackers = {
  device: new Map(),
  account: new Map(),
  ip: new Map(),
};
const LIMITS = {
  device: MAX_DEVICE_ATTEMPTS,
  account: MAX_ACCOUNT_ATTEMPTS,
  ip: MAX_IP_ATTEMPTS,
};

// Eskirgan yozuvlarni tozalash (xotira cheksiz o'smasin)
setInterval(
  () => {
    const now = Date.now();
    for (const map of Object.values(trackers)) {
      for (const [key, e] of map.entries()) {
        const expired =
          (!e.blockedUntil || now > e.blockedUntil) && now > e.resetAt;
        if (expired) map.delete(key);
      }
    }
  },
  5 * 60 * 1000,
).unref?.();

/* ⚠️ XAVFSIZLIK (2026-09-13): avval `X-Forwarded-For` ning BIRINCHI
   qiymati olinardi. Bu qiymatni MIJOZNING O'ZI yozadi — ya'ni har
   so'rovda soxta IP yuborib (a) login IP-qatlamini, (b) mehmonlarning
   kunlik bepul AI limitini cheksiz chetlab o'tish mumkin edi.
   Endi `req.ip` ishlatiladi: Express uni `trust proxy` sozlamasi
   (server.js) bo'yicha FAQAT ishonchli proksi qo'shgan qiymatdan
   oladi. `express-rate-limit` ham aynan shu qiymatga tayanadi. */
function getClientIp(req) {
  return req.ip || req.socket?.remoteAddress || "unknown";
}

/**
 * Qurilma identifikatori.
 *
 * Brauzer yuborgan `X-Device-Id` asosiy manba. U bo'lmasa (eski
 * brauzer, sarlavha o'chirilgan, yoki ataylab olib tashlangan) —
 * zaxira sifatida so'rov "barmoq izi" ishlatiladi: User-Agent, til va
 * IP dan hosil qilingan hash. Zaxira mukammal emas, lekin oddiy
 * skriptni to'xtatadi va IP ni yolg'iz kalit sifatida ishlatishdan
 * ko'ra ancha aniqroq.
 */
function getDeviceKey(req) {
  const raw = String(req.headers["x-device-id"] || "").trim();
  // Faqat kutilgan shakl qabul qilinadi — uzun/aralash qiymat bilan
  // xotirani to'ldirib yuborishning oldini oladi.
  if (/^[a-zA-Z0-9_-]{8,64}$/.test(raw)) return `d:${raw}`;

  const fp = [
    req.headers["user-agent"] || "",
    req.headers["accept-language"] || "",
    getClientIp(req),
  ].join("|");
  return `f:${crypto.createHash("sha256").update(fp).digest("hex").slice(0, 32)}`;
}

/** Login uchun hisob kaliti — username yoki email (registrsiz). */
function getAccountKey(req) {
  const b = req.body || {};
  const id = String(b.username || b.email || b.login || "")
    .trim()
    .toLowerCase();
  return id ? `a:${id}` : null;
}

function isBlocked(scope, key) {
  if (!key) return 0;
  const e = trackers[scope].get(key);
  if (!e?.blockedUntil) return 0;
  if (Date.now() > e.blockedUntil) {
    trackers[scope].delete(key);
    return 0;
  }
  return e.blockedUntil;
}

function bump(scope, key) {
  if (!key) return false;
  const now = Date.now();
  const map = trackers[scope];
  const e = map.get(key) || { count: 0, resetAt: now + ATTEMPT_WINDOW_MS };

  if (now > e.resetAt) {
    e.count = 1;
    e.resetAt = now + ATTEMPT_WINDOW_MS;
  } else {
    e.count += 1;
  }

  if (e.count >= LIMITS[scope]) {
    e.blockedUntil = now + BLOCK_DURATION_MS;
    e.count = 0;
    e.resetAt = now + ATTEMPT_WINDOW_MS;
  }
  map.set(key, e);
  return !!e.blockedUntil && now <= e.blockedUntil;
}

/**
 * Muvaffaqiyatsiz login urinishini qayd etadi.
 * @returns {boolean} shu urinishdan keyin blok qo'yildimi
 */
function recordFailedLogin(req) {
  const device = bump("device", getDeviceKey(req));
  const account = bump("account", getAccountKey(req));
  const ip = bump("ip", `i:${getClientIp(req)}`);
  return device || account || ip;
}

/** Muvaffaqiyatli login — shu qurilma va hisob hisoblagichlari tozalanadi.
    ⚠️ IP hisoblagichi ATAYLAB tozalanmaydi: aks holda hujumchi har 49
    urinishdan keyin o'zining to'g'ri hisobiga kirib, IP chegarasini
    cheksiz nolga qaytarib turishi mumkin bo'lardi. */
function clearLoginAttempts(req) {
  trackers.device.delete(getDeviceKey(req));
  const acc = getAccountKey(req);
  if (acc) trackers.account.delete(acc);
}

// ── Brute-force guard (login endpointlari uchun) ─────────────
function bruteForceGuard(req, res, next) {
  const checks = [
    ["device", getDeviceKey(req)],
    ["account", getAccountKey(req)],
    ["ip", `i:${getClientIp(req)}`],
  ];
  for (const [scope, key] of checks) {
    const until = isBlocked(scope, key);
    if (until) {
      const minutesLeft = Math.max(1, Math.ceil((until - Date.now()) / 60000));
      return res.status(429).json({
        error: `Juda ko'p noto'g'ri urinish. ${minutesLeft} daqiqadan so'ng qayta urinib ko'ring.`,
        blockedUntil: until,
        scope, // diagnostika uchun: qaysi qatlam ishga tushdi
      });
    }
  }
  next();
}

/** Diagnostika — admin panelida joriy bloklarni ko'rish uchun. */
function bruteForceStats() {
  const now = Date.now();
  const out = {};
  for (const [scope, map] of Object.entries(trackers)) {
    out[scope] = {
      tracked: map.size,
      blocked: [...map.values()].filter(
        (e) => e.blockedUntil && e.blockedUntil > now,
      ).length,
    };
  }
  return out;
}

// ── Input sanitizatsiya (XSS, NoSQL injection) ───────────────
const NOSQL_DANGEROUS =
  /(\$where|\$gt|\$lt|\$ne|\$in|\$nin|\$regex|\$exists|\$or|\$and|\$not|\$nor)/i;

function sanitizeValue(val) {
  if (typeof val === "string") {
    // MUHIM: bu yerda HTML-entity almashtirish ATAYLAB qilinmaydi.
    // Kirish nuqtasida (input) escape qilish ma'lumotni buzadi — masalan,
    // o'zbek lotin alifbosidagi apostrof harflari ("ko'p", "bo'lim", "to'g'ri")
    // &#x27; ga aylanib, AI'ga yuboriladigan va bazada saqlanadigan matnni
    // shikastlar edi. XSS himoyasi CHIQISH nuqtasida bo'lishi kerak — buni
    // frontend react-markdown orqali xavfsiz bajaradi (raw HTML render
    // qilmaydi, dangerouslySetInnerHTML AI javoblari uchun ishlatilmaydi).
    // Bu yerda haqiqiy himoya — pastdagi sanitizeObject() dagi MongoDB
    // operator-kalitlarini ($-bilan boshlanuvchi) olib tashlash va
    // inputSanitizer() dagi NOSQL_DANGEROUS tekshiruvi orqali davom etadi.
    return val;
  }
  if (typeof val === "object" && val !== null) {
    return sanitizeObject(val);
  }
  return val;
}

function sanitizeObject(obj) {
  if (Array.isArray(obj)) return obj.map(sanitizeValue);
  const clean = {};
  for (const key of Object.keys(obj)) {
    // MongoDB operator kalitlarini olib tashlash
    if (key.startsWith("$")) continue;
    clean[key] = sanitizeValue(obj[key]);
  }
  return clean;
}

function inputSanitizer(req, res, next) {
  // Body tekshiruvi
  if (req.body && typeof req.body === "object") {
    const bodyStr = JSON.stringify(req.body);
    if (NOSQL_DANGEROUS.test(bodyStr)) {
      return res.status(400).json({ error: "Noto'g'ri so'rov formati" });
    }
    req.body = sanitizeObject(req.body);
  }

  // Query params tekshiruvi
  if (req.query) {
    const queryStr = JSON.stringify(req.query);
    if (NOSQL_DANGEROUS.test(queryStr)) {
      return res.status(400).json({ error: "Noto'g'ri so'rov parametrlari" });
    }
  }

  // Shubhali User-Agent
  const ua = req.headers["user-agent"] || "";
  const suspiciousUA =
    /sqlmap|nikto|nmap|masscan|burpsuite|dirbuster|hydra|medusa|acunetix|nessus|openvas/i;
  if (suspiciousUA.test(ua)) {
    return res.status(403).json({ error: "Ruxsat yo'q" });
  }

  next();
}

// ── Path traversal himoya ─────────────────────────────────────
function pathTraversalGuard(req, res, next) {
  const url = req.url || "";
  if (
    url.includes("../") ||
    url.includes("..\\") ||
    url.includes("%2e%2e") ||
    url.includes("%252e")
  ) {
    return res.status(400).json({ error: "Noto'g'ri so'rov" });
  }
  next();
}

// ── Content-type enforcement ──────────────────────────────────
function contentTypeGuard(req, res, next) {
  if (["POST", "PUT", "PATCH"].includes(req.method)) {
    const ct = req.headers["content-type"] || "";
    if (
      !ct.includes("application/json") &&
      !ct.includes("multipart/form-data")
    ) {
      return res
        .status(415)
        .json({ error: "Qo'llab-quvvatlanmaydigan media turi" });
    }
  }
  next();
}

// ── Security headers (Helmet ga qo'shimcha) ───────────────────
function securityHeaders(req, res, next) {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  // microphone=() olib tashlandi — ovozli AI uchun mikrofon ruxsati kerak
  res.setHeader(
    "Permissions-Policy",
    "geolocation=()",
  );
  res.removeHeader("X-Powered-By");
  next();
}

// ── Payload hajm tekshiruvi ───────────────────────────────────
function payloadSizeGuard(req, res, next) {
  const contentLength = parseInt(req.headers["content-length"] || "0");
  const MAX_SIZE = 1 * 1024 * 1024; // 1MB
  if (contentLength > MAX_SIZE) {
    return res.status(413).json({ error: "So'rov hajmi juda katta" });
  }
  next();
}

// ── Bot/scraper tekshiruvi ────────────────────────────────────
function botGuard(req, res, next) {
  // API endpointlariga browser bo'lmagan so'rovlar uchun
  if (req.path.startsWith("/api/")) {
    const ua = req.headers["user-agent"] || "";
    // Ruxsat etilgan bot agentlari (mobile app, postman testing)
    const allowedBots = /expo|okhttp|axios|mobile|android|iphone|ipad|postman/i;
    const isBotAttack =
      /python-requests|go-http|curl\/[0-9]|wget|scrapy|phantom/i;
    if (isBotAttack.test(ua) && !allowedBots.test(ua)) {
      console.warn(
        `⚠️ Shubhali agent bloklandi: ${ua} - IP: ${getClientIp(req)}`,
      );
      return res.status(403).json({ error: "Ruxsat yo'q" });
    }
  }
  next();
}

module.exports = {
  bruteForceGuard,
  inputSanitizer,
  pathTraversalGuard,
  contentTypeGuard,
  securityHeaders,
  payloadSizeGuard,
  botGuard,
  recordFailedLogin,
  clearLoginAttempts,
  bruteForceStats,
  getDeviceKey,
  getClientIp,
};