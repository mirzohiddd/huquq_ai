"use strict";
/**
 * Groq (OpenAI-mos API) — Gemini'ning ZAXIRASI (2026-11-14).
 *
 * Sabab: bepul Gemini kvotasi tugasa yoki model vaqtincha band bo'lsa,
 * chat jim lokal shablonga ("mos modda topilmadi") tushardi. Endi shunday
 * holatda javob Groq'dagi ochiq modeldan olinadi — RAG manbalari, modda
 * tekshiruvi va prompt Gemini yo'li bilan BIR XIL (llm/freeChat.js).
 *
 * Modellar "reasoning" turida: chiqish chegarasi o'ylash tokenlarini ham
 * o'z ichiga oladi, shuning uchun zaxira qo'shiladi.
 */
const { recordUsage } = require("../aiBilling/usage");

const URL = "https://api.groq.com/openai/v1/chat/completions";
const TIMEOUT_MS = 30 * 1000;
const COOLDOWN_MS = 5 * 60 * 1000;
const REASONING_RESERVE = 1200;
const pausedUntil = new Map();

const models = () => [...new Set([process.env.GROQ_CHAT_MODEL || "openai/gpt-oss-120b", "openai/gpt-oss-20b"])];
const paused = (k) => (pausedUntil.get(k) || 0) > Date.now();
const MAX_OUT = 1500;
const MAX_PROMPT_CHARS = Number(process.env.GROQ_MAX_PROMPT_CHARS) || 13000;

/** Eng uzun xabar (odatda manbalar bloki) chegaraga sig'adigan qilib qisqartiriladi. */
function fit(messages) {
  const total = messages.reduce((n, m) => n + String(m.content || "").length, 0);
  if (total <= MAX_PROMPT_CHARS) return messages;
  const big = messages.reduce((a, m, i) => (typeof m.content === "string" && m.content.length > messages[a].content.length ? i : a), 0);
  const keep = Math.max(2000, messages[big].content.length - (total - MAX_PROMPT_CHARS));
  return messages.map((m, i) => (i === big ? { ...m, content: m.content.slice(0, keep) } : m));
}

function groqReady() {
  return !!process.env.GROQ_API_KEY && process.env.FREE_AI !== "local" && !paused("*") && models().some((m) => !paused(m));
}

async function post(body, timeoutMs) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(data?.error?.message || `Groq HTTP ${res.status}`), { status: res.status });
    return data;
  } catch (err) {
    if (err.name === "AbortError") throw Object.assign(new Error("Groq javob bermadi (timeout)"), { status: 0 });
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * @param {{ messages: object[], maxOutputTokens?: number, tier?: string,
 *           json?: boolean, temperature?: number, timeoutMs?: number, kind?: string }} p
 * @returns {Promise<{ text: string, model: string }>}
 */
async function groqChat({ messages, maxOutputTokens = 1200, tier = "free", json = false, temperature = 0.3, timeoutMs = TIMEOUT_MS, kind }) {
  let lastErr = new Error("Groq mavjud emas");
  for (const model of models()) {
    if (paused(model)) continue;
    // Bepul Groq'da so'rov hajmi (kirish + chiqish) daqiqalik token chegarasidan oshmasligi kerak
    const body = { model, messages: fit(messages), temperature, max_completion_tokens: Math.min(maxOutputTokens, MAX_OUT) + REASONING_RESERVE, reasoning_effort: "low" };
    if (json) body.response_format = { type: "json_object" };
    try {
      const data = await post(body, timeoutMs);
      const text = String(data.choices?.[0]?.message?.content || "").trim();
      if (!text) throw Object.assign(new Error("Groq bo'sh javob"), { status: 0 });
      const u = data.usage || {};
      recordUsage({ provider: "groq", model, tier, kind, inputTokens: u.prompt_tokens || 0, outputTokens: u.completion_tokens || 0, costUsd: 0 }).catch(() => {});
      return { text, model, truncated: data.choices?.[0]?.finish_reason === "length" };
    } catch (err) {
      lastErr = err;
      console.warn(`[Groq] ${model}: ${String(err.message).slice(0, 120)}`);
      if (err.status === 401 || err.status === 403) {
        pausedUntil.set("*", Date.now() + COOLDOWN_MS * 6);
        break;
      }
      if (err.status === 429 || err.status === 404) pausedUntil.set(model, Date.now() + COOLDOWN_MS);
    }
  }
  throw lastErr;
}

module.exports = { groqChat, groqReady };
