"use strict";
/**
 * QONUNCHILIK HUJJATLARI — lex.uz'dan olingan RASMIY qo'shimcha ma'lumot.
 *
 * Modda matni avvalgidek `LegalChunk` da (unga tegilmaydi). Bu yerda esa
 * matndan TASHQARIDAGI rasmiy ma'lumot saqlanadi: rekvizitlar, tuzilma
 * (qism/bo'lim/bob/paragraf), modda o'zgarishlari va tahrir sanalari.
 * `services/legislation/dossier.js` har 24 soatda yangilaydi.
 *
 * Alohida fayl — `models/index.js` ga tegmaslik uchun.
 */
const mongoose = require("mongoose");

const Mixed = mongoose.Schema.Types.Mixed;

const LawDossierSchema = new mongoose.Schema(
  {
    code: { type: String, required: true, unique: true },
    docId: { type: String, default: "" },
    meta: { type: Mixed, default: null }, // parseCard() natijasi
    structure: { type: Mixed, default: null }, // { uz: nodes[], ru: nodes[] }
    changes: { type: Mixed, default: null }, // { uz: {num: []}, ru: {num: []} }
    editions: { type: [String], default: [] }, // "dd.mm.yyyy", yangisi birinchi
    correspondents: { type: Mixed, default: [] },
    fetchedAt: { type: Date, default: null },
    error: { type: String, default: "" },
  },
  { timestamps: true, minimize: false },
);

/* Eski tahrir matni — "Oldingi tahrir / Amaldagi tahrir" solishtiruvi
   uchun. So'ralganda bir marta lex.uz'dan olinadi va keshlanadi
   (eski tahrir o'zgarmaydi). */
const LawEditionSchema = new mongoose.Schema(
  {
    code: { type: String, required: true },
    date: { type: String, required: true },
    articles: { type: Mixed, default: {} }, // { num: { title, text } }
  },
  { timestamps: true, minimize: false },
);
LawEditionSchema.index({ code: 1, date: 1 }, { unique: true });

module.exports = {
  LawDossier:
    mongoose.models.LawDossier || mongoose.model("LawDossier", LawDossierSchema),
  LawEdition:
    mongoose.models.LawEdition || mongoose.model("LawEdition", LawEditionSchema),
};
