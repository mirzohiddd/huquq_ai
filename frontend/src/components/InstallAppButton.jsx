import React, { lazy, Suspense, useEffect, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { useLang } from "../context/LangContext";
import {
  canPromptInstall,
  detectPlatform,
  isStandalone,
  openInRealBrowser,
  promptInstall,
  subscribeInstall,
  waitForPrompt,
} from "../utils/pwaInstall";
import s from "./InstallAppButton.module.css";

/* Qo'llanma oynasi faqat oxirgi chora — kerak bo'lganda yuklanadi */
const InstallGuide = lazy(() => import("./InstallGuide"));

/* Telegram/Instagram'dan haqiqiy brauzerga o'tib kelgan foydalanuvchi */
const cameForInstall =
  typeof window !== "undefined" &&
  new URLSearchParams(window.location.search).get("install") === "1";

/**
 * "Ilovani yuklash" tugmasi — iloji boricha BIR BOSISHDA o'rnatadi:
 *  1) brauzer o'rnatish oynasini bera olsa (Android Chrome/Edge/Samsung,
 *     kompyuterda Chrome/Edge) — darhol native oyna ochiladi;
 *  2) Telegram/Instagram ichki brauzeri — sayt avtomatik haqiqiy
 *     brauzerda ochiladi (Android: Chrome), u yerda tugma ajratiladi;
 *  3) oyna hali tayyor bo'lmasa — qisqa kutiladi;
 *  4) faqat shundan keyin qo'llanma (asosan iPhone: Apple veb-saytlarga
 *     avtomatik o'rnatishga ruxsat bermaydi).
 */
export default function InstallAppButton({ variant = "hero", className = "" }) {
  const { t } = useLang();
  const [, force] = useState(0);
  const [guide, setGuide] = useState(null);
  const [busy, setBusy] = useState(false);
  const [installed, setInstalled] = useState(isStandalone);

  useEffect(() => {
    const off = subscribeInstall(() => force((n) => n + 1));
    const mq = window.matchMedia?.("(display-mode: standalone)");
    const onMode = () => setInstalled(isStandalone());
    mq?.addEventListener?.("change", onMode);
    return () => {
      off();
      mq?.removeEventListener?.("change", onMode);
    };
  }, []);

  if (installed) return null;

  async function handleClick() {
    if (busy) return;
    const platform = detectPlatform();

    if (canPromptInstall()) {
      await promptInstall();
      return;
    }

    if (platform === "inapp") {
      /* Android'da Chrome ochiladi — qo'llanma kerak emas */
      if (openInRealBrowser()) return;
      setGuide(platform);
      return;
    }

    if (platform !== "ios") {
      setBusy(true);
      const ready = await waitForPrompt();
      setBusy(false);
      if (ready) {
        await promptInstall();
        return;
      }
    }
    setGuide(platform);
  }

  const attention = cameForInstall && variant === "hero" ? s.attention : "";

  return (
    <>
      <button
        type="button"
        className={`${s.btn} ${s[variant] || ""} ${attention} ${className}`}
        onClick={handleClick}
        aria-busy={busy}
      >
        {busy ? (
          <Loader2 size={variant === "footer" ? 14 : 16} className={s.spin} aria-hidden="true" />
        ) : (
          <Download size={variant === "footer" ? 14 : 16} aria-hidden="true" />
        )}
        {t.install_app}
      </button>
      {guide && (
        <Suspense fallback={null}>
          <InstallGuide platform={guide} onClose={() => setGuide(null)} />
        </Suspense>
      )}
    </>
  );
}
