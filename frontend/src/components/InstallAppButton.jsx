import React, { lazy, Suspense, useEffect, useState } from "react";
import { Download } from "lucide-react";
import { useLang } from "../context/LangContext";
import {
  canPromptInstall,
  detectPlatform,
  isStandalone,
  promptInstall,
  subscribeInstall,
} from "../utils/pwaInstall";
import s from "./InstallAppButton.module.css";

/* Qo'llanma oynasi faqat kerak bo'lganda yuklanadi (Android Chrome'da
   native oyna ochilgani uchun u umuman kerak bo'lmaydi) */
const InstallGuide = lazy(() => import("./InstallGuide"));

/**
 * "Ilovani yuklash" tugmasi.
 *  - Android (Chrome, Edge, Samsung Internet) → brauzerning O'Z o'rnatish
 *    oynasi ochiladi va ilova bir bosishda bosh ekranga tushadi;
 *  - kompyuter → saytni telefonda ochish qo'llanmasi (+ ixtiyoriy
 *    kompyuterga o'rnatish);
 *  - iPhone (Safari native oyna bermaydi), Telegram/Instagram ichki
 *    brauzeri va boshqalar → qadam-baqadam qo'llanma ko'rsatiladi;
 *  - ilova sifatida ochilgan bo'lsa tugma umuman ko'rinmaydi.
 */
export default function InstallAppButton({ variant = "hero", className = "" }) {
  const { t } = useLang();
  const [, force] = useState(0);
  const [guide, setGuide] = useState(null);
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
    const platform = detectPlatform();
    /* Kompyuterda to'g'ridan-to'g'ri o'rnatilmaydi — maqsad TELEFON.
       Qo'llanma telefonda ochishni ko'rsatadi, kompyuterga o'rnatish
       esa u yerda ikkinchi darajali tugma sifatida turadi. */
    if (platform === "android" && canPromptInstall()) {
      await promptInstall();
      return;
    }
    setGuide(platform);
  }

  return (
    <>
      <button
        type="button"
        className={`${s.btn} ${s[variant] || ""} ${className}`}
        onClick={handleClick}
      >
        <Download size={variant === "footer" ? 14 : 16} aria-hidden="true" />
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
