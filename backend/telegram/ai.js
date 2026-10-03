"use strict";
/**
 * BOT — HUQUQIY SAVOLGA JAVOB (AI), OVOZNI MATNGA O'GIRISH.
 *
 * AI zanjiri (`services/legalAI.js` → lokal AI) O'ZGARMADI — bu fayl
 * faqat Telegram tomonini bajaradi: limit, suhbat tarixi, bazaga
 * saqlash va javobni chiroyli ko'rinishda yuborish.
 */
const fs = require("fs");
const os = require("os");
const path = require("path");
const https = require("https");
const { getLegalAdvice } = require("../services/legalAI");
const { speechToText } = require("../services/speechToText");
const { Chat } = require("../models");
const { recordStat } = require("../services/stats");
const { checkAndIncrement } = require("../middleware/usageLimit");
const { T, fill } = require("./texts");
const { esc, mdToHtml, splitMessage } = require("./ui");

const HISTORY_MAX = 20;

function download(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`HTTP ${res.statusCode}`));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

function createAi({ bot, safeSend, getLang, mainMenu, voiceReply }) {
  const sessions = new Map(); // tgId -> { messages, sessionId }

  function getSession(tgId) {
    if (!sessions.has(tgId)) {
      sessions.set(tgId, { messages: [], sessionId: `tg_${tgId}_${Date.now()}` });
    }
    return sessions.get(tgId);
  }

  /** Ovozli xabar → matn. `null` — tushunilmadi. */
  async function transcribe(msg, lang) {
    const media = msg.voice || msg.audio;
    if (!media) return null;
    let tmp = null;
    try {
      const info = await bot.getFile(media.file_id);
      let ext = path.extname(info.file_path || "") || ".ogg";
      // Telegram .oga yuboradi — Whisper uni tanimaydi, aslida bu OGG/Opus
      if (ext.toLowerCase() === ".oga") ext = ".ogg";
      const buf = await download(
        `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${info.file_path}`,
      );
      tmp = path.join(os.tmpdir(), `tg_voice_${Date.now()}_${Math.random().toString(36).slice(2)}${ext}`);
      fs.writeFileSync(tmp, buf);
      const { text } = await speechToText(tmp, ["uz", "ru"].includes(lang) ? lang : undefined);
      return text?.trim() || null;
    } catch (err) {
      console.error("Ovozni matnga o'girish xatosi:", err.message);
      return null;
    } finally {
      if (tmp) fs.unlink(tmp, () => {});
    }
  }

  async function limitReply(chatId, tgId, lim) {
    const lang = getLang(tgId);
    const text = fill(T[lang].limit, {
      used: lim.used ?? lim.limit,
      at: lim.unblockAtStr?.[lang] || lim.unblockAtStr?.uz || "",
      left: lim.timeLeft?.[lang] || lim.timeLeft?.uz || "",
    });
    const btn = lang === "ru" ? "💎 Тарифы" : "💎 Tariflar";
    return safeSend(chatId, text, { reply_markup: { inline_keyboard: [[{ text: btn, callback_data: "plans" }]] } });
  }

  async function saveChat(sess, userId, msg, question, answer, category) {
    try {
      let chat = await Chat.findOne({ sessionId: sess.sessionId });
      if (!chat) {
        chat = new Chat({
          sessionId: sess.sessionId,
          userId,
          source: "telegram",
          telegramUserId: String(msg.from.id),
          telegramUsername: msg.from.username || null,
          messages: [],
        });
      }
      chat.messages.push({ role: "user", content: question });
      chat.messages.push({ role: "assistant", content: answer });
      chat.category = category;
      await chat.save();
    } catch (err) {
      console.error("Mongo save error:", err.message);
    }
  }

  /** Savolga javob beradi (limit tekshiruvi shu yerda) */
  async function answer(msg, userId, question) {
    const chatId = msg.chat.id;
    const tgId = msg.from.id;
    const lang = getLang(tgId);

    const lim = await checkAndIncrement(userId);
    if (lim) return limitReply(chatId, tgId, lim);

    bot.sendChatAction(chatId, "typing").catch(() => {});
    const loader = await safeSend(chatId, T[lang].analyzing);
    const dropLoader = () =>
      loader?.message_id ? bot.deleteMessage(chatId, loader.message_id).catch(() => {}) : null;
    const sess = getSession(tgId);

    try {
      const res = await getLegalAdvice(question, sess.messages, null, "image/jpeg", lang);
      const reply = String(res?.answer || "").trim() || T[lang].error;
      sess.messages.push({ role: "user", content: question }, { role: "assistant", content: reply });
      if (sess.messages.length > HISTORY_MAX) sess.messages = sess.messages.slice(-HISTORY_MAX);

      await saveChat(sess, userId, msg, question, reply, res?.category);
      recordStat("telegram", res?.category).catch(() => {});
      await dropLoader();

      /* «🔊 Eshitish» tugmasi oxirgi bo'lakka. Ovoz tili javobning
         O'ZIDAN aniqlanadi (ruscha javobni rus ovozi o'qisin). */
      const voiceLang = voiceReply.detectLanguage(reply);
      const answerId = voiceReply.remember(reply, voiceLang);
      const parts = splitMessage(reply);
      for (let i = 0; i < parts.length; i++) {
        const last = i === parts.length - 1;
        await safeSend(chatId, mdToHtml(parts[i]), last ? voiceReply.listenKeyboard(answerId, voiceLang) : {});
      }
    } catch (err) {
      console.error("Telegram AI error:", err);
      await dropLoader();
      await safeSend(chatId, T[lang].error, mainMenu(lang));
    }
  }

  /** Ovozli xabar: tinglash → ko'rsatish → javob */
  async function answerVoice(msg, userId) {
    const chatId = msg.chat.id;
    const lang = getLang(msg.from.id);
    const wait = await safeSend(chatId, T[lang].voice_processing);
    const text = await transcribe(msg, lang);
    if (wait?.message_id) bot.deleteMessage(chatId, wait.message_id).catch(() => {});
    if (!text) return safeSend(chatId, T[lang].voice_error);
    await safeSend(chatId, `${T[lang].voice_recognized} <i>${esc(text)}</i>`);
    return answer(msg, userId, text);
  }

  const resetSession = (tgId) => sessions.delete(tgId);

  return { answer, answerVoice, resetSession };
}

module.exports = { createAi };
