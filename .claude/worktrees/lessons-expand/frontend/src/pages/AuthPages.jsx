import React, { useState, useEffect, useRef } from "react";
import { Mail, CheckCircle2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import LangSwitcher from "../components/LangSwitcher";
import Seo from "../components/Seo";
import axios from "axios";
import api from "../utils/api";
import { API_ORIGIN } from "../utils/apiBase";
import s from "./Auth.module.css";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

/* ───────── Google SVG Icon ───────── */
function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.35-8.16 2.35-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

/* ───────── Huquqga oid illyustratsiya panel (o'ng taraf) ───────── */
function IllustrationPanel({ titleKey, textKey }) {
  const { t, lang } = useLang();
  const FALLBACK = {
    illustration_title: {
      uz: "Huquqiy yordam — bir necha soniyada",
      ru: "Юридическая помощь — за секунды",
      en: "Legal help — in seconds",
    },
    illustration_text: {
      uz: "Sun'iy intellekt yordamida O'zbekiston qonunchiligi bo'yicha aniq va ishonchli javoblar oling.",
      ru: "Получайте точные и достоверные ответы по законодательству Узбекистана с помощью ИИ.",
      en: "Get accurate, reliable answers on Uzbekistan's legislation, powered by AI.",
    },
    illustration_login_title: {
      uz: "Qaytganingizdan xursandmiz",
      ru: "Рады видеть вас снова",
      en: "Welcome back",
    },
    illustration_login_text: {
      uz: "Hisobingizga kiring va huquqiy savollaringizga javob olishni davom ettiring.",
      ru: "Войдите в аккаунт и продолжайте получать ответы на юридические вопросы.",
      en: "Sign in to continue getting answers to your legal questions.",
    },
    illustration_register_title: {
      uz: "Huquqingizni bilish — kuchingiz",
      ru: "Знание прав — это сила",
      en: "Knowing your rights is power",
    },
    illustration_register_text: {
      uz: "Bepul hisob yarating va O'zbekiston qonunchiligi bo'yicha ishonchli yordamchiga ega bo'ling.",
      ru: "Создайте бесплатный аккаунт и получите надёжного помощника по законодательству Узбекистана.",
      en: "Create a free account and get a reliable assistant for Uzbekistan's legislation.",
    },
  };
  const safeLang = lang === "ru" ? "ru" : "uz";
  const title =
    t?.[titleKey] ||
    FALLBACK[titleKey]?.[safeLang] ||
    FALLBACK.illustration_title[safeLang];
  const text =
    t?.[textKey] ||
    FALLBACK[textKey]?.[safeLang] ||
    FALLBACK.illustration_text[safeLang];
  return (
    <div className={s.illustrationSide}>
      <div className={s.illustrationInner}>
        <h2 className={s.illustrationTitle}>{title}</h2>
        <p className={s.illustrationText}>{text}</p>
      </div>
    </div>
  );
}

/* ───────── Google Button ─────────
   BUG FIX: agar joriy manzil (origin) Google Cloud Console'dagi OAuth
   client uchun "Authorized JavaScript origins" ro'yxatida bo'lmasa,
   Google skripti konsolga
     "[GSI_LOGGER]: The given origin is not allowed for the given client ID"
   deb yozadi va 403 qaytaradi — lekin JS xatosi TASHLAMAYDI. Avvalgi kod
   shu holatda ham `gReady`ni true qilardi: foydalanuvchi ko'zi bilan
   ishlaydigan tugmani ko'rardi, bosardi va HECH NARSA sodir bo'lmasdi
   (jim o'lik tugma).

   Endi tugma haqiqatan render bo'lgani tekshiriladi; bo'lmasa
   foydalanuvchiga aniq xabar ko'rsatiladi (email/parol bilan kiring),
   dasturchi rejimida esa qaysi origin'ga ruxsat berish kerakligi
   ko'rsatiladi. Buni to'liq hal qilish uchun Google Cloud Console'da
   shu origin qo'shilishi shart — bu frontend kodi bilan hal
   qilinmaydi. */
function GoogleButton({ labelKey, onCredential, disabled }) {
  const containerRef = useRef(null);
  const [gReady, setGReady] = useState(false);
  const [gFailed, setGFailed] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return undefined;

    let cancelled = false;
    let checkTimer = null;

    function renderRealButton() {
      if (cancelled || !window.google?.accounts?.id || !containerRef.current)
        return;
      // Avval tozalaymiz (qayta init bo'lganda ikkilanmasin)
      containerRef.current.innerHTML = "";
      window.google.accounts.id.renderButton(containerRef.current, {
        type: "standard",
        theme: "outline",
        size: "large",
        text: "continue_with",
        width: 320,
      });

      // Google tugmani asinxron chizadi. Origin ruxsat etilmagan bo'lsa
      // konteyner bo'sh qoladi — shuni tekshiramiz.
      checkTimer = setTimeout(() => {
        if (cancelled || !containerRef.current) return;
        // Google tugmani turli versiyalarda turlicha chizadi (iframe yoki
        // div). Aniq selektor ishlatilsa, Google DOM'ini o'zgartirgan
        // kuni ISHLAYOTGAN tugma "ishlamayapti" deb belgilanib qolardi.
        // Shuning uchun "biror narsa chizildimi?" deb tekshiramiz —
        // origin ruxsat etilmagan holatda konteyner butunlay bo'sh qoladi.
        const rendered = containerRef.current.childElementCount > 0;
        if (rendered) {
          setGReady(true);
        } else {
          setGFailed(true);
          console.error(
            "[Huquq AI] Google bilan kirish ishlamayapti. Google Cloud Console → " +
              "APIs & Services → Credentials → OAuth client → " +
              '"Authorized JavaScript origins" ro\'yxatiga shu manzilni qo\'shing: ' +
              window.location.origin,
          );
        }
      }, 2500);
    }

    function initGoogle() {
      if (cancelled || !window.google?.accounts?.id) return;
      window.google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: (res) => onCredential(res.credential),
        auto_select: false,
        cancel_on_tap_outside: true,
      });
      renderRealButton();
    }

    const existing = document.getElementById("google-gsi-script");
    if (existing) {
      // BUG FIX: avval skript bor-u, lekin hali yuklanib bo'lmagan holatda
      // ikkinchi nusxasi qo'shilardi (bir xil id bilan) va initGoogle hech
      // qachon chaqirilmasdi — tugma "..." holatida qotib qolardi.
      if (window.google?.accounts?.id) {
        initGoogle();
      } else {
        existing.addEventListener("load", initGoogle);
      }
      return () => {
        cancelled = true;
        clearTimeout(checkTimer);
        existing.removeEventListener("load", initGoogle);
      };
    }

    const script = document.createElement("script");
    script.id = "google-gsi-script";
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initGoogle;
    script.onerror = () => !cancelled && setGFailed(true);
    document.head.appendChild(script);

    return () => {
      cancelled = true;
      clearTimeout(checkTimer);
    };
  }, [onCredential]);

  const label = t[labelKey] || t.google_btn;

  if (!GOOGLE_CLIENT_ID) {
    return (
      <button
        type="button"
        className={s.googleBtn}
        disabled
        style={{ opacity: 0.5, cursor: "not-allowed" }}
      >
        <GoogleIcon />
        <span>{t.google_btn_disabled}</span>
      </button>
    );
  }

  // Google tugmasi yuklanmadi — o'lik tugma o'rniga aniq xabar.
  if (gFailed) {
    return (
      <div style={{ width: "100%" }}>
        <button
          type="button"
          className={s.googleBtn}
          disabled
          style={{ opacity: 0.5, cursor: "not-allowed", width: "100%" }}
        >
          <GoogleIcon />
          <span>{t.google_btn_disabled}</span>
        </button>
        <p
          style={{
            margin: "0.5rem 0 0",
            fontSize: "12px",
            color: "#888",
            textAlign: "center",
            lineHeight: 1.45,
          }}
        >
          {t.google_unavailable}
          {import.meta.env.DEV && (
            <>
              <br />
              <span style={{ color: "#b45309" }}>
                Dev: Google Cloud Console'da "{window.location.origin}"
                manzilini Authorized JavaScript origins ro'yxatiga qo'shing.
              </span>
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Google'ning haqiqiy (rasmiy) tugmasi - ko'rinmas, lekin bosishni qabul qiladi */}
      <div
        ref={containerRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          overflow: "hidden",
          zIndex: 2,
          pointerEvents: disabled || !gReady ? "none" : "auto",
        }}
      />
      {/* Saytning o'z dizayni - faqat ko'rinish uchun, bosishlarni o'tkazib yuboradi */}
      <button
        type="button"
        className={s.googleBtn}
        disabled={disabled || !gReady}
        tabIndex={-1}
        style={{
          position: "relative",
          zIndex: 1,
          pointerEvents: "none",
          width: "100%",
        }}
      >
        <GoogleIcon />
        <span>{gReady ? label : "..."}</span>
      </button>
    </div>
  );
}

/* ───────── OTP tasdiqlash ekrani ───────── */
function OTPVerify({ email, onSuccess, onBack, devCodeInConsole = false }) {
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [resent, setResent] = useState(false);
  const [timer, setTimer] = useState(60);
  const [botUrl, setBotUrl] = useState(null);
  const { verifyOtp, resendOtp } = useAuth();
  const { t } = useLang();

  useEffect(() => {
    if (timer <= 0) return;
    const id = setTimeout(() => setTimer((prev) => prev - 1), 1000);
    return () => clearTimeout(id);
  }, [timer]);

  async function handleVerify(e) {
    e.preventDefault();
    if (otp.length !== 6) return setErr(t.otp_length_error);
    setErr("");
    setBusy(true);
    try {
      const result = await verifyOtp(email, otp);
      // BUG FIX: botUrl bo'lsa TelegramConnect ko'rsatamiz
      if (result?.botUrl) {
        setBotUrl(result.botUrl);
      } else {
        onSuccess?.();
      }
    } catch (ex) {
      setErr(ex.response?.data?.error || t.otp_error);
    } finally {
      setBusy(false);
    }
  }

  async function handleResend() {
    setBusy(true);
    setErr("");
    try {
      await resendOtp(email);
      setResent(true);
      setTimer(60);
    } catch (ex) {
      setErr(ex.response?.data?.error || t.otp_send_error);
    } finally {
      setBusy(false);
    }
  }

  // BUG FIX: OTP tasdiqlangan, Telegram ulanish ekrani
  if (botUrl) {
    return <TelegramConnect botUrl={botUrl} onSkip={() => onSuccess?.()} />;
  }

  return (
    <div className={s.page}>
      <div className={s.formSide}>
        <div className={s.card}>
          <div className={s.cardTop}>
            <Link to="/" className={s.logo}>
              <img
                src="/logo-96.png"
                alt="Huquq AI"
                className={s.logoImg}
                width="32"
                height="32"
              />
              <span>Mening Huquqim</span>
            </Link>
            <LangSwitcher />
          </div>
          <div className={s.otpIcon}>
            <Mail size={40} />
          </div>
          <h1 className={s.title}>{t.otp_title}</h1>
          <p className={s.sub}>
            <strong>{email}</strong> {t.otp_sent}
          </p>
          {/* Test rejimi: email xizmati ishlamayotgani uchun kod pochtaga
              emas, server konsoliga yozilgan. Buni aytmaslik foydalanuvchini
              pochtasini bekorga kutishga majbur qilardi. */}
          {devCodeInConsole && (
            <div className={s.error} style={{ background: "#fffbeb", color: "#92400e", border: "1px solid #fde68a" }}>
              {t.otp_dev_console}
            </div>
          )}
          {err && <div className={s.error}>{err}</div>}
          {resent && <div className={s.success}>{t.otp_resent}</div>}
          <div className={s.form}>
            <input
              className={`${s.input} ${s.otpInput}`}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={6}
              value={otp}
              onChange={(e) =>
                setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
              }
              placeholder="_ _ _ _ _ _"
              autoFocus
            />
            <button
              className={s.btn}
              onClick={handleVerify}
              disabled={busy || otp.length < 6}
            >
              {busy ? t.otp_verifying : t.otp_verify}
            </button>
          </div>
          <div className={s.otpFooter}>
            {timer > 0 ? (
              <span className={s.timerText}>
                {t.otp_timer}: {timer}s
              </span>
            ) : (
              <button
                className={s.linkBtn}
                onClick={handleResend}
                disabled={busy}
              >
                {t.otp_resend}
              </button>
            )}
          </div>
          <button
            className={s.linkBtn}
            onClick={onBack}
            style={{ marginTop: "0.5rem" }}
          >
            {t.otp_back}
          </button>
        </div>
      </div>
      <IllustrationPanel
        titleKey="illustration_title"
        textKey="illustration_text"
      />
    </div>
  );
}

/* ───────── Parolni tiklash so'rovi (admin orqali) ─────────
   BUG FIX: avval bu oyna `axios.post("/api/support")` — ya'ni NISBIY
   manzilga — so'rov yuborardi. Frontend Vercel'da, backend esa Render'da
   turgani uchun bunday so'rov backendga umuman yetib bormasdi
   (Vercel uni index.html'ga qaytarardi) va foydalanuvchi "Xatolik yuz
   berdi" xabarini ko'rardi — natijada parolni unutgan odam adminga
   yoza olmasdi.

   Endi so'rov `api` (VITE_API_URL asosidagi) instansiya orqali
   POST /api/auth/forgot-password ga ketadi: admin panelida "Parolni
   tiklash" turidagi murojaat paydo bo'ladi, admin bir bosishda yangi
   parol beradi va u foydalanuvchi emailiga yuboriladi. */
function ForgotPasswordModal({ onClose }) {
  const [form, setForm] = useState({ email: "", message: "" });
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState("");
  const { t } = useLang();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.email.trim()) {
      setErr(t.support_email_required);
      return;
    }
    setErr("");
    setBusy(true);
    try {
      await api.post("/auth/forgot-password", {
        email: form.email.trim(),
        message: form.message.trim(),
      });
      setSuccess(true);
    } catch (ex) {
      setErr(ex.response?.data?.error || t.support_error);
    } finally {
      setBusy(false);
    }
  }

  if (success) {
    return (
      <div className={s.modalOverlay} onClick={onClose}>
        <div className={s.modal} onClick={(e) => e.stopPropagation()}>
          <div className={s.modalHeader}>
            <h2>{t.forgot_title}</h2>
            <button className={s.modalClose} onClick={onClose} aria-label="×">
              ×
            </button>
          </div>
          <div
            className={s.modalSuccess}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
            <span>{t.forgot_success}</span>
          </div>
          <button
            className={s.btn}
            type="button"
            onClick={onClose}
            style={{ marginTop: "1rem" }}
          >
            {t.forgot_back_to_login}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <div className={s.modalHeader}>
          <h2>{t.forgot_title}</h2>
          <button className={s.modalClose} onClick={onClose} aria-label="×">
            ×
          </button>
        </div>
        <p className={s.modalDesc}>{t.forgot_desc}</p>
        {err && <div className={s.error}>{err}</div>}
        <form className={s.modalForm} onSubmit={handleSubmit}>
          <label className={s.label}>
            {t.forgot_email_label}
            <input
              className={s.input}
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm((p) => ({ ...p, email: e.target.value }))
              }
              placeholder="email@example.com"
              autoComplete="email"
              required
              autoFocus
            />
          </label>
          <label className={s.label}>
            {t.forgot_note_label}
            <textarea
              className={s.textarea}
              value={form.message}
              onChange={(e) =>
                setForm((p) => ({ ...p, message: e.target.value }))
              }
              placeholder={t.forgot_note_ph}
              rows={3}
              maxLength={500}
            />
          </label>
          <button className={s.btn} type="submit" disabled={busy}>
            {busy ? t.forgot_sending : t.forgot_submit}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ───────── Login sahifasi ───────── */
export function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [needsVerify, setNeedsVerify] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [showSupport, setShowSupport] = useState(false);
  const [warming, setWarming] = useState(false);
  const warmupRef = useRef(null);
  const { login, loginWithGoogle } = useAuth();
  const { t } = useLang();
  const nav = useNavigate();

  useEffect(() => {
    setWarming(true);
    // BUG FIX: promise'ni ref'da saqlaymiz — submit vaqtida shu so'rov hali
    // tugamagan bo'lsa, uni kutamiz (pastga qarang). Avval bu promise
    // hech qayerda saqlanmagani uchun, foydalanuvchi forma tez to'ldirib
    // yuborsa, so'rov hali uxlab yotgan serverga tushib ketardi va
    // "Server javob bermadi (vaqt tugadi)" xatoligi chiqardi.
    warmupRef.current = axios
      .get(API_ORIGIN + "/health", { timeout: 90000 })
      .catch(() => {})
      .finally(() => setWarming(false));
  }, []);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      // Server hali uyg'onayotgan bo'lsa, avval shuni kutamiz — aks holda
      // so'rov uxlab yotgan serverga tushib, vaqt tugashi bilan tugaydi.
      if (warmupRef.current) {
        await warmupRef.current;
      }
      await login(form.username.trim(), form.password);
      nav("/chat");
    } catch (ex) {
      const data = ex.response?.data;
      if (data?.needsVerification) {
        setVerifyEmail(data.email || form.username);
        setNeedsVerify(true);
      } else {
        setErr(data?.error || t.error_generic);
      }
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle(credential) {
    setErr("");
    setBusy(true);
    try {
      await loginWithGoogle(credential);
      nav("/chat");
    } catch (ex) {
      setErr(ex.response?.data?.error || t.google_error);
    } finally {
      setBusy(false);
    }
  }

  if (needsVerify) {
    return (
      <OTPVerify
        email={verifyEmail}
        onSuccess={() => nav("/chat")}
        onBack={() => setNeedsVerify(false)}
      />
    );
  }

  return (
    <div className={s.page}>
      {/* Shaxsiy sahifa — qidiruv tizimlarida indekslanmaydi */}
      <Seo title={t.seo_login_title} noindex />
      <div className={s.formSide}>
        <div className={s.card}>
          <div className={s.cardTop}>
            <Link to="/" className={s.logo}>
              <img
                src="/logo-96.png"
                alt="Huquq AI"
                className={s.logoImg}
                width="32"
                height="32"
              />
              <span>{t.nav_logo}</span>
            </Link>
            <LangSwitcher />
          </div>
          <h1 className={s.title}>{t.login_title}</h1>
          <p className={s.sub}>{t.login_sub}</p>
          {err && <div className={s.error}>{err}</div>}

          <GoogleButton
            labelKey="google_btn"
            onCredential={handleGoogle}
            disabled={busy}
          />

          <div className={s.divider}>
            <span>{t.divider_or}</span>
          </div>

          <form className={s.form} onSubmit={submit}>
            <label className={s.label}>
              {t.login_username}
              <input
                className={s.input}
                value={form.username}
                onChange={(e) =>
                  setForm((p) => ({ ...p, username: e.target.value }))
                }
                placeholder={t.login_username_ph}
                required
                autoFocus
              />
            </label>
            <label className={s.label}>
              {t.login_password}
              <input
                className={s.input}
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm((p) => ({ ...p, password: e.target.value }))
                }
                placeholder={t.login_password_ph}
                required
              />
            </label>
            <button className={s.btn} type="submit" disabled={busy}>
              {busy ? t.login_loading : t.login_btn}
            </button>
            {warming && (
              <p
                style={{
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "6px",
                  textAlign: "center",
                }}
              >
                ⏳ Server uyg'onmoqda, biroz kuting...
              </p>
            )}
          </form>
          <p className={s.legalNote}>
            {t.auth_legal_prefix}{" "}
            <Link to="/terms">{t.footer_legal_terms}</Link>{" "}
            {t.auth_legal_and}{" "}
            <Link to="/privacy">{t.footer_legal_privacy}</Link>
          </p>
          <p className={s.foot}>
            {t.login_no_account}{" "}
            <Link to="/register" className={s.link}>
              {t.login_register_link}
            </Link>
          </p>
          <button
            className={s.linkBtn}
            type="button"
            onClick={() => setShowSupport(true)}
            style={{ marginTop: "0.5rem" }}
          >
            {t.tech_support}
          </button>
          {showSupport && (
            <ForgotPasswordModal onClose={() => setShowSupport(false)} />
          )}
        </div>
      </div>
      <IllustrationPanel
        titleKey="illustration_login_title"
        textKey="illustration_login_text"
      />
    </div>
  );
}

/* ───────── Register sahifasi ───────── */
/* ───────── Telegram Bot ulanish ekrani ───────── */
function TelegramConnect({ botUrl, onSkip }) {
  const { t } = useLang();
  return (
    <div className={s.page}>
      <div className={s.formSide}>
        <div className={s.card} style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", color: "#16a34a", marginBottom: "1rem" }}>
            <CheckCircle2 size={52} />
          </div>
          <h1 className={s.title} style={{ fontSize: 22 }}>
            {t.register_success_title || "Ro'yxatdan o'tdingiz!"}
          </h1>
          <p className={s.sub} style={{ marginBottom: "1.5rem" }}>
            {t.register_tg_desc ||
              "Telegram botni ulang — AI maslahatdan Telegram orqali ham foydalaning"}
          </p>
          <a
            href={botUrl}
            target="_blank"
            rel="noreferrer"
            className={s.btn}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              textDecoration: "none",
              borderRadius: 24,
              background: "#229ED9",
              marginBottom: "1rem",
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L8.19 13.925l-2.965-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.963.634z" />
            </svg>
            {t.register_tg_btn || "Telegram botni ulash →"}
          </a>
          <button className={s.linkBtn} onClick={onSkip}>
            {t.register_tg_skip || "Keyinroq ulash →"}
          </button>
        </div>
      </div>
      <IllustrationPanel
        titleKey="illustration_title"
        textKey="illustration_text"
      />
    </div>
  );
}

export function Register() {
  const [form, setForm] = useState({
    username: "",
    password: "",
    fullName: "",
    email: "",
  });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [needsVerify, setNeedsVerify] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [devConsole, setDevConsole] = useState(false);
  const [botUrl, setBotUrl] = useState(null);
  const [warming, setWarming] = useState(false);
  const warmupRef = useRef(null);
  const { register, loginWithGoogle } = useAuth();
  const { t } = useLang();
  const nav = useNavigate();

  useEffect(() => {
    setWarming(true);
    warmupRef.current = axios
      .get(API_ORIGIN + "/health", { timeout: 90000 })
      .catch(() => {})
      .finally(() => setWarming(false));
  }, []);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      if (warmupRef.current) {
        await warmupRef.current;
      }
      const result = await register(
        form.username.trim(),
        form.password,
        form.fullName.trim(),
        form.email.trim(),
      );
      if (result?.needsVerification) {
        setVerifyEmail(result.email || form.email);
        setDevConsole(!!result.devCodeInConsole);
        setNeedsVerify(true);
      } else if (result?.botUrl) {
        setBotUrl(result.botUrl);
      } else {
        nav("/chat");
      }
    } catch (ex) {
      setErr(ex.response?.data?.error || t.error_generic);
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle(credential) {
    setErr("");
    setBusy(true);
    try {
      const result = await loginWithGoogle(credential);
      if (result?.botUrl) {
        setBotUrl(result.botUrl);
      } else {
        nav("/chat");
      }
    } catch (ex) {
      setErr(ex.response?.data?.error || t.google_error);
    } finally {
      setBusy(false);
    }
  }

  if (botUrl) {
    return <TelegramConnect botUrl={botUrl} onSkip={() => nav("/chat")} />;
  }

  if (needsVerify) {
    return (
      <OTPVerify
        email={verifyEmail}
        devCodeInConsole={devConsole}
        onSuccess={() => nav("/chat")}
        onBack={() => setNeedsVerify(false)}
      />
    );
  }

  return (
    <div className={s.page}>
      {/* Shaxsiy sahifa — qidiruv tizimlarida indekslanmaydi */}
      <Seo title={t.seo_register_title} noindex />
      <div className={s.formSide}>
        <div className={s.card}>
          <div className={s.cardTop}>
            <Link to="/" className={s.logo}>
              <img
                src="/logo-96.png"
                alt="Huquq AI"
                className={s.logoImg}
                width="32"
                height="32"
              />
              <span>{t.nav_logo}</span>
            </Link>
            <LangSwitcher />
          </div>
          <h1 className={s.title}>{t.register_title}</h1>
          <p className={s.sub}>{t.register_sub}</p>
          {err && <div className={s.error}>{err}</div>}

          <GoogleButton
            labelKey="google_btn_register"
            onCredential={handleGoogle}
            disabled={busy}
          />

          <div className={s.divider}>
            <span>{t.divider_or_email}</span>
          </div>

          <form className={s.form} onSubmit={submit}>
            {/* To'rt maydon IKKI USTUNDA — shu bilan forma ~120px
                pasayadi va sahifa scrollsiz sig'adi. Tor ekranda
                (≤400px) CSS avtomatik bitta ustunga tushiradi. */}
            <div className={s.formGrid}>
            <label className={s.label}>
              {t.register_fullname}
              <input
                className={s.input}
                value={form.fullName}
                onChange={(e) =>
                  setForm((p) => ({ ...p, fullName: e.target.value }))
                }
                placeholder={t.register_fullname_ph}
              />
            </label>
            <label className={s.label}>
              Username
              <input
                className={s.input}
                value={form.username}
                onChange={(e) =>
                  setForm((p) => ({ ...p, username: e.target.value }))
                }
                placeholder={t.register_username_ph}
                required
                autoFocus
              />
            </label>
            <label className={s.label}>
              Email
              <input
                className={s.input}
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((p) => ({ ...p, email: e.target.value }))
                }
                placeholder={t.register_email_ph}
                required
              />
            </label>
            <label className={s.label}>
              {t.login_password}
              <input
                className={s.input}
                type="password"
                value={form.password}
                onChange={(e) =>
                  setForm((p) => ({ ...p, password: e.target.value }))
                }
                placeholder={t.register_password_ph}
                required
                minLength={6}
              />
            </label>
            </div>
            <button className={s.btn} type="submit" disabled={busy}>
              {busy ? t.register_loading : t.register_btn}
            </button>
            {warming && (
              <p
                style={{
                  fontSize: "12px",
                  color: "#888",
                  marginTop: "6px",
                  textAlign: "center",
                }}
              >
                ⏳ Server uyg'onmoqda, biroz kuting...
              </p>
            )}
          </form>
          <p className={s.legalNote}>
            {t.auth_legal_prefix}{" "}
            <Link to="/terms">{t.footer_legal_terms}</Link>{" "}
            {t.auth_legal_and}{" "}
            <Link to="/privacy">{t.footer_legal_privacy}</Link>
          </p>
          <p className={s.foot}>
            {t.register_have_account}{" "}
            <Link to="/login" className={s.link}>
              {t.register_login_link}
            </Link>
          </p>
        </div>
      </div>
      <IllustrationPanel
        titleKey="illustration_register_title"
        textKey="illustration_register_text"
      />
    </div>
  );
}

export default Login;
