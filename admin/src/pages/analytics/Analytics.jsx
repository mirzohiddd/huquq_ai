import React, { useCallback, useEffect, useState } from "react";
import { BarChart3, Users, UserPlus, LogOut, Percent, Eye, Sparkles, Clock, MousePointerClick, RefreshCw, Monitor, Smartphone, Tablet, Info } from "lucide-react";
import api from "../../utils/api";
import { Loader, PageHeader } from "../../components/Shared";
import KpiTile from "./KpiTile";
import DailyChart from "./DailyChart";
import SegmentShare from "./SegmentShare";
import Funnel from "./Funnel";
import BarList from "./BarList";
import HoursChart from "./HoursChart";
import { SEGMENTS, fmtNum, fmtPct, fmtDur, dayLabel, SOURCE_LABELS, DEVICE_LABELS } from "./format";
import s from "./Analytics.module.css";

const PERIODS = [
  { days: 7, label: "7 kun" },
  { days: 30, label: "30 kun" },
  { days: 90, label: "90 kun" },
];
const DEVICE_ICONS = { desktop: <Monitor size={14} />, mobile: <Smartphone size={14} />, tablet: <Tablet size={14} /> };
const color = (k) => SEGMENTS.find((g) => g.key === k)?.color;

export default function Analytics() {
  const [days, setDays] = useState(30);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const load = useCallback(() => {
    setLoading(true);
    setErr("");
    api
      .get("/analytics/admin/report", { params: { days } })
      .then(({ data }) => setData(data))
      .catch(() => setErr("Analitika yuklanmadi. Qayta urinib ko'ring."))
      .finally(() => setLoading(false));
  }, [days]);

  useEffect(load, [load]);

  const cur = data?.current;
  const prev = data?.previous;

  return (
    <div className={s.page}>
      <PageHeader title={<><BarChart3 size={20} /> Analitika</>}>
        <div className={s.segmented} role="tablist" aria-label="Davr">
          {PERIODS.map((p) => (
            <button key={p.days} type="button" role="tab" aria-selected={days === p.days} className={days === p.days ? s.segOn : ""} onClick={() => setDays(p.days)}>
              {p.label}
            </button>
          ))}
        </div>
        <button type="button" className={s.ghostBtn} onClick={load} disabled={loading} aria-label="Yangilash">
          <RefreshCw size={14} className={loading ? s.spin : ""} />
        </button>
      </PageHeader>

      {err && <div className={s.error}>{err}</div>}
      {!data && loading && <Loader />}

      {cur && (
        <>
          {data.dataSince && (
            <p className={s.since}>
              <Info size={13} /> Kuzatuv {dayLabel(data.dataSince)} dan boshlangan · oxirgi {data.days} kun, oldingi {data.days} kun bilan solishtirilgan
            </p>
          )}

          <div className={s.kpiGrid}>
            <KpiTile hero icon={<Users size={16} />} label="Saytga kirganlar" value={fmtNum(cur.visitors)} cur={cur.visitors} prev={prev.visitors} hint={`${fmtNum(cur.newVisitors)} tasi birinchi marta`} />
            <KpiTile icon={<UserPlus size={16} />} swatch={color("registered")} label="Ro'yxatdan o'tdi" value={fmtNum(cur.registered)} cur={cur.registered} prev={prev.registered} hint={`barcha kanallar: ${fmtNum(cur.signupsAll)}`} />
            <KpiTile icon={<LogOut size={16} />} swatch={color("left")} label="Ro'yxatdan o'tmay chiqib ketdi" value={fmtNum(cur.left)} cur={cur.left} prev={prev.left} upIsGood={false} />
            <KpiTile icon={<Percent size={16} />} label="Konversiya" value={fmtPct(cur.conversion)} cur={cur.conversion} prev={prev.conversion} hint="mehmonlardan ro'yxatdan o'tganlar" />
          </div>

          <div className={s.miniGrid}>
            <Mini icon={<Eye size={15} />} label="Sahifa ko'rishlar" value={fmtNum(cur.pageviews)} />
            <Mini icon={<Sparkles size={15} />} label="Yangi tashrifchilar" value={fmtNum(cur.newVisitors)} />
            <Mini icon={<Clock size={15} />} label="O'rtacha vaqt" value={fmtDur(cur.avgSecs)} />
            <Mini icon={<MousePointerClick size={15} />} label="Bitta sahifada chiqib ketgan" value={fmtNum(cur.bounced)} />
          </div>

          {cur.visitors === 0 && (
            <div className={s.emptyBanner}>
              <BarChart3 size={22} />
              <div>
                <b>Ma'lumot yig'ilmoqda</b>
                <p>Saytga kirgan har bir tashrifchi shu yerda paydo bo'ladi. Birinchi natijalar bir necha daqiqada ko'rinadi.</p>
              </div>
            </div>
          )}

          <DailyChart data={data.daily} />

          <div className={s.twoCol}>
            <SegmentShare cur={cur} />
            <Funnel funnel={cur.funnel} />
          </div>

          <div className={s.threeCol}>
            <BarList title="Qayerdan kelishdi" sub="Manba (referrer / utm_source)" rows={data.sources} labels={SOURCE_LABELS} />
            <BarList title="Kirish sahifalari" sub="Birinchi ochilgan sahifa" rows={data.landings} labels={{ "/": "Bosh sahifa" }} />
            <BarList title="Qurilmalar" sub="Tashriflar bo'yicha" rows={data.devices} labels={DEVICE_LABELS} icons={DEVICE_ICONS} />
          </div>

          <HoursChart data={data.hours} />
        </>
      )}
    </div>
  );
}

function Mini({ icon, label, value }) {
  return (
    <div className={s.mini}>
      <span className={s.miniIcon}>{icon}</span>
      <div>
        <div className={s.miniVal}>{value}</div>
        <div className={s.miniLabel}>{label}</div>
      </div>
    </div>
  );
}
