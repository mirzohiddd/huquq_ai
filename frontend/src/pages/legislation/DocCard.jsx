import React from "react";
import { Link } from "react-router-dom";
import { Bookmark, BookmarkCheck, CalendarDays, ChevronRight, History } from "lucide-react";
import { useL } from "./i18n";
import { useShelf } from "./shelf";
import StatusBadge from "./StatusBadge";
import s from "./Cards.module.css";

/** Katalogdagi hujjat kartasi: tur, holat, nom, rekvizitlar, modda soni. */
export default function DocCard({ doc }) {
  const L = useL();
  const { isDocSaved, toggleDoc } = useShelf();
  const saved = isDocSaved(doc.code);

  return (
    <article className={s.doc}>
      <div className={s.docTop}>
        <span className={s.typeTag}>{doc.typeLabel}</span>
        <StatusBadge status={doc.status} amended={doc.amended} small />
        <button
          type="button"
          className={`${s.iconBtn} ${saved ? s.iconBtnOn : ""}`}
          onClick={() => toggleDoc({ code: doc.code, name: doc.name })}
          aria-label={saved ? L.saved : L.save}
          title={saved ? L.saved : L.save}
        >
          {saved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </button>
      </div>

      <Link to={`/legislation/${doc.code}`} className={s.docLink}>
        <h3 className={s.docName}>{doc.name}</h3>
        {doc.officialTitle && doc.officialTitle.toLowerCase() !== doc.name.toLowerCase() && (
          <p className={s.docOfficial}>{doc.officialTitle}</p>
        )}
      </Link>

      <ul className={s.docMeta}>
        {doc.adoptedAt && (
          <li>
            <CalendarDays size={13} /> {L.adopted}: <b>{doc.adoptedAt}</b>
          </li>
        )}
        {doc.effectiveAt && (
          <li>
            <CalendarDays size={13} /> {L.effective}: <b>{doc.effectiveAt}</b>
          </li>
        )}
        {doc.lastEdition && (
          <li>
            <History size={13} /> {L.lastEdition}: <b>{doc.lastEdition}</b>
          </li>
        )}
      </ul>

      <div className={s.docFoot}>
        <span>
          {doc.articleCount} {L.articles}
          {doc.editionsCount > 1 && ` · ${doc.editionsCount} ${L.editions}`}
        </span>
        <Link to={`/legislation/${doc.code}`} className={s.openLink}>
          {L.open} <ChevronRight size={15} />
        </Link>
      </div>
    </article>
  );
}
