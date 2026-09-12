"use strict";
/**
 * TTS fallback zanjiri (5 ta provider):
 * 1. Google Cloud TTS  — GOOGLE_TTS_KEY (to'lovli, eng yaxshi)
 * 2. Gemini 2.5 Flash  — GEMINI_API_KEY (bepul)
 * 3. Gemini 2.0 Flash  — GEMINI_API_KEY (bepul, zaxira)
 * 4. Microsoft Edge TTS — API key shart emas (bepul, cheksiz)
 * 5. Groq PlayAI       — GROQ_API_KEY (bepul)
 */

const https = require("https");

const GOOGLE_VOICES = {
  uz: { languageCode: "uz-UZ", name: "uz-UZ-Standard-A", ssmlGender: "MALE" },
  ru: { languageCode: "ru-RU", name: "ru-RU-Wavenet-D", ssmlGender: "MALE" },
  en: { languageCode: "en-US", name: "en-US-Wavenet-D", ssmlGender: "MALE" },
};

// Edge TTS ovozlari — o'zbek yo'q, rus va ingliz bor
const EDGE_VOICES = {
  uz: "ru-RU-DmitryNeural", // eng yaqin
  ru: "ru-RU-DmitryNeural",
  en: "en-US-GuyNeural",
};

function cleanText(text) {
  return text
    .replace(/[📌⚖️✅📝🚨📍⚠️👤💬🗂📅👁🎙️]/gu, "")
    .replace(/\*\*/g, "")
    .replace(/#{1,6}\s/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/\n{2,}/g, ". ")
    .replace(/\n/g, " ")
    .trim()
    .slice(0, 4000);
}

function pcmToWav(pcm) {
  const sampleRate = 24000,
    numChannels = 1,
    bitsPerSample = 16;
  const header = Buffer.alloc(44);
  header.write("RIFF", 0);
  header.writeUInt32LE(36 + pcm.length, 4);
  header.write("WAVE", 8);
  header.write("fmt ", 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(numChannels, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE((sampleRate * numChannels * bitsPerSample) / 8, 28);
  header.writeUInt16LE((numChannels * bitsPerSample) / 8, 32);
  header.writeUInt16LE(bitsPerSample, 34);
  header.write("data", 36);
  header.writeUInt32LE(pcm.length, 40);
  return Buffer.concat([header, pcm]);
}

function httpsPost(hostname, path, headers, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      { hostname, path, method: "POST", headers },
      (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () =>
          resolve({ status: res.statusCode, body: Buffer.concat(chunks) }),
        );
      },
    );
    req.on("error", reject);
    req.write(body);
    req.end();
  });
}

async function getGoogleToken(creds) {
  const crypto = require("crypto");
  const now = Math.floor(Date.now() / 1000);
  const hdr = Buffer.from(
    JSON.stringify({ alg: "RS256", typ: "JWT" }),
  ).toString("base64url");
  const pay = Buffer.from(
    JSON.stringify({
      iss: creds.client_email,
      scope: "https://www.googleapis.com/auth/cloud-platform",
      aud: "https://oauth2.googleapis.com/token",
      exp: now + 3600,
      iat: now,
    }),
  ).toString("base64url");
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(`${hdr}.${pay}`);
  const jwt = `${hdr}.${pay}.${sign.sign(creds.private_key, "base64url")}`;
  const body = Buffer.from(
    `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  );
  const res = await httpsPost(
    "oauth2.googleapis.com",
    "/token",
    {
      "Content-Type": "application/x-www-form-urlencoded",
      "Content-Length": body.length,
    },
    body,
  );
  const json = JSON.parse(res.body.toString());
  if (!json.access_token) throw new Error("Google token xato");
  return json.access_token;
}

// 1. Google Cloud TTS
async function tryGoogleCloud(clean, lang) {
  const keyJson = process.env.GOOGLE_TTS_KEY;
  if (!keyJson) throw new Error("GOOGLE_TTS_KEY yo'q");
  const creds = JSON.parse(keyJson);
  const token = await getGoogleToken(creds);
  const voice = GOOGLE_VOICES[lang] || GOOGLE_VOICES.uz;
  const body = Buffer.from(
    JSON.stringify({
      input: { text: clean },
      voice,
      audioConfig: { audioEncoding: "MP3", speakingRate: 1.0 },
    }),
  );
  const res = await httpsPost(
    "texttospeech.googleapis.com",
    "/v1/text:synthesize",
    {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Content-Length": body.length,
    },
    body,
  );
  if (res.status !== 200) throw new Error(`Google Cloud TTS ${res.status}`);
  const json = JSON.parse(res.body.toString());
  if (!json.audioContent)
    throw new Error("Google Cloud TTS: audioContent yo'q");
  return {
    buffer: Buffer.from(json.audioContent, "base64"),
    contentType: "audio/mpeg",
  };
}

// 2 & 3. Gemini TTS
async function tryGemini(clean, model) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) throw new Error("GEMINI_API_KEY yo'q");
  const body = Buffer.from(
    JSON.stringify({
      contents: [{ parts: [{ text: clean }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
          voiceConfig: { prebuiltVoiceConfig: { voiceName: "Charon" } },
        },
      },
    }),
  );
  const res = await httpsPost(
    "generativelanguage.googleapis.com",
    `/v1beta/models/${model}:generateContent?key=${apiKey}`,
    { "Content-Type": "application/json", "Content-Length": body.length },
    body,
  );
  if (res.status !== 200)
    throw new Error(`Gemini ${model} ${res.status}: ${res.body.slice(0, 100)}`);
  const json = JSON.parse(res.body.toString());
  const b64 = json.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
  if (!b64) throw new Error("Gemini: audio yo'q");
  return {
    buffer: pcmToWav(Buffer.from(b64, "base64")),
    contentType: "audio/wav",
  };
}

// 4. Microsoft Edge TTS — API key shart emas, bepul, cheksiz
async function tryEdgeTTS(clean, lang) {
  const voice = EDGE_VOICES[lang] || EDGE_VOICES.ru;
  // Edge TTS WebSocket orqali ishlaydi — msedge-tts paketi kerak
  let MsEdgeTTS;
  try {
    MsEdgeTTS = require("msedge-tts");
  } catch {
    throw new Error("msedge-tts paketi o'rnatilmagan");
  }
  const { MsEdgeTTS: TTS, OUTPUT_FORMAT } = MsEdgeTTS;
  const tts = new TTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  return new Promise((resolve, reject) => {
    const chunks = [];
    const readable = tts.toStream(clean);
    readable.on("data", (c) => chunks.push(c));
    readable.on("end", () => {
      const buffer = Buffer.concat(chunks);
      if (buffer.length < 100)
        return reject(new Error("Edge TTS: bo'sh audio"));
      resolve({ buffer, contentType: "audio/mpeg" });
    });
    readable.on("error", reject);
    setTimeout(() => reject(new Error("Edge TTS timeout")), 15000);
  });
}

// 5. Groq PlayAI TTS
async function tryGroq(clean) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY yo'q");
  const body = Buffer.from(
    JSON.stringify({
      model: "playai-tts",
      input: clean,
      voice: "Fritz-PlayAI",
      response_format: "mp3",
    }),
  );
  const res = await httpsPost(
    "api.groq.com",
    "/openai/v1/audio/speech",
    {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Content-Length": body.length,
    },
    body,
  );
  if (res.status !== 200)
    throw new Error(`Groq TTS ${res.status}: ${res.body.slice(0, 100)}`);
  return { buffer: res.body, contentType: "audio/mpeg" };
}

// 6. Hugging Face MMS-TTS — O'zbek tili uchun maxsus model, bepul
async function tryHuggingFace(clean, lang) {
  // facebook/mms-tts-uzb — haqiqiy o'zbek TTS
  // facebook/mms-tts-rus — rus TTS
  const modelMap = {
    uz: "facebook/mms-tts-uzb",
    ru: "facebook/mms-tts-rus",
    en: "facebook/mms-tts-eng",
  };
  const model = modelMap[lang] || modelMap.uz;
  const apiKey = process.env.HF_TOKEN || ""; // Token bo'lmasa ham ishlaydi (rate limit pastroq)

  const body = Buffer.from(JSON.stringify({ inputs: clean.slice(0, 1000) }));
  const headers = {
    "Content-Type": "application/json",
    "Content-Length": body.length,
  };
  if (apiKey) headers["Authorization"] = `Bearer ${apiKey}`;

  const res = await httpsPost(
    "api-inference.huggingface.co",
    `/models/${model}`,
    headers,
    body,
  );
  if (res.status !== 200)
    throw new Error(
      `HuggingFace ${model} ${res.status}: ${res.body.slice(0, 100)}`,
    );
  if (res.body.length < 100) throw new Error("HuggingFace: bo'sh audio");
  // WAV format qaytaradi
  return { buffer: res.body, contentType: "audio/wav" };
}

// 7. StreamElements TTS — API key shart emas, bepul, cheksiz
async function tryStreamElements(clean, lang) {
  const voiceMap = { uz: "Maxim", ru: "Maxim", en: "Brian" };
  const voice = voiceMap[lang] || "Maxim";
  const encoded = encodeURIComponent(clean.slice(0, 500));

  return new Promise((resolve, reject) => {
    const req = require("https").request(
      {
        hostname: "api.streamelements.com",
        path: `/kappa/v2/speech?voice=${voice}&text=${encoded}`,
        method: "GET",
      },
      (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          if (res.statusCode !== 200)
            return reject(new Error(`StreamElements ${res.statusCode}`));
          const buffer = Buffer.concat(chunks);
          if (buffer.length < 100)
            return reject(new Error("StreamElements: bo'sh audio"));
          resolve({ buffer, contentType: "audio/mpeg" });
        });
      },
    );
    req.on("error", reject);
    setTimeout(() => reject(new Error("StreamElements timeout")), 10000);
    req.end();
  });
}

async function textToSpeech(text, lang = "uz") {
  const clean = cleanText(text);
  if (!clean) return null;

  const providers = [
    { name: "Google Cloud TTS", fn: () => tryGoogleCloud(clean, lang) },
    {
      name: "Gemini 2.5 Flash",
      fn: () => tryGemini(clean, "gemini-2.5-flash-preview-tts"),
    },
    {
      name: "Gemini 2.0 Flash",
      fn: () => tryGemini(clean, "gemini-2.0-flash"),
    },
    { name: "Microsoft Edge TTS", fn: () => tryEdgeTTS(clean, lang) },
    { name: "Groq PlayAI", fn: () => tryGroq(clean) },
    { name: "HuggingFace MMS", fn: () => tryHuggingFace(clean, lang) },
    { name: "StreamElements", fn: () => tryStreamElements(clean, lang) },
  ];

  for (const p of providers) {
    try {
      console.log(`TTS urinish: ${p.name}`);
      const result = await p.fn();
      console.log(`TTS OK: ${p.name}, ${result.buffer.length} bytes`);
      return result;
    } catch (e) {
      console.warn(`TTS ${p.name} xato: ${e.message}`);
    }
  }

  console.error("TTS: barcha providerlar ishlamadi");
  return null;
}

module.exports = { textToSpeech, cleanText };