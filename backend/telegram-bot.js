"use strict";
/**
 * TELEGRAM BOT — kirish nuqtasi (2026-10-03 qayta tuzildi).
 *
 * Avvalgi 765 qatorlik fayl qismlarga bo'lindi (`telegram/`):
 *   texts.js   — matnlar (uz/ru)        ui.js      — menyu, yuborish, formatlash
 *   account.js — til, hisob, ro'yxat    ai.js      — savolga javob, ovoz
 *   plans.js   — tariflar, buyurtma     (darslar/testlar — telegram-learning.js)
 *
 * ⚠️ Barcha xabarlar BITTA `message` handlerida yo'naltiriladi. Avval
 * `onText` va `on("message")` parallel ishlardi: `/start abc` kabi
 * buyruqlar hech biriga tushmay, bot JIM qolardi.
 *
 * ⚠️ `module.exports.verifiedUsers` — `routes/admin.js` foydalanuvchini
 * o'chirganda keshdan olib tashlash uchun ishlatadi. Nomini o'zgartirmang.
 */
if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.log("ℹ️ TELEGRAM_BOT_TOKEN topilmadi — Telegram bot o'chirilgan");
  module.exports = null;
  return;
}

const TelegramBot = require("node-telegram-bot-api");
const { registerLearning } = require("./telegram-learning");
const { registerVoiceReply } = require("./telegram-voice");
const { T, fill } = require("./telegram/texts");
const ui = require("./telegram/ui");
const { createAccount } = require("./telegram/account");
const { createAi } = require("./telegram/ai");
const { registerPlans } = require("./telegram/plans");
const { createFlows } = require("./telegram/flows");

// Oxiridagi "/" olib tashlanadi — avval havolalar "...//register" bo'lib qolardi
const SITE_URL = (process.env.SITE_URL || "https://huquq-ai-teal.vercel.app").replace(/\/+$/, "");

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });
const safeSend = ui.makeSafeSend(bot);
const acc = createAccount();
const { getLang } = acc;
const tx = (tgId) => T[getLang(tgId)] || T.uz;
const mainMenu = (lang) => ui.mainMenu(lang);

const voiceReply = registerVoiceReply({ bot, safeSend });
const ai = createAi({ bot, safeSend, getLang, mainMenu, voiceReply });
const plans = registerPlans({
  bot,
  safeSend,
  getLang,
  contactMenu: (tgId) => ui.contactMenu(tx(tgId)),
  SITE_URL,
});
const flows = createFlows({ safeSend, acc, ai, plans, SITE_URL });
const { sendNotRegistered, startScreen, onStart, onContact } = flows;
const learning = registerLearning({
  bot,
  safeSend,
  getLang,
  findOrLinkUser: acc.findOrLinkUser,
  sendNotRegistered,
  SITE_URL,
});

/** Buyruqlar: /start, /yangi, /help, /lang, /tariflar, /hisob, /myid */
async function onCommand(msg) {
  const m = /^\/([a-z_]+)(?:@\w+)?(?:\s+([\s\S]*))?$/i.exec(msg.text.trim());
  const cmd = (m?.[1] || "").toLowerCase();
  const arg = (m?.[2] || "").trim();
  const chatId = msg.chat.id;
  const tgId = msg.from.id;
  if (cmd === "start") return onStart(msg, arg);
  if (cmd === "myid") return safeSend(chatId, fill(tx(tgId).myid, { id: chatId }));
  if (cmd === "lang" || cmd === "til") return safeSend(chatId, T.uz.lang_choose, ui.langKeyboard);
  if (cmd === "help" || cmd === "yordam") return safeSend(chatId, fill(tx(tgId).help, { site: SITE_URL }));
  return onMenu(msg, { yangi: "new", new: "new", tariflar: "plans", plans: "plans", hisob: "account", account: "account" }[cmd] || "help");
}

/** Pastdagi menyu tugmalari */
async function onMenu(msg, action) {
  const chatId = msg.chat.id;
  const tgId = msg.from.id;
  const X = tx(tgId);
  if (action === "lang") return safeSend(chatId, T.uz.lang_choose, ui.langKeyboard);
  if (action === "help") return safeSend(chatId, fill(X.help, { site: SITE_URL }), mainMenu(getLang(tgId)));
  const userId = await acc.findOrLinkUser(tgId, msg.from.username);
  if (action === "plans") return plans.showPlans(chatId, tgId, userId);
  if (!userId) return sendNotRegistered(chatId, tgId);
  if (action === "new") {
    ai.resetSession(tgId);
    return safeSend(chatId, X.new_prompt, mainMenu(getLang(tgId)));
  }
  if (action === "account") return plans.showAccount(chatId, tgId, userId);
  return false;
}

async function onMessage(msg) {
  // Guruhlarda bot har xabarga javob bermasin — faqat shaxsiy chat
  if (msg.chat?.type !== "private" || !msg.from) return;
  const tgId = msg.from.id;
  await acc.loadLang(tgId);
  if (msg.contact) return onContact(msg);
  if (msg.text?.startsWith("/")) return onCommand(msg);

  // Darslar/Testlar tugmalari — o'z moduli (AI'ga ketmaydi, limit sarflanmaydi)
  if (await learning.handleMessage(msg)) return;
  const action = ui.menuAction(msg.text);
  if (action && (await onMenu(msg, action)) !== false) return;

  const userId = await acc.findOrLinkUser(tgId, msg.from.username);
  if (!userId) return sendNotRegistered(msg.chat.id, tgId);
  if (msg.voice || msg.audio) return ai.answerVoice(msg, userId);
  const question = (msg.text || msg.caption || "").trim();
  if (!question) return safeSend(msg.chat.id, tx(tgId).unsupported);
  return ai.answer(msg, userId, question);
}

async function onCallback(query) {
  const tgId = query.from.id;
  await acc.loadLang(tgId);
  if (await learning.handleCallback(query)) return;
  if (await voiceReply.handleCallback(query)) return;

  const data = String(query.data || "");
  const chatId = query.message?.chat?.id;
  const lang = { lang_uz: "uz", lang_ru: "ru" }[data];
  if (lang) {
    await bot.answerCallbackQuery(query.id).catch(() => {});
    acc.setLang(tgId, lang);
    await safeSend(chatId, T[lang].lang_set);
    return startScreen(chatId, query.from);
  }
  if (data === "plans" || /^(buy|order):/.test(data)) {
    const userId = await acc.findOrLinkUser(tgId, query.from.username);
    if (!userId && data !== "plans") {
      await bot.answerCallbackQuery(query.id).catch(() => {});
      return sendNotRegistered(chatId, tgId);
    }
    return plans.handleCallback(query, userId);
  }
  // Noma'lum tugma — hech bo'lmasa "soat" belgisi to'xtasin
  return bot.answerCallbackQuery(query.id).catch(() => {});
}

/* Handler xatosi botni "jim" qoldirmasin — foydalanuvchiga xabar beriladi */
function guard(fn, chatOf) {
  return async (x) => {
    try {
      await fn(x);
    } catch (err) {
      console.error("Telegram handler xato:", err);
      const chatId = chatOf(x);
      if (chatId) safeSend(chatId, tx(x.from?.id).error).catch(() => {});
    }
  };
}
bot.on("message", guard(onMessage, (m) => m.chat?.id));
bot.on("callback_query", guard(onCallback, (q) => q.message?.chat?.id));
bot.on("polling_error", (err) => console.error("Telegram polling error:", err.message));

// Telegram'dagi "Menu" tugmasidagi buyruqlar ro'yxati
const COMMANDS = {
  uz: [["start", "Bosh menyu"], ["yangi", "Yangi savol"], ["tariflar", "Tariflar"], ["hisob", "Hisobim"], ["help", "Yordam"], ["lang", "Tilni o'zgartirish"]],
  ru: [["start", "Главное меню"], ["yangi", "Новый вопрос"], ["tariflar", "Тарифы"], ["hisob", "Мой аккаунт"], ["help", "Помощь"], ["lang", "Сменить язык"]],
};
for (const [lc, list] of Object.entries(COMMANDS)) {
  const commands = list.map(([command, description]) => ({ command, description }));
  bot.setMyCommands(commands, lc === "uz" ? {} : { language_code: lc }).catch(() => {});
}

module.exports = { bot, verifiedUsers: acc.verifiedUsers };
