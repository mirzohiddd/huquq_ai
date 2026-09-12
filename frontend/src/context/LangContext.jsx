import React, { createContext, useContext, useState } from "react";
import { translations, defaultLang } from "../i18n/translations";

const LangContext = createContext(null);

/* ⚠️ SAQLANGAN TILNI TEKSHIRISH SHART.
   Ingliz tili saytdan olib tashlandi, lekin uni tanlagan foydalanuvchining
   brauzerida `localStorage.lang = "en"` qolib ketgan bo'ladi. Tekshirilmasa
   ikki muammo yuzaga kelardi:
     1) `translations["en"]` endi mavjud emas — interfeys standart tilga
        tushardi, lekin `lang` o'zgaruvchisi "en" bo'lib qolardi;
     2) shu "en" har bir API so'roviga `?lang=en` bo'lib ketardi va
        server uni tanimay, kontentni tarjimasiz qaytarardi.
   Shuning uchun noma'lum til standart tilga ALMASHTIRILADI va
   `localStorage` ham darhol tuzatiladi. */
function readStoredLang() {
  const saved = localStorage.getItem("lang");
  if (saved && translations[saved]) return saved;
  if (saved) localStorage.setItem("lang", defaultLang);
  return defaultLang;
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  function changeLang(l) {
    if (!translations[l]) return; // qo'llab-quvvatlanmaydigan til
    setLang(l);
    localStorage.setItem("lang", l);
  }

  const t = translations[lang] || translations[defaultLang];

  return (
    <LangContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
