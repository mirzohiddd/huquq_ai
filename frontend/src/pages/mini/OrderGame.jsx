/**
 * O'YIN: kerakli harakatlarni ketma-ket joylashtirish.
 * Bandni bosib tanlang, so'ng ↑/↓ bilan joyini almashtiring (sensorli ekranda
 * sudrashdan ishonchliroq va ekran o'quvchi uchun ham qulay).
 */
import React, { useState } from "react";
import { ArrowUp, ArrowDown, CircleCheck } from "lucide-react";
import { haptic } from "./tg";
import s from "./Lesson.module.css";

export default function OrderGame({ game, check, onSolved, t }) {
  const [items, setItems] = useState(game.items);
  const [sel, setSel] = useState(null);
  const [res, setRes] = useState(null);
  const [tries, setTries] = useState(0);
  const [busy, setBusy] = useState(false);
  const solved = res?.ok || res?.revealed;

  const move = (i, d) => {
    const j = i + d;
    if (j < 0 || j >= items.length || solved) return;
    const next = [...items];
    [next[i], next[j]] = [next[j], next[i]];
    setItems(next);
    setSel(j);
    setRes(null);
    haptic("light");
  };

  const submit = async (reveal = false) => {
    setBusy(true);
    try {
      const r = await check({ order: items.map((x) => x.id), reveal });
      if (r.solution && (r.ok || reveal)) setItems(r.solution);
      setRes({ ...r, revealed: reveal && !r.ok });
      setTries((n) => n + 1);
      haptic(r.ok ? "success" : reveal ? "light" : "error");
      if (r.ok || reveal) onSolved(r.solution.map((x) => x.id));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div>
      <h3 className={s.q}>{game.prompt}</h3>
      <p className={s.hint}>{t.orderHint}</p>
      <ol className={s.order}>
        {items.map((it, i) => (
          <li key={it.id} className={`${s.orderItem} ${sel === i ? s.orderSel : ""} ${solved ? s.orderDone : ""}`}>
            <button type="button" className={s.orderText} onClick={() => setSel(sel === i ? null : i)} disabled={solved}>
              <span className={s.orderNum}>{i + 1}</span>
              {it.t}
            </button>
            {sel === i && !solved && (
              <span className={s.orderArrows}>
                <button type="button" onClick={() => move(i, -1)} disabled={i === 0} aria-label="Yuqoriga"><ArrowUp /></button>
                <button type="button" onClick={() => move(i, 1)} disabled={i === items.length - 1} aria-label="Pastga"><ArrowDown /></button>
              </span>
            )}
          </li>
        ))}
      </ol>
      {res && !res.ok && !res.revealed && <p className={s.partial}>{t.orderRight(res.right, res.total)}</p>}
      {solved && (
        <div className={`${s.verdict} ${s.vRight}`} role="status">
          <div className={s.vHead}><CircleCheck aria-hidden="true" /><b>{res.ok ? t.right : t.showAnswer}</b></div>
          <p>{res.why}</p>
        </div>
      )}
      {!solved && (
        <div className={s.row}>
          <button type="button" className={s.btnMain} onClick={() => submit(false)} disabled={busy}>{t.check}</button>
          {tries >= 2 && <button type="button" className={s.btnSoft} onClick={() => submit(true)} disabled={busy}>{t.showAnswer}</button>}
        </div>
      )}
    </div>
  );
}
