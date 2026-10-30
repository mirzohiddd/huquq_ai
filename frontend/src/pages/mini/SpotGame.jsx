/**
 * O'YIN: hujjatdagi muhim joyni topish (chek, shartnoma, SMS).
 */
import React, { useState } from "react";
import { CircleCheck } from "lucide-react";
import { haptic } from "./tg";
import s from "./Lesson.module.css";

export default function SpotGame({ game, check, onSolved, t }) {
  const [wrong, setWrong] = useState([]);
  const [res, setRes] = useState(null);
  const [busy, setBusy] = useState(false);

  const submit = async (line, reveal = false) => {
    if (res || busy) return;
    setBusy(true);
    try {
      const r = await check({ line, reveal });
      if (r.ok || reveal) {
        setRes({ ...r, revealed: !r.ok });
        haptic(r.ok ? "success" : "light");
        onSolved(r.answer);
      } else {
        setWrong((w) => [...w, line]);
        haptic("error");
      }
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h3 className={s.q}>{game.prompt}</h3>
      <p className={s.hint}>{t.spotHint}</p>
      <div className={s.doc}>
        <div className={s.docTitle}>{game.title}</div>
        {game.lines.map((line, i) => {
          const cls = res && i === res.answer ? s.lineRight : wrong.includes(i) ? s.lineWrong : "";
          return (
            <button key={i} type="button" className={`${s.docLine} ${cls}`} onClick={() => submit(i)} disabled={!!res || wrong.includes(i)}>
              {line}
            </button>
          );
        })}
      </div>
      {res && (
        <div className={`${s.verdict} ${s.vRight}`} role="status">
          <div className={s.vHead}><CircleCheck aria-hidden="true" /><b>{res.revealed ? t.showAnswer : t.right}</b></div>
          <p>{res.why}</p>
        </div>
      )}
      {!res && wrong.length >= 2 && (
        <button type="button" className={s.btnSoft} onClick={() => submit(-1, true)} disabled={busy}>{t.showAnswer}</button>
      )}
    </div>
  );
}
