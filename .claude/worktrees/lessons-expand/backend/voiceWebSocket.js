"use strict";
/**
 * WebSocket Voice Chat
 * Real-time ovozli suhbat uchun — past kechikish (low latency)
 *
 * Qo'llash:
 *   const { initVoiceWS } = require("./voiceWebSocket");
 *   const server = app.listen(PORT);
 *   initVoiceWS(server);
 *
 * Client protokoli:
 *   → { type: "start", lang: "uz", voiceId: null }
 *   → { type: "audio_chunk", data: <base64 audio> }
 *   → { type: "end" }   ← foydalanuvchi gapni tugatdi
 *   ← { type: "transcribed", text: "..." }
 *   ← { type: "answer", text: "...", lang: "uz" }
 *   ← { type: "audio", data: <base64 mp3> }
 *   ← { type: "error", message: "..." }
 */

const { WebSocketServer } = require("ws");
const { speechToText }    = require("./services/speechToText");
const { textToSpeech }    = require("./services/textToSpeech");
const { getLegalAdvice }  = require("./services/legalAI");
const { formatResponse }  = require("./services/responseFormatter");
const fs   = require("fs");
const path = require("path");
const os   = require("os");

// Session boshqaruvi
const sessions = new Map();

function initVoiceWS(server) {
  const wss = new WebSocketServer({ server, path: "/ws/voice" });

  wss.on("connection", (ws, req) => {
    const sessionId = `ws_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    sessions.set(sessionId, {
      lang:      "uz",
      voiceId:   null,
      history:   [],
      chunks:    [],
      active:    true,
    });

    console.log(`WS Voice: yangi sessiya ${sessionId}`);

    ws.on("message", async (raw) => {
      let msg;
      try { msg = JSON.parse(raw); }
      catch { return send(ws, { type: "error", message: "JSON parse xatosi" }); }

      const session = sessions.get(sessionId);
      if (!session) return;

      switch (msg.type) {

        // Sessiya boshlash
        case "start":
          session.lang    = msg.lang    || "uz";
          session.voiceId = msg.voiceId || null;
          session.history = msg.history || [];
          session.chunks  = [];
          send(ws, { type: "ready", sessionId });
          break;

        // Audio chunk qabul qilish
        case "audio_chunk":
          if (msg.data) {
            try {
              const buffer = Buffer.from(msg.data, "base64");
              session.chunks.push(buffer);
            } catch {}
          }
          break;

        // Ovoz tugadi — qayta ishlash
        case "end":
          await processVoiceInput(ws, session, sessionId);
          break;

        // Faqat matn yuborish (text mode)
        case "text":
          if (msg.text?.trim()) {
            await processTextInput(ws, session, msg.text.trim());
          }
          break;

        // Tarixi tozalash
        case "clear":
          session.history = [];
          send(ws, { type: "cleared" });
          break;

        default:
          send(ws, { type: "error", message: "Noma'lum xabar turi: " + msg.type });
      }
    });

    ws.on("close", () => {
      sessions.delete(sessionId);
      console.log(`WS Voice: sessiya yopildi ${sessionId}`);
    });

    ws.on("error", (err) => {
      console.error(`WS ${sessionId} xato:`, err.message);
    });

    // Ulanish tasdiqlash
    send(ws, { type: "connected", sessionId });
  });

  console.log("✅ WebSocket Voice server tayyor: /ws/voice");
  return wss;
}

// ── Ovozni qayta ishlash ──────────────────────────────────────
async function processVoiceInput(ws, session, sessionId) {
  if (session.chunks.length === 0) {
    return send(ws, { type: "error", message: "Audio ma'lumot yo'q" });
  }

  // Chunklar → bitta fayl
  const audioBuffer = Buffer.concat(session.chunks);
  session.chunks    = [];

  const tmpPath = path.join(os.tmpdir(), `ws_${sessionId}_${Date.now()}.webm`);
  fs.writeFileSync(tmpPath, audioBuffer);

  try {
    // 1. STT
    send(ws, { type: "processing", stage: "transcribing" });
    const { text: userText, language } = await speechToText(tmpPath, session.lang);
    session.lang = language || session.lang;

    if (!userText?.trim()) {
      return send(ws, { type: "error", message: "Audio tushunilmadi" });
    }

    send(ws, { type: "transcribed", text: userText });

    // 2. AI
    await processTextInput(ws, session, userText);

  } catch (err) {
    send(ws, { type: "error", message: err.message });
  } finally {
    try { fs.unlinkSync(tmpPath); } catch {}
  }
}

// ── Matnni qayta ishlash ──────────────────────────────────────
async function processTextInput(ws, session, userText) {
  try {
    // AI
    send(ws, { type: "processing", stage: "thinking" });
    const { answer, category } = await getLegalAdvice(
      userText, session.history, null, null, session.lang
    );

    // Tarixni yangilash
    session.history.push({ role: "user",      content: userText });
    session.history.push({ role: "assistant", content: answer });
    if (session.history.length > 12) session.history = session.history.slice(-12);

    // Matn javob yuborish
    send(ws, { type: "answer", text: answer, lang: session.lang, category });

    // TTS
    send(ws, { type: "processing", stage: "speaking" });
    try {
      const voiceText = formatResponse(answer, "voice", session.lang);
      const { buffer } = await textToSpeech(voiceText, session.lang, session.voiceId);
      send(ws, { type: "audio", data: buffer.toString("base64"), format: "mp3" });
    } catch (ttsErr) {
      console.warn("WS TTS xato:", ttsErr.message);
      send(ws, { type: "tts_unavailable", message: "Audio yaratib bo'lmadi" });
    }

  } catch (err) {
    send(ws, { type: "error", message: err.message });
  }
}

function send(ws, data) {
  try {
    if (ws.readyState === 1) {
      ws.send(JSON.stringify(data));
    }
  } catch {}
}

module.exports = { initVoiceWS };