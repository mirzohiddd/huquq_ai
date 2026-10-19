"use strict";
/**
 * YUKLANGAN HUJJAT BO'YICHA SAVOL — Pro/Premium'da LLM bilan (2026-10-19).
 *
 * Tarifda `docAnalysis` yoqilgan bo'lsa, hujjat matni + Lex.uz bazasidan
 * topilgan moddalar modelga beriladi (bandlarni normalar bilan solishtirish,
 * xavfli bandlar). Aks holda — avvalgi lokal javob (aiTools/docChat.js)
 * o'zgarishsiz ishlaydi. Lokal hujjat javobi har doim zaxira sifatida
 * tayyorlanadi.
 */
const { isDocQuestion, docAnswer } = require("../aiTools/docChat");
const { tieredAnswer } = require("./tiered");

const DOC_CHARS = { pro: 24000, premium: 48000 };

/**
 * @returns {Promise<string|null>} javob yoki null (hujjatga oid savol emas —
 *   oddiy huquqiy oqimga o'tadi)
 */
async function docReplyFor(chat, msg, lang = "uz") {
  if (!isDocQuestion(chat, msg)) return null;
  const localDoc = await docAnswer(chat, msg, lang).catch(() => null);
  const res = await tieredAnswer({
    msg,
    history: (chat.messages || []).slice(-6),
    lang,
    local: { answer: localDoc || "", found: !!localDoc, category: "boshqa", provider: "local" },
    query: msg,
    docText: String(chat.docContext.text || ""),
    docChars: DOC_CHARS,
  });
  return res.provider === "openai" ? res.answer : localDoc;
}

module.exports = { docReplyFor };
