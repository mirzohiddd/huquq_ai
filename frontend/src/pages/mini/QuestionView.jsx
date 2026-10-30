/**
 * SAVOL EKRANI — «Siz nima qilardingiz?»: illyustratsiya, vaziyat + savol,
 * radio-variantlar va «Tekshirish». Dars, vaziyat va takrorlashda bir xil.
 *
 * Variantlar HAR OCHILISHDA aralashtiriladi va oldingi tartib takrorlanmaydi —
 * xatodan keyin «qayta urinish»da javobni joyi bo'yicha eslab qolib bo'lmaydi.
 * Serverga variantning ASL raqami yuboriladi (tekshiruv serverda).
 */
import React, { useMemo, useState } from "react";
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

const lastOrder = new Map(); // savol → oxirgi ko'rsatilgan tartib

function shuffled(n, key) {
  const prev = lastOrder.get(key);
  let order;
  for (let k = 0; k < 8; k += 1) {
    order = [...Array(n).keys()];
    for (let i = n - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    // Qayta urinishda HAR BIR variant (to'g'risi ham) boshqa joyga o'tsin
    if (n < 2 || !prev || order.every((x, i) => x !== prev[i])) break;
  }
  lastOrder.set(key, order);
  return order;
}

export default function QuestionView({ icon, text, question, options, onCheck, t, tag, title }) {
  const [sel, setSel] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);
  const order = useMemo(() => shuffled(options.length, `${question}|${options.join("|")}`), [question, options]);

  const check = async () => {
    if (sel === null || busy) return;
    setBusy(true);
    setErr(false);
    try {
      await onCheck(order[sel]);
    } catch (e) {
      setErr(!e?.response?.data?.noHearts); // yurakcha tugagan — oyna ochiladi, xato yozilmaydi
      setBusy(false);
    }
  };

  return (
    <div className={q.screen}>
      {tag && <div className={q.tag}>{tag}</div>}
      <h2 className={q.title}>{title || t.whatWould}</h2>
      <Illustration icon={icon} />
      <p className={q.text}>
        {text} <b>{question}</b>
      </p>
      <div className={q.options} role="radiogroup">
        {order.map((oi, i) => ({ o: options[oi], i })).map(({ o, i }) => (
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
