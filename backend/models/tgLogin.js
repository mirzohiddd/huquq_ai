"use strict";
/**
 * SAYTGA TELEGRAM ORQALI KIRISH — bir martalik so'rov (2026-10-30).
 * Sayt tokenni yaratadi (bazada faqat sha256 HASH), foydalanuvchi botda
 * «Start» bosadi → bot `userId` ni yozadi → sayt so'rab, JWT oladi.
 * 10 daqiqada o'zi o'chadi (TTL indeks).
 */
const mongoose = require("mongoose");

const TgLoginSchema = new mongoose.Schema({
  hash: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  createdAt: { type: Date, default: Date.now, expires: 600 },
});

module.exports = { TgLogin: mongoose.models.TgLogin || mongoose.model("TgLogin", TgLoginSchema) };
