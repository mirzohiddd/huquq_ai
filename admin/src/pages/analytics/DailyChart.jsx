import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Table2, BarChart3 } from "lucide-react";
import ChartTooltip from "./ChartTooltip";
import { SEGMENTS, SURFACE, GRID, dayLabel, fmtNum } from "./format";
import s from "./Analytics.module.css";

/**
 * Kunlik tashriflar — uch guruhga bo'lingan ustunli diagramma.
 * Segmentlar orasida 2px fon rangidagi bo'shliq (stroke = fon), faqat
 * tepadagi segmentning uchi yumaloq. "Jadval" — rangsiz o'qish uchun.
 */
export default function DailyChart({ data }) {
  const [table, setTable] = useState(false);
  const many = data.length > 31;
  return (
    <section className={s.card}>
      <header className={s.cardHead}>
        <div>
          <h2 className={s.cardTitle}>Kunlik tashriflar</h2>
          <p className={s.cardSub}>Har kuni saytga kirgan brauzerlar — kim ro'yxatdan o'tdi, kim o'tmay ketdi</p>
        </div>
        <button type="button" className={s.ghostBtn} onClick={() => setTable((v) => !v)} aria-pressed={table}>
          {table ? <BarChart3 size={14} /> : <Table2 size={14} />} {table ? "Diagramma" : "Jadval"}
        </button>
      </header>

      <ul className={s.legend}>
        {SEGMENTS.map((g) => (
          <li key={g.key}><i className={s.swatch} style={{ background: g.color }} />{g.label}</li>
        ))}
      </ul>

      {table ? (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr><th>Kun</th>{SEGMENTS.map((g) => <th key={g.key}>{g.label}</th>)}<th>Jami</th></tr>
            </thead>
            <tbody>
              {[...data].reverse().map((r) => (
                <tr key={r.day}>
                  <td>{dayLabel(r.day)}</td>
                  {SEGMENTS.map((g) => <td key={g.key}>{fmtNum(r[g.key])}</td>)}
                  <td><b>{fmtNum(r.registered + r.left + r.members)}</b></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={s.chartBox}>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 8, right: 4, left: -16, bottom: 0 }} barCategoryGap={many ? "18%" : "28%"}>
              <CartesianGrid vertical={false} stroke={GRID} />
              <XAxis
                dataKey="day"
                tickFormatter={dayLabel}
                tick={{ fontSize: 11, fill: "var(--text2)" }}
                axisLine={{ stroke: GRID }}
                tickLine={false}
                interval="preserveStartEnd"
                minTickGap={18}
              />
              <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "var(--text2)" }} axisLine={false} tickLine={false} tickFormatter={fmtNum} />
              <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} content={<ChartTooltip labelFormat={dayLabel} total />} />
              {SEGMENTS.map((g, i) => (
                <Bar
                  key={g.key}
                  dataKey={g.key}
                  name={g.label}
                  stackId="v"
                  fill={g.color}
                  stroke={SURFACE}
                  strokeWidth={2}
                  maxBarSize={24}
                  radius={i === SEGMENTS.length - 1 ? [4, 4, 0, 0] : 0}
                  isAnimationActive
                  animationDuration={600}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}
