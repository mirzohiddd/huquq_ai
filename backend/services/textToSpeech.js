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
const { prepareSpeech } = require("./voiceText");

const GOOGLE_VOICES = {
  uz: { languageCode: "uz-UZ", name: "uz-UZ-Standard-A", ssmlGender: "MALE" },
  ru: { languageCode: "ru-RU", name: "ru-RU-Wavenet-D", ssmlGender: "MALE" },
  en: { languageCode: "en-US", name: "en-US-Wavenet-D", ssmlGender: "MALE" },
};

/* Edge TTS ovozlari.
   ⚠️ TUZATILDI (2026-08-15): bu yerda avval `uz: "ru-RU-DmitryNeural"`
   turgan va izohda "o'zbek yo'q" deb yozilgan edi. Bu ENDI TO'G'RI EMAS —
   Microsoft ovozlar ro'yxati so'rab tekshirildi (322 ta ovoz) va
   HAQIQIY o'zbek ovozlari bor: `uz-UZ-SardorNeural` (erkak) va
   `uz-UZ-MadinaNeural` (ayol). Eski moslashtirish o'zbekcha matnni
   RUS ovoziga o'qitardi — talaffuz buzilardi.
   ⚠️ `ur-PK-UzmaNeural` — bu URDU ovozi, nomida "Uz" borligi uchun
   qidiruvda chiqadi; ATAYLAB ishlatilmaydi. */
/* ⚠️ (2026-10-19) O'zbekcha uchun MadinaNeural — ona tilidagi tabiiy
   ovoz. `.env` dan almashtirish: EDGE_VOICE_UZ / EDGE_VOICE_RU. */
const EDGE_VOICES = {
  uz: process.env.EDGE_VOICE_UZ || "uz-UZ-MadinaNeural",
  ru: process.env.EDGE_VOICE_RU || "ru-RU-SvetlanaNeural",
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
/* Microsoft Neural — ZAXIRA ovoz (2026-10-15). Bir xil ohang "robot"
   taassurotini berardi: endi his-tuyg'uga qarab tezlik/ohang biroz
   o'zgaradi (xursand — jonliroq, xafa — sekinroq va pastroq). */
/* ⚠️ (2026-10-19) Ohang (pitch) endi O'ZGARTIRILMAYDI: neyron ovozda
   balandlikni sun'iy surish metall, "robot" tembr beradi. Faqat tezlik
   biroz o'zgaradi — ovoz tabiiy qoladi. */
const EDGE_PROSODY = {
  happy: { rate: "+3%" },
  sad: { rate: "-6%" },
  angry: { rate: "+0%" },
  confused: { rate: "-3%" },
  neutral: { rate: "+0%" },
};

/* Matnni ~180 belgilik jumla guruhlariga bo'lib, PARALLEL sintez qiladi:
   har bir Edge so'rovi ~1-2 s, ketma-ket emas bir vaqtda — javob tezroq.
   MP3 bo'laklari bir xil formatda, shuning uchun ular shunchaki ulanadi. */
function speechChunks(text, max = 180) {
  const parts = String(text).match(/[^.!?\n]+[.!?]*\s*/g) || [text];
  const out = [];
  let cur = "";
  for (const p of parts) {
    if (cur && (cur + p).length > max) {
      out.push(cur.trim());
      cur = "";
    }
    cur += p;
  }
  if (cur.trim()) out.push(cur.trim());
  return out.slice(0, 8);
}

/* ⚠️ Microsoft bir vaqtdagi ko'p ulanishga 429 qaytaradi (2026-10-19 sinovda
   ko'rildi) — shunda zanjir ElevenLabs'ning ingliz ovoziga tushib qolardi.
   Butun server bo'yicha bir vaqtda ko'pi bilan EDGE_MAX ta ulanish, xatodan
   keyin esa kutib qayta urinish. */
const EDGE_MAX = 3;
let edgeActive = 0;
const edgeQueue = [];
async function edgeSlot(fn) {
  if (edgeActive >= EDGE_MAX) await new Promise((r) => edgeQueue.push(r));
  edgeActive += 1;
  try {
    return await fn();
  } finally {
    edgeActive -= 1;
    edgeQueue.shift()?.();
  }
}
const wait = (ms) => new Promise((r) => setTimeout(r, ms));

async function edgeOnce(text, lang, emotion) {
  let last;
  for (const delay of [0, 400, 1200]) {
    if (delay) await wait(delay);
    try {
      return await edgeSlot(() => tryEdgeTTS(text, lang, emotion));
    } catch (e) {
      last = e;
    }
  }
  throw last;
}

async function edgeSpeak(clean, lang, emotion) {
  const once = (t) => edgeOnce(t, lang, emotion);
  const chunks = speechChunks(clean);
  const results = await Promise.all(chunks.map(once));
  return { buffer: Buffer.concat(results.map((r) => r.buffer)), contentType: "audio/mpeg" };
}

async function tryEdgeTTS(clean, lang, emotion = "neutral") {
  const voice = EDGE_VOICES[lang] || EDGE_VOICES.ru;
  // Edge TTS WebSocket orqali ishlaydi — msedge-tts paketi kerak
  let MsEdgeTTS;
  try {
    MsEdgeTTS = require("msedge-tts");
  } catch {
    throw new Error("msedge-tts paketi o'rnatilmagan");
  }
  const { MsEdgeTTS: TTS, OUTPUT_FORMAT } = MsEdgeTTS;
  /* ⚠️ msedge-tts ≥ 2.1.0 SHART (2026-10-14): Microsoft ulanishga
     yangi sarlavhalar talab qila boshladi va 2.0.5 har so'rovda 403
     olardi — natijada BARCHA provayderlar yiqilib, "Eshitish" 503
     qaytarardi. */
  const tts = new TTS();
  await tts.setMetadata(voice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);
  return new Promise((resolve, reject) => {
    const chunks = [];
    /* ⚠️ TUZATILDI (2026-08-15): avval `const readable = tts.toStream(...)`
       deb yozilgan edi va darhol `readable.on(...)` chaqirilardi — bu
       "readable.on is not a function" xatosini berardi, ya'ni Edge TTS
       HECH QACHON ishlamasdi (sinovda tasdiqlangan). msedge-tts 2.x da
       `toStream()` oqimning O'ZINI emas, `{audioStream, metadataStream}`
       obyektini qaytaradi. */
    const { audioStream } = tts.toStream(clean, EDGE_PROSODY[emotion] || EDGE_PROSODY.neutral);
    audioStream.on("data", (c) => chunks.push(c));
    audioStream.on("end", () => {
      const buffer = Buffer.concat(chunks);
      if (buffer.length < 100)
        return reject(new Error("Edge TTS: bo'sh audio"));
      resolve({ buffer, contentType: "audio/mpeg" });
    });
    audioStream.on("error", reject);
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

/* ElevenLabs — eng yuqori sifatli ovoz.
   ⚠️ `ELEVENLABS_API_KEY` `.env` da ALLAQACHON bor edi, lekin bu
   zanjirda YO'Q edi — u faqat ovoz klonlash endpointida ishlatilardi.
   Natijada `routes/voice.js` xato xabarida "ELEVENLABS_API_KEY
   tekshiring" deb yozilar, lekin TTS uni umuman chaqirmasdi.

   ⚠️ IKKI CHEKLOV (shu sabab zanjirning boshida EMAS):
   1) Bepul daraja oyiga ~10 000 belgi — bir necha o'nlab javobga
      yetadi, keyin oy oxirigacha tugaydi.
   2) O'zbek tili ElevenLabs'ning rasmiy ro'yxatida YO'Q (rus tili bor).
      Ovoz chiqadi, lekin talaffuz sifatini tekshirish kerak.
   Tartibni `TTS_PROVIDER_ORDER` orqali kodga tegmasdan o'zgartirasiz. */
/* ⚠️ (2026-10-15) ElevenLabs endi ASOSIY ovoz: odamga o'xshash intonatsiya.
   Model `eleven_flash_v2_5` — Whisper bilan qaytarib o'lchandi, o'zbekchani
   eng to'g'ri talaffuz qildi va eng tez (≈1,5 s); `eleven_v3` turkcha
   talaffuz berdi, Edge Neural ovozlari esa eng ko'p buzildi.
   His-tuyg'u `voice_settings` orqali: past stability = jonliroq ohang.
   Kvota/kalit xatosida 30 daqiqa chetlab o'tiladi — har so'rovda behuda
   kutish bo'lmasin (zaxira: Microsoft Neural). */
const ELEVEN_MOOD = {
  happy: { stability: 0.4, style: 0.4 },
  sad: { stability: 0.55, style: 0.3 },
  angry: { stability: 0.4, style: 0.4 },
  confused: { stability: 0.45, style: 0.25 },
  neutral: { stability: 0.45, style: 0.2 },
  steady: { stability: 0.7, style: 0 },
};
let elevenPausedUntil = 0;

/* ⚠️ Past stability'da model ba'zan "gallyutsinatsiya" qiladi: 140 belgilik
   matnga 77 soniyalik audio qaytgani kuzatildi (2026-10-15). 64 kbit/s da
   1 s ≈ 8 KB; o'zbek nutqi ≈ 14 belgi/s. Audio kutilganidan ancha uzun
   bo'lsa — barqarorroq sozlama bilan bir marta qayta so'raladi. */
const tooLong = (bytes, chars) => bytes > (chars / 8 + 5) * 8000;

async function tryElevenLabs(clean, lang, emotion = "neutral") {
  const first = await elevenOnce(clean, emotion);
  if (!tooLong(first.buffer.length, clean.length)) return first;
  console.warn("ElevenLabs: audio haddan uzun — barqaror sozlama bilan qayta");
  const second = await elevenOnce(clean, "steady");
  if (tooLong(second.buffer.length, clean.length)) throw new Error("ElevenLabs: buzilgan audio");
  return second;
}

async function elevenOnce(clean, emotion) {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error("ELEVENLABS_API_KEY yo'q");
  if (Date.now() < elevenPausedUntil) throw new Error("ElevenLabs vaqtincha o'chiq (kvota)");
  const voiceId = process.env.ELEVENLABS_VOICE_ID || "CwhRBWXzGAHq8TQ4Fs17";
  const mood = ELEVEN_MOOD[emotion] || ELEVEN_MOOD.neutral;
  const body = Buffer.from(
    JSON.stringify({
      text: clean,
      model_id: process.env.ELEVENLABS_MODEL || "eleven_flash_v2_5",
      voice_settings: { ...mood, similarity_boost: 0.8, use_speaker_boost: true },
    }),
  );
  const res = await Promise.race([
    httpsPost(
      "api.elevenlabs.io",
      `/v1/text-to-speech/${voiceId}?output_format=mp3_44100_64`,
      { "xi-api-key": apiKey, "Content-Type": "application/json", "Content-Length": body.length },
      body,
    ),
    new Promise((_, rej) => setTimeout(() => rej(new Error("ElevenLabs timeout")), 9000)),
  ]);
  if (res.status !== 200) {
    if ([401, 402, 429].includes(res.status)) elevenPausedUntil = Date.now() + 30 * 60 * 1000;
    throw new Error(`ElevenLabs ${res.status}: ${String(res.body).slice(0, 100)}`);
  }
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

/**
 * Provayderlarni `.env` dagi tartibga soladi.
 * @param {Array} providers  standart tartibdagi ro'yxat
 * @param {string} raw       "ElevenLabs,Gemini 2.5 Flash" ko'rinishida
 *
 * Nomlar katta-kichik harfga sezgir EMAS. Noma'lum nom jim tashlanadi —
 * `.env` dagi bitta imlo xatosi butun ovoz xizmatini o'chirib
 * qo'ymasligi kerak.
 */
function orderProviders(providers, raw) {
  if (!raw || !String(raw).trim()) return providers;
  const wanted = String(raw)
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);

  const picked = [];
  for (const name of wanted) {
    const p = providers.find(
      (x) => x.name.toLowerCase() === name && !picked.includes(x),
    );
    if (p) picked.push(p);
  }
  // Ko'rsatilmaganlar zaxira sifatida oxirida qoladi
  return [...picked, ...providers.filter((p) => !picked.includes(p))];
}

async function textToSpeech(text, lang = "uz", opts = {}) {
  // Eski chaqiruvlar uchinchi argument sifatida voiceId (satr) beradi
  const emotion = (opts && typeof opts === "object" && opts.emotion) || "neutral";
  // Talaffuz uchun tayyorlash (apostroflar, tartib sonlar, pauzalar) — voiceText.js
  const clean = cleanText(prepareSpeech(text, lang));
  if (!clean) return null;

  /* ⚠️ TARTIB O'ZGARTIRILDI (2026-08-15) — har bir provayder HAQIQIY
     so'rov bilan sinab ko'rilgandan keyin. Edge TTS endi BIRINCHI:
     1) yagona provayder bo'lib HAQIQIY o'zbek ovoziga ega
        (`uz-UZ-SardorNeural`) — Gemini o'zbekchani turk/ozarbayjon
        talaffuzi bilan o'qiydi (sinovda: "tuziladi" → "tüzülədi");
     2) BEPUL va CHEKSIZ, API kalit ham kerak emas;
     3) Gemini kunlik kvotasi juda tor (~20 so'rov/kun) va u
        TARJIMA tizimiga kerak — TTS uni yeb qo'ymasligi lozim.
     Rus tilida ikkalasi ham mukammal ishlaydi (STT bilan qaytarib
     tekshirildi), shuning uchun bu tanlov rus tiliga zarar qilmaydi.

     ⚠️ Oxirgi uchtasi HOZIR ISHLAMAYDI (2026-08-15 da tekshirilgan) —
     ataylab ro'yxat OXIRIDA qoldirildi, o'chirilmadi (ular tuzalishi
     yoki kalit qo'shilishi mumkin):
       · Groq PlayAI     — `playai-tts` modeli BUTUNLAY bekor qilingan (400)
       · HuggingFace MMS — `api-inference.huggingface.co` endi mavjud emas (DNS)
       · StreamElements  — endi avtorizatsiya talab qiladi (401) */
  /* ⚠️ (2026-10-19) Microsoft Neural endi BIRINCHI. ElevenLabs'dagi
     standart ovoz (Roger) — INGLIZ ovozi: o'zbekchani ingliz aksentida
     o'qirdi ("javobgar" → "zhavobgar", "keyin" → "keyen"), foydalanuvchi
     "robotdek, hech nimani tushunib bo'lmaydi" dedi. Edge'da esa ona
     tilidagi o'zbek ovozi bor, bepul va cheksiz. ElevenLabs zaxirada. */
  const providers = [
    { name: "Microsoft Edge TTS", fn: () => edgeSpeak(clean, lang, emotion) },
    { name: "ElevenLabs", fn: () => tryElevenLabs(clean, lang, emotion) },
    /* ⚠️ (2026-10-14) Edge ulanishi ba'zan sintez tugamasdan uziladi
       ("no turn.end received") — ikkinchi urinish deyarli doim o'tadi.
       Shu sababli 503 ga tushishdan oldin bir marta qayta uriniladi. */
    { name: "Google Cloud TTS", fn: () => tryGoogleCloud(clean, lang) },
    {
      name: "Gemini 2.5 Flash",
      fn: () => tryGemini(clean, "gemini-2.5-flash-preview-tts"),
    },
    {
      name: "Gemini 2.0 Flash",
      fn: () => tryGemini(clean, "gemini-2.0-flash"),
    },
    { name: "Groq PlayAI", fn: () => tryGroq(clean) },
    { name: "HuggingFace MMS", fn: () => tryHuggingFace(clean, lang) },
    { name: "StreamElements", fn: () => tryStreamElements(clean, lang) },
  ];

  /* Tartibni `.env` dan boshqarish — `emailService.js` dagi
     `EMAIL_PROVIDER_ORDER` bilan bir xil naqsh. Kvotalar kundan kunga
     o'zgargani uchun tartibni kodga tegmasdan almashtira olish kerak.
     Ro'yxatda ko'rsatilmagan provayderlar oxirida qoladi. */
  /* ⚠️ O'zbek tilida Gemini ISHLATILMAYDI (2026-10-14): u o'zbekchani turk/
     ozarbayjon talaffuzida o'qiydi ("tuziladi" → "tüzülədi") — foydalanuvchi
     buni "tili chuchuk, kasal odamdek" deb ta'rifladi. Edge 403 bilan
     yiqilganda zanjir aynan shunga tushardi. Yomon ovozdan ko'ra aniq xato
     yaxshiroq. Kerak bo'lsa: TTS_ALLOW_GEMINI_UZ=true. */
  const usable =
    lang === "uz" && process.env.TTS_ALLOW_GEMINI_UZ !== "true"
      ? providers.filter((p) => !p.name.startsWith("Gemini"))
      : providers;
  const ordered = orderProviders(usable, process.env.TTS_PROVIDER_ORDER);

  for (const p of ordered) {
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