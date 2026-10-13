/* Serverdan keladigan matnlardagi emojilarni olib tashlaydi.

   Nima uchun FRONTENDDA: dars matnlari, AI javoblari va ogohlantirishlar
   bazada emoji bilan saqlangan (masalan "⚠️ Bu moddadan muhim natija
   chiqadi"). Xuddi shu matnlar Telegram botga ham ketadi — u yerda emoji
   yagona "ikonka", shuning uchun manbaning o'zi o'zgartirilmadi. Saytda
   esa emoji o'rniga lucide ikonkalari ishlatiladi.

   ATAYLAB tegilmaydi: © ® ™ (huquqiy belgilar), strelkalar (→ ←),
   nuqtalar (•) va oddiy tinish belgilari — ular emoji emas, tipografiya. */

const KEEP = new Set(["©", "®", "™", "‼", "⁉", "↔", "↕"]);

const EMOJI_RE =
  /(\p{Extended_Pictographic}(?:\u{FE0F}|\u{200D}\p{Extended_Pictographic}\u{FE0F}?)*|[\u{1F1E6}-\u{1F1FF}]{2}|[0-9#*]\u{FE0F}?\u{20E3})[ \u{A0}]?/gu;

export function stripEmoji(text) {
  if (typeof text !== "string" || !text) return text;
  return text.replace(EMOJI_RE, (m) => (KEEP.has(m.trim()) ? m : ""));
}

/* JSON javobning barcha satr qiymatlarini chuqur tozalaydi. Massiv va
   obyektlar yangidan yaratiladi; boshqa turdagi qiymatlar o'zgarmaydi. */
export function stripEmojiDeep(value) {
  if (typeof value === "string") return stripEmoji(value);
  if (Array.isArray(value)) return value.map(stripEmojiDeep);
  if (value && typeof value === "object" && value.constructor === Object) {
    const out = {};
    for (const k of Object.keys(value)) out[k] = stripEmojiDeep(value[k]);
    return out;
  }
  return value;
}
