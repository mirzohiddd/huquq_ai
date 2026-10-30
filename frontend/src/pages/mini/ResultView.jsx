/**
 * NATIJA EKRANI — «To'g'ri javob!» / «Noto'g'ri javob»: qalqon (gapiradi),
 * to'g'ri javob kartasi, «Nega?», variantlar tahlili, «Manbani ko'rish», «AI bilan tushunish».
 */
import React, { useEffect, useState } from "react";
import { Check, X, ChevronRight, Link2, Sparkles } from "lucide-react";
import Hero from "./Hero";
import { ReviewList } from "./LessonSteps";
import { haptic } from "./tg";
import { sfx, speak, stopVoice } from "./sound";
import q from "./Quiz.module.css";

// Izoh boshidagi «To'g'ri.» / «Xato.» — sarlavhada allaqachon bor
const clean = (s = "") => s.replace(/^(To'g'ri|Xato|Верно|Неверно|Правильно|Неправильно)\s*[.!,—–-]\s*/i, "");

export default function ResultView({ res, t, onNext, nextLabel, onSource, onExplain, xp }) {
  const [talking, setTalking] = useState(false);

  useEffect(() => {
    sfx(res.ok ? "right" : "wrong");
    haptic(res.ok ? "success" : "error");
    const line = res.ok ? `${t.rightTitle} ${clean(res.rightWhy)}` : `${t.sadSay} ${clean(res.rightWhy)}`;
    const id = setTimeout(() => speak(line, setTalking), 450); // kuy tugagach gapiradi
    return () => {
      clearTimeout(id);
      stopVoice();
    };
  }, [res, t]);

  const why = res.ok ? clean(res.why) : `${clean(res.why)} ${clean(res.rightWhy)}`;

  return (
    <div className={q.screen}>
      <h2 className={`${q.title} ${q.resTitle}`}>{res.ok ? t.rightTitle : t.wrongTitle}</h2>
      {xp > 0 && <p style={{ textAlign: "center", margin: "-4px 0 6px", fontWeight: 800, color: "#b8872a" }}>+{xp} XP</p>}
      <div className={q.heroBox}>
        <Hero mood={res.ok ? "cheer" : "sad"} size={170} talking={talking} />
      </div>
      <div className={`${q.answer} ${res.ok ? "" : q.answerWrong}`}>
        <span className={q.answerIcon}>{res.ok ? <Check /> : <X />}</span>
        <div>
          {!res.ok && <small>{t.rightAnswer}</small>}
          <b>{res.rightText}</b>
        </div>
      </div>
      <div className={q.why}>
        <div className={q.whyHead}>
          <span className={q.bulb} aria-hidden="true">💡</span>
          <b>{t.whyTitle}</b>
        </div>
        <p>{why}</p>
      </div>
      <ReviewList items={res.review} t={t} />
      {onSource && (
        <button type="button" className={q.ghost} onClick={onSource}>
          <Link2 /> {t.source} <ChevronRight className={q.chev} />
        </button>
      )}
      {onExplain && (
        <button type="button" className={q.ghost} onClick={onExplain}>
          <Sparkles /> {t.aiExplain} <ChevronRight className={q.chev} />
        </button>
      )}
      <div className={q.footer}>
        <button type="button" className={q.main} onClick={onNext}>
          {nextLabel} <ChevronRight className={q.chev} />
        </button>
      </div>
    </div>
  );
}
