import React from "react";
import { SEGMENTS, fmtNum, fmtPct } from "./format";
import s from "./Analytics.module.css";

/** Tashrifchilar tarkibi — bitta 100% chiziq (ulush) + yorliqli ro'yxat.
    Doira diagramma o'rniga: uzunlikni ko'z burchakdan aniqroq solishtiradi. */
export default function SegmentShare({ cur }) {
  const total = cur.visitors || 0;
  const rows = SEGMENTS.map((g) => ({ ...g, value: cur[g.key] || 0 }));
  return (
    <section className={s.card}>
      <header className={s.cardHead}>
        <div>
          <h2 className={s.cardTitle}>Tashrifchilar tarkibi</h2>
          <p className={s.cardSub}>{fmtNum(total)} ta brauzer tanlangan davrda</p>
        </div>
      </header>
      <div className={s.shareBar} role="img" aria-label="Tashrifchilar ulushi">
        {rows.map((r) =>
          r.value > 0 ? (
            <span
              key={r.key}
              className={s.shareSeg}
              style={{ flexGrow: r.value, background: r.color }}
              title={`${r.label}: ${fmtNum(r.value)} (${fmtPct(total ? r.value / total : 0)})`}
            />
          ) : null,
        )}
        {!total && <span className={s.shareEmpty} />}
      </div>
      <ul className={s.shareList}>
        {rows.map((r) => (
          <li key={r.key}>
            <i className={s.swatch} style={{ background: r.color }} />
            <span className={s.shareName}>{r.label}</span>
            <b className={s.shareVal}>{fmtNum(r.value)}</b>
            <span className={s.sharePct}>{fmtPct(total ? r.value / total : 0)}</span>
          </li>
        ))}
      </ul>
      <p className={s.note}>
        Shundan <b>{fmtNum(cur.bounced)}</b> tasi faqat bitta sahifani ko'rib chiqib ketgan.
      </p>
    </section>
  );
}
