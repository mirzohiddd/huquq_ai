/**
 * «TELEGRAM ORQALI KIRISH» — Google tugmasi ostida (2026-10-30).
 * Bosilganda bot ochiladi (`t.me/<bot>?start=login_<token>`): hisob bo'lsa
 * darhol, bo'lmasa «📱 Raqamni yuborish» bilan bir bosishda ochiladi —
 * sayt va bot uchun BITTA hisob. Sayt esa fonda kutib turadi va bot
 * tasdiqlashi bilan o'zi kiradi (backend: routes/authTelegram.js).
 *
 * Havola OLDINDAN tayyorlanadi (sichqoncha kelganda / bosish boshlanganda) —
 * tugma oddiy `<a target="_blank">` bo'ladi va brauzer uni popup deb bloklamaydi.
 */
import { useEffect, useRef, useState } from "react";
import { LoaderCircle } from "lucide-react";
import api from "../../utils/api";
import { useLang } from "../../context/LangContext";
import { useAuth } from "../../context/AuthContext";
import s from "./AuthForm.module.css";

const TX = {
  uz: { btn: "Telegram orqali kirish", reg: "Telegram orqali ro'yxatdan o'tish", wait: "Telegram'da «Start» ni bosing — sayt o'zi kiradi", open: "Telegram'ni ochish", cancel: "Bekor qilish", expired: "Havola muddati tugadi. Qayta bosing.", fail: "Telegram bilan kirib bo'lmadi. Qayta urinib ko'ring." },
  ru: { btn: "Войти через Telegram", reg: "Регистрация через Telegram", wait: "Нажмите «Start» в Telegram — сайт войдёт сам", open: "Открыть Telegram", cancel: "Отмена", expired: "Ссылка устарела. Нажмите ещё раз.", fail: "Не удалось войти через Telegram. Попробуйте ещё раз." },
};
const POLL_MS = 3000;
const MAX_MS = 5 * 60 * 1000; // auth limiti (150 / 15 daq) ga sig'adi

function TgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <path d="M5.4 11.8l11.6-4.5c.5-.2 1 .1.8.9l-2 9.3c-.1.6-.5.8-1 .5l-3-2.2-1.5 1.4c-.2.2-.3.3-.6.3l.2-3.1 5.6-5c.2-.2 0-.3-.4-.1l-6.9 4.3-3-.9c-.6-.2-.6-.6.2-.9z" fill="#2aabee" />
    </svg>
  );
}

export default function TelegramButton({ register = false, disabled, onDone }) {
  const { lang } = useLang();
  const { loginWithToken } = useAuth();
  const T = TX[lang] || TX.uz;
  const [link, setLink] = useState(null); // { token, url, at }
  const [waiting, setWaiting] = useState(false);
  const [err, setErr] = useState("");
  const prep = useRef(null);
  const stop = useRef(false);

  const prepare = () => {
    if (link && Date.now() - link.at < 8 * 60 * 1000) return Promise.resolve(link);
    if (!prep.current) {
      prep.current = api.post("/auth/telegram-login/start").then(({ data }) => {
        const l = { ...data, at: Date.now() };
        setLink(l);
        return l;
      }).finally(() => { prep.current = null; });
    }
    return prep.current;
  };

  // Kutish: bot tasdiqlagach JWT keladi
  useEffect(() => {
    if (!waiting || !link) return undefined;
    stop.current = false;
    const started = Date.now();
    let timer = null;
    const tick = async () => {
      if (stop.current) return;
      try {
        const { data } = await api.get("/auth/telegram-login/poll", { params: { token: link.token } });
        if (data.token) {
          loginWithToken(data);
          setWaiting(false);
          return onDone?.();
        }
      } catch (e) {
        setWaiting(false);
        setLink(null);
        return setErr(e.response?.data?.expired ? T.expired : e.response?.data?.error || T.fail);
      }
      if (Date.now() - started > MAX_MS) {
        setWaiting(false);
        setLink(null);
        return setErr(T.expired);
      }
      timer = setTimeout(tick, POLL_MS);
    };
    timer = setTimeout(tick, POLL_MS);
    // Telegram'dan qaytganda — darhol tekshiradi
    const onBack = () => document.visibilityState === "visible" && (clearTimeout(timer), tick());
    document.addEventListener("visibilitychange", onBack);
    return () => {
      stop.current = true;
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", onBack);
    };
  }, [waiting, link]); // eslint-disable-line react-hooks/exhaustive-deps

  const onClick = async (e) => {
    setErr("");
    if (link) return setWaiting(true); // tayyor havola — brauzer yangi oynada ochadi
    e.preventDefault();
    try {
      const l = await prepare();
      setWaiting(true);
      window.location.href = l.url; // havola hali tayyor bo'lmagan — shu oynada (popup bloklanmaydi)
    } catch {
      setErr(T.fail);
    }
  };

  return (
    <div className={s.tgWrap}>
      <a
        href={link?.url || "#"}
        target="_blank"
        rel="noreferrer"
        className={`${s.googleBtn} ${s.tgBtn} ${disabled ? s.tgOff : ""}`}
        onPointerEnter={() => prepare().catch(() => {})}
        onTouchStart={() => prepare().catch(() => {})}
        onFocus={() => prepare().catch(() => {})}
        onClick={onClick}
      >
        <TgIcon /> {register ? T.reg : T.btn}
      </a>
      {waiting && (
        <p className={s.tgWait}>
          <LoaderCircle size={15} className={s.tgSpin} aria-hidden="true" /> {T.wait}
          {" · "}<a href={link?.url} target="_blank" rel="noreferrer">{T.open}</a>
          {" · "}<button type="button" onClick={() => setWaiting(false)}>{T.cancel}</button>
        </p>
      )}
      {err && <p className={s.tgErr}>{err}</p>}
    </div>
  );
}
