"use strict";
/**
 * PREZIDENT HUJJATLARI — farmon, qaror, farmoyish (LexUZ milliy bazasi).
 *
 * Ikki kolleksiya ataylab:
 *  - `LegalAct` — ro'yxat (rekvizitlar: raqam, sana, nom, holat). ~5 600 ta
 *    yengil yozuv — katalog, filtr va qidiruv shundan ishlaydi.
 *  - `LegalActText` — to'liq matn. Faqat hujjat OCHILGANDA LexUZ'dan olinadi
 *    va keshlanadi (5 600 ta hujjatni oldindan yuklash lex.uz'ga ortiqcha
 *    yuk va bazaga keraksiz hajm bo'lardi).
 *
 * `LegalChunk` (kodekslar, AI qidiruvi) ga TEGILMAYDI.
 */
const mongoose = require("mongoose");

const LegalActSchema = new mongoose.Schema(
  {
    docId: { type: String, required: true, unique: true }, // "-8509858"
    form: { type: String, required: true, index: true }, // decree | resolution | order
    number: { type: String, default: "" }, // "PF-206"
    date: { type: String, default: "" }, // "23.09.2026"
    dateKey: { type: Number, default: 0, index: true }, // 20260923 — saralash uchun
    year: { type: Number, default: 0, index: true },
    title: { type: String, required: true },
    badge: { type: String, default: "" }, // LexUZ'dagi to'liq rekvizit satri
    statusCode: { type: String, default: "" }, // LexUZ belgisi: "y" — amalda
    listed: { type: Boolean, default: true }, // oxirgi to'liq ro'yxatda bormi
    lastSeenAt: { type: Date, default: null },
  },
  { timestamps: true },
);

const LegalActTextSchema = new mongoose.Schema(
  {
    docId: { type: String, required: true, unique: true },
    blocks: { type: [mongoose.Schema.Types.Mixed], default: [] }, // [{ k, t }]
    hasText: { type: Boolean, default: false },
    meta: { type: mongoose.Schema.Types.Mixed, default: null }, // kartochka
    effectiveAt: { type: String, default: "" },
    fetchedAt: { type: Date, default: null },
  },
  { minimize: false },
);

module.exports = {
  LegalAct: mongoose.models.LegalAct || mongoose.model("LegalAct", LegalActSchema),
  LegalActText:
    mongoose.models.LegalActText || mongoose.model("LegalActText", LegalActTextSchema),
};
