import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import { useL } from "./i18n";
import DocCard from "./DocCard";
import ActRow from "./ActRow";
import s from "./Catalog.module.css";

/** Qidiruv / filtr natijasi: mos hujjatlar va barcha hujjatlardagi moddalar. */
export default function CatalogResults({ result, loading, query }) {
  const L = useL();
  if (loading && !result) return <p className={s.state}>{L.loading}</p>;
  if (!result) return null;
  const { docs, articles, acts } = result;
  const actsOnly = Boolean(acts) && !docs.length;

  return (
    <div className={s.results} aria-busy={loading}>
      {!actsOnly && (
        <>
          <h2 className={s.blockTitle}>
            {L.results} <span className={s.count}>{docs.length}</span>
          </h2>
          {docs.length ? (
            <div className={s.docGrid}>
              {docs.map((d) => (
                <DocCard key={d.code} doc={d} />
              ))}
            </div>
          ) : (
            <p className={s.state}>{L.noDocs}</p>
          )}
        </>
      )}

      {acts && (
        <>
          <h2 className={s.blockTitle}>
            {L.acts} <span className={s.count}>{acts.total}</span>
          </h2>
          {acts.items.length ? (
            <ul className={s.actList}>
              {acts.items.map((a) => (
                <ActRow key={a.docId} act={a} />
              ))}
            </ul>
          ) : (
            <p className={s.state}>{L.actsEmpty}</p>
          )}
          {acts.total > acts.items.length && (
            <Link to={`/legislation/president?${new URLSearchParams(query || {}).toString()}`} className={s.moreLink}>
              {L.viewAll} ({acts.total})
            </Link>
          )}
        </>
      )}

      {articles.length > 0 && (
        <>
          <h2 className={s.blockTitle}>
            {L.artResults} <span className={s.count}>{articles.length}</span>
          </h2>
          <ul className={s.artList}>
            {articles.map((a) => (
              <li key={`${a.code}-${a.articleNumber}`}>
                <Link to={`/legislation/${a.code}/${a.articleNumber}`} className={s.artItem}>
                  <FileText size={16} className={s.artIcon} />
                  <span className={s.artBody}>
                    <span className={s.artHead}>
                      <b>
                        {L.art(a.articleNumber)}.
                      </b>{" "}
                      {a.title}
                    </span>
                    <span className={s.artLaw}>{a.lawName}</span>
                    {a.snippet && <span className={s.artSnippet}>{a.snippet}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
