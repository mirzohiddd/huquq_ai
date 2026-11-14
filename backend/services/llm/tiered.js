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
const { gatherSources, sourcesBlock } = require("./grounded");
const { buildMessages, noteFor } = require("./prompts");
const { freeAiAnswer, canUseFreeAi } = require("./freeAi");
const { understand } = require("../rag/understand");
const { groundedAnswer } = require("../rag/answer");
const { BUDGET_MS, within, slice } = require("../rag/deadline");
const { helpfulFallback } = require("../rag/fallback");

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
async function route(p) {
  const c = ctx();
  const access = await checkAccess(c.userId, c.ip);
  // Debug: tarifni taqlid qilish (scripts/aiDebug.js, admin) — bepul zanjirda
  if (p.forceTier) Object.assign(access, { ok: false, tier: p.forceTier, reason: "local_mode" });
  if (c && typeof c === "object") c.tier = access.tier; // STT/TTS yozuvlari ham shu tarifga tushsin
  if (p.trace) p.trace.access = { tier: access.tier, paidAi: access.ok, reason: access.reason || null };
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
    if (key && !p.trace) {
      const hit = await AiCache.findOneAndUpdate({ key, expiresAt: { $gt: new Date() } }, { $inc: { hits: 1 } }).lean();
      if (hit) {
        recordUsage({ provider: "openai", model, tier: access.tier, cacheHit: true }).catch(() => {});
        return { ...local, answer: hit.answer, provider: "openai", model, found: true, cached: true };
      }
    }

    const localAnswer = local.found ? local.answer : "";
    const src = await gatherSources({ query: p.query || p.msg, msg: p.msg, history: p.history, u: p.u, lang: p.lang, codes: p.codes, cfg, localAnswer });
    const context = sourcesBlock(src.list, p.lang, src.extra);
    const messages = buildMessages({ tier: access.tier, lang: p.lang, sources: context, localAnswer, history, msg: p.msg, voice: p.voice, docText, image: p.image, understood: p.u });
    if (p.trace) Object.assign(p.trace, { retrieval: src.trace, docs: src.list, context });
    // Modda tekshiruvi, tuzatish va "Manbalar" — rag/answer.js (bepul zanjir bilan bir xil)
    const out = await groundedAnswer({
      call: (msgs) => within(chat({ model, messages: msgs, maxOutputTokens: cfg.maxOutputTokens, reasoningEffort: effort, tier: access.tier }), slice(p.deadline, 0.6), "OpenAI"),
      deadline: slice(p.deadline, 0.6),
      messages, allowed: src.allowed, list: src.list, refs: src.refs, lang: p.lang, voice: p.voice,
    });
    if (!out) return (await fallback(p, access.tier)) || local;
    if (p.trace) p.trace.guard = out.guard;

    if (key && !out.guard.stripped) {
      const ttl = current().cacheTtlHours;
      if (ttl > 0) {
        AiCache.updateOne(
          { key },
          { $set: { answer: out.text, model: out.model, expiresAt: new Date(Date.now() + ttl * 3600 * 1000) } },
          { upsert: true },
        ).catch(() => {});
      }
    }
    return { ...local, answer: out.text, provider: "openai", model: out.model, found: true, sources: out.sources };
  } catch (err) {
    console.warn(`[AI] ${access.tier}/${model} xato — zaxira javob: ${err.message}`);
    return (await fallback(p, access.tier)) || local;
  }
}

/**
 * KIRISH NUQTASI (2026-11-14): so'rovni tushunish → javob → zaxira.
 *   1. savol tahlil qilinadi (imlo, qonun atamalari, davom savoli) — rag/understand.js;
 *   2. lokal javob topilmagan bo'lsa, NORMALLASHTIRILGAN savol bilan qayta
 *      uriniladi (`p.relocal`) — kuratorlik qilingan vaziyatlar xato yozilgan
 *      savolda ham tanilsin;
 *   3. tarifga qarab LLM javobi (`route`);
 *   4. hech biri javob bermasa — "topilmadi" shabloni EMAS, foydali zaxira:
 *      yaqin moddalar + aniqlashtiruvchi savol (rag/fallback.js).
 */
async function tieredAnswer(p) {
  const structured = !p.image && !p.docText;
  p.deadline = Date.now() + BUDGET_MS; // butun AI bosqichi uchun (rag/deadline.js)
  if (structured && !p.u) {
    // Ovozli rejimda tahlil faqat qoidalar bilan (javob kechikmasin)
    p.u = await understand({ msg: p.msg, history: p.history, lang: p.lang, codes: p.codes, useLlm: !p.voice }).catch(() => null);
  }
  if (p.trace) p.trace.understanding = p.u;
  if (p.u && p.relocal && !p.local.found && !p.local.scoped && p.u.standalone && p.u.standalone !== p.msg) {
    const again = await p.relocal(p.u.standalone).catch(() => null);
    if (again && again.found) p.local = again;
  }

  let res = await route(p);
  if (structured && !p.voice && p.u && !res.found && !res.scoped && (!res.provider || res.provider === "local")) {
    try {
      const cfg = { ragArticles: 5, articleChars: 1600 };
      const src = await gatherSources({ query: p.query || p.msg, msg: p.msg, history: p.history, u: p.u, lang: p.lang, codes: p.codes, cfg, localAnswer: "" });
      if (p.trace) Object.assign(p.trace, { retrieval: src.trace, docs: src.list, fallback: true });
      // Huquqqa aloqasiz xabar (mavzu filtri hal qiladi) — bu yerda javob almashtirilmaydi
      if (src.list.length || src.ambiguous || !p.offTopic) {
        res = { ...res, answer: helpfulFallback({ lang: p.lang, u: p.u, docs: src.list, ambiguous: src.ambiguous }), helpful: true, found: src.list.some((d) => d.direct) };
      }
    } catch (err) {
      console.warn("[AI] zaxira javob tuzilmadi:", err.message);
    }
  }
  return p.trace ? { ...res, debug: p.trace } : res;
}

module.exports = { tieredAnswer, pickModel };
