"use strict";
/**
 * Sayt analitikasi (2026-10-15).
 *   POST /api/analytics/hit          — sahifa ochildi (frontend `utils/analytics.js`)
 *   POST /api/analytics/leave        — sahifa yopildi (sendBeacon, text/plain)
 *   GET  /api/analytics/admin/report — admin "Analitika" sahifasi (?days=7|30|90)
 *
 * Yozish xatolari foydalanuvchiga hech qachon ta'sir qilmaydi: javob
 * doim 204, xato faqat logga yoziladi.
 */
const express = require("express");
const router = express.Router();
const { optionalUserGuard, adminGuard } = require("../middleware/auth");
const { recordHit, recordLeave } = require("../services/analytics/track");
const { buildReport } = require("../services/analytics/report");

router.post("/hit", optionalUserGuard, async (req, res) => {
  res.status(204).end();
  recordHit(req, req.body || {}).catch((e) => console.warn("analytics hit:", e.message));
});

// sendBeacon `text/plain` yuboradi — preflight'siz o'tishi uchun
router.post("/leave", express.text({ type: "*/*", limit: "2kb" }), (req, res) => {
  res.status(204).end();
  let body = {};
  try {
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
  } catch {
    return;
  }
  recordLeave(req, body).catch((e) => console.warn("analytics leave:", e.message));
});

router.get("/admin/report", adminGuard, async (req, res) => {
  try {
    res.json(await buildReport(req.query.days));
  } catch (err) {
    console.error("analytics report:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
