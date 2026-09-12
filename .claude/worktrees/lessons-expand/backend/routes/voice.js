"use strict";
/**
 * Voice Routes
 * POST /api/voice/chat       — audio → STT → AI → TTS → audio
 * POST /api/voice/transcribe — audio → matn
 * POST /api/voice/speak      — matn → audio
 */

const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const os = require("os");

const { speechToText } = require("../services/speechToText");
const { textToSpeech } = require("../services/textToSpeech");
const { formatResponse } = require("../services/responseFormatter");
const { getLegalAdvice } = require("../services/legalAI");
const { optionalUserGuard, userGuard } = require("../middleware/auth");
const { voiceLimitGuard } = require("../middleware/usageLimit");

// ── Multer storage ────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(os.tmpdir(), "huquqai-voice");
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || ".webm";
    cb(null, `voice_${Date.now()}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 25 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const ok =
      file.mimetype.startsWith("audio/") ||
      file.mimetype === "video/webm" ||
      file.mimetype === "application/octet-stream";
    cb(null, ok ? true : new Error("Faqat audio fayllar"));
  },
});

function cleanup(fp) {
  try {
    if (fp && fs.existsSync(fp)) fs.unlinkSync(fp);
  } catch {}
}

// ── POST /api/voice/chat ──────────────────────────────────────
router.post(
  "/chat",
  optionalUserGuard,
  voiceLimitGuard,
  upload.single("audio"),
  async (req, res) => {
    if (!req.file)
      return res.status(400).json({ error: "Audio fayl yuborilmadi" });

    const lang = req.body.lang || "uz";
    const voiceId = req.body.voiceId || null;
    let history = [];
    try {
      history = JSON.parse(req.body.history || "[]");
    } catch {}

    try {
      // 1. STT — audio → matn
      const { text: userText, language: detectedLang } = await speechToText(
        req.file.path,
        lang !== "auto" ? lang : null,
      );

      if (!userText?.trim()) {
        return res
          .status(400)
          .json({ error: "Audio tushunilmadi. Aniqroq gapirib ko'ring." });
      }

      // 2. AI — matn → javob
      const { answer, category } = await getLegalAdvice(
        userText,
        history.slice(-6),
        null,
        null,
        detectedLang || lang,
      );

      // 3. TTS — javob → audio
      const voiceText = formatResponse(answer, "voice");
      console.log(
        "TTS boshlandi, lang:",
        detectedLang || lang,
        "EL key:",
        !!process.env.ELEVENLABS_API_KEY,
      );
      const ttsResult = await textToSpeech(
        voiceText,
        detectedLang || lang,
        voiceId,
      );
      console.log(
        "TTS natija:",
        ttsResult ? "buffer " + ttsResult.buffer?.length + " bytes" : "null",
      );

      if (ttsResult?.buffer) {
        res.set({
          "Content-Type": ttsResult.contentType || "audio/mpeg",
          "Content-Length": ttsResult.buffer.length,
          "X-User-Text": encodeURIComponent(userText.slice(0, 300)),
          "X-Text-Answer": encodeURIComponent(answer.slice(0, 500)),
          "X-Language": detectedLang || lang,
          "X-Category": category || "",
          "Access-Control-Expose-Headers":
            "X-User-Text, X-Text-Answer, X-Language, X-Category",
        });
        return res.send(ttsResult.buffer);
      }

      // TTS ishlamadi — sababi bilan qaytarish
      console.warn(
        "TTS null qaytardi — ELEVENLABS_API_KEY:",
        process.env.ELEVENLABS_API_KEY ? "bor" : "YO'Q",
      );
      res.json({
        text: answer,
        userText,
        language: detectedLang || lang,
        category,
        audioUrl: null,
        ttsError: "TTS provider ishlamadi. ELEVENLABS_API_KEY tekshiring.",
      });
    } catch (err) {
      console.error("Voice chat xato:", err.message);
      res.status(500).json({ error: err.message });
    } finally {
      cleanup(req.file?.path);
    }
  },
);

// ── POST /api/voice/transcribe ────────────────────────────────
/* ⚠️ `voiceLimitGuard` QO'SHILDI (2026-08-07): avval bu endpointda
   HECH QANDAY limit yo'q edi va `optionalUserGuard` bilan ishlagani
   uchun istalgan odam cheksiz nutqni matnga o'girishi mumkin edi —
   bu to'g'ridan-to'g'ri pul xarajati. */
router.post(
  "/transcribe",
  optionalUserGuard,
  voiceLimitGuard,
  upload.single("audio"),
  async (req, res) => {
    if (!req.file)
      return res.status(400).json({ error: "Audio fayl yuborilmadi" });
    try {
      const result = await speechToText(req.file.path, req.body.lang || null);
      res.json({ text: result.text, language: result.language });
    } catch (err) {
      res.status(500).json({ error: err.message });
    } finally {
      cleanup(req.file?.path);
    }
  },
);

// ── POST /api/voice/speak ─────────────────────────────────────
router.post("/speak", optionalUserGuard, async (req, res) => {
  const { text, lang = "uz", voiceId = null } = req.body;
  if (!text?.trim()) return res.status(400).json({ error: "Matn bo'sh" });

  try {
    const result = await textToSpeech(
      formatResponse(text, "voice"),
      lang,
      voiceId,
    );
    if (!result)
      return res.status(503).json({ error: "TTS provider sozlanmagan" });

    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Length": result.buffer.length,
    });
    res.send(result.buffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

// ── POST /api/voice/clone ─────────────────────────────────────
// Foydalanuvchi ovozini ElevenLabs ga yuklash
/* ⚠️ `userGuard` GA O'TKAZILDI (2026-08-07): ovoz klonlash eng qimmat
   va eng ko'p suiiste'mol qilinadigan amal (begona odamning ovozini
   yuklab, uning nomidan nutq yasash mumkin). Avval u `optionalUserGuard`
   bilan, ya'ni ANONIM tarzda va limitsiz ochiq edi. Endi faqat
   ro'yxatdan o'tgan foydalanuvchi va kunlik limit doirasida. */
router.post(
  "/clone",
  userGuard,
  voiceLimitGuard,
  upload.single("sample"),
  async (req, res) => {
    if (!req.file)
      return res.status(400).json({ error: "Ovoz namunasi yuborilmadi" });

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey)
      return res.status(503).json({ error: "ElevenLabs sozlanmagan" });

    const name = req.body.name || `voice_${Date.now()}`;

    try {
      // ElevenLabs Instant Voice Cloning
      const boundary = `----Boundary${Date.now()}`;
      const fileBuffer = fs.readFileSync(req.file.path);
      const ext = path.extname(req.file.path) || ".mp3";

      const mimes = {
        ".mp3": "audio/mpeg",
        ".wav": "audio/wav",
        ".webm": "audio/webm",
        ".m4a": "audio/mp4",
      };
      const mime = mimes[ext] || "audio/mpeg";

      let body = `--${boundary}\r\nContent-Disposition: form-data; name="name"\r\n\r\n${name}\r\n`;
      body += `--${boundary}\r\nContent-Disposition: form-data; name="description"\r\n\r\nUser voice clone\r\n`;
      const bodyStart = Buffer.from(body);
      const fileHeader = Buffer.from(
        `--${boundary}\r\nContent-Disposition: form-data; name="files"; filename="${name}${ext}"\r\nContent-Type: ${mime}\r\n\r\n`,
      );
      const bodyEnd = Buffer.from(`\r\n--${boundary}--\r\n`);
      const fullBody = Buffer.concat([
        bodyStart,
        fileHeader,
        fileBuffer,
        bodyEnd,
      ]);

      const voiceId = await new Promise((resolve, reject) => {
        const req2 = require("https").request(
          {
            hostname: "api.elevenlabs.io",
            path: "/v1/voices/add",
            method: "POST",
            headers: {
              "xi-api-key": apiKey,
              "Content-Type": `multipart/form-data; boundary=${boundary}`,
              "Content-Length": fullBody.length,
            },
          },
          (r) => {
            let d = "";
            r.on("data", (c) => {
              d += c;
            });
            r.on("end", () => {
              try {
                const json = JSON.parse(d);
                if (json.voice_id) resolve(json.voice_id);
                else
                  reject(
                    new Error(
                      json.detail?.message || "Clone xato: " + d.slice(0, 100),
                    ),
                  );
              } catch {
                reject(new Error("Parse xato: " + d.slice(0, 100)));
              }
            });
          },
        );
        req2.on("error", reject);
        req2.write(fullBody);
        req2.end();
      });

      res.json({
        success: true,
        voiceId,
        message:
          "Ovoz profili yaratildi! Bu voice ID ni Render da DEFAULT_VOICE_ID ga qo'shing.",
      });
    } catch (err) {
      console.error("Voice clone xato:", err.message);
      res.status(500).json({ error: err.message });
    } finally {
      cleanup(req.file?.path);
    }
  },
);
