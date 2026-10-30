"use strict";
/**
 * MINI ILOVA — YURAKCHALAR (jonlar) (2026-10-30).
 *
 *  - 5 ta yurakcha; HAR BIR xato javob −1 (dars, imtihon, vaziyat, takrorlash);
 *  - 0 bo'lsa — dars/imtihon/vaziyat ochilmaydi va javob qabul qilinmaydi;
 *  - har 30 daqiqada +1 (ketma-ket), yoki XP evaziga: 1 ta — 10 XP,
 *    hammasi birdan — 40 XP (chegirma; kam yetishmasa — 10 × yetishmagani).
 *
 * Saqlash: bitta maydon `heartsFullAt` — yurakchalar TO'LADIGAN payt.
 *   yurakcha = 5 − ceil((heartsFullAt − hozir) / 30 daqiqa)
 * Shu sababli tiklanish uchun cron kerak emas, yozuvlar esa ATOMIK
 * (filtr shartida) — parallel so'rovlar yurakchani ikki marta yemaydi va
 * XP manfiyga tushmaydi.
 */
const mongoose = require("mongoose");
const { MiniProgress } = require("../../models/miniApp");

const MAX = 5;
const REFILL_MS = 30 * 60 * 1000;
const PRICE = { one: 10, all: 40 };

const oid = (id) => new mongoose.Types.ObjectId(String(id));
const col = () => MiniProgress.collection;

/** Hujjatdan joriy holat: { hearts, max, nextIn, fullIn, prices } */
function stateOf(doc, now = Date.now()) {
  const full = doc?.heartsFullAt ? new Date(doc.heartsFullAt).getTime() : 0;
  const left = Math.max(0, full - now);
  const hearts = Math.max(0, MAX - Math.ceil(left / REFILL_MS));
  const missing = MAX - hearts;
  return {
    hearts, max: MAX,
    nextIn: missing ? left % REFILL_MS || REFILL_MS : 0, // keyingi yurakchagacha (ms)
    fullIn: left,
    prices: { one: PRICE.one, all: Math.min(PRICE.all, missing * PRICE.one) },
  };
}

/** Yurakcha bormi; bo'lmasa 403 qaytaradi. @returns {boolean} */
function guard(doc, res) {
  const st = stateOf(doc);
  if (st.hearts > 0) return true;
  res.status(403).json({ error: "Yurakchalar tugadi — biroz kuting yoki XP evaziga to'ldiring", noHearts: true, hearts: st });
  return false;
}

/** Xato javob: −1 yurakcha (to'lish payti 30 daqiqaga suriladi). */
async function lose(userId) {
  const now = Date.now();
  await col().updateOne(
    { userId: oid(userId), $or: [{ heartsFullAt: null }, { heartsFullAt: { $lte: new Date(now + (MAX - 1) * REFILL_MS) } }] },
    [{ $set: { heartsFullAt: { $add: [{ $max: [{ $ifNull: ["$heartsFullAt", new Date(0)] }, new Date(now)] }, REFILL_MS] } } }],
  );
  return current(userId);
}

async function current(userId) {
  return stateOf(await col().findOne({ userId: oid(userId) }, { projection: { heartsFullAt: 1 } }));
}

/**
 * XP evaziga sotib olish. `kind`: "one" | "all".
 * @returns {Promise<{ok:boolean, error?:string, hearts, xp}>}
 */
async function buy(userId, kind) {
  const doc = await col().findOne({ userId: oid(userId) }, { projection: { heartsFullAt: 1, xp: 1 } });
  const st = stateOf(doc);
  const out = (ok, error) => ({ ok, error, hearts: st, xp: doc?.xp || 0 });
  if (!doc || st.hearts >= MAX) return out(false, "Yurakchalar allaqachon to'la");
  const cost = kind === "all" ? st.prices.all : PRICE.one;
  if ((doc.xp || 0) < cost) return out(false, "XP yetarli emas");
  const now = new Date();
  const next = kind === "all" ? now : new Date(new Date(doc.heartsFullAt).getTime() - REFILL_MS);
  // Filtrda o'qilgan holat va XP — parallel xarid ikki marta yechilmaydi, XP manfiy bo'lmaydi
  const r = await col().updateOne(
    { _id: doc._id, heartsFullAt: doc.heartsFullAt, xp: { $gte: cost } },
    { $set: { heartsFullAt: next < now ? now : next }, $inc: { xp: -cost } },
  );
  if (!r.modifiedCount) return out(false, "Qayta urinib ko'ring");
  const after = await col().findOne({ _id: doc._id }, { projection: { heartsFullAt: 1, xp: 1 } });
  return { ok: true, spent: cost, hearts: stateOf(after), xp: after.xp || 0 };
}

module.exports = { MAX, REFILL_MS, PRICE, stateOf, guard, lose, current, buy };
