"use strict";

if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.log("ℹ️ TELEGRAM_BOT_TOKEN topilmadi — Telegram bot o'chirilgan");
  module.exports = null;
  return;
}

const TelegramBot = require("node-telegram-bot-api");
const { getLegalAdvice } = require("./services/legalAI");
const { speechToText } = require("./services/speechToText");
const { Chat, User } = require("./models");
const { recordStat } = require("./services/stats");
const { checkAndIncrement } = require("./middleware/usageLimit");
const { registerLearning } = require("./telegram-learning");
const { registerVoiceReply } = require("./telegram-voice");
const fs = require("fs");
const os = require("os");
const path = require("path");
const https = require("https");

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

const sessions = new Map(); // tgUserId -> { messages, sessionId }
const userLang = new Map(); // tgUserId -> "uz"|"ru"|"en"
const verifiedUsers = new Map(); // tgUserId -> user._id

const SITE_URL = process.env.SITE_URL || "https://huquq-ai-xi.vercel.app/";

// ─────────────────────────────────────────────────────────────
// TIL VA ALIFBO ANIQLASH — bot xabarini tahlil qiladi
// ─────────────────────────────────────────────────────────────
function detectScript(text = "") {
  const cyrillic = (text.match(/[\u0400-\u04FF]/g) || []).length;
  const latin = (text.match(/[a-zA-Z']/g) || []).length;
  return cyrillic > latin ? "cyrillic" : "latin";
}

// Telegram da til tanlangan bo'lsa, lekin xabar alifbosi farq qilsa —
// getLegalAdvice ga to'g'ri lang va userText berib yuboramiz.
// buildLangRule legalAI.js da userText orqali alifboni aniqlaydigan qilib yozilgan.

// ── TRANSLATIONS ─────────────────────────────────────────────
const tg = {
  uz: {
    welcome: `🏛️ Mening Huquqim botiga xush kelibsiz!\n\nMen O'zbekiston qonunchiligi bo'yicha AI maslahatchi botman.\n\nHuquqiy muammongizni yozing — javob beraman! ✅`,
    not_registered: `🏛️ <b>Mening Huquqim</b> — AI Huquqiy Maslahat\n\n🔓 <b>Bepul foydalanish uchun ro'yxatdan o'ting!</b>\n\n✅ Kuniga ${20} ta bepul savol\n✅ O'zbek, Rus, Ingliz tillarida\n✅ 24/7 ishlaydi\n\n📄 Yo'riqnoma:\n1: 🌐 Saytdan ro'yxatdan o'tasiz,\n2: 👤 profilga kirasiz,\n3: "✈️ Telegram" tugmasini bosasiz va telegram username kiritasiz\n4: Telegramga qaytib kirib botdan foydalanasiz\n\n👇 Quyidagi tugmani bosib ro'yxatdan o'ting:`,
    new_ready: "✅ Yangi savol uchun tayyor!",
    new_prompt: "✅ Yangi savol! Muammongizni yozing.",
    about: `🏛️ Mening Huquqim\n\nO'zbekiston qonunchiligi bo'yicha AI maslahatchi.\n\n🌐 Sayt: ${SITE_URL}\n⚠️ Muhim ishlarda advokat bilan maslahatlashing.`,
    analyzing: "⏳ Tahlil qilinmoqda...",
    limit: "❗️ Xatolik yuz berdi, iltimos keyinroq urinib ko'ring",
    help: `ℹ️ Yordam\n\n/start — Boshlash\n/yangi — Yangi savol\n/lang — Til tanlash\n\nHuquqiy muammongizni oddiy tilda yozing.\n\n🌐 Sayt: ${SITE_URL}`,
    lang_choose: "🌐 Tilni tanlang / Выберите язык:",
    lang_set: "✅ Til o'zgartirildi: O'zbek",
    btn_new: "🔄 Yangi savol",
    btn_about: "ℹ️ Bot haqida",
    register_btn: `✅ Bepul ro'yxatdan o'tish →`,
    linked:
      "✅ Hisobingiz muvaffaqiyatli bog'landi! Endi AI maslahatdan foydalanishingiz mumkin.\n\nSavolingizni yozing!",
    already_linked: "✅ Hisobingiz allaqachon bog'langan. Savolingizni yozing!",
    voice_processing: "🎤 Ovozli xabaringiz tinglanmoqda...",
    voice_error:
      "❌ Ovozli xabarni tushunib bo'lmadi. Iltimos, aniqroq gapirib qayta yuboring yoki matn yozing.",
    voice_recognized: "🎤 Tushundim:",
  },
  ru: {
    welcome: `🏛️ Добро пожаловать в бот Мои Права!\n\nЯ AI советник по законодательству Узбекистана.\n\nОпишите вашу юридическую проблему — отвечу! ✅`,
    not_registered: `🏛️ <b>Мои Права</b> — AI Юридическая Консультация\n\n🔓 <b>Зарегистрируйтесь для бесплатного доступа!</b>\n\n✅ ${20} бесплатных вопросов в день\n✅ История сохраняется\n✅ На узбекском, русском, английском\n✅ Работает 24/7\n\n📄 Инструкция:\n1: 🌐 Зарегистрируйтесь на сайте,\n2: 👤 Войдите в профиль,\n3: ✈️ Нажмите кнопку "Telegram" и введите свой Telegram username,\n4: 🤖 Вернитесь в Telegram и пользуйтесь ботом.\n\n👇 Нажмите кнопку ниже для регистрации:`,
    new_ready: "✅ Готов к новому вопросу!",
    new_prompt: "✅ Новый вопрос! Опишите вашу проблему.",
    about: `🏛️ Мои Права\n\nAI советник по законодательству Узбекистана.\n\n🌐 Сайт: ${SITE_URL}\n⚠️ По сложным делам консультируйтесь с адвокатом.`,
    analyzing: "⏳ Анализируем...",
    limit: "❗️ Произошла ошибка, попробуйте позже",
    help: `ℹ️ Помощь\n\n/start — Начать\n/yangi — Новый вопрос\n/lang — Сменить язык\n\nОпишите юридическую проблему простыми словами.\n\n🌐 Сайт: ${SITE_URL}`,
    lang_choose: "🌐 Tilni tanlang / Выберите язык:",
    lang_set: "✅ Язык изменён: Русский",
    btn_new: "🔄 Новый вопрос",
    btn_about: "ℹ️ О боте",
    register_btn: `✅ Зарегистрироваться бесплатно →`,
    linked:
      "✅ Аккаунт успешно привязан! Теперь вы можете использовать AI консультант.\n\nЗадайте вопрос!",
    already_linked: "✅ Аккаунт уже привязан. Задайте вопрос!",
    voice_processing: "🎤 Слушаю ваше голосовое сообщение...",
    voice_error:
      "❌ Не удалось распознать голосовое сообщение. Попробуйте сказать чётче или напишите текстом.",
    voice_recognized: "🎤 Я понял:",
  },
  en: {
    welcome: `🏛️ Welcome to My Rights bot!\n\nI am an AI advisor on Uzbekistan legislation.\n\nDescribe your legal issue — I'll answer! ✅`,
    not_registered: `🏛️ <b>My Rights</b> — AI Legal Consultation\n\n🔓 <b>Register for free access!</b>\n\n✅ ${20} free questions per day\n✅ All chats saved\n✅ Uzbek, Russian, English\n✅ Available 24/7\n\n📄 Instructions:\n1: 🌐 Register on the website,\n2: 👤 Go to your profile,\n3: ✈️ Click the "Telegram" button and enter your Telegram username,\n4: 🤖 Return to Telegram and use the bot.\n\n👇 Press the button below to register:`,
    new_ready: "✅ Ready for a new question!",
    new_prompt: "✅ New question! Describe your problem.",
    about: `🏛️ My Rights\n\nAI advisor on Uzbekistan legislation.\n\n🌐 Website: ${SITE_URL}\n⚠️ Consult a lawyer for complex cases.`,
    analyzing: "⏳ Analyzing...",
    limit: "❗️ An error occurred, please try again later",
    help: `ℹ️ Help\n\n/start — Start\n/yangi — New question\n/lang — Change language\n\nDescribe your legal issue in plain language.\n\n🌐 Website: ${SITE_URL}`,
    lang_choose: "🌐 Tilni tanlang / Выберите язык:",
    lang_set: "✅ Language changed: English",
    btn_new: "🔄 New question",
    btn_about: "ℹ️ About bot",
    register_btn: `✅ Register for free →`,
    linked:
      "✅ Account successfully linked! You can now use the AI advisor.\n\nAsk a question!",
    already_linked: "✅ Account already linked. Ask a question!",
    voice_processing: "🎤 Listening to your voice message...",
    voice_error:
      "❌ Couldn't understand the voice message. Please try again more clearly or type your question.",
    voice_recognized: "🎤 I heard:",
  },
};

/* ═════════════ TIL: XOTIRA + BAZA ═════════════
   `userLang` — tez kesh (har xabarda bazaga bormaslik uchun),
   haqiqiy manba esa `User.telegramLang`. Shu sabab tanlangan til
   server qayta ishga tushganda ham, boshqa qurilmadan kirganda ham
   saqlanib qoladi.

   `getLang` ATAYLAB sinxron qoldirildi — u 20 dan ortiq joyda
   ishlatiladi (darslar, testlar, ovozli javob). Uni async qilish
   o'sha joylarning hammasiga tegishni talab qilardi. O'rniga
   handler boshida bir marta `loadLang()` chaqiriladi va kesh
   to'ldiriladi. */
function getLang(userId) {
  return userLang.get(userId) || "uz";
}
function tr(userId) {
  return tg[getLang(userId)] || tg.uz;
}

const SUPPORTED_LANGS = ["uz", "ru"];

/**
 * Tanlangan tilni keshga yuklaydi.
 * @returns {Promise<string|null>} tanlangan til yoki `null` — hali
 *   umuman tanlanmagan (bunda bot tilni SO'RASHI kerak).
 */
async function loadLang(tgUserId) {
  if (userLang.has(tgUserId)) return userLang.get(tgUserId);
  try {
    const u = await User.findOne({ telegramId: String(tgUserId) })
      .select("telegramLang")
      .lean();
    if (u?.telegramLang && SUPPORTED_LANGS.includes(u.telegramLang)) {
      userLang.set(tgUserId, u.telegramLang);
      return u.telegramLang;
    }
  } catch (err) {
    console.error("loadLang xato:", err.message);
  }
  return null;
}

/** Tilni saqlaydi: keshga darhol, bazaga fonda. */
function setLang(tgUserId, lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  userLang.set(tgUserId, lang);
  /* Hisob hali bog'lanmagan bo'lsa hech qanday yozuv topilmaydi —
     bu normal: kesh baribir ishlaydi, hisob bog'langach til
     tanlashda qayta yoziladi. */
  User.updateOne(
    { telegramId: String(tgUserId) },
    { $set: { telegramLang: lang } },
  ).catch((err) => console.error("setLang xato:", err.message));
}

// ─────────────────────────────────────────────────────────────
// USER TOPISH / BOG'LASH
// ─────────────────────────────────────────────────────────────
async function findOrLinkUser(telegramUserId, telegramUsername) {
  const tgId = String(telegramUserId);

  // 1. In-memory cache
  if (verifiedUsers.has(tgId)) return verifiedUsers.get(tgId);

  // 2. DB dan telegramId bilan qidirish
  try {
    const user = await User.findOne({ telegramId: tgId });
    if (user) {
      verifiedUsers.set(tgId, user._id);
      if (telegramUsername && user.telegramUsername !== telegramUsername) {
        User.findByIdAndUpdate(user._id, { telegramUsername }).catch(() => {});
      }
      return user._id;
    }
  } catch (err) {
    console.error("DB findOrLinkUser error:", err.message);
  }

  // 3. pendingTelegramUsername bilan avtomatik bog'lash
  if (telegramUsername) {
    try {
      const normalized = telegramUsername.toLowerCase().replace("@", "");
      const user = await User.findOne({
        pendingTelegramUsername: normalized,
        emailVerified: true,
        telegramVerified: { $ne: true },
      });
      if (user) {
        const conflict = await User.findOne({
          telegramId: tgId,
          _id: { $ne: user._id },
        });
        if (!conflict) {
          user.telegramId = tgId;
          user.telegramUsername = telegramUsername;
          user.telegramVerified = true;
          user.pendingTelegramUsername = null;
          await user.save();
          verifiedUsers.set(tgId, user._id);
          console.log(
            `✅ Auto-linked: ${user.username} via @${telegramUsername}`,
          );
          return user._id;
        }
      }
    } catch (err) {
      console.error("Auto-link error:", err.message);
    }
  }

  return null;
}

// ─────────────────────────────────────────────────────────────
// KEYBOARDS
// ─────────────────────────────────────────────────────────────
/* ⚠️ MENYU QAYTA TUZILDI (2026-08-15, foydalanuvchi so'rovi):
   Darslar, Testlar, Yangi savol, Bot haqida + til tanlash.

   ⚠️ "🌐 Til / Язык" yorlig'i IKKALA tilda ham BIR XIL — ataylab.
   Foydalanuvchi tilni almashtirmoqchi bo'lganda odatda joriy tilni
   tushunmayotgan bo'ladi; ikki tilli yorliq qaysi holatda ham
   tanib olinadi va tugma matni o'zgarmagani uchun eski klaviaturada
   ham ishlayveradi.

   Oldingi olti kategoriya tugmasi ("💼 Mehnat huquqi", "👨‍👩‍👧 Oila
   huquqi" va h.k.) OLIB TASHLANDI: ular hech qanday amal bajarmasdi,
   faqat "savolingizni yozing" degan eslatma qaytarardi — ya'ni
   menyuning yarmi bo'sh ish qilardi va asosiy tugmalarni ko'zdan
   yashirardi.

   ⚠️ Eski klaviatura foydalanuvchi chatida saqlanib qolishi mumkin.
   Endi u tugmalar oddiy matn sifatida AI'ga ketadi (huquqiy savol
   deb qabul qilinadi) va javob bilan birga YANGI menyu keladi, ya'ni
   klaviatura birinchi xabardayoq o'z-o'zidan almashadi. */
function mainMenu(userId) {
  const lang = getLang(userId);
  const labels = {
    uz: [
      ["📚 Darslar", "📝 Testlar"],
      ["🔄 Yangi savol", "ℹ️ Bot haqida"],
      ["🌐 Til / Язык"],
    ],
    ru: [
      ["📚 Уроки", "📝 Тесты"],
      ["🔄 Новый вопрос", "ℹ️ О боте"],
      ["🌐 Til / Язык"],
    ],
  };
  return {
    reply_markup: {
      keyboard: labels[lang] || labels.uz,
      resize_keyboard: true,
    },
  };
}

function registerKeyboard(lang) {
  const url = `${SITE_URL}/register`;
  const labels = {
    uz: `✅ Bepul ro'yxatdan o'tish →`,
    ru: `✅ Зарегистрироваться бесплатно →`,
    en: `✅ Register for free →`,
  };
  return {
    reply_markup: {
      inline_keyboard: [
        [{ text: labels[lang] || labels.uz, url }],
        [{ text: "🌐 Sayt haqida ko'proq", url: SITE_URL }],
      ],
    },
  };
}

const langKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [{ text: "🇺🇿 O'zbek", callback_data: "lang_uz" }],
      [{ text: "🇷🇺 Русский", callback_data: "lang_ru" }],
    ],
  },
};

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function getSession(userId) {
  if (!sessions.has(userId)) {
    sessions.set(userId, {
      messages: [],
      sessionId: `tg_${userId}_${Date.now()}`,
    });
  }
  return sessions.get(userId);
}

async function safeSend(chatId, text, options = {}) {
  try {
    return await bot.sendMessage(chatId, text, {
      parse_mode: "HTML",
      ...options,
    });
  } catch (err) {
    if (err.response?.body?.error_code === 403) {
      console.log(`🚫 User blocked bot: ${chatId}`);
      return;
    }
    // 1-urinish: HTML teglarisiz (noto'g'ri teg xabarni bloklashi mumkin)
    try {
      return await bot.sendMessage(
        chatId,
        text.replace(/<[^>]*>/g, ""),
        options,
      );
    } catch (err2) {
      /* 2-urinish: TUGMALARSIZ.
         ⚠️ Bu shart edi: Telegram juda katta `reply_markup` ni rad
         etadi ("Bad Request: reply markup is too long") va yuqoridagi
         ikkala urinish ham AYNAN o'sha klaviaturani qayta yuborardi —
         natijada foydalanuvchi HECH QANDAY javob ko'rmasdi, xato esa
         faqat serverda qolardi. Endi hech bo'lmasa matn yetib boradi. */
      try {
        return await bot.sendMessage(chatId, text.replace(/<[^>]*>/g, ""));
      } catch {
        console.error(
          "Telegram send error:",
          err.response?.body?.description || err.message,
        );
      }
    }
  }
}

async function sendNotRegistered(chatId, tgUserId) {
  const lang = getLang(tgUserId);
  await safeSend(
    chatId,
    (tg[lang] || tg.uz).not_registered,
    registerKeyboard(lang),
  );
}

// ─────────────────────────────────────────────────────────────
// OVOZLI XABARNI YUKLAB OLISH VA MATNGA O'GIRISH (STT)
// ─────────────────────────────────────────────────────────────
async function downloadTelegramFile(fileId, ext) {
  const fileInfo = await bot.getFile(fileId);
  const fileUrl = `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${fileInfo.file_path}`;
  let realExt = path.extname(fileInfo.file_path) || ext || ".ogg";
  // Telegram voice xabarlari .oga kengaytmasida keladi, lekin bu aslida OGG/Opus format.
  // Groq Whisper API .oga kengaytmasini tanimaydi — shuning uchun .ogg ga almashtiramiz.
  if (realExt.toLowerCase() === ".oga") realExt = ".ogg";
  const tmpPath = path.join(
    os.tmpdir(),
    `tg_voice_${Date.now()}_${Math.random().toString(36).slice(2)}${realExt}`,
  );

  const buffer = await new Promise((resolve, reject) => {
    https
      .get(fileUrl, (res) => {
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });

  fs.writeFileSync(tmpPath, buffer);
  return tmpPath;
}

async function transcribeVoiceMessage(msg, lang) {
  const media = msg.voice || msg.audio;
  if (!media) return null;

  let tmpPath = null;
  try {
    tmpPath = await downloadTelegramFile(media.file_id, ".ogg");
    const sttLang = ["uz", "ru"].includes(lang) ? lang : undefined;
    const { text } = await speechToText(tmpPath, sttLang);
    return text?.trim() || null;
  } catch (err) {
    console.error("Ovozni matnga o'girish xatosi:", err.message);
    return null;
  } finally {
    if (tmpPath) fs.unlink(tmpPath, () => {});
  }
}

// ─────────────────────────────────────────────────────────────
// DARSLAR VA TESTLAR MODULI
// ─────────────────────────────────────────────────────────────
/* Bot endi shunchaki AI maslahatchi emas — saytdagi Darslar va
   Testlar bo'limlari ham shu yerda ishlaydi. Progress IKKALASIDA
   BIR XIL joyda saqlanadi (`LessonProgress` kolleksiyasi), shuning
   uchun Telegramda tugatilgan dars saytda ham tugallangan bo'ladi. */
const learning = registerLearning({
  bot,
  safeSend,
  getLang,
  findOrLinkUser,
  sendNotRegistered,
  SITE_URL: SITE_URL.replace(/\/+$/, ""),
});

// AI javobi ostidagi "🔊 Eshitish" tugmasi
const voiceReply = registerVoiceReply({ bot, safeSend });

// ─────────────────────────────────────────────────────────────
// DEEP LINK: /start link_<token>  — AVVAL ro'yxatdan o'tish
// ─────────────────────────────────────────────────────────────
bot.onText(/\/start link_([a-f0-9]+)/, async (msg, match) => {
  const tgUserId = msg.from.id;
  const tgUsername = msg.from.username || null;
  const chatId = msg.chat.id;
  const token = match[1];

  // Saqlangan til bo'lsa o'sha, bo'lmasa standart o'zbekcha
  if (!(await loadLang(tgUserId))) userLang.set(tgUserId, "uz");

  const lang = getLang(tgUserId);
  const T = tg[lang] || tg.uz;

  try {
    // Allaqachon bog'langanmi?
    const existing = await User.findOne({ telegramId: String(tgUserId) });
    if (existing) {
      verifiedUsers.set(String(tgUserId), existing._id);
      sessions.delete(tgUserId);
      return safeSend(chatId, T.already_linked, mainMenu(tgUserId));
    }

    const user = await User.findOne({
      otpCode: `tglink_${token}`,
      otpExpires: { $gt: new Date() },
    });

    if (!user) {
      return safeSend(
        chatId,
        `❌ Havola muddati tugagan yoki noto'g'ri.\n\nSaytga kirib qayta bog'lash havolasini oling: ${SITE_URL}/profile`,
      );
    }

    const conflict = await User.findOne({
      telegramId: String(tgUserId),
      _id: { $ne: user._id },
    });
    if (conflict) {
      return safeSend(
        chatId,
        "⚠️ Bu Telegram hisob allaqachon boshqa akkountga bog'langan.",
      );
    }

    user.telegramId = String(tgUserId);
    user.telegramUsername = tgUsername;
    user.telegramVerified = true;
    user.otpCode = null;
    user.otpExpires = null;
    await user.save();

    verifiedUsers.set(String(tgUserId), user._id);
    sessions.delete(tgUserId);

    await safeSend(chatId, T.linked, mainMenu(tgUserId));
  } catch (err) {
    console.error("Deep link error:", err.message);
    await safeSend(chatId, "❌ Xatolik yuz berdi. Qayta urinib ko'ring.");
  }
});

// ─────────────────────────────────────────────────────────────
// /start
// ─────────────────────────────────────────────────────────────
bot.onText(/^\/start$/, async (msg) => {
  const tgUserId = msg.from.id;
  const chatId = msg.chat.id;
  const tgUsername = msg.from.username || null;
  sessions.delete(tgUserId);

  // Til avval tanlanganmi? (bazadan ham tekshiriladi)
  if (!(await loadLang(tgUserId))) {
    await safeSend(chatId, tg.uz.lang_choose, langKeyboard);
    return;
  }

  const userId = await findOrLinkUser(tgUserId, tgUsername);
  if (!userId) {
    await sendNotRegistered(chatId, tgUserId);
    return;
  }
  await safeSend(chatId, tr(tgUserId).welcome, mainMenu(tgUserId));
});

// ─────────────────────────────────────────────────────────────
// /yangi, /help, /lang
// ─────────────────────────────────────────────────────────────
bot.onText(/\/yangi/, async (msg) => {
  const tgUserId = msg.from.id;
  const chatId = msg.chat.id;
  const userId = await findOrLinkUser(tgUserId, msg.from.username);
  if (!userId) {
    await sendNotRegistered(chatId, tgUserId);
    return;
  }
  sessions.delete(tgUserId);
  await safeSend(chatId, tr(tgUserId).new_ready, mainMenu(tgUserId));
});

bot.onText(/\/help/, async (msg) => {
  await loadLang(msg.from.id);
  await safeSend(msg.chat.id, tr(msg.from.id).help);
});
bot.onText(/\/lang/, async (msg) => {
  await safeSend(msg.chat.id, tg.uz.lang_choose, langKeyboard);
});

// ─────────────────────────────────────────────────────────────
// TIL CALLBACK
// ─────────────────────────────────────────────────────────────
bot.on("callback_query", async (query) => {
  const tgUserId = query.from.id;
  const data = query.data;
  const chatId = query.message.chat.id;

  /* ⚠️ Til AVVAL yuklanadi: darslar/testlar moduli `getLang` ni
     sinxron chaqiradi, ya'ni kesh bo'sh bo'lsa (server yangi ishga
     tushgan) foydalanuvchi ruscha tanlagan bo'lsa ham javob
     o'zbekcha kelib qolardi. */
  await loadLang(tgUserId);

  // Darslar/testlar tugmalari — o'sha modul o'zi ishlaydi va `true`
  // qaytaradi; til tugmalari esa quyida ishlanadi.
  if (await learning.handleCallback(query)) return;

  // "🔊 Eshitish" tugmasi — xuddi shu naqsh bo'yicha
  if (await voiceReply.handleCallback(query)) return;

  // `lang_en` ATAYLAB yo'q — ingliz tili loyihadan olib tashlangan
  const langMap = { lang_uz: "uz", lang_ru: "ru" };
  if (!langMap[data]) return;

  const lang = langMap[data];
  await bot.answerCallbackQuery(query.id);

  const userId = await findOrLinkUser(tgUserId, query.from.username);
  /* Til KESHGA ham, BAZAGA ham yoziladi — hisob bog'langandan
     KEYIN, aks holda yangi bog'langan foydalanuvchining tanlovi
     bazaga yetib bormasdi (yozuv hali topilmasdi). */
  setLang(tgUserId, lang);
  await safeSend(chatId, tg[lang].lang_set);

  if (!userId) return sendNotRegistered(chatId, tgUserId);
  /* Pastdagi menyu AYNAN shu xabar bilan yangi tilga almashadi —
     `mainMenu` endi tanlangan tildagi yorliqlarni beradi. */
  return safeSend(chatId, tg[lang].welcome, mainMenu(tgUserId));
});

// ─────────────────────────────────────────────────────────────
// MESSAGES — asosiy AI handler
// ─────────────────────────────────────────────────────────────
bot.on("message", async (msg) => {
  if (!msg.text && !msg.photo && !msg.document && !msg.voice && !msg.audio)
    return;
  if (msg.text?.startsWith("/")) return;

  const chatId = msg.chat.id;
  const tgUserId = msg.from.id;
  const tgUsername = msg.from.username || null;

  /* Til AVVAL yuklanadi (keshda bo'lmasa bazadan) — quyidagi
     `tr`/`getLang` sinxron va ular tayyor keshga tayanadi. */
  await loadLang(tgUserId);

  /* Til tanlash tugmasi — hamma narsadan OLDIN tekshiriladi:
     u AI'ga savol sifatida ketmasligi va limitni sarflamasligi
     kerak. Yorliq ikkala tilda bir xil. */
  if (msg.text && ["🌐 Til / Язык", "🌐 Til", "🌐 Язык"].includes(msg.text.trim())) {
    return safeSend(chatId, tg.uz.lang_choose, langKeyboard);
  }

  const T = tr(tgUserId);
  const lang = getLang(tgUserId);

  // Ovozli xabar (voice/audio) bo'lsa — avval matnga o'giramiz
  let voiceText = null;
  if (msg.voice || msg.audio) {
    const listeningMsg = await safeSend(chatId, T.voice_processing);
    voiceText = await transcribeVoiceMessage(msg, lang);
    if (listeningMsg?.message_id)
      await bot.deleteMessage(chatId, listeningMsg.message_id).catch(() => {});

    if (!voiceText) {
      return safeSend(chatId, T.voice_error, mainMenu(tgUserId));
    }
    await safeSend(chatId, `${T.voice_recognized} <i>${voiceText}</i>`);
  }

  /* "📚 Darslar" / "📝 Testlar" tugmalari — AI'ga YUBORILMAYDI.
     Aks holda ular oddiy savol sifatida modelga ketib, limitni
     behuda sarflardi va "huquqiy savol emas" javobi qaytardi. */
  if (await learning.handleMessage(msg)) return;

  const text =
    voiceText ||
    msg.text ||
    msg.caption ||
    "Ushbu rasmni tahlil qilib, huquqiy maslahat bering.";

  // Navigation tugmalari
  if (["🔄 Yangi savol", "🔄 Новый вопрос", "🔄 New question"].includes(text)) {
    const userId = await findOrLinkUser(tgUserId, tgUsername);
    if (!userId) return sendNotRegistered(chatId, tgUserId);
    sessions.delete(tgUserId);
    return safeSend(chatId, T.new_prompt, mainMenu(tgUserId));
  }
  if (["ℹ️ Bot haqida", "ℹ️ О боте", "ℹ️ About bot"].includes(text)) {
    return safeSend(chatId, T.about, mainMenu(tgUserId));
  }

  // Ro'yxatdan o'tganmi?
  const userId = await findOrLinkUser(tgUserId, tgUsername);
  if (!userId) return sendNotRegistered(chatId, tgUserId);

  // Limit tekshiruvi
  const limitResult = await checkAndIncrement(userId);
  if (limitResult) {
    const timeLeft =
      limitResult.timeLeft?.[lang] || limitResult.timeLeft?.uz || "24 soat";
    const unblockStr =
      limitResult.unblockAtStr?.[lang] || limitResult.unblockAtStr?.uz || "";
    const limitMsgs = {
      uz: `⏳ <b>Kunlik limitingiz tugadi</b>\n\n📊 Bugun: <b>${limitResult.limit} ta</b> savol ishlatildi\n🔒 Ochilishi: <b>${unblockStr}</b> (${timeLeft} qoldi)\n\n🌐 <a href="${SITE_URL}">Ko'proq ma'lumot</a>`,
      ru: `⏳ <b>Дневной лимит исчерпан</b>\n\n📊 Сегодня: <b>${limitResult.limit}</b> вопросов использовано\n🔒 Откроется: <b>${unblockStr}</b> (осталось ${timeLeft})\n\n🌐 <a href="${SITE_URL}">Подробнее</a>`,
      en: `⏳ <b>Daily limit reached</b>\n\n📊 Today: <b>${limitResult.limit}</b> questions used\n🔒 Opens: <b>${unblockStr}</b> (${timeLeft} left)\n\n🌐 <a href="${SITE_URL}">More info</a>`,
    };
    return safeSend(
      chatId,
      limitMsgs[lang] || limitMsgs.uz,
      mainMenu(tgUserId),
    );
  }

  const loader = await safeSend(chatId, T.analyzing);
  const sess = getSession(tgUserId);

  // Rasm yuklash
  let imageBase64 = null;
  let imageMimeType = "image/jpeg";
  try {
    if (msg.photo && msg.photo.length > 0) {
      const photoId = msg.photo[msg.photo.length - 1].file_id;
      const fileInfo = await bot.getFile(photoId);
      const fileUrl = `https://api.telegram.org/file/bot${process.env.TELEGRAM_BOT_TOKEN}/${fileInfo.file_path}`;
      imageBase64 = await new Promise((resolve, reject) => {
        https.get(fileUrl, (res) => {
          const chunks = [];
          res.on("data", (c) => chunks.push(c));
          res.on("end", () =>
            resolve(Buffer.concat(chunks).toString("base64")),
          );
          res.on("error", reject);
        });
      });
    }
  } catch (imgErr) {
    console.error("Rasm yuklash xatosi:", imgErr.message);
  }

  try {
    // legalAI.js ga lang + userText beramiz — u alifboni avtomatik aniqlaydi
    const { answer, category } = await getLegalAdvice(
      text,
      sess.messages,
      imageBase64,
      imageMimeType,
      lang,
    );

    const userContent = imageBase64 ? `[📎 Rasm] ${text}` : text;
    sess.messages.push({ role: "user", content: userContent });
    sess.messages.push({ role: "assistant", content: answer });
    if (sess.messages.length > 20) sess.messages = sess.messages.slice(-20);

    // MongoDB
    try {
      let chat = await Chat.findOne({ sessionId: sess.sessionId });
      if (!chat) {
        chat = new Chat({
          sessionId: sess.sessionId,
          userId,
          source: "telegram",
          telegramUserId: String(tgUserId),
          telegramUsername: tgUsername,
          messages: [],
        });
      }
      const tgMsg = { role: "user", content: userContent };
      if (imageBase64) {
        tgMsg.imageData = imageBase64;
        tgMsg.imageMimeType = imageMimeType;
      }
      chat.messages.push(tgMsg);
      chat.messages.push({ role: "assistant", content: answer });
      chat.category = category;
      await chat.save();
    } catch (dbErr) {
      console.error("Mongo save error:", dbErr.message);
    }

    recordStat("telegram", category).catch(() => {});

    if (loader?.message_id)
      await bot.deleteMessage(chatId, loader.message_id).catch(() => {});

    /* Javob ostiga "🔊 Eshitish" tugmasi qo'shiladi.
       ⚠️ Telegram bitta xabarga FAQAT BITTA `reply_markup` beradi, ya'ni
       pastdagi doimiy menyu bilan inline tugmani BIR xabarda birlashtirib
       bo'lmaydi. Shuning uchun tugma faqat OXIRGI bo'lakka qo'yiladi.
       Doimiy menyu bundan yo'qolmaydi — u almashtirilmaguncha yoki
       ataylab o'chirilmaguncha Telegram uni saqlab turadi.

       Til javobning O'ZIDAN aniqlanadi: foydalanuvchi bot tilini
       o'zbekcha qilib qo'yib, savolni ruscha bersa, AI ruscha javob
       beradi va uni rus ovozi o'qishi kerak. */
    const voiceLang = voiceReply.detectLanguage(answer);
    const answerId = voiceReply.remember(answer, voiceLang);

    const chunks = answer.match(/[\s\S]{1,4000}/g) || [];
    for (let i = 0; i < chunks.length; i++) {
      const isLast = i === chunks.length - 1;
      await safeSend(
        chatId,
        chunks[i],
        isLast
          ? voiceReply.listenKeyboard(answerId, voiceLang)
          : mainMenu(tgUserId),
      );
    }
  } catch (err) {
    console.error("Telegram AI error:", err);
    if (loader?.message_id)
      await bot.deleteMessage(chatId, loader.message_id).catch(() => {});
    await safeSend(chatId, T.limit, mainMenu(tgUserId));
  }
});

bot.on("polling_error", (err) => {
  console.error("Telegram polling error:", err.message);
});

module.exports = { bot, verifiedUsers };
