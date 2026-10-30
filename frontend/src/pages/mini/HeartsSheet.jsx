/**
 * YURAKCHALAR OYNASI — 5 ta yurakcha, keyingisigacha taymer va XP evaziga
 * to'ldirish: 1 ta — 10 XP, hammasi birdan — 40 XP (chegirma).
 * Yurakcha tugasa avtomatik ochiladi (miniApi → heartsStore).
 */
import React, { useState } from "react";
import { Heart, X, Zap, Clock } from "lucide-react";
import { mini } from "./miniApi";
import { useHearts, closeHearts, setHearts, mmss } from "./heartsStore";
import { haptic } from "./tg";
import { sfx } from "./sound";
import s from "./Hearts.module.css";

export default function HeartsSheet({ t, xp, onBought }) {
  const { open, live } = useHearts(true);
  const [busy, setBusy] = useState(null);
  const [err, setErr] = useState("");
  if (!open || !live) return null;
  const T = t.hearts;
  const full = live.hearts >= live.max;

  const buy = async (kind) => {
    setBusy(kind);
    setErr("");
    try {
      const r = await mini.buyHearts(kind);
      setHearts(r.hearts);
      sfx("right");
      haptic("success");
      onBought?.();
    } catch (e) {
      setErr(e?.response?.data?.error || t.error);
    } finally {
      setBusy(null);
    }
  };

  return (
    <div className={s.back} onClick={closeHearts} role="presentation">
      <div className={s.sheet} onClick={(e) => e.stopPropagation()} role="dialog" aria-label={T.title}>
        <button type="button" className={s.x} onClick={closeHearts} aria-label={t.close || "×"}><X /></button>
        <h3 className={s.title}>{live.hearts ? T.title : T.empty}</h3>
        <div className={s.row} aria-label={`${live.hearts} / ${live.max}`}>
          {Array.from({ length: live.max }, (_, i) => (
            <Heart key={i} className={i < live.hearts ? s.on : s.off} style={{ "--i": i }} aria-hidden="true" />
          ))}
        </div>
        <p className={s.text}>{full ? T.full : live.hearts ? T.rule : T.wait}</p>
        {!full && (
          <p className={s.timer}><Clock aria-hidden="true" /> {T.next} <b>{mmss(live.nextIn)}</b></p>
        )}
        {!full && (
          <div className={s.buy}>
            <button type="button" className={s.btn} disabled={!!busy || xp < live.prices.one} onClick={() => buy("one")}>
              <span><Heart aria-hidden="true" /> {T.one}</span>
              <b><Zap aria-hidden="true" />{live.prices.one} XP</b>
            </button>
            {live.missing > 1 && (
              <button type="button" className={`${s.btn} ${s.best}`} disabled={!!busy || xp < live.prices.all} onClick={() => buy("all")}>
                <span><Heart aria-hidden="true" /> {T.all(live.missing)}</span>
                <b>{live.missing * 10 > live.prices.all && <s>{live.missing * 10}</s>}<Zap aria-hidden="true" />{live.prices.all} XP</b>
                {live.missing * 10 > live.prices.all && <i className={s.tag}>{T.sale}</i>}
              </button>
            )}
          </div>
        )}
        <p className={s.have}>{T.have(xp)}</p>
        {err && <p className={s.err}>{err}</p>}
        <button type="button" className={s.ok} onClick={closeHearts}>{full || live.hearts ? T.go : T.later}</button>
      </div>
    </div>
  );
}
