import React from "react";
import { ArrowUpRight, ArrowDownRight, Minus } from "lucide-react";
import { delta, fmtPct } from "./format";
import s from "./Analytics.module.css";

/**
 * Ko'rsatkich plitkasi: nom · qiymat · oldingi davrga nisbatan o'zgarish.
 * `upIsGood=false` — o'sish yomon (masalan "chiqib ketganlar"): rang teskari.
 * Rang hech qachon yolg'iz emas — strelka ikonkasi va ishora ham bor.
 */
export default function KpiTile({ icon, label, value, cur, prev, upIsGood = true, hint, hero, swatch }) {
  const d = delta(cur, prev);
  const good = d.dir === 0 ? null : (d.dir > 0) === upIsGood;
  const tone = good === null ? s.flat : good ? s.good : s.bad;
  const Icon = d.dir > 0 ? ArrowUpRight : d.dir < 0 ? ArrowDownRight : Minus;
  return (
    <div className={`${s.kpi} ${hero ? s.kpiHero : ""}`}>
      <div className={s.kpiHead}>
        <span className={s.kpiIcon}>{icon}</span>
        <span className={s.kpiLabel}>
          {swatch && <i className={s.swatch} style={{ background: swatch }} />}
          {label}
        </span>
      </div>
      <div className={s.kpiValue}>{value}</div>
      <div className={s.kpiFoot}>
        <span className={`${s.delta} ${tone}`}>
          <Icon size={13} />
          {d.pct === null ? (d.dir > 0 ? "yangi" : "o'zgarmadi") : `${d.pct > 0 ? "+" : ""}${fmtPct(d.pct)}`}
        </span>
        <span className={s.kpiHint}>{hint || "oldingi davrga nisbatan"}</span>
      </div>
    </div>
  );
}
