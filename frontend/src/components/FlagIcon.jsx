import React from "react";

/* Til tanlagich bayroqlari — emoji EMAS, SVG.
   Bayroq emojilari Windows'da umuman chizilmaydi ("UZ"/"RU" harflari
   bo'lib ko'rinadi), SVG esa hamma qurilmada bir xil. Doira ichiga
   joylashtirilgani uchun nisbat kvadrat; o'lchamni o'rab turgan
   element (.triggerFlag / .optionFlag) belgilaydi. */
export default function FlagIcon({ code }) {
  const common = {
    width: "100%",
    height: "100%",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
    focusable: "false",
    style: { display: "block", borderRadius: "50%" },
  };

  if (code === "ru") {
    return (
      <svg {...common}>
        <rect width="24" height="8" fill="#ffffff" />
        <rect y="8" width="24" height="8" fill="#0039a6" />
        <rect y="16" width="24" height="8" fill="#d52b1e" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect width="24" height="24" fill="#ffffff" />
      <rect width="24" height="7.6" fill="#0099b5" />
      <rect y="16.4" width="24" height="7.6" fill="#1eb53a" />
      <rect y="7.6" width="24" height="0.8" fill="#ce1126" />
      <rect y="15.6" width="24" height="0.8" fill="#ce1126" />
      <circle cx="7.4" cy="3.8" r="2.4" fill="#ffffff" />
      <circle cx="8.3" cy="3.8" r="2.1" fill="#0099b5" />
      <circle cx="11.6" cy="2.6" r="0.45" fill="#ffffff" />
      <circle cx="13.2" cy="2.6" r="0.45" fill="#ffffff" />
      <circle cx="11.6" cy="4.2" r="0.45" fill="#ffffff" />
      <circle cx="13.2" cy="4.2" r="0.45" fill="#ffffff" />
      <circle cx="14.8" cy="4.2" r="0.45" fill="#ffffff" />
    </svg>
  );
}
