import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import s from "./DetailModal.module.css";

/**
 * Umumiy "batafsil ma'lumot" oynasi — Xizmatlar va Maqolalar bo'limlari
 * uchun BIR XIL qobiq ishlatiladi (ikkita alohida modal yozilsa, ular
 * vaqt o'tishi bilan bir-biridan uzoqlashib ketardi).
 *
 * Ichki kontent `children` orqali beriladi: xizmat uchun — ro'yxatlar,
 * maqola uchun — matn. Qobiq faqat ko'rinish va xatti-harakatni beradi:
 * fon, sarlavha, scroll, yopish tugmasi.
 *
 * Xulq-atvor:
 *  - Escape bosilganda yopiladi;
 *  - fon (overlay) bosilganda yopiladi, panel ichi bosilganda YO'Q;
 *  - ochilganda sahifa scrolli qulflanadi (ProfileModal'dagi kabi);
 *  - ochilganda fokus yopish tugmasiga o'tadi (klaviatura bilan
 *    boshqarish uchun) va oyna yopilgach oldingi elementga qaytadi.
 */
export default function DetailModal({
  icon: Icon,
  eyebrow,
  title,
  meta,
  closeLabel = "Yopish",
  footer,
  onClose,
  children,
}) {
  const overlayRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const prevActive = document.activeElement;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      if (prevActive instanceof HTMLElement) prevActive.focus();
    };
  }, [onClose]);

  /* ⚠️ PORTAL — SHART, bezak uchun emas.
     Oyna `position: fixed` bilan ekran markazida turadi. Lekin CSS
     qoidasiga ko'ra, ota-onalardan birortasida `transform`, `filter`
     yoki `will-change: transform` bo'lsa, `fixed` EKRANGA emas, o'sha
     ota-onaga nisbatan joylashadi.
     Loyihada bunday ota-onalar bor: `.animate-fade-up` (`animation-
     fill-mode: both` tugagach ham `transform: translateY(0)` ni ushlab
     turadi) va `.reveal` (`will-change: opacity, transform`).
     Natijada oyna sahifaning boshqa joyidan, pastdan chiqib kelardi va
     yarmi ekrandan tashqarida qolardi (o'lchangan: overlay top = −575px,
     panel 583→1117px, ekran esa atigi 950px).
     `document.body` ga ko'chirilgach, oyna ustida hech qanday
     transform qolmaydi va u har doim ekran markazida turadi. */
  return createPortal(
    <div
      ref={overlayRef}
      className={s.overlay}
      onClick={(e) => e.target === overlayRef.current && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className={s.panel}>
        <header className={s.head}>
          {Icon && (
            <span className={s.headIcon}>
              <Icon size={22} />
            </span>
          )}
          <div className={s.headText}>
            {eyebrow && <span className={s.eyebrow}>{eyebrow}</span>}
            <h2 className={s.title}>{title}</h2>
            {meta && <div className={s.meta}>{meta}</div>}
          </div>
          <button
            ref={closeRef}
            type="button"
            className={s.closeBtn}
            onClick={onClose}
            aria-label={closeLabel}
            title={closeLabel}
          >
            <X size={17} />
          </button>
        </header>

        <div className={s.body}>{children}</div>

        {footer && <footer className={s.footer}>{footer}</footer>}
      </div>
    </div>,
    document.body,
  );
}
