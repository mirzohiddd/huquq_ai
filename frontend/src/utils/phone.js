/**
 * Telefon raqamini yozish paytida chiroyli ko'rinishga keltiradi:
 * "901234567" → "+998 90 123 45 67". Faqat O'zbekiston raqamiga
 * shablon qo'llanadi; boshqa davlat kodi yozilsa, raqam o'zgartirilmaydi.
 * Haqiqiy tekshiruv va normallashtirish — backend `utils/phone.js`.
 */
export function formatPhoneInput(raw) {
  const v = String(raw || "");
  let d = v.replace(/\D/g, "");
  if (!d) return v.trim().startsWith("+") ? "+" : "";
  if (v.trim().startsWith("+")) {
    // "+9", "+99" — kod hali yozilmoqda
    if ("998".startsWith(d)) return `+${d}`;
    // Chet el raqami ("+7...") — foydalanuvchi yozganicha qoldiriladi
    if (!d.startsWith("998")) return `+${d.slice(0, 15)}`;
  } else if (!d.startsWith("998")) {
    d = `998${d}`;
  }
  d = d.slice(0, 12);
  const p = [d.slice(0, 3), d.slice(3, 5), d.slice(5, 8), d.slice(8, 10), d.slice(10, 12)];
  return `+${p.filter(Boolean).join(" ")}`;
}

/** To'liq O'zbekiston raqamimi (yoki 10–15 xonali xalqaro)? */
export function isPhoneComplete(v) {
  const d = String(v || "").replace(/\D/g, "");
  return d.startsWith("998") ? d.length === 12 : d.length >= 10 && d.length <= 15;
}
