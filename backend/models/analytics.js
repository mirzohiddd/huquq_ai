"use strict";
/**
 * SAYT TASHRIFLARI ANALITIKASI (2026-10-15).
 *
 * Bitta hujjat = bitta brauzer (`vid` — frontend `deviceId`) × bitta kun
 * (Toshkent vaqti). Admin panelidagi "Analitika" bo'limi shundan quriladi:
 * nechta odam kirdi, nechtasi ro'yxatdan o'tdi va nechtasi ro'yxatdan
 * o'tmasdan chiqib ketdi.
 *
 * Nima uchun eski `Visitor` emas: u faqat Bosh sahifada, IP bo'yicha
 * yozilardi (bitta Wi-Fi'dagi hamma odam = 1 tashrif) va ro'yxatdan
 * o'tish bilan bog'lanmasdi. Eski kolleksiyaga TEGILMADI.
 *
 * Shaxsiy ma'lumot saqlanmaydi: IP yo'q, faqat tasodifiy brauzer ID.
 */
const mongoose = require("mongoose");

const SiteVisitSchema = new mongoose.Schema(
  {
    vid: { type: String, required: true },
    day: { type: String, required: true }, // YYYY-MM-DD, Toshkent
    hour: { type: Number, default: 0 }, // birinchi kirish soati (0-23)
    firstAt: { type: Date, default: Date.now },
    lastAt: { type: Date, default: Date.now },
    pages: { type: Number, default: 0 },
    landing: { type: String, default: "/" },
    source: { type: String, default: "direct" },
    device: { type: String, default: "desktop" },
    firstVisit: { type: Boolean, default: false }, // brauzerning birinchi kuni
    sawRegister: { type: Boolean, default: false }, // /register ni ochdi
    loggedIn: { type: Boolean, default: false },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  },
  { versionKey: false },
);

SiteVisitSchema.index({ vid: 1, day: 1 }, { unique: true });
SiteVisitSchema.index({ day: 1 });

module.exports = {
  SiteVisit:
    mongoose.models.SiteVisit || mongoose.model("SiteVisit", SiteVisitSchema),
};
