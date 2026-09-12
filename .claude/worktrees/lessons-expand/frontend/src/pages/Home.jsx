import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useChatPanel } from "../context/ChatPanelContext";
import { useLang } from "../context/LangContext";
import { useAuth } from "../context/AuthContext";
import {
  Calendar,
  Check,
  Smile,
  MessageSquare,
  FileText,
  Users,
  Landmark,
  Briefcase,
  Home as HomeIcon,
  Wheat,
  ShoppingCart,
  Scale,
  Building2,
  Wallet,
  ClipboardList,
  ScrollText,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ArrowRight,
  Check as CheckIcon,
  MessageCircleQuestion,
  Lightbulb,
  ListChecks,
} from "lucide-react";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { scrollToTop, scrollToElement } from "../utils/smoothScroll";
import CountUp from "../components/CountUp";
import PricingSection from "../components/PricingSection";
import PlatformFeatures from "../components/PlatformFeatures";
import AboutMore from "../components/AboutMore";
import AICapabilities from "../components/AICapabilities";
import WhyUs from "../components/WhyUs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import DetailModal from "../components/DetailModal";
import modalS from "../components/DetailContent.module.css";
import shared from "../styles/site.module.css";
import s from "./Home.module.css";
import aboutS from "./About.module.css";
import servicesS from "./Services.module.css";
import articlesS from "./Articles.module.css";
import contactS from "./Contact.module.css";
import { API_BASE } from "../utils/apiBase";

const LAWS = [
  { code: "laws_labor", items: "laws_labor_items" },
  { code: "laws_family", items: "laws_family_items" },
  { code: "laws_civil", items: "laws_civil_items" },
  { code: "laws_land", items: "laws_land_items" },
  { code: "laws_criminal", items: "laws_criminal_items" },
  { code: "laws_consumer", items: "laws_consumer_items" },
];

// Emoji o'rniga ishlatiladigan ikonalar — matn massivlari (translations.js)
// bilan TARTIB bo'yicha mos keladi (tillararo bir xil, tarjima qilinmaydi).
const FEATURE_ICONS = [MessageSquare, FileText, Users, Landmark];
const CATEGORY_ICONS = [Briefcase, Users, HomeIcon, Wheat, ShoppingCart, Scale];
const SERVICE_ICONS = [MessageSquare, FileText, Scale, Building2, Users, Briefcase, HomeIcon, Wallet];
const STAT_ICONS = [Calendar, Check, Smile];
const ARTICLE_ICONS = [
  ClipboardList,
  ScrollText,
  ShoppingCart,
  Users,
  HomeIcon,
  Wallet,
  Briefcase,
  Landmark,
  Scale,
];

// Maqolalar bo'limida boshida nechtasi ko'rsatiladi (qolgani
// "Barcha maqolalar" tugmasi bosilganda ochiladi).
const ARTICLES_PREVIEW = 3;

export default function Home() {
  const { openChat } = useChatPanel();
  const { t, lang } = useLang();
  const { user } = useAuth();
  const location = useLocation();
  const [siteContent, setSiteContent] = useState(null);
  // Batafsil oynalar: xizmat INDEKSI bo'yicha saqlanadi (ikona shu
  // indeksdan olinadi), maqola esa obyekt sifatida.
  const [openService, setOpenService] = useState(null);
  const [openArticle, setOpenArticle] = useState(null);
  const [showAllArticles, setShowAllArticles] = useState(false);

  useEffect(() => {
    // Track visitor
    const trackVisitor = async () => {
      try {
        // Eslatma: IP endi backend tomonidan aniqlanadi. Avval bu yerda
        // har bir sahifa yuklanishida api.ipify.org ga tashqi so'rov
        // ketardi — ortiqcha kechikish va begona xizmatga bog'liqlik.
        const userAgent = navigator.userAgent;
        const path = window.location.pathname;
        const referrer = document.referrer || "";

        const device = /Mobile|Android|iPhone|iPad/i.test(userAgent)
          ? "Mobile"
          : "Desktop";

        let os = "Unknown";
        if (userAgent.includes("Windows")) os = "Windows";
        else if (userAgent.includes("Mac")) os = "MacOS";
        else if (userAgent.includes("Linux")) os = "Linux";
        else if (userAgent.includes("Android")) os = "Android";
        else if (userAgent.includes("iOS")) os = "iOS";

        let browser = "Unknown";
        if (userAgent.includes("Chrome")) browser = "Chrome";
        else if (userAgent.includes("Firefox")) browser = "Firefox";
        else if (userAgent.includes("Safari")) browser = "Safari";
        else if (userAgent.includes("Edge")) browser = "Edge";

        await fetch(`${API_BASE}/visitor/track`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userAgent,
            path,
            referrer,
            device,
            os,
            browser,
          }),
        });
      } catch (error) {
        console.error("Visitor tracking error:", error);
      }
    };

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

    trackVisitor();
    fetchSiteContent();
  }, [lang]);

  // Hash bo'yicha tegishli bo'limga scroll qilish (masalan /#contact),
  // hash bo'lmasa (Bosh sahifa) - sahifa boshiga scroll qilish
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => scrollToElement(el), 0);
      }
    } else {
      scrollToTop();
    }
  }, [location]);

  // Mehmon ham AI'ni sinab ko'ra oladi (bepul cheklangan savol bilan) —
  // login sahifasiga majburiy yo'naltirish olib tashlandi, limit tugagach
  // chat oynasining o'zida ro'yxatdan o'tish taklifi chiqadi.
  function handleAiClick() {
    openChat();
  }

  // Til-mustaqil ma'lumotlar (faqat links) backend'dan olinadi
  // Barcha MATNLAR har doim t.* (active lang) dan olinadi - backend override qilmaydi
  const telegramLink =
    siteContent?.social?.telegram || "https://t.me/mening_huquqlarim_bot";
  const telegramLinkContact =
    siteContent?.social?.telegram || "https://t.me/MeningHuquqimBot";

  const heroTitle = t.hero_title;
  const heroSubtitle = t.hero_subtitle;
  const heroCta = t.hero_cta;

  // Stats: qiymatlar (raqamlar) backend'dan, labellar t.* dan
  const stats = siteContent?.stats
    ? [
        {
          icon: <Calendar size={24} />,
          value: siteContent.stats.experience,
          label: t.stats[0]?.label,
        },
        {
          icon: <Check size={24} />,
          value: siteContent.stats.cases,
          label: t.stats[1]?.label,
        },
        {
          icon: <Smile size={24} />,
          value: siteContent.stats.clients,
          label: t.stats[2]?.label,
        },
      ]
    : t.stats.map((st, i) => {
        const Icon = STAT_ICONS[i] || Calendar;
        return { ...st, icon: <Icon size={24} /> };
      });

  // About uchun statistikalar (alohida ikonkalar bilan, xuddi avvalgi kabi)
  const aboutStats = siteContent?.stats
    ? [
        {
          icon: <Calendar size={24} />,
          value: siteContent.stats.experience,
          label: t.stats[0]?.label,
        },
        {
          icon: <Check size={24} />,
          value: siteContent.stats.cases,
          label: t.stats[1]?.label,
        },
        {
          icon: <Smile size={24} />,
          value: siteContent.stats.clients,
          label: t.stats[2]?.label,
        },
      ]
    : t.stats.map((st, i) => {
        const Icon = STAT_ICONS[i] || Calendar;
        return { ...st, icon: <Icon size={24} /> };
      });

  // Contact uchun ma'lumotlar
  const address = siteContent?.contact?.address || t.contact_address;
  const phone = siteContent?.contact?.phone || t.contact_phone;
  const email = siteContent?.contact?.email || t.contact_email;
  const hoursWeek = t.contact_hours_week;
  const hoursSat = t.contact_hours_sat;

  // Sichqoncha harakatiga sezgir yengil parallax — orblar sichqoncha
  // tomon "sudralib" boradi (mavjud floatOrb animatsiyasi bilan birga).
  function handleHeroMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mx = (e.clientX - rect.left) / rect.width - 0.5;
    const my = (e.clientY - rect.top) / rect.height - 0.5;
    e.currentTarget.style.setProperty("--mx", mx.toFixed(3));
    e.currentTarget.style.setProperty("--my", my.toFixed(3));
  }

  // FAQ bo'limi qidiruv natijasida "savol-javob" ko'rinishida
  // chiqishi uchun structured data (schema.org FAQPage).
  // useMemo — til o'zgarmaguncha bir xil obyekt qaytadi, aks holda
  // Seo komponenti har renderda <script>ni qayta yaratardi.
  const faqJsonLd = React.useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [1, 2, 3, 4, 5]
        .filter((n) => t[`faq_${n}_q`] && t[`faq_${n}_a`])
        .map((n) => ({
          "@type": "Question",
          name: t[`faq_${n}_q`],
          acceptedAnswer: { "@type": "Answer", text: t[`faq_${n}_a`] },
        })),
    }),
    [t],
  );

  return (
    <>
      <Seo
        title={t.seo_home_title}
        description={t.seo_home_desc}
        jsonLd={faqJsonLd}
      />

      {/* Hero Section */}
      <section className={s.hero} onMouseMove={handleHeroMouseMove}>
        <div className={s.heroOrbs} aria-hidden="true">
          <span className={`${s.heroOrb} ${s.heroOrb1}`} />
          <span className={`${s.heroOrb} ${s.heroOrb2}`} />
          <span className={`${s.heroOrb} ${s.heroOrb3}`} />
        </div>
        <div className={s.heroOverlay} />
        <div className={s.heroInner}>
          <div className={s.heroContent}>
            <h1
              className={`${s.heroTitle} animate-fade-up`}
              style={{ animationDelay: "0.05s" }}
            >
              {heroTitle}
            </h1>
            <p
              className={`${s.heroSub} animate-fade-up`}
              style={{ animationDelay: "0.18s" }}
            >
              {heroSubtitle}
            </p>
            <div
              className={`${s.heroActions} animate-fade-up`}
              style={{ animationDelay: "0.32s" }}
            >
              <button
                type="button"
                className={`${s.btnGold} ${s.heroCtaBtn}`}
                onClick={handleAiClick}
              >
                {user
                  ? heroCta
                  : t.hero_cta_login || "Kirish va maslahat olish"}
              </button>
              <a
                href={telegramLink}
                target="_blank"
                rel="noreferrer"
                className={s.btnOutline}
              >
                <Send size={15} /> {t.btn_telegram}
              </a>
            </div>
            {!user && (
              <p
                className={`${s.heroNote} animate-fade-up`}
                style={{ animationDelay: "0.45s" }}
              >
                {t.hero_note}
              </p>
            )}
          </div>
        </div>
        <div className={s.featuresRow}>
          <div className={s.featuresInner}>
            {t.features.map((f, i) => {
              const Icon = FEATURE_ICONS[i] || MessageSquare;
              return (
                <div
                  key={f.title}
                  className={`${s.featureCard} animate-fade-up`}
                  style={{ animationDelay: `${0.1 + i * 0.08}s` }}
                  onClick={handleAiClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleAiClick()}
                >
                  <span className={s.featureIcon}>
                    <Icon size={22} />
                  </span>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={s.statsSection}>
        <div className={s.container}>
          <div className={s.statsGrid}>
            {stats.map((stat, i) => (
              <Reveal as="div" key={i} className={s.statCard} delay={i * 0.1}>
                <span className={s.statIcon}>{stat.icon}</span>
                <div className={s.statValue}>
                  <CountUp value={stat.value} />
                </div>
                <div className={s.statLabel}>{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AICapabilities />
      <WhyUs />

      {/* Categories Section */}
      <section className={s.categoriesSection}>
        <div className={s.container}>
          <Reveal as="h2" className={s.sectionTitle}>
            {t.section_cats_title}
          </Reveal>
          <div className={s.categoriesGrid}>
            {t.cats.map((cat, i) => {
              const Icon = CATEGORY_ICONS[i] || Scale;
              return (
                <Reveal
                  as="div"
                  key={cat.title}
                  className={s.categoryCard}
                  delay={i * 0.08}
                  onClick={handleAiClick}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleAiClick()}
                >
                  <span className={s.categoryIcon}>
                    <Icon size={22} />
                  </span>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className={s.stepsSection}>
        <div className={s.container}>
          <Reveal as="h2" className={s.sectionTitle}>
            {t.section_steps_title}
          </Reveal>
          <div className={s.stepsGrid}>
            {t.steps.map((step, i) => (
              <Reveal
                as="div"
                key={step.n}
                className={s.stepCard}
                delay={i * 0.1}
              >
                <div className={s.stepNumber}>{step.n}</div>
                <h3>{step.t}</h3>
                <p>{step.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== ABOUT ===================== */}
      <div id="about">
        <div className={`${shared.pageHero} animate-fade-up`}>
          <div className={shared.container}>
            <h1 className={shared.pageHeroTitle}>{t.about_title}</h1>
            <p className={shared.pageHeroSub}>{t.about_lead}</p>
          </div>
        </div>

        <section className={`${shared.pageSection} animate-fade-up`}>
          <div className={shared.container}>
            <div className={aboutS.aboutGrid}>
              <div>
                <p className={aboutS.aboutDesc}>{t.about_text}</p>
                {/* Kengaytirilgan tavsif: platforma qanday ishlashi va
                    maqsadi. Avval bu yerda bitta umumiy xatboshi bor edi. */}
                <p className={aboutS.aboutDesc}>{t.about_text_2}</p>
                <p className={aboutS.aboutDesc}>{t.about_text_3}</p>
                <div className={aboutS.stats}>
                  {aboutStats.map((st) => (
                    <div key={st.label} className={aboutS.stat}>
                      <span className={aboutS.statIcon}>{st.icon}</span>
                      <div>
                        <strong>
                          <CountUp value={st.value} />
                        </strong>
                        <span>{st.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={aboutS.aboutImage}>
                <figure className={aboutS.aboutCard}>
                  <img
                    src="/bizHaqimizda.jpg"
                    alt={t.about_title}
                    className={aboutS.aboutImg}
                    loading="lazy"
                    width="1280"
                    height="853"
                  />
                </figure>
              </div>
            </div>

            {/* Platforma imkoniyatlari — AI Yordamchi, Darslar, Testlar,
                Qonunlar kutubxonasi */}
            <PlatformFeatures />

            {/* Muammo→Yechim · Raqamlarda platforma · Qadriyatlar ·
                Kimlar uchun. Modullardan KEYIN turadi: avval nima
                taklif qilinishi ko'rsatiladi, keyin nima uchun kerakligi
                va qanday tamoyillarga tayanishi tushuntiriladi. */}
            <AboutMore />
          </div>
        </section>

        <section className={shared.pageSectionAlt}>
          <div className={shared.container}>
            <div className={shared.sHead}>
              <h2 className={shared.sTitle}>{t.about_laws_title}</h2>
              <div className={shared.sLine} />
            </div>
            <div className={aboutS.lawGrid}>
              {LAWS.map((l) => (
                <div key={l.code} className={aboutS.lawCard}>
                  <h3 className={aboutS.lawTitle}>{t[l.code]}</h3>
                  <ul className={aboutS.lawList}>
                    {t[l.items].map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className={aboutS.warn}>{t.about_warn}</div>
          </div>
        </section>
      </div>

      {/* ===================== SERVICES ===================== */}
      <div id="services">
        <div className={`${shared.pageHero} animate-fade-up`}>
          <div className={shared.container}>
            <h1 className={shared.pageHeroTitle}>{t.services_title}</h1>
            <p className={shared.pageHeroSub}>{t.hero_subtitle}</p>
          </div>
        </div>

        <section className={shared.pageSection}>
          <div className={shared.container}>
            <div className={servicesS.servicesGrid}>
              {t.services.map((svc, i) => {
                const Icon = SERVICE_ICONS[i] || FileText;
                return (
                  <div
                    key={svc.title}
                    className={`${servicesS.serviceCard} animate-fade-up`}
                    style={{ animationDelay: `${i * 0.06}s` }}
                    onClick={() => setOpenService(i)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && setOpenService(i)}
                  >
                    <span className={servicesS.serviceIcon}>
                      <Icon size={22} />
                    </span>
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                    {/* Karta bosilishini bildiruvchi belgi — avval kartalar
                        bosilardi-yu, buni ko'rsatadigan hech narsa yo'q edi */}
                    <span className={servicesS.serviceMore}>
                      {t.service_more} <ArrowRight size={13} />
                    </span>
                  </div>
                );
              })}
            </div>
            <div className={servicesS.ctaWrap}>
              <button
                type="button"
                className={shared.btnGold}
                onClick={handleAiClick}
              >
                {t.nav_consult_free}
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* ===================== ARTICLES ===================== */}
      <div id="articles">
        <div className={`${shared.pageHero} animate-fade-up`}>
          <div className={shared.container}>
            <h1 className={shared.pageHeroTitle}>{t.articles_title}</h1>
            <p className={shared.pageHeroSub}>{t.footer_desc}</p>
          </div>
        </div>

        <section className={shared.pageSection}>
          <div className={shared.container}>
            {/* Boshida faqat ARTICLES_PREVIEW ta maqola ko'rsatiladi;
                "Barcha maqolalar" tugmasi qolganini ochadi. Avval bu
                tugma chat oynasini ochardi — ya'ni maqolalarga umuman
                aloqasi yo'q edi va foydalanuvchi qolgan maqolalarni
                hech qayerdan ko'ra olmasdi. */}
            <div className={articlesS.articleGrid}>
              {(showAllArticles
                ? t.articles
                : t.articles.slice(0, ARTICLES_PREVIEW)
              ).map((a, i) => {
                const Icon = ARTICLE_ICONS[i % ARTICLE_ICONS.length] || FileText;
                return (
                  <article
                    key={a.title}
                    className={`${articlesS.articleCard} animate-fade-up`}
                    style={{ animationDelay: `${(i % ARTICLES_PREVIEW) * 0.08}s` }}
                    role="button"
                    tabIndex={0}
                    onClick={() => setOpenArticle(a)}
                    onKeyDown={(e) => e.key === "Enter" && setOpenArticle(a)}
                  >
                    <div className={articlesS.articleThumb}>
                      <Icon size={24} />
                    </div>
                    <span className={articlesS.articleCat}>{a.category}</span>
                    <h2>{a.title}</h2>
                    <p>{a.excerpt}</p>
                    <div className={articlesS.articleFoot}>
                      <time className={articlesS.articleDate}>{a.date}</time>
                      <span className={articlesS.articleDot} aria-hidden="true">
                        ·
                      </span>
                      <span className={articlesS.articleTime}>
                        <Clock size={12} /> {a.readTime}
                      </span>
                      <span className={articlesS.articleRead}>
                        {t.articles_read} <ArrowRight size={13} />
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
            {t.articles.length > ARTICLES_PREVIEW && (
              <div className={articlesS.ctaWrap}>
                <button
                  type="button"
                  className={shared.btnGold}
                  onClick={() => setShowAllArticles((v) => !v)}
                  aria-expanded={showAllArticles}
                >
                  {showAllArticles ? t.articles_btn_less : t.articles_btn}
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      {/* ===================== CONTACT ===================== */}
      <div id="contact">
        <div className={`${shared.pageHero} animate-fade-up`}>
          <div className={shared.container}>
            <h1 className={shared.pageHeroTitle}>{t.contact_title}</h1>
            <p className={shared.pageHeroSub}>{t.hero_subtitle}</p>
          </div>
        </div>

        <section className={shared.pageSection}>
          <div className={shared.container}>
            <div
              className={`${contactS.contactGrid} animate-fade-up`}
              style={{ animationDelay: "0.1s" }}
            >
              <ul className={contactS.contactList}>
                <li>
                  <span className={contactS.contactIcon}>
                    <MapPin size={20} />
                  </span>
                  <div>
                    <strong>{t.nav_contact}</strong>
                    <p>{address}</p>
                  </div>
                </li>
                <li>
                  <span className={contactS.contactIcon}>
                    <Phone size={20} />
                  </span>
                  <div>
                    <strong>{t.contact_phone}</strong>
                    <p>{phone}</p>
                  </div>
                </li>
                <li>
                  <span className={contactS.contactIcon}>
                    <Mail size={20} />
                  </span>
                  <div>
                    <strong>{t.contact_email}</strong>
                    <p>{email}</p>
                  </div>
                </li>
                <li>
                  <span className={contactS.contactIcon}>
                    <Clock size={20} />
                  </span>
                  <div>
                    <p>{hoursWeek}</p>
                    <p>{hoursSat}</p>
                  </div>
                </li>
              </ul>

              <div className={contactS.contactCard}>
                <h2>{t.nav_consult_free}</h2>
                <p>{t.cta_desc}</p>
                <div className={contactS.contactActions}>
                  <button
                    type="button"
                    className={shared.btnGold}
                    onClick={handleAiClick}
                  >
                    {t.hero_cta}
                  </button>
                  <a
                    href={telegramLinkContact}
                    target="_blank"
                    rel="noreferrer"
                    className={contactS.telegramLink}
                  >
                    <Send size={15} /> {t.btn_telegram}
                  </a>
                  {!user && (
                    <Link to="/login" className={contactS.linkLogin}>
                      {t.nav_login}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Testimonials />
      <FAQ />
      <PricingSection />

      {/* CTA Section */}
      <section className={s.ctaSection}>
        <div className={s.container}>
          <Reveal as="div" className={s.ctaCard}>
            <h2>{t.cta_title}</h2>
            <p>{t.cta_desc}</p>
            <button
              type="button"
              className={s.ctaButton}
              onClick={handleAiClick}
            >
              {t.cta_btn}
            </button>
          </Reveal>
        </div>
      </section>

      {/* ── Xizmat haqida batafsil ── */}
      {openService !== null && t.services[openService] && (
        <DetailModal
          icon={SERVICE_ICONS[openService] || FileText}
          eyebrow={t.service_eyebrow}
          title={t.services[openService].title}
          closeLabel={t.modal_close}
          onClose={() => setOpenService(null)}
          footer={
            <button
              type="button"
              className={modalS.ctaBtn}
              onClick={() => {
                setOpenService(null);
                openChat();
              }}
            >
              {t.service_cta} <ArrowRight size={15} />
            </button>
          }
        >
          <p className={modalS.lead}>{t.services[openService].long}</p>

          <h3 className={modalS.blockTitle}>
            <ListChecks size={15} /> {t.service_includes}
          </h3>
          <ul className={modalS.checkList}>
            {(t.services[openService].includes || []).map((item) => (
              <li key={item}>
                <CheckIcon size={14} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className={modalS.blockTitle}>
            <MessageCircleQuestion size={15} /> {t.service_examples}
          </h3>
          {/* Savolni bosish — uni AI'ga TO'G'RIDAN-TO'G'RI yuboradi:
              foydalanuvchi savolni qo'lda ko'chirib yozishi shart emas. */}
          <div className={modalS.questions}>
            {(t.services[openService].examples || []).map((q) => (
              <button
                key={q}
                type="button"
                className={modalS.questionBtn}
                onClick={() => {
                  setOpenService(null);
                  openChat(q);
                }}
              >
                <span>{q}</span>
                <ArrowRight size={14} />
              </button>
            ))}
          </div>

          <p className={modalS.note}>{t.service_note}</p>
        </DetailModal>
      )}

      {/* ── Maqola matni ── */}
      {openArticle && (
        <DetailModal
          icon={
            ARTICLE_ICONS[
              t.articles.indexOf(openArticle) % ARTICLE_ICONS.length
            ] || FileText
          }
          eyebrow={openArticle.category}
          title={openArticle.title}
          closeLabel={t.modal_close}
          meta={
            <>
              <span>{openArticle.date}</span>
              <span>
                <Clock size={12} style={{ verticalAlign: "-2px" }}/>{" "}
                {openArticle.readTime}
              </span>
            </>
          }
          onClose={() => setOpenArticle(null)}
          footer={
            <button
              type="button"
              className={modalS.ctaBtn}
              onClick={() => {
                setOpenArticle(null);
                openChat();
              }}
            >
              {t.service_cta} <ArrowRight size={15} />
            </button>
          }
        >
          {(openArticle.body || []).map((para) => (
            <p key={para} className={modalS.para}>
              {para}
            </p>
          ))}

          {(openArticle.tips || []).length > 0 && (
            <div className={modalS.tips}>
              <h3 className={modalS.tipsTitle}>
                <Lightbulb size={15} /> {t.articles_tips}
              </h3>
              <ul>
                {openArticle.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </DetailModal>
      )}
    </>
  );
}
