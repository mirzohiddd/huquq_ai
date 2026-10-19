"use strict";
/**
 * /api/admin/ai — AI sozlamalari va xarajatlar (faqat admin).
 *
 *   GET  /settings          — joriy sozlamalar + standartlar + tarif ma'lumoti
 *   PUT  /settings          — saqlash (qiymatlar serverda tozalanadi)
 *   POST /settings/reset    — standartlarga qaytarish
 *   GET  /report?month=     — oylik moliyaviy hisobot (daromad, xarajat, foyda)
 *   GET  /users?month=&page — foydalanuvchilar kesimida sarf
 *   POST /cache/clear       — javob keshini tozalash (model/prompt o'zgarganda)
 */
const router = require("express").Router();
const { adminGuard } = require("../middleware/auth");
const { AiCache } = require("../models/aiBilling");
const { current, saveSettings, resetSettings } = require("../services/aiBilling/settings");
const { DEFAULTS, TIER_IDS } = require("../services/aiBilling/defaults");
const { monthReport, userReport } = require("../services/aiBilling/report");
const { PLANS, getPlanConfig } = require("../config/plans");

router.use(adminGuard);

const adminName = (req) => String(req.authUser?.username || req.authUser?.id || "admin");

function planInfo() {
  return Object.fromEntries(
    TIER_IDS.map((t) => [
      t,
      {
        label: PLANS[t].label,
        priceUzs: PLANS[t].priceUzs,
        baseDailyLimit: PLANS[t].dailyLimit,
        baseVoiceDailyLimit: PLANS[t].voiceDailyLimit,
        effectiveDailyLimit: getPlanConfig(t).dailyLimit,
        effectiveVoiceDailyLimit: getPlanConfig(t).voiceDailyLimit,
      },
    ]),
  );
}

router.get("/settings", (req, res) => {
  res.json({
    settings: current(),
    defaults: DEFAULTS,
    plans: planInfo(),
    openaiConfigured: Boolean(process.env.OPENAI_API_KEY),
  });
});

router.put("/settings", async (req, res) => {
  try {
    const settings = await saveSettings(req.body || {}, adminName(req));
    res.json({ settings, plans: planInfo() });
  } catch (err) {
    console.error("admin ai settings:", err.message);
    res.status(500).json({ error: "Sozlamalarni saqlab bo'lmadi" });
  }
});

router.post("/settings/reset", async (req, res) => {
  try {
    const settings = await resetSettings(adminName(req));
    res.json({ settings, plans: planInfo() });
  } catch (err) {
    console.error("admin ai reset:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

router.get("/report", async (req, res) => {
  try {
    res.json(await monthReport(String(req.query.month || "")));
  } catch (err) {
    console.error("admin ai report:", err.message);
    res.status(500).json({ error: "Hisobotni tayyorlab bo'lmadi" });
  }
});

router.get("/users", async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    res.json(await userReport(String(req.query.month || ""), { page, limit: 25 }));
  } catch (err) {
    console.error("admin ai users:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

router.post("/cache/clear", async (req, res) => {
  try {
    const r = await AiCache.deleteMany({});
    res.json({ deleted: r.deletedCount || 0 });
  } catch (err) {
    res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = router;
