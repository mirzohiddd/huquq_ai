import React, { lazy, Suspense, useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useLang } from "../context/LangContext";
import { useAuth } from "../context/AuthContext";
import { useChatPanel } from "../context/ChatPanelContext";
import {
  Globe,
  User as UserIcon,
  Star,
  X,
  ChevronDown,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import LangSwitcher from "./LangSwitcher";
import langStyles from "./LangSwitcher.module.css";
import FloatingConsultButton from "./FloatingConsultButton";
import BottomNav, { BOTTOM_NAV_PATHS } from "./BottomNav";
import InstallAppButton from "./InstallAppButton";
// TEZLIK: ChatDrawer react-markdown + remark-gfm ni tortadi va u faqat
// chat ochilganda kerak — shuning uchun alohida bo'lakka ajratildi.
const ChatDrawer = lazy(() => import("./ChatDrawer"));
import ProfileModal from "./ProfileModal";
import api from "../utils/api";
import s from "./SiteLayout.module.css";
import { API_BASE } from "../utils/apiBase";

// public/ ichidagi fayllar import qilinmaydi — ular / ildiz manzilida
// serve qilinadi (Vite qoidasi), shuning uchun to'g'ridan-to'g'ri URL.
const instagram = "/Instagram_logo_2022.svg";
const telegram = "/Telegram.png";

// Ro'yxatdan o'tmagan (mehmon) foydalanuvchi uchun menyu — barcha
// bo'limlar bir qatorda, avvalgidek.
const NAV_GUEST = [
  { to: "/", hash: "", key: "nav_home" },
  { to: "/#about", hash: "#about", key: "nav_about_us" },
  { to: "/#services", hash: "#services", key: "nav_services" },
  { to: "/#pricing", hash: "#pricing", key: "nav_pricing" },
  { to: "/#articles", hash: "#articles", key: "nav_articles" },
  { to: "/#contact", hash: "#contact", key: "nav_contact" },
];

// Login qilgan foydalanuvchi uchun: sayt haqidagi bo'limlar "Biz
// haqimizda" ichiga yig'iladi, asosiy menyuda esa shaxsiy bo'limlar
// (Darslar, Testlar, Kutubxona, Profil) turadi.
const ABOUT_SUBMENU = [
  { to: "/#about", hash: "#about", key: "nav_about_us" },
  { to: "/#services", hash: "#services", key: "nav_services" },
  { to: "/#pricing", hash: "#pricing", key: "nav_pricing" },
  { to: "/#articles", hash: "#articles", key: "nav_articles" },
  { to: "/#contact", hash: "#contact", key: "nav_contact" },
];

const NAV_USER = [
  { to: "/lessons", key: "feat_lessons_title" },
  { to: "/tests", key: "feat_tests_title" },
  // Konstitutsiya kutubxonadan OLDIN — u eng yuqori yuridik kuchga ega
  // hujjat va unga saytda alohida sahifa ajratilgan.
  { to: "/constitution", key: "nav_constitution" },
  { to: "/library", key: "feat_library_title" },
];

export default function SiteLayout() {
  const { t, lang } = useLang();
  const { user } = useAuth();
  const { openChat } = useChatPanel();
  const location = useLocation();
  const navigate = useNavigate();
  const currentHash = location.pathname === "/" ? location.hash : "";
  const [menuOpen, setMenuOpen] = useState(false);

  /* Menyu bandi "faol"mi?
     ⚠️ Avval faollik faqat `currentHash === item.hash` bilan aniqlanardi
     va bunda nozik xato bor edi: Bosh sahifa bandining hash'i bo'sh
     ("") bo'lgani uchun BOSHQA sahifada turganda ham (u yerda
     `currentHash` bo'sh bo'ladi) u faol bo'lib yonardi — masalan
     /library yoki /terms da "Bosh sahifa" yonib turardi. Endi hash
     havolalari faqat Bosh sahifada tekshiriladi.

     `item.path` shoxi — manzil bo'yicha faollik aniqlanadigan bandlar
     uchun. Hozir menyuda bunday band yo'q (barchasi hash yoki NAV_USER),
     lekin shox qoldirildi: kelajakda menyuga mustaqil sahifa
     qo'shilsa, faollik o'z-o'zidan to'g'ri ishlaydi. */
  const isNavActive = (item) => {
    if (item.path) return location.pathname === item.path;
    if (location.pathname !== "/") return false;
    return (location.hash || "") === (item.hash || "");
  };
  const [navScrolled, setNavScrolled] = useState(false);

  // Navbar scroll qilinganda soya bilan "ko'tarilib" chiqadi — chuqurlik hissi
  useEffect(() => {
    function onScroll() {
      setNavScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileInitialTab, setProfileInitialTab] = useState("profile");
  const [siteContent, setSiteContent] = useState(null);
  const [planInfo, setPlanInfo] = useState(null);

  // Header'da tarif nomi + qolgan kun ko'rsatiladi (talab: creditlar Profilda
  // yashiringan, lekin tarif holati doim ko'rinadigan joyda bo'lishi kerak).
  const refreshPlan = React.useCallback(() => {
    if (!user) return;
    api
      .get("/payment/plan")
      .then(({ data }) => setPlanInfo(data))
      .catch(() => {});
  }, [user]);

  useEffect(() => {
    if (!user) {
      setPlanInfo(null);
      return;
    }
    refreshPlan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // Profil oynasi yopilganda ham yangilaymiz — Pro tabda to'lov/tarif
  // o'zgargan bo'lishi mumkin.
  useEffect(() => {
    if (!profileOpen) refreshPlan();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileOpen]);

  // Click/Payme to'lovidan qaytgandan keyin ?payment=success bilan keladi —
  // Profil oynasini to'g'ridan-to'g'ri Pro bo'limida ochamiz.
  useEffect(() => {
    if (new URLSearchParams(location.search).get("payment") === "success") {
      setProfileInitialTab("pro");
      setProfileOpen(true);
      navigate(location.pathname, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  // Pricing bo'limida "Sotib olish" bosilganda login qilinmagan bo'lsa,
  // foydalanuvchi /login ga yo'naltiriladi va tanlovi localStorage'da
  // saqlanadi — login qilingandan keyin shu yerda avtomatik davom etadi.
  useEffect(() => {
    if (!user) return;
    const pending = localStorage.getItem("pendingCheckout");
    if (!pending) return;
    localStorage.removeItem("pendingCheckout");
    (async () => {
      try {
        const { provider, tier } = JSON.parse(pending);
        const { data } = await api.post("/payment/checkout", { provider, tier });
        window.location.href = data.url;
      } catch {
        /* jim — foydalanuvchi Pricing bo'limidan qayta urinib ko'rishi mumkin */
      }
    })();
  }, [user]);

  useEffect(() => {
    const fetchSiteContent = async () => {
      try {
        // DIQQAT: bu yerda `api` instansiyasi emas, to'g'ridan-to'g'ri
        // `fetch` ishlatiladi — ya'ni tilni avtomatik qo'shadigan
        // interceptor bu so'rovga TEGMAYDI, shuning uchun `lang` qo'lda
        // qo'shiladi (aks holda sayt matni doim o'zbekcha qolardi).
        const response = await fetch(
          `${API_BASE}/site/content?lang=${encodeURIComponent(lang)}`,
        );
        const data = await response.json();
        setSiteContent(data);
      } catch (error) {
        console.error("Error fetching site content:", error);
      }
    };

    fetchSiteContent();
  }, [lang]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Use backend content if available, otherwise fallback to hardcoded values
  const telegramLink =
    siteContent?.social?.telegram || "https://t.me/mening_huquqlarim_bot";
  const instagramLink =
    siteContent?.social?.instagram || "https://www.instagram.com/tox1roff_18/";
  const email = siteContent?.contact?.email || "toxirovi82@gmail.com";
  // Footer'dagi "Aloqa" ustuni uchun — email kabi, avval admin
  // kiritgan qiymat, bo'lmasa tarjimadagi standart qiymat.
  const phone = siteContent?.contact?.phone || t.contact_phone;
  const address = siteContent?.contact?.address || t.contact_address;

  const tierLabel = planInfo ? t[`tier_${planInfo.plan}`] || planInfo.plan : null;
  const daysLeft = planInfo?.planExpiresAt
    ? Math.max(0, Math.ceil((new Date(planInfo.planExpiresAt) - Date.now()) / 86400000))
    : null;
  // `user.plan` — zaxira: /payment/plan javobi kelguncha pullik tarif
  // egasining avatari bir lahzaga oddiy ko'rinishda turmasligi uchun.
  const activePlan = planInfo?.plan || user?.plan || "free";
  const isPaidPlan = activePlan !== "free";
  // Avatar harfi — ProfileModal ichidagi avatar bilan bir xil manba
  // (foydalanuvchi ikkala joyda ham bir xil belgini ko'radi).
  const avatarLetter =
    user?.username?.[0]?.toUpperCase() ||
    user?.fullName?.[0]?.toUpperCase() ||
    "?";

  return (
    <div className={s.layout}>
      <nav className={`${s.nav} ${navScrolled ? s.navScrolled : ""}`}>
        <div className={s.navInner}>
          <Link to="/" className={s.logo} onClick={() => setMenuOpen(false)}>
            <img
              src="/logo-96.png"
              alt="Huquq AI"
              className={s.logoImg}
              width="36"
              height="36"
            />
            <span className={s.logoText}>{t.nav_logo}</span>
          </Link>

          <div className={s.navCenter}>
            {!user ? (
              /* Mehmon — barcha bo'limlar bir qatorda */
              NAV_GUEST.map((item) => {
                const isActive = isNavActive(item);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={
                      isActive ? `${s.navLink} ${s.navLinkActive}` : s.navLink
                    }
                  >
                    {t[item.key]}
                  </Link>
                );
              })
            ) : (
              /* Login qilgan — "Biz haqimizda" ochiluvchi ro'yxat,
                 yonida shaxsiy bo'limlar */
              <>
                <Link
                  to="/"
                  className={
                    location.pathname === "/" && !currentHash
                      ? `${s.navLink} ${s.navLinkActive}`
                      : s.navLink
                  }
                >
                  {t.nav_home}
                </Link>

                <div className={s.dropdown}>
                  <button type="button" className={s.dropdownBtn}>
                    {t.nav_about_us}
                    <ChevronDown size={14} />
                  </button>
                  <div className={s.dropdownMenu}>
                    {ABOUT_SUBMENU.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className={s.dropdownItem}
                      >
                        {t[item.key]}
                      </Link>
                    ))}
                  </div>
                </div>

                {NAV_USER.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={
                      location.pathname === item.to
                        ? `${s.navLink} ${s.navLinkActive}`
                        : s.navLink
                    }
                  >
                    {t[item.key]}
                  </Link>
                ))}
                {/* "Profil" matnli havolasi ATAYLAB yo'q — profilga kirish
                    o'ng tomondagi yumaloq avatar orqali (pastda). */}
              </>
            )}
          </div>

          <div className={s.navRight}>
            {/* Til almashtirgich — DOIM yuqorigi panelda, mehmon ham,
                login qilgan foydalanuvchi ham. Avval u login qilganlarda
                faqat burger menyu ICHIDA edi: tilni o'zgartirish uchun
                menyuni ochib, pastgacha scroll qilish kerak edi. Endi
                telefonda ixcham ko'rinishga o'tadi (CSS: .langWrap). */}
            <div className={s.langWrap}>
              <LangSwitcher dark className={langStyles.navCompact} />
            </div>
            {user ? (
              /* Yumaloq profil avatari. Avval bu yerda tarif nomi yozilgan
                 MATNLI nishon turardi, menyuda esa yana alohida "Profil"
                 havolasi bor edi — ikkalasi bitta elementga birlashtirildi.
                 Tarif ma'lumoti yo'qolmadi: pullik tarifda avatar oltin
                 halqa va yulduzcha bilan ajratiladi, to'liq matn (tarif
                 nomi + qolgan kun) tooltip'da va Profil oynasida turadi. */
              <button
                type="button"
                className={`${s.avatarBtn} ${isPaidPlan ? s.avatarPaid : ""}`}
                onClick={() => {
                  setProfileInitialTab("profile");
                  setProfileOpen(true);
                }}
                aria-label={t.profile_tab}
                title={
                  tierLabel
                    ? `${tierLabel}${
                        daysLeft !== null
                          ? ` · ${t.header_days_left.replace("{n}", daysLeft)}`
                          : ""
                      }`
                    : t.profile_tab
                }
              >
                {avatarLetter}
                {isPaidPlan && (
                  <span className={s.avatarBadge}>
                    <Star size={9} fill="currentColor" />
                  </span>
                )}
              </button>
            ) : (
              // Eslatma: bu tugmalar avval inline uslub bilan yozilgan edi —
              // shu sabab mobil media-qoidalar ularga ta'sir qila olmasdi va
              // telefonda header ekrandan chiqib ketardi. Endi CSS klasslari.
              <div className={s.authBtns}>
                <Link to="/login" className={s.authGhost}>
                  {t.nav_login || "Kirish"}
                </Link>
                <Link to="/register" className={s.authGold}>
                  {t.nav_register || "Ro'yxatdan o'tish"}
                </Link>
              </div>
            )}
            {/* Burger menyu — faqat ro'yxatdan o'tgan foydalanuvchilarda.
                Mehmonlarda telefonda pastki navigatsiya (BottomNav) bor,
                shuning uchun burger keraksiz. */}
            {user && (
            <button
              type="button"
              className={`${s.menuBtn} ${menuOpen ? s.menuBtnOpen : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <>
          <div
            className={s.menuOverlay}
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className={s.mobileMenu}>
            <div className={s.mobileMenuHead}>
              <img
              src="/logo-96.png"
              alt="Huquq AI"
              className={s.logoImg}
              width="36"
              height="36"
            />
              <span>{t.nav_logo}</span>
              <button
                type="button"
                className={s.mobileClose}
                onClick={() => setMenuOpen(false)}
              >
                <X size={16} />
              </button>
            </div>
            {/* Mehmon — barcha bo'limlar ro'yxati */}
            {!user &&
              NAV_GUEST.map((item) => {
                const isActive = isNavActive(item);
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={
                      isActive
                        ? `${s.mobileLink} ${s.mobileLinkActive}`
                        : s.mobileLink
                    }
                  >
                    {t[item.key]}
                  </Link>
                );
              })}

            {/* Login qilgan foydalanuvchi menyusi.

                Pastki navigatsiyada (BottomNav) turgan bandlar bu yerda
                TAKRORLANMAYDI — lekin ular endi QATTIQ ro'yxat bilan
                emas, `BOTTOM_NAV_PATHS` bo'yicha chetlab o'tiladi.
                Sabab: avval NAV_USER ning HAMMASI chetlab o'tilardi va
                menyuga qo'shilgan yangi band (Konstitutsiya) na
                panelda, na burgerda ko'rinmay — telefonda sahifa
                UMUMAN ochilmay qolgan edi. */}
            {user && (
              <>
                {NAV_USER.filter(
                  (item) => !BOTTOM_NAV_PATHS.includes(item.to),
                ).map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={
                      location.pathname.startsWith(item.to)
                        ? `${s.mobileLink} ${s.mobileLinkActive}`
                        : s.mobileLink
                    }
                  >
                    {t[item.key]}
                  </Link>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    setProfileInitialTab("profile");
                    setProfileOpen(true);
                  }}
                  className={s.mobileLink}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    width: "100%",
                    color: "var(--gold-light, #e8c97a)",
                    fontWeight: 600,
                  }}
                >
                  <UserIcon size={16} /> {t.profile_tab}
                  {tierLabel && (
                    <span style={{ opacity: 0.7, fontWeight: 500 }}>
                      · {tierLabel}
                      {daysLeft !== null && ` · ${daysLeft}d`}
                    </span>
                  )}
                </button>

                <div className={s.mobileGroupLabel}>{t.nav_about_us}</div>
                {ABOUT_SUBMENU.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMenuOpen(false)}
                    className={`${s.mobileLink} ${s.mobileSubLink}`}
                  >
                    {t[item.key]}
                  </Link>
                ))}
              </>
            )}

            {!user && (
              <>
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className={s.mobileLink}
                >
                  {t.nav_login || "Kirish"}
                </Link>
                <Link
                  to="/register"
                  onClick={() => setMenuOpen(false)}
                  className={`${s.mobileLink} ${s.mobileLinkActive}`}
                >
                  {t.nav_register || "Ro'yxatdan o'tish"}
                </Link>
              </>
            )}
          </div>
        </>
      )}

      <main className={s.main}>
        {/* ⚠️ SAHIFA CHEGARASI SHU YERDA.
            Avval yagona `Suspense` `App.jsx` da, `<Routes>` dan
            YUQORIDA turardi. Natijada lazy sahifaga (Darslar, Testlar,
            Kutubxona...) o'tilganda React eng yaqin chegarani topib,
            BUTUN daraxtni — navbar va footer bilan birga — `fallback`
            ga almashtirardi va sayt bir lahzaga YO'QOLIB ketardi.
            Endi chegara `Outlet` ni o'raydi: qobiq joyida qoladi,
            faqat kontent maydoni yangilanadi. */}
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>

      <FloatingConsultButton />

      {/* Telefon ekranida pastki navigatsiya (desktopda ko'rinmaydi) */}
      <BottomNav />

      <Suspense fallback={null}>
        <ChatDrawer />
      </Suspense>

      {/* Profile Modal */}
      {profileOpen && (
        <ProfileModal
          initialTab={profileInitialTab}
          onClose={() => {
            setProfileOpen(false);
            setProfileInitialTab("profile");
          }}
        />
      )}

      {/* ═══════════════════════════════════════════════════════════
          FOOTER — brend bloki + 4 ustun + pastki qator.

          Ataylab QO'SHILMAGAN: obunaga yozilish ("Yangiliklardan
          xabardor bo'ling") bloki, statistika kartalari, CTA. Bo'sh
          joy ular bilan to'ldirilmaydi — sokin, minimalist ko'rinish
          (Stripe/Linear/Vercel yo'nalishi) ataylab tanlangan.
          ═══════════════════════════════════════════════════════════ */}
      <footer className={s.footer}>
        <div className={s.footerTop}>
          {/* ── Brend ── */}
          <div className={s.footerBrand}>
            <Link to="/" className={s.footerLogo}>
              <img
                src="/logo-96.png"
                alt="Huquq AI"
                className={s.logoImg}
                width="36"
                height="36"
              />
              <span>{t.nav_logo}</span>
            </Link>
            <p className={s.footerTagline}>{t.footer_desc}</p>
            <div className={s.footerSocial}>
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                aria-label="Telegram"
              >
                <img width={18} src={telegram} alt="" />
              </a>
              {instagramLink && (
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <img width={18} src={instagram} alt="" />
                </a>
              )}
              <a href={`mailto:${email}`} aria-label="Email">
                <Globe size={18} />
              </a>
            </div>
            <InstallAppButton variant="footer" />
          </div>

          {/* ── Xizmatlar ── */}
          <nav className={s.footerCol} aria-label={t.nav_services}>
            <h3>{t.nav_services}</h3>
            <ul>
              <li>
                <button type="button" onClick={() => openChat()}>
                  {t.nav_ai_assistant}
                </button>
              </li>
              <li>
                <Link to="/lessons">{t.feat_lessons_title}</Link>
              </li>
              <li>
                <Link to="/tests">{t.feat_tests_title}</Link>
              </li>
              <li>
                <Link to="/library">{t.feat_library_title}</Link>
              </li>
            </ul>
          </nav>

          {/* ── Foydali ma'lumot ── */}
          <nav className={s.footerCol} aria-label={t.footer_col_info}>
            <h3>{t.footer_col_info}</h3>
            <ul>
              {/* ⚠️ Oddiy <a>, <Link> EMAS: /qonunlar — React marshruti
                  emas, server tomonda chiziladigan ochiq sahifa
                  (backend routes/publicSeo.js, Vercel rewrite orqali).
                  <Link> uni SPA ichida ochishga urinib, mavjud emas deb
                  bosh sahifaga qaytarib yuborardi. Bu havola SEO uchun
                  ham muhim — qidiruv roboti ochiq sahifalarga aynan shu
                  yerdan yo'l topadi. */}
              <li>
                <a href="/qonunlar">{t.footer_public_laws}</a>
              </li>
              <li>
                <a href="/savollar">{t.footer_qa}</a>
              </li>
              <li>
                <Link to="/#articles">{t.nav_articles}</Link>
              </li>
              <li>
                <Link to="/#faq">{t.faq_title}</Link>
              </li>
              <li>
                <Link to="/#pricing">{t.nav_pricing}</Link>
              </li>
            </ul>
          </nav>

          {/* ── Kompaniya ── */}
          <nav className={s.footerCol} aria-label={t.footer_col_company}>
            <h3>{t.footer_col_company}</h3>
            <ul>
              <li>
                <Link to="/#about">{t.nav_about_us}</Link>
              </li>
              <li>
                <Link to="/#services">{t.nav_services}</Link>
              </li>
              <li>
                <Link to="/#contact">{t.nav_contact}</Link>
              </li>
              {/* ⚠️ Oddiy <a> — /metodologiya ham server tomonda
                  chiziladi. E-E-A-T signali: huquq YMYL sohasi bo'lgani
                  uchun "javoblar qanday tayyorlanadi" sahifasiga
                  ko'rinadigan havola bo'lishi kerak. */}
              <li>
                <a href="/metodologiya">{t.footer_method}</a>
              </li>
            </ul>
          </nav>

          {/* ── Aloqa (havola emas — ma'lumot) ── */}
          <div className={s.footerCol}>
            <h3>{t.nav_contact}</h3>
            <ul className={s.footerContact}>
              <li>
                <a href={`mailto:${email}`}>{email}</a>
              </li>
              <li>
                <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
              </li>
              <li>
                <span>{address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Pastki qator: copyright · havolalar · nishonlar ── */}
        <div className={s.footerBottom}>
          <span className={s.footerCopy}>{t.footer_copyright}</span>
          <div className={s.footerLegal}>
            <Link to="/terms">{t.footer_legal_terms}</Link>
            <Link to="/privacy">{t.footer_legal_privacy}</Link>
            <Link to="/disclaimer">{t.footer_legal_disclaimer}</Link>
          </div>
          <div className={s.footerBadges}>
            <span className={s.footerBadge}>
              <ShieldCheck size={13} /> {t.footer_ssl}
            </span>
            <span className={s.footerBadge}>
              <MapPin size={13} /> {t.footer_made_in}
            </span>
          </div>
        </div>

        <p className={s.footerWarn}>{t.footer_warn}</p>
      </footer>
    </div>
  );
}
