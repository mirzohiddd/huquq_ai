import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, AtSign, Lock, Mail, Phone, User } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useLang } from "../../context/LangContext";
import Seo from "../../components/Seo";
import BrandLogo from "../../components/brand/BrandLogo";
import { formatPhoneInput } from "../../utils/phone";
import AuthShell from "./AuthShell";
import { AuthSwitchLink } from "./AuthSwitch";
import Field from "./Field";
import GoogleButton from "./GoogleButton";
import OTPVerify from "./OTPVerify";
import TelegramConnect from "./TelegramConnect";
import useServerWarmup from "./useServerWarmup";
import s from "./AuthForm.module.css";

/* ───────── Ro'yxatdan o'tish sahifasi ─────────
   2026-10-05 namuna bo'yicha qayta dizayn. Backend talab qiladigan
   maydonlar SAQLANDI (ism, familiya, telefon — admin buyurtmalari uchun
   kerak, 2026-10-03); namunadagi "parolni tasdiqlang" va shartlarga
   rozilik belgisi qo'shildi (ikkalasi ham faqat brauzerda tekshiriladi). */
export default function RegisterPage() {
  const [form, setForm] = useState({ username: "", password: "", confirm: "", firstName: "", lastName: "", phone: "+998 ", email: "" });
  const [agree, setAgree] = useState(false);
  const [errField, setErrField] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [needsVerify, setNeedsVerify] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState("");
  const [devConsole, setDevConsole] = useState(false);
  const [botUrl, setBotUrl] = useState(null);
  const { warming, waitReady } = useServerWarmup();
  const { register, loginWithGoogle } = useAuth();
  const { t } = useLang();
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (form.password !== form.confirm) {
      setErr(t.auth_password_mismatch);
      setErrField("confirm");
      return;
    }
    if (!agree) {
      setErr(t.auth_agree_required);
      return;
    }
    setBusy(true);
    try {
      await waitReady();
      const result = await register(
        form.username.trim(),
        form.password,
        { firstName: form.firstName.trim(), lastName: form.lastName.trim(), phone: form.phone.trim() },
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
      setErrField(ex.response?.data?.field || "");
    } finally {
      setBusy(false);
    }
  }

  const handleGoogle = useCallback(
    async (credential) => {
      setErr("");
      setBusy(true);
      try {
        const result = await loginWithGoogle(credential);
        if (result?.botUrl) setBotUrl(result.botUrl);
        else nav("/chat");
      } catch (ex) {
        setErr(ex.response?.data?.error || t.google_error);
      } finally {
        setBusy(false);
      }
    },
    [loginWithGoogle, nav, t.google_error],
  );

  if (botUrl) return <TelegramConnect botUrl={botUrl} onSkip={() => nav("/chat")} />;
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

  // Maydon o'zgarganda o'sha maydondagi xato belgisi o'chadi
  const field = (k) => ({
    value: form[k],
    error: errField === k,
    onChange: (e) => {
      const v = k === "phone" ? formatPhoneInput(e.target.value) : e.target.value;
      setForm((p) => ({ ...p, [k]: v }));
      if (errField === k) setErrField("");
    },
  });

  return (
    <AuthShell>
      {/* Shaxsiy sahifa — qidiruv tizimlarida indekslanmaydi */}
      <Seo title={t.seo_register_title} noindex />
      <Link to="/" className={s.cardLogo} aria-label="HuquqTech">
        <BrandLogo size="md" />
      </Link>
      <h1 className={s.title}>{t.register_title}</h1>
      <p className={s.sub}>{t.auth_register_sub}</p>
      {err && <div className={s.error}>{err}</div>}

      <form className={s.form} onSubmit={submit}>
        <div className={s.row2}>
          <Field label={t.register_first_name} icon={User} {...field("firstName")} placeholder={t.register_first_name_ph} autoComplete="given-name" required autoFocus />
          <Field label={t.register_last_name} icon={User} {...field("lastName")} placeholder={t.register_last_name_ph} autoComplete="family-name" required />
        </div>
        <Field label={t.auth_email_label} icon={Mail} type="email" {...field("email")} placeholder="example@mail.uz" autoComplete="email" required />
        <div className={s.row2}>
          <Field label={t.register_phone} icon={Phone} type="tel" inputMode="tel" {...field("phone")} placeholder="+998 90 123 45 67" autoComplete="tel" required />
          <Field label={t.auth_username_label} icon={AtSign} {...field("username")} placeholder={t.register_username_ph} autoComplete="username" required />
        </div>
        <Field label={t.login_password} icon={Lock} type="password" {...field("password")} placeholder={t.register_password_ph} autoComplete="new-password" minLength={8} required />
        <Field label={t.auth_confirm_label} icon={Lock} type="password" {...field("confirm")} placeholder={t.auth_confirm_ph} autoComplete="new-password" minLength={8} required />

        <label className={s.check}>
          <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} required />
          <span>
            {t.auth_agree_prefix} <Link to="/terms">{t.auth_agree_terms}</Link> {t.auth_legal_and}{" "}
            <Link to="/privacy">{t.auth_agree_privacy}</Link> {t.auth_agree_suffix}
          </span>
        </label>

        <button className={s.btn} type="submit" disabled={busy}>
          {busy ? t.register_loading : t.register_title}
          {!busy && <ArrowRight size={19} aria-hidden="true" />}
        </button>
        {warming && <p className={s.warm}>⏳ {t.auth_warming}</p>}
      </form>

      <div className={s.divider}>{t.divider_or}</div>
      <GoogleButton labelKey="google_btn_register" onCredential={handleGoogle} disabled={busy} />

      <p className={s.foot}>
        {t.auth_already}
        <AuthSwitchLink to="/login">{t.register_login_link}</AuthSwitchLink>
      </p>
    </AuthShell>
  );
}
