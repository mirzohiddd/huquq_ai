import React, { useState } from "react";
import { AlertTriangle, X, Loader2 } from "lucide-react";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import s from "./CancelPlanModal.module.css";

/**
 * Foydalanuvchi joriy pullik tarifini o'zi bekor qilmoqchi bo'lganda
 * ko'rsatiladigan ogohlantirish oynasi. Admin tasdig'i talab qilinmaydi —
 * tasdiqlansa /payment/cancel darhol chaqiriladi va tarif Bepulga
 * tushadi. Pul qaytarilmasligi va qayta sotib olish kerakligi ochiq
 * matnda ko'rsatiladi.
 */
export default function CancelPlanModal({ planLabel, onClose, onCancelled }) {
  const { t } = useLang();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  async function confirmCancel() {
    setBusy(true);
    setErr("");
    try {
      await api.post("/payment/cancel");
      onCancelled();
    } catch (ex) {
      setErr(ex.response?.data?.error || t.cancel_plan_error);
      setBusy(false);
    }
  }

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.card} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={s.closeBtn} onClick={onClose}>
          <X size={16} />
        </button>

        <div className={s.icon}>
          <AlertTriangle size={26} />
        </div>

        <h3 className={s.title}>
          {t.cancel_plan_title.replace("{plan}", planLabel)}
        </h3>
        <p className={s.desc}>{t.cancel_plan_desc}</p>

        {err && <div className={s.err}>{err}</div>}

        <div className={s.actions}>
          <button type="button" className={s.keepBtn} onClick={onClose}>
            {t.cancel_plan_keep}
          </button>
          <button
            type="button"
            className={s.confirmBtn}
            onClick={confirmCancel}
            disabled={busy}
          >
            {busy ? <Loader2 size={15} className={s.spin} /> : t.cancel_plan_confirm}
          </button>
        </div>
      </div>
    </div>
  );
}
