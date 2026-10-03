"use strict";
/**
 * BOT KO'RINISHI — menyular, xavfsiz yuborish va formatlash.
 *
 * ⚠️ ASOSIY "G'ALATI DIZAYN" SABABI (2026-10-03): AI javobi Markdown'da
 * (`**qalin**`, `_kursiv_`) yoziladi, bot esa `parse_mode: HTML` bilan
 * yuborardi — foydalanuvchi yulduzchalarni XOM holda ko'rardi. Endi
 * `mdToHtml` javobni Telegram HTML'iga o'giradi, bo'lish esa paragraf
 * chegarasida qilinadi (teg o'rtasidan kesilib, formatlash yo'qolmasin).
 */

const MENU = {
  uz: {
    lessons: "📚 Darslar",
    tests: "📝 Testlar",
    plans: "💎 Tariflar",
    account: "👤 Hisobim",
    new: "🔄 Yangi savol",
    help: "ℹ️ Yordam",
  },
  ru: {
    lessons: "📚 Уроки",
    tests: "📝 Тесты",
    plans: "💎 Тарифы",
    account: "👤 Мой аккаунт",
    new: "🔄 Новый вопрос",
    help: "ℹ️ Помощь",
  },
};
// Ikki tilda BIR XIL — tilni tushunmagan odam ham taniydi
const LANG_BTN = "🌐 Til / Язык";

/** Bosilgan menyu tugmasi qaysi amal? (eski yorliqlar ham taniladi) */
const LEGACY = {
  "ℹ️ Bot haqida": "help",
  "ℹ️ О боте": "help",
  "ℹ️ About bot": "help",
  "🔄 New question": "new",
  "🌐 Til": "lang",
  "🌐 Язык": "lang",
};
function menuAction(text) {
  const t = String(text || "").trim();
  if (!t) return null;
  if (t === LANG_BTN) return "lang";
  for (const lang of Object.keys(MENU)) {
    for (const [action, label] of Object.entries(MENU[lang])) if (label === t) return action;
  }
  return LEGACY[t] || null;
}

function mainMenu(lang) {
  const m = MENU[lang] || MENU.uz;
  return {
    reply_markup: {
      keyboard: [
        [m.lessons, m.tests],
        [m.plans, m.account],
        [m.new, m.help],
        [LANG_BTN],
      ],
      resize_keyboard: true,
      is_persistent: true,
    },
  };
}

/** Hisob ulanmagan foydalanuvchi uchun — faqat kontakt tugmasi */
function contactMenu(T) {
  return {
    reply_markup: {
      keyboard: [[{ text: T.btn_contact, request_contact: true }], [LANG_BTN]],
      resize_keyboard: true,
      is_persistent: true,
    },
  };
}

const langKeyboard = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: "🇺🇿 O'zbekcha", callback_data: "lang_uz" },
        { text: "🇷🇺 Русский", callback_data: "lang_ru" },
      ],
    ],
  },
};

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** AI javobidagi Markdown → Telegram HTML (faqat Telegram qo'llaydigan teglar) */
function mdToHtml(md) {
  return esc(md)
    .split("\n")
    .map((line) => {
      let l = line;
      const h = /^\s*#{1,6}\s+(.+?)\s*#*\s*$/.exec(l);
      if (h) return `<b>${h[1].replace(/\*\*/g, "")}</b>`;
      l = l.replace(/^(\s*)[-*]\s+/, "$1• ");
      l = l.replace(/^\s*&gt;\s?/, "▎ ");
      l = l.replace(/\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2">$1</a>');
      l = l.replace(/\*\*([^*\n]+?)\*\*/g, "<b>$1</b>");
      l = l.replace(/__([^_\n]+?)__/g, "<b>$1</b>");
      l = l.replace(/(^|[\s(«"])_([^_\n]+?)_(?=$|[\s.,;:!?)»"])/g, "$1<i>$2</i>");
      l = l.replace(/`([^`\n]+)`/g, "<code>$1</code>");
      return l;
    })
    .join("\n");
}

/** Uzun matnni paragraf (yoki qator) chegarasida bo'ladi */
function splitMessage(text, max = 3800) {
  const out = [];
  let cur = "";
  const push = () => {
    if (cur.trim()) out.push(cur.trim());
    cur = "";
  };
  for (const para of String(text).split(/\n{2,}/)) {
    const pieces = para.length > max ? para.match(new RegExp(`[\\s\\S]{1,${max}}`, "g")) : [para];
    for (const p of pieces) {
      if (cur && cur.length + p.length + 2 > max) push();
      cur = cur ? `${cur}\n\n${p}` : p;
    }
  }
  push();
  return out.length ? out : [""];
}

/** Xabar yuborish — HTML xatosi yoki katta klaviatura bo'lsa ham matn yetib boradi */
function makeSafeSend(bot) {
  return async function safeSend(chatId, text, options = {}) {
    try {
      return await bot.sendMessage(chatId, text, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        ...options,
      });
    } catch (err) {
      if (err.response?.body?.error_code === 403) return null; // botni bloklagan
      const plain = String(text)
        .replace(/<[^>]*>/g, "")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&");
      const { parse_mode: _pm, ...rest } = options; // eslint-disable-line no-unused-vars
      try {
        return await bot.sendMessage(chatId, plain, rest);
      } catch {
        try {
          return await bot.sendMessage(chatId, plain);
        } catch (err3) {
          console.error("Telegram send error:", err3.response?.body?.description || err3.message);
          return null;
        }
      }
    }
  };
}

module.exports = {
  MENU,
  LANG_BTN,
  menuAction,
  mainMenu,
  contactMenu,
  langKeyboard,
  esc,
  mdToHtml,
  splitMessage,
  makeSafeSend,
};
