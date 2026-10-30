"use strict";
/**
 * XATOGA QARAB XP — darsning HAR BIR bosqichidagi xatolar sanaladi
 * (tanlov, o'yin, tekshiruv savollari), faqat testda emas.
 *
 *   xatosiz → 20 XP · 1 xato → 15 · 2 xato → 10 · 3+ xato → 5
 *
 * Hisob SERVERDA yuritiladi (`MiniProgress.runs.<dars>`): mijoz "xato
 * qilmadim" deb yolg'on ayta olmaydi — reyting XP'ga qurilgan. Dars qayta
 * ochilsa hisob noldan boshlanadi (yangi urinish), lekin XP baribir faqat
 * BIRINCHI yakunda beriladi (`store.finishOnce`).
 */
const { MiniProgress } = require("../../models/miniApp");

const STEP = 0.25; // har bir xato asosiy XP'ning chorak qismini oladi
const FLOOR = 0.25; // eng kamida — chorak (o'qish mehnati baribir qadrlanadi)

/** @returns {number} xatolar soniga qarab XP */
function xpFor(base, mistakes = 0) {
  const k = Math.max(FLOOR, 1 - STEP * Math.max(0, mistakes));
  return Math.round(base * k);
}

const runKey = (id) => `runs.${String(id).replace(/[.$]/g, "_")}`;

/** Yangi urinish: xatolar va yechilgan savollar noldan. */
async function start(userId, id) {
  await MiniProgress.updateOne({ userId }, { $set: { [runKey(id)]: { m: 0, ok: [], at: new Date() } } }, { upsert: true });
}

async function miss(userId, id) {
  await MiniProgress.updateOne({ userId }, { $inc: { [`${runKey(id)}.m`]: 1 } }, { upsert: true });
}

/** To'g'ri yechilgan bosqich ("c" — tanlov, "g" — o'yin, raqam — savol). */
async function solved(userId, id, step) {
  await MiniProgress.updateOne({ userId }, { $addToSet: { [`${runKey(id)}.ok`]: String(step) } }, { upsert: true });
}

/** Joriy urinish (yo'q bo'lsa — bo'sh). */
function of(doc, id) {
  const r = doc.runs?.[String(id).replace(/[.$]/g, "_")];
  return { m: r?.m || 0, ok: new Set(r?.ok || []) };
}

async function end(userId, id) {
  await MiniProgress.updateOne({ userId }, { $unset: { [runKey(id)]: "" } });
}

module.exports = { xpFor, start, miss, solved, of, end };
