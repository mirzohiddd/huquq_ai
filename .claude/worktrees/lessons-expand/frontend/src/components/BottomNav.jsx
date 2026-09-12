import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Scale,
  GraduationCap,
  ClipboardCheck,
  Library,
  Sparkles,
  Tag,
  Briefcase,
  Phone,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useLang } from "../context/LangContext";
import { useChatPanel } from "../context/ChatPanelContext";
import s from "./BottomNav.module.css";

/**
 * MOBIL PASTKI NAVIGATSIYA — telefon ekranida (≤768px) ekran pastida
 * turadigan doimiy panel (Instagram/Telegram ilovalaridagi kabi).
 *
 * Nima uchun: telefonda asosiy bo'limlarga o'tish uchun har safar
 * yuqoridagi "burger" menyuni ochish kerak edi — bu qo'shimcha ikki
 * bosish va barmoq ekranning eng uzoq (yuqori) qismiga cho'zilishi
 * demakdir. Pastki panel bosh barmoq zonasida turadi.
 *
 * Markazdagi AI tugmasi ataylab kattaroq va ajralib turadi — u saytning
 * asosiy funksiyasi. Shu sabab telefonda suzuvchi chat tugmasi (
 * FloatingConsultButton) yashiriladi, aks holda ikkalasi ustma-ust
 * tushib, ekranni band qilardi.
 */
/* Pastki panelda turgan yo'llar — burger menyu shu ro'yxatga qarab
   takrorlanmasligi kerak bo'lgan bandlarni aniqlaydi.

   ⚠️ Bu ro'yxat SHU YERDA saqlanadi va SiteLayout undan foydalanadi.
   Avval burger menyu NAV_USER ning HAMMASINI qattiq chetlab o'tardi
   ("ular baribir pastki panelda") — natijada menyuga YANGI band
   (Konstitutsiya) qo'shilganda u pastki panelda ham, burgerda ham
   ko'rinmay qoldi va telefonda sahifani UMUMAN ochib bo'lmasdi.
   Endi chetlab o'tish shu ro'yxat bo'yicha aniq bajariladi. */
export const BOTTOM_NAV_PATHS = [
  "/constitution",
  "/lessons",
  "/tests",
  "/library",
];

export default function BottomNav() {
  const { user } = useAuth();
  const { t } = useLang();
  const { openChat, isOpen } = useChatPanel();
  const { pathname } = useLocation();

  // Chat ochiq bo'lsa panel keraksiz (va u chat ustiga chiqib qolmasin)
  if (isOpen) return null;

  const items = user
    ? [
        /* Bosh sahifa o'rnida KONSTITUTSIYA — u eng yuqori yuridik
           kuchga ega hujjat va tez-tez ochiladi. Bosh sahifaga
           yuqoridagi LOGO orqali o'tiladi, ya'ni yo'l yo'qolmaydi. */
        { to: "/constitution", icon: Scale, label: t.nav_constitution },
        { to: "/lessons", icon: GraduationCap, label: t.feat_lessons_title },
        { action: "ai", icon: Sparkles, label: t.nav_ai_assistant },
        { to: "/tests", icon: ClipboardCheck, label: t.feat_tests_title },
        { to: "/library", icon: Library, label: t.feat_library_title },
      ]
    : [
        // Mehmonlarda burger menyu yo'q — shu sabab asosiy bo'limlar
        // to'liq shu panelda turadi (kirish/ro'yxatdan o'tish tugmalari
        // esa yuqorigi panelda qoladi).
        { to: "/", icon: Home, label: t.nav_home },
        { to: "/#services", icon: Briefcase, label: t.nav_services },
        { action: "ai", icon: Sparkles, label: t.nav_ai_assistant },
        { to: "/#pricing", icon: Tag, label: t.nav_pricing },
        { to: "/#contact", icon: Phone, label: t.nav_contact },
      ];

  /**
   * Havola faolmi?
   * DIQQAT: "/#pricing" kabi hash havolalar HECH QACHON faol deb
   * belgilanmaydi — ular alohida sahifa emas, Bosh sahifadagi bo'lim.
   * (Avvalgi shart `pathname.startsWith("/")` bo'lgani uchun ular
   * har doim faol ko'rinardi.)
   */
  function isActive(to) {
    if (to.includes("#")) return false;
    if (to === "/") return pathname === "/";
    return pathname.startsWith(to);
  }

  return (
    <nav className={s.bar} aria-label={t.nav_home}>
      {items.map((item) => {
        const Icon = item.icon;

        // Markazdagi AI tugmasi — havola emas, chat oynasini ochadi
        if (item.action === "ai") {
          return (
            <button
              key="ai"
              type="button"
              className={`${s.item} ${s.aiItem}`}
              onClick={() => openChat()}
            >
              <span className={s.aiCircle}>
                <Icon size={20} />
              </span>
              <span className={s.label}>{item.label}</span>
            </button>
          );
        }

        const active = isActive(item.to);
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`${s.item} ${active ? s.itemActive : ""}`}
            aria-current={active ? "page" : undefined}
          >
            <Icon size={20} />
            <span className={s.label}>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
