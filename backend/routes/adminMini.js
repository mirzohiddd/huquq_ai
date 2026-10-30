"use strict";
/**
 * ADMIN — TELEGRAM MINI ILOVA ANALITIKASI (2026-10-30).
 *   GET /api/admin/mini/devices?days=30 — takrorsiz qurilmalar: jami, o'ynagan,
 *   faol (1/7/30 kun), platforma/OS bo'yicha, kunlik yangi qurilmalar, oxirgilari.
 * Har kirish emas, har QURILMA bir marta sanaladi (services/miniApp/devices.js).
 */
const router = require("express").Router();
const { adminGuard } = require("../middleware/auth");
const devices = require("../services/miniApp/devices");

router.get("/devices", adminGuard, async (req, res) => {
  try {
    const days = [7, 30, 90].includes(Number(req.query.days)) ? Number(req.query.days) : 30;
    res.json(await devices.report(days));
  } catch (err) {
    console.error("admin mini devices:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
