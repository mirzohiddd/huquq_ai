"use strict";
/**
 * FOYDALANUVCHI SHARHLARI (2026-10-14).
 *
 * Landing Page'dagi "Foydalanuvchilar fikri" bo'limi endi namunaviy
 * matn emas, HAQIQIY foydalanuvchi sharhlarini ko'rsatadi. Har bir sharh
 * `pending` holatida yaratiladi va FAQAT admin `approved` qilganda saytda
 * chiqadi. Bitta hisob — bitta sharh (`userId` unique): qayta yuborilsa
 * o'sha sharh yangilanadi va yana moderatsiyaga tushadi.
 */
const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    name: { type: String, trim: true, required: true, maxlength: 60 },
    role: { type: String, trim: true, default: "", maxlength: 40 },
    text: { type: String, trim: true, required: true, maxlength: 600 },
    rating: { type: Number, min: 1, max: 5, default: 5 },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
      index: true,
    },
    adminComment: { type: String, trim: true, default: "", maxlength: 300 },
    approvedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

module.exports = {
  Review: mongoose.models.Review || mongoose.model("Review", ReviewSchema),
};
