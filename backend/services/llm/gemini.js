"use strict";
/**
 * Google Gemini — yupqa mijoz (SDK'siz, global fetch), 2026-10-28.
 *
 * BEPUL tarifning YOZMA chati shu orqali javob oladi (llm/freeAi.js).
 * Kirish formati OpenAI bilan bir xil (`messages`), shuning uchun
 * prompts.js dagi tayyor promptlar o'zgarishsiz ishlatiladi.
 *
 * ⚠️ Bepul Gemini kvotasi kichik (kunlik/daqiqalik). 429 kelsa o'sha model
 * vaqtincha chetlab o'tiladi va keyingisi (flash-lite) sinaladi; kalit
 * yaroqsiz bo'lsa (400/403) — Gemini 30 daqiqaga o'chadi. Har ikki holatda
 * chat TO'XTAMAYDI: javob lokal AI'dan keladi.
 */
const { recordUsage } = require("../aiBilling/usage");

const BASE = "https://generativelanguage.googleapis.com/v1beta/models";
const TIMEOUT_MS = 30 * 1000;
const COOLDOWN_429 = 10 * 60 * 1000;
const COOLDOWN_KEY = 30 * 60 * 1000;
const THINKING = 512; // 1024 da javob 15–20 s kelardi
const pausedUntil = new Map(); // model (yoki "*") → vaqt

const models = () =>
  [...new Set([process.env.GEMINI_CHAT_MODEL || process.env.GEMINI_MODEL || "gemini-2.5-flash", "gemini-2.5-flash-lite"])];

const paused = (k) => (pausedUntil.get(k) || 0) > Date.now();

function geminiReady() {
  return !!process.env.GEMINI_API_KEY && process.env.FREE_AI !== "local" && !paused("*") && models().some((m) => !paused(m));
}

/** OpenAI `messages` → Gemini `systemInstruction` + `contents` */
function convert(messages) {
  const system = messages.filter((m) => m.role === "system").map((m) => m.content).join("\n\n");
  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({ role: m.role === "assistant" ? "model" : "user", parts: [{ text: String(m.content || "") }] }));
  return { system, contents };
}

async function post(model, body) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(`${BASE}/${model}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const err = new Error(data?.error?.message || `Gemini HTTP ${res.status}`);
      err.status = res.status;
      throw err;
    }
    return data;
  } catch (err) {
    if (err.name === "AbortError") throw Object.assign(new Error("Gemini javob bermadi (timeout)"), { status: 0 });
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * @param {{ messages: object[], maxOutputTokens?: number, tier?: string }} p
 * @returns {Promise<{ text: string, model: string }>}
 */
async function geminiChat({ messages, maxOutputTokens = 1200, tier = "free" }) {
  const { system, contents } = convert(messages);
  const body = {
    systemInstruction: { parts: [{ text: system }] },
    contents,
    // Past temperatura — huquqiy javobda "ijodkorlik" kerak emas.
    // Kichik "o'ylash" byudjeti: mantiq yaxshilanadi, javob sekinlashmaydi.
    generationConfig: { temperature: 0.3, maxOutputTokens: maxOutputTokens + THINKING, thinkingConfig: { thinkingBudget: THINKING } },
  };
  let lastErr = new Error("Gemini mavjud emas");
  for (const model of models()) {
    if (paused(model)) continue;
    try {
      const data = await post(model, body);
      const text = (data.candidates?.[0]?.content?.parts || []).map((p) => p.text || "").join("").trim();
      if (!text) throw Object.assign(new Error(`Gemini bo'sh javob (${data.candidates?.[0]?.finishReason || "?"})`), { status: 0 });
      const u = data.usageMetadata || {};
      recordUsage({
        provider: "gemini",
        model,
        tier,
        inputTokens: u.promptTokenCount || 0,
        outputTokens: u.candidatesTokenCount || 0,
        reasoningTokens: u.thoughtsTokenCount || 0,
        costUsd: 0, // bepul kvota
      }).catch(() => {});
      return { text, model };
    } catch (err) {
      lastErr = err;
      if (err.status === 429) pausedUntil.set(model, Date.now() + COOLDOWN_429);
      else if (err.status === 400 || err.status === 401 || err.status === 403) {
        if (/api key|permission|API_KEY/i.test(err.message)) {
          pausedUntil.set("*", Date.now() + COOLDOWN_KEY);
          console.warn("[Gemini] kalit yaroqsiz — GEMINI_API_KEY ni yangilang:", err.message.slice(0, 120));
          break;
        }
      }
    }
  }
  throw lastErr;
}

module.exports = { geminiChat, geminiReady };
