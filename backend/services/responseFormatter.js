"use strict";
const { cleanText } = require("./textToSpeech");

function formatForVoice(text) {
  /* Izoh/manba satrlari ("📖 Moddalarning to'liq matni…", "_Javob faqat…_",
     "…") ovozda o'qilmaydi — ular faqat ekran uchun. Qatorlar hali
     birlashtirilmasdan OLDIN olib tashlanadi (2026-10-14). */
  const body = String(text)
    .split("\n")
    .filter((l) => !/^\s*(📖|_.*_\s*$|…\s*$)/u.test(l))
    // Sarlavha/band oxirida tinish belgisi yo'q — pauza uchun nuqta
    .map((l) => (l.trim() && !/[.!?:;,]\**\s*$/.test(l) ? `${l.replace(/\s+$/, "")}.` : l))
    .join("\n");
  let r = cleanText(body);
  r = r.replace(/^\d+\.\s+/gm, "");
  return r;
}

function formatForText(text) {
  return text
    .replace(/SEN NIMA QILMAYSAN[\s\S]*?(\n\n|$)/g, "")
    .replace(/TASHQI MANBA[\s\S]*?---[\s\S]*?---/g, "")
    .replace(/https?:\/\/[^\s]+/g, "")
    .replace(/lex\.uz(ga|dan|da)?/gi, "qonunchilikka ko'ra")
    .replace(/^Sizning holatingizda[,.]?\s*/i, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function formatResponse(text, mode = "text") {
  if (!text) return "";
  return mode === "voice" ? formatForVoice(text) : formatForText(text);
}

module.exports = { formatResponse, formatForVoice, formatForText };
