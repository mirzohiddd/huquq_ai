/**
 * TARIFLAR — mini ilova ichida (saytdagi Narxlar bilan bir xil manba:
 * `/api/payment/plans`). 1-bo'lim bepul; qolgan barcha kurs va bo'limlar —
 * Basic / Pro / Premium. Xarid: onlayn to'lov ulangan bo'lsa Click/Payme,
 * har doim — bir bosishda buyurtma (admin Telegram orqali bog'lanadi).
 */
import React, { useEffect, useState } from "react";
import { X, Check, Zap, Star, Gem, LoaderCircle } from "lucide-react";
import { siteApi, mini } from "./miniApi";
import { openLink, haptic } from "./tg";
import { sfx } from "./sound";
import { Spinner } from "./Gate";
import Hero from "./Hero";
import s from "./Plans.module.css";

const ORDER = ["basic", "pro", "premium"];
const ICON = { basic: Zap, pro: Star, premium: Gem };
const fmt = (n) => Number(n || 0).toLocaleString("ru-RU");

export default function PlansSheet({ ctx }) {
  const { t } = ctx;
  const p = t.plans;
  const [data, setData] = useState(null);
  const [current, setCurrent] = useState(null);
  const [pick, setPick] = useState(null);
  const [busy, setBusy] = useState("");
  const [msg, setMsg] = useState("");
  const [phone, setPhone] = useState(null); // telefon so'ralsa — kiritish maydoni

  useEffect(() => {
    siteApi.plans().then(setData).catch(() => setData({ plans: [] }));
    siteApi.plan().then(setCurrent).catch(() => {});
  }, []);
  if (!data) return <Spinner />;
  const plans = ORDER.map((id) => data.plans.find((x) => x.id === id)).filter(Boolean);

  const done = (text) => {
    setMsg(text);
    setPick(null);
    sfx("lesson");
    haptic("success");
  };
  const order = async (tier) => {
    setBusy("order");
    try {
      await mini.order({ tier, phone: phone || undefined });
      done(p.orderSent);
    } catch (e) {
      const d = e?.response?.data;
      if (d?.field === "phone") setPhone(phone || "");
      setMsg(d?.error || t.error);
    } finally {
      setBusy("");
    }
  };
  const pay = async (tier, provider) => {
    setBusy(provider);
    try {
      const r = await siteApi.checkout({ provider, tier });
      if (r.url) openLink(r.url);
      else if (r.testMode) {
        await siteApi.testConfirm({ merchantTransId: r.merchantTransId });
        done(p.activated);
        siteApi.plan().then(setCurrent).catch(() => {});
        ctx.reloadPath();
      }
    } catch (e) {
      setMsg(e?.response?.data?.error || t.error);
    } finally {
      setBusy("");
    }
  };

  return (
    <div className={s.wrap}>
      <button type="button" className={s.close} onClick={ctx.close} aria-label={t.toMap}><X /></button>
      <div className={s.head}>
        <Hero pose="scales" mood="happy" size={120} />
        <h2>{p.title}</h2>
        <p>{p.sub}</p>
        {current && <span className={s.cur}>{p.current}: <b>{current.label}</b>{current.daysLeft ? ` · ${current.daysLeft} ${t.dayUnit}` : ""}</span>}
      </div>
      {msg && <div className={s.msg}>{msg}</div>}

      {plans.map((pl) => {
        const Icon = ICON[pl.id] || Star;
        const active = current?.plan === pl.id;
        return (
          <div key={pl.id} className={`${s.card} ${pl.id === "pro" ? s.best : ""}`}>
            <div className={s.top}>
              <span className={s.icon}><Icon aria-hidden="true" /></span>
              <div>
                <b>{pl.label}</b>
                <div className={s.price}>{fmt(pl.priceUzs)} <small>{p.perMonth}</small></div>
              </div>
              {active && <span className={s.active}>{p.active}</span>}
            </div>
            <ul>
              <li><Check aria-hidden="true" />{p.allUnits}</li>
              <li><Check aria-hidden="true" />{p.aiDay(pl.dailyLimit)}</li>
              {pl.voiceDailyLimit > 0 && <li><Check aria-hidden="true" />{p.voice(pl.voiceDailyLimit)}</li>}
              {pl.useClaude && <li><Check aria-hidden="true" />{p.premiumAi}</li>}
            </ul>
            {pick === pl.id ? (
              <div className={s.actions}>
                {data.onlinePayment && (
                  <>
                    <button type="button" className={s.main} disabled={!!busy} onClick={() => pay(pl.id, "click")}>{busy === "click" ? <LoaderCircle className={s.spin} /> : p.payClick}</button>
                    <button type="button" className={s.main} disabled={!!busy} onClick={() => pay(pl.id, "payme")}>{busy === "payme" ? <LoaderCircle className={s.spin} /> : p.payPayme}</button>
                  </>
                )}
                {phone !== null && <input className={s.input} type="tel" inputMode="tel" placeholder={p.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />}
                <button type="button" className={data.onlinePayment ? s.ghost : s.main} disabled={!!busy} onClick={() => order(pl.id)}>{busy === "order" ? <LoaderCircle className={s.spin} /> : p.send}</button>
              </div>
            ) : (
              !active && <button type="button" className={s.main} onClick={() => { setMsg(""); setPick(pl.id); }}>{p.buy}</button>
            )}
          </div>
        );
      })}
      <p className={s.free}>{p.free}</p>
    </div>
  );
}
