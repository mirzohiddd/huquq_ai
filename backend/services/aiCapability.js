"use strict";
/**
 * AI IMKONIYATLARI — "fayl yuborib ber" turidagi so'rovlar
 * ═══════════════════════════════════════════════════════════════
 *
 * ⚠️ HAQIQIY XATO (mijozga ko'rsatilganda yuzaga keldi):
 * "Umumta'lim maktablari uchun Davlat va huquq asoslari fanidan
 *  dasturlarni yuklab ber menga"
 * degan so'rovga tizim SHOSHILINCH HUQUQIY MASLAHAT qolipida
 * ("Hozir nima qiling / Huquqlaringiz / Murojaat") javob berardi.
 * Uch sabab birlashgan edi:
 *   1) "huquq" so'zi savolni huquqiy deb belgilaydi (to'g'ri),
 *   2) "menga" olmoshi uni "foydalanuvchi o'z holatini aytdi" deb
 *      ko'rsatardi (noto'g'ri — `needsAdvice` da tuzatildi),
 *   3) tizimda "men fayl yubora olmayman" degan tushuncha UMUMAN
 *      yo'q edi, shuning uchun model mavjud bo'lmagan fayl nomi va
 *      havolalarni o'ylab topardi (havolalar esa `validateAnswer` da
 *      o'chirilib, javob yanada mantiqsiz ko'rinardi).
 *
 * Endi bunday so'rov LLM'ga umuman yuborilmaydi — aniq, halol va
 * foydali javob qaytariladi. Bu ATAYLAB deterministik: mijozga
 * ko'rsatiladigan javob har safar bir xil va to'g'ri bo'lishi kerak.
 *
 * ⚠️ NIMA USHLANMAYDI (ataylab):
 *   • "ariza/shikoyat/da'vo/shartnoma yozib ber" — AI buni MATN
 *     sifatida haqiqatan tayyorlaydi (`docSystemPrompt`), shuning
 *     uchun bu naqshga tushmaydi;
 *   • "Mehnat kodeksining 106-moddasini ko'rsat" — modda matni
 *     bazada bor va RAG orqali beriladi, "fayl" so'ralmagan.
 */

/* Fayl/material predmeti — AI matn bilan bera OLMAYDIGAN narsalar.
   ⚠️ Kirill uchun ALOHIDA naqsh: JS'da `\b` faqat ASCII harflarni
   biladi, shuning uchun `\bскачай` hech qachon mos kelmaydi (sinovda
   aniqlandi — ruscha so'rovlar umuman ushlanmasdi). */
const FILE_OBJECT =
  /\b(fayl|fayl(ni|ini)|pdf|word|docx?|excel|xlsx?|pptx?|prezentatsiya|slayd|arxiv|zip|rar|kitob(ni|ini)?|darslik(ni|ini)?|qo['`ʻ’]?llanma|dastur(lar)?(ni|ini|i)?|o['`ʻ’]?quv\s*dastur\w*|dars\s*ishlanma\w*|ish\s*reja\w*|kalendar\s*reja\w*|dts|davlat\s*ta['`ʻ’]?lim\s*standart\w*|konspekt(ni|ini)?|video(ni|sini)?|audio|havola(ni|sini)?|link(ni|ini)?|ssilka)\b/i;
const FILE_OBJECT_RU =
  /(файл|книг|учебник|учебное\s*пособ|программ|ссылк|презентац|конспект|методичк|видео)/i;

/* Yuklab berish / jo'natish fe'li. */
const FETCH_VERB =
  /\b(yuklab|yukla|yuklas\w*|yuklan\w*|yubor\w*|jo['`ʻ’]?nat\w*|tashlab\s*ber\w*|topib\s*ber\w*|olib\s*ber\w*|ber\w*|kerak)\b/i;
const FETCH_VERB_RU =
  /(скача|загруз|отправ|скин|пришл|дай|дать|нужн|поделис)/i;

/**
 * Foydalanuvchi FAYL/MATERIAL yuborishni so'rayaptimi?
 * Ikkala shart ham bo'lishi kerak — predmet ham, fe'l ham.
 * Faqat bittasi bo'lsa ("kitobda nima deyilgan?") ushlanmaydi.
 */
function isFileRequest(text = "") {
  const low = String(text).toLowerCase();
  if (FILE_OBJECT.test(low) && FETCH_VERB.test(low)) return true;
  return FILE_OBJECT_RU.test(low) && FETCH_VERB_RU.test(low);
}

/* O'quv materiali (maktab dasturi, DTS, dars ishlanma) so'ralganmi?
   Bunday holatda javobga rasmiy manba haqida qo'shimcha izoh kiradi. */
const EDU_MATERIAL =
  /(maktab\w*|umumta['`ʻ’]?lim|sinf|o['`ʻ’]?quvchi\w*|o['`ʻ’]?qituvchi\w*|fan\w*\s*dastur\w*|o['`ʻ’]?quv\s*dastur\w*|dars\s*ishlanma\w*|dts|ta['`ʻ’]?lim\s*standart\w*|davlat\s*va\s*huquq\s*asoslari|школ\w*|класс\w*|учител\w*|учебн\w*|основ\w*\s*государств\w*)/i;

/**
 * Halol va foydali javob. Qat'iy rad emas — nima qila OLISHI aytiladi.
 * Havola (URL) ATAYLAB yozilmaydi: `validateAnswer` ularni baribir
 * o'chiradi va loyiha qoidasi bo'yicha javobda havola berilmaydi.
 */
function fileRequestReply(lang = "uz", text = "") {
  const isEdu = EDU_MATERIAL.test(String(text).toLowerCase());

  const uz = [
    "Men fayl biriktira olmayman va tashqi saytlardan hujjat yuklab berolmayman — javoblarim faqat matn ko'rinishida bo'ladi.",
    isEdu
      ? "Umumta'lim maktablari uchun fan dasturlari, o'quv rejalari va davlat ta'lim standartlari ta'lim sohasidagi vakolatli organ — Maktabgacha va maktab ta'limi vazirligi hamda Respublika ta'lim markazi tomonidan tasdiqlanadi va rasmiy tarzda e'lon qilinadi. Ularning tasdiqlangan nusxasini o'sha manbadan yoki maktab ma'muriyatidan olish mumkin."
      : "Rasmiy hujjatning tasdiqlangan nusxasini uni chiqargan davlat organidan olish kerak.",
    "Men esa shu yerning o'zida quyidagilarda yordam bera olaman:",
    isEdu
      ? "• \"Davlat va huquq asoslari\" fanining istalgan mavzusini tushuntirib beraman (Konstitutsiya, inson huquqlari va burchlari, huquqbuzarlik va javobgarlik, davlat organlari tizimi va boshqalar);\n• Dars uchun mavzular rejasi, savol-javoblar va test topshiriqlarini matn ko'rinishida tayyorlab beraman;\n• Har bir mavzuni O'zbekiston qonunchiligining amaldagi normalari bilan asoslab beraman."
      : "• Kerakli qonun moddasining mazmunini tushuntirib beraman;\n• Ariza, shikoyat yoki da'vo arizasi matnini tayyorlab beraman;\n• Masalani bosqichma-bosqich tushuntirib, qayerga murojaat qilish kerakligini aytaman.",
    "Saytning o'zida ham tayyor materiallar bor: Darslar bo'limi, Konstitutsiya sahifasi va Qonunlar kutubxonasi (kodekslarning to'liq matni bilan).",
    isEdu
      ? "Qaysi mavzudan boshlaymiz?"
      : "Aynan nima kerakligini yozing — matn ko'rinishida tayyorlab beraman.",
  ].join("\n\n");

  const ru = [
    "Я не могу прикреплять файлы и загружать документы со сторонних сайтов — мои ответы бывают только в виде текста.",
    isEdu
      ? "Учебные программы, учебные планы и государственные образовательные стандарты для общеобразовательных школ утверждаются и официально публикуются уполномоченным органом — Министерством дошкольного и школьного образования и Республиканским центром образования. Утверждённую копию можно получить оттуда или у администрации школы."
      : "Заверенную копию официального документа следует получить в органе, который его издал.",
    "Здесь же я могу помочь в следующем:",
    isEdu
      ? "• Объясню любую тему предмета «Основы государства и права» (Конституция, права и обязанности человека, правонарушение и ответственность, система государственных органов и др.);\n• Подготовлю в виде текста план тем урока, вопросы-ответы и тестовые задания;\n• Каждую тему обосную действующими нормами законодательства Узбекистана."
      : "• Объясню содержание нужной статьи закона;\n• Подготовлю текст заявления, жалобы или искового заявления;\n• Разберу ситуацию по шагам и подскажу, куда обращаться.",
    "На самом сайте тоже есть готовые материалы: раздел «Уроки», страница «Конституция» и Библиотека законов (с полными текстами кодексов).",
    isEdu ? "С какой темы начнём?" : "Напишите, что именно нужно — подготовлю в виде текста.",
  ].join("\n\n");

  return lang === "ru" ? ru : uz;
}

/* System promptga qo'shiladigan imkoniyat qoidasi — yuqoridagi
   deterministik javob ushlamagan chegaraviy holatlar uchun zaxira. */
const CAPABILITY_RULE = `SENING IMKONIYATLARING: sen faqat MATN bilan javob berasan. Fayl (PDF, Word, rasm, video) biriktira olmaysan, tashqi saytdan hujjat yuklab berolmaysan va internet havolasi (link) bera olmaysan. Shunday narsa so'ralsa — buni ochiq va xushmuomalalik bilan ayt, o'ylab topilgan havola, fayl nomi, telefon raqami yoki mavjud bo'lmagan hujjat nomini HECH QACHON yozma. Buning o'rniga matn ko'rinishida nima qila olishingni aniq taklif qil.`;

module.exports = { isFileRequest, fileRequestReply, CAPABILITY_RULE };
