"use strict";

// BUG FIX: Render'ning bepul (free) tarifi 2025-yil sentabridan beri
// tashqi SMTP portlariga (25, 465, 587) chiquvchi trafikni to'liq
// bloklab qo'ygan (https://render.com/changelog — "Free web services
// will no longer allow outbound traffic to SMTP ports"). Shu sababli
// nodemailer + smtp-relay.brevo.com:587 orqali email yuborish
// backend'da doimo ETIMEDOUT/ECONNREFUSED xatosi bilan tugab,
// ro'yxatdan o'tishda "Tasdiqlash kodi yuborilmadi" xatoligini
// berardi (bu Render'ning cheklovi, kodda xato emas edi).
//
// Yechim: Brevo'ning SMTP'i o'rniga oddiy HTTPS (443-port) orqali
// ishlaydigan HTTP API'sidan foydalanamiz — bu port bloklanmagan.
// Buning uchun BREVO_API_KEY muhit o'zgaruvchisi kerak bo'ladi
// (Brevo SMTP kaliti — "xsmtpsib-..." — bu yerda ISHLAMAYDI!).
//
// API kalitni olish:
//   1. https://app.brevo.com ga kiring
//   2. Settings (⚙) → SMTP & API → API Keys bo'limiga o'ting
//   3. "Generate a new API key" tugmasini bosing (u "xkeysib-..." bilan boshlanadi)
//   4. Render'da backend service → Environment → shu qiymatni
//      BREVO_API_KEY nomi bilan qo'shing va serverni qayta deploy qiling
//
// Eslatma: jo'natuvchi email (hozir acd052001@smtp-brevo.com) Brevo
// akkauntingizda "Senders" bo'limida tasdiqlangan bo'lishi shart —
// aks holda API ham xatolik qaytaradi.

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
// Brevo akkaunt ochilganda shu "@smtp-brevo.com" manzil avtomatik
// tasdiqlangan (verified) holda beriladi — Senders bo'limida qo'lda
// tasdiqlash shart emas. Shu sababli bu eng ishonchli zaxira (fallback)
// jo'natuvchi hisoblanadi.
const DEFAULT_SENDER_EMAIL = "acd052001@smtp-brevo.com";
const SENDER_EMAIL = process.env.BREVO_SENDER_EMAIL || DEFAULT_SENDER_EMAIL;
const SENDER_NAME = "Mening Huquqim";

/* ⚠️ `Math.random()` kriptografik jihatdan xavfsiz EMAS — uning holatini
   bir nechta chiqishdan tiklab, keyingi kodlarni oldindan aytish mumkin.
   Tasdiqlash kodi uchun faqat `crypto.randomInt` ishlatiladi. */
function generateOTP() {
  return String(require("crypto").randomInt(100000, 1000000));
}

async function sendViaBrevoApiOnce({
  toEmail,
  subject,
  html,
  text,
  senderEmail,
}) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error(
      "BREVO_API_KEY o'rnatilmagan! Brevo dashboard'dan API kalit oling va Render environment'ga BREVO_API_KEY nomi bilan qo'shing.",
    );
    const err = new Error("Email xizmati sozlanmagan (BREVO_API_KEY yo'q)");
    // Bu foydalanuvchining email manzili bilan bog'liq emas — server
    // sozlamasi muammosi. Chaqiruvchi shu belgiga qarab to'g'ri xabar
    // ko'rsatadi (foydalanuvchini "emailingiz noto'g'ri" deb ayblamaydi).
    err.configIssue = true;
    throw err;
  }

  const controller = new AbortController();
  // 15s ichida javob kelmasa so'rovni bekor qilamiz — bu ham
  // frontend'ning 60s timeout'idan ancha kam, shuning uchun
  // foydalanuvchi hech qachon "vaqt tugadi" xatoligini ko'rmaydi,
  // aniq xabar oladi.
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  let response;
  try {
    response = await fetch(BREVO_API_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: SENDER_NAME, email: senderEmail },
        to: [{ email: toEmail }],
        subject,
        htmlContent: html,
        textContent: text,
      }),
      signal: controller.signal,
    });
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("Email yuborish vaqti tugadi (Brevo API javob bermadi)");
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }

  if (!response.ok) {
    let bodyText = "";
    try {
      bodyText = await response.text();
    } catch {
      /* ignore */
    }
    // Ko'zdan qochmasligi uchun ajratib yozamiz — Render loglarida
    // "BREVO XATOSI" deb qidirish kifoya.
    console.error(
      "\n══════════ BREVO XATOSI ══════════\n" +
        `  status     : ${response.status}\n` +
        `  jo'natuvchi: ${senderEmail}\n` +
        `  qabul qiluvchi: ${toEmail}\n` +
        `  javob      : ${bodyText.slice(0, 300)}\n` +
        "══════════════════════════════════",
    );

    // Brevo javobidan aniq sabab (code/message)ni ajratib olamiz — shunda
    // admin panelda shunchaki "403" o'rniga "sender not valid" yoki
    // "unauthorized: not verified" kabi aniq sabab ko'rinadi va Brevo
    // dashboard'ga kirmasdan turib nima xato ekani darrov ma'lum bo'ladi.
    let detail = "";
    try {
      const parsed = JSON.parse(bodyText);
      detail = parsed.message || parsed.code || "";
    } catch {
      detail = bodyText ? bodyText.slice(0, 200) : "";
    }

    const err = new Error(
      `Brevo API xatosi: ${response.status}${detail ? " — " + detail : ""}`,
    );
    err.brevoStatus = response.status;
    err.brevoBody = bodyText;
    // 401/403 — API kalit, tasdiqlanmagan jo'natuvchi yoki "Authorised IPs"
    // cheklovi; 5xx — Brevo tomonidagi nosozlik. Bularning HECH BIRI
    // foydalanuvchi kiritgan manzilning aybi emas.
    err.configIssue =
      response.status === 401 || response.status === 403 || response.status >= 500;

    // Eng ko'p uchraydigan (va tashqaridan tushunarsiz) holat — IP cheklovi.
    // Serverni ishlatayotgan odam nima qilishni darrov bilishi uchun aniq
    // ko'rsatma yozamiz.
    if (response.status === 401 && /IP address/i.test(bodyText)) {
      console.error(
        "❗ Brevo akkauntida \"Authorised IPs\" cheklovi yoqilgan va shu " +
          "server IP'siga ruxsat berilmagan — SHU SABAB tasdiqlash kodlari " +
          "yuborilmayapti. Yechim: https://app.brevo.com/security/authorised_ips " +
          "→ cheklovni o'chiring yoki yuqoridagi IP manzilga ruxsat bering.",
      );
    }
    throw err;
  }

  const data = await response.json().catch(() => ({}));
  return data;
}

// BUG FIX: agar BREVO_SENDER_EMAIL .env'da standart smtp-brevo.com
// manzilidan boshqa (masalan, shaxsiy Gmail) manzilga o'zgartirilgan
// bo'lsa-yu, u Brevo akkauntida "Senders" bo'limida tasdiqlanmagan
// bo'lsa — Brevo har bir so'rovga 401/403 bilan javob beradi va
// admin panelda "Brevo API xatosi: 403" ko'rinadi (parolning o'zi
// baribir muvaffaqiyatli yangilanadi, faqat xabar email'i ketmaydi).
//
// Yechim: sozlangan (custom) jo'natuvchi bilan 401/403 xatosi chiqsa,
// avtomatik ravishda Brevo tomonidan oldindan tasdiqlangan standart
// manzil (DEFAULT_SENDER_EMAIL) bilan bir marta qayta urinib ko'ramiz —
// shunda email baribir yetib boradi. Doimiy yechim uchun baribir
// pastdagi eslatmaga qarang: BREVO_SENDER_EMAIL manzilini Brevo
// akkauntida tasdiqlash (yoki shu env o'zgaruvchini o'chirib,
// standart manzilga qaytarish) tavsiya etiladi.
// Aniqlangan ishchi jo'natuvchi manzil (keshlanadi).
let cachedSender = null;
let cachedSenderAt = 0;
const SENDER_CACHE_MS = 10 * 60 * 1000;

/**
 * HAQIQATDA ishlaydigan jo'natuvchi manzilni aniqlaydi.
 *
 * MUAMMO: avval ikkita manzil qattiq yozib qo'yilgan edi — sozlangan
 * BREVO_SENDER_EMAIL va zaxira sifatida `acd052001@smtp-brevo.com`.
 * Ikkinchisi loyiha birinchi sozlangandagi Brevo akkauntiga tegishli.
 * Agar API kaliti BOSHQA akkauntniki bo'lsa (yoki sozlangan manzil
 * tasdiqlanmagan bo'lsa), ikkala urinish ham rad etiladi va xat HECH
 * QACHON ketmaydi — foydalanuvchi esa faqat "email xizmati ishlamayapti"
 * degan umumiy xabarni ko'radi.
 *
 * YECHIM: akkauntning O'ZIDAN tasdiqlangan jo'natuvchilar ro'yxatini
 * so'raymiz va shundan foydalanamiz. Har bir Brevo akkauntida kamida
 * bitta avtomatik tasdiqlangan `@smtp-brevo.com` manzil bo'ladi, ya'ni
 * bu deyarli har doim ishlaydigan manzil topib beradi.
 */
async function resolveSender({ force = false } = {}) {
  if (!force && cachedSender && Date.now() - cachedSenderAt < SENDER_CACHE_MS) {
    return cachedSender;
  }

  const { verified, list } = await checkSender();

  let chosen = SENDER_EMAIL;
  if (verified === true) {
    chosen = SENDER_EMAIL; // sozlangan manzil tasdiqlangan — o'shani ishlatamiz
  } else if (list.length) {
    chosen = list[0];
    console.warn(
      `Brevo: sozlangan jo'natuvchi "${SENDER_EMAIL}" tasdiqlanmagan — ` +
        `akkauntdagi tasdiqlangan manzil ishlatilmoqda: "${chosen}". ` +
        `Doimiy yechim: shu manzilni Brevo → Senders bo'limida tasdiqlang ` +
        `yoki BREVO_SENDER_EMAIL o'zgaruvchisini o'chiring.`,
    );
  }
  // Ro'yxatni o'qib bo'lmasa (masalan IP cheklovi) — eski xatti-harakat:
  // sozlangan manzil bilan urinamiz.

  cachedSender = chosen;
  cachedSenderAt = Date.now();
  return chosen;
}

async function sendViaBrevoApi({ toEmail, subject, html, text }) {
  const sender = await resolveSender();

  try {
    return await sendViaBrevoApiOnce({
      toEmail,
      subject,
      html,
      text,
      senderEmail: sender,
    });
  } catch (err) {
    // 400/401/403 — jo'natuvchi yoki ruxsat bilan bog'liq bo'lishi mumkin.
    // Keshni tozalab, akkauntdan HAQIQIY tasdiqlangan manzilni qayta
    // so'raymiz va boshqa manzil chiqsa — bir marta qayta urinamiz.
    const senderMayBeWrong = [400, 401, 403].includes(err.brevoStatus);
    if (!senderMayBeWrong) throw err;

    const fresh = await resolveSender({ force: true });
    if (fresh === sender) {
      // Boshqa variant yo'q — asl xatoni qaytaramiz.
      throw err;
    }

    console.warn(
      `Brevo: "${sender}" bilan yuborilmadi (${err.message}). ` +
        `"${fresh}" bilan qayta urinilmoqda...`,
    );
    try {
      return await sendViaBrevoApiOnce({
        toEmail,
        subject,
        html,
        text,
        senderEmail: fresh,
      });
    } catch {
      throw err; // ikkalasi ham ishlamadi — asl sabab ko'rsatiladi
    }
  }
}

// ═══════════════════════════════════════════════════════════════
// ZAXIRA PROVAYDER — SendGrid (HTTPS API)
// ═══════════════════════════════════════════════════════════════
// Nima uchun kerak: 2026-08-04 da Brevo har bir yuborishga
//   403 "Your SMTP account is not yet activated"
// deb javob bera boshladi — ya'ni akkaunt Brevo tomonidan hali
// faollashtirilmagan va buni KOD orqali hal qilib bo'lmaydi. Natijada
// butun ro'yxatdan o'tish to'xtab qoldi, chunki email yagona provayderga
// bog'liq edi. Endi provayderlar zanjiri bor: biri ishlamasa, ikkinchisi
// urinadi.
//
// Nima uchun aynan SendGrid: (1) HTTPS API orqali ishlaydi — Render bepul
// tarifi SMTP portlarini (25/465/587) bloklaydi, shuning uchun oddiy SMTP
// provayderlar bu yerda umuman ishlamaydi; (2) bitta jo'natuvchi manzilni
// tasdiqlash kifoya (domen sotib olish shart emas); (3) bepul tarifda
// kuniga 100 ta xat.
//
// Sozlash: SENDGRID_API_KEY va (ixtiyoriy) SENDGRID_SENDER_EMAIL.
// Kalit qo'yilmagan bo'lsa — bu provayder butunlay chetlab o'tiladi va
// tizim avvalgidek faqat Brevo bilan ishlaydi.
const SENDGRID_API_URL = "https://api.sendgrid.com/v3/mail/send";

function sendgridSender() {
  return process.env.SENDGRID_SENDER_EMAIL || SENDER_EMAIL;
}

async function sendViaSendGrid({ toEmail, subject, html, text }) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) throw new Error("SENDGRID_API_KEY sozlanmagan");

  const res = await fetch(SENDGRID_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: toEmail }] }],
      from: { email: sendgridSender(), name: SENDER_NAME },
      subject,
      content: [
        { type: "text/plain", value: text || " " },
        { type: "text/html", value: html },
      ],
    }),
    signal: AbortSignal.timeout(15000),
  });

  if (res.status === 202 || res.ok) {
    return { messageId: res.headers.get("x-message-id") || "sendgrid" };
  }

  const body = await res.text().catch(() => "");
  console.error(
    "\n══════════ SENDGRID XATOSI ══════════\n" +
      `  status     : ${res.status}\n` +
      `  jo'natuvchi: ${sendgridSender()}\n` +
      `  javob      : ${body.slice(0, 300)}\n` +
      "═════════════════════════════════════",
  );
  const err = new Error(`SendGrid xatosi: ${res.status} — ${body.slice(0, 200)}`);
  err.configIssue = res.status === 401 || res.status === 403 || res.status >= 500;
  throw err;
}

// ═══════════════════════════════════════════════════════════════
// QO'SHIMCHA PROVAYDERLAR
// ═══════════════════════════════════════════════════════════════
// Nima uchun bir nechta: Brevo akkaunti "faollashtirilmagan" (403) va
// buni KOD bilan hal qilib bo'lmaydi — provayder tomonidagi masala.
// Shuning uchun bir nechta muqobil qo'shildi: qaysi biriga ro'yxatdan
// o'tish oson bo'lsa, o'shaning kalitini `.env` ga qo'yish kifoya —
// kod avtomatik o'sha orqali yubora boshlaydi. Hech qanday boshqa
// o'zgartirish kerak emas.
//
// HAMMASI HTTPS API orqali ishlaydi (SMTP dan tashqari), chunki
// Render bepul tarifi SMTP portlarini (25/465/587) bloklaydi.
//
// ┌─────────┬──────────────┬────────────────────────────────────────┐
// │ Provayd.│ Bepul tarif  │ Domen kerakmi?                         │
// ├─────────┼──────────────┼────────────────────────────────────────┤
// │ Mailjet │ 200/kun      │ YO'Q — bitta manzil tasdiqlansa bas    │
// │ SMTP2GO │ 1000/oy      │ YO'Q — bitta manzil tasdiqlansa bas    │
// │ Resend  │ 3000/oy      │ HA (domensiz faqat O'ZINGIZGA yuboradi)│
// │ SendGrid│ 100/kun      │ YO'Q — bitta manzil tasdiqlansa bas    │
// │ Brevo   │ 300/kun      │ YO'Q (lekin akkaunt faollashtirilishi   │
// │         │              │ kerak — hozirgi muammo shu)            │
// │ SMTP    │ —            │ YO'Q (Render bepul tarifida ISHLAMAYDI)│
// └─────────┴──────────────┴────────────────────────────────────────┘

/** Provayderga xos jo'natuvchi manzil, bo'lmasa umumiy manzil */
function senderFor(envName) {
  return process.env[envName] || process.env.MAIL_FROM || SENDER_EMAIL;
}

/** Barcha provayderlar uchun bir xil xato belgilash qoidasi */
function providerError(name, status, body) {
  const err = new Error(`${name} xatosi: ${status} — ${String(body).slice(0, 200)}`);
  // 401/403 — kalit yoki jo'natuvchi muammosi; 5xx — provayder nosozligi.
  // Ikkalasi ham FOYDALANUVCHINING aybi emas, shuning uchun `configIssue`.
  err.configIssue = status === 401 || status === 403 || status >= 500;
  return err;
}

function logProviderError(name, status, sender, body) {
  console.error(
    `\n══════════ ${name.toUpperCase()} XATOSI ══════════\n` +
      `  status     : ${status}\n` +
      `  jo'natuvchi: ${sender}\n` +
      `  javob      : ${String(body).slice(0, 300)}\n` +
      "═".repeat(40),
  );
}

/* ── MAILJET ──────────────────────────────────────────────────────
   Sozlash: MAILJET_API_KEY + MAILJET_SECRET_KEY (ikkalasi ham kerak),
   ixtiyoriy MAILJET_SENDER_EMAIL.
   Kalitlar: https://app.mailjet.com/account/apikeys */
async function sendViaMailjet({ toEmail, subject, html, text }) {
  const key = process.env.MAILJET_API_KEY;
  const secret = process.env.MAILJET_SECRET_KEY;
  if (!key || !secret) throw new Error("MAILJET kalitlari sozlanmagan");

  const sender = senderFor("MAILJET_SENDER_EMAIL");
  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      Authorization: "Basic " + Buffer.from(`${key}:${secret}`).toString("base64"),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Messages: [
        {
          From: { Email: sender, Name: SENDER_NAME },
          To: [{ Email: toEmail }],
          Subject: subject,
          TextPart: text || " ",
          HTMLPart: html,
        },
      ],
    }),
    signal: AbortSignal.timeout(15000),
  });

  const body = await res.text().catch(() => "");
  if (res.ok) {
    // Mailjet 200 qaytarsa ham ichida xato bo'lishi mumkin
    try {
      const j = JSON.parse(body);
      const st = j?.Messages?.[0]?.Status;
      if (st && st !== "success") {
        logProviderError("Mailjet", res.status, sender, body);
        throw providerError("Mailjet", 403, body);
      }
    } catch (e) {
      if (e.configIssue !== undefined) throw e;
    }
    return { messageId: "mailjet" };
  }

  logProviderError("Mailjet", res.status, sender, body);
  throw providerError("Mailjet", res.status, body);
}

/* ── RESEND ───────────────────────────────────────────────────────
   Sozlash: RESEND_API_KEY, ixtiyoriy RESEND_SENDER_EMAIL.
   ⚠️ Domen tasdiqlanmagan bo'lsa Resend faqat AKKAUNT EGASIGA xat
   yuboradi (jo'natuvchi: onboarding@resend.dev). Boshqa manzillarga
   yuborish uchun domen tasdiqlanishi shart.
   Kalit: https://resend.com/api-keys */
async function sendViaResend({ toEmail, subject, html, text }) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("RESEND_API_KEY sozlanmagan");

  const sender = process.env.RESEND_SENDER_EMAIL || "onboarding@resend.dev";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${SENDER_NAME} <${sender}>`,
      to: [toEmail],
      subject,
      html,
      text: text || " ",
    }),
    signal: AbortSignal.timeout(15000),
  });

  const body = await res.text().catch(() => "");
  if (res.ok) return { messageId: "resend" };

  logProviderError("Resend", res.status, sender, body);
  throw providerError("Resend", res.status, body);
}

/* ── SMTP2GO ──────────────────────────────────────────────────────
   Sozlash: SMTP2GO_API_KEY, ixtiyoriy SMTP2GO_SENDER_EMAIL.
   Kalit: https://app.smtp2go.com/settings/apikeys */
async function sendViaSmtp2go({ toEmail, subject, html, text }) {
  const apiKey = process.env.SMTP2GO_API_KEY;
  if (!apiKey) throw new Error("SMTP2GO_API_KEY sozlanmagan");

  const sender = senderFor("SMTP2GO_SENDER_EMAIL");
  const res = await fetch("https://api.smtp2go.com/v3/email/send", {
    method: "POST",
    headers: {
      "X-Smtp2go-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: `${SENDER_NAME} <${sender}>`,
      to: [toEmail],
      subject,
      html_body: html,
      text_body: text || " ",
    }),
    signal: AbortSignal.timeout(15000),
  });

  const body = await res.text().catch(() => "");
  if (res.ok) {
    try {
      const j = JSON.parse(body);
      if (j?.data?.succeeded === 0) {
        logProviderError("SMTP2GO", 403, sender, body);
        throw providerError("SMTP2GO", 403, body);
      }
    } catch (e) {
      if (e.configIssue !== undefined) throw e;
    }
    return { messageId: "smtp2go" };
  }

  logProviderError("SMTP2GO", res.status, sender, body);
  throw providerError("SMTP2GO", res.status, body);
}

/* ── ODDIY SMTP (nodemailer) ──────────────────────────────────────
   Sozlash: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS,
   ixtiyoriy SMTP_SENDER_EMAIL.

   ℹ️ 2026-08-22 dan hosting Railway — u chiquvchi SMTP portlarini
   (25/465/587) bloklamaydi, ya'ni bu variant endi production'da ham
   ishlashi mumkin. (Eski Render bepul tarifi ularni bloklardi, shu
   sababli SMTP zanjirning eng oxirida turadi — tartib ATAYLAB
   o'zgartirilmadi, HTTPS API provayderlari baribir ishonchliroq.)
   Gmail bilan ishlatish uchun oddiy parol emas, "App password" kerak:
   https://myaccount.google.com/apppasswords */
async function sendViaSmtp({ toEmail, subject, html, text }) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) throw new Error("SMTP sozlanmagan");

  const nodemailer = require("nodemailer");
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // 465 — implicit TLS, 587 — STARTTLS
    auth: { user, pass },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
  });

  try {
    const info = await transporter.sendMail({
      from: `"${SENDER_NAME}" <${process.env.SMTP_SENDER_EMAIL || user}>`,
      to: toEmail,
      subject,
      text: text || " ",
      html,
    });
    return { messageId: info.messageId || "smtp" };
  } catch (err) {
    logProviderError("SMTP", err.code || "-", user, err.message);
    // Autentifikatsiya xatosi yoki port bloklangani — sozlama muammosi
    const e = new Error(`SMTP xatosi: ${err.message}`);
    e.configIssue = true;
    throw e;
  }
}

// ═══════════════════════════════════════════════════════════════
// PROVAYDERLAR ZANJIRI
// ═══════════════════════════════════════════════════════════════
/* Provayderlar REYESTRI — yangi provayder qo'shish uchun shu ro'yxatga
   bitta qator yozish kifoya. Tartib muhim: ro'yxat boshidagi provayder
   birinchi urinadi, u ishlamasa keyingisiga o'tiladi.

   Joriy tartibning sababi: Brevo hozircha ishlamayapti (akkaunt
   faollashtirilmagan), shuning uchun u OXIRIDA — aks holda har bir
   ro'yxatdan o'tish avval unga urinib, bir necha soniya behuda
   sekinlashardi. SMTP eng oxirida, chunki Render bepul tarifida
   portlar bloklangan va u yerda deyarli har doim muvaffaqiyatsiz. */
const EMAIL_PROVIDERS = [
  {
    name: "Mailjet",
    ready: () => !!(process.env.MAILJET_API_KEY && process.env.MAILJET_SECRET_KEY),
    send: sendViaMailjet,
  },
  {
    name: "SMTP2GO",
    ready: () => !!process.env.SMTP2GO_API_KEY,
    send: sendViaSmtp2go,
  },
  {
    name: "Resend",
    ready: () => !!process.env.RESEND_API_KEY,
    send: sendViaResend,
  },
  {
    name: "SendGrid",
    ready: () => !!process.env.SENDGRID_API_KEY,
    send: sendViaSendGrid,
  },
  {
    name: "Brevo",
    ready: () => !!process.env.BREVO_API_KEY,
    send: sendViaBrevoApi,
  },
  {
    name: "SMTP",
    ready: () =>
      !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS),
    send: sendViaSmtp,
  },
];

/** Sozlangan provayderlar, kerak bo'lsa qo'lda berilgan tartibda.
    `EMAIL_PROVIDER_ORDER="Resend,Brevo"` — faqat shularni, shu
    tartibda ishlatadi (nomlar katta-kichik harfga sezgir emas). */
function activeProviders() {
  const ready = EMAIL_PROVIDERS.filter((p) => p.ready());
  const order = (process.env.EMAIL_PROVIDER_ORDER || "")
    .split(",")
    .map((x) => x.trim().toLowerCase())
    .filter(Boolean);
  if (!order.length) return ready;

  const picked = [];
  for (const name of order) {
    const found = ready.find((p) => p.name.toLowerCase() === name);
    if (found && !picked.includes(found)) picked.push(found);
  }
  // Ro'yxatda ko'rsatilmaganlari ham zaxira sifatida oxiriga qo'shiladi
  return [...picked, ...ready.filter((p) => !picked.includes(p))];
}

/** Sozlangan provayder nomlari — loglar va tashxis uchun */
function configuredProviderNames() {
  return activeProviders().map((p) => p.name);
}

/**
 * Xatni mavjud provayderlar orqali yuborishga urinadi.
 * Biri ishlamasa — keyingisiga o'tadi. Hammasi ishlamasa, ENG SO'NGGI
 * xatoni tashlaydi (chaqiruvchi kod `configIssue` belgisiga qarab
 * foydalanuvchiga to'g'ri xabar ko'rsatadi).
 */
async function sendEmail({ toEmail, subject, html, text }) {
  const providers = activeProviders();

  if (!providers.length) {
    const err = new Error(
      "Email xizmati sozlanmagan — hech qanday provayder kaliti yo'q " +
        "(MAILJET_API_KEY+MAILJET_SECRET_KEY / SMTP2GO_API_KEY / " +
        "RESEND_API_KEY / SENDGRID_API_KEY / BREVO_API_KEY / SMTP_*)",
    );
    err.configIssue = true;
    throw err;
  }

  let lastErr = null;
  for (const p of providers) {
    try {
      const info = await p.send({ toEmail, subject, html, text });
      if (providers.length > 1) {
        console.log(`✉️  Xat "${p.name}" orqali yuborildi → ${toEmail}`);
      }
      return info;
    } catch (err) {
      lastErr = err;
      console.warn(`Email provayderi "${p.name}" ishlamadi: ${err.message}`);
    }
  }
  console.error(
    `❗ BARCHA email provayderlari ishlamadi (${providers
      .map((p) => p.name)
      .join(", ")}) → ${toEmail}`,
  );
  throw lastErr;
}

async function sendOTPEmail(toEmail, otp, fullName = "") {
  const name = fullName || "Foydalanuvchi";

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body { font-family: Arial, sans-serif; background:#f5f3ef; margin:0; padding:20px; }
    .container { max-width:500px; margin:0 auto; background:#fff; border-radius:12px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.1); }
    .header { background:#1a2744; padding:30px; text-align:center; }
    .header h1 { color:#fff; margin:0; font-size:22px; }
    .header p  { color:#c9a84c; margin:5px 0 0; font-size:14px; }
    .body { padding:30px; }
    .otp-box { background:#f5f3ef; border:2px dashed #c9a84c; border-radius:10px; text-align:center; padding:20px; margin:20px 0; }
    .otp-code { font-size:42px; font-weight:bold; color:#1a2744; letter-spacing:8px; }
    .expire { font-size:12px; color:#888; margin-top:8px; }
    .footer { text-align:center; padding:20px; font-size:12px; color:#aaa; border-top:1px solid #eee; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>⚖ Mening Huquqim</h1>
      <p>O'zbekiston huquqiy maslahat platformasi</p>
    </div>
    <div class="body">
      <p>Assalomu alaykum, <strong>${name}</strong>!</p>
      <p>Hisobingizni tasdiqlash uchun quyidagi bir martalik kodni kiriting:</p>
      <div class="otp-box">
        <div class="otp-code">${otp}</div>
        <div class="expire">⏰ Kod 10 daqiqa ichida amal qiladi</div>
      </div>
      <p>Agar siz bu so'rovni yubormagan bo'lsangiz, ushbu xatni e'tiborsiz qoldiring.</p>
    </div>
    <div class="footer">© 2025 Mening Huquqim — O'zbekiston qonunchiligiga asoslangan AI maslahat</div>
  </div>
</body>
</html>`;

  try {
    const info = await sendEmail({
      toEmail,
      subject: `Tasdiqlash kodi: ${otp} — Mening Huquqim`,
      html,
      text: `Tasdiqlash kodingiz: ${otp}\n\nKod 10 daqiqa ichida amal qiladi.`,
    });
    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Email send error details:", error.message);
    throw error;
  }
}

async function sendPasswordResetEmail(
  toEmail,
  newPassword,
  fullName = "",
  adminUsername = "Admin",
) {
  const name = fullName || "Foydalanuvchi";

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
</head>
<body style="font-family:Arial,sans-serif;background:#f5f3ef;padding:20px;">
  <div style="max-width:500px;margin:auto;background:#fff;border-radius:12px;padding:30px;">
    <h2>⚖ Mening Huquqim</h2>

    <p>Assalomu alaykum, <strong>${name}</strong>!</p>

    <p>
      Administrator <strong>@${adminUsername}</strong>
      tomonidan hisobingiz paroli yangilandi.
    </p>

    <div style="padding:20px;background:#f5f3ef;border-radius:10px;text-align:center;">
      <div style="font-size:14px;color:#666;">Yangi parolingiz:</div>

      <div style="
        font-size:28px;
        font-weight:bold;
        margin-top:10px;
        letter-spacing:3px;
      ">
        ${newPassword}
      </div>
    </div>

    <p style="margin-top:20px;">
      Tizimga kirganingizdan so'ng parolni o'zgartiring.
    </p>
  </div>
</body>
</html>`;

  try {
    const info = await sendEmail({
      toEmail,
      subject: "Parolingiz o'zgartirildi — Mening Huquqim",
      html,
      text: `Yangi parol: ${newPassword}`,
    });

    console.log("Password reset email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Password reset email error:", error.message);
    throw error;
  }
}

/**
 * Email xizmati sozlanganini TEKSHIRADI va aniq tashxis qaytaradi.
 *
 * Nima uchun kerak: "Tasdiqlash kodini yuborib bo'lmadi" xatosining
 * sababi bir nechta bo'lishi mumkin (API kalit yo'q / kalit noto'g'ri /
 * jo'natuvchi tasdiqlanmagan / Brevo akkauntida IP cheklovi bor), lekin
 * foydalanuvchiga bularning hech biri ko'rsatilmaydi. Server egasi esa
 * qaysi biri ekanini bilishi kerak — ayniqsa IP cheklovida SERVERNING
 * TASHQI IP MANZILI kerak bo'ladi (uni Brevo ruxsat ro'yxatiga qo'shish
 * uchun). Shu funksiya ikkalasini ham topib beradi.
 *
 * Hech qanday email YUBORMAYDI — faqat akkaunt ma'lumotini so'raydi.
 */
/**
 * BREVO_SENDER_EMAIL Brevo'da tasdiqlangan jo'natuvchilar ro'yxatida
 * bor-yo'qligini tekshiradi. Tasdiqlanmagan manzildan yuborilgan xat
 * Brevo tomonidan rad etiladi — bu "akkaunt ishlayapti, lekin xat
 * ketmayapti" holatining eng ko'p uchraydigan sababi.
 *
 * @returns {{verified: boolean|null, list: string[]}} — `null` = tekshirib
 *          bo'lmadi (ro'yxatni o'qishga ruxsat yo'q va h.k.)
 */
async function checkSender() {
  try {
    const res = await fetch("https://api.brevo.com/v3/senders", {
      headers: { "api-key": process.env.BREVO_API_KEY, accept: "application/json" },
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) return { verified: null, list: [] };
    const data = await res.json();
    const list = (data.senders || [])
      .filter((s) => s.active !== false)
      .map((s) => s.email);
    if (!list.length) return { verified: null, list: [] };
    const target = String(SENDER_EMAIL).toLowerCase();
    return {
      verified: list.some((e) => String(e).toLowerCase() === target),
      list,
    };
  } catch {
    return { verified: null, list: [] };
  }
}

async function checkEmailHealth() {
  const result = {
    ok: false,
    reason: "",
    hint: "",
    senderEmail: SENDER_EMAIL,
    serverIp: null,
    brevoStatus: null,
  };

  // Qaysi provayderlar umuman sozlangani — har doim ko'rsatiladi
  result.providers = configuredProviderNames();

  if (!result.providers.length) {
    result.reason = "Hech qanday email provayderi sozlanmagan";
    result.hint =
      "Quyidagilardan BITTASINI .env / Render Environment ga qo'shing: " +
      "MAILJET_API_KEY + MAILJET_SECRET_KEY (200 xat/kun, domen shart emas) · " +
      "SMTP2GO_API_KEY (1000/oy) · SENDGRID_API_KEY (100/kun) · " +
      "RESEND_API_KEY (3000/oy, domen kerak) · BREVO_API_KEY.";
    return result;
  }

  // Brevo'dan BOSHQA provayder sozlangan bo'lsa — Brevo ishlamasa ham
  // xat ketadi, shuning uchun avval shularni tekshiramiz.
  const nonBrevo = result.providers.filter((n) => n !== "Brevo");
  if (nonBrevo.length) {
    // SendGrid uchun aniq tekshiruv bor (akkaunt endpointi)
    if (result.providers.includes("SendGrid")) {
      result.provider = "SendGrid";
      result.senderEmail = sendgridSender();
      try {
        const r = await fetch("https://api.sendgrid.com/v3/user/account", {
          headers: { Authorization: `Bearer ${process.env.SENDGRID_API_KEY}` },
          signal: AbortSignal.timeout(10000),
        });
        if (r.ok) {
          result.ok = true;
          result.reason = `Email xizmati ishlayapti (SendGrid). Sozlangan: ${result.providers.join(", ")}`;
          return result;
        }
        result.reason = `SendGrid kaliti qabul qilinmadi (${r.status})`;
        result.hint = "SendGrid → Settings → API Keys da kalitni tekshiring.";
        if (nonBrevo.length > 1) {
          result.hint += ` Boshqa sozlangan provayderlar ham bor: ${nonBrevo.filter((n) => n !== "SendGrid").join(", ")}.`;
        }
        return result;
      } catch (err) {
        result.reason = "SendGrid'ga ulanib bo'lmadi: " + err.message;
        return result;
      }
    }

    // Qolgan provayderlar uchun alohida "sog'liq" endpointi yo'q —
    // ular haqiqiy yuborishda tekshiriladi. Kalit borligi kifoya deb
    // hisoblanadi (aks holda serverni ishga tushirishda har safar
    // sinov xati yuborishga to'g'ri kelardi).
    result.provider = nonBrevo[0];
    result.ok = true;
    result.reason = `Email provayderi sozlangan: ${result.providers.join(", ")} (birinchi bo'lib "${nonBrevo[0]}" ishlatiladi)`;
    result.hint =
      "Eslatma: bu kalit BORLIGINI bildiradi. Haqiqiy yuborish faqat ro'yxatdan o'tishda sinaladi — xato bo'lsa server logida provayder nomi bilan yoziladi.";
    return result;
  }

  // Bu yerga faqat Brevo yolg'iz sozlangan bo'lsa yetib kelinadi.

  // Serverning tashqi IP manzili — IP cheklovi bo'lsa shu manzilga
  // ruxsat berish kerak bo'ladi.
  try {
    const ipRes = await fetch("https://api.ipify.org?format=json", {
      signal: AbortSignal.timeout(8000),
    });
    result.serverIp = (await ipRes.json()).ip || null;
  } catch {
    /* IP aniqlanmasa ham tekshiruv davom etadi */
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/account", {
      headers: { "api-key": process.env.BREVO_API_KEY, accept: "application/json" },
      signal: AbortSignal.timeout(12000),
    });
    result.brevoStatus = res.status;
    const bodyText = await res.text();

    if (res.ok) {
      // Akkaunt bilan aloqa bor. LEKIN bu yetarli emas: xat yuborish
      // (POST /v3/smtp/email) boshqa shartlarga ham bog'liq — eng ko'p
      // uchraydigani JO'NATUVCHI manzil Brevo'da tasdiqlanmagan bo'lishi.
      // Shu sabab "ISHLAYAPTI" deb yozib qo'yib, keyin yuborish
      // muvaffaqiyatsiz tugashi mumkin edi — endi jo'natuvchi ham
      // tekshiriladi.
      const senders = await checkSender();
      if (senders.verified === false) {
        result.reason = `Jo'natuvchi manzil "${SENDER_EMAIL}" Brevo'da TASDIQLANMAGAN`;
        result.hint =
          "Brevo → Senders bo'limida shu manzilni tasdiqlang, YOKI serverdagi BREVO_SENDER_EMAIL o'zgaruvchisini butunlay o'chiring (u holda kod Brevo bergan tayyor tasdiqlangan manzilni ishlatadi)." +
          (senders.list.length
            ? ` Hozir tasdiqlangan manzillar: ${senders.list.join(", ")}`
            : "");
        result.verifiedSenders = senders.list;
        return result;
      }
      result.ok = true;
      result.reason = "Email xizmati ishlayapti";
      result.verifiedSenders = senders.list;
      return result;
    }

    let message = bodyText.slice(0, 200);
    try {
      message = JSON.parse(bodyText).message || message;
    } catch {
      /* xom matn qoladi */
    }

    if (res.status === 401 && /IP address/i.test(bodyText)) {
      result.reason = "Brevo akkauntida 'Authorised IPs' cheklovi yoqilgan va bu server IP'siga ruxsat berilmagan";
      result.hint = `https://app.brevo.com/security/authorised_ips → cheklovni o'chiring YOKI ${result.serverIp || "server IP"} manziliga ruxsat bering.`;
    } else if (res.status === 401) {
      result.reason = "BREVO_API_KEY noto'g'ri yoki bekor qilingan: " + message;
      result.hint = "Brevo → SMTP & API → API Keys dan yangi kalit yarating.";
    } else if (res.status === 403 && /not yet activated/i.test(bodyText)) {
      // Brevo yangi akkauntlarda transactional email yuborishni qo'lda
      // faollashtiradi — bu holatda hech qanday sozlama yordam bermaydi.
      result.reason =
        "Brevo akkaunti hali FAOLLASHTIRILMAGAN (xat yuborishga ruxsat berilmagan)";
      result.hint =
        "contact@brevo.com ga yozib faollashtirishni so'rang, YOKI (tezroq yo'l) boshqa provayderga o'ting — kalitni qo'shish kifoya, kod avtomatik o'sha orqali yubora boshlaydi:\n" +
        "  · Mailjet  — MAILJET_API_KEY + MAILJET_SECRET_KEY (200 xat/kun, domen SHART EMAS): https://app.mailjet.com/account/apikeys\n" +
        "  · SMTP2GO  — SMTP2GO_API_KEY (1000 xat/oy, domen shart emas): https://app.smtp2go.com/settings/apikeys\n" +
        "  · SendGrid — SENDGRID_API_KEY (100 xat/kun, domen shart emas)\n" +
        "  · Resend   — RESEND_API_KEY (3000 xat/oy, lekin boshqa manzillarga yuborish uchun DOMEN kerak)";
    } else if (res.status === 403) {
      result.reason = "Brevo ruxsat bermadi: " + message;
      result.hint = "Jo'natuvchi manzil (Senders) tasdiqlanganini tekshiring.";
    } else {
      result.reason = `Brevo xatosi ${res.status}: ${message}`;
    }
  } catch (err) {
    result.reason = "Brevo API'ga ulanib bo'lmadi: " + err.message;
  }
  return result;
}

module.exports = {
  generateOTP,
  sendOTPEmail,
  sendPasswordResetEmail,
  checkEmailHealth,
  configuredProviderNames,
};
