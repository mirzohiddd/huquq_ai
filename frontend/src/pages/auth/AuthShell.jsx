import { Link } from "react-router-dom";
import { GraduationCap, FileText, SquareCheckBig, Sparkles } from "lucide-react";
import { useLang } from "../../context/LangContext";
import LangSwitcher from "../../components/LangSwitcher";
import BrandLogo from "../../components/brand/BrandLogo";
import { AuthSwitchProvider, useAuthTransition } from "./AuthSwitch";
import s from "./AuthShell.module.css";
import m from "./AuthMotion.module.css";

const FEATURES = [
  [GraduationCap, "auth_f1_title", "auth_f1_text"],
  [FileText, "auth_f2_title", "auth_f2_text"],
  [SquareCheckBig, "auth_f3_title", "auth_f3_text"],
  [Sparkles, "auth_f4_title", "auth_f4_text"],
];

/**
 * Kirish / ro'yxatdan o'tish / OTP / Telegram ekranlari uchun umumiy
 * tuzilma: chapda brend va platforma imkoniyatlari, o'ngda karta.
 * Kirish ⇄ ro'yxatdan o'tish almashishi animatsiyali (AuthSwitch.jsx).
 */
export default function AuthShell({ children }) {
  const { t } = useLang();
  const { exit, enter, go } = useAuthTransition();
  const motion = exit ? m[`exit_${exit}`] : enter ? m[`enter_${enter}`] : "";
  return (
    <AuthSwitchProvider go={go}>
    <div className={m.viewport}>
    <div className={`${s.page} ${motion}`}>
      <aside className={s.showcase}>
        <Link to="/" className={s.brandLink} aria-label="HuquqTech">
          <BrandLogo size="lg" sub />
        </Link>
        <h2 className={s.headline}>{t.auth_hero_title}</h2>
        <p className={s.lead}>{t.auth_hero_sub}</p>
        <ul className={s.features}>
          {FEATURES.map(([Icon, title, text]) => (
            <li key={title} className={s.feature}>
              <span className={s.featIcon}>
                <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
              </span>
              <span>
                <span className={s.featTitle}>{t[title]}</span>
                <span className={s.featText}>
                  {t[text]}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Bezak: kitoblar va kompyuter (namunadan, chetlari fonga eritilgan) */}
      <picture className={s.photo} aria-hidden="true">
        <source srcSet="/auth-books.avif" type="image/avif" />
        <img src="/auth-books.png" alt="" width="362" height="471" loading="lazy" decoding="async" />
      </picture>

      <main className={s.side}>
        <div className={s.topbar}>
          <LangSwitcher />
        </div>
        <div className={s.card}>{children}</div>
      </main>
    </div>
    </div>
    </AuthSwitchProvider>
  );
}
