import React, { useState } from "react";
import { GitCompare, ExternalLink } from "lucide-react";
import api from "../../utils/api";
import { useL } from "./i18n";
import s from "./Article.module.css";

/**
 * "OLDINGI TAHRIR" ↔ "AMALDAGI TAHRIR". Sana — hujjatning LexUZ'dagi
 * tahrir sanalaridan biri; eski matn LexUZ'dan olinadi (backend keshlaydi).
 */
export default function CompareEditions({ code, num, editions }) {
  const L = useL();
  const older = editions.slice(1);
  const [date, setDate] = useState(older[0] || "");
  const [res, setRes] = useState(null);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(false);

  if (!older.length) return null;

  const run = () => {
    setBusy(true);
    setErr(false);
    api
      .get(`/legislation/doc/${code}/article/${num}/compare`, { params: { date }, timeout: 90000 })
      .then((r) => setRes(r.data))
      .catch(() => setErr(true))
      .finally(() => setBusy(false));
  };

  const col = (title, rows) => (
    <div className={s.cmpCol}>
      <h5>{title}</h5>
      {rows.length ? (
        rows.map((r, i) => (
          <p key={i} className={r.changed ? s.cmpChanged : ""} title={r.changed ? L.changedPara : undefined}>
            {r.text}
          </p>
        ))
      ) : (
        <p className={s.muted}>—</p>
      )}
    </div>
  );

  return (
    <div className={s.compare}>
      <h4 className={s.subTitle}>
        <GitCompare size={16} /> {L.compare}
      </h4>
      <div className={s.cmpBar}>
        <label>
          {L.compareWith}
          <select value={date} onChange={(e) => (setDate(e.target.value), setRes(null))}>
            {older.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className={s.smallBtn} onClick={run} disabled={busy || !date}>
          {busy ? L.loading : L.compareBtn}
        </button>
      </div>
      {err && <p className={s.muted}>{L.error}</p>}
      {res && (
        <>
          {!res.existedThen && <p className={s.note}>{L.notThen}</p>}
          {res.existedThen && res.diff.same && <p className={s.note}>{L.sameText}</p>}
          {res.existedThen && !res.diff.same && (
            <div className={s.cmpGrid}>
              {col(`${L.oldEd} · ${res.date}`, res.diff.old)}
              {col(`${L.curEd} · ${editions[0]}`, res.diff.current)}
            </div>
          )}
          <a href={res.sourceUrl} target="_blank" rel="noreferrer" className={s.srcLink}>
            LexUZ · {res.date} <ExternalLink size={12} />
          </a>
        </>
      )}
    </div>
  );
}
