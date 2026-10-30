/**
 * Mini ilova sarlavhasi: logotip, seriya, XP va profil tugmasi.
 */
import React from "react";
import { Flame, Zap, Heart } from "lucide-react";
import { useHearts, openHearts } from "./heartsStore";
import h from "./Hearts.module.css";
import { BrandMark } from "../../components/brand/BrandLogo";
import s from "./Mini.module.css";

export default function MiniHeader({ path, initial, t, onProfile }) {
  const { live } = useHearts(true);
  return (
    <header className={s.header}>
      <div className={s.brand}>
        <BrandMark size={28} className={s.brandMark} />
        <span>Huquq<b>Tech</b></span>
      </div>
      <div className={s.headRight}>
        <span className={s.pill} title={t.streak}><Flame aria-hidden="true" />{path?.streak || 0}</span>
        <span className={s.pill}><Zap aria-hidden="true" />{path?.xp || 0}<span className={s.pillUnit}>&nbsp;XP</span></span>
        {live && (
          <button type="button" className={`${h.pill} ${live.hearts ? "" : h.pillEmpty}`} onClick={openHearts} aria-label={t.hearts.label(live.hearts)}>
            <Heart aria-hidden="true" />{live.hearts}
          </button>
        )}
        <button type="button" className={s.avatar} onClick={onProfile} aria-label={t.tabs.profile}>
          {initial}
        </button>
      </div>
    </header>
  );
}
