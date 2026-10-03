"use strict";
/**
 * ADMINGA TELEGRAM XABARI — yangi buyurtma va shu kabi hodisalar.
 *
 * Kimga: `ADMIN_TELEGRAM_IDS` (.env) — vergul bilan ajratilgan chat ID
 * yoki kanal nomlari: "123456789,987654321" yoki "@huquq_buyurtmalar".
 * O'z ID'ingizni bilish uchun botga /myid yozing.
 *
 * ⚠️ Telegram HTTP API'si TO'G'RIDAN-TO'G'RI chaqiriladi (bot obyekti
 * emas): bot polling'i boshqa serverda ishlayotgan bo'lsa ham yoki
 * `telegram-bot.js` hali yuklanmagan bo'lsa ham xabar ketaveradi.
 * Xato hech qachon tashqariga otilmaydi — buyurtma baribir bazada
 * saqlanadi va admin panelda ko'rinadi.
 */
const https = require("https");

function adminChatIds() {
  return String(process.env.ADMIN_TELEGRAM_IDS || "")
    .split(/[,\s]+/)
    .map((x) => x.trim())
    .filter(Boolean);
}

function esc(s) {
  return String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function sendRaw(chatId, text, replyMarkup) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) return Promise.resolve(false);
  const body = JSON.stringify({
    chat_id: chatId,
    text,
    parse_mode: "HTML",
    disable_web_page_preview: true,
    ...(replyMarkup ? { reply_markup: replyMarkup } : {}),
  });
  return new Promise((resolve) => {
    const req = https.request(
      {
        hostname: "api.telegram.org",
        path: `/bot${token}/sendMessage`,
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": Buffer.byteLength(body),
        },
        timeout: 10000,
      },
      (res) => {
        let raw = "";
        res.on("data", (c) => (raw += c));
        res.on("end", () => {
          let ok = false;
          try {
            ok = !!JSON.parse(raw).ok;
          } catch {
            /* javob JSON emas */
          }
          if (!ok) console.error(`adminNotify (${chatId}) xato:`, raw.slice(0, 200));
          resolve(ok);
        });
      },
    );
    req.on("timeout", () => req.destroy(new Error("timeout")));
    req.on("error", (e) => {
      console.error("adminNotify tarmoq xatosi:", e.message);
      resolve(false);
    });
    req.end(body);
  });
}

/**
 * Barcha adminlarga yuboradi.
 * @returns {Promise<boolean>} kamida bittasiga yetib borgan bo'lsa `true`
 */
async function notifyAdmins(text, replyMarkup) {
  const ids = adminChatIds();
  if (!ids.length) {
    console.warn("⚠️ ADMIN_TELEGRAM_IDS sozlanmagan — admin xabari yuborilmadi");
    return false;
  }
  const results = await Promise.all(ids.map((id) => sendRaw(id, text, replyMarkup)));
  return results.some(Boolean);
}

module.exports = { notifyAdmins, adminChatIds, esc };
