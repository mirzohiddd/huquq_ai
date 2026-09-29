import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Bookmark, BookmarkCheck, Check, ExternalLink, FileEdit, Star, ScrollText } from "lucide-react";
import api from "../../utils/api";
import { useLang } from "../../context/LangContext";
import Seo from "../../components/Seo";
import shared from "../../styles/site.module.css";
import { useL } from "./i18n";
import { useShelf } from "./shelf";
import GlossaryText from "./GlossaryText";
import ArticlePlatform from "./ArticlePlatform";
import ArticleExtracted from "./ArticleExtracted";
import CompareEditions from "./CompareEditions";
import SourceBlock from "./SourceBlock";
import s from "./Article.module.css";

/**
 * MODDA SAHIFASI. Tartib: raqam → nom → rasmiy matn → oddiy tushuntirish →
 * misol → kimlarga tegishli → huquq/majburiyat/javobgarlik → tegishli
 * moddalar/qonunlar → o'zgartirishlar → rasmiy manba.
 */
export default function ArticlePage() {
  const { code, num } = useParams();
  const L = useL();
  const { lang } = useLang();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const shelf = useShelf();

  useEffect(() => {
    setError(false);
    setData(null);
    api
      .get(`/legislation/doc/${code}/article/${num}`)
      .then((r) => setData(r.data))
      .catch(() => setError(true));
    window.scrollTo(0, 0);
  }, [code, num, lang]);

  const title = data?.official.title;
  const remember = shelf.remember;
  useEffect(() => {
    if (title !== undefined) remember(code, num, title);
  }, [code, num, title, remember]);

  if (error) return <p className={s.state}>{L.error}</p>;
  if (!data) return <p className={s.state}>{L.loading}</p>;

  const { official, law, prev, next } = data;
  const favKey = `art:${code}:${num}`;
  const saved = shelf.isArtSaved(code, num);
  const read = shelf.isRead(code, num);

  return (
    <>
      <Seo title={`${law.name}, ${L.art(num)}`} noindex />
      <section className={`${shared.pageSection} ${s.page}`}>
        <div className={`${shared.container} ${s.wrap}`}>
          <nav className={s.crumbs} aria-label="breadcrumb">
            <Link to="/legislation">{L.title}</Link>
            <span>/</span>
            <Link to={`/legislation/${code}`}>{law.name}</Link>
            {official.path.map((p) => (
              <React.Fragment key={p.title}>
                <span>/</span>
                <span>{p.title}</span>
              </React.Fragment>
            ))}
          </nav>

          <header className={s.head}>
            <span className={s.num}>
              {L.art(num)}
            </span>
            <h1 className={s.title}>{official.title}</h1>
            <div className={s.actions}>
              <button type="button" className={`${s.btn} ${read ? s.btnOn : ""}`} onClick={() => shelf.setFlag("read", code, num, !read)}>
                <Check size={15} /> {read ? L.isRead : L.markRead}
              </button>
              <button type="button" className={s.btn} onClick={() => shelf.toggleArt({ code, num, title: official.title })}>
                {saved ? <BookmarkCheck size={15} /> : <Bookmark size={15} />} {saved ? L.saved : L.save}
              </button>
              <button
                type="button"
                className={s.btn}
                onClick={() => shelf.toggleFav({ key: favKey, title: `${law.name}, ${L.art(num)}`, to: `/legislation/${code}/${num}` })}
              >
                <Star size={15} fill={shelf.isFav(favKey) ? "currentColor" : "none"} /> {shelf.isFav(favKey) ? L.faved : L.fav}
              </button>
            </div>
          </header>

          <section className={s.official}>
            <header className={s.blockHead}>
              <h2>
                <ScrollText size={18} /> {L.officialText}
              </h2>
              <p>{L.officialNote}</p>
            </header>
            <GlossaryText text={official.text} />
            <p className={s.hint}>{L.glossaryHint}</p>
          </section>

          <ArticlePlatform data={data} />
          <ArticleExtracted code={code} data={data} />

          <section className={s.changes}>
            <header className={s.blockHead}>
              <h2>
                <FileEdit size={18} /> {L.changes}
              </h2>
              {official.lastChange && (
                <p>
                  {L.lastChange}: <b>{official.lastChange}</b>
                </p>
              )}
            </header>
            {official.changes.length ? (
              <ul className={s.changeList}>
                {official.changes.map((c, i) => (
                  <li key={i}>
                    <span>{c.text}</span>
                    {c.url && (
                      <a href={c.url} target="_blank" rel="noreferrer">
                        {L.changedBy}: {c.doc || c.date} <ExternalLink size={12} />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className={s.muted}>{L.noChanges}</p>
            )}
            <CompareEditions code={code} num={num} editions={official.editions} />
          </section>

          <SourceBlock urlUz={official.sourceUz} urlRu={official.sourceRu} checkedAt={official.checkedAt} />

          <nav className={s.pager}>
            {prev ? (
              <Link to={`/legislation/${code}/${prev.num}`} className={s.pagerBtn}>
                <ArrowLeft size={16} />
                <span>
                  <small>{L.prev}</small>
                  {prev.num}. {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link to={`/legislation/${code}/${next.num}`} className={`${s.pagerBtn} ${s.pagerNext}`}>
                <span>
                  <small>{L.next}</small>
                  {next.num}. {next.title}
                </span>
                <ArrowRight size={16} />
              </Link>
            )}
          </nav>
        </div>
      </section>
    </>
  );
}
