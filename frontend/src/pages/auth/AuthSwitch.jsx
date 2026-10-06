import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

/**
 * Kirish ⇄ Ro'yxatdan o'tish o'rtasidagi sahifa almashish animatsiyasi.
 * "Ro'yxatdan o'tish" → ekran CHAPGA chiqib ketadi, yangisi o'ngdan kiradi.
 * "Kirish"            → ekran O'NGGA chiqib ketadi, yangisi chapdan kiradi.
 * Yo'nalish keyingi sahifaga `location.state.authEnter` orqali beriladi.
 */
const EXIT_MS = 320;
const DIR = { "/register": "left", "/login": "right" };

const Ctx = createContext(null);

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function useAuthTransition() {
  const navigate = useNavigate();
  const location = useLocation();
  const [exit, setExit] = useState(null);
  const timer = useRef(0);
  // Kirish animatsiyasi faqat shu almashishdan kelganda (to'g'ridan-to'g'ri ochilsa yo'q)
  const [enter] = useState(() => location.state?.authEnter || null);

  useEffect(() => () => clearTimeout(timer.current), []);

  // Yo'nalish bir martalik: OTP/Telegram ekrani yoki sahifa yangilansa qayta o'ynamasin
  useEffect(() => {
    if (!location.state?.authEnter) return;
    const { authEnter, ...rest } = location.state;
    navigate(location.pathname + location.search, { replace: true, state: Object.keys(rest).length ? rest : null });
  }, [location, navigate]);

  const go = useCallback(
    (to) => {
      const dir = DIR[to] || "left";
      const state = { ...(location.state || {}), authEnter: dir === "left" ? "right" : "left" };
      if (reducedMotion()) return navigate(to, { state });
      setExit(dir);
      timer.current = setTimeout(() => navigate(to, { state }), EXIT_MS);
    },
    [navigate, location.state],
  );

  return { exit, enter, go };
}

export function AuthSwitchProvider({ go, children }) {
  return <Ctx.Provider value={go}>{children}</Ctx.Provider>;
}

/** Oddiy `Link` — lekin bosilganda avval chiqish animatsiyasi o'ynaydi */
export function AuthSwitchLink({ to, children, ...rest }) {
  const go = useContext(Ctx);
  const onClick = (e) => {
    if (!go || e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    go(to);
  };
  return (
    <Link to={to} onClick={onClick} {...rest}>
      {children}
    </Link>
  );
}
