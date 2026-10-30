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
    mistakes: { type: [String], default: [] },
    reviewed: { type: Number, default: 0 },
    // { "2026-10-30": xp } — Toshkent sanasi; ketma-ket kunlar va haftalik natija
    days: { type: mongoose.Schema.Types.Mixed, default: {} },
    goal: { type: Number, default: 20 }, // kunlik XP maqsadi
  },
  { timestamps: true },
);
MiniProgressSchema.index({ xp: -1 });

module.exports = {
  MiniProgress: mongoose.models.MiniProgress || mongoose.model("MiniProgress", MiniProgressSchema),
};
