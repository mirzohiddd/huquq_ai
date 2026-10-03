import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import api from "../utils/api";

/**
 * BOTDAN KELGAN "HISOBNI ULASH" (2026-10-03).
 *
 * Botdagi «🔗 Saytdagi hisobni ulash» tugmasi `/login?tg=link` ni ochadi.
 * Niyat localStorage'ga yoziladi (login sahifasi, Google oynasi yoki
 * allaqachon kirgan foydalanuvchini "/" ga qaytarish — hammasida
 * saqlanib qolishi uchun). Foydalanuvchi tizimda bo'lishi bilan bir
 * martalik havola olinadi va brauzer to'g'ridan-to'g'ri botga qaytadi —
 * bot `/start link_<token>` ni qabul qilib, hisobni ulaydi.
 */
const KEY = "tgLinkPending";
const TTL_MS = 15 * 60 * 1000;

export default function TelegramLinkIntent() {
  const { user } = useAuth();

  // URL'dagi belgini darhol saqlaymiz (marshrut yo'naltirishidan oldin)
  if (typeof window !== "undefined") {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get("tg") === "link") localStorage.setItem(KEY, String(Date.now()));
    } catch {
      /* SSR yoki yopiq storage */
    }
  }

  useEffect(() => {
    if (!user) return;
    let at = 0;
    try {
      at = Number(localStorage.getItem(KEY) || 0);
      localStorage.removeItem(KEY);
    } catch {
      return;
    }
    if (!at || Date.now() - at > TTL_MS) return;
    api
      .post("/auth/telegram-link-token")
      .then(({ data }) => {
        if (data?.botUrl) window.location.href = data.botUrl;
      })
      .catch(() => {
        /* jim — foydalanuvchi profil orqali qayta ulay oladi */
      });
  }, [user]);

  return null;
}
