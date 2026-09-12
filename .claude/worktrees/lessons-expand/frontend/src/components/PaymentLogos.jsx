import React from "react";

/**
 * Click, Payme, Uzum — rasmiy brend rangida stilizatsiya qilingan
 * wordmark (SVG). Haqiqiy logotip fayllari hali loyihaga qo'shilmagan,
 * shuning uchun har bir kompaniyaning brend rangi + shrift uslubida
 * matn-belgi ishlatiladi (oddiy "Click"/"Payme" matniga qaraganda
 * ancha "logo"ga o'xshash ko'rinish beradi).
 */
export function ClickLogo(props) {
  return (
    <svg viewBox="0 0 90 24" width="72" height="20" {...props}>
      <text
        x="0"
        y="18"
        fontFamily="Arial, sans-serif"
        fontSize="19"
        fontWeight="800"
        fontStyle="italic"
        fill="#0091E2"
      >
        Click
      </text>
    </svg>
  );
}

export function PaymeLogo(props) {
  return (
    <svg viewBox="0 0 100 24" width="78" height="20" {...props}>
      <text
        x="0"
        y="18"
        fontFamily="Arial, sans-serif"
        fontSize="19"
        fontWeight="700"
        fill="#00CDBA"
      >
        Payme
      </text>
    </svg>
  );
}

export function UzumLogo(props) {
  return (
    <svg viewBox="0 0 90 24" width="72" height="20" {...props}>
      <text
        x="0"
        y="18"
        fontFamily="Arial, sans-serif"
        fontSize="19"
        fontWeight="800"
        fill="#7000FF"
      >
        Uzum
      </text>
    </svg>
  );
}

export const PAYMENT_PROVIDERS = [
  { id: "click", Logo: ClickLogo, bg: "#eaf6fd" },
  { id: "payme", Logo: PaymeLogo, bg: "#e6fbf9" },
  { id: "uzum", Logo: UzumLogo, bg: "#f3ebff" },
];
