import React from "react";
import { useNavigate } from "react-router-dom";
import { Lock, Check } from "lucide-react";
import { useLang } from "../../context/LangContext";
import s from "../ChatDrawer.module.css";

/* ─── Bepul limit tugaganda chiqadigan ro'yxatdan o'tish oynasi ───
   Mehmon (login qilmagan) foydalanuvchi bepul savollarini sarflagach
   chat ustida ko'rinadi. Chat suhbati o'chirilmaydi — foydalanuvchi
   olgan javoblarini o'qiy oladi, faqat yangi savol berish bloklanadi. */
export default function RegisterPrompt({ onClose, freeLimit }) {
  const navigate = useNavigate();
  const { t } = useLang();

  function goRegister() {
    onClose();
    navigate("/register");
  }
  function goLogin() {
    onClose();
    navigate("/login");
  }

  return (
    <div className={s.registerOverlay} role="dialog" aria-modal="true">
      <div className={s.registerCard}>
        <div className={s.registerIcon}>
          <Lock size={26} />
        </div>
        <h3 className={s.registerTitle}>{t.guest_limit_title}</h3>
        <p className={s.registerDesc}>
          {(t.guest_limit_desc || "").replace("{n}", freeLimit)}
        </p>

        <ul className={s.registerFeatures}>
          <li>
            <Check size={15} /> {t.guest_feature_ai}
          </li>
          <li>
            <Check size={15} /> {t.guest_feature_lessons}
          </li>
          <li>
            <Check size={15} /> {t.guest_feature_tests}
          </li>
          <li>
            <Check size={15} /> {t.guest_feature_library}
          </li>
        </ul>

        <button type="button" className={s.registerBtn} onClick={goRegister}>
          {t.nav_register}
        </button>
        <button type="button" className={s.registerLoginLink} onClick={goLogin}>
          {t.guest_have_account}
        </button>
      </div>
    </div>
  );
}
