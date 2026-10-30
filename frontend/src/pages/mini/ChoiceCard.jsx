/**
 * TANLOV — savol + 3 ta javob. Javob serverda tekshiriladi, so'ng tanlangan
 * javobning nima uchun to'g'ri yoki xato ekani ko'rsatiladi.
 * Dars, vaziyat va takrorlashda bir xil ishlatiladi.
 */
import React, { useEffect, useRef, useState } from "react";
import { CircleCheck, CircleX, Lightbulb, LoaderCircle } from "lucide-react";
import { haptic } from "./tg";
import s from "./Lesson.module.css";

export default function ChoiceCard({ q, options, onAnswer, onExplain, t }) {
  const [picked, setPicked] = useState(null);
  const [res, setRes] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);
  const verdict = useRef(null);
  useEffect(() => {
    if (res) verdict.current?.scrollIntoView?.({ behavior: "smooth", block: "nearest" });
  }, [res]);

  const pick = async (i) => {
    if (res || busy) return;
    setPicked(i);
    setBusy(true);
    setErr(false);
    try {
      const r = await onAnswer(i);
      setRes(r);
      haptic(r.ok ? "success" : "error");
    } catch {
      setErr(true);
      setPicked(null);
    } finally {
      setBusy(false);
    }
  };

  const state = (i) => {
    if (!res) return picked === i ? s.optBusy : "";
    if (i === res.correct) return s.optRight;
    if (i === picked) return s.optWrong;
    return s.optDim;
  };

  return (
    <div className={s.choice}>
      <h3 className={s.q}>{q}</h3>
      <div className={s.options}>
        {options.map((o, i) => (
          <button key={i} type="button" className={`${s.opt} ${state(i)}`} onClick={() => pick(i)} disabled={!!res}>
            <span className={s.optKey}>{"ABC"[i] || i + 1}</span>
            <span>{o}</span>
            {busy && picked === i && <LoaderCircle className={s.optSpin} aria-hidden="true" />}
          </button>
        ))}
      </div>
      {err && <p className={s.err}>{t.error}</p>}
      {res && (
        <div ref={verdict} className={`${s.verdict} ${res.ok ? s.vRight : s.vWrong}`} role="status">
          <div className={s.vHead}>
            {res.ok ? <CircleCheck aria-hidden="true" /> : <CircleX aria-hidden="true" />}
            <b>{res.ok ? t.right : t.wrong}</b>
          </div>
          <p>{res.why}</p>
          {!res.ok && res.rightWhy && <p className={s.vRightWhy}>{res.rightWhy}</p>}
          {onExplain && (
            <button type="button" className={s.explainBtn} onClick={onExplain}>
              <Lightbulb aria-hidden="true" /> {t.explain}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
