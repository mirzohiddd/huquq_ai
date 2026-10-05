import { useState } from "react";
import { CheckCircle2, Mail } from "lucide-react";
import { useLang } from "../../context/LangContext";
import api from "../../utils/api";
import Field from "./Field";
import s from "./AuthForm.module.css";

/* ───────── Parolni tiklash so'rovi (admin orqali) ─────────
   (AuthPages.jsx dan ko'chirildi, mantiq o'zgarmagan, 2026-10-05.)
   BUG FIX: avval `axios.post("/api/support")` — NISBIY manzilga so'rov
   ketardi va backendga umuman yetib bormasdi. Endi `api` instansiyasi
   orqali POST /api/auth/forgot-password: admin panelida "Parolni tiklash"
   murojaati paydo bo'ladi, admin yangi parolni foydalanuvchi emailiga
   yuboradi. */
export default function ForgotPasswordModal({ onClose }) {
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
      await api.post("/auth/forgot-password", { email: form.email.trim(), message: form.message.trim() });
      setSuccess(true);
    } catch (ex) {
      setErr(ex.response?.data?.error || t.support_error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} role="dialog" aria-modal="true" aria-label={t.forgot_title} onClick={(e) => e.stopPropagation()}>
        <div className={s.modalHead}>
          <h2>{t.forgot_title}</h2>
          <button type="button" className={s.modalClose} onClick={onClose} aria-label="×">
            ×
          </button>
        </div>

        {success ? (
          <>
            <div className={s.success} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
              <span>{t.forgot_success}</span>
            </div>
            <button className={s.btn} type="button" onClick={onClose} style={{ marginTop: "1rem" }}>
              {t.forgot_back_to_login}
            </button>
          </>
        ) : (
          <>
            <p className={s.modalDesc}>{t.forgot_desc}</p>
            {err && <div className={s.error}>{err}</div>}
            <form className={s.form} onSubmit={handleSubmit}>
              <Field
                label={t.forgot_email_label}
                icon={Mail}
                type="email"
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="email@example.com"
                autoComplete="email"
                required
                autoFocus
              />
              <div>
                <label className={s.label} htmlFor="forgot-note">
                  {t.forgot_note_label}
                </label>
                <textarea
                  id="forgot-note"
                  className={s.textarea}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder={t.forgot_note_ph}
                  rows={3}
                  maxLength={500}
                />
              </div>
              <button className={s.btn} type="submit" disabled={busy}>
                {busy ? t.forgot_sending : t.forgot_submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
