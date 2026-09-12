"use strict";
/**
 * TO'LOV TIZIMI — Click va Payme orqali "Pro" obuna sotib olish.
 *
 * Ishlash tartibi:
 *  1. Foydalanuvchi frontendda "Pro sotib olish" bosadi → POST /checkout
 *     bizning tizimimizda "pending" Payment yozuvi yaratadi va Click/Payme
 *     checkout sahifasiga link qaytaradi.
 *  2. Foydalanuvchi shu link orqali Click/Payme ilovasida to'lov qiladi.
 *  3. Click/Payme O'ZI bizning /click/webhook yoki /payme/webhook
 *     manzilimizga server-to-server so'rov yuboradi (foydalanuvchi
 *     brauzerida emas!) — shu yerda to'lov tasdiqlanadi va
 *     User.plan tegishli tarifga o'rnatiladi.
 *
 * Tariflar (nomi, narxi, kunlik limiti) — config/plans.js da markazlashgan.
 *
 * SOZLASH: quyidagi .env o'zgaruvchilari to'ldirilmaguncha checkout
 * so'rovi aniq xato qaytaradi (sukut bo'yicha ishlamaydi, lekin server
 * qulamaydi):
 *   CLICK_SERVICE_ID, CLICK_MERCHANT_ID, CLICK_SECRET_KEY
 *   PAYME_MERCHANT_ID, PAYME_KEY
 *
 * Rasmiy hujjatlar:
 *   Click:  https://docs.click.uz/click-api-request/
 *   Payme:  https://developer.help.paycom.uz/
 */
const router = require("express").Router();
const crypto = require("crypto");
const { Payment, PaymentStats, User, getUserTier } = require("../models");
const { userGuard } = require("../middleware/auth");
const { PLANS, PLAN_DAYS, isPaidTier, getPlanConfig } = require("../config/plans");

// Admin panelidagi to'lovlar ro'yxati yig'ilib ketmasligi uchun — faqat
// oxirgi shuncha yozuv saqlanadi, eskilari o'chiriladi. DIQQAT: bu FAQAT
// ro'yxatni cheklaydi — jami tushum/soni statistikasi alohida
// PaymentStats hujjatida saqlanadi va bu o'chirishdan ta'sirlanmaydi
// (pastdagi recordPaidStat()).
const MAX_PAYMENT_RECORDS = 30;

async function trimPaymentHistory() {
  const count = await Payment.countDocuments();
  if (count <= MAX_PAYMENT_RECORDS) return;
  const excess = await Payment.find()
    .sort({ createdAt: 1 })
    .limit(count - MAX_PAYMENT_RECORDS)
    .select("_id");
  if (excess.length) {
    await Payment.deleteMany({ _id: { $in: excess.map((p) => p._id) } });
  }
}

// To'lov "paid" holatiga o'tgan sarida chaqiriladi — Payment yozuvining
// o'zi keyinchalik trimPaymentHistory() orqali o'chirilsa ham, jami
// tushum/soni statistikasi shu orqali abadiy saqlanib qoladi.
async function recordPaidStat(amount) {
  await PaymentStats.findOneAndUpdate(
    { key: "global" },
    { $inc: { totalRevenueUzs: amount, paidCount: 1 } },
    { upsert: true },
  );
}

function newMerchantTransId() {
  return "sub_" + crypto.randomBytes(12).toString("hex");
}

// Provayder uchun haqiqiy merchant kalitlari kiritilganmi — kiritilmagan
// bo'lsa checkout TEST rejimida ishlaydi (pastga qarang). Merchant ID
// keyinchalik .env'ga qo'shilishi bilan shu funksiya avtomatik "true"
// qaytara boshlaydi va real to'lov oqimiga o'tadi — kodga qayta tegish
// SHART EMAS.
function isProviderConfigured(provider) {
  if (provider === "click") {
    return !!(process.env.CLICK_SERVICE_ID && process.env.CLICK_MERCHANT_ID && process.env.CLICK_SECRET_KEY);
  }
  if (provider === "payme") {
    return !!(process.env.PAYME_MERCHANT_ID && process.env.PAYME_KEY);
  }
  if (provider === "uzum") {
    return !!(process.env.UZUM_MERCHANT_ID && process.env.UZUM_SECRET_KEY);
  }
  return false;
}

async function activatePlan(userId, tier) {
  const user = await User.findById(userId);
  if (!user) return;
  const now = Date.now();
  const base =
    user.plan === tier && user.planExpiresAt && user.planExpiresAt > now
      ? user.planExpiresAt.getTime()
      : now;
  user.plan = tier;
  user.planExpiresAt = new Date(base + PLAN_DAYS * 24 * 60 * 60 * 1000);
  await user.save();
}

/* ═══════════════════════════════════════════════════════════════
   GET /api/payment/plans — barcha tariflar (Landing Page Pricing uchun)
═══════════════════════════════════════════════════════════════ */
router.get("/plans", async (req, res) => {
  try {
    res.json({
      plans: Object.entries(PLANS).map(([id, cfg]) => ({ id, ...cfg })),
    });
  } catch (err) {
    console.error("payment/plans xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ═══════════════════════════════════════════════════════════════
   GET /api/payment/plan — narx va joriy obuna holati
═══════════════════════════════════════════════════════════════ */
router.get("/plan", userGuard, async (req, res) => {
  try {
    const user = await User.findById(req.authUser.id)
      .select("plan planExpiresAt")
      .lean();
    const tier = getUserTier(user);
    const cfg = getPlanConfig(tier);
    const expiresAt = user?.planExpiresAt || null;

    // Obuna tugashiga necha kun qolgani — Profil oynasi va Header
    // ko'rsatkichi shu qiymatdan foydalanadi.
    let daysLeft = null;
    if (isPaidTier(tier) && expiresAt) {
      const ms = new Date(expiresAt).getTime() - Date.now();
      daysLeft = ms > 0 ? Math.ceil(ms / (24 * 60 * 60 * 1000)) : 0;
    }

    res.json({
      // ── joriy tarif tafsilotlari (Profil oynasi shu qiymatlarni
      //    ko'rsatadi — matn hardcode qilinmaydi, shuning uchun Basic /
      //    Pro / Premium har biri O'Z limitini ko'rsatadi) ──
      plan: tier,
      label: cfg.label,
      dailyLimit: cfg.dailyLimit,
      useClaude: cfg.useClaude,
      // Kontent cheklovlari — Profil oynasi va "qulflangan" xabarlar shu
      // qiymatlarga tayanadi (`null` = cheksiz).
      lessonLimit: cfg.lessonLimit ?? null,
      testLimit: cfg.testLimit ?? null,
      voiceDailyLimit: cfg.voiceDailyLimit,
      priceUzs: cfg.priceUzs,
      planExpiresAt: expiresAt,
      daysLeft,
      days: PLAN_DAYS,
      // Bepul foydalanuvchiga ko'rsatiladigan taklif — narx 0 bo'lib
      // qolmasligi uchun (avval "0 so'm" chiqardi).
      upgrade: isPaidTier(tier)
        ? null
        : { tier: "pro", ...getPlanConfig("pro") },
    });
  } catch (err) {
    console.error("payment/plan xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ═══════════════════════════════════════════════════════════════
   GET /api/payment/history — foydalanuvchining o'z to'lovlari
═══════════════════════════════════════════════════════════════ */
router.get("/history", userGuard, async (req, res) => {
  try {
    const payments = await Payment.find({ userId: req.authUser.id })
      .sort({ createdAt: -1 })
      .select("provider plan amount status createdAt paidAt")
      .lean();
    res.json({ payments });
  } catch (err) {
    console.error("payment/history xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ═══════════════════════════════════════════════════════════════
   POST /api/payment/checkout — { provider: "click"|"payme"|"uzum", tier: "basic"|"pro"|"premium" }
   Pending Payment yaratadi va to'lov sahifasi linkini qaytaradi.

   MUHIM — TEST REJIMI: provayderning haqiqiy merchant kalitlari .env'da
   hali kiritilmagan bo'lsa (isProviderConfigured() false qaytarsa),
   real Click/Payme/Uzum sahifasiga yo'naltirish o'rniga
   { testMode: true, merchantTransId, ... } qaytariladi — frontend shu
   javobga qarab ichki "test to'lov" oynasini ko'rsatadi. Foydalanuvchi
   shu oynada "To'lovni tasdiqlash" bossa /test/confirm chaqiriladi va
   tarif DARHOL, adminsiz avtomatik yoqiladi. Haqiqiy merchant ID'lar
   .env'ga qo'shilishi bilan bu filial avtomatik o'chadi (pastga qarang).
═══════════════════════════════════════════════════════════════ */
router.post("/checkout", userGuard, async (req, res) => {
  try {
    const { provider, tier = "pro" } = req.body || {};
    if (!["click", "payme", "uzum"].includes(provider)) {
      return res.status(400).json({ error: "provider 'click', 'payme' yoki 'uzum' bo'lishi kerak" });
    }
    if (!isPaidTier(tier)) {
      return res.status(400).json({ error: "tier 'basic', 'pro' yoki 'premium' bo'lishi kerak" });
    }

    const merchantTransId = newMerchantTransId();
    const amount = getPlanConfig(tier).priceUzs;

    await Payment.create({
      userId: req.authUser.id,
      provider,
      merchantTransId,
      plan: tier,
      amount,
      status: "pending",
    });
    trimPaymentHistory().catch((e) =>
      console.error("to'lovlar tarixini qisqartirish xato:", e.message),
    );

    if (!isProviderConfigured(provider)) {
      return res.json({
        testMode: true,
        merchantTransId,
        provider,
        tier,
        amount,
        planLabel: getPlanConfig(tier).label,
      });
    }

    const returnUrl = `${process.env.FRONTEND_URL?.split(",")[0] || ""}/?payment=success`;

    if (provider === "click") {
      const serviceId = process.env.CLICK_SERVICE_ID;
      const merchantId = process.env.CLICK_MERCHANT_ID;
      const url =
        `https://my.click.uz/services/pay?service_id=${serviceId}` +
        `&merchant_id=${merchantId}` +
        `&amount=${amount}` +
        `&transaction_param=${merchantTransId}` +
        `&return_url=${encodeURIComponent(returnUrl)}`;
      return res.json({ url, merchantTransId });
    }

    if (provider === "payme") {
      const merchantId = process.env.PAYME_MERCHANT_ID;
      const amountTiyin = amount * 100;
      const params = `m=${merchantId};ac.trans_id=${merchantTransId};a=${amountTiyin};c=${encodeURIComponent(returnUrl)}`;
      const url = `https://checkout.paycom.uz/${Buffer.from(params).toString("base64")}`;
      return res.json({ url, merchantTransId });
    }

    // uzum — hozircha rasmiy checkout hujjatlari integratsiya qilinmagan;
    // isProviderConfigured() UZUM_MERCHANT_ID/UZUM_SECRET_KEY kiritilgach
    // shu yerga real checkout URL qurish logikasi qo'shiladi.
    return res.status(503).json({
      error: "Uzum hali sozlanmagan. UZUM_MERCHANT_ID / UZUM_SECRET_KEY kiriting.",
    });
  } catch (err) {
    console.error("payment/checkout xato:", err.message);
    return res.status(500).json({ error: "Server xatosi" });
  }
});

/* ═══════════════════════════════════════════════════════════════
   POST /api/payment/test/confirm — { merchantTransId }
   Faqat TEST rejimidagi (provayder hali sozlanmagan) to'lovlar uchun.
   Adminning tasdig'isiz, darhol to'lovni "paid" belgilaydi va tarifni
   yoqadi — shu orqali merchant kalitlari kelmagunча xarid oqimini
   to'liq sinab ko'rish mumkin.
═══════════════════════════════════════════════════════════════ */
router.post("/test/confirm", userGuard, async (req, res) => {
  try {
    const { merchantTransId } = req.body || {};
    if (!merchantTransId) {
      return res.status(400).json({ error: "merchantTransId kerak" });
    }
    const payment = await Payment.findOne({
      merchantTransId,
      userId: req.authUser.id,
    });
    if (!payment) {
      return res.status(404).json({ error: "To'lov topilmadi" });
    }
    if (payment.status !== "pending") {
      return res.status(409).json({ error: "Bu to'lov allaqachon yakunlangan" });
    }
    // Xavfsizlik: provayder haqiqatda hali sozlanmagan bo'lsagina test
    // tasdiqlash ishlaydi — real merchant kalitlari qo'shilgach bu yo'l
    // avtomatik yopiladi (endi real webhook orqali tasdiqlanishi kerak).
    if (isProviderConfigured(payment.provider)) {
      return res.status(403).json({
        error: "Bu provayder endi real to'lov rejimida — test tasdiqlash mumkin emas.",
      });
    }

    payment.status = "paid";
    payment.paidAt = new Date();
    payment.providerTransactionId = "TEST-" + crypto.randomBytes(6).toString("hex");
    await payment.save();
    await activatePlan(payment.userId, payment.plan);
    await recordPaidStat(payment.amount);

    res.json({ success: true, plan: payment.plan });
  } catch (err) {
    console.error("payment/test/confirm xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ═══════════════════════════════════════════════════════════════
   POST /api/payment/cancel — joriy tarifni darhol bekor qiladi (Bepulga
   tushiradi). Admin tasdig'i shart emas — foydalanuvchi o'zi hohlagan
   vaqtda o'chira oladi. MUHIM: to'langan pul qaytarilmaydi va qolgan
   kunlar bekor qilinadi — bu haqda ogohlantirish FRONTENDDA ko'rsatiladi
   (bu endpoint shartsiz bajaradi, chunki foydalanuvchi allaqachon
   ogohlantirishni ko'rib tasdiqlagan bo'ladi).
═══════════════════════════════════════════════════════════════ */
router.post("/cancel", userGuard, async (req, res) => {
  try {
    const user = await User.findById(req.authUser.id);
    if (!user) return res.status(404).json({ error: "Foydalanuvchi topilmadi" });
    if (!isPaidTier(user.plan)) {
      return res.status(400).json({ error: "Sizda faol pullik tarif yo'q" });
    }
    user.plan = "free";
    user.planExpiresAt = null;
    await user.save();
    res.json({ success: true, plan: "free" });
  } catch (err) {
    console.error("payment/cancel xato:", err.message);
    res.status(500).json({ error: "Server xatosi" });
  }
});

/* ═══════════════════════════════════════════════════════════════
   CLICK WEBHOOK — https://docs.click.uz/click-api-request/
   Bitta endpoint, action=0 (Prepare) va action=1 (Complete) uchun.
═══════════════════════════════════════════════════════════════ */
const CLICK_ERROR = {
  SUCCESS: 0,
  SIGN_FAILED: -1,
  AMOUNT_MISMATCH: -2,
  ACTION_NOT_FOUND: -3,
  ALREADY_PAID: -4,
  USER_NOT_FOUND: -5,
  TRANSACTION_NOT_FOUND: -6,
  BAD_REQUEST: -8,
  TRANSACTION_CANCELLED: -9,
};

function clickSign(params, secretKey) {
  const {
    click_trans_id,
    service_id,
    merchant_trans_id,
    merchant_prepare_id,
    amount,
    action,
    sign_time,
  } = params;
  const parts =
    action === "1" || action === 1
      ? [click_trans_id, service_id, secretKey, merchant_trans_id, merchant_prepare_id, amount, action, sign_time]
      : [click_trans_id, service_id, secretKey, merchant_trans_id, amount, action, sign_time];
  return crypto.createHash("md5").update(parts.join("")).digest("hex");
}

router.post("/click/webhook", async (req, res) => {
  const p = req.body || {};
  const secretKey = process.env.CLICK_SECRET_KEY;

  const base = {
    click_trans_id: p.click_trans_id,
    merchant_trans_id: p.merchant_trans_id,
  };

  if (!secretKey) {
    return res.json({ ...base, error: CLICK_ERROR.BAD_REQUEST, error_note: "Server sozlanmagan" });
  }

  const expectedSign = clickSign(p, secretKey);
  if (expectedSign !== p.sign_string) {
    return res.json({ ...base, error: CLICK_ERROR.SIGN_FAILED, error_note: "Imzo mos emas" });
  }

  const payment = await Payment.findOne({ merchantTransId: p.merchant_trans_id });
  if (!payment) {
    return res.json({ ...base, error: CLICK_ERROR.TRANSACTION_NOT_FOUND, error_note: "Tranzaksiya topilmadi" });
  }
  if (payment.status === "cancelled") {
    return res.json({ ...base, error: CLICK_ERROR.TRANSACTION_CANCELLED, error_note: "Tranzaksiya bekor qilingan" });
  }
  if (Number(p.amount) !== payment.amount) {
    return res.json({ ...base, error: CLICK_ERROR.AMOUNT_MISMATCH, error_note: "Summa mos emas" });
  }

  payment.rawEvents.push(p);

  if (String(p.action) === "0") {
    // PREPARE
    if (payment.status === "paid") {
      return res.json({ ...base, error: CLICK_ERROR.ALREADY_PAID, error_note: "Allaqachon to'langan" });
    }
    payment.providerTransactionId = String(p.click_trans_id);
    await payment.save();
    return res.json({
      ...base,
      merchant_prepare_id: payment._id.toString(),
      error: CLICK_ERROR.SUCCESS,
      error_note: "OK",
    });
  }

  if (String(p.action) === "1") {
    // COMPLETE
    if (Number(p.error) < 0) {
      payment.status = "failed";
      await payment.save();
      return res.json({ ...base, error: CLICK_ERROR.SUCCESS, error_note: "OK" });
    }
    if (payment.status !== "paid") {
      payment.status = "paid";
      payment.paidAt = new Date();
      await payment.save();
      await activatePlan(payment.userId, payment.plan);
      await recordPaidStat(payment.amount);
    }
    return res.json({
      ...base,
      merchant_confirm_id: payment._id.toString(),
      error: CLICK_ERROR.SUCCESS,
      error_note: "OK",
    });
  }

  return res.json({ ...base, error: CLICK_ERROR.ACTION_NOT_FOUND, error_note: "action noto'g'ri" });
});

/* ═══════════════════════════════════════════════════════════════
   PAYME WEBHOOK — https://developer.help.paycom.uz/
   JSON-RPC 2.0, bitta endpoint, bir nechta method.
   Merchant kabinetida "account" maydoni nomi trans_id deb sozlanadi.
═══════════════════════════════════════════════════════════════ */
const PAYME_ERROR = {
  INVALID_AMOUNT: -31001,
  TRANSACTION_NOT_FOUND: -31003,
  UNABLE_TO_PERFORM: -31008,
  ACCOUNT_NOT_FOUND: -31050,
  UNAUTHORIZED: -32504,
};

function paymeAuthOk(req) {
  const key = process.env.PAYME_KEY;
  if (!key) return false;
  const header = req.headers.authorization || "";
  if (!header.startsWith("Basic ")) return false;
  const decoded = Buffer.from(header.slice(6), "base64").toString("utf8");
  return decoded === `Paycom:${key}`;
}

function paymeRpcError(id, code, message) {
  return {
    jsonrpc: "2.0",
    id,
    error: { code, message: { uz: message, ru: message, en: message } },
  };
}

router.post("/payme/webhook", async (req, res) => {
  const { method, params = {}, id } = req.body || {};

  if (!paymeAuthOk(req)) {
    return res.json(paymeRpcError(id, PAYME_ERROR.UNAUTHORIZED, "Avtorizatsiya xato"));
  }

  const merchantTransId = params.account?.trans_id;

  try {
    switch (method) {
      case "CheckPerformTransaction": {
        const payment = await Payment.findOne({ merchantTransId });
        if (!payment) {
          return res.json(paymeRpcError(id, PAYME_ERROR.ACCOUNT_NOT_FOUND, "Tranzaksiya topilmadi"));
        }
        if (Number(params.amount) !== payment.amount * 100) {
          return res.json(paymeRpcError(id, PAYME_ERROR.INVALID_AMOUNT, "Summa mos emas"));
        }
        return res.json({ jsonrpc: "2.0", id, result: { allow: true } });
      }

      case "CreateTransaction": {
        const payment = await Payment.findOne({ merchantTransId });
        if (!payment) {
          return res.json(paymeRpcError(id, PAYME_ERROR.ACCOUNT_NOT_FOUND, "Tranzaksiya topilmadi"));
        }
        if (Number(params.amount) !== payment.amount * 100) {
          return res.json(paymeRpcError(id, PAYME_ERROR.INVALID_AMOUNT, "Summa mos emas"));
        }
        if (payment.status === "cancelled") {
          return res.json(paymeRpcError(id, PAYME_ERROR.UNABLE_TO_PERFORM, "Bekor qilingan"));
        }
        if (!payment.providerTransactionId) {
          payment.providerTransactionId = params.id;
          payment.rawEvents.push({ method, params });
          await payment.save();
        }
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            create_time: payment.createdAt.getTime(),
            transaction: payment._id.toString(),
            state: 1,
          },
        });
      }

      case "PerformTransaction": {
        const payment = await Payment.findOne({ providerTransactionId: params.id });
        if (!payment) {
          return res.json(paymeRpcError(id, PAYME_ERROR.TRANSACTION_NOT_FOUND, "Topilmadi"));
        }
        if (payment.status !== "paid") {
          payment.status = "paid";
          payment.paidAt = new Date();
          payment.rawEvents.push({ method, params });
          await payment.save();
          await activatePlan(payment.userId, payment.plan);
          await recordPaidStat(payment.amount);
        }
        return res.json({
          jsonrpc: "2.0",
          id,
          result: { transaction: payment._id.toString(), perform_time: payment.paidAt.getTime(), state: 2 },
        });
      }

      case "CancelTransaction": {
        const payment = await Payment.findOne({ providerTransactionId: params.id });
        if (!payment) {
          return res.json(paymeRpcError(id, PAYME_ERROR.TRANSACTION_NOT_FOUND, "Topilmadi"));
        }
        payment.status = "cancelled";
        payment.cancelledAt = new Date();
        payment.rawEvents.push({ method, params });
        await payment.save();
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            transaction: payment._id.toString(),
            cancel_time: payment.cancelledAt.getTime(),
            state: -1,
          },
        });
      }

      case "CheckTransaction": {
        const payment = await Payment.findOne({ providerTransactionId: params.id });
        if (!payment) {
          return res.json(paymeRpcError(id, PAYME_ERROR.TRANSACTION_NOT_FOUND, "Topilmadi"));
        }
        const stateMap = { pending: 1, paid: 2, cancelled: -1, failed: -1 };
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            create_time: payment.createdAt.getTime(),
            perform_time: payment.paidAt ? payment.paidAt.getTime() : 0,
            cancel_time: payment.cancelledAt ? payment.cancelledAt.getTime() : 0,
            transaction: payment._id.toString(),
            state: stateMap[payment.status] ?? 1,
            reason: null,
          },
        });
      }

      case "GetStatement": {
        const from = new Date(params.from);
        const to = new Date(params.to);
        const payments = await Payment.find({
          provider: "payme",
          createdAt: { $gte: from, $lte: to },
        }).lean();
        return res.json({
          jsonrpc: "2.0",
          id,
          result: {
            transactions: payments.map((p) => ({
              id: p.providerTransactionId,
              time: p.createdAt.getTime(),
              amount: p.amount * 100,
              account: { trans_id: p.merchantTransId },
              create_time: p.createdAt.getTime(),
              perform_time: p.paidAt ? p.paidAt.getTime() : 0,
              cancel_time: p.cancelledAt ? p.cancelledAt.getTime() : 0,
              transaction: p._id.toString(),
              state: { pending: 1, paid: 2, cancelled: -1, failed: -1 }[p.status] ?? 1,
              reason: null,
            })),
          },
        });
      }

      default:
        return res.json(paymeRpcError(id, -32601, "Method topilmadi"));
    }
  } catch (err) {
    console.error("payme webhook xato:", err.message);
    return res.json(paymeRpcError(id, -32400, "Server xatosi"));
  }
});

module.exports = router;
