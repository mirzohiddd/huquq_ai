import React, { useState } from "react";
import { Link2, Check } from "lucide-react";
import { useLang } from "../context/LangContext";
import {
  TelegramIcon,
  WhatsappIcon,
  FacebookIcon,
  XIcon,
} from "./ShareIcons";
import s from "./ShareBar.module.css";

/**
 * SMO (Social Media Optimization) — sahifani ijtimoiy tarmoqda ulashish.
 *
 * Nima uchun kerak: Open Graph teglari saytni "chiroyli ulashiladigan"
 * qiladi, lekin ULASHISH tugmasi bo'lmasa foydalanuvchi manzilni qo'lda
 * nusxalashi kerak — amalda buni kam odam qiladi. Ulashuv esa ijtimoiy
 * signal va tashqi havola beradi, bu SEO ga ham bilvosita ta'sir qiladi.
 *
 * ⚠️ Tashqi SDK (Facebook SDK, AddThis) ATAYLAB ishlatilmagan — ular
 * kuzatuv skriptlari bo'lib, sahifani sekinlashtiradi va maxfiylik
 * siyosatiga qo'shimcha talab qo'yadi. Bu yerda oddiy `share` havolalari
 * yetarli: hech qanday tashqi kod yuklanmaydi.
 */
export default function ShareBar({ url, title }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);

  const shareUrl =
    url || (typeof window !== "undefined" ? window.location.href : "");
  const shareText = title || t.seo_home_title || "Huquq AI";
  const u = encodeURIComponent(shareUrl);
  const txt = encodeURIComponent(shareText);

  const links = [
    {
      key: "telegram",
      label: "Telegram",
      Icon: TelegramIcon,
      href: `https://t.me/share/url?url=${u}&text=${txt}`,
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      Icon: WhatsappIcon,
      href: `https://wa.me/?text=${txt}%20${u}`,
    },
    {
      key: "facebook",
      label: "Facebook",
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${u}`,
    },
    {
      key: "x",
      label: "X",
      Icon: XIcon,
      href: `https://twitter.com/intent/tweet?url=${u}&text=${txt}`,
    },
  ];

  async function copyLink() {
    try {
      // Telefonlarda brauzerning o'z ulashish oynasi qulayroq;
      // bo'lmasa manzil vaqtinchalik xotiraga nusxalanadi.
      if (navigator.share) {
        await navigator.share({ title: shareText, url: shareUrl });
        return;
      }
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Foydalanuvchi oynani yopdi yoki clipboard ruxsati yo'q —
      // bu xato emas, hech narsa qilinmaydi.
    }
  }

  return (
    <div className={s.wrap}>
      <span className={s.label}>{t.share_label}</span>
      <div className={s.buttons}>
        {links.map(({ key, label, Icon, href }) => (
          <a
            key={key}
            className={s.btn}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${t.share_label} — ${label}`}
            title={label}
          >
            <Icon />
          </a>
        ))}
        <button
          type="button"
          className={`${s.btn} ${copied ? s.btnDone : ""}`}
          onClick={copyLink}
          aria-label={t.share_copy}
          title={copied ? t.share_copied : t.share_copy}
        >
          {copied ? <Check size={17} /> : <Link2 size={17} />}
        </button>
      </div>
    </div>
  );
}
