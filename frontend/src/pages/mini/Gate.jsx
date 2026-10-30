/**
 * MINI APP — kirish holatlari: yuklanish, Telegram tashqarisida, hisob yo'q, xato.
 */
import React from "react";
import { LoaderCircle, Send, RotateCcw } from "lucide-react";
import { BrandMark } from "../../components/brand/BrandLogo";
import Hero from "./Hero";
import { openLink } from "./tg";
import s from "./Mini.module.css";

const BOT_URL = "https://t.me/mening_huquqlarim_bot";

export const Spinner = ({ label, small }) => (
  <div className={small ? s.centerSmall : s.center}>
    <LoaderCircle className={s.spin} aria-hidden="true" />
    {label && <p className={s.spinLabel}>{label}</p>}
  </div>
);

export default function Gate({ phase, gate, t, onRetry }) {
  if (phase === "boot") {
    return (
      <div className={s.app}>
        <div className={s.center}>
          <div className={s.centerBox}>
            <BrandMark size={56} className={s.brandMark} />
            <LoaderCircle className={s.spin} aria-hidden="true" />
            <p>{t.loading}</p>
          </div>
        </div>
      </div>
    );
  }
  const view = {
    outside: { title: t.outsideTitle, text: t.outsideText, action: t.openBot, onClick: () => openLink(BOT_URL), Icon: Send },
    register: { title: t.registerTitle, text: t.registerText, action: t.openBot, onClick: () => openLink(gate?.bot || BOT_URL), Icon: Send },
    error: { title: t.error, text: "", action: t.retry, onClick: onRetry, Icon: RotateCcw },
  }[phase] || {};
  const { Icon } = view;
  return (
    <div className={s.app}>
      <div className={s.center}>
        <div className={`${s.centerBox} ${s.fadeIn}`}>
          <Hero mood={phase === "error" ? "think" : "wave"} size={130} />
          <h1 className={s.screenTitle}>{view.title}</h1>
          {view.text && <p>{view.text}</p>}
          <button type="button" className={`${s.btn} ${s.btnGold}`} onClick={view.onClick}>
            {Icon && <Icon size={18} aria-hidden="true" />}
            {view.action}
          </button>
        </div>
      </div>
    </div>
  );
}
