"use strict";
/**
 * Matnni vektorga aylantiradi (RAG uchun) — Mistral AI "mistral-embed".
 *
 * ESLATMA: dastlab OpenAI text-embedding-3-small rejalashtirilgan edi, lekin
 * OPENAI_API_KEY hisobida kredit/kvota yo'q ekan (429 quota xatosi). Mistral
 * ko'p tilli (o'zbek tilini ham qamrab oladi) va hisobda kvota bor — shuning
 * uchun asosiy provider sifatida shu tanlandi. 1024 o'lchamli vektor
 * qaytaradi (config/plans emas, bu yerda: LegalChunk.embedding va Atlas
 * vektor indeksi ham shu o'lchamga sozlangan — provider almashtirilsa,
 * indeksni ham qayta yaratish kerak bo'ladi).
 */
const MISTRAL_EMBED_URL = "https://api.mistral.ai/v1/embeddings";
const EMBEDDING_MODEL = "mistral-embed";
const EMBEDDING_DIMENSIONS = 1024;

const apiKey = process.env.MISTRAL_API_KEY || null;

async function callMistralEmbed(inputs) {
  const resp = await fetch(MISTRAL_EMBED_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ model: EMBEDDING_MODEL, input: inputs }),
  });
  if (!resp.ok) {
    const errText = await resp.text().catch(() => resp.statusText);
    throw new Error(`Mistral embed xatosi (${resp.status}): ${errText.slice(0, 300)}`);
  }
  const data = await resp.json();
  return data.data.map((d) => d.embedding);
}

async function embedText(text) {
  if (!apiKey) throw new Error("MISTRAL_API_KEY sozlanmagan — embedding ishlamaydi");
  const [vec] = await callMistralEmbed([String(text || "").slice(0, 8000)]);
  return vec;
}

async function embedBatch(texts) {
  if (!apiKey) throw new Error("MISTRAL_API_KEY sozlanmagan — embedding ishlamaydi");
  const inputs = texts.map((t) => String(t || "").slice(0, 8000));
  return callMistralEmbed(inputs);
}

module.exports = {
  embedText,
  embedBatch,
  EMBEDDING_MODEL,
  EMBEDDING_DIMENSIONS,
  isConfigured: !!apiKey,
};
