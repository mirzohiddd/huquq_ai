import React from "react";

/**
 * ═══════════════════════════════════════════════════════════════════
 *  SAHIFA HERO'LARI UCHUN ILLYUSTRATSIYALAR
 * ═══════════════════════════════════════════════════════════════════
 *
 * ⚠️ NIMA UCHUN SVG, RASM EMAS
 * Berilgan namunalarda 3D render qilingan illyustratsiyalar bor
 * (tarozi, bolg'acha, kitob). Ularni kod bilan aynan qayta yaratib
 * bo'lmaydi — bu tayyor grafik fayl. Shuning uchun bu yerda o'sha
 * kompozitsiyani takrorlaydigan TOZA VEKTOR variant chizilgan:
 * bir xil predmetlar, bir xil joylashuv, loyihaning oltin/to'q ko'k
 * palitrasida.
 *
 * SVG tanlanganining sababi bor:
 *   · hech qanday fayl yuklanmaydi — sahifa tezligi tushmaydi
 *     (loyihada favicon 1,4 MB bo'lgani uchun avval muammo bo'lgan);
 *   · istalgan o'lchamda aniq ko'rinadi;
 *   · rangi CSS o'zgaruvchilaridan olinadi, ya'ni palitra
 *     o'zgarsa illyustratsiya ham o'zgaradi.
 *
 * Agar kelajakda haqiqiy 3D rasm qo'yilsa — shu komponentlarni
 * <img> bilan almashtirish kifoya, hero tuzilmasiga tegilmaydi.
 *
 * TESTLAR va DARSLAR sahifalarida aynan shunday qilindi: foydalanuvchi
 * haqiqiy rasm berdi (`public/tests-hero.webp`, `public/lessons-hero.webp`),
 * shu sabab ulardagi SVG variantlar olib tashlandi. Qolgan ikkitasi
 * (Kutubxona, Konstitutsiya) hamon shu yerdan chiziladi.
 */

const NAVY = "#16223a";
const NAVY_D = "#0b1322";
const GOLD = "#c9953a";
const GOLD_L = "#e0b060";
const GOLD_P = "#f2dfba";

/* ── Umumiy: oltin tarozi ── */
function Scales({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* poya va tagi */}
      <rect x="46" y="30" width="6" height="76" rx="3" fill={GOLD} />
      <path d="M28 112c0-8 9-12 21-12s21 4 21 12z" fill={GOLD} />
      <rect x="22" y="110" width="54" height="7" rx="3.5" fill={GOLD_L} />
      {/* ko'ndalang balka */}
      <rect x="8" y="27" width="82" height="5" rx="2.5" fill={GOLD} />
      <circle cx="49" cy="24" r="6" fill={GOLD_L} />
      {/* zanjirlar */}
      <path d="M14 32l-6 22M84 32l6 22" stroke={GOLD} strokeWidth="1.6" fill="none" />
      <path d="M14 32l6 22M84 32l-6 22" stroke={GOLD} strokeWidth="1.6" fill="none" />
      {/* tovoqchalar */}
      <path d="M2 54h24a12 12 0 01-24 0z" fill={GOLD_L} />
      <path d="M72 54h24a12 12 0 01-24 0z" fill={GOLD_L} />
    </g>
  );
}

/* ── Umumiy: to'q ko'k kitob (HUQUQ) ── */
function Book({ x = 0, y = 0, scale = 1, label = "HUQUQ" }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <rect x="0" y="0" width="76" height="100" rx="6" fill={NAVY_D} />
      <rect x="0" y="0" width="9" height="100" rx="4" fill={NAVY} />
      <rect x="16" y="12" width="46" height="3" rx="1.5" fill={GOLD} opacity="0.7" />
      <text
        x="39"
        y="34"
        textAnchor="middle"
        fill={GOLD_L}
        fontSize="12"
        fontWeight="700"
        fontFamily="Georgia, serif"
        letterSpacing="1"
      >
        {label}
      </text>
      {/* muqovadagi kichik tarozi belgisi */}
      <g transform="translate(24 44) scale(0.42)" opacity="0.95">
        <rect x="30" y="14" width="4" height="46" rx="2" fill={GOLD} />
        <rect x="6" y="12" width="52" height="3.5" rx="1.75" fill={GOLD} />
        <path d="M18 64c0-5 6-8 14-8s14 3 14 8z" fill={GOLD} />
        <path d="M0 34h20a10 10 0 01-20 0zM44 34h20a10 10 0 01-20 0z" fill={GOLD_L} />
      </g>
      <rect x="16" y="84" width="46" height="3" rx="1.5" fill={GOLD} opacity="0.7" />
    </g>
  );
}

/* ── Umumiy: bolg'acha ── */
function Gavel({ x = 0, y = 0, scale = 1 }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <g transform="rotate(-32 40 26)">
        <rect x="16" y="12" width="48" height="28" rx="8" fill="#6b3f1d" />
        <rect x="34" y="12" width="12" height="28" fill={GOLD} opacity="0.85" />
        <rect x="60" y="22" width="34" height="8" rx="4" fill="#7a4a24" />
      </g>
      <rect x="8" y="62" width="64" height="10" rx="5" fill="#6b3f1d" />
    </g>
  );
}

/* ═══════════ KUTUBXONA — pastki chapdagi boshoq ═══════════
   ⚠️ Avval bu yerda `LibraryBookArt` va `LibraryBuildingArt` bor edi
   (kitob va bino). Kutubxona hero'siga HAQIQIY illyustratsiya
   qo'yilgach (`public/library-hero.jpg` — namunadagi kitoblar,
   postament va ustun) ular keraksiz bo'lib qoldi va o'chirildi:
   ikkalasi bir vaqtda ko'rinsa, bitta hero'da ikki xil uslubdagi
   kitob tasviri paydo bo'lardi.

   Boshoq esa SVG bo'lib QOLDI. Sabab: namunadan uni toza qirqib
   olishning iloji yo'q — ustidan tavsif matni va ramka chizig'i
   o'tadi. Vektor variant esa istalgan o'lchamda toza va tekin. */
export function LibrarySprigArt() {
  /* Poya bo'ylab ikki tomonga qarab joylashgan barglar. Har biri
     bir xil shakl, faqat burchagi va o'lchami bosqichma-bosqich
     kichrayadi — tabiiy ko'rinish uchun qo'lda emas, hisob bilan. */
  const leaves = [];
  for (let i = 0; i < 9; i++) {
    const t = i / 8; // 0 → poya tubi, 1 → uchi
    const x = 26 + t * 108;
    const y = 150 - t * 116;
    const scale = 1 - t * 0.45;
    for (const side of [-1, 1]) {
      leaves.push(
        <ellipse
          key={`${i}-${side}`}
          cx="0"
          cy="0"
          rx={22 * scale}
          ry={9 * scale}
          fill={GOLD_P}
          opacity={0.85 - t * 0.25}
          transform={`translate(${x} ${y}) rotate(${-40 + side * 42}) translate(${20 * scale} 0)`}
        />,
      );
    }
  }
  return (
    <svg viewBox="0 0 175 175" fill="none" role="presentation" focusable="false">
      {leaves}
      {/* poya — barglardan keyin chiziladi, ular ustidan o'tsin */}
      <path
        d="M14 168C46 140 92 92 140 44"
        stroke={GOLD_L}
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />
    </svg>
  );
}

/* ═══════════ KONSTITUTSIYA — kitob (chap) va tarozi+bolg'acha (o'ng) ═══════════ */
export function ConstBookArt() {
  return (
    <svg viewBox="0 0 190 230" fill="none" role="presentation" focusable="false">
      {/* postament */}
      <ellipse cx="96" cy="208" rx="78" ry="16" fill={GOLD_P} opacity="0.55" />
      <ellipse cx="96" cy="200" rx="78" ry="16" fill="#f6f1e6" />
      <ellipse cx="96" cy="200" rx="78" ry="16" fill="none" stroke={GOLD} strokeWidth="1.3" />
      <g transform="translate(44 24) rotate(-6)">
        <rect x="8" y="8" width="104" height="164" rx="7" fill={NAVY} />
        <rect x="0" y="0" width="104" height="164" rx="7" fill={NAVY_D} />
        <rect x="0" y="0" width="10" height="164" rx="5" fill={NAVY} />
        {/* gerb doirasi */}
        <circle cx="55" cy="46" r="18" fill="none" stroke={GOLD} strokeWidth="1.6" />
        <circle cx="55" cy="46" r="11" fill={GOLD} opacity="0.35" />
        <text x="55" y="92" textAnchor="middle" fill={GOLD_L} fontSize="9"
              fontWeight="700" fontFamily="Georgia, serif">OʻZBEKISTON</text>
        <text x="55" y="106" textAnchor="middle" fill={GOLD_L} fontSize="9"
              fontWeight="700" fontFamily="Georgia, serif">RESPUBLIKASI</text>
        <text x="55" y="120" textAnchor="middle" fill={GOLD_L} fontSize="9"
              fontWeight="700" fontFamily="Georgia, serif">KONSTITUTSIYASI</text>
        <rect x="22" y="134" width="66" height="2.5" rx="1.25" fill={GOLD} opacity="0.65" />
      </g>
    </svg>
  );
}

export function ConstScalesArt() {
  return (
    <svg viewBox="0 0 230 230" fill="none" role="presentation" focusable="false">
      {/* taxlangan kitoblar */}
      <rect x="112" y="176" width="112" height="14" rx="4" fill="#c9a06a" />
      <rect x="120" y="190" width="98" height="13" rx="4" fill="#b08650" />
      <rect x="128" y="203" width="84" height="12" rx="4" fill="#96703f" />
      <Scales x={18} y={54} scale={1.28} />
      <Gavel x={128} y={112} scale={0.95} />
    </svg>
  );
}
