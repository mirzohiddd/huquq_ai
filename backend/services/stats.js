"use strict";
const { DailyStat } = require("../models");

async function recordStat(source, category, provider) {
  const today = new Date().toISOString().split("T")[0];
  try {
    const inc = { totalQuestions: 1 };
    if (source === "telegram") inc.telegramQuestions = 1;
    else if (source === "mobile") inc.mobileQuestions = 1;
    else inc.webQuestions = 1;
    const safeCategory = ["mehnat","oila","meros","yer","istemolchi","jinoiy"].includes(category)
      ? category : "boshqa";
    inc[`categories.${safeCategory}`] = 1;
    /* ⚠️ Bu ro'yxat `services/legalAI.js` dagi provayderlar zanjiri
       bilan MOS bo'lishi kerak. Yangi provayder qo'shilib bu yerga
       yozilmasa — uning javoblari statistikaga UMUMAN tushmaydi va
       admin panelida "AI ishlatilishi" kamayib ko'rinadi.
       Shu sabab `DailyStat.providers` sxemasiga ham qo'shish shart. */
    const safeProvider = [
      "claude",
      "groq",
      "cloudflare",
      "gemini",
      "mistral",
      "openai",
      "cohere",
    ].includes(provider)
      ? provider
      : null;
    if (safeProvider) inc[`providers.${safeProvider}`] = 1;
    await DailyStat.findOneAndUpdate({ date: today }, { $inc: inc }, { upsert: true });
  } catch (e) {
    console.error("recordStat error:", e.message);
  }
}

module.exports = { recordStat };
