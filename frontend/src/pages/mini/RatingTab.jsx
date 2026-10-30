/**
 * REYTING — hammaga faqat TOP 5 ko'rinadi; har kim o'z o'rnini ko'radi.
 */
import React, { useEffect, useState } from "react";
import { Crown } from "lucide-react";
import { mini } from "./miniApi";
import { Spinner } from "./Gate";
import m from "./Mini.module.css";
import s from "./Tabs.module.css";

const PLACE = ["p1", "p2", "p3"];

export default function RatingTab({ ctx }) {
  const { t } = ctx;
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);

  useEffect(() => {
    mini.rating().then(setData).catch(() => setErr(true));
  }, []);

  if (err) return <p className={m.screenSub}>{t.error}</p>;
  if (!data) return <Spinner />;
  const inTop = data.top.some((r) => r.me);

  return (
    <div className={m.fadeIn}>
      <h1 className={m.screenTitle}>{t.tabs.rating}</h1>
      <div className={s.sectionHead}>
        <h3><Crown aria-hidden="true" style={{ width: 17, height: 17, color: "#c9953a", verticalAlign: -3 }} /> {t.top5}</h3>
        <small>{t.of(data.total)}</small>
      </div>
      <div className={s.list}>
        {data.top.map((r) => (
          <div key={r.rank} className={`${s.rank} ${r.me ? s.rankMe : ""}`}>
            <span className={`${s.place} ${s[PLACE[r.rank - 1]] || ""}`}>{r.rank}</span>
            <span className={s.itemBody}>
              <b>{r.name}{r.me ? ` (${t.you})` : ""}</b>
              <small>{t.level} {r.level}</small>
            </span>
            <span className={s.rankXp}>{r.xp} XP</span>
          </div>
        ))}
        {data.total > data.top.length && <div className={s.hidden} aria-hidden="true">• • •</div>}
      </div>

      <div className={s.myCard}>
        <small>{t.myPlace}</small>
        {data.me.rank ? (
          <>
            <strong>#{data.me.rank}</strong>
            <small>{t.of(data.total)} · {data.me.xp} XP{inTop ? " · TOP 5" : ""}</small>
          </>
        ) : (
          <p style={{ marginTop: 8, fontSize: 14 }}>{t.noRank}</p>
        )}
      </div>
      <p className={s.note}>{t.ratingNote}</p>
    </div>
  );
}
