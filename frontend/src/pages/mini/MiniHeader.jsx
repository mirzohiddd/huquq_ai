/**
 * Mini ilova sarlavhasi: logotip, seriya, XP va profil tugmasi.
 */
import React from "react";
import { Flame, Zap } from "lucide-react";
import { BrandMark } from "../../components/brand/BrandLogo";
import s from "./Mini.module.css";

export default function MiniHeader({ path, initial, t, onProfile }) {
  return (
    <header className={s.header}>
      <div className={s.brand}>
        <BrandMark size={28} className={s.brandMark} />
        <span>Huquq<b>Tech</b></span>
      </div>
      <div className={s.headRight}>
        <span className={s.pill} title={t.streak}><Flame aria-hidden="true" />{path?.streak || 0}</span>
        <span className={s.pill}><Zap aria-hidden="true" />{path?.xp || 0} XP</span>
        <button type="button" className={s.avatar} onClick={onProfile} aria-label={t.tabs.profile}>
          {initial}
        </button>
      </div>
    </header>
  );
}
