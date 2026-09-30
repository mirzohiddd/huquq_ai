import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Bookmark, BookmarkCheck, ExternalLink, FileDown, ScrollText, Star } from "lucide-react";
import api from "../../utils/api";
import { useLang } from "../../context/LangContext";
import Seo from "../../components/Seo";
import shared from "../../styles/site.module.css";
import { useL } from "./i18n";
import { useShelf } from "./shelf";
import StatusBadge from "./StatusBadge";
import GlossaryText from "./GlossaryText";
import a from "./Article.module.css";
import s from "./Acts.module.css";

/**
 * PREZIDENT HUJJATI SAHIFASI: rekvizitlar → rasmiy matn (bo'limlar,
 * bandlar, o'zgartirish izohlari, imzo) → rasmiy manba / PDF.
 */
export default function ActPage() {
  const { docId } = useParams();
  const L = useL();
  const { lang } = useLang();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const { isDocSaved, toggleDoc, isFav, toggleFav } = useShelf();

  useEffect(() => {
    setData(null);
    setError(false);
    api
      .get(`/legislation/act/${docId}`, { timeout: 90000 })
      .then((r) => setData(r.data))
      .catch(() => setError(true));
    window.scrollTo(0, 0);
  }, [docId, lang]);

  if (error) return <p className={s.state}>{L.error}</p>;
  if (!data) return <p className={s.state}>{L.loading}</p>;

  const { act, meta, blocks, hasText } = data;
  const code = `act/${docId}`;
  const favKey = `act:${docId}`;
  const rows = [
    [L.type, act.formLabel],
    [L.number, act.number],
    [L.adopted, meta?.adoptedAt || act.date],
    [L.effective, meta?.effectiveAt],
    [L.organ, meta?.organ],
    [L.publication, meta?.publication && `${meta.publication}${meta.publishedAt ? ` (${meta.publishedAt})` : ""}`],
  ].filter(([, v]) => v);

  return (
    <>
      <Seo title={`${act.number} — ${act.title}`} noindex />
      <section className={`${shared.pageSection} ${s.page}`}>
        <div className={`${shared.container} ${a.wrap}`}>
          <nav className={s.crumbs} aria-label="breadcrumb">
            <Link to="/legislation">{L.title}</Link>
            <span>/</span>
            <Link to={`/legislation/president?form=${act.form}`}>{L.presTitle}</Link>
            <span>/</span>
            <span>{act.number}</span>
          </nav>

          <header className={a.head}>
            <span className={`${s.formTag} ${s[`f_${act.form}`] || ""}`}>
              {act.formLabel} · {act.number} · {act.date}
            </span>
            <h1 className={a.title}>{act.title}</h1>
            <div className={a.actions}>
              {act.status === "unknown" ? (
                <span className={s.note}>{L.unknownStatus}</span>
              ) : (
                <StatusBadge status={act.status} />
              )}
              <button type="button" className={a.btn} onClick={() => toggleDoc({ code, name: act.title })}>
                {isDocSaved(code) ? <BookmarkCheck size={15} /> : <Bookmark size={15} />} {isDocSaved(code) ? L.saved : L.save}
              </button>
              <button
                type="button"
                className={a.btn}
                onClick={() => toggleFav({ key: favKey, title: `${act.number} — ${act.title}`, to: `/legislation/act/${docId}` })}
              >
                <Star size={15} fill={isFav(favKey) ? "currentColor" : "none"} /> {isFav(favKey) ? L.faved : L.fav}
              </button>
            </div>
          </header>

          <dl className={s.meta}>
            {rows.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>

          <section className={a.official}>
            <header className={a.blockHead}>
              <h2>
                <ScrollText size={18} /> {L.officialText}
              </h2>
              <p>{L.actNote}</p>
            </header>
            {hasText ? (
              <div className={s.text}>
                {blocks.map((b, i) => {
                  if (b.k === "h") return <h3 key={i}>{b.t}</h3>;
                  if (b.k === "a") return <h4 key={i}>{b.t}</h4>;
                  if (b.k === "c") return <p key={i} className={s.change}>{b.t}</p>;
                  if (b.k === "s" || b.k === "r") return <p key={i} className={s.sign}>{b.t}</p>;
                  return <GlossaryText key={i} text={b.t} />;
                })}
              </div>
            ) : (
              <p className={a.note}>{blocks.length ? L.textError : L.pdfOnly}</p>
            )}
            <p className={a.hint}>{L.glossaryHint}</p>
          </section>

          <section className={s.sourceBox}>
            <h3>{L.sourceTitle}</h3>
            <p>{L.sourceText}</p>
            <div className={s.sourceLinks}>
              <a href={data.sourceUrl} target="_blank" rel="noreferrer">
                {L.openSource} <ExternalLink size={13} />
              </a>
              <a href={data.pdfUrl} target="_blank" rel="noreferrer">
                {L.openPdf} <FileDown size={13} />
              </a>
            </div>
            {data.fetchedAt && (
              <p className={a.muted}>
                {L.checked}: {new Date(data.fetchedAt).toLocaleString("ru-RU")}
              </p>
            )}
          </section>
        </div>
      </section>
    </>
  );
}
