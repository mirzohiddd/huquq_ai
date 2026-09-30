import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import api from "../../utils/api";
import { useLang } from "../../context/LangContext";
import Seo from "../../components/Seo";
import shared from "../../styles/site.module.css";
import { useL } from "./i18n";
import ActRow from "./ActRow";
import s from "./Acts.module.css";

const FORMS = [
  ["", "allForms"],
  ["decree", { uz: "Farmonlar", ru: "Указы" }],
  ["resolution", { uz: "Qarorlar", ru: "Постановления" }],
  ["order", { uz: "Farmoyishlar", ru: "Распоряжения" }],
];
const YEARS = Array.from({ length: 2026 - 1991 + 1 }, (_, i) => String(2026 - i));

/** PREZIDENT HUJJATLARI: tur, yil, qidiruv (nom/raqam/sana), sahifalash. */
export default function PresidentPage() {
  const L = useL();
  const { lang } = useLang();
  const [params, setParams] = useSearchParams();
  const f = useMemo(
    () => ({ form: params.get("form") || "", year: params.get("year") || "", q: params.get("q") || "", page: Number(params.get("page")) || 1 }),
    [params],
  );
  const [input, setInput] = useState(f.q);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => setInput(f.q), [f.q]);
  useEffect(() => {
    let alive = true;
    setError(false);
    api
      .get("/legislation/acts", { params: { form: f.form, year: f.year, q: f.q, page: f.page } })
      .then((r) => alive && setData(r.data))
      .catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, [f, lang]);

  const apply = (next) => {
    const merged = { ...f, page: 1, ...next };
    const p = {};
    for (const k of ["form", "year", "q"]) if (merged[k]) p[k] = merged[k];
    if (merged.page > 1) p.page = merged.page;
    setParams(p);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Seo title={L.presTitle} noindex />
      <section className={`${shared.pageSection} ${s.page}`}>
        <div className={shared.container}>
          <nav className={s.crumbs} aria-label="breadcrumb">
            <Link to="/legislation">{L.title}</Link>
            <span>/</span>
            <span>{L.presTitle}</span>
          </nav>
          <h1 className={s.title}>{L.presTitle}</h1>
          <p className={s.sub}>{L.presSub}</p>
          {lang === "ru" && <p className={s.note}>{L.ruTitleNote}</p>}

          <div className={s.tabs} role="tablist">
            {FORMS.map(([id, lab]) => (
              <button
                key={id || "all"}
                type="button"
                role="tab"
                aria-selected={f.form === id}
                className={`${s.tab} ${f.form === id ? s.tabOn : ""}`}
                onClick={() => apply({ form: id })}
              >
                {typeof lab === "string" ? L[lab] : lab[lang] || lab.uz}
              </button>
            ))}
          </div>

          <form className={s.tools} onSubmit={(e) => (e.preventDefault(), apply({ q: input.trim() }))} role="search">
            <label className={s.search}>
              <Search size={16} />
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={L.presSearch} />
            </label>
            <select value={f.year} onChange={(e) => apply({ year: e.target.value })} aria-label={L.anyYear}>
              <option value="">{L.anyYear}</option>
              {YEARS.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </select>
            <button type="submit" className={s.searchBtn}>
              {L.searchBtn}
            </button>
          </form>

          {error && <p className={s.state}>{L.error}</p>}
          {!data && !error && <p className={s.state}>{L.loading}</p>}
          {data && (
            <>
              <p className={s.count}>
                {data.total.toLocaleString("ru-RU")} · {L.page} {data.page}/{data.pages}
              </p>
              {data.items.length ? (
                <ul className={s.list}>
                  {data.items.map((a) => (
                    <ActRow key={a.docId} act={a} />
                  ))}
                </ul>
              ) : (
                <p className={s.state}>{data.total === 0 && !f.q && !f.year && !f.form ? L.actsLoading : L.actsEmpty}</p>
              )}
              {data.pages > 1 && (
                <div className={s.pager}>
                  <button type="button" disabled={data.page <= 1} onClick={() => apply({ page: data.page - 1 })}>
                    <ChevronLeft size={16} /> {L.prevPage}
                  </button>
                  <span>
                    {data.page} / {data.pages}
                  </span>
                  <button type="button" disabled={data.page >= data.pages} onClick={() => apply({ page: data.page + 1 })}>
                    {L.nextPage} <ChevronRight size={16} />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
