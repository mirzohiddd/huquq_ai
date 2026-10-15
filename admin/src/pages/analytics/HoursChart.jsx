import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import ChartTooltip from "./ChartTooltip";
import { ACCENT, GRID, fmtNum } from "./format";
import s from "./Analytics.module.css";

const hourLabel = (h) => `${String(h).padStart(2, "0")}:00`;

/** Kun soatlari bo'yicha birinchi kirishlar (Toshkent vaqti) — bitta seriya. */
export default function HoursChart({ data }) {
  const peak = data.reduce((a, r) => (r.value > a.value ? r : a), data[0] || { hour: 0, value: 0 });
  return (
    <section className={s.card}>
      <header className={s.cardHead}>
        <div>
          <h2 className={s.cardTitle}>Faol soatlar</h2>
          <p className={s.cardSub}>
            Toshkent vaqti · eng faol: {peak.value ? <b>{hourLabel(peak.hour)}</b> : "—"}
          </p>
        </div>
      </header>
      <div className={s.chartBox}>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 8, right: 4, left: -22, bottom: 0 }} barCategoryGap="22%">
            <CartesianGrid vertical={false} stroke={GRID} />
            <XAxis dataKey="hour" tickFormatter={(h) => (h % 3 === 0 ? String(h).padStart(2, "0") : "")} tick={{ fontSize: 11, fill: "var(--text2)" }} axisLine={{ stroke: GRID }} tickLine={false} interval={0} />
            <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "var(--text2)" }} axisLine={false} tickLine={false} tickFormatter={fmtNum} />
            <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} content={<ChartTooltip labelFormat={hourLabel} />} />
            <Bar dataKey="value" name="Tashriflar" fill={ACCENT} radius={[4, 4, 0, 0]} maxBarSize={24} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
