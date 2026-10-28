"use strict";
/**
 * TARIFGA QARAB AI JAVOBI (2026-10-19).
 *
 * getLegalAdvice() lokal javobni tayyorlab, shu yerga beradi. Bu modul:
 *   1. foydalanuvchi tarifini va budjetini tekshiradi (aiBilling/budget.js);
 *   2. ruxsat bo'lmasa — LOKAL javob o'zgarishsiz qaytadi (bepul tarif
 *      standart holatda shunday ishlaydi, ya'ni avvalgi xatti-harakat);
 *   3. ruxsat bo'lsa — RAG manbalari bilan OpenAI'dan javob oladi, modda
 *      raqamlarini tekshiradi, keshga yozadi.
 * 2026-10-28: ruxsat bo'lmasa yoki OpenAI xato bersa — yozma chat avval
 * Gemini'ga (llm/freeAi.js), so'ng lokal javobga tushadi.
 * Har qanday xatoda (tarmoq, kvota, tekshiruvdan o'tmagan javob) foydalanuvchi
 * baribir LOKAL javobni oladi — pullik AI chatni hech qachon "sindirmaydi".
 *
 * MODEL ROUTING: tarifda `deepModel` bo'lsa, murakkab so'rov (uzun savol,
 * hujjat, rasm, "batafsil/tahlil") kuchliroq modelga yo'naltiriladi —
 * oddiy savol esa asosiy modelda. Sifat pasaytirilmaydi: routing faqat
 * YUQORIGA ishlaydi.
 */
const crypto = require("crypto");
const { AiCache } = require("../../models/aiBilling");
const { checkAccess } = require("../aiBilling/budget");
const { current } = require("../aiBilling/settings");
const { ctx } = require("../aiBilling/context");
const { recordUsage } = require("../aiBilling/usage");
const { chat } = require("./openai");
const { gatherSources, unverifiedCitations, sourcesBlock } = require("./grounded");
const { buildMessages, fixMessage, noteFor } = require("./prompts");
const { freeAiAnswer, canUseFreeAi } = require("./freeAi");

/* Pullik AI ishlatilmaganda (bepul tarif, budjet/kalit yo'q, OpenAI xatosi)
   YOZMA chat Gemini'dan javob oladi; u ham bo'lmasa — lokal javob. */
async function fallback(p, tier) {
  if (!canUseFreeAi(p)) return null;
  return freeAiAnswer(p, tier);
}

const DEEP_HINT = /tahlil|batafsil|chuqur|solishtir|taqqosla|xavf|shartnoma(ni|dagi)|анализ|подробн|сравн|риск|договор/i;

function pickModel(cfg, { msg, docText, image, history }) {
  const deep =
    cfg.deepModel && (msg.length > 350 || docText || image || DEEP_HINT.test(msg) || history.length >= 6);
  return deep
    ? { model: cfg.deepModel, effort: cfg.deepReasoningEffort }
    : { model: cfg.model, effort: cfg.reasoningEffort };
}

const norm = (t) => String(t || "").toLowerCase().replace(/[ʻʼ'‘’`]/g, "'").replace(/\s+/g, " ").trim();

function cacheKey(parts) {
  return crypto.createHash("sha256").update(parts.join("\u0001")).digest("hex");
}

function trimHistory(history, turns) {
  if (!turns) return [];
  return history
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-turns)
    .map((m) => ({ role: m.role, content: String(m.content || "").slice(0, 1500) }));
}

/**
 * @param {{ msg, history, lang, local, codes, query, image?, docText?, voice? }} p
 *   local — localLegalAnswer natijasi ({ answer, found, category, provider })
 * @returns {Promise<object>} getLegalAdvice javobi shaklida
 */
async function tieredAnswer(p) {
  const c = ctx();
  const access = await checkAccess(c.userId, c.ip);
  if (c && typeof c === "object") c.tier = access.tier; // STT/TTS yozuvlari ham shu tarifga tushsin
  const local = p.local;

  if (!access.ok) {
    const free = await fallback(p, access.tier);
    if (free) return free;
    const note = noteFor(access.reason, p.lang);
    return note && access.tier !== "free" ? { ...local, answer: `${local.answer}\n\n${note}` } : local;
  }
  const cfg = access.cfg;
  if (p.image && !cfg.images) return local;
  if (p.docText && !cfg.docAnalysis) return local;
  const docText = p.docText ? p.docText.slice(0, (p.docChars || {})[access.tier] || 12000) : null;

  const history = trimHistory(p.history || [], cfg.historyTurns);
  const { model, effort } = pickModel(cfg, { msg: p.msg, docText, image: p.image, history });
  const cacheable = !history.length && !p.image && !docText;
  const key = cacheable ? cacheKey([access.tier, model, p.lang, p.voice ? "v" : "t", norm(p.msg)]) : null;

  try {
    if (key) {
      const hit = await AiCache.findOneAndUpdate({ key, expiresAt: { $gt: new Date() } }, { $inc: { hits: 1 } }).lean();
      if (hit) {
        recordUsage({ provider: "openai", model, tier: access.tier, cacheHit: true }).catch(() => {});
        return { ...local, answer: hit.answer, provider: "openai", model, found: true, cached: true };
      }
    }

    const localAnswer = local.found ? local.answer : "";
    const { list, allowed } = await gatherSources({ query: p.query || p.msg, lang: p.lang, codes: p.codes, cfg, localAnswer });
    const messages = buildMessages({
      tier: access.tier,
      lang: p.lang,
      sources: sourcesBlock(list, p.lang),
      localAnswer,
      history,
      msg: p.msg,
      voice: p.voice,
      docText,
      image: p.image,
    });
    const call = (msgs) => chat({ model, messages: msgs, maxOutputTokens: cfg.maxOutputTokens, reasoningEffort: effort, tier: access.tier });

    let out = await call(messages);
    let bad = unverifiedCitations(out.text, allowed);
    if (bad.length) {
      // Bir marta tuzatishni so'raymiz — model manbada yo'q moddani keltirdi
      out = await call([...messages, { role: "assistant", content: out.text }, { role: "user", content: fixMessage(bad, p.lang) }]);
      bad = unverifiedCitations(out.text, allowed);
      if (bad.length) {
        console.warn(`[AI] tekshirilmagan modda (${bad.join(", ")}) — lokal javob qaytarildi`);
        return local;
      }
    }

    if (key) {
      const ttl = current().cacheTtlHours;
      if (ttl > 0) {
        AiCache.updateOne(
          { key },
          { $set: { answer: out.text, model: out.model, expiresAt: new Date(Date.now() + ttl * 3600 * 1000) } },
          { upsert: true },
        ).catch(() => {});
      }
    }
    return { ...local, answer: out.text, provider: "openai", model: out.model, found: true };
  } catch (err) {
    console.warn(`[AI] ${access.tier}/${model} xato — zaxira javob: ${err.message}`);
    return (await fallback(p, access.tier)) || local;
  }
}

module.exports = { tieredAnswer, pickModel };
