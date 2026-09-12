"use strict";
/**
 * Ochiq qonun sahifalari uchun HTTP sarlavhalari.
 *
 * Alohida faylga ajratilgan: `routes/publicSeo.js` 200 qatordan
 * oshib ketardi (CLAUDE.md qoidasi), va sarlavhalar mantiqi
 * marshrutlardan mustaqil.
 */

/**
 * ⚠️ SHU SAHIFALAR UCHUN ALOHIDA CSP.
 *
 * Umumiy siyosat (`server.js`, helmet) `style-src 'self' 'unsafe-inline'`
 * bo'lgani uchun Google Fonts USLUB FAYLI bloklanardi va sahifa brend
 * shrifti (Poppins) o'rniga tizim shriftida chizilardi — javob
 * sarlavhalarida tekshirilgan. Bu yerda siyosat FAQAT ochiq sahifalar
 * uchun qayta yoziladi; umumiy siyosatga TEGILMAYDI (u API'ni himoya
 * qiladi va o'zgartirilsa butun backendga ta'sir qilardi).
 *
 * Bu sahifalarda JavaScript umuman yo'q — `script-src 'none'` eng
 * qat'iy va to'g'ri qiymat. JSON-LD bloki ijro etilmaydi (u ma'lumot
 * bloki), shuning uchun undan ta'sirlanmaydi.
 */
function publicPageCsp(req, res, next) {
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'none'",
      "script-src 'none'",
      "style-src 'unsafe-inline' https://fonts.googleapis.com",
      "font-src https://fonts.gstatic.com",
      "img-src 'self' https: data:",
      "base-uri 'self'",
      "form-action 'none'",
      "frame-ancestors 'none'",
    ].join("; "),
  );
  next();
}

/**
 * Javoblar uzoq keshlanadi: qonun matni kuniga bir marta yangilanadi.
 * `s-maxage` — CDN uchun, `stale-while-revalidate` — yangilanish
 * paytida ham eski nusxa darhol berilishi uchun. Bu ayniqsa muhim:
 * backend Render bepul tarifida uyquga ketadi va sovuq start sekin
 * bo'lishi mumkin; keshlangan nusxa robotni kutdirmaydi.
 */
function cacheHeaders(res, seconds = 21600) {
  res.set(
    "Cache-Control",
    `public, max-age=600, s-maxage=${seconds}, stale-while-revalidate=86400`,
  );
}

module.exports = { publicPageCsp, cacheHeaders };
