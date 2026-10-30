"use strict";
/**
 * TELEGRAM MINI APP — tarif buyurtmasi (`POST /api/mini/order`).
 *
 * Tariflar ro'yxati va onlayn to'lov saytning o'z endpointlaridan olinadi
 * (`/api/payment/plans`, `/checkout`) — narx va limitlar bitta joyda
 * (`config/plans.js`). Bu yerda faqat bir bosishda buyurtma: ism, telefon va
 * Telegram ID foydalanuvchining bot orqali ochilgan hisobidan olinadi, admin
 * esa saytdagi buyurtmalar kabi xabar oladi (manba — «Telegram bot»).
 * Shu yerda: `GET /hearts`, `POST /hearts/buy` — yurakchalar (services/miniApp/hearts.js).
 */
const router = require("express").Router();
const { userGuard } = require("../middleware/auth");
const { User } = require("../models");
const { createPurchaseRequest } = require("../services/purchaseRequests");
const hearts = require("../services/miniApp/hearts");

router.post("/order", userGuard, async (req, res) => {
  try {
    const user = await User.findById(req.authUser.id).select("firstName lastName phone telegramId username").lean();
    if (!user) return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    const b = req.body || {};
    const result = await createPurchaseRequest({
      userId: user._id,
      tier: b.tier,
      firstName: user.firstName || user.username || "Foydalanuvchi",
      lastName: user.lastName || "",
      phone: b.phone || user.phone,
      telegramUsername: b.telegramUsername || "",
      telegramId: user.telegramId || "",
      source: "telegram",
      note: "Mini ilova",
    });
    if (!result.ok) return res.status(result.status).json({ error: result.error, field: result.field });
    res.status(result.duplicate ? 200 : 201).json({ ok: true, duplicate: !!result.duplicate, tier: result.request.tier });
  } catch (err) {
    console.error("mini order:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* Yurakchalar: holat va XP evaziga to'ldirish (1 ta — 10 XP, hammasi — 40 XP) */
router.get("/hearts", userGuard, async (req, res) => {
  try {
    res.json({ hearts: await hearts.current(req.authUser.id) });
  } catch (err) {
    console.error("mini hearts:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

router.post("/hearts/buy", userGuard, async (req, res) => {
  try {
    const r = await hearts.buy(req.authUser.id, req.body?.kind === "all" ? "all" : "one");
    res.status(r.ok ? 200 : 400).json(r);
  } catch (err) {
    console.error("mini hearts buy:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
