/**
 * Server QAYERDA ishlayotganini aniqlaydi — lokal kompyuterdami yoki
 * hostingda (Railway / Render).
 *
 * NIMA UCHUN KERAK: `DEV_OTP_TO_CONSOLE` kabi FAQAT lokal ishlab
 * chiqarish uchun mo'ljallangan bayroqlar hostingda ATAYIN e'tiborsiz
 * qoldirilishi kerak. U yerda "konsol" — deploy loglari, foydalanuvchi
 * ularni ko'ra olmaydi: odam "kod yuborildi" degan xabarni oladi-yu,
 * kodni hech qachon ololmay boshi berk ko'chaga kirib qoladi.
 *
 * AVVAL bu tekshiruv ikki joyda `process.env.RENDER` shaklida qattiq
 * yozilgan edi (`server.js`, `routes/auth.js`). Railway'ga ko'chganda
 * `RENDER` o'zgaruvchisi umuman yo'q bo'lgani uchun bayroq JIM YOQILIB
 * qolardi — aynan o'sha boshi berk ko'cha qaytarilardi. Shuning uchun
 * tekshiruv shu yagona joyga chiqarildi: yangi platformaga o'tilsa
 * faqat shu ro'yxatga bitta qator qo'shiladi.
 *
 * Platformalarning O'ZI qo'yadigan o'zgaruvchilar ishlatiladi
 * (`NODE_ENV=production` EMAS — u lokalda ham qo'yilishi mumkin,
 * u holda lokal test yo'llari kutilmaganda o'chib qolardi).
 */
const HOSTING_ENV_VARS = [
  "RAILWAY_ENVIRONMENT", // Railway (joriy hosting)
  "RAILWAY_PROJECT_ID", // Railway — zaxira belgi
  "RENDER", // Render (eski hosting, tarixiy moslik uchun)
  "FLY_APP_NAME", // Fly.io
  "DYNO", // Heroku
];

/** @returns {boolean} server hostingda ishlayaptimi */
function isHosted() {
  return HOSTING_ENV_VARS.some((k) => Boolean(process.env[k]));
}

/**
 * Hosting nomi — log xabarlarida aniq ko'rsatish uchun
 * ("Render dashboard" o'rniga "Railway dashboard" deyish).
 * @returns {string}
 */
function hostingName() {
  if (process.env.RAILWAY_ENVIRONMENT || process.env.RAILWAY_PROJECT_ID)
    return "Railway";
  if (process.env.RENDER) return "Render";
  if (process.env.FLY_APP_NAME) return "Fly.io";
  if (process.env.DYNO) return "Heroku";
  return "hosting";
}

/**
 * Railway servisning O'Z ommaviy domeni (`https://...` bilan).
 * Railway uni har deploy'da `RAILWAY_PUBLIC_DOMAIN` sifatida qo'yadi —
 * shu sababli domen o'zgarsa CORS ro'yxatiga kodga tegmasdan tushadi.
 * @returns {string|null}
 */
function selfPublicUrl() {
  const d = process.env.RAILWAY_PUBLIC_DOMAIN || process.env.RENDER_EXTERNAL_HOSTNAME;
  if (!d) return null;
  return /^https?:\/\//i.test(d) ? d.replace(/\/+$/, "") : `https://${d}`;
}

module.exports = { isHosted, hostingName, selfPublicUrl };
