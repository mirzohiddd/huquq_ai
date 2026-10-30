/**
 * SERIYA ANIMATSIYASI — kunning birinchi darsidan keyin (Duolingo kabi):
 *   1) kulrang olov va eski son → 2) olov yonadi, uchqunlar sachraydi,
 *   son yangisiga aylanadi → 3) «kun ketma-ket», hafta kunlari va bugungi
 *   kunga belgi qo'yiladi → «Davom etish».
 * Ranglar ilovaniki (oltin + navy), harakat ketma-ketligi videodagidek.
 */
import React, { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { sfx } from "./sound";
import { haptic } from "./tg";
import s from "./Streak.module.css";

const SPARKS = [[-62, -30], [58, -44], [-40, -70], [30, -86], [72, 6], [-74, 10], [0, -100]];

export default function StreakScreen({ from = 0, to = 1, week = [], t, onDone }) {
  const [step, setStep] = useState(0); // 0 — kulrang, 1 — yondi, 2 — hafta
  useEffect(() => {
    const a = setTimeout(() => {
      setStep(1);
      sfx("lesson");
      haptic("success");
    }, 700);
    const b = setTimeout(() => setStep(2), 1700);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);
  const names = t.streak.week;

  return (
    <div className={s.wrap}>
      <div className={`${s.flame} ${step ? s.lit : ""}`}>
        <svg viewBox="0 0 120 140" aria-hidden="true">
          <ellipse cx="60" cy="132" rx="30" ry="6" className={s.shadow} />
          <path className={s.outer} d="M60 6 C76 30 104 48 104 86 C104 112 84 130 60 130 C36 130 16 112 16 86 C16 64 28 50 38 40 C40 56 46 64 54 66 C50 44 52 24 60 6 Z" />
          <path className={s.inner} d="M60 64 C70 78 82 88 82 102 C82 116 72 124 60 124 C48 124 38 116 38 102 C38 90 48 80 60 64 Z" />
        </svg>
        {step > 0 && (
          <div className={s.sparks}>
            {SPARKS.map(([x, y], i) => <i key={i} style={{ "--x": `${x}px`, "--y": `${y}px`, animationDelay: `${i * 0.04}s` }} />)}
          </div>
        )}
      </div>

      <div className={`${s.num} ${step ? s.numLit : ""}`}>
        <span key={step ? "to" : "from"} className={s.flip}>{step ? to : from}</span>
      </div>
      <div className={`${s.label} ${step > 1 ? s.show : ""}`}>{t.streak.days(to)}</div>

      <div className={`${s.card} ${step > 1 ? s.show : ""}`}>
        <div className={s.week}>
          {week.map((d, i) => (
            <div key={d.day} className={`${s.day} ${d.today ? s.today : ""}`}>
              <small>{names[i]}</small>
              <span className={`${s.dot} ${d.active ? s.dotOn : ""} ${d.today && step > 1 ? s.dotNow : ""}`}>
                {d.active && <Check aria-hidden="true" />}
              </span>
            </div>
          ))}
        </div>
        <p>{t.streak.keep}</p>
      </div>

      <div className={s.footer}>
        <button type="button" className={s.btn} onClick={onDone} disabled={step < 2}>{t.streak.next}</button>
      </div>
    </div>
  );
}
