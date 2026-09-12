"use strict";
/**
 * Speech-to-Text — Groq Whisper API
 * Bepul, tez, o'zbek/rus/ingliz tillarini qo'llab-quvvatlaydi
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const SUPPORTED_FORMATS = [".mp3", ".wav", ".webm", ".ogg", ".m4a", ".flac"];
const MAX_SIZE = 25 * 1024 * 1024; // 25MB

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

async function speechToText(filePath, language = null) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) throw new Error("GROQ_API_KEY sozlanmagan");

  if (!fs.existsSync(filePath)) throw new Error("Audio fayl topilmadi");

  const stats = fs.statSync(filePath);
  if (stats.size > MAX_SIZE) throw new Error("Fayl 25MB dan oshmasligi kerak");
  if (stats.size === 0) throw new Error("Audio fayl bo'sh");

  const ext = path.extname(filePath).toLowerCase() || ".webm";

  // FormData ni qo'lda quramiz (form-data paketi kerak emas)
  const boundary = `----FormBoundary${Date.now()}`;
  const fileBuffer = fs.readFileSync(filePath);
  const mimeType = getMimeType(ext);
  const filename = path.basename(filePath);

  let body = "";
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="model"\r\n\r\n`;
  body += `whisper-large-v3-turbo\r\n`;
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="response_format"\r\n\r\n`;
  body += `json\r\n`;
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="temperature"\r\n\r\n`;
  body += `0\r\n`;
  if (language && language !== "auto") {
    body += `--${boundary}\r\n`;
    body += `Content-Disposition: form-data; name="language"\r\n\r\n`;
    body += `${language}\r\n`;
  }
  body += `--${boundary}\r\n`;
  body += `Content-Disposition: form-data; name="file"; filename="${filename}"\r\n`;
  body += `Content-Type: ${mimeType}\r\n\r\n`;

  const bodyStart = Buffer.from(body);
  const bodyEnd = Buffer.from(`\r\n--${boundary}--\r\n`);
  const totalBody = Buffer.concat([bodyStart, fileBuffer, bodyEnd]);

  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.groq.com",
      path: "/openai/v1/audio/transcriptions",
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": `multipart/form-data; boundary=${boundary}`,
        "Content-Length": totalBody.length,
      },
    };

    const req = https.request(options, (res) => {
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
            language: json.language || language || "uz",
          });
        } catch (e) {
          reject(new Error("STT parse xatosi: " + data.slice(0, 200)));
        }
      });
    });
    req.on("error", reject);
    req.write(totalBody);
    req.end();
  });
}

module.exports = { speechToText, SUPPORTED_FORMATS };
