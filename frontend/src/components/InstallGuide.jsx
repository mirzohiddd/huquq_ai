import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, Smartphone, Link2, Check, Monitor } from "lucide-react";
import { useLang } from "../context/LangContext";
import { scrollLockEffect } from "../utils/scrollLock";
import { canPromptInstall, promptInstall } from "../utils/pwaInstall";
import s from "./InstallGuide.module.css";

/* Brauzer native o'rnatish oynasini bermagan holatlar uchun qo'llanma.
   Platforma bo'yicha qadamlar `install_steps_{platform}` kalitlarida. */
export default function InstallGuide({ platform, onClose }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const steps = t[`install_steps_${platform}`] || t.install_steps_android || [];
  const siteUrl = window.location.origin;

  useEffect(() => scrollLockEffect(true), []);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard ruxsati yo'q — havola baribir ekranda ko'rinib turibdi */
    }
  }

  const showLink = platform === "desktop" || platform === "inapp";

  return createPortal(
    <div className={s.overlay} onClick={onClose} role="presentation">
      <div
        className={s.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="install-guide-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className={s.close}
          onClick={onClose}
          aria-label={t.install_close}
        >
          <X size={18} />
        </button>

        <div className={s.head}>
          <img src="/logo-96.png" alt="" width="56" height="56" />
          <div>
            <h3 id="install-guide-title">{t.install_guide_title}</h3>
            <p>{t[`install_sub_${platform}`] || t.install_guide_sub}</p>
          </div>
        </div>

        <ol className={s.steps}>
          {steps.map((step, i) => (
            <li key={i}>
              <span className={s.num}>{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        {showLink && (
          <div className={s.linkRow}>
            <span className={s.url}>
              <Smartphone size={15} aria-hidden="true" />
              {siteUrl.replace(/^https?:\/\//, "")}
            </span>
            <button type="button" className={s.copy} onClick={copyLink}>
              {copied ? <Check size={14} /> : <Link2 size={14} />}
              {copied ? t.install_copied : t.install_copy}
            </button>
          </div>
        )}

        {platform === "desktop" && canPromptInstall() && (
          <button
            type="button"
            className={s.desktopBtn}
            onClick={async () => {
              await promptInstall();
              onClose();
            }}
          >
            <Monitor size={15} aria-hidden="true" />
            {t.install_desktop_here}
          </button>
        )}

        <p className={s.note}>{t.install_note}</p>
      </div>
    </div>,
    document.body,
  );
}
