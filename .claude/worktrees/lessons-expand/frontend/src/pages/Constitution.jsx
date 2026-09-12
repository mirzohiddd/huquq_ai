import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Scale,
  Search,
  ExternalLink,
  X,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  List,
} from "lucide-react";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import Seo from "../components/Seo";
import shared from "../styles/site.module.css";
import s from "./Constitution.module.css";
import { parseSection, parseChapter } from "./constitutionLabels";
import { scrollToTop } from "../utils/smoothScroll";

/**
 * KONSTITUTSIYA — hujjat + mundarija ko'rinishi.
 *
 * UX QARORI: bu yerda "bosqichma-bosqich o'tish" (bo'lim → bob →
 * modda) o'rniga MUNDARIJA + MATN sxemasi tanlandi. Sabab: avvalgi
 * variantda foydalanuvchi moddani ko'rish uchun ikki marta bosishi
 * kerak edi va har bosqichda oldingi ro'yxat YO'QOLARDI — hujjatning
 * umumiy tuzilishini ko'rib bo'lmasdi.
 *
 * Endi chapda butun tuzilma DOIM ko'rinib turadi (6 bo'lim, ichida
 * boblar), o'ngda esa tanlangan bobning moddalari. Foydalanuvchi
 * qayerdaligini bir qarashda tushunadi — bu hujjat va qomuslar uchun
 * tanish, o'rganishni talab qilmaydigan naqsh.
 *
 * Sahifa ochilishi bilan BIRINCHI bob tanlangan bo'ladi — bo'sh ekran
 * ko'rsatilmaydi, foydalanuvchi darrov matnni ko'radi.
 *
 * Telefonda mundarija yuqoridagi ochiladigan panelga aylanadi va
 * unda joriy joylashuv yozib turiladi ("2-bo'lim · 7-bob").
 */
export default function Constitution() {
  const { t, lang } = useLang();

  const [data, setData] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [search, setSearch] = useState("");
  const [pos, setPos] = useState({ sec: 0, chap: 0 });
  const [indexOpen, setIndexOpen] = useState(false); // faqat telefonda
  const [openSec, setOpenSec] = useState(0); // mundarijada ochiq bo'lim

  const load = useCallback(async (term) => {
    try {
      const qs = term ? `?search=${encodeURIComponent(term)}` : "";
      const { data: res } = await api.get(`/library/constitution${qs}`);
      setData(res);
    } catch {
      setData({ sections: [], total: 0 });
    }
  }, []);

  useEffect(() => {
    setData(null);
    load(search);
  }, [load, search, lang]);

  /* ── TARJIMA TAYYOR BO'LISHINI KUTISH ──
     Server tarjimani FON rejimida tayyorlaydi. Avval bu yerda bir
     marta 15 soniyadan keyin qayta so'ralardi — agar shu vaqtda
     tayyor bo'lmasa, matn tilni qayta almashtirmaguncha manba tilida
     qolib ketardi.

     Endi har 2 soniyada tekshiriladi va tayyor bo'lishi bilan
     yangilanadi. `MAX_POLLS` — cheksiz so'rov yubormaslik uchun
     chegara (AI kvotasi tugagan bo'lsa tarjima umuman kelmaydi). */
  useEffect(() => {
    if (!data?.pendingTranslation) return;
    // Tarjima xizmati ishlamayotgan bo'lsa (kvota tugagan) — kutish
    // ma'nosiz, behuda so'rov yubormaymiz.
    if (data.translationAvailable === false) return;
    let polls = 0;
    const MAX_POLLS = 20; // 20 × 2s = 40s
    const timer = setInterval(() => {
      if (++polls > MAX_POLLS) {
        clearInterval(timer);
        return;
      }
      load(search);
    }, 2000);
    return () => clearInterval(timer);
  }, [data?.pendingTranslation, load, search]);

  const sections = useMemo(() => data?.sections || [], [data]);

  /* Yorliqlar bir marta tozalanadi: "IKKINCHI BOʻLIM. INSON VA..." →
     raqam + o'qishli sarlavha (constitutionLabels.js). */
  const tree = useMemo(
    () =>
      sections.map((sec, i) => ({
        ...parseSection(sec.section, i),
        raw: sec.section,
        articleCount: sec.articleCount,
        chapters: sec.chapters.map((ch, j) => {
          const parsed = parseChapter(ch.chapter, j);
          /* Ba'zi bo'limlarning O'Z bobi yo'q — moddalar to'g'ridan-
             to'g'ri bo'limga tegishli (masalan OLTINCHI BO'LIM).
             Bo'sh sarlavha ko'rsatilsa ro'yxat buzilgan ko'rinardi,
             shuning uchun bo'lim nomi ishlatiladi va raqam yashiriladi. */
          const unnamed = !String(ch.chapter || "").trim();
          return {
            ...parsed,
            unnamed,
            title: unnamed ? parseSection(sec.section, i).title : parsed.title,
            raw: ch.chapter,
            articles: ch.articles,
          };
        }),
      })),
    [sections],
  );

  const curSec = tree[pos.sec];
  const curChap = curSec?.chapters[pos.chap];

  /* Boblar bo'ylab ketma-ket harakat (oldingi/keyingi) — hujjatni
     boshdan-oxir o'qiydigan foydalanuvchi uchun. */
  const flat = useMemo(
    () =>
      tree.flatMap((sec, si) => sec.chapters.map((_, ci) => ({ sec: si, chap: ci }))),
    [tree],
  );
  const flatIdx = flat.findIndex((x) => x.sec === pos.sec && x.chap === pos.chap);

  function goto(sec, chap) {
    setPos({ sec, chap });
    setOpenSec(sec);
    setIndexOpen(false);
    scrollToTop();
  }

  function submitSearch(e) {
    e.preventDefault();
    setSearch(searchInput.trim());
  }
  function clearSearch() {
    setSearchInput("");
    setSearch("");
  }

  /* Qidiruv natijalari — tuzilmadan tashqarida, yassi ro'yxat */
  const results = useMemo(() => {
    if (!search) return null;
    return tree.flatMap((sec) =>
      sec.chapters.flatMap((ch) =>
        ch.articles.map((a) => ({
          ...a,
          chapTitle: ch.title,
          chapNum: ch.num,
          chapUnnamed: ch.unnamed,
        })),
      ),
    );
  }, [search, tree]);

  return (
    <>
      <Seo title={t.seo_const_title} noindex />

      {/* ── Hero — markazlashtirilgan, avvalgi ko'rinish ── */}
      <div className={`${s.hero} animate-fade-up`}>
        <div className={s.heroInner}>
          <span className={s.heroIcon}>
            <Scale size={26} />
          </span>
          <h1 className={s.heroTitle}>{data?.law?.name || t.const_title}</h1>
          <p className={s.heroSub}>{t.const_sub}</p>
          <div className={s.heroMeta}>
            <span>
              <strong>{data?.total || 0}</strong> {t.const_articles_count}
            </span>
            <span className={s.dot} />
            <span>
              <strong>{tree.length}</strong> {t.const_sections_count}
            </span>
            {data?.law?.url && (
              <>
                <span className={s.dot} />
                <a href={data.law.url} target="_blank" rel="noreferrer">
                  lex.uz <ExternalLink size={11} />
                </a>
              </>
            )}
          </div>
        </div>
      </div>

      <section className={s.section}>
        <div className={shared.container}>
          {/* Qidiruv — hero'dan pastda, markazda (avvalgi joyi) */}
          <form className={s.searchBar} onSubmit={submitSearch}>
            <Search size={17} />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder={t.const_search_ph}
            />
            {search && (
              <button type="button" className={s.clearBtn} onClick={clearSearch}>
                <X size={15} />
              </button>
            )}
            <button type="submit">{t.library_search_btn}</button>
          </form>

          {data === null ? (
            <p className={s.stateText}>{t.library_loading}</p>
          ) : results ? (
            /* ───────── QIDIRUV NATIJALARI ───────── */
            <div className={s.searchWrap}>
              <div className={s.searchHead}>
                <span>
                  <strong>{results.length}</strong> {t.const_articles_count}
                </span>
                <button type="button" className={s.textBtn} onClick={clearSearch}>
                  <ChevronLeft size={14} /> {t.const_back_to_doc}
                </button>
              </div>
              {results.length === 0 ? (
                <p className={s.stateText}>{t.library_not_found}</p>
              ) : (
                results.map((a) => (
                  <article key={a.articleNumber} className={s.article}>
                    <div className={s.articleHead}>
                      <span className={s.articleNum}>
                        {a.articleNumber}-{t.const_article}
                      </span>
                      <span className={s.articleWhere}>
                        {a.chapUnnamed
                          ? a.chapTitle
                          : `${a.chapNum}-${t.const_chapter} · ${a.chapTitle}`}
                      </span>
                    </div>
                    <div className={s.articleBody}>
                      {a.text.split("\n").map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </article>
                ))
              )}
            </div>
          ) : (
            <div className={s.layout}>
              {/* ───────── MUNDARIJA ───────── */}
              <aside className={s.index}>
                {/* Telefonda: joriy joylashuv + ochish tugmasi */}
                <button
                  type="button"
                  className={`${s.indexToggle} ${indexOpen ? s.indexToggleOpen : ""}`}
                  onClick={() => setIndexOpen((v) => !v)}
                  aria-expanded={indexOpen}
                >
                  <List size={16} />
                  <span className={s.indexToggleText}>
                    {curSec ? `${curSec.num}-${t.const_section} · ` : ""}
                    {curChap ? `${curChap.num}-${t.const_chapter}` : t.const_toc}
                  </span>
                  <ChevronDown size={15} />
                </button>

                <div className={`${s.indexInner} ${indexOpen ? s.indexOpen : ""}`}>
                  <h2 className={s.indexTitle}>{t.const_toc}</h2>
                  {tree.map((sec, si) => {
                    const expanded = openSec === si;
                    return (
                      <div key={sec.raw || si} className={s.indexSection}>
                        <button
                          type="button"
                          className={`${s.secBtn} ${pos.sec === si ? s.secBtnActive : ""}`}
                          onClick={() => setOpenSec(expanded ? -1 : si)}
                          aria-expanded={expanded}
                        >
                          <span className={s.secNum}>{sec.num}</span>
                          <span className={s.secTitle}>{sec.title}</span>
                          <ChevronDown
                            size={14}
                            className={`${s.secArrow} ${expanded ? s.secArrowOpen : ""}`}
                          />
                        </button>
                        {expanded && (
                          <ul className={s.chapList}>
                            {sec.chapters.map((ch, ci) => {
                              const active = pos.sec === si && pos.chap === ci;
                              return (
                                <li key={ch.raw || ci}>
                                  <button
                                    type="button"
                                    className={`${s.chapBtn} ${active ? s.chapBtnActive : ""}`}
                                    onClick={() => goto(si, ci)}
                                  >
                                    <span className={s.chapNum}>
                                      {ch.unnamed ? "•" : ch.num}
                                    </span>
                                    <span className={s.chapTitle}>{ch.title}</span>
                                    <span className={s.chapCount}>
                                      {ch.articles.length}
                                    </span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </aside>

              {/* ───────── MATN ───────── */}
              <div className={s.content}>
                {data.pendingTranslation > 0 &&
                  data.translationAvailable !== false && (
                    <p className={s.translating}>{t.library_translating}</p>
                  )}

                {curChap && (
                  <>
                    <div className={s.contentHead}>
                      <p className={s.crumb}>
                        {curSec.num}-{t.const_section} · {curSec.title}
                      </p>
                      <h2 className={s.contentTitle}>
                        {!curChap.unnamed && (
                          <span className={s.contentNum}>{curChap.num}</span>
                        )}
                        {curChap.title}
                      </h2>
                      <p className={s.contentMeta}>
                        {curChap.articles[0].articleNumber}–
                        {curChap.articles[curChap.articles.length - 1].articleNumber}{" "}
                        {t.const_article} · {curChap.articles.length}{" "}
                        {t.const_articles_count}
                      </p>
                    </div>

                    {curChap.articles.map((a) => (
                      <article key={a.articleNumber} className={s.article}>
                        <div className={s.articleHead}>
                          <span className={s.articleNum}>
                            {a.articleNumber}-{t.const_article}
                          </span>
                          {a.title && (
                            <span className={s.articleTitle}>{a.title}</span>
                          )}
                        </div>
                        <div className={s.articleBody}>
                          {a.text.split("\n").map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                      </article>
                    ))}

                    {/* Ketma-ket o'qish uchun — oldingi/keyingi bob */}
                    <nav className={s.pager}>
                      <button
                        type="button"
                        className={s.pagerBtn}
                        disabled={flatIdx <= 0}
                        onClick={() => {
                          const p = flat[flatIdx - 1];
                          if (p) goto(p.sec, p.chap);
                        }}
                      >
                        <ChevronLeft size={15} /> {t.const_prev}
                      </button>
                      <button
                        type="button"
                        className={s.pagerBtn}
                        disabled={flatIdx < 0 || flatIdx >= flat.length - 1}
                        onClick={() => {
                          const n = flat[flatIdx + 1];
                          if (n) goto(n.sec, n.chap);
                        }}
                      >
                        {t.const_next} <ChevronRight size={15} />
                      </button>
                    </nav>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
