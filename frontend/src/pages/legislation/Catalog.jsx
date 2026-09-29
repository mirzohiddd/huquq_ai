import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Landmark, Search, ShieldCheck, RefreshCw, BookOpen, GraduationCap } from "lucide-react";
import { useLang } from "../../context/LangContext";
import api from "../../utils/api";
import Seo from "../../components/Seo";
import shared from "../../styles/site.module.css";
import hs from "../Library.module.css";
import { useL } from "./i18n";
import FilterPanel from "./FilterPanel";
import CatalogResults from "./CatalogResults";
import ShelfStrip from "./ShelfStrip";
import DocCard from "./DocCard";
import s from "./Catalog.module.css";

const KEYS = ["q", "type", "status", "area", "year", "dateField"];

/**
 * QONUNCHILIK HUJJATLARI — KATALOG.
 * Filtr va qidiruv holati URL'da (`?q=…&type=…`) — orqaga qaytilganda
 * natija saqlanadi va havolani ulashish mumkin.
 */
export default function Catalog() {
  const L = useL();
  const { lang } = useLang();
  const [params, setParams] = useSearchParams();
  const filters = useMemo(() => Object.fromEntries(KEYS.map((k) => [k, params.get(k) || ""])), [params]);
  const [input, setInput] = useState(filters.q);
  const [catalog, setCatalog] = useState(null);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const searching = Boolean(filters.q || filters.type || filters.status || filters.area || filters.year);

  useEffect(() => {
    setError(false);
    api
      .get("/legislation/catalog")
      .then((r) => setCatalog(r.data))
      .catch(() => setError(true));
  }, [lang]);

  useEffect(() => setInput(filters.q), [filters.q]);

  useEffect(() => {
    if (!searching) return setResult(null);
    let alive = true;
    setLoading(true);
    const query = Object.fromEntries(KEYS.filter((k) => filters[k]).map((k) => [k, filters[k]]));
    api
      .get("/legislation/search", { params: query })
      .then((r) => alive && setResult(r.data))
      .catch(() => alive && setResult({ docs: [], articles: [] }))
      .finally(() => alive && setLoading(false));
    return () => {
      alive = false;
    };
  }, [filters, searching, lang]);

  const apply = (next) => {
    const p = {};
    for (const k of KEYS) if (next[k]) p[k] = next[k];
    setParams(p);
  };

  const submit = (e) => {
    e.preventDefault();
    apply({ ...filters, q: input.trim() });
  };

  return (
    <>
      <Seo title={L.title} noindex />
      <div className={`${hs.heroOuter} animate-fade-up`}>
        <header className={hs.hero}>
          <div className={hs.heroBody}>
            <span className={hs.badge}>
              <Landmark size={15} /> LexUZ
            </span>
            <h1 className={hs.heroTitle}>{L.title}</h1>
            <span className={hs.ornament} aria-hidden="true">
              <i /> <b /> <i />
            </span>
            <p className={hs.heroSub}>{L.sub}</p>
            <form className={s.heroSearch} onSubmit={submit} role="search">
              <Search size={18} />
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder={L.searchPh} aria-label={L.searchPh} />
              <button type="submit">{L.searchBtn}</button>
            </form>
            <div className={hs.perks}>
              {[
                [ShieldCheck, L.perk1],
                [RefreshCw, L.perk2],
                [BookOpen, L.perk3],
                [GraduationCap, L.perk4],
              ].map(([Icon, label]) => (
                <div key={label} className={hs.perk}>
                  <span className={hs.perkIcon}>
                    <Icon size={16} />
                  </span>
                  <span className={hs.perkLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </header>
      </div>

      <section className={shared.pageSection}>
        <div className={`${shared.container} ${s.layout}`}>
          {catalog && <FilterPanel facets={catalog.facets} filters={filters} onChange={apply} />}
          <div className={s.main}>
            {error && <p className={s.state}>{L.error}</p>}
            {!catalog && !error && <p className={s.state}>{L.loading}</p>}
            {catalog && searching && <CatalogResults result={result} loading={loading} />}
            {catalog && !searching && <Overview catalog={catalog} onArea={(id) => apply({ ...filters, area: id })} />}
          </div>
        </div>
      </section>
    </>
  );
}

/** Qidiruvsiz ko'rinish: javon → hujjat bo'limlari → huquq sohalari. */
function Overview({ catalog, onArea }) {
  const L = useL();
  const { docs, facets } = catalog;
  return (
    <>
      <ShelfStrip docs={docs} />
      {facets.groups.map((g) => {
        const list = docs.filter((d) => d.group === g.id);
        return (
          <section key={g.id} className={s.group}>
            <h2 className={s.blockTitle}>
              {g.label} <span className={s.count}>{list.length}</span>
            </h2>
            {list.length ? (
              <div className={s.docGrid}>
                {list.map((d) => (
                  <DocCard key={d.code} doc={d} />
                ))}
              </div>
            ) : (
              <p className={s.emptyGroup}>{L.emptyGroup}</p>
            )}
          </section>
        );
      })}
      <section className={s.group}>
        <h2 className={s.blockTitle}>{L.areas}</h2>
        <div className={s.areaGrid}>
          {facets.areas.map((a) => (
            <button key={a.id} type="button" className={s.area} disabled={!a.count} onClick={() => onArea(a.id)}>
              <span>{a.label}</span>
              <small>
                {a.count} {L.docs}
              </small>
            </button>
          ))}
        </div>
      </section>
    </>
  );
}
