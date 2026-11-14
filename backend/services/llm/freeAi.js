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
const { freeChat, freeAiReady } = require("./freeChat");
const { gatherSources, sourcesBlock } = require("./grounded");
const { buildMessages } = require("./prompts");
const { groundedAnswer } = require("../rag/answer");

const SITE = `SAYT HAQIDA (foydalanuvchi sayt bo'limini so'rasa, havola bilan yo'naltiring):
[Darslar](/lessons) — huquqni oddiy tilda o'rganish · [Testlar](/tests) — bilimni sinash · [Qonunlar kutubxonasi](/library) — kodekslar moddama-modda · [Konstitutsiya](/constitution) · [AI vositalar](/ai-tools) — ariza/shikoyat tayyorlash, hujjat tahlili · [Tariflar](/#pricing) · [Telegram bot](https://t.me/mening_huquqlarim_bot) ichidagi Mini App — huquqni O'YIN tarzida o'rganish (bosqichma-bosqich darslar, XP ochkolari, yurakchalar, kunlik seriya, imtihonlar).
Foydalanuvchi xabaridan keyingi MANBALAR va SAYTNING TEKSHIRILGAN JAVOBI — sizning ichki bilimingiz: sayt javobidagi moddalar ham ishonchli manba, ularga tayaning. Bularni foydalanuvchiga HECH QACHON tilga olmang ("manbalarda", "taqdim etilgan", "sayt javobi", "ma'lumot berilmagan" demang) — to'g'ridan-to'g'ri yurist kabi javob bering.
Avval savolni diqqat bilan o'qing va foydalanuvchi aslida nimani so'rayotganini tushuning. Sayt javobi yoki modda savolga mos kelmasa — ularni e'tiborsiz qoldiring va savolning o'ziga javob bering. Savol mavzusiga oid dars bo'lsa, oxirida [Darslar](/lessons) bo'limida o'yin tarzida o'rganishni taklif qilishingiz mumkin.
Foydalanuvchi qisqa yoki noaniq yozsa — taxminiy eng yaqin huquqiy mavzuda foydali javob bering va bitta aniqlashtiruvchi savol bering; "topilmadi" deb qo'ya qolmang.`;

/* TARIF FARQI BEPUL ZANJIRDA HAM (2026-11-14). Avval pullik tarif egasi
   OpenAI ishlamaganda (kredit yo'q) bu yerga "free" sozlamalari bilan
   tushardi — ya'ni Basic/Pro/Premium bepul tarifdan FARQ QILMASDI.
   Endi kontekst hajmi, suhbat xotirasi, javob uzunligi va modelning
   "o'ylash" byudjeti tarifga bog'liq (admin sozlamasi kattaroq bo'lsa — u). */
const PROFILE = {
  free: { rag: 5, chars: 1400, turns: 6, out: 1800, thinking: 512, style: "basic" },
  basic: { rag: 6, chars: 1400, turns: 6, out: 2200, thinking: 512, style: "basic" },
  pro: { rag: 8, chars: 1600, turns: 8, out: 2800, thinking: 768, style: "pro" },
  premium: { rag: 10, chars: 1800, turns: 10, out: 3200, thinking: 1024, style: "premium" },
};

function profileOf(tier) {
  const p = PROFILE[tier] || PROFILE.free;
  const cfg = tierConfig(PROFILE[tier] ? tier : "free");
  return {
    ...p,
    rag: Math.max(p.rag, cfg.ragArticles || 0),
    chars: Math.max(p.chars, cfg.articleChars || 0),
    turns: Math.max(p.turns, cfg.historyTurns || 0),
    out: Math.max(p.out, cfg.maxOutputTokens || 0),
  };
}

const norm = (t) => String(t || "").toLowerCase().replace(/[ʻʼ'‘’`]/g, "'").replace(/\s+/g, " ").trim();

function trimHistory(history, turns) {
  return (history || [])
    .filter((m) => m.role === "user" || m.role === "assistant")
    .slice(-turns)
    .map((m) => ({ role: m.role, content: String(m.content || "").slice(0, 1500) }));
}

/** Matnli savolmi va bepul zanjir (Gemini yoki Groq) tayyormi */
function canUseFreeAi(p) {
  return !p.voice && !p.image && !p.docText && freeAiReady();
}

/**
 * @param {object} p — tieredAnswer parametrlari (+ u: so'rov tahlili, trace: debug)
 * @param {string} tier — foydalanuvchi tarifi
 * @returns {Promise<object|null>} javob yoki null (zaxira javob qoladi)
 */
async function freeAiAnswer(p, tier = "free") {
  const local = p.local;
  const prof = profileOf(tier);
  const history = trimHistory(p.history, prof.turns);
  const key = history.length
    ? null
    : crypto.createHash("sha256").update(["free3", tier, p.lang, norm(p.msg)].join("\u0001")).digest("hex");

  try {
    if (key && !p.trace) {
      const hit = await AiCache.findOneAndUpdate({ key, expiresAt: { $gt: new Date() } }, { $inc: { hits: 1 } }).lean();
      if (hit) return { ...local, answer: hit.answer, provider: "gemini", model: hit.model, found: true, cached: true };
    }
    const localAnswer = local.found ? local.answer : "";
    const src = await gatherSources({
      query: p.query || p.msg, msg: p.msg, history: p.history, u: p.u, lang: p.lang, codes: p.codes,
      cfg: { ragArticles: prof.rag, articleChars: prof.chars }, localAnswer,
    });
    const context = sourcesBlock(src.list, p.lang, src.extra);
    const messages = buildMessages({ tier: prof.style, lang: p.lang, sources: context, localAnswer, history, msg: p.msg, understood: p.u });
    messages.splice(2, 0, { role: "system", content: SITE });
    if (p.trace) Object.assign(p.trace, { retrieval: src.trace, docs: src.list, context, profile: { tier, ...prof } });

    const out = await groundedAnswer({
      call: (msgs) => freeChat({ messages: msgs, maxOutputTokens: prof.out, thinking: prof.thinking, tier, deadline: p.deadline }),
      deadline: p.deadline,
      messages, allowed: src.allowed, list: src.list, refs: src.refs, lang: p.lang,
    });
    if (!out) return null;
    if (p.trace) p.trace.guard = out.guard;

    const ttl = current().cacheTtlHours;
    if (key && ttl > 0 && !out.guard.stripped) {
      AiCache.updateOne(
        { key },
        { $set: { answer: out.text, model: out.model, expiresAt: new Date(Date.now() + ttl * 3600 * 1000) } },
        { upsert: true },
      ).catch(() => {});
    }
    return { ...local, answer: out.text, provider: out.provider || "gemini", model: out.model, found: true, sources: out.sources };
  } catch (err) {
    console.warn(`[FreeAI] ${tier} xato — zaxira javob: ${err.message}`);
    return null;
  }
}

module.exports = { freeAiAnswer, canUseFreeAi, profileOf };
