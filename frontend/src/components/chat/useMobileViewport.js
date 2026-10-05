import { useEffect } from "react";

/* Chat oynasi telefonda klaviaturaga moslashadi (ChatDrawer.jsx dan
   ko'chirildi — mantiq o'zgarmagan). */
export default function useMobileViewport(isOpen, drawerRef) {
  /* ─── Mobil klaviatura ───
     Telefonda chat `position: fixed` bo'lgani uchun klaviatura ochilganda
     u BUTUN ekranni egallab turaveradi va pastdagi yozish qatori (shu
     jumladan YUBORISH tugmasi) klaviatura ORTIDA qolib ketadi.
     `visualViewport` haqiqiy ko'rinadigan balandlikni beradi — chat
     o'shanga moslanadi. API yo'q brauzerlarda o'zgaruvchi umuman
     qo'yilmaydi va CSS'dagi standart qiymat (100dvh) ishlaydi. */
  useEffect(() => {
    const vv = window.visualViewport;
    const el = drawerRef.current;
    if (!isOpen || !vv || !el) return;

    let raf = null;
    const write = () => {
      raf = null;
      // Faqat telefon ko'rinishida — desktopda chat yon panel va
      // uning balandligi klaviaturaga bog'liq emas.
      if (window.matchMedia("(max-width: 640px)").matches) {
        el.style.setProperty("--chat-h", `${Math.round(vv.height)}px`);
        /* ⚠️ SILJISH ham qoplanishi kerak, faqat balandlik EMAS.
           Klaviatura ochilganda brauzer ko'rinadigan maydonni pastga
           suradi (`offsetTop` > 0), `position: fixed` element esa
           MAKET maydoniga bog'langan holda qoladi — ya'ni chat
           ekranning tepasiga "ko'tarilib" ketadi va sarlavha bilan
           birinchi xabarlar ko'rinmay qoladi. Aynan shu "input'ni
           bossam tepaga ketyapti" muammosi edi. */
        el.style.setProperty("--chat-top", `${Math.round(vv.offsetTop)}px`);
      } else {
        el.style.removeProperty("--chat-h");
        el.style.removeProperty("--chat-top");
      }
    };
    /* `scroll` klaviatura ochilayotganda ketma-ket yonadi — har bir
       hodisada uslub yozish o'rniga bitta kadrga birlashtiramiz. */
    const apply = () => {
      if (raf === null) raf = requestAnimationFrame(write);
    };

    write();
    vv.addEventListener("resize", apply);
    /* ⚠️ `scroll` ham kerak: `offsetTop` klaviatura ochilgandan KEYIN,
       balandlik o'zgarmasdan ham o'zgaradi (foydalanuvchi maydonga
       bosganda brauzer ko'rinadigan maydonni suradi) va faqat `resize`
       ga tayanilsa chat siljigan holda qolib ketardi. */
    vv.addEventListener("scroll", apply);
    window.addEventListener("orientationchange", apply);
    return () => {
      if (raf !== null) cancelAnimationFrame(raf);
      vv.removeEventListener("resize", apply);
      vv.removeEventListener("scroll", apply);
      window.removeEventListener("orientationchange", apply);
      el.style.removeProperty("--chat-h");
      el.style.removeProperty("--chat-top");
    };
  }, [isOpen, drawerRef]);
}
