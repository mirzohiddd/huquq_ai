"use strict";
/**
 * BEPUL TARIF UCHUN AI — Gemini (2026-10-28).
 *
 * Foydalanuvchi talabi: "tekinda Gemini javob beradi, tarif sotib olganlarga
 * kuchli AI'lar" — faqat YOZMA chatda (ovozli rejim, rasm va hujjat bunga
 * kirmaydi). Pullik tarifda OpenAI ishlamay qolsa (kalit, kvota, budjet)
 * ham shu yo'l zaxira bo'ladi.
 *
 * Xavfsizlik OpenAI yo'li bilan BIR XIL: javob faqat Lex.uz bazasidagi
 * manbalarga tayanadi (grounded.js), manbada yo'q modda raqami bo'lsa bir
 * marta tuzatish so'raladi, baribir bo'lsa — lokal javob qaytadi.
 */
const crypto = require("crypto");
const { AiCache } = require("../../models/aiBilling");
const { current, tierConfig } = require("../aiBilling/settings");
const { geminiChat, geminiReady } = require("./gemini");
const { gatherSources, unverifiedCitations, sourcesBlock } = require("./grounded");
const { buildMessages, fixMessage } = require("./prompts");

const SITE = `SAYT HAQIDA (foydalanuvchi sayt bo'limini so'rasa, havola bilan yo'naltiring):
[Darslar](/lessons) — huquqni oddiy tilda o'rganish · [Testlar](/tests) — bilimni sinash · [Qonunlar kutubxonasi](/library) — kodekslar moddama-modda · [Konstitutsiya](/constitution) · [AI vositalar](/ai-tools) — ariza/shikoyat tayyorlash, hujjat tahlili · [Tariflar](/#pricing).
Foydalanuvchi qisqa yoki noaniq yozsa — taxminiy eng yaqin huquqiy mavzuda foydali javob bering va bitta aniqlashtiruvchi savol bering; "topilmadi" deb qo'ya qolmang.`;

const norm = (t) => String(t || "").toLowerCase().replace(/[ʻʼ'‘’`]/g, "'").replace(/\s+/g, " ").trim();

function trimHistory(history, turns) {
  return (history || [])
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-turns)
    .map((m) => ({ role: m.role, content: String(m.content || "").slice(0, 1500) }));
}

/** Matnli savolmi va Gemini tayyormi */
function canUseFreeAi(p) {
  return !p.voice && !p.image && !p.docText && geminiReady();
}

/**
 * @param {object} p — tieredAnswer parametrlari
 * @param {string} tier — foydalanuvchi tarifi (statistika uchun)
 * @returns {Promise<object|null>} javob yoki null (lokal javob qoladi)
 */
async function freeAiAnswer(p, tier = "free") {
  const local = p.local;
  const base = tierConfig("free");
  const cfg = { ...base, ragArticles: Math.max(base.ragArticles, 5), articleChars: Math.max(base.articleChars, 1400) };
  const history = trimHistory(p.history, Math.max(base.historyTurns, 6));
  const key = history.length
    ? null
    : crypto.createHash("sha256").update(["gemini", p.lang, norm(p.msg)].join("\u0001")).digest("hex");

  try {
    if (key) {
      const hit = await AiCache.findOneAndUpdate({ key, expiresAt: { $gt: new Date() } }, { $inc: { hits: 1 } }).lean();
      if (hit) return { ...local, answer: hit.answer, provider: "gemini", model: hit.model, found: true, cached: true };
    }
    const localAnswer = local.found ? local.answer : "";
    const { list, allowed } = await gatherSources({ query: p.query || p.msg, lang: p.lang, codes: p.codes, cfg, localAnswer });
    const messages = buildMessages({
      tier: "basic", // bepul tarifda ham to'liq, tushunarli javob (qisqa "free" uslubi emas)
      lang: p.lang,
      sources: sourcesBlock(list, p.lang),
      localAnswer,
      history,
      msg: p.msg,
    });
    messages.splice(2, 0, { role: "system", content: SITE });
    const call = (msgs) => geminiChat({ messages: msgs, maxOutputTokens: Math.max(base.maxOutputTokens, 1200), tier });

    let out = await call(messages);
    let bad = unverifiedCitations(out.text, allowed);
    if (bad.length) {
      out = await call([...messages, { role: "assistant", content: out.text }, { role: "user", content: fixMessage(bad, p.lang) }]);
      bad = unverifiedCitations(out.text, allowed);
      if (bad.length) {
        console.warn(`[Gemini] tekshirilmagan modda (${bad.join(", ")}) — lokal javob`);
        return null;
      }
    }
    const ttl = current().cacheTtlHours;
    if (key && ttl > 0) {
      AiCache.updateOne(
        { key },
        { $set: { answer: out.text, model: out.model, expiresAt: new Date(Date.now() + ttl * 3600 * 1000) } },
        { upsert: true },
      ).catch(() => {});
    }
    return { ...local, answer: out.text, provider: "gemini", model: out.model, found: true };
  } catch (err) {
    console.warn(`[Gemini] ${tier} xato — lokal javob: ${err.message}`);
    return null;
  }
}

module.exports = { freeAiAnswer, canUseFreeAi };
