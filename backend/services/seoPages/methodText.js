"use strict";
/**
 * METODOLOGIYA SAHIFASINING MATNI (uz + ru).
 *
 * ⚠️ NIMA UCHUN BU SAHIFA BOR: huquq — YMYL ("Your Money or Your Life")
 * sohasi. Google va AI qidiruv tizimlari bunday mavzuda manbani baholashda
 * E-E-A-T signallarini talab qiladi: ma'lumot QAYERDAN olinadi, QANDAY
 * tekshiriladi, QANCHA vaqtda yangilanadi, KIM javobgar va QANDAY
 * cheklovlari bor. Bu signallar bo'lmasa sayt "noma'lum manba" sifatida
 * baholanadi va iqtibos olmaydi.
 *
 * ⚠️ MATNDA HECH QANDAY MODDA RAQAMI, MUDDAT YOKI SUMMA YO'Q — bu sahifa
 * qonun haqida emas, ISH USULI haqida. Raqamlar (kodekslar soni, moddalar
 * soni) sahifa chizilganda BAZADAN olinadi, shu sabab ular hech qachon
 * eskirmaydi.
 */

/** Har bir bo'lim: {h: sarlavha, p: [xatboshi, ...]} */
const METHOD = {
  uz: {
    intro:
      "Huquq AI — huquqiy ma'lumot platformasi. Quyida javoblar qanday " +
      "tayyorlanishi, manba qayerdan olinishi va qanday cheklovlar " +
      "borligi ochiq yozilgan. Bu sahifa foydalanuvchiga ham, javobimizni " +
      "iqtibos keltiradigan qidiruv va AI tizimlariga ham mo'ljallangan.",
    sections: [
      {
        h: "1. Manba — faqat rasmiy qonun matni",
        p: [
          "Platformadagi barcha qonun matni O'zbekiston Respublikasi qonun " +
            "hujjatlari milliy ma'lumotlar bazasi — lex.uz dan olinadi. " +
            "Boshqa hech qanday ikkilamchi manba, sharh yoki tarjima " +
            "to'plami ishlatilmaydi.",
          "Rus tilidagi modda matni mashina tarjimasi EMAS: lex.uz o'zi " +
            "chop etadigan rasmiy rus nashridan alohida yuklab olinadi. " +
            "Shu sabab ruscha o'qiyotgan foydalanuvchi ham huquqiy jihatdan " +
            "aniq matnni ko'radi.",
        ],
      },
      {
        h: "2. Yangilanish tartibi",
        p: [
          "Har bir hujjat har 24 soatda avtomatik tekshiriladi. Modda matni " +
            "o'zgargani mazmun bo'yicha aniqlanadi — o'zgarmagan moddalar " +
            "qayta ishlanmaydi, o'zgarganlari esa darhol yangilanadi.",
          "Qonun matni platformaning hech bir joyiga NUSXALANMAYDI. Dars, " +
            "savol-javob va AI javobidagi har bir iqtibos bazadan real " +
            "vaqtda olinadi. Ya'ni lex.uz da tahrir o'zgarsa, sayt ham " +
            "o'z-o'zidan yangilanadi va eskirgan raqam qolib ketmaydi.",
        ],
      },
      {
        h: "3. AI javobi qanday tayyorlanadi",
        p: [
          "Savol tahlil qilinadi va huquq sohasi aniqlanadi. So'ng savol " +
            "rasmiy huquqiy atamalar bilan kengaytiriladi: foydalanuvchi " +
            "kundalik tilda yozadi, qonun esa rasmiy atama ishlatadi.",
          "Kengaytirilgan so'rov bo'yicha qonun bazasidan eng mos moddalar " +
            "qidirib topiladi (RAG — Retrieval-Augmented Generation). AI " +
            "modeliga manba sifatida FAQAT shu topilgan matn beriladi.",
          "Model uchun qat'iy qoida amal qiladi: muddat, foiz, summa yoki " +
            "jazo o'lchami topilgan matnda bo'lmasa, uni taxmin qilish " +
            "TAQIQLANADI — javobda tekshirish tavsiya etiladi. Umumiy AI " +
            "chatbotlaridagi asosiy xato — modda raqamini o'ylab topish — " +
            "aynan shu qoida bilan oldi olinadi.",
        ],
      },
      {
        h: "4. Nima tekshiriladi",
        p: [
          "Darslar va savol-javob sahifalaridagi har bir qonun havolasi " +
            "bazaga solishtirib tekshiriladi: modda mavjudmi va uning " +
            "sarlavhasi mavzuga mos keladimi. Mavjud, lekin noto'g'ri " +
            "moddaga havola sahifada jimgina noto'g'ri iqtibos ko'rsatardi " +
            "— shuning uchun faqat \"modda bor\" tekshiruvi yetarli emas.",
          "Hujjat manzillari ham taxmin qilinmaydi: har bir lex.uz hujjati " +
            "sahifa ochilishi va SARLAVHASI kutilganiga mos kelishi bo'yicha " +
            "alohida tasdiqlanadi.",
        ],
      },
      {
        h: "5. Cheklovlar (ochiq aytilgan)",
        p: [
          "Huquq AI advokat emas va advokat xizmatini almashtirmaydi. U " +
            "dastlabki yo'naltirish va umumiy huquqiy ma'lumot beradi. Sud " +
            "jarayoni, shartnoma imzolash yoki jiddiy moliyaviy oqibatga ega " +
            "qarorlar uchun malakali mutaxassisga murojaat qiling.",
          "Javoblar faqat O'zbekiston Respublikasi qonunchiligiga tegishli; " +
            "boshqa davlatlar huquqi qamrab olinmagan.",
          "Qidiruv 100% aniq emas: ba'zan eng mos emas, yaqin mavzudagi " +
            "modda topilishi mumkin. Shuning uchun har bir javobda qonun " +
            "moddasining o'ziga havola beriladi — foydalanuvchi manbani " +
            "o'zi o'qib tekshirishi mumkin.",
        ],
      },
      {
        h: "6. Xato topsangiz",
        p: [
          "Noto'g'ri iqtibos yoki eskirgan matn topsangiz, bizga xabar " +
            "bering — tekshirib tuzatamiz. Aloqa: toxirovi82@gmail.com " +
            "yoki Telegram: @mening_huquqlarim_bot",
        ],
      },
    ],
  },
  ru: {
    intro:
      "Huquq AI — платформа правовой информации. Ниже открыто описано, " +
      "как готовятся ответы, откуда берётся источник и какие есть " +
      "ограничения. Страница предназначена как для пользователей, так и " +
      "для поисковых и AI-систем, которые цитируют наши ответы.",
    sections: [
      {
        h: "1. Источник — только официальный текст закона",
        p: [
          "Весь текст законов берётся из национальной базы данных " +
            "законодательства Республики Узбекистан — lex.uz. Никакие " +
            "вторичные источники, комментарии или сборники переводов не " +
            "используются.",
          "Русский текст статей — не машинный перевод: он загружается " +
            "отдельно из официальной русской редакции lex.uz. Поэтому " +
            "пользователь, читающий на русском, видит юридически точный текст.",
        ],
      },
      {
        h: "2. Порядок обновления",
        p: [
          "Каждый документ автоматически проверяется каждые 24 часа. " +
            "Изменение текста определяется по содержанию — неизменённые " +
            "статьи не обрабатываются повторно, изменённые обновляются сразу.",
          "Текст закона нигде на платформе НЕ копируется. Каждая цитата в " +
            "уроке, вопросе-ответе и ответе AI берётся из базы в реальном " +
            "времени. Если редакция на lex.uz изменится, сайт обновится сам " +
            "и устаревшая цифра не останется.",
        ],
      },
      {
        h: "3. Как готовится ответ AI",
        p: [
          "Вопрос анализируется, определяется отрасль права. Затем вопрос " +
            "расширяется официальными юридическими терминами: пользователь " +
            "пишет обычным языком, а закон использует формальный термин.",
          "По расширенному запросу из базы находятся наиболее подходящие " +
            "статьи (RAG — Retrieval-Augmented Generation). Модели в " +
            "качестве источника передаётся ТОЛЬКО найденный текст.",
          "Для модели действует строгое правило: если срок, процент, сумма " +
            "или размер наказания отсутствуют в найденном тексте, " +
            "догадываться ЗАПРЕЩЕНО — в ответе рекомендуется проверить. " +
            "Именно так предотвращается главная ошибка обычных AI-чатботов " +
            "— выдумывание номера статьи.",
        ],
      },
      {
        h: "4. Что проверяется",
        p: [
          "Каждая ссылка на закон в уроках и вопросах-ответах сверяется с " +
            "базой: существует ли статья и соответствует ли её заголовок " +
            "теме. Ссылка на существующую, но неверную статью тихо давала бы " +
            "неправильную цитату — поэтому проверки «статья есть» недостаточно.",
          "Адреса документов также не угадываются: каждый документ lex.uz " +
            "подтверждается отдельно — открывается ли страница и совпадает " +
            "ли ЗАГОЛОВОК с ожидаемым.",
        ],
      },
      {
        h: "5. Ограничения (сказано открыто)",
        p: [
          "Huquq AI не является адвокатом и не заменяет услуги адвоката. Он " +
            "даёт первичную ориентацию и общую правовую информацию. Для " +
            "судебного процесса, подписания договора или решений с " +
            "серьёзными финансовыми последствиями обратитесь к " +
            "квалифицированному специалисту.",
          "Ответы относятся только к законодательству Республики Узбекистан; " +
            "право других государств не охвачено.",
          "Поиск не даёт стопроцентной точности: иногда может быть найдена " +
            "близкая по теме, а не самая подходящая статья. Поэтому к каждому " +
            "ответу даётся ссылка на саму статью — пользователь может " +
            "проверить источник сам.",
        ],
      },
      {
        h: "6. Если вы нашли ошибку",
        p: [
          "Если вы обнаружили неверную цитату или устаревший текст, " +
            "сообщите нам — мы проверим и исправим. Связь: " +
            "toxirovi82@gmail.com или Telegram: @mening_huquqlarim_bot",
        ],
      },
    ],
  },
};

module.exports = { METHOD };
