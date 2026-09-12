"use strict";
/**
 * Speech-to-Text — Groq Whisper API
 * Bepul, tez, o'zbek/rus tillarini qo'llab-quvvatlaydi
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const SUPPORTED_FORMATS = [".mp3", ".wav", ".webm", ".ogg", ".m4a", ".flac"];
const MAX_SIZE = 25 * 1024 * 1024; // 25MB

/* ⚠️ MODEL: `whisper-large-v3-turbo` EMAS (2026-08-24).
   Turbo tezroq, lekin o'zbek tilida sezilarli ko'proq xato qiladi.
   O'lchandi — bir xil audio (Edge TTS `uz-UZ-SardorNeural` bilan
   yozilgan) ikkala modelga berildi:
     turbo    → "Ištan asasiz bashat jisthe, sotke khanda muraajat klaman."
     large-v3 → "Içtən asasiz boshat içte, sudke kanda imurajat qilaman."
   Ikkinchisida "sud" so'zi saqlanib qolgan — ya'ni savol huquqiy ekani
   aniqlanadi. Birinchisida u yo'qolgan va savol "huquqiy emas" deb rad
   etilardi ("Men faqat huquqiy savollarga javob beraman").
   Turbo ZAXIRA sifatida qoldirildi: large-v3 kvota yoki nosozlik bilan
   yiqilsa, ovoz butunlay ishlamay qolmasin. */
const PRIMARY_MODEL = process.env.GROQ_STT_MODEL || "whisper-large-v3";
const FALLBACK_MODEL = "whisper-large-v3-turbo";

/* ⚠️ TIL HAR DOIM BERILADI. `language` bo'sh qoldirilsa Whisper tilni
   O'ZI aniqlaydi va o'zbek nutqini butunlay boshqa yozuvda qaytaradi —
   o'lchandi:
     til berilmagan → "Ерім мені ұрды, неме қылышым керек?" (qozoq kirill)
     til berilmagan → "ایشتن اساسیز باشد ایشته..."            (arab yozuvi)
     til = uz       → "Erim meni urdi nima qilishim kerek."
   Birinchi ikkitasi butunlay yaroqsiz. Shuning uchun til ko'rsatilmasa
   yoki noma'lum bo'lsa — "uz" ishlatiladi. */
const SUPPORTED_LANGS = ["uz", "ru"];
const DEFAULT_LANG = "uz";

function normalizeLang(language) {
  const l = String(language || "")
    .trim()
    .toLowerCase()
    .slice(0, 2);
  return SUPPORTED_LANGS.includes(l) ? l : DEFAULT_LANG;
}

function getMimeType(ext) {
  return (
    {
      ".mp3": "audio/mpeg",
      ".wav": "audio/wav",
      ".webm": "audio/webm",
      ".ogg": "audio/ogg",
      ".m4a": "audio/mp4",
      ".flac": "audio/flac",
    }[ext] || "audio/webm"
  );
}

// Bitta Groq so'rovi. FormData qo'lda quriladi (form-data paketi kerak emas).
function requestGroq(apiKey, fileBuffer, filename, mimeType, model, language) {
  const boundary = `----FormBoundary${Date.now()}`;

  let body = "";
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="model"\r\n\r\n`;
  body += `${model}\r\n`;
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="response_format"\r\n\r\n`;
  body += `json\r\n`;
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="temperature"\r\n\r\n`;
  body += `0\r\n`;
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="language"\r\n\r\n`;
  body += `${language}\r\n`;
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="file"; filename="${filename}"\r\n`;
  body += `Content-Type: ${mimeType}\r\n\r\n`;

  const totalBody = Buffer.concat([
    Buffer.from(body),
    fileBuffer,
    Buffer.from(`\r\n--${boundary}--\r\n`),
  ]);

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: "api.groq.com",
        path: "/openai/v1/audio/transcriptions",
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": `multipart/form-data; boundary=${boundary}`,
          "Content-Length": totalBody.length,
        },
      },
      (res) => {
        let data = "";
        res.on("data", (c) => {
          data += c;
        });
        res.on("end", () => {
          try {
            const json = JSON.parse(data);
            if (json.error)
              return reject(new Error(json.error.message || "STT xato"));
            resolve({
              text: json.text?.trim() || "",
              language: json.language || language,
            });
          } catch {
            reject(new Error("STT parse xatosi: " + data.slice(0, 200)));
          }
        });
      },
    );
    req.on("error", reject);
    req.write(totalBody);
    req.end();
  });
}

async function speechToText(filePath, language = null) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY sozlanmagan");

  if (!fs.existsSync(filePath)) throw new Error("Audio fayl topilmadi");

  const stats = fs.statSync(filePath);
  if (stats.size > MAX_SIZE) throw new Error("Fayl 25MB dan oshmasligi kerak");
  if (stats.size === 0) throw new Error("Audio fayl bo'sh");

  const ext = path.extname(filePath).toLowerCase() || ".webm";
  const fileBuffer = fs.readFileSync(filePath);
  const mimeType = getMimeType(ext);
  const filename = path.basename(filePath);
  const lang = normalizeLang(language);

  const models =
    PRIMARY_MODEL === FALLBACK_MODEL
      ? [PRIMARY_MODEL]
      : [PRIMARY_MODEL, FALLBACK_MODEL];

  let lastErr = null;
  for (const model of models) {
    try {
      return await requestGroq(
        apiKey,
        fileBuffer,
        filename,
        mimeType,
        model,
        lang,
      );
    } catch (err) {
      lastErr = err;
      console.warn(`STT ${model} xatosi: ${err.message}`);
    }
  }
  throw lastErr || new Error("STT ishlamadi");
}

module.exports = { speechToText, SUPPORTED_FORMATS };
