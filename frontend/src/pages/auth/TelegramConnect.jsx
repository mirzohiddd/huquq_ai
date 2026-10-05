import { CheckCircle2 } from "lucide-react";
import { useLang } from "../../context/LangContext";
import AuthShell from "./AuthShell";
import { TelegramIcon } from "./icons";
import s from "./AuthForm.module.css";

/* ───────── Telegram Bot ulanish ekrani ─────────
   Ro'yxatdan o'tgach (javobda `botUrl` bo'lsa) ko'rsatiladi.
   (AuthPages.jsx dan ko'chirildi, mantiq o'zgarmagan, 2026-10-05.) */
export default function TelegramConnect({ botUrl, onSkip }) {
  const { t } = useLang();
  return (
    <AuthShell>
      <div className={s.center}>
        <div className={s.successIcon}>
          <CheckCircle2 size={52} />
        </div>
        <h1 className={s.title}>{t.register_success_title || "Ro'yxatdan o'tdingiz!"}</h1>
        <p className={s.sub} style={{ margin: "0.5rem auto 1.5rem" }}>
          {t.register_tg_desc || "Telegram botni ulang — AI maslahatdan Telegram orqali ham foydalaning"}
        </p>
        <a href={botUrl} target="_blank" rel="noreferrer" className={`${s.btn} ${s.tgBtn}`}>
          <TelegramIcon />
          {t.register_tg_btn || "Telegram botni ulash →"}
        </a>
        <button type="button" className={s.linkBtn} onClick={onSkip}>
          {t.register_tg_skip || "Keyinroq ulash →"}
        </button>
      </div>
    </AuthShell>
  );
}
