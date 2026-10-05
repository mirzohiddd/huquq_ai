import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { useLang } from "../../context/LangContext";
import AuthShell from "./AuthShell";
import TelegramConnect from "./TelegramConnect";
import s from "./AuthForm.module.css";

/* ───────── OTP tasdiqlash ekrani ─────────
   (AuthPages.jsx dan ko'chirildi, mantiq o'zgarmagan, 2026-10-05.) */
export default function OTPVerify({ email, onSuccess, onBack, devCodeInConsole = false }) {
  const [otp, setOtp] = useState("");
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const [resent, setResent] = useState(false);
  const [timer, setTimer] = useState(60);
  const [botUrl, setBotUrl] = useState(null);
  const { verifyOtp, resendOtp } = useAuth();
  const { t } = useLang();

  useEffect(() => {
    if (timer <= 0) return undefined;
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
      // BUG FIX: botUrl bo'lsa — Telegram ulash ekrani
      if (result?.botUrl) setBotUrl(result.botUrl);
      else onSuccess?.();
    } catch (ex) {
      setErr(ex.response?.data?.error || t.otp_error);
    } finally {
      setBusy(false);
    }
    return undefined;
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

  if (botUrl) return <TelegramConnect botUrl={botUrl} onSkip={() => onSuccess?.()} />;

  return (
    <AuthShell>
      <div className={s.otpIcon}>
        <Mail size={30} />
      </div>
      <h1 className={s.title}>{t.otp_title}</h1>
      <p className={s.sub}>
        <strong>{email}</strong> {t.otp_sent}
      </p>
      {/* Test rejimi: kod pochtaga emas, server konsoliga yozilgan. Buni
          aytmaslik foydalanuvchini pochtasini bekorga kutishga majbur qilardi. */}
      {devCodeInConsole && <div className={s.notice}>{t.otp_dev_console}</div>}
      {err && <div className={s.error}>{err}</div>}
      {resent && <div className={s.success}>{t.otp_resent}</div>}
      <form className={s.form} onSubmit={handleVerify}>
        <input
          className={`${s.input} ${s.otpInput}`}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
          placeholder="_ _ _ _ _ _"
          aria-label={t.otp_title}
          autoComplete="one-time-code"
          autoFocus
        />
        <button className={s.btn} type="submit" disabled={busy || otp.length < 6}>
          {busy ? t.otp_verifying : t.otp_verify}
        </button>
      </form>
      <div className={s.otpFooter}>
        {timer > 0 ? (
          <span>
            {t.otp_timer}: {timer}s
          </span>
        ) : (
          <button type="button" className={s.linkBtn} onClick={handleResend} disabled={busy}>
            {t.otp_resend}
          </button>
        )}
        <button type="button" className={s.linkBtn} onClick={onBack}>
          {t.otp_back}
        </button>
      </div>
    </AuthShell>
  );
}
