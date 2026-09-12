import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Check, CheckCircle2, User, Zap, Star, Gem } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import api from "../utils/api";
import Reveal from "./Reveal";
import JsonLd from "./JsonLd";
import { graph, pricingSchema } from "../seo/schema";
import { PAYMENT_PROVIDERS } from "./PaymentLogos";
import PaymentMethodModal from "./PaymentMethodModal";
import s from "./PricingSection.module.css";

// Faqat pullik 3 ta tarif — eng past (Basic) dan eng yuqori (Premium) gacha.
// Bepul karta Pricing bo'limida ko'rsatilmaydi.
// Har biriga mos ikona va vizual "daraja" belgisi biriktirilgan.
const TIER_ORDER = ["basic", "pro", "premium"];
const TIER_ICON = { free: User, basic: Zap, pro: Star, premium: Gem };
const TIER_FEATURE_KEY = {
  free: "pricing_features_free",
  basic: "pricing_features_basic",
  pro: "pricing_features_pro",
  premium: "pricing_features_premium",
};

function fmtPrice(n) {
  return Number(n || 0).toLocaleString("ru-RU");
}

export default function PricingSection() {
  const { user } = useAuth();
  const { t } = useLang();
  const [plans, setPlans] = useState(null);
  const [currentPlan, setCurrentPlan] = useState(null);
  // Tanlangan tarif — bosilganda to'lov usulini tanlash oynasi ochiladi
  const [checkoutPlan, setCheckoutPlan] = useState(null);

  useEffect(() => {
    api
      .get("/payment/plans")
      .then(({ data }) => setPlans(data.plans))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!user) {
      setCurrentPlan(null);
      return;
    }
    api
      .get("/payment/plan")
      .then(({ data }) => setCurrentPlan(data.plan))
      .catch(() => {});
  }, [user]);

  function handleBuyClick(plan) {
    if (!user) {
      localStorage.setItem(
        "pendingCheckout",
        JSON.stringify({ tier: plan.id, provider: "click" }),
      );
      window.location.href = "/login";
      return;
    }
    setCheckoutPlan(plan);
  }

  function handleActivated(tier) {
    setCheckoutPlan(null);
    setCurrentPlan(tier);
  }

  // Bo'sh <section id="pricing"> ham darhol render qilinadi (plans hali
  // yuklanmagan bo'lsa ham) — aks holda to'g'ridan-to'g'ri /#pricing havolasi
  // orqali kirilganda scroll-to-hash element topa olmay qolardi.
  // ⚠️ `useMemo` shart: `ordered` har renderda YANGI massiv bo'lsa,
  // quyidagi sxema ham qayta hisoblanadi va <script> teg har renderda
  // o'chirilib qayta qo'shilaverardi (Home.jsx da bir marta shu xatoga
  // yo'l qo'yilgan va o'sha yerda ham izohda qayd etilgan).
  const ordered = React.useMemo(
    () =>
      plans
        ? TIER_ORDER.map((id) => plans.find((p) => p.id === id)).filter(Boolean)
        : [],
    [plans],
  );

  /* SEO: tariflar sxemasi — narxlar backenddan kelgan HAQIQIY qiymatlar.
     Google qidiruv natijasida narx ko'rsatishi va AI javob tizimlari
     "qancha turadi?" savoliga to'g'ri javob berishi uchun. Narx kodga
     yozilmaydi — o'zgarganda sxema o'z-o'zidan yangilanadi. */
  const pricingJsonLd = React.useMemo(
    () => graph(pricingSchema(ordered)),
    [ordered],
  );

  return (
    <section id="pricing" className={s.section}>
      <JsonLd id="pricing" data={pricingJsonLd} />
      <div className={s.container}>
        <Reveal as="div" className={s.head}>
          <h2 className={s.title}>{t.pricing_title}</h2>
          <p className={s.subtitle}>{t.pricing_subtitle}</p>
        </Reveal>

        {plans && (
        <div className={s.grid}>
          {ordered.map((plan, i) => {
            const isPopular = plan.id === "pro";
            const isFree = plan.id === "free";
            const isCurrent = currentPlan === plan.id;
            const Icon = TIER_ICON[plan.id] || Star;
            const featureList = t[TIER_FEATURE_KEY[plan.id]] || [];

            return (
              <Reveal
                as="div"
                key={plan.id}
                delay={i * 0.08}
                className={`${s.card} ${isPopular ? s.cardPopular : ""} ${isFree ? s.cardFree : ""}`}
              >
                {isPopular && (
                  <span className={s.popularBadge}>{t.pricing_badge_popular}</span>
                )}

                <span className={`${s.tierIcon} ${isFree ? s.tierIconFree : ""}`}>
                  <Icon size={20} />
                </span>

                <div className={s.cardLabel}>
                  {t[`tier_${plan.id}`] || plan.label}
                </div>
                <div className={s.priceRow}>
                  <span className={s.price}>{fmtPrice(plan.priceUzs)}</span>
                  <span className={s.priceUnit}>
                    {t.currency_uzs} {t.pricing_per_month}
                  </span>
                </div>

                <ul className={s.features}>
                  {featureList.map((feat) => (
                    <li key={feat}>
                      <Check size={16} />
                      {feat}
                    </li>
                  ))}
                </ul>

                <div className={s.ctaArea}>
                  {isCurrent ? (
                    <div className={s.currentBox}>
                      <CheckCircle2 size={19} />
                      <div>
                        <div className={s.currentTitle}>{t.pricing_cta_current}</div>
                        <div className={s.currentSub}>{t.pricing_current_sub}</div>
                      </div>
                    </div>
                  ) : isFree ? (
                    user ? (
                      <p className={s.freeNote}>{t.pricing_free_note}</p>
                    ) : (
                      <Link to="/register" className={s.buyBtn}>
                        {t.pricing_cta_register}
                      </Link>
                    )
                  ) : (
                    <>
                      <button
                        type="button"
                        className={s.buyBtn}
                        onClick={() => handleBuyClick(plan)}
                      >
                        {t.pricing_cta_buy}
                      </button>
                      <div className={s.trustRow}>
                        <span className={s.trustLabel}>{t.pricing_trust_label}</span>
                        <div className={s.trustLogos}>
                          {PAYMENT_PROVIDERS.map(({ id, Logo }) => (
                            <span key={id} className={s.trustLogo}>
                              <Logo />
                            </span>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
        )}
      </div>

      {checkoutPlan && (
        <PaymentMethodModal
          tier={checkoutPlan.id}
          planLabel={t[`tier_${checkoutPlan.id}`] || checkoutPlan.label}
          priceUzs={checkoutPlan.priceUzs}
          onClose={() => setCheckoutPlan(null)}
          onActivated={handleActivated}
        />
      )}
    </section>
  );
}
