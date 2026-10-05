import { useEffect, useRef, useState } from "react";
import { useLang } from "../../context/LangContext";
import { GoogleIcon } from "./icons";
import s from "./AuthForm.module.css";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || "";

/* ───────── Google Button ─────────
   (AuthPages.jsx dan o'zgarishsiz mantiq bilan ko'chirildi, 2026-10-05.)
   BUG FIX: agar joriy manzil (origin) Google Cloud Console'dagi OAuth
   client uchun "Authorized JavaScript origins" ro'yxatida bo'lmasa,
   Google skripti konsolga "The given origin is not allowed…" deb yozadi
   va 403 qaytaradi — lekin JS xatosi TASHLAMAYDI. Avvalgi kod shu holatda
   ham tugmani tayyor deb ko'rsatardi (jim o'lik tugma). Endi tugma
   haqiqatan render bo'lgani tekshiriladi; bo'lmasa aniq xabar
   ko'rsatiladi. To'liq hal qilish — Google Cloud Console'da origin
   qo'shish (frontend kodi bilan hal qilinmaydi). */
export default function GoogleButton({ labelKey, onCredential, disabled }) {
  const containerRef = useRef(null);
  const [gReady, setGReady] = useState(false);
  const [gFailed, setGFailed] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID) return undefined;
    let cancelled = false;
    let checkTimer = null;

    function renderRealButton() {
      if (cancelled || !window.google?.accounts?.id || !containerRef.current) return;
      containerRef.current.innerHTML = ""; // qayta init bo'lganda ikkilanmasin
      // ⚠️ Eni konteynerdan olinadi (qat'iy 320px tor telefonda chetga
      // chiqardi). Google 200-400px oralig'ini qabul qiladi.
      const boxW = Math.round(containerRef.current.getBoundingClientRect().width);
      window.google.accounts.id.renderButton(containerRef.current, {
        type: "standard",
        theme: "outline",
        size: "large",
        text: "continue_with",
        width: Math.max(200, Math.min(400, boxW || 320)),
      });
      // Google tugmani asinxron chizadi. Origin ruxsat etilmagan bo'lsa
      // konteyner bo'sh qoladi. Aniq selektor ishlatilmaydi — Google DOM'ini
      // o'zgartirgan kuni ishlayotgan tugma "ishlamayapti" bo'lib qolardi.
      checkTimer = setTimeout(() => {
        if (cancelled || !containerRef.current) return;
        if (containerRef.current.childElementCount > 0) {
          setGReady(true);
        } else {
          setGFailed(true);
          console.error(
            "[HuquqTech] Google bilan kirish ishlamayapti. Google Cloud Console → " +
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
      // BUG FIX: skript bor-u hali yuklanmagan bo'lsa ikkinchi nusxa
      // qo'shilmaydi — mavjudining `load` hodisasi kutiladi.
      if (window.google?.accounts?.id) initGoogle();
      else existing.addEventListener("load", initGoogle);
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
      <button type="button" className={s.googleBtn} disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
        <GoogleIcon />
        <span>{t.google_btn_disabled}</span>
      </button>
    );
  }

  // Google tugmasi yuklanmadi — o'lik tugma o'rniga aniq xabar.
  if (gFailed) {
    return (
      <div>
        <button type="button" className={s.googleBtn} disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
          <GoogleIcon />
          <span>{t.google_btn_disabled}</span>
        </button>
        <p style={{ margin: "0.5rem 0 0", fontSize: "12px", color: "#888", textAlign: "center", lineHeight: 1.45 }}>
          {t.google_unavailable}
          {import.meta.env.DEV && (
            <>
              <br />
              <span style={{ color: "#b45309" }}>
                Dev: Google Cloud Console'da "{window.location.origin}" manzilini Authorized JavaScript origins
                ro'yxatiga qo'shing.
              </span>
            </>
          )}
        </p>
      </div>
    );
  }

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Google'ning haqiqiy (rasmiy) tugmasi — ko'rinmas, lekin bosishni qabul qiladi */}
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
      {/* Saytning o'z dizayni — faqat ko'rinish uchun, bosishlarni o'tkazib yuboradi */}
      <button
        type="button"
        className={s.googleBtn}
        disabled={disabled || !gReady}
        tabIndex={-1}
        style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}
      >
        <GoogleIcon />
        <span>{gReady ? label : "..."}</span>
      </button>
    </div>
  );
}
