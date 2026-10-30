"use strict";
/**
 * TELEGRAM MINI APP — o'yin progressi (2026-10-30).
 *
 * ⚠️ Saytning `LessonProgress` iga ATAYLAB tegilmadi: mini app'ning
 * darslari, XP, ketma-ket kunlar va reytingi alohida o'yin qatlami.
 * `models/index.js` ham o'zgartirilmadi — model shu yerda e'lon qilinadi.
 */
const mongoose = require("mongoose");

const MiniProgressSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    // Reytingda ko'rinadigan ism ("Dilnoza R.") — har kirishda yangilanadi
    name: { type: String, default: "" },
    xp: { type: Number, default: 0, min: 0 },
    // { [darsId]: { at: Date, firstTry: Boolean } }
    lessons: { type: mongoose.Schema.Types.Mixed, default: {} },
    // { [vaziyatId]: { at: Date, score: Number } }
    situations: { type: mongoose.Schema.Types.Mixed, default: {} },
    // Xato qilingan savollar kalitlari ("L:headphones", "S:s-phone:1")
    // { [bo'limKaliti]: { at: Date, score: Number } } — bo'lim imtihonidan o'tilgan
    exams: { type: mongoose.Schema.Types.Mixed, default: {} },
    // { [bo'limKaliti]: { at } } — ochilgan sandiqlar (bonus XP bir marta)
    chests: { type: mongoose.Schema.Types.Mixed, default: {} },
    // { [darsId]: { m: xatolar, ok: [yechilgan bosqichlar] } } — joriy urinish (services/miniApp/runs.js)
    runs: { type: mongoose.Schema.Types.Mixed, default: {} },
    mistakes: { type: [String], default: [] },
    reviewed: { type: Number, default: 0 },
    // { "2026-10-30": xp } — Toshkent sanasi; ketma-ket kunlar va haftalik natija
    days: { type: mongoose.Schema.Types.Mixed, default: {} },
    goal: { type: Number, default: 20 }, // kunlik XP maqsadi
  },
  { timestamps: true },
);
MiniProgressSchema.index({ xp: -1 });

/* «Tushuntirib ber» keshi: har savolga AI so'rovi o'zgarmas (`ask`), shuning
   uchun javob bir marta yaratiladi — keyingilari bir zumda (server qayta
   ishga tushsa ham). 30 kundan keyin yangilanadi (qonun o'zgarishi mumkin). */
const MiniExplainSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true }, // "lesson:headphones:uz"
  answer: { type: String, default: "" },
  at: { type: Date, default: Date.now, expires: 60 * 60 * 24 * 30 },
});

module.exports = {
  MiniProgress: mongoose.models.MiniProgress || mongoose.model("MiniProgress", MiniProgressSchema),
  MiniExplain: mongoose.models.MiniExplain || mongoose.model("MiniExplain", MiniExplainSchema),
};
