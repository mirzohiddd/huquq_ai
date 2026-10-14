import React, { useState } from "react";
import { X, Loader2, CheckCircle2, Send, Star, ShieldCheck } from "lucide-react";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import m from "./PaymentMethodModal.module.css";
import o from "./OrderModal.module.css";
import s from "./ReviewModal.module.css";

/**
 * SHARH QOLDIRISH oynasi (2026-10-14). Sharh `pending` holatida saqlanadi
 * va faqat admin tasdiqlagach Landing Page'da chiqadi. Oyna qobig'i
 * buyurtma oynasi bilan umumiy (PaymentMethodModal/OrderModal uslublari).
 */
export const MIN_TEXT = 20;
const MAX_TEXT = 600;

export default function ReviewModal({ initial, onClose, onSaved }) {
  const { t } = useLang();
  const [rating, setRating] = useState(initial?.rating || 5);
  const [hover, setHover] = useState(0);
  const [role, setRole] = useState(initial?.role || "");
  const [text, setText] = useState(initial?.text || "");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [done, setDone] = useState(false);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    if (text.trim().length < MIN_TEXT) return setErr(t.review_min);
    setBusy(true);
    try {
      const { data } = await api.post("/reviews", { rating, role, text });
      onSaved?.(data.review);
      setDone(true);
    } catch (ex) {
      setErr(ex.response?.data?.error || t.checkout_error);
    } finally {
      setBusy(false);
    }
  }

  const shown = hover || rating;

  return (
    <div className={m.overlay} onClick={onClose}>
      <div className={`${m.card} ${s.card}`} onClick={(e) => e.stopPropagation()}
        role="dialog" aria-modal="true" aria-labelledby="review-title">
        <button type="button" className={m.closeBtn} onClick={onClose} aria-label={t.order_close}>
          <X size={16} />
        </button>

        {done ? (
          <div className={o.success}>
            <span className={o.successIcon}>
              <CheckCircle2 size={34} />
            </span>
            <h4 className={o.successTitle}>{t.review_success_title}</h4>
            <p className={o.successText}>{t.review_success_text}</p>
            <button type="button" className={o.ghostBtn} onClick={onClose}>
              {t.order_close}
            </button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate>
            <h3 id="review-title" className={s.title}>{t.review_modal_title}</h3>
            <p className={o.lead}>{t.review_modal_lead}</p>

            <div className={s.stars} role="radiogroup" aria-label={t.review_rating}
              onMouseLeave={() => setHover(0)}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" role="radio" aria-checked={rating === n}
                  aria-label={`${n} / 5`} className={s.starBtn}
                  onMouseEnter={() => setHover(n)} onClick={() => setRating(n)}>
                  <Star size={28} className={n <= shown ? s.starOn : s.starOff} />
                </button>
              ))}
            </div>

            <label className={o.label}>
              {t.review_text_label}
              <textarea className={`${o.input} ${s.textarea}`} value={text} rows={5}
                maxLength={MAX_TEXT} placeholder={t.review_text_ph}
                onChange={(e) => setText(e.target.value)} required />
              <span className={s.counter}>{text.trim().length} / {MAX_TEXT}</span>
            </label>

            <label className={o.label}>
              {t.review_role_label}
              <input className={o.input} value={role} maxLength={40}
                placeholder={t.review_role_ph} onChange={(e) => setRole(e.target.value)} />
            </label>

            {err && <div className={m.err}>{err}</div>}

            <button type="submit" className={m.confirmBtn} disabled={busy}>
              {busy ? (
                <><Loader2 size={15} className={m.spin} /> {t.order_sending}</>
              ) : (
                <><Send size={15} /> {t.review_submit}</>
              )}
            </button>
            <div className={m.secureNote}>
              <ShieldCheck size={13} /> {t.review_note}
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
