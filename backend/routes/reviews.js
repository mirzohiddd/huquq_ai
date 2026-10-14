"use strict";
/**
 * FOYDALANUVCHI SHARHLARI (2026-10-14).
 *
 *   GET    /api/reviews              — saytdagi tasdiqlangan sharhlar (ochiq)
 *   GET    /api/reviews/mine         — o'z sharhi va uning holati
 *   POST   /api/reviews              — sharh yuborish / tahrirlash → pending
 *   GET    /api/admin/reviews        — admin: ro'yxat (holat filtri)
 *   PATCH  /api/admin/reviews/:id    — admin: tasdiqlash / rad etish
 *   DELETE /api/admin/reviews/:id    — admin: o'chirish
 *
 * ⚠️ Saytda FAQAT `approved` sharh chiqadi. Foydalanuvchi sharhini
 * tahrirlasa u yana `pending` ga tushadi — aks holda tasdiqlangan
 * sharhni keyin istalgan matnga almashtirib, moderatsiyani chetlab
 * o'tish mumkin bo'lardi.
 */
const express = require("express");
const { userGuard, adminGuard } = require("../middleware/auth");
const { Review } = require("../models/review");
const { User } = require("../models");

const router = express.Router();
const adminRouter = express.Router();

const STATUSES = ["pending", "approved", "rejected"];
const PUBLIC_LIMIT = 12;

// Ochiq ro'yxat keshi — bosh sahifa har ochilishda bazaga bormasin
let cache = { at: 0, data: null };
const CACHE_MS = 60 * 1000;
const dropCache = () => (cache = { at: 0, data: null });

const clean = (v, max) => String(v || "").replace(/\s+/g, " ").trim().slice(0, max);

// Maxfiylik: familiya to'liq ko'rsatilmaydi — "Dilnoza R."
function displayName(u) {
  const first = clean(u.firstName, 30);
  const last = clean(u.lastName, 30);
  if (first) return last ? `${first} ${last[0].toUpperCase()}.` : first;
  const full = clean(u.fullName, 40);
  if (full) return full;
  return clean(u.username, 30) || "Foydalanuvchi";
}

router.get("/", async (_req, res) => {
  try {
    if (!cache.data || Date.now() - cache.at > CACHE_MS) {
      const [reviews, stats] = await Promise.all([
        Review.find({ status: "approved" })
          .sort({ approvedAt: -1, createdAt: -1 })
          .limit(PUBLIC_LIMIT)
          .select("name role text rating createdAt -_id")
          .lean(),
        Review.aggregate([
          { $match: { status: "approved" } },
          { $group: { _id: null, count: { $sum: 1 }, avg: { $avg: "$rating" } } },
        ]),
      ]);
      cache = {
        at: Date.now(),
        data: {
          reviews,
          count: stats[0]?.count || 0,
          average: stats[0] ? Math.round(stats[0].avg * 10) / 10 : 0,
        },
      };
    }
    res.set("Cache-Control", "public, max-age=60");
    return res.json(cache.data);
  } catch (err) {
    console.error("reviews list xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

router.get("/mine", userGuard, async (req, res) => {
  try {
    const review = await Review.findOne({ userId: req.authUser.id })
      .select("role text rating status adminComment updatedAt")
      .lean();
    return res.json({ review });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

router.post("/", userGuard, async (req, res) => {
  try {
    const text = clean(req.body?.text, 600);
    const role = clean(req.body?.role, 40);
    const rating = Math.round(Number(req.body?.rating));
    if (text.length < 20) {
      return res.status(400).json({ error: "Sharh kamida 20 ta belgidan iborat bo'lsin", field: "text" });
    }
    if (!(rating >= 1 && rating <= 5)) {
      return res.status(400).json({ error: "Bahoni tanlang (1–5)", field: "rating" });
    }
    const user = await User.findById(req.authUser.id)
      .select("firstName lastName fullName username isBlocked")
      .lean();
    if (!user || user.isBlocked) return res.status(403).json({ error: "Ruxsat yo'q" });

    const review = await Review.findOneAndUpdate(
      { userId: user._id },
      {
        name: displayName(user),
        role,
        text,
        rating,
        status: "pending",
        adminComment: "",
        approvedAt: null,
      },
      { new: true, upsert: true, setDefaultsOnInsert: true },
    ).lean();
    dropCache(); // tahrirlangan sharh saytdan darhol olinsin
    return res.status(201).json({
      ok: true,
      review: { role: review.role, text: review.text, rating: review.rating, status: review.status },
    });
  } catch (err) {
    console.error("reviews create xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

adminRouter.get("/", adminGuard, async (req, res) => {
  try {
    const page = Math.max(1, parseInt(req.query.page) || 1);
    const limit = Math.min(50, parseInt(req.query.limit) || 25);
    const filter = STATUSES.includes(req.query.status) ? { status: req.query.status } : {};
    const [total, reviews, pendingCount] = await Promise.all([
      Review.countDocuments(filter),
      Review.find(filter)
        .sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(limit)
        .populate("userId", "username email phone plan")
        .lean(),
      Review.countDocuments({ status: "pending" }),
    ]);
    return res.json({ reviews, total, page, pages: Math.max(1, Math.ceil(total / limit)), pendingCount });
  } catch (err) {
    console.error("admin reviews xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

adminRouter.patch("/:id", adminGuard, async (req, res) => {
  try {
    const status = req.body?.status;
    if (!STATUSES.includes(status)) return res.status(400).json({ error: "Holat noto'g'ri" });
    const update = { status, approvedAt: status === "approved" ? new Date() : null };
    if (req.body?.adminComment !== undefined) update.adminComment = clean(req.body.adminComment, 300);
    const review = await Review.findByIdAndUpdate(req.params.id, update, { new: true })
      .populate("userId", "username email phone plan")
      .lean();
    if (!review) return res.status(404).json({ error: "Sharh topilmadi" });
    dropCache();
    return res.json({ review });
  } catch (err) {
    console.error("admin reviews patch xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

adminRouter.delete("/:id", adminGuard, async (req, res) => {
  try {
    const r = await Review.findByIdAndDelete(req.params.id);
    if (!r) return res.status(404).json({ error: "Sharh topilmadi" });
    dropCache();
    return res.json({ ok: true });
  } catch {
    return res.status(500).json({ error: "Server xatosi" });
  }
});

module.exports = { router, adminRouter };
