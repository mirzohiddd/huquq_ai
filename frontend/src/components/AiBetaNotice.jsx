import React from "react";
import { FlaskConical } from "lucide-react";
import { useLang } from "../context/LangContext";
import s from "./AiBetaNotice.module.css";

/**
 * ⚠️ VAQTINCHALIK OGOHLANTIRISH — AI hali sinov (beta) bosqichida (2026-11-09).
 *
 * Loyiha egasining talabi: AI professional darajaga yetmaguncha chatda
 * ogohlantirish turadi. OLIB TASHLASH faqat egasi aytganda: `ENABLED = false`
 * qiling (yoki shu fayl, uning CSS'i va ChatDrawer.jsx dagi bitta
 * `<AiBetaNotice />` qatorini o'chiring). Botdagi juftligi:
 * backend/telegram/betaNotice.js.
 *
 * Faqat ochiq chat oynasi ichida chiqadi — sahifa HTML'i, meta teglar va
 * prerender (SEO/AEO/GEO) ga hech qanday ta'sir qilmaydi.
 */
const ENABLED = true;

const TEXT = {
  uz: "HuquqTech AI hozircha sinov (beta) bosqichida — javoblar xato yoki to'liq bo'lmasligi mumkin. Muhim qaror oldidan modda matnini Lex.uz da tekshiring yoki yuristga murojaat qiling.",
  ru: "ИИ HuquqTech пока в тестовом (бета) режиме — ответы могут быть неточными или неполными. Перед важным решением сверьтесь с текстом статьи на Lex.uz или обратитесь к юристу.",
  en: "HuquqTech AI is still in beta — answers may be inaccurate or incomplete. Before an important decision, check the article text on Lex.uz or consult a lawyer.",
};

export default function AiBetaNotice() {
  const { lang } = useLang();
  if (!ENABLED) return null;
  return (
    <div className={s.bar} role="note">
      <FlaskConical size={14} className={s.icon} aria-hidden="true" />
      <span>{TEXT[lang] || TEXT.uz}</span>
    </div>
  );
}
