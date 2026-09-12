"use strict";
/**
 * TARIF KONTEKSTI — foydalanuvchining joriy tarifi va uning imkoniyatlarini
 * so'rovga biriktiradi.
 *
 * Nima uchun alohida middleware: darslar, testlar va boshqa kontent
 * marshrutlari bir xil ishni qilardi (User'ni o'qish → tier → config).
 * Bir joyda saqlanganda tarif qoidalari bitta nuqtadan boshqariladi va
 * yangi marshrut qo'shilganda cheklovni ULANISHNI unutish xavfi kamayadi.
 */
const { User, getUserTier } = require("../models");
const { getPlanConfig, isWithinLimit, nextTierFor } = require("../config/plans");

/**
 * Foydalanuvchining joriy tarifi va uning konfiguratsiyasi.
 * ⚠️ HTTP dan mustaqil (req/res kerak emas) — shu sabab uni Telegram
 * boti ham ishlatadi. Bot bevosita bazadan o'qigani uchun, agar bu
 * funksiya bo'lmasa, u yerda cheklov TAKRORLANARDI va ikkalasi
 * vaqt o'tib bir-biridan uzilib qolardi.
 */
async function planOfUser(userId) {
  if (!userId) return { tier: "free", config: getPlanConfig("free") };
  const user = await User.findById(userId).select("plan planExpiresAt").lean();
  const tier = getUserTier(user);
  return { tier, config: getPlanConfig(tier) };
}

/**
 * `req.planTier` va `req.planConfig` ni to'ldiradi.
 * Login qilinmagan bo'lsa — "free" (marshrutlar `userGuard` bilan
 * himoyalangan, lekin bu yerda ham xavfsiz standart bo'lishi kerak).
 */
async function attachPlan(req, res, next) {
  try {
    const { tier, config } = await planOfUser(req.authUser?.id);
    req.planTier = tier;
    req.planConfig = config;
  } catch (err) {
    /* Baza bilan muammo bo'lsa kontent OCHILMAYDI, lekin so'rov ham
       yiqilmaydi — eng xavfsiz standart "free". */
    console.error("attachPlan xato:", err.message);
    req.planTier = "free";
    req.planConfig = getPlanConfig("free");
  }
  next();
}

/**
 * Qulflangan kontent uchun yagona javob shakli.
 * Frontend `locked` bayrog'iga qarab "tarifni oching" oynasini ko'rsatadi.
 */
function lockedResponse(res, kind, currentTier = "free") {
  return res.status(403).json({
    locked: true,
    kind, // "lesson" | "test"
    // Joriy tarifdan YUQORIDAGI tarif (aks holda Basic egasiga yana
    // Basic taklif qilinardi) — batafsil izoh `config/plans.js` da
    requiresPlan: nextTierFor(kind, currentTier),
    error:
      kind === "test"
        ? "Bu test yuqoriroq tarifda ochiladi."
        : "Bu dars yuqoriroq tarifda ochiladi.",
  });
}

/**
 * Ro'yxatdagi ochiq (qulflanmagan) elementlarning ID to'plamini qaytaradi.
 * Tartib RO'YXAT bilan BIR XIL bo'lishi shart — aks holda foydalanuvchiga
 * ochiq ko'ringan dars ochilmay qolardi.
 *
 * @param {import("mongoose").Model} Model  Lesson yoki Quiz
 * @param {number|null} limit               tarifdagi cheklov
 */
async function allowedIds(Model, limit) {
  if (limit === null || limit === undefined) return null; // cheksiz
  const docs = await Model.find({ published: true })
    .sort({ order: 1, createdAt: 1 })
    .limit(limit)
    .select("_id")
    .lean();
  return new Set(docs.map((d) => String(d._id)));
}

module.exports = {
  attachPlan,
  planOfUser,
  lockedResponse,
  allowedIds,
  isWithinLimit,
};
