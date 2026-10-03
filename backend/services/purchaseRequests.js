"use strict";
/**
 * BUYURTMA YARATISH — sayt (`routes/orders.js`) va bot
 * (`telegram/plans.js`) uchun YAGONA mantiq. Ikki joyda alohida
 * yozilsa, birida tekshiruv o'zgarib, ikkinchisida eskisicha qolardi.
 */
const { User } = require("../models");
const { PurchaseRequest } = require("../models/purchaseRequest");
const { getPlanConfig, isPaidTier } = require("../config/plans");
const { normalizePhone, formatPhone, cleanName } = require("../utils/phone");
const { notifyAdmins, esc } = require("./adminNotify");

// Bir foydalanuvchi bir tarifga ketma-ket bosaversa admin xabarlar
// bilan to'lib ketmasin — shu oraliqda takroriy buyurtma yaratilmaydi.
const DUPLICATE_WINDOW_MS = 30 * 60 * 1000;

const SOURCE_LABEL = { web: "🌐 Sayt", telegram: "🤖 Telegram bot" };

function adminText(r, user) {
  const plan = getPlanConfig(r.tier);
  const tgLine = r.telegramUsername
    ? `@${esc(r.telegramUsername)}`
    : r.telegramId
      ? `<a href="tg://user?id=${esc(r.telegramId)}">profilni ochish</a>`
      : "—";
  return [
    "🛒 <b>Yangi buyurtma!</b>",
    "",
    `💎 Tarif: <b>${esc(plan.label)}</b> — ${Number(r.priceUzs).toLocaleString("ru-RU")} so'm/oy`,
    `👤 Mijoz: <b>${esc(`${r.firstName} ${r.lastName}`.trim() || "—")}</b>`,
    `📞 Telefon: <code>${esc(formatPhone(r.phone))}</code>`,
    `✈️ Telegram: ${tgLine}`,
    user?.email ? `📧 Email: ${esc(user.email)}` : null,
    user?.username ? `🆔 Login: ${esc(user.username)}` : null,
    `📍 Manba: ${SOURCE_LABEL[r.source] || r.source}`,
    r.note ? `💬 Izoh: ${esc(r.note)}` : null,
    "",
    "👉 Mijozga shu raqam orqali Telegram'da yozing.",
  ]
    .filter((x) => x !== null)
    .join("\n");
}

/** Raqam bo'yicha Telegram chatini ochadigan tugma (t.me/+998...) */
function adminKeyboard(r) {
  const row = [{ text: "💬 Telegram'da yozish", url: `https://t.me/${r.phone}` }];
  if (r.telegramUsername) {
    row[0] = { text: "💬 Telegram'da yozish", url: `https://t.me/${r.telegramUsername}` };
  }
  return { inline_keyboard: [row] };
}

/**
 * @returns {Promise<{ok:true, request, duplicate?:boolean} | {ok:false, status:number, error:string, field?:string}>}
 */
async function createPurchaseRequest({
  userId,
  tier,
  firstName,
  lastName,
  phone,
  telegramUsername = "",
  telegramId = "",
  source = "web",
  note = "",
}) {
  if (!isPaidTier(tier)) return { ok: false, status: 400, error: "Tarif noto'g'ri" };
  const fn = cleanName(firstName);
  const ln = cleanName(lastName);
  const ph = normalizePhone(phone);
  if (!fn) return { ok: false, status: 400, field: "firstName", error: "Ismingizni to'g'ri kiriting" };
  // Telegram'da familiya ko'pincha yo'q — u yerda raqam Telegram tasdiqlagan
  if (!ln && source !== "telegram")
    return { ok: false, status: 400, field: "lastName", error: "Familiyangizni to'g'ri kiriting" };
  if (!ph) return { ok: false, status: 400, field: "phone", error: "Telefon raqamini to'g'ri kiriting (masalan: +998 90 123 45 67)" };

  const user = userId ? await User.findById(userId) : null;

  if (user) {
    const recent = await PurchaseRequest.findOne({
      userId: user._id,
      tier,
      status: "new",
      createdAt: { $gt: new Date(Date.now() - DUPLICATE_WINDOW_MS) },
    });
    if (recent) return { ok: true, request: recent, duplicate: true };

    // Profilda yo'q bo'lsa — kiritilgan ma'lumot saqlanadi (keyingi
    // safar so'ralmasligi va admin panelda ko'rinishi uchun)
    let dirty = false;
    if (!user.firstName) (user.firstName = fn), (dirty = true);
    if (!user.lastName) (user.lastName = ln), (dirty = true);
    if (!user.phone) (user.phone = ph), (dirty = true);
    if (!user.fullName) (user.fullName = `${fn} ${ln}`), (dirty = true);
    if (dirty) await user.save();
  }

  const request = await PurchaseRequest.create({
    userId: user?._id || null,
    tier,
    priceUzs: getPlanConfig(tier).priceUzs,
    firstName: fn,
    lastName: ln,
    phone: ph,
    telegramUsername: String(telegramUsername || user?.telegramUsername || "")
      .replace(/^@/, "")
      .slice(0, 64),
    telegramId: String(telegramId || user?.telegramId || ""),
    source,
    note: String(note || "").trim().slice(0, 500),
  });

  const notified = await notifyAdmins(adminText(request, user), adminKeyboard(request)).catch(
    () => false,
  );
  if (notified) {
    request.notified = true;
    await request.save().catch(() => {});
  }
  return { ok: true, request };
}

module.exports = { createPurchaseRequest, adminText };
