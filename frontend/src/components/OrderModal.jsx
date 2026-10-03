import React, { useState } from "react";
import { X, Loader2, CheckCircle2, ShieldCheck, Send } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import { formatPhoneInput, isPhoneComplete } from "../utils/phone";
import m from "./PaymentMethodModal.module.css";
import s from "./OrderModal.module.css";

/**
 * TARIF BUYURTMASI (2026-10-03).
 *
 * "Sotib olish" bosilganda ochiladi: ism, familiya va telefon (profildan
 * oldindan to'ldiriladi) tasdiqlanadi → POST /api/orders → adminga Telegram
 * xabari ketadi va admin mijozga shu raqam orqali yozadi.
 * Onlayn to'lov ulangan bo'lsa (`onlinePayment`), muvaffaqiyat ekranida
 * "Hozir onlayn to'lash" tugmasi ham chiqadi (eski PaymentMethodModal).
 */
function initialForm(user) {
  const [first = "", ...rest] = String(user?.fullName || "").trim().split(/\s+/);
  return {
    firstName: user?.firstName || first,
    lastName: user?.lastName || rest.join(" "),
    phone: formatPhoneInput(user?.phone || "+998"),
    telegramUsername: "",
  };
}

export default function OrderModal({ tier, planLabel, priceUzs, onlinePayment, onClose, onPayOnline }) {
  const { user } = useAuth();
  const { t } = useLang();
  const [form, setForm] = useState(() => initialForm(user));
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [errField, setErrField] = useState("");
  const [done, setDone] = useState(null); // { phone, duplicate }

  const set = (k) => (e) => {
    const v = k === "phone" ? formatPhoneInput(e.target.value) : e.target.value;
    setForm((p) => ({ ...p, [k]: v }));
    if (errField === k) setErrField("");
  };
  const cls = (k) => `${s.input} ${errField === k ? s.inputError : ""}`;

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (!isPhoneComplete(form.phone)) {
      setErrField("phone");
      setErr(t.order_phone_invalid);
      return;
    }
    setBusy(true);
    try {
      const { data } = await api.post("/orders", { tier, ...form });
      setDone({ phone: form.phone, duplicate: data.duplicate });
    } catch (ex) {
      setErr(ex.response?.data?.error || t.checkout_error);
      setErrField(ex.response?.data?.field || "");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className={m.overlay} onClick={onClose}>
      <div className={m.card} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <button type="button" className={m.closeBtn} onClick={onClose} aria-label={t.order_close}>
          <X size={16} />
        </button>

        <div className={m.head}>
          <span className={m.headLabel}>{t.checkout_selected_plan}</span>
          <h3 className={m.planName}>{planLabel}</h3>
          <div className={m.price}>
            {Number(priceUzs).toLocaleString("ru-RU")}
            <span>
              {t.currency_uzs} {t.pricing_per_month}
            </span>
          </div>
        </div>

        {done ? (
          <div className={s.success}>
            <span className={s.successIcon}>
              <CheckCircle2 size={34} />
            </span>
            <h4 className={s.successTitle}>{t.order_success_title}</h4>
            <p className={s.successText}>
              {done.duplicate
                ? t.order_duplicate
                : String(t.order_success_text).replace("{phone}", done.phone)}
            </p>
            {onlinePayment && (
              <button type="button" className={m.confirmBtn} onClick={onPayOnline}>
                {t.order_pay_online}
              </button>
            )}
            <button type="button" className={s.ghostBtn} onClick={onClose}>
              {t.order_close}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <p className={s.lead}>{t.order_desc}</p>
            <div className={s.row}>
              <label className={s.label}>
                {t.register_first_name}
                <input className={cls("firstName")} value={form.firstName} onChange={set("firstName")}
                  autoComplete="given-name" required />
              </label>
              <label className={s.label}>
                {t.register_last_name}
                <input className={cls("lastName")} value={form.lastName} onChange={set("lastName")}
                  autoComplete="family-name" required />
              </label>
            </div>
            <label className={s.label}>
              {t.register_phone}
              <input className={cls("phone")} type="tel" inputMode="tel" value={form.phone}
                onChange={set("phone")} placeholder="+998 90 123 45 67" autoComplete="tel" required />
            </label>
            <label className={s.label}>
              {t.order_tg_label}
              <input className={s.input} value={form.telegramUsername} onChange={set("telegramUsername")}
                placeholder="@username" autoComplete="off" />
            </label>

            {err && <div className={m.err}>{err}</div>}

            <button type="submit" className={m.confirmBtn} disabled={busy}>
              {busy ? (
                <>
                  <Loader2 size={15} className={m.spin} /> {t.order_sending}
                </>
              ) : (
                <>
                  <Send size={15} /> {t.order_submit}
                </>
              )}
            </button>
            <div className={m.secureNote}>
              <ShieldCheck size={13} /> {t.order_note}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
