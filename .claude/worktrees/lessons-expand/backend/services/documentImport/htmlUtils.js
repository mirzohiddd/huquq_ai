"use strict";
/**
 * Hujjatdan chiqarilgan xom matnni HTML ichiga xavfsiz joylashtirish
 * uchun escape qiladi. Import qilingan kontent oxir-oqibat barcha
 * foydalanuvchilarga ko'rsatiladigan HTML sifatida saqlanadi, shuning
 * uchun PDF ichidagi har qanday matn (masalan tasodifan `<script>`
 * kabi belgilar bo'lsa) hech qachon xom holda in'ektsiya qilinmasligi
 * kerak — stored XSS oldini olish uchun MUHIM.
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

module.exports = { escapeHtml };
