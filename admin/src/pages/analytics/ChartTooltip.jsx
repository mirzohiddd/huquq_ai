import React from "react";
import { fmtNum } from "./format";
import s from "./Analytics.module.css";

/** Recharts uchun umumiy tooltip — matn ranglari text tokenlarida,
    seriya rangi faqat yonidagi belgida. */
export default function ChartTooltip({ active, payload, label, labelFormat, total }) {
  if (!active || !payload?.length) return null;
  const sum = payload.reduce((a, p) => a + Number(p.value || 0), 0);
  return (
    <div className={s.tip}>
      <div className={s.tipTitle}>{labelFormat ? labelFormat(label) : label}</div>
      {[...payload].reverse().map((p) => (
        <div key={p.dataKey} className={s.tipRow}>
          <i className={s.swatch} style={{ background: p.color || p.fill }} />
          <span className={s.tipName}>{p.name}</span>
          <b>{fmtNum(p.value)}</b>
        </div>
      ))}
      {total && payload.length > 1 && (
        <div className={`${s.tipRow} ${s.tipTotal}`}>
          <span className={s.tipName}>Jami</span>
          <b>{fmtNum(sum)}</b>
        </div>
      )}
    </div>
  );
}
