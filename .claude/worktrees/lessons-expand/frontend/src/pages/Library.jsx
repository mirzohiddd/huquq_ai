import React, { useCallback, useEffect, useState } from "react";
import { Library as LibraryIcon, Search, ArrowLeft, ExternalLink } from "lucide-react";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import shared from "../styles/site.module.css";
import s from "./Library.module.css";
import { scrollToTop } from "../utils/smoothScroll";

/**
 * Qonunlar kutubxonasi — kodekslar ro'yxati va ular ichidagi moddalar.
 * Ma'lumot backenddagi LegalChunk bazasidan olinadi (lex.uz'dan yuklangan,
 * har 24 soatda avtomatik yangilanadi).
 */
export default function Library() {
  const { t, lang } = useLang();

  const [laws, setLaws] = useState(null);
  const [activeLaw, setActiveLaw] = useState(null); // { code, name, url }
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  /* Sahifalash OLIB TASHLANDI — kodeksning barcha moddalari bir yo'la
     keladi. Buni imkonli qilgan narsa: ro'yxatda modda MATNI endi
     yuborilmaydi (faqat raqam va sarlavha), shuning uchun 800 modda
     ham ~80 KB. Matn modda ochilganda alohida so'rov bilan keladi. */
  // Tarjimasi hali tayyor bo'lmagan sarlavhalar soni (server fonda
  // tayyorlaydi) — 0 dan katta bo'lsa biroz keyin qayta so'raymiz.
  const [pendingTr, setPendingTr] = useState(0);
  const [search, setSearch] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [openArticle, setOpenArticle] = useState(null);
  /* Ochilgan moddaning TO'LIQ tarjimasi: { "44": "tarjima matni" }.
     Moddalar ro'yxatida faqat sarlavhalar tarjima qilinadi (bir
     sahifada 40 ta modda × ~2000 belgi tarjimasi sahifani juda
     sekinlashtirardi), to'liq matn esa modda OCHILGANDA olinadi. */
  const [articleText, setArticleText] = useState({});
  const [articleLoading, setArticleLoading] = useState(null);

  useEffect(() => {
    api
      .get("/library/laws")
      .then(({ data }) => setLaws(data.laws || []))
      .catch(() => setLaws([]));
  }, [lang]);

  const loadArticles = useCallback(async (code, searchTerm, quiet = false) => {
    if (!quiet) setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchTerm) params.set("search", searchTerm);
      const qs = params.toString();
      const { data } = await api.get(
        `/library/laws/${code}${qs ? `?${qs}` : ""}`,
      );
      setItems(data.items || []);
      setTotal(data.total || 0);
      // Tarjima xizmati ishlamasa (kvota tugagan) kutish ma'nosiz —
      // "tayyorlanmoqda" yozuvi ham ko'rsatilmaydi.
      setPendingTr(
        data.translationAvailable === false ? 0 : data.pendingTranslation || 0,
      );
    } catch {
      setItems([]);
      setTotal(0);
    } finally {
      if (!quiet) setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!activeLaw) return;
    loadArticles(activeLaw.code, search);
  }, [activeLaw, search, loadArticles, lang]);

  /* Tarjima fonda tayyorlanayotgan bo'lsa — biroz kutib, jimgina
     qayta so'raymiz. Shunda foydalanuvchi sahifani qo'lda yangilamasdan
     ham tarjima qilingan sarlavhalarni ko'radi. */
  /* Tarjima fonda tayyorlanadi — har 2 soniyada tekshiramiz va tayyor
     bo'lishi bilan JIMGINA yangilaymiz. Avval bir marta 15 soniyadan
     keyin so'ralardi va shu vaqtda ulgurmasa matn manba tilida qolib
     ketardi. `MAX_POLLS` — cheksiz so'rovdan himoya. */
  useEffect(() => {
    if (!pendingTr || !activeLaw) return;
    let polls = 0;
    const MAX_POLLS = 20; // 20 × 2s = 40s
    const timer = setInterval(() => {
      if (++polls > MAX_POLLS) {
        clearInterval(timer);
        return;
      }
      loadArticles(activeLaw.code, search, true);
    }, 2000);
    return () => clearInterval(timer);
  }, [pendingTr, activeLaw, search, loadArticles]);

  // Til o'zgarsa oldingi tildagi modda matnlari yaroqsiz bo'ladi
  useEffect(() => {
    setArticleText({});
  }, [lang]);

  /* Moddani ochish/yopish. Ochilganda — matn hali tarjima qilinmagan
     bo'lsa, serverdan to'liq (tarjima qilingan) matn so'raladi.
     O'zbek tilida server tarjima qilmaydi, matn darhol qaytadi. */
  const toggleArticle = useCallback(
    (article) => {
      const num = article.articleNumber;
      setOpenArticle((cur) => (cur === num ? null : num));
      if (openArticle === num) return; // yopilyapti
      if (articleText[num] !== undefined) return; // allaqachon olingan
      if (!activeLaw) return;

      setArticleLoading(num);
      api
        .get(`/library/laws/${activeLaw.code}/${encodeURIComponent(num)}`)
        .then(({ data }) => {
          if (data?.article?.text) {
            setArticleText((cur) => ({ ...cur, [num]: data.article.text }));
          }
        })
        .catch(() => {
          // Xato bo'lsa ro'yxatdan kelgan (manba tilidagi) matn ko'rsatiladi
        })
        .finally(() => setArticleLoading((cur) => (cur === num ? null : cur)));
    },
    [activeLaw, articleText, openArticle],
  );

  function openLaw(law) {
    setActiveLaw(law);
    setSearch("");
    setSearchInput("");
    setOpenArticle(null);
    scrollToTop();
  }

  function backToLaws() {
    setActiveLaw(null);
    setItems([]);
    setOpenArticle(null);
  }

  function submitSearch(e) {
    e.preventDefault();
    setSearch(searchInput.trim());
  }

  return (
    <>
      {/* Faqat ro'yxatdan o'tganlar uchun — indekslanmaydi */}
      <Seo title={t.seo_library_title} noindex />
      <div className={`${shared.pageHero} animate-fade-up`}>
        <div className={shared.container}>
          <h1 className={shared.pageHeroTitle}>
            <LibraryIcon size={26} style={{ verticalAlign: "-4px", marginRight: 10 }} />
            {t.feat_library_title}
          </h1>
          <p className={shared.pageHeroSub}>{t.library_sub}</p>
        </div>
      </div>

      <section className={shared.pageSection}>
        <div className={shared.container}>
          {/* ── Kodekslar ro'yxati ── */}
          {!activeLaw && (
            <>
              {laws === null ? (
                <p className={s.stateText}>{t.library_loading}</p>
              ) : laws.length === 0 ? (
                <p className={s.stateText}>{t.library_empty}</p>
              ) : (
                <div className={s.lawGrid}>
                  {laws.map((law, i) => {
                    // Moddalari hali lex.uz'dan yuklanmagan kodeks —
                    // ro'yxatda KO'RINADI (foydalanuvchi uni yo'q deb
                    // o'ylamasligi uchun), lekin ochilmaydi.
                    const ready = law.articleCount > 0;
                    return (
                      <Reveal
                        as="div"
                        key={law.code}
                        delay={i * 0.06}
                        className={`${s.lawCard} ${ready ? "" : s.lawCardPending}`}
                        role={ready ? "button" : undefined}
                        tabIndex={ready ? 0 : undefined}
                        aria-disabled={ready ? undefined : true}
                        onClick={ready ? () => openLaw(law) : undefined}
                        onKeyDown={
                          ready ? (e) => e.key === "Enter" && openLaw(law) : undefined
                        }
                      >
                        <span className={s.lawBadge}>{law.code}</span>
                        <h3>{law.name}</h3>
                        <p>
                          {ready
                            ? `${law.articleCount} ${t.library_articles}`
                            : t.library_preparing}
                        </p>
                      </Reveal>
                    );
                  })}
                </div>
              )}
            </>
          )}

          {/* ── Tanlangan kodeks moddalari ── */}
          {activeLaw && (
            <div className={s.articlesWrap}>
              <div className={s.articlesHead}>
                <button type="button" className={s.backBtn} onClick={backToLaws}>
                  <ArrowLeft size={16} /> {t.library_back}
                </button>
                <div className={s.articlesTitle}>
                  <h2>{activeLaw.name}</h2>
                  <a
                    href={activeLaw.url}
                    target="_blank"
                    rel="noreferrer"
                    className={s.sourceLink}
                  >
                    lex.uz <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <form className={s.searchBar} onSubmit={submitSearch}>
                <Search size={16} />
                <input
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder={t.library_search_ph}
                />
                <button type="submit">{t.library_search_btn}</button>
              </form>

              {loading ? (
                <p className={s.stateText}>{t.library_loading}</p>
              ) : items.length === 0 ? (
                <p className={s.stateText}>{t.library_not_found}</p>
              ) : (
                <>
                  <p className={s.resultCount}>
                    {total} {t.library_articles}
                    {pendingTr > 0 && (
                      <span className={s.translating}>
                        · {t.library_translating}
                      </span>
                    )}
                  </p>
                  <div className={s.articleList}>
                    {items.map((a) => {
                      const isOpen = openArticle === a.articleNumber;
                      return (
                        <div
                          key={a.articleNumber}
                          className={`${s.article} ${isOpen ? s.articleOpen : ""}`}
                        >
                          <button
                            type="button"
                            className={s.articleHead}
                            onClick={() => toggleArticle(a)}
                          >
                            <span className={s.articleNum}>
                              {a.articleNumber}-{t.library_article_word}
                            </span>
                            <span className={s.articleTitle}>{a.title}</span>
                          </button>
                          {isOpen && (
                            <div className={s.articleBody}>
                              {/* DIQQAT: modda matni ro'yxat bilan
                                  KELMAYDI (ro'yxat yengil bo'lishi
                                  uchun) — u alohida so'rov bilan
                                  olinadi. Shuning uchun bu yerda
                                  `a.text` ga tayanib bo'lmaydi: u
                                  har doim undefined va `.split()`
                                  sahifani buzardi. */}
                              {articleText[a.articleNumber] === undefined ? (
                                <p>
                                  {articleLoading === a.articleNumber
                                    ? t.library_loading
                                    : t.library_not_found}
                                </p>
                              ) : (
                                articleText[a.articleNumber]
                                  .split("\n")
                                  .map((para, idx) => <p key={idx}>{para}</p>)
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
