"use strict";
/**
 * Tashriflarni yozish — `routes/analytics.js` dan chaqiriladi.
 *
 * "Ro'yxatdan o'tdi" alohida belgilanmaydi: ro'yxatdan o'tgan odam
 * tokeni bilan keyingi sahifaga o'tganda `userId` shu tashrifga
 * yoziladi, hisobot esa foydalanuvchining `createdAt` sanasiga qarab
 * uni "yangi ro'yxatdan o'tgan" deb ajratadi. Shu sabab `routes/auth.js`
 * ga tegish kerak bo'lmadi.
 */
const { SiteVisit } = require("../../models/analytics");

const VID_RE = /^[a-zA-Z0-9_-]{8,64}$/;
const BOT_RE =
  /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit|whatsapp|telegram|curl|wget|python|axios|node-fetch/i;
const TZ_MS = 5 * 3600 * 1000; // Toshkent UTC+5

function dayKey(d = new Date()) {
  return new Date(d.getTime() + TZ_MS).toISOString().slice(0, 10);
}
function tashkentHour(d = new Date()) {
  return new Date(d.getTime() + TZ_MS).getUTCHours();
}

function deviceOf(ua = "") {
  if (/iPad|Tablet|PlayBook|Silk|(Android(?!.*Mobile))/i.test(ua)) return "tablet";
  if (/Mobi|iPhone|Android|Opera Mini|IEMobile/i.test(ua)) return "mobile";
  return "desktop";
}

const SOURCES = [
  [/google\./, "Google"],
  [/yandex\./, "Yandex"],
  [/bing\.|duckduckgo|yahoo\./, "Boshqa qidiruv"],
  [/t\.me|telegram/, "Telegram"],
  [/instagram/, "Instagram"],
  [/facebook|fb\.com/, "Facebook"],
  [/youtube|youtu\.be/, "YouTube"],
  [/chatgpt|openai|perplexity|claude\.ai|gemini/, "AI qidiruv"],
];

/** Manba: utm_source ustun, keyin referrer domeni. */
function sourceOf(ref = "", utm = "", ownHost = "") {
  if (utm) return String(utm).slice(0, 40).toLowerCase();
  let host = "";
  try {
    host = new URL(ref).hostname.toLowerCase();
  } catch {
    return "direct";
  }
  if (!host || (ownHost && host.endsWith(ownHost))) return "direct";
  for (const [re, name] of SOURCES) if (re.test(host)) return name;
  return host.replace(/^www\./, "").slice(0, 40);
}

function cleanPath(p) {
  const s = String(p || "/").split(/[?#]/)[0].slice(0, 120);
  return s.startsWith("/") ? s : "/";
}

/** Lokal ishlab chiqish va botlar statistikaga tushmasin. */
function shouldSkip(req) {
  const ua = String(req.headers["user-agent"] || "");
  if (!ua || BOT_RE.test(ua)) return true;
  const origin = String(req.headers.origin || req.headers.referer || "");
  return /\/\/(localhost|127\.0\.0\.1)(:|\/|$)/.test(origin);
}

async function recordHit(req, body = {}) {
  const vid = String(body.vid || "");
  if (!VID_RE.test(vid) || shouldSkip(req)) return false;

  const now = new Date();
  const day = dayKey(now);
  const path = cleanPath(body.path);
  const ownHost = (() => {
    try {
      return new URL(String(req.headers.origin || "")).hostname;
    } catch {
      return "";
    }
  })();

  const set = { lastAt: now };
  if (path === "/register") set.sawRegister = true;
  if (req.authUser?.id) {
    set.loggedIn = true;
    set.userId = req.authUser.id;
  }

  const res = await SiteVisit.findOneAndUpdate(
    { vid, day },
    {
      $set: set,
      $inc: { pages: 1 },
      $setOnInsert: {
        firstAt: now,
        hour: tashkentHour(now),
        landing: path,
        source: sourceOf(body.ref, body.utm, ownHost),
        device: deviceOf(String(req.headers["user-agent"] || "")),
      },
    },
    { upsert: true, new: true, includeResultMetadata: true },
  );

  // Yangi kun hujjati — bu brauzer avval umuman kelganmi?
  if (res?.lastErrorObject?.upserted) {
    const seen = await SiteVisit.exists({ vid, day: { $lt: day } });
    if (!seen) await SiteVisit.updateOne({ vid, day }, { $set: { firstVisit: true } });
  }
  return true;
}

/** Sahifa yopilganda (sendBeacon) — faqat o'tirgan vaqtni uzaytiradi. */
async function recordLeave(req, body = {}) {
  const vid = String(body.vid || "");
  if (!VID_RE.test(vid) || shouldSkip(req)) return;
  await SiteVisit.updateOne({ vid, day: dayKey() }, { $set: { lastAt: new Date() } });
}

module.exports = { recordHit, recordLeave, dayKey, TZ_MS };
