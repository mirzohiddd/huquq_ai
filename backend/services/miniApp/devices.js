"use strict";
/**
 * MINI ILOVA QURILMALARI — yozish va admin hisoboti.
 *
 *  - `touch()` — ilova ochilganda (`/auth`): qurilma bo'lmasa yaratiladi,
 *    bo'lsa faqat `lastSeen` yangilanadi (takroriy kirish sanalmaydi);
 *  - `markPlayed()` — birinchi muvaffaqiyatli javob/yakunda `playedAt`
 *    bir marta qo'yiladi (keyingi so'rovlarda filtr tufayli hech narsa yozilmaydi);
 *  - `report()` — admin panel uchun takrorsiz qurilmalar statistikasi.
 *
 * Qurilma ID'si mijozdan keladi (`X-Mini-Device`). U bo'lmasa (eski
 * ilova versiyasi) — Telegram ID + platformadan barqaror kalit yasaladi.
 */
const crypto = require("crypto");
const { User } = require("../../models");
const { MiniDevice } = require("../../models/miniDevice");
const { dayKey } = require("./stats");

const ID_RE = /^[A-Za-z0-9-]{16,64}$/;

function deviceKey(req, tgId, platform) {
  const raw = String(req.get("x-mini-device") || "");
  if (ID_RE.test(raw)) return raw;
  return `tg-${crypto.createHash("sha1").update(`${tgId}:${platform}`).digest("hex").slice(0, 24)}`;
}

/** User-Agent → OS va (bo'lsa) model nomi */
function parseUa(ua = "") {
  if (/iPad/i.test(ua)) return { os: "iOS", model: "iPad" };
  if (/iPhone|iPod/i.test(ua)) return { os: "iOS", model: "iPhone" };
  if (/Android/i.test(ua)) {
    const m = /Android [\d.]+;\s*([^;)]+?)(?:\s+Build|\))/i.exec(ua);
    return { os: "Android", model: (m?.[1] || "").trim().slice(0, 40) };
  }
  if (/Windows/i.test(ua)) return { os: "Windows", model: "" };
  if (/Mac OS X|Macintosh/i.test(ua)) return { os: "macOS", model: "" };
  if (/Linux/i.test(ua)) return { os: "Linux", model: "" };
  return { os: "Boshqa", model: "" };
}

const clip = (v, n) => String(v || "").replace(/[^\w .-]/g, "").slice(0, n);

async function touch(req, { userId, tgId }) {
  const platform = clip(req.body?.platform, 20) || "unknown";
  const id = deviceKey(req, tgId, platform);
  const { os, model } = parseUa(req.get("user-agent"));
  const now = new Date();
  await MiniDevice.updateOne(
    { deviceId: id },
    {
      $set: { userId, telegramId: String(tgId), platform, os, model, tgVersion: clip(req.body?.version, 10), lastSeen: now },
      $setOnInsert: { deviceId: id, firstSeen: now },
    },
    { upsert: true },
  );
}

async function markPlayed(req) {
  const raw = String(req.get("x-mini-device") || "");
  if (!ID_RE.test(raw)) return;
  await MiniDevice.updateOne({ deviceId: raw, playedAt: null }, { $set: { playedAt: new Date() } });
}

/* Toshkent sanasi bo'yicha guruhlash (stats.dayKey bilan bir xil kun chegarasi) */
const dayExpr = (field) => ({ $dateToString: { format: "%Y-%m-%d", date: `$${field}`, timezone: "Asia/Tashkent" } });

async function report(days = 30) {
  const now = Date.now();
  const since = (d) => new Date(now - d * 86400000);
  const from = since(days - 1);
  const [total, played, active1, active7, active30, newIn, platforms, oses, firsts, plays, recent] = await Promise.all([
    MiniDevice.countDocuments(),
    MiniDevice.countDocuments({ playedAt: { $ne: null } }),
    MiniDevice.countDocuments({ lastSeen: { $gte: since(1) } }),
    MiniDevice.countDocuments({ lastSeen: { $gte: since(7) } }),
    MiniDevice.countDocuments({ lastSeen: { $gte: since(30) } }),
    MiniDevice.countDocuments({ firstSeen: { $gte: from } }),
    MiniDevice.aggregate([{ $group: { _id: "$platform", value: { $sum: 1 } } }, { $sort: { value: -1 } }]),
    MiniDevice.aggregate([{ $group: { _id: "$os", value: { $sum: 1 } } }, { $sort: { value: -1 } }]),
    MiniDevice.aggregate([{ $match: { firstSeen: { $gte: from } } }, { $group: { _id: dayExpr("firstSeen"), n: { $sum: 1 } } }]),
    MiniDevice.aggregate([{ $match: { playedAt: { $gte: from } } }, { $group: { _id: dayExpr("playedAt"), n: { $sum: 1 } } }]),
    MiniDevice.find().sort({ lastSeen: -1 }).limit(30).populate({ path: "userId", model: User, select: "username fullName telegramUsername" }).lean(),
  ]);
  const fm = new Map(firsts.map((x) => [x._id, x.n]));
  const pm = new Map(plays.map((x) => [x._id, x.n]));
  const daily = Array.from({ length: days }, (_, i) => {
    const day = dayKey(new Date(), i - days + 1);
    return { day, devices: fm.get(day) || 0, played: pm.get(day) || 0 };
  });
  const rows = (a) => a.map((x) => ({ name: x._id || "unknown", value: x.value }));
  return {
    days, total, played, active1, active7, active30, newIn,
    platforms: rows(platforms), oses: rows(oses), daily,
    recent: recent.map((d) => ({
      id: d.deviceId.slice(-6), platform: d.platform, os: d.os, model: d.model,
      firstSeen: d.firstSeen, lastSeen: d.lastSeen, playedAt: d.playedAt,
      user: d.userId ? { id: d.userId._id, username: d.userId.username, fullName: d.userId.fullName, telegramUsername: d.userId.telegramUsername } : null,
    })),
  };
}

module.exports = { touch, markPlayed, report, parseUa };
