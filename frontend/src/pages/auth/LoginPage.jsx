import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Lock, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useLang } from "../../context/LangContext";
import Seo from "../../components/Seo";
import BrandLogo from "../../components/brand/BrandLogo";
import AuthShell from "./AuthShell";
import Field from "./Field";
import GoogleButton from "./GoogleButton";
import OTPVerify from "./OTPVerify";
import ForgotPasswordModal from "./ForgotPasswordModal";
import useServerWarmup from "./useServerWarmup";
import s from "./AuthForm.module.css";

/* ───────── Kirish sahifasi ─────────
   (2026-10-05 namuna bo'yicha qayta dizayn — mantiq AuthPages.jsx dagi
   bilan bir xil: server uyg'onishini kutish, tasdiqlanmagan hisob → OTP,
   Google, parolni tiklash so'rovi.) */
export default function LoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [needsVerify, setNeedsVerify] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [showSupport, setShowSupport] = useState(false);
  const { warming, waitReady } = useServerWarmup();
  const { login, loginWithGoogle } = useAuth();
  const { t } = useLang();
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setErr("");
    setBusy(true);
    try {
      await waitReady();
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

  // useCallback: GoogleButton effekti `onCredential` ga bog'langan — har
  // renderda yangi funksiya bo'lsa Google tugmasi qayta chizilaverardi.
  const handleGoogle = useCallback(
    async (credential) => {
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
    },
    [loginWithGoogle, nav, t.google_error],
  );

  if (needsVerify) {
    return <OTPVerify email={verifyEmail} onSuccess={() => nav("/chat")} onBack={() => setNeedsVerify(false)} />;
  }

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  return (
    <AuthShell switchTo={{ to: "/register", text: t.login_no_account, link: t.login_register_link }}>
      {/* Shaxsiy sahifa — qidiruv tizimlarida indekslanmaydi */}
      <Seo title={t.seo_login_title} noindex />
      <Link to="/" className={s.cardLogo} aria-label="HuquqTech">
        <BrandLogo size="md" />
      </Link>
      <h1 className={s.title}>{t.login_title}</h1>
      <p className={s.sub}>{t.login_sub}</p>
      {err && <div className={s.error}>{err}</div>}

      <form className={s.form} onSubmit={submit}>
        <Field
          label={t.auth_login_label}
          icon={User}
          value={form.username}
          onChange={set("username")}
          placeholder={t.login_username_ph}
          autoComplete="username"
          required
          autoFocus
        />
        <Field
          label={t.login_password}
          icon={Lock}
          type="password"
          value={form.password}
          onChange={set("password")}
          placeholder={t.auth_password_ph}
          autoComplete="current-password"
          required
        />
        <div className={s.forgotRow}>
          <button type="button" className={s.linkBtn} onClick={() => setShowSupport(true)}>
            {t.tech_support}
          </button>
        </div>
        <button className={s.btn} type="submit" disabled={busy}>
          {busy ? t.login_loading : t.login_btn}
          {!busy && <ArrowRight size={19} aria-hidden="true" />}
        </button>
        {warming && <p className={s.warm}>⏳ {t.auth_warming}</p>}
      </form>

      <div className={s.divider}>{t.divider_or}</div>
      <GoogleButton labelKey="google_btn" onCredential={handleGoogle} disabled={busy} />

      <p className={s.legal}>
        {t.auth_legal_prefix} <Link to="/terms">{t.footer_legal_terms}</Link> {t.auth_legal_and}{" "}
        <Link to="/privacy">{t.footer_legal_privacy}</Link>
      </p>
      <p className={s.foot}>
        {t.login_no_account}
        <Link to="/register">{t.login_register_link}</Link>
      </p>
      {showSupport && <ForgotPasswordModal onClose={() => setShowSupport(false)} />}
    </AuthShell>
  );
}
