/**
 * Kirish va ro'yxatdan o'tish sahifalari.
 *
 * 2026-10-05: sahifalar namuna bo'yicha qayta dizayn qilindi va 200 qator
 * qoidasi bo'yicha `pages/auth/` papkasiga bo'lindi (avval bu fayl 1053
 * qator edi). Bu fayl faqat eksport nuqtasi — App.jsx shu yerdan import
 * qiladi, shuning uchun marshrutlar o'zgarmadi.
 */
export { default as Login } from "./auth/LoginPage";
export { default as Register } from "./auth/RegisterPage";
export { default } from "./auth/LoginPage";
