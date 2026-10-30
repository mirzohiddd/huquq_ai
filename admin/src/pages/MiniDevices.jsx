import React, { useCallback, useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import { Smartphone, Gamepad2, Activity, Sparkles, RefreshCw, Info, Send } from "lucide-react";
import api from "../utils/api";
import { Loader, PageHeader } from "../components/Shared";
import BarList from "./analytics/BarList";
import ChartTooltip from "./analytics/ChartTooltip";
import { ACCENT, SURFACE, GRID, fmtNum, fmtPct, dayLabel } from "./analytics/format";
import s from "./analytics/Analytics.module.css";

/**
 * TELEGRAM MINI ILOVA — qurilmalar analitikasi.
 * Har kirish-chiqish emas, har QURILMA bir marta sanaladi: «kirgan» —
 * ilovani kamida bir marta ochgan, «o'ynagan» — kamida bitta savol/darsni
 * yechgan qurilmalar (backend: services/miniApp/devices.js).
 */
const PERIODS = [7, 30, 90];
const PLAYED = "#199e70";
const PLATFORM = { ios: "iOS (Telegram)", android: "Android (Telegram)", tdesktop: "Telegram Desktop", macos: "Telegram macOS", weba: "Telegram Web A", webk: "Telegram Web K", web: "Telegram Web", unknown: "Noma'lum" };
const when = (d) => (d ? new Date(d).toLocaleString("uz-UZ", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" }) : "—");

function Tile({ icon, label, value, hint }) {
  return (
    <div className={s.mini}>
      <span className={s.miniIcon}>{icon}</span>
      <div>
        <div className={s.miniVal}>{value}</div>
        <div className={s.miniLabel}>{label}{hint ? ` · ${hint}` : ""}</div>
      </div>
    </div>
  );
}

export default function MiniDevices() {
  const [days, setDays] = useState(30);
  const [d, setD] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = useCallback(() => {
    setLoading(true);
    setErr("");
    api.get("/admin/mini/devices", { params: { days } })
      .then(({ data }) => setD(data))
      .catch(() => setErr("Ma'lumot yuklanmadi. Qayta urinib ko'ring."))
      .finally(() => setLoading(false));
  }, [days]);
  useEffect(load, [load]);

  return (
    <div className={s.page}>
      <PageHeader title={<><Smartphone size={20} /> Telegram ilova</>}>
        <div className={s.segmented} role="tablist" aria-label="Davr">
          {PERIODS.map((p) => (
            <button key={p} type="button" role="tab" aria-selected={days === p} className={days === p ? s.segOn : ""} onClick={() => setDays(p)}>{p} kun</button>
          ))}
        </div>
        <button type="button" className={s.ghostBtn} onClick={load} disabled={loading} aria-label="Yangilash">
          <RefreshCw size={14} className={loading ? s.spin : ""} />
        </button>
      </PageHeader>

      {err && <div className={s.error}>{err}</div>}
      {!d && loading && <Loader />}

      {d && (
        <>
          <p className={s.since}><Info size={13} /> Har bir qurilma bir marta sanaladi — qayta kirishlar sonni oshirmaydi.</p>
          <div className={s.miniGrid}>
            <Tile icon={<Smartphone size={15} />} label="Kirgan qurilmalar (jami)" value={fmtNum(d.total)} />
            <Tile icon={<Gamepad2 size={15} />} label="O'ynagan qurilmalar" value={fmtNum(d.played)} hint={d.total ? fmtPct(d.played / d.total, 0) : "0%"} />
            <Tile icon={<Activity size={15} />} label="Faol: bugun / 7 / 30 kun" value={`${fmtNum(d.active1)} / ${fmtNum(d.active7)} / ${fmtNum(d.active30)}`} />
            <Tile icon={<Sparkles size={15} />} label={`Yangi qurilmalar (${d.days} kun)`} value={fmtNum(d.newIn)} />
          </div>

          <section className={s.card}>
            <header className={s.cardHead}>
              <div>
                <h2 className={s.cardTitle}>Kunlik yangi qurilmalar</h2>
                <p className={s.cardSub}>Birinchi marta kirgan va birinchi marta o'ynagan qurilmalar</p>
              </div>
            </header>
            <ul className={s.legend}>
              <li><i className={s.swatch} style={{ background: ACCENT }} />Yangi kirgan</li>
              <li><i className={s.swatch} style={{ background: PLAYED }} />Birinchi marta o'ynagan</li>
            </ul>
            <div className={s.chartBox}>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={d.daily} margin={{ top: 8, right: 4, left: -16, bottom: 0 }} barCategoryGap="22%">
                  <CartesianGrid vertical={false} stroke={GRID} />
                  <XAxis dataKey="day" tickFormatter={dayLabel} tick={{ fontSize: 11, fill: "var(--text2)" }} axisLine={{ stroke: GRID }} tickLine={false} interval="preserveStartEnd" minTickGap={18} />
                  <YAxis allowDecimals={false} tick={{ fontSize: 11, fill: "var(--text2)" }} axisLine={false} tickLine={false} tickFormatter={fmtNum} />
                  <Tooltip cursor={{ fill: "rgba(255,255,255,0.04)" }} content={<ChartTooltip labelFormat={dayLabel} />} />
                  <Bar dataKey="devices" name="Yangi kirgan" fill={ACCENT} stroke={SURFACE} strokeWidth={2} maxBarSize={20} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="played" name="Birinchi marta o'ynagan" fill={PLAYED} stroke={SURFACE} strokeWidth={2} maxBarSize={20} radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          <div className={s.twoCol}>
            <BarList title="Platforma" sub="Telegram ilovasi turi" rows={d.platforms} labels={PLATFORM} />
            <BarList title="Operatsion tizim" sub="Qurilma bo'yicha" rows={d.oses} />
          </div>

          <section className={s.card}>
            <header className={s.cardHead}>
              <div>
                <h2 className={s.cardTitle}>Oxirgi qurilmalar</h2>
                <p className={s.cardSub}>Oxirgi kirgan 30 ta qurilma</p>
              </div>
            </header>
            <div className={s.tableWrap}>
              <table className={s.table}>
                <thead>
                  <tr><th>Foydalanuvchi</th><th>Qurilma</th><th>Birinchi kirgan</th><th>Oxirgi kirgan</th><th>O'ynagan</th></tr>
                </thead>
                <tbody>
                  {d.recent.map((r) => (
                    <tr key={r.id + r.firstSeen}>
                      <td>
                        {r.user ? (r.user.fullName || `@${r.user.username}`) : <i>Ro'yxatdan o'tmagan</i>}
                        {r.user?.telegramUsername && (
                          <a href={`https://t.me/${r.user.telegramUsername}`} target="_blank" rel="noreferrer" style={{ display: "block", fontSize: 12 }}>
                            <Send size={11} /> @{r.user.telegramUsername}
                          </a>
                        )}
                      </td>
                      <td>{PLATFORM[r.platform] || r.platform} · {r.os}{r.model ? ` · ${r.model}` : ""}</td>
                      <td>{when(r.firstSeen)}</td>
                      <td>{when(r.lastSeen)}</td>
                      <td>{r.playedAt ? when(r.playedAt) : "—"}</td>
                    </tr>
                  ))}
                  {!d.recent.length && <tr><td colSpan={5}>Hali qurilma yo'q</td></tr>}
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
