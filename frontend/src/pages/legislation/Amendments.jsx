import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink, History, FileEdit, Link2 } from "lucide-react";
import { useL } from "./i18n";
import s from "./Doc.module.css";

/**
 * O'zgartirishlar tarixi (hujjat darajasi):
 * tahrir sanalari → o'zgartirish kiritgan hujjatlar (qaysi moddalarga)
 * → bog'liq (havola qiluvchi) hujjatlar. Barchasi LexUZ'dan.
 */
export default function Amendments({ code, data }) {
  const L = useL();
  const [more, setMore] = useState(false);
  const { editions, amendments, related, changedArticles, doc } = data;
  const base = doc.url.split("?")[0];
  const list = more ? amendments : amendments.slice(0, 10);

  return (
    <div className={s.stack}>
      <section className={s.card}>
        <h3 className={s.cardTitle}>
          <History size={17} /> {L.editionsList} <span className={s.pill}>{editions.length}</span>
        </h3>
        <div className={s.editions}>
          {editions.map((d, i) => (
            <a key={d} href={`${base}?ONDATE=${d}`} target="_blank" rel="noreferrer" className={`${s.edition} ${i === 0 ? s.editionNow : ""}`}>
              {d}
              {i === 0 && <small>{L.curEd}</small>}
              {i === editions.length - 1 && editions.length > 1 && <small>{L.oldEd}</small>}
            </a>
          ))}
        </div>
      </section>

      <section className={s.card}>
        <h3 className={s.cardTitle}>
          <FileEdit size={17} /> {L.amendingDocs} <span className={s.pill}>{amendments.length}</span>
        </h3>
        <p className={s.muted}>
          {L.changedArticles}: <b>{changedArticles}</b>
        </p>
        <ul className={s.amendList}>
          {list.map((a) => (
            <li key={`${a.doc}-${a.date}`} className={s.amend}>
              <div className={s.amendHead}>
                <b>{a.doc || "—"}</b>
                <span>{a.date}</span>
                {a.url && (
                  <a href={a.url} target="_blank" rel="noreferrer" aria-label={L.openSource}>
                    <ExternalLink size={13} />
                  </a>
                )}
              </div>
              <div className={s.amendArts}>
                {a.articles.slice(0, 24).map((n) => (
                  <Link key={n} to={`/legislation/${code}/${n}`}>
                    {n}
                  </Link>
                ))}
                {a.articles.length > 24 && <span>+{a.articles.length - 24}</span>}
              </div>
            </li>
          ))}
        </ul>
        {amendments.length > 10 && (
          <button type="button" className={s.moreBtn} onClick={() => setMore((v) => !v)}>
            {more ? "−" : `+${amendments.length - 10}`}
          </button>
        )}
      </section>

      {related.length > 0 && (
        <section className={s.card}>
          <h3 className={s.cardTitle}>
            <Link2 size={17} /> {L.relatedDocs} <span className={s.pill}>{related.length}</span>
          </h3>
          <ul className={s.relList}>
            {related.map((r) => (
              <li key={`${r.number}-${r.name}`}>
                <a href={r.url || undefined} target="_blank" rel="noreferrer">
                  {r.name}
                </a>
                <small>
                  {[r.number, r.adoptedAt].filter(Boolean).join(" · ")}
                </small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
