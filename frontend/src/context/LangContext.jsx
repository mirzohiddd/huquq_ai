import React, { createContext, useContext, useState } from "react";
import { defaultLang, SUPPORTED_LANGS, getDict, loadLang } from "../i18n/translations";

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
export function readStoredLang() {
  let saved = null;
  try {
    saved = localStorage.getItem("lang");
  } catch {
    return defaultLang;
  }
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  if (saved) localStorage.setItem("lang", defaultLang);
  return defaultLang;
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(readStoredLang);

  /* Ruscha lug'at alohida bo'lakda (i18n/translations.js). U yuklangandan
     KEYIN til almashadi — aks holda bir lahza matnsiz interfeys chiqardi. */
  function changeLang(l) {
    if (!SUPPORTED_LANGS.includes(l)) return; // qo'llab-quvvatlanmaydigan til
    loadLang(l).then(() => {
      setLang(l);
      localStorage.setItem("lang", l);
    });
  }

  const t = getDict(lang) || getDict(defaultLang);

  return (
    <LangContext.Provider value={{ lang, changeLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
