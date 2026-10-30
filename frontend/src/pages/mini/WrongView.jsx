/**
 * XATO JAVOB EKRANI — to'g'ri javob, izoh va variantlar tahlili ATAYLAB
 * ko'rsatilmaydi (server ham yubormaydi): foydalanuvchi mavzuni qayta o'qib,
 * javobni o'zi topishi kerak — aks holda u o'rganmay, javobni ko'chirib o'tadi.
 */
import React, { useEffect, useState } from "react";
import { X, ChevronRight, BookOpen, RotateCcw, Heart } from "lucide-react";
import { useHearts, openHearts } from "./heartsStore";
import Hero from "./Hero";
import { haptic } from "./tg";
import { sfx, speak, stopVoice } from "./sound";
import q from "./Quiz.module.css";

export default function WrongView({ t, hint, mainLabel, onMain, altLabel, onAlt, mainIcon = "book" }) {
  const [talking, setTalking] = useState(false);
  const { live } = useHearts();
  const none = live && live.hearts === 0;

  // Oxirgi yurakcha ketdi — to'ldirish oynasi o'zi ochiladi
  useEffect(() => {
    if (!none) return undefined;
    const id = setTimeout(openHearts, 1400);
    return () => clearTimeout(id);
  }, [none]);

  useEffect(() => {
    sfx("wrong");
    haptic("error");
    const id = setTimeout(() => speak(t.sadSay, setTalking), 450);
    return () => {
      clearTimeout(id);
      stopVoice();
    };
  }, [t]);

  return (
    <div className={q.screen}>
      <h2 className={`${q.title} ${q.resTitle}`}>{t.wrongTitle}</h2>
      <div className={q.heroBox}>
        <Hero mood="sad" size={170} talking={talking} />
      </div>
      <div className={`${q.answer} ${q.answerWrong}`}>
        <span className={q.answerIcon}><X /></span>
        <div><b>{hint}</b></div>
      </div>
      {live && (
        <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 12, color: "#b8323a", fontWeight: 700 }}>
          <Heart size={18} fill="#ff6b6f" color="#e5484d" aria-hidden="true" /> −1 · {t.hearts.label(live.hearts)}
        </p>
      )}
      <div className={q.footer} style={{ display: "grid", gap: 10 }}>
        <button type="button" className={q.main} onClick={onMain}>
          {mainIcon === "book" ? <BookOpen /> : mainIcon === "retry" ? <RotateCcw /> : null} {mainLabel} <ChevronRight className={q.chev} />
        </button>
        {onAlt && <button type="button" className={q.ghost} onClick={onAlt}><RotateCcw /> {altLabel}</button>}
      </div>
    </div>
  );
}
