import React from "react";
import { ACCENT, fmtNum, fmtPct } from "./format";
import s from "./Analytics.module.css";

/** Gorizontal bar ro'yxati (manbalar, sahifalar, qurilmalar) — bitta rang. */
export default function BarList({ title, sub, rows, labels = {}, icons = {}, empty = "Hali ma'lumot yo'q" }) {
  const max = Math.max(1, ...rows.map((r) => r.value));
  const total = rows.reduce((a, r) => a + r.value, 0) || 1;
  return (
    <section className={s.card}>
      <header className={s.cardHead}>
        <div>
          <h2 className={s.cardTitle}>{title}</h2>
          {sub && <p className={s.cardSub}>{sub}</p>}
        </div>
      </header>
      {rows.length === 0 ? (
        <p className={s.emptySmall}>{empty}</p>
      ) : (
        <ul className={s.barList}>
          {rows.map((r) => (
            <li key={r.name} title={`${labels[r.name] || r.name}: ${fmtNum(r.value)}`}>
              <div className={s.barTop}>
                <span className={s.barName}>
                  {icons[r.name]}
                  {labels[r.name] || r.name}
                </span>
                <span className={s.barVal}>
                  <b>{fmtNum(r.value)}</b> <span>{fmtPct(r.value / total, 0)}</span>
                </span>
              </div>
              <div className={s.track}>
                <span className={s.fill} style={{ width: `${(r.value / max) * 100}%`, background: ACCENT }} />
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
