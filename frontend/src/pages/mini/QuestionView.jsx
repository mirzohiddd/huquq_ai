/**
 * SAVOL EKRANI — «Siz nima qilardingiz?»: illyustratsiya, vaziyat + savol,
 * radio-variantlar va «Tekshirish». Dars, vaziyat va takrorlashda bir xil.
 */
import React, { useState } from "react";
import { ChevronRight, LoaderCircle } from "lucide-react";
import { iconOf } from "./icons";
import { haptic } from "./tg";
import { sfx } from "./sound";
import q from "./Quiz.module.css";

export function Illustration({ icon }) {
  const Icon = iconOf(icon);
  return (
    <div className={q.illus} aria-hidden="true">
      <span className={q.ray1} />
      <span className={q.ray2} />
      <Icon className={q.illusIcon} strokeWidth={1.6} />
    </div>
  );
}

export default function QuestionView({ icon, text, question, options, onCheck, t, tag }) {
  const [sel, setSel] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  const check = async () => {
    if (sel === null || busy) return;
    setBusy(true);
    setErr(false);
    try {
      await onCheck(sel);
    } catch {
      setErr(true);
      setBusy(false);
    }
  };

  return (
    <div className={q.screen}>
      {tag && <div className={q.tag}>{tag}</div>}
      <h2 className={q.title}>{t.whatWould}</h2>
      <Illustration icon={icon} />
      <p className={q.text}>
        {text} <b>{question}</b>
      </p>
      <div className={q.options} role="radiogroup">
        {options.map((o, i) => (
          <button
            key={i}
            type="button"
            role="radio"
            aria-checked={sel === i}
            className={`${q.opt} ${sel === i ? q.optOn : ""}`}
            onClick={() => {
              setSel(i);
              sfx("tap");
              haptic("light");
            }}
          >
            <span className={q.radio} />
            <span>{o}</span>
          </button>
        ))}
      </div>
      {err && <p className={q.err}>{t.error}</p>}
      <div className={q.footer}>
        <button type="button" className={q.main} disabled={sel === null || busy} onClick={check}>
          {busy ? <LoaderCircle className={q.spin} /> : <>{t.check} <ChevronRight className={q.chev} /></>}
        </button>
      </div>
    </div>
  );
}
