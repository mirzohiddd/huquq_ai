"use strict";
/**
 * BUYURTMALAR (tarif sotib olish so'rovlari) — 2026-10-03.
 *
 *   POST  /api/orders              — foydalanuvchi "Sotib olish" bosganda
 *   GET   /api/orders/mine         — o'z buyurtmalari (oxirgi 10 ta)
 *   GET   /api/admin/orders        — admin: ro'yxat (holat filtri, sahifalash)
 *   PATCH /api/admin/orders/:id    — admin: holat / izoh
 *
 * Admin marshrutlari shu faylda (`adminRouter`) — mantiq bir joyda tursin.
 */
const express = require("express");
const { userGuard, adminGuard } = require("../middleware/auth");
const { PurchaseRequest } = require("../models/purchaseRequest");
const { createPurchaseRequest } = require("../services/purchaseRequests");
const { adminChatIds } = require("../services/adminNotify");

const router = express.Router();
const adminRouter = express.Router();

router.post("/", userGuard, async (req, res) => {
  try {
    const b = req.body || {};
    const result = await createPurchaseRequest({
      userId: req.authUser.id,
      tier: b.tier,
      firstName: b.firstName,
      lastName: b.lastName,
      phone: b.phone,
      telegramUsername: b.telegramUsername,
      note: b.note,
      source: "web",
    });
    if (!result.ok) {
      return res.status(result.status).json({ error: result.error, field: result.field });
    }
    const r = result.request;
    return res.status(result.duplicate ? 200 : 201).json({
      ok: true,
      duplicate: !!result.duplicate,
      order: { id: r._id, tier: r.tier, status: r.status, phone: r.phone, createdAt: r.createdAt },
    });
  } catch (err) {
    console.error("orders create xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

router.get("/mine", userGuard, async (req, res) => {
  try {
    const orders = await PurchaseRequest.find({ userId: req.authUser.id })
      .sort({ createdAt: -1 })
      .limit(10)
      .select("tier priceUzs status createdAt")
      .lean();
    return res.json({ orders });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

const STATUSES = ["new", "contacted", "done", "cancelled"];

adminRouter.get("/", adminGuard, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 25);
    const filter = {};
    if (STATUSES.includes(req.query.status)) filter.status = req.query.status;
    const search = String(req.query.search || "").trim().slice(0, 50);
    if (search) {
      const rx = { $regex: search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), $options: "i" };
      filter.$or = [{ firstName: rx }, { lastName: rx }, { phone: rx }, { telegramUsername: rx }];
    }
    const [total, orders, newCount] = await Promise.all([
      PurchaseRequest.countDocuments(filter),
      PurchaseRequest.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("userId", "username email plan")
        .lean(),
      PurchaseRequest.countDocuments({ status: "new" }),
    ]);
    return res.json({
      orders,
      total,
      page,
      pages: Math.max(1, Math.ceil(total / limit)),
      newCount,
      notifyConfigured: adminChatIds().length > 0 && !!process.env.TELEGRAM_BOT_TOKEN,
    });
  } catch (err) {
    console.error("admin orders xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

adminRouter.patch("/:id", adminGuard, async (req, res) => {
  try {
    const update = {};
    if (req.body?.status !== undefined) {
      if (!STATUSES.includes(req.body.status)) {
        return res.status(400).json({ error: "Holat noto'g'ri" });
      }
      update.status = req.body.status;
    }
    if (req.body?.adminComment !== undefined) {
      update.adminComment = String(req.body.adminComment).trim().slice(0, 500);
    }
    const order = await PurchaseRequest.findByIdAndUpdate(req.params.id, update, {
      new: true,
    }).lean();
    if (!order) return res.status(404).json({ error: "Buyurtma topilmadi" });
    return res.json({ order });
  } catch (err) {
    console.error("admin orders patch xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = { router, adminRouter };
