"use strict";
/**
 * Telegram bot uchun "Eshitish" tugmasi.
 *
 * AI javobi ostida inline tugma chiqadi; bosilganda javob matni ovozga
 * aylantirilib, ovozli xabar sifatida yuboriladi. Til javobning O'ZIDAN
 * aniqlanadi — ruscha javobni rus ovozi, o'zbekchani o'zbek ovozi o'qiydi.
 */

const crypto = require("crypto");
const { textToSpeech } = require("./services/textToSpeech");
const { formatResponse } = require("./services/responseFormatter");
const { detectLanguage } = require("./services/legalAI");
const { getCached, setCached } = require("./services/ttsCache");

const LABELS = {
  uz: {
    listen: "🔊 Eshitish",
    working: "Ovoz tayyorlanmoqda…",
    expired: "Bu javob eskirdi — yangi savol bering",
    failed: "Ovoz tayyorlanmadi, keyinroq urinib ko'ring",
    caption: "🔊 Javobning ovozli varianti",
  },
  ru: {
    listen: "🔊 Прослушать",
    working: "Готовим озвучку…",
    expired: "Этот ответ устарел — задайте новый вопрос",
    failed: "Не удалось озвучить, попробуйте позже",
    caption: "🔊 Голосовая версия ответа",
  },
};

/* Javob matnlari — callback_data 64 BAYTDAN oshmasligi kerak, shuning
   uchun matnning o'zini tugmaga joylab bo'lmaydi: faqat qisqa kalit
   yuboriladi, matn esa shu yerda saqlanadi.

   Chegara bor, aks holda uzoq ishlagan bot xotirasi cheksiz o'sardi. */
const MAX_ANSWERS = 500;
const answers = new Map(); // id → { text, lang }

function remember(text, lang) {
  const id = crypto.randomBytes(6).toString("hex");
  answers.set(id, { text, lang });
  while (answers.size > MAX_ANSWERS) {
    // Map kirish tartibini saqlaydi — eng eskisini olib tashlaymiz
    const oldest = answers.keys().next();
    if (oldest.done) break;
    answers.delete(oldest.value);
  }
  return id;
}

function listenKeyboard(id, lang) {
  const L = LABELS[lang] || LABELS.uz;
  return {
    reply_markup: {
      inline_keyboard: [[{ text: L.listen, callback_data: `tts_${id}` }]],
    },
  };
}

function registerVoiceReply({ bot, safeSend }) {
  async function handleCallback(query) {
    const data = String(query.data || "");
    if (!data.startsWith("tts_")) return false; // bizniki emas

    const chatId = query.message.chat.id;
    const entry = answers.get(data.slice(4));
    const L = LABELS[entry?.lang] || LABELS.uz;

    if (!entry) {
      await bot
        .answerCallbackQuery(query.id, { text: L.expired, show_alert: true })
        .catch(() => {});
      return true;
    }

    /* Javobni DARHOL beramiz — aks holda Telegram tugmani "yuklanmoqda"
       holatida ushlab turadi va ~10 soniyadan keyin xato ko'rsatadi,
       holbuki sintez 3-5 soniya oladi. */
    await bot
      .answerCallbackQuery(query.id, { text: L.working })
      .catch(() => {});

    try {
      const voiceText = formatResponse(entry.text, "voice");
      if (!voiceText.trim()) return true;

      const lang = entry.lang;
      let audio = getCached(voiceText, lang);
      if (!audio) {
        const r = await textToSpeech(voiceText, lang);
        if (!r) {
          await safeSend(chatId, L.failed);
          return true;
        }
        setCached(voiceText, lang, r.buffer, r.contentType);
        audio = r;
      }

      /* Telegram `sendVoice` MP3 ni qabul qiladi, lekin WAV ni yo'q —
         WAV qaytargan provayder (Gemini) uchun `sendAudio` ishlatiladi.
         `sendVoice` ba'zan baribir rad etadi, shuning uchun zaxira bor. */
      const isMp3 = (audio.contentType || "").includes("mpeg");
      const opts = { filename: "javob.mp3", contentType: audio.contentType };

      if (isMp3) {
        try {
          await bot.sendVoice(chatId, audio.buffer, {}, opts);
          return true;
        } catch {
          /* zaxiraga o'tamiz */
        }
      }
      await bot.sendAudio(
        chatId,
        audio.buffer,
        { title: L.caption },
        { filename: "javob.mp3", contentType: audio.contentType },
      );
    } catch (err) {
      console.error("Telegram TTS xato:", err.message);
      await safeSend(chatId, L.failed).catch(() => {});
    }
    return true;
  }

  return { handleCallback, remember, listenKeyboard, detectLanguage };
}

module.exports = { registerVoiceReply, VOICE_LABELS: LABELS };
