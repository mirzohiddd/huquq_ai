"use strict";
const router = require("express").Router();
const { SiteContent } = require("../models");
const { translateMany } = require("../services/translator");

function langOf(req) {
  const l = String(req.query.lang || req.get("X-Lang") || "").toLowerCase();
  return ["uz", "ru"].includes(l) ? l : "uz";
}

/* Sayt kontentining TARJIMA QILINADIGAN maydonlari.
   Ataylab to'liq ro'yxat: telefon, email, ijtimoiy tarmoq havolalari va
   raqamli ko'rsatkichlar (`stats.experience` = "10+") tarjima
   QILINMAYDI — ular til bilan bog'liq emas va AI ularni buzib
   yuborishi mumkin edi ("10+" → "более 10"). */
const TRANSLATABLE = [
  ["stats", "experienceLabel"],
  ["stats", "casesLabel"],
  ["stats", "clientsLabel"],
  ["hero", "title"],
  ["hero", "subtitle"],
  ["hero", "cta"],
  ["about", "title"],
  ["about", "lead"],
  ["about", "text"],
  ["contact", "address"],
  ["contact", "hoursWeek"],
  ["contact", "hoursSat"],
];

async function translateSiteContent(content, lang) {
  if (lang === "uz") return content;
  const out = JSON.parse(JSON.stringify(content));
  const slots = [];
  const texts = [];
  for (const [group, field] of TRANSLATABLE) {
    const v = out?.[group]?.[field];
    if (typeof v === "string" && v.trim()) {
      slots.push([group, field]);
      texts.push(v);
    }
  }
  if (!texts.length) return out;
  try {
    const done = await translateMany(texts, lang);
    slots.forEach(([g, f], i) => (out[g][f] = done[i]));
  } catch {
    // Tarjima bo'lmasa manba matn qaytadi — sahifa baribir ishlaydi
  }
  return out;
}

/* GET /api/site/content - Get site content */
router.get("/content", async (req, res) => {
  try {
    let content = await SiteContent.findOne();
    if (!content) {
      // Create default content if none exists
      content = await SiteContent.create({});
    }
    return res.json(
      await translateSiteContent(content.toObject?.() || content, langOf(req)),
    );
  } catch (err) {
    console.error("get site content:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
