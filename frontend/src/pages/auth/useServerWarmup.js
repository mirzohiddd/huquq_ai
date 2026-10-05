import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { API_ORIGIN } from "../../utils/apiBase";

/**
 * Bepul hostingdagi uxlab yotgan serverni sahifa ochilishi bilan uyg'otadi
 * (AuthPages.jsx dagi mantiq, ikki sahifada takrorlanardi — 2026-10-05).
 *
 * BUG FIX (saqlangan): promise ref'da turadi va forma yuborilganda
 * `waitReady()` u tugashini kutadi. Aks holda tez to'ldirilgan forma
 * uxlab yotgan serverga tushib, "vaqt tugadi" xatosi chiqardi.
 */
export default function useServerWarmup() {
  const ref = useRef(null);
  const [warming, setWarming] = useState(false);

  useEffect(() => {
    setWarming(true);
    ref.current = axios
      .get(API_ORIGIN + "/health", { timeout: 90000 })
      .catch(() => {})
      .finally(() => setWarming(false));
  }, []);

  const waitReady = async () => {
    if (ref.current) await ref.current;
  };

  return { warming, waitReady };
}
