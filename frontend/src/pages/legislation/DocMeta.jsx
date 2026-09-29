import React from "react";
import { Info } from "lucide-react";
import { useL } from "./i18n";
import StatusBadge from "./StatusBadge";
import s from "./Doc.module.css";

/** Asosiy ma'lumotlar: nom, tur, raqam, sanalar, organ, holat, nashr. */
export default function DocMeta({ doc }) {
  const L = useL();
  const rows = [
    [L.type, doc.typeLabel],
    [L.number, doc.number],
    [L.adopted, doc.adoptedAt],
    [L.effective, doc.effectiveAt],
    [L.organ, doc.organ],
    [L.publication, doc.publication && `${doc.publication}${doc.publishedAt ? ` (${doc.publishedAt})` : ""}`],
    [L.lastEdition, doc.lastEdition && `${doc.lastEdition} · ${doc.editionsCount} ${L.editions}`],
  ].filter(([, v]) => v);

  return (
    <section className={s.meta} aria-label={L.type}>
      <div className={s.metaStatus}>
        <span className={s.metaLabel}>{L.status}</span>
        <StatusBadge status={doc.status} amended={doc.amended} />
      </div>
      <dl className={s.metaGrid}>
        {rows.map(([k, v]) => (
          <div key={k} className={s.metaRow}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      {!doc.hasMeta && <p className={s.metaNote}>{L.metaPending}</p>}
      <p className={s.metaNote}>
        <Info size={13} /> {L.statusTip}
        {doc.checkedAt && ` · ${L.checked}: ${new Date(doc.checkedAt).toLocaleDateString("ru-RU")}`}
      </p>
    </section>
  );
}
