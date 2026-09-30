import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useL } from "./i18n";
import ActRow from "./ActRow";
import s from "./Acts.module.css";

const FORMS = ["decree", "resolution", "order"];

/**
 * Katalogdagi "Prezident hujjatlari" bloki: tur bo'yicha sonlar va eng
 * yangi hujjatlar. To'liq ro'yxat — /legislation/president.
 */
export default function PresidentStrip({ data, facets }) {
  const L = useL();
  const label = (id) => facets.types.find((t) => t.id === id)?.label || id;
  return (
    <div className={s.strip}>
      <div className={s.counters}>
        {FORMS.map((f) => (
          <Link key={f} to={`/legislation/president?form=${f}`} className={s.counter}>
            <b>{(data.counts[f] || 0).toLocaleString("ru-RU")}</b>
            <span>{label(f)}</span>
          </Link>
        ))}
      </div>
      <h3 className={s.subHead}>{L.latest}</h3>
      <ul className={s.list}>
        {data.latest.map((a) => (
          <ActRow key={a.docId} act={a} />
        ))}
      </ul>
      <Link to="/legislation/president" className={s.allBtn}>
        {L.viewAll} ({data.total.toLocaleString("ru-RU")}) <ArrowRight size={15} />
      </Link>
    </div>
  );
}
