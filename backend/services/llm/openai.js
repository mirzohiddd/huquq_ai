"use strict";
/**
 * OpenAI Chat Completions — yupqa mijoz (SDK'siz, global fetch).
 *
 * - GPT-5 oilasi "reasoning" modellari: `temperature` qabul qilmaydi,
 *   chiqish chegarasi `max_completion_tokens` (eski `max_tokens` EMAS) va
 *   u REASONING tokenlarini ham o'z ichiga oladi. Shuning uchun javob
 *   uchun ajratilgan hajmga reasoning zaxirasi qo'shiladi — aks holda
 *   model butun chegarani o'ylashga sarflab, BO'SH javob qaytarardi.
 * - Model `reasoning_effort` ni qabul qilmasa (400) — usiz bir marta
 *   qayta yuboriladi (admin eski model tanlasa ham chat yiqilmasin).
 * - Har muvaffaqiyatli chaqiruvning HAQIQIY `usage` qiymati sarf
 *   jurnaliga yoziladi (aiBilling/usage.js) — taxminiy hisob emas.
 */
const { recordUsage } = require("../aiBilling/usage");

const URL = "https://api.openai.com/v1/chat/completions";
const TIMEOUT_MS = 60 * 1000;
const REASONING_RESERVE = { minimal: 0, low: 1500, medium: 4000, high: 8000 };

class LlmError extends Error {
  constructor(message, status, body) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

async function post(body) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const res = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify(body),
      signal: ctrl.signal,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new LlmError(data?.error?.message || `OpenAI HTTP ${res.status}`, res.status, data);
    return data;
  } catch (err) {
    if (err instanceof LlmError) throw err;
    throw new LlmError(err.name === "AbortError" ? "OpenAI javob bermadi (timeout)" : err.message, 0);
  } finally {
    clearTimeout(timer);
  }
}

/**
 * @param {{ model: string, messages: object[], maxOutputTokens?: number,
 *           reasoningEffort?: string, tier?: string, kind?: string }} p
 * @returns {Promise<{ text: string, usage: object, model: string, costUsd: number }>}
 */
async function chat({ model, messages, maxOutputTokens = 1200, reasoningEffort = "low", tier, kind }) {
  const body = {
    model,
    messages,
    max_completion_tokens: maxOutputTokens + (REASONING_RESERVE[reasoningEffort] ?? 1500),
  };
  if (reasoningEffort) body.reasoning_effort = reasoningEffort;

  let data;
  try {
    data = await post(body);
  } catch (err) {
    // Model reasoning parametrini bilmaydi — usiz qayta urinish
    if (err.status === 400 && /reasoning/i.test(err.message) && body.reasoning_effort) {
      delete body.reasoning_effort;
      body.max_completion_tokens = maxOutputTokens;
      data = await post(body);
    } else {
      throw err;
    }
  }

  const u = data.usage || {};
  const usage = {
    inputTokens: u.prompt_tokens || 0,
    cachedTokens: u.prompt_tokens_details?.cached_tokens || 0,
    outputTokens: u.completion_tokens || 0,
    reasoningTokens: u.completion_tokens_details?.reasoning_tokens || 0,
  };
  const used = data.model || model;
  const costUsd = await recordUsage({ provider: "openai", model: used, tier, kind, ...usage });
  const choice = data.choices?.[0];
  const text = String(choice?.message?.content || "").trim();
  if (!text) {
    throw new LlmError(
      choice?.finish_reason === "length" ? "Javob chegarasi reasoning'ga yetmadi" : "Bo'sh javob",
      200,
    );
  }
  return { text, usage, model: used, costUsd };
}

module.exports = { chat, LlmError };
