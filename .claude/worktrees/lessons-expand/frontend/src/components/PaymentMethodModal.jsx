import React, { useState } from "react";
import { X, ShieldCheck, Loader2, FlaskConical, ArrowLeft, ChevronRight } from "lucide-react";
import { PAYMENT_PROVIDERS } from "./PaymentLogos";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import s from "./PaymentMethodModal.module.css";

/**
 * Professional checkout oynasi (Stripe/premium SaaS uslubida):
 * 1-qadam — tanlangan tarif va narx ko'rsatiladi, foydalanuvchi
 * to'lov usulini (Click/Payme/Uzum, logo bilan) tanlaydi.
 * 2-qadam — agar tanlangan provayder hali sozlanmagan bo'lsa (merchant
 * kalitlari yo'q), backend testMode qaytaradi va shu yerda "test to'lov"
 * tasdiqlash qadami ko'rsatiladi — adminsiz, darhol tarif yoqiladi.
 * Sozlangan provayder uchun haqiqiy checkout sahifasiga yo'naltiriladi.
 */
export default function PaymentMethodModal({ tier, planLabel, priceUzs, onClose, onActivated }) {
  const { t } = useLang();
  const [step, setStep] = useState("choose"); // choose | confirm
  const [selected, setSelected] = useState(null);
  const [testCheckout, setTestCheckout] = useState(null);
  const [confirming, setConfirming] = useState(false);
  const [err, setErr] = useState("");

  async function choose(provider) {
    if (selected) return;
    setSelected(provider);
    setErr("");
    try {
      const { data } = await api.post("/payment/checkout", { provider, tier });
      if (data.testMode) {
        setTestCheckout(data);
        setStep("confirm");
        setSelected(null);
        return;
      }
      window.location.href = data.url;
    } catch (ex) {
      setErr(ex.response?.data?.error || t.checkout_error);
      setSelected(null);
    }
  }

  async function confirmTest() {
    setConfirming(true);
    setErr("");
    try {
      await api.post("/payment/test/confirm", {
        merchantTransId: testCheckout.merchantTransId,
      });
      onActivated(tier);
    } catch (ex) {
      setErr(ex.response?.data?.error || t.testpay_error);
      setConfirming(false);
    }
  }

  return (
    <div className={s.overlay} onClick={onClose}>
      <div className={s.card} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={s.closeBtn} onClick={onClose}>
          <X size={16} />
        </button>

        {step === "choose" && (
          <>
            <div className={s.head}>
              <span className={s.headLabel}>{t.checkout_selected_plan}</span>
              <h3 className={s.planName}>{planLabel}</h3>
              <div className={s.price}>
                {Number(priceUzs).toLocaleString("ru-RU")}
                <span>
                  {t.currency_uzs} {t.pricing_per_month}
                </span>
              </div>
            </div>

            <p className={s.chooseLabel}>{t.checkout_choose_method}</p>

            <div className={s.methods}>
              {PAYMENT_PROVIDERS.map(({ id, Logo }) => (
                <button
                  key={id}
                  type="button"
                  className={s.methodBtn}
                  disabled={!!selected}
                  onClick={() => choose(id)}
                >
                  <span className={s.methodLogo}>
                    <Logo />
                  </span>
                  {selected === id ? (
                    <Loader2 size={16} className={s.spin} />
                  ) : (
                    <ChevronRight size={16} className={s.methodArrow} />
                  )}
                </button>
              ))}
            </div>

            {err && <div className={s.err}>{err}</div>}

            <div className={s.secureNote}>
              <ShieldCheck size={13} /> {t.checkout_secure_note}
            </div>
          </>
        )}

        {step === "confirm" && testCheckout && (
          <>
            <button type="button" className={s.backBtn} onClick={() => setStep("choose")}>
              <ArrowLeft size={14} /> {t.checkout_back}
            </button>

            <div className={s.testBadge}>
              <FlaskConical size={12} /> {t.testpay_badge}
            </div>

            <h3 className={s.title}>{t.testpay_title}</h3>
            <p className={s.desc}>{t.testpay_desc}</p>

            <div className={s.summary}>
              <span>{testCheckout.planLabel}</span>
              <strong>
                {Number(testCheckout.amount).toLocaleString("ru-RU")}{" "}
                {t.currency_uzs}
              </strong>
            </div>

            <div className={s.secureNote}>
              <ShieldCheck size={13} /> {t.testpay_note}
            </div>

            {err && <div className={s.err}>{err}</div>}

            <button
              type="button"
              className={s.confirmBtn}
              onClick={confirmTest}
              disabled={confirming}
            >
              {confirming ? (
                <>
                  <Loader2 size={15} className={s.spin} /> {t.testpay_processing}
                </>
              ) : (
                t.testpay_confirm
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
