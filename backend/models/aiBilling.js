"use strict";
/**
 * AI SOZLAMALARI, SARF JURNALI VA JAVOB KESHI (2026-10-19).
 *
 * - AiSettings  — bitta hujjat (`key: "global"`): har tarifning AI
 *   konfiguratsiyasi, model narxlari, budjetlar. Admin panelidan
 *   tahrirlanadi (routes/adminAi.js). Bo'sh bo'lsa standart qiymatlar
 *   services/aiBilling/defaults.js dan olinadi.
 * - AiUsage     — har bir AI amalining yozuvi: kim, qaysi tarif, qaysi
 *   tur (chat / voice / stt / tts), model, tokenlar, haqiqiy narx ($).
 *   Hisobotlar shu kolleksiyadan `$group` bilan yig'iladi.
 * - AiCache     — bir xil savolga pullik model qayta chaqirilmasligi uchun.
 *
 * ⚠️ Narx yozuv YARATILGAN paytdagi tarif bo'yicha saqlanadi (`costUsd`):
 * admin keyin narxni o'zgartirsa, o'tgan oy hisobotlari o'zgarmaydi.
 */
const mongoose = require("mongoose");

const AiSettingsSchema = new mongoose.Schema(
  {
    key: { type: String, default: "global", unique: true },
    data: { type: mongoose.Schema.Types.Mixed, default: {} },
    updatedBy: { type: String, default: "" },
  },
  { timestamps: true, minimize: false },
);

const AiUsageSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", default: null },
  tier: { type: String, default: "free" },
  kind: { type: String, enum: ["chat", "voice", "stt", "tts"], required: true },
  channel: { type: String, default: "web" }, // web | mobile | telegram | voice
  provider: { type: String, default: "" }, // openai | groq | edge | elevenlabs | local
  model: { type: String, default: "" },
  inputTokens: { type: Number, default: 0 },
  cachedTokens: { type: Number, default: 0 }, // OpenAI prompt keshidan (arzonroq)
  outputTokens: { type: Number, default: 0 },
  reasoningTokens: { type: Number, default: 0 }, // outputTokens ichida
  seconds: { type: Number, default: 0 }, // STT audio davomiyligi
  chars: { type: Number, default: 0 }, // TTS belgilar soni
  costUsd: { type: Number, default: 0 },
  cacheHit: { type: Boolean, default: false }, // javob keshidan — narx 0
  day: { type: String, required: true }, // "2026-10-19" (Toshkent)
  month: { type: String, required: true }, // "2026-10"
  createdAt: { type: Date, default: Date.now },
});
AiUsageSchema.index({ month: 1, userId: 1 });
AiUsageSchema.index({ month: 1, tier: 1, kind: 1 });
AiUsageSchema.index({ userId: 1, day: 1 });
// 400 kundan eskisi o'chadi — yillik hisobot uchun yetarli, kolleksiya o'smaydi
AiUsageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 400 * 24 * 3600 });

const AiCacheSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  answer: { type: String, required: true },
  model: { type: String, default: "" },
  hits: { type: Number, default: 0 },
  expiresAt: { type: Date, required: true },
});
AiCacheSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const model = (name, schema) => mongoose.models[name] || mongoose.model(name, schema);

module.exports = {
  AiSettings: model("AiSettings", AiSettingsSchema),
  AiUsage: model("AiUsage", AiUsageSchema),
  AiCache: model("AiCache", AiCacheSchema),
};
