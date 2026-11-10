"use strict";
/**
 * ⚠️ VAQTINCHALIK OGOHLANTIRISH — AI hali sinov bosqichida (2026-11-09).
 *
 * Loyiha egasining talabi: AI professional darajaga yetmaguncha botda
 * ogohlantirish turadi. OLIB TASHLASH faqat egasi aytganda: `ENABLED = false`
 * qiling (yoki shu faylni va uning 2 ta ishlatilish joyini o'chiring:
 * telegram/ai.js va telegram/flows.js). Saytdagi juftligi:
 * frontend/src/components/AiBetaNotice.jsx.
 */
const ENABLED = true;

const TEXT = {
  uz: "🧪 <i>HuquqTech AI hozircha sinov (beta) bosqichida — javoblar xato yoki to'liq bo'lmasligi mumkin. Muhim qaror oldidan modda matnini Lex.uz da tekshiring yoki yuristga murojaat qiling.</i>",
  ru: "🧪 <i>ИИ HuquqTech пока в тестовом (бета) режиме — ответы могут быть неточными или неполными. Перед важным решением сверьтесь с текстом статьи на Lex.uz или обратитесь к юристу.</i>",
};

/** Bo'sh satr — ogohlantirish o'chirilgan */
const betaNotice = (lang) => (ENABLED ? TEXT[lang === "ru" ? "ru" : "uz"] : "");

module.exports = { betaNotice };
