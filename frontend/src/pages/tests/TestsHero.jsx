import React from "react";
import { ClipboardCheck, Trophy, Clock, TrendingUp } from "lucide-react";
import s from "../Tests.module.css";
import test from "../../../public/tests-hero.png";

/** Testlar sahifasining hero bloki (Tests.jsx 200 qator qoidasi uchun ajratilgan). */
export default function TestsHero({ t }) {
  return (
    <>
      {/* ⚠️ `shared.container` ATAYLAB YO'Q — hero ekran boshidan
          oxirigacha bo'lishi kerak. Kontent `.hero` padding'i bilan
          1200px chizig'ida ushlab turiladi. */}
      <div className={`${s.heroOuter} animate-fade-up`}>
        <header className={s.hero}>
          {/* ⚠️ Bu yerda CSS bezaklari (nuqtali to'r, iliq dog',
              uchqunlar) YO'Q — ular rasmning O'ZIDA chizilgan.
              Qo'shilsa ustma-ust tushib, ikki marta ko'rinardi. */}
          <div className={s.heroBody}>
            <span className={s.badge}>
              <ClipboardCheck size={15} /> {t.feat_tests_title}
            </span>

            <h1 className={s.heroTitle}>{t.feat_tests_title}</h1>

            {/* Oltin bezak: chiziq — romb — chiziq */}
            <span className={s.ornament} aria-hidden="true">
              <i /> <b /> <i />
            </span>

            <p className={s.heroSub}>{t.tests_sub}</p>

            <div className={s.perks}>
              {[
                { Icon: Clock, title: t.tests_perk1_title, desc: t.tests_perk1_desc },
                { Icon: TrendingUp, title: t.tests_perk2_title, desc: t.tests_perk2_desc },
                { Icon: Trophy, title: t.tests_perk3_title, desc: t.tests_perk3_desc },
              ].map(({ Icon, title, desc }) => (
                <div key={title} className={s.perk}>
                  <span className={s.perkIcon}>
                    <Icon size={17} />
                  </span>
                  <div>
                    <h3 className={s.perkTitle}>{title}</h3>
                    <p className={s.perkDesc}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Illyustratsiya — foydalanuvchi bergan haqiqiy rasm.
              ⚠️ Rasm QAYTA ISHLANGAN, asl holicha qo'yilmagan:
                · atrofidagi OQ fon shaffof qilindi — aks holda krem
                  rangli hero ustida oq to'rtburchak bo'lib ko'rinardi
                  (planshetdagi oq qog'oz esa saqlanib qoldi);
                · 1280px → 760px, WebP + PNG: 953 KB → 76 KB.
              Bu shart edi: loyihada bir marta 383 KB lik rasm butun
              saytni sekinlashtirgan. */}
          <div className={s.heroArt}>
            <picture>
              <source srcSet={test} type="image/webp" />
              <img
                src={test}
                alt=""
                width="760"
                height="670"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </header>
      </div>
    </>
  );
}
