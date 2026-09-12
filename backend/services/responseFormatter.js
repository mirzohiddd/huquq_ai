"use strict";
const { cleanText } = require("./textToSpeech");

function formatForVoice(text) {
  let r = cleanText(text);
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
