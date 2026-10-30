"use strict";
/**
 * TELEGRAM MINI ILOVA — QURILMALAR (2026-10-30, admin analitikasi).
 *
 * Har bir qurilma BIR MARTA yoziladi (`deviceId` — ilova qurilmada bir marta
 * yaratib saqlaydigan tasodifiy ID). Har kirish-chiqishda YANGI yozuv
 * yaratilmaydi — faqat `lastSeen` yangilanadi, shuning uchun admin panelida
 * «nechta qurilma kirdi / o'ynadi» takrorsiz sanaladi.
 */
const mongoose = require("mongoose");

const MiniDeviceSchema = new mongoose.Schema({
  deviceId: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null }, // oxirgi kirgan hisob
  telegramId: { type: String, default: null },
  platform: { type: String, default: "unknown" }, // Telegram: ios | android | tdesktop | macos | weba …
  os: { type: String, default: "Boshqa" }, // UA'dan: iOS | Android | Windows | macOS | Linux
  model: { type: String, default: "" }, // Android model (UA'da bo'lsa), iPhone/iPad
  tgVersion: { type: String, default: "" },
  firstSeen: { type: Date, default: Date.now, index: true },
  lastSeen: { type: Date, default: Date.now, index: true },
  playedAt: { type: Date, default: null, index: true }, // birinchi marta dars/test yechgan payt
});

module.exports = {
  MiniDevice: mongoose.models.MiniDevice || mongoose.model("MiniDevice", MiniDeviceSchema),
};
