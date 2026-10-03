"use strict";
/**
 * BUYURTMA (tarif sotib olish so'rovi) — 2026-10-03.
 *
 * Foydalanuvchi saytdagi Narxlar bo'limida yoki botdagi "💎 Tariflar"da
 * "Sotib olish"ni bosganda yaratiladi. Shu zahoti adminga Telegram
 * xabari ketadi (`services/adminNotify.js`), admin esa mijozga
 * ko'rsatilgan raqam orqali Telegram'da yozadi va to'lovni qabul qiladi.
 *
 * Nima uchun alohida kolleksiya (Payment emas): Payment — provayder
 * (Click/Payme) tranzaksiyasi va u faqat oxirgi 30 tasini saqlaydi.
 * Buyurtma esa SAVDO jarayoni: "yangi → bog'lanildi → yakunlandi".
 * Ikkalasini aralashtirish to'lov statistikasini buzardi.
 */
const mongoose = require("mongoose");

const PurchaseRequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },
    tier: { type: String, enum: ["basic", "pro", "premium"], required: true },
    priceUzs: { type: Number, default: 0 },
    firstName: { type: String, trim: true, default: "" },
    lastName: { type: String, trim: true, default: "" },
    phone: { type: String, trim: true, required: true },
    telegramUsername: { type: String, trim: true, default: "" },
    telegramId: { type: String, default: "" },
    source: { type: String, enum: ["web", "telegram"], default: "web" },
    note: { type: String, trim: true, default: "" },
    status: {
      type: String,
      enum: ["new", "contacted", "done", "cancelled"],
      default: "new",
      index: true,
    },
    // Adminga Telegram xabari yetib bordimi (sozlanmagan bo'lsa — false)
    notified: { type: Boolean, default: false },
    adminComment: { type: String, trim: true, default: "" },
  },
  { timestamps: true },
);

module.exports = {
  PurchaseRequest:
    mongoose.models.PurchaseRequest ||
    mongoose.model("PurchaseRequest", PurchaseRequestSchema),
};
