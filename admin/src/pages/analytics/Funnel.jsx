import React from "react";
import { ChevronRight } from "lucide-react";
import { ACCENT, fmtNum, fmtPct } from "./format";
import s from "./Analytics.module.css";

/** Ro'yxatdan o'tish voronkasi — bitta rang (bitta seriya), uzunlik = ulush. */
export default function Funnel({ funnel }) {
  const steps = [
    { label: "Mehmon sifatida kirdi", value: funnel.guests },
    { label: "Ro'yxatdan o'tish sahifasini ochdi", value: funnel.sawRegister },
    { label: "Ro'yxatdan o'tdi", value: funnel.registered },
  ];
  const base = steps[0].value || 0;
  return (
    <section className={s.card}>
      <header className={s.cardHead}>
        <div>
          <h2 className={s.cardTitle}>Ro'yxatdan o'tish voronkasi</h2>
          <p className={s.cardSub}>Mehmonlarning qanchasi qaysi bosqichgacha yetdi</p>
        </div>
      </header>
      <ol className={s.funnel}>
        {steps.map((st, i) => {
          const share = base ? st.value / base : 0;
          const prev = i ? steps[i - 1].value : 0;
          return (
            <li key={st.label} className={s.funnelStep}>
              <div className={s.funnelTop}>
                <span className={s.funnelLabel}>{st.label}</span>
                <span className={s.funnelNum}>
                  <b>{fmtNum(st.value)}</b> <span>{fmtPct(share)}</span>
                </span>
              </div>
              <div className={s.track}>
                <span className={s.fill} style={{ width: `${Math.max(share * 100, st.value ? 1.5 : 0)}%`, background: ACCENT }} />
              </div>
              {i > 0 && (
                <span className={s.funnelStepConv}>
                  <ChevronRight size={12} /> oldingi bosqichdan {fmtPct(prev ? st.value / prev : 0)}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </section>
  );
}
