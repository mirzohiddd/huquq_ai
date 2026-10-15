"use strict";
/**
 * Ovozli SAVOL-JAVOB (2026-10-15).
 *
 * Tezlik tartibi: savol avval Whisper matnining O'ZI bilan qidiriladi
 * (lokal AI 1–650 ms). Faqat javob topilmasa transkripsiya LLM bilan
 * tuzatiladi (`repairTranscript`, ≤6 s) va qayta tahlil qilinadi. Shunda
 * ko'p savolda foydalanuvchi ortiqcha kutmaydi.
 *
 * Baribir tushunilmasa — "topilmadi" o'rniga ANIQLASHTIRUVCHI savol:
 * javobda `clarifyOf` qaytadi, keyingi ovozli javob unga qo'shilib
 * (asl savol + aniqlashtirish) yana tahlil qilinadi.
 */
const { getLegalAdvice } = require("../legalAI");
const { repairTranscript } = require("../voiceTranscript");
const { detectEmotion, isInsult, isGreeting, isThanks } = require("./emotion");
const { speechSummary, opener, clarifyText, T } = require("./speech");
const { isUzCyrillic, uzCyrToLatin } = require("../localAI/text");

const REPAIR_WAIT_MS = 3500; // ovozda uzoq kutish yo'q — keyin aniqlashtiramiz
const race = (p, ms) => Promise.race([p, new Promise((r) => setTimeout(() => r(null), ms))]);

const AREA_OF_CATEGORY = {
  mehnat: "labor", oila: "family", meros: "inheritance",
  yer: "housing", istemolchi: "consumer", jinoiy: "criminal",
};

function understood(r) {
  if (!r) return false;
  if (r.found === true || r.scoped === true || r.category === "blocked") return true;
  return r.found === undefined && r.category !== "off_topic";
}

const ask = (text, history, lang) =>
  getLegalAdvice(text, history, null, null, lang, false, { fromVoice: true });

/**
 * @param {{ text: string, lang: "uz"|"ru", history?: object[], clarifyOf?: string }} p
 * @returns {Promise<object>} { kind, emotion, answer, speech, category, clarifyOf?, quizArea? }
 */
async function answerQuestion({ text, lang = "uz", history = [], clarifyOf = "" }) {
  const L = T(lang);
  let raw = String(text || "").trim();
  // Whisper ba'zan o'zbek nutqini kirillda yozadi — baza lotin yozuvida
  if (lang === "uz" && isUzCyrillic(raw)) raw = uzCyrToLatin(raw);

  if (raw.replace(/[^\p{L}]/gu, "").length < 2) {
    return { kind: "clarify", emotion: "confused", answer: L.unheard, speech: L.unheard, clarifyOf };
  }
  if (isInsult(raw)) {
    return { kind: "insult", emotion: "angry", answer: L.insult, speech: L.insult };
  }
  if (!clarifyOf && isGreeting(raw)) {
    return { kind: "answer", emotion: "happy", answer: L.greet, speech: L.greet };
  }
  if (!clarifyOf && isThanks(raw)) {
    return { kind: "answer", emotion: "happy", answer: L.thanks, speech: L.thanks };
  }

  // Aniqlashtirish javobi — asl savol bilan birga tahlil qilinadi
  const query = clarifyOf ? `${clarifyOf} ${raw}`.slice(-500) : raw;
  let r = await ask(query, history, lang);
  let used = query;

  if (!understood(r)) {
    const fixed = (await race(repairTranscript(query, lang).catch(() => null), REPAIR_WAIT_MS)) || { text: query };
    if (fixed.text && fixed.text !== query) {
      const r2 = await ask(fixed.text, history, lang);
      if (understood(r2)) {
        r = r2;
        used = fixed.text;
      }
    }
  }

  if (!understood(r)) {
    const speech = clarifyText(r?.answer, lang, false);
    return { kind: "clarify", emotion: "confused", answer: speech, speech, clarifyOf: raw.slice(-300), userText: used };
  }

  const kind = r.category === "blocked" ? "blocked" : "answer";
  const emotion = detectEmotion({ userText: used, kind });
  const sum = speechSummary(r.answer, lang);
  // Mazmunsiz "topildi" javobi (faqat sarlavha) — aniqlashtirish yaxshiroq
  if (sum.text.length < 25 && kind === "answer") {
    const speech = clarifyText("", lang, false);
    return { kind: "clarify", emotion: "confused", answer: speech, speech, clarifyOf: raw.slice(-300), userText: used };
  }
  const quizArea = r.found ? AREA_OF_CATEGORY[r.category] || null : null;
  const parts = [opener(emotion, lang), sum.text];
  if (sum.truncated) parts.push(L.more);
  if (quizArea && lang === "uz") parts.push(L.offerQuiz);

  return {
    kind,
    emotion,
    answer: r.answer,
    speech: parts.filter(Boolean).join(" "),
    category: r.category,
    quizArea,
    userText: used,
  };
}

module.exports = { answerQuestion };
