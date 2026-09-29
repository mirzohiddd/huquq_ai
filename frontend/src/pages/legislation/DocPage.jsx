import React, { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft, Bookmark, BookmarkCheck, ExternalLink, PlayCircle, Star } from "lucide-react";
import api from "../../utils/api";
import { useLang } from "../../context/LangContext";
import Seo from "../../components/Seo";
import shared from "../../styles/site.module.css";
import { useL } from "./i18n";
import { useShelf } from "./shelf";
import DocMeta from "./DocMeta";
import StructureTree from "./StructureTree";
import StudyMode from "./StudyMode";
import Amendments from "./Amendments";
import SourceBlock from "./SourceBlock";
import s from "./Doc.module.css";

const TABS = ["structure", "study", "changes", "source"];

/** HUJJAT SAHIFASI: rekvizitlar + tuzilma / o'rganish / o'zgartirishlar / manba. */
export default function DocPage() {
  const { code } = useParams();
  const L = useL();
  const { lang } = useLang();
  const [params, setParams] = useSearchParams();
  const tab = TABS.includes(params.get("tab")) ? params.get("tab") : "structure";
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const { shelf, isDocSaved, toggleDoc, isFav, toggleFav } = useShelf();

  useEffect(() => {
    setError("");
    api
      .get(`/legislation/doc/${code}`)
      .then((r) => setData(r.data))
      .catch((e) => setError(e.response?.status === 404 ? "404" : "err"));
  }, [code, lang]);

  if (error) {
    return (
      <section className={shared.pageSection}>
        <div className={shared.container}>
          <p className={s.state}>{L.error}</p>
          <Link to="/legislation" className={s.back}>
            <ArrowLeft size={15} /> {L.back}
          </Link>
        </div>
      </section>
    );
  }
  if (!data) return <p className={s.state}>{L.loading}</p>;

  const { doc } = data;
  const last = shelf.last[code];
  const favKey = `doc:${code}`;
  const tabLabel = { structure: L.tabStructure, study: L.tabStudy, changes: L.tabChanges, source: L.tabSource };

  return (
    <>
      <Seo title={doc.name} noindex />
      <section className={`${shared.pageSection} ${s.page}`}>
        <div className={shared.container}>
          <nav className={s.crumbs} aria-label="breadcrumb">
            <Link to="/legislation">{L.title}</Link>
            <span>/</span>
            <span>{doc.name}</span>
          </nav>

          <header className={s.head}>
            <span className={s.typeTag}>{doc.typeLabel}</span>
            <h1 className={s.title}>{doc.name}</h1>
            {doc.officialTitle && <p className={s.official}>{doc.officialTitle}</p>}
            <div className={s.actions}>
              {last && (
                <Link to={`/legislation/${code}/${last.num}`} className={s.primaryBtn}>
                  <PlayCircle size={16} /> {L.continue} · {L.art(last.num)}
                </Link>
              )}
              <button type="button" className={s.btn} onClick={() => toggleDoc({ code, name: doc.name })}>
                {isDocSaved(code) ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                {isDocSaved(code) ? L.saved : L.save}
              </button>
              <button
                type="button"
                className={s.btn}
                onClick={() => toggleFav({ key: favKey, title: doc.name, to: `/legislation/${code}` })}
              >
                <Star size={16} fill={isFav(favKey) ? "currentColor" : "none"} />
                {isFav(favKey) ? L.faved : L.fav}
              </button>
              <a href={doc.url} target="_blank" rel="noreferrer" className={s.btn}>
                {L.openSource} <ExternalLink size={14} />
              </a>
            </div>
          </header>

          <DocMeta doc={doc} />

          <div className={s.tabs} role="tablist">
            {TABS.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tab === t}
                className={`${s.tab} ${tab === t ? s.tabOn : ""}`}
                onClick={() => setParams(t === "structure" ? {} : { tab: t }, { replace: true })}
              >
                {tabLabel[t]}
              </button>
            ))}
          </div>

          <div className={s.tabBody}>
            {tab === "structure" && <StructureTree code={code} tree={data.tree} explained={data.explained} />}
            {tab === "study" && <StudyMode code={code} data={data} />}
            {tab === "changes" && <Amendments code={code} data={data} />}
            {tab === "source" && <SourceBlock urlUz={doc.urlUz} urlRu={doc.urlRu} checkedAt={doc.checkedAt} />}
          </div>
        </div>
      </section>
    </>
  );
}
