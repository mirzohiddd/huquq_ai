"use strict";
/** SOLIQ MODULI — 4-DARS: HISOB VA HISOBOT. SK 69–84, 126–134. */

const LESSON = {
  key: "soliq-hisoboti",
  category: "tax",
  level: "mid",
  order: 9040,
  title: "Hisobga olish va soliq hisoboti",
  desc:
    "Soliqning elementlari, soliq bazasi va stavka, imtiyozlar, " +
    "hisob siyosati, hisob hujjatlariga talablar, soliq hisobotini " +
    "taqdim etish va hisobga qo'yish tartibi.",
  objectives: [
    "Soliqning beshta elementini bilasiz",
    "Soliq bazasi qanday aniqlanishini bilasiz",
    "Soliq imtiyozidan foydalanish tartibini bilasiz",
    "Hisob hujjatlariga qo'yiladigan talablarni bilasiz",
    "Hisobotni tuzatish imkonini bilasiz",
    "Hisobga qo'yish tartibini bilasiz",
  ],
  practicalSteps: [
    "Hisob siyosatini yozma rasmiylashtiring va uni izchil qo'llang",
    "Har bir xarajat uchun birlamchi hujjatni saqlang",
    "Xatoni o'zingiz topsangiz aniqlangan hisobotni darhol topshiring",
    "Imtiyozdan foydalanish shartlarini hujjat bilan tasdiqlang",
    "Hisobga qo'yish ma'lumotlarini yangilab boring",
  ],
  sections: [
    {
      heading: "Soliqning elementlari",
      text:
        "Har bir soliq BESHTA ELEMENT orqali " +
        "belgilanadi va ularsiz soliq belgilanmagan " +
        "hisoblanadi.\n\n" +
        "(1) SOLIQ SOLISH OBYEKTI — nima uchun soliq " +
        "to'lanadi (daromad, mol-mulk, aylanma, " +
        "realizatsiya).\n\n" +
        "(2) SOLIQ BAZASI — obyektning miqdoriy " +
        "ifodasi, ya'ni soliq hisoblanadigan " +
        "summa.\n\n" +
        "(3) SOLIQ STAVKASI — baza birligiga " +
        "to'g'ri keladigan soliq miqdori (foiz " +
        "yoki qat'iy summa).\n\n" +
        "(4) SOLIQ DAVRI — soliq baza " +
        "hisoblanadigan vaqt oralig'i.\n\n" +
        "(5) HISOBLAB CHIQARISH VA TO'LASH " +
        "TARTIBI hamda muddatlari.\n\n" +
        "⚠️ AMALIY XULOSA: soliq talabnomasini " +
        "tekshirayotganda aynan shu beshta " +
        "elementni ko'rib chiqing.\n\n" +
        "Eng ko'p xato SOLIQ BAZASINI " +
        "aniqlashda bo'ladi: xarajatlar " +
        "hisobga olinmagan, imtiyoz " +
        "qo'llanilmagan yoki daromad noto'g'ri " +
        "hisoblangan bo'lishi mumkin.\n\n" +
        "SOLIQ IMTIYOZLARI — ayrim toifadagi " +
        "soliq to'lovchilarga beriladigan " +
        "afzalliklar: soliqdan ozod qilish, " +
        "stavkani kamaytirish, bazani " +
        "kamaytirish.\n\n" +
        "⚠️ IMTIYOZ AVTOMATIK QO'LLANMASLIGI " +
        "MUMKIN: ko'p hollarda undan " +
        "foydalanish uchun shartlarni " +
        "bajarish va buni hujjat bilan " +
        "tasdiqlash kerak.\n\n" +
        "Shuning uchun faoliyatingizga " +
        "tegishli imtiyozlar ro'yxatini " +
        "aniqlab chiqing — ko'p tadbirkorlar " +
        "o'zi haqli imtiyozdan xabarsiz " +
        "qoladi.",
      example:
        "Soliq bazasi xarajatlar hisobga " +
        "olinmasdan hisoblandi — bu e'tiroz " +
        "asosi bo'ladi.",
      keyPoints: [
        "Soliq beshta element orqali belgilanadi",
        "Baza — soliq hisoblanadigan summa",
        "Eng ko'p xato baza hisobida bo'ladi",
        "Imtiyozdan foydalanish shartlarini bajaring",
      ],
      warning:
        "Imtiyozni hujjat bilan tasdiqlamaslik uni " +
        "yo'qotishga olib keladi.",
      lawRefs: [
        { code: "SK", article: "69" },
        { code: "SK", article: "70" },
        { code: "SK", article: "71" },
        { code: "SK", article: "72" },
        { code: "SK", article: "73" },
        { code: "SK", article: "74" },
        { code: "SK", article: "75" },
      ],
    },
    {
      heading: "Hisob siyosati va hisobni yuritish",
      text:
        "SOLIQ SOLISH MAQSADLARIDA HISOBGA OLISH " +
        "belgilangan tartibda amalga oshiriladi.\n\n" +
        "HISOB SIYOSATI — soliq to'lovchi tomonidan " +
        "tanlangan hisob usullari majmui.\n\n" +
        "⚠️ NIMA UCHUN BU MUHIM: qonun ba'zi " +
        "masalalarda bir necha usulni ruxsat " +
        "etadi va qaysi birini tanlash SIZNING " +
        "ixtiyoringizda.\n\n" +
        "Tanlangan usul hisob siyosatida " +
        "yoziladi va u IZCHIL qo'llanilishi " +
        "kerak.\n\n" +
        "AMALIY OQIBAT: hisob siyosati " +
        "rasmiylashtirilmagan bo'lsa, soliq " +
        "organi o'z talqinini qo'llashi mumkin " +
        "— va u odatda sizga qulay " +
        "bo'lmaydi.\n\n" +
        "Shuning uchun hisob siyosatini yozma " +
        "rasmiylashtiring va uni yil boshida " +
        "tasdiqlang.\n\n" +
        "HISOBNI YURITISH: soliq solish " +
        "maqsadlarida hisob belgilangan " +
        "qoidalar bo'yicha yuritiladi.\n\n" +
        "ALOHIDA-ALOHIDA HISOB: turli soliq " +
        "rejimlari yoki turli stavkalar " +
        "qo'llaniladigan faoliyat turlari " +
        "bo'yicha alohida hisob yuritish " +
        "talab qilinishi mumkin.\n\n" +
        "⚠️ ALOHIDA HISOB YURITILMASA: " +
        "daromad va xarajatlar aralashib " +
        "ketadi va soliq organi ularni o'z " +
        "usuli bilan taqsimlaydi — bu " +
        "odatda ko'proq soliqqa olib " +
        "keladi.\n\n" +
        "AMALIY QOIDA: bir necha yo'nalishda " +
        "faoliyat yuritsangiz, hisobni " +
        "boshidanoq ajratib yuriting.",
      example:
        "Turli rejimdagi faoliyat bo'yicha " +
        "alohida hisob yuritilmadi — soliq " +
        "organi taqsimotni o'zi qildi.",
      keyPoints: [
        "Hisob siyosati usullarni tanlash imkonini beradi",
        "U yozma rasmiylashtirilishi kerak",
        "Tanlangan usul izchil qo'llaniladi",
        "Turli rejimlarda alohida hisob yuritiladi",
      ],
      warning:
        "Hisob siyosatisiz soliq organi o'z " +
        "talqinini qo'llaydi.",
      lawRefs: [
        { code: "SK", article: "76" },
        { code: "SK", article: "77" },
        { code: "SK", article: "78" },
        { code: "SK", article: "80" },
      ],
    },
    {
      heading: "Hisob hujjatlariga qo'yiladigan talablar",
      text:
        "HISOB HUJJATLARI belgilangan talablarga " +
        "muvofiq tuzilishi va SAQLANISHI kerak.\n\n" +
        "⚠️ BU DARSDAGI ENG AMALIY QOIDA: " +
        "xarajatni tasdiqlovchi hujjat bo'lmasa, " +
        "u soliq maqsadida TAN OLINMAYDI.\n\n" +
        "Ya'ni siz haqiqatda pul sarflagan " +
        "bo'lsangiz ham, hujjatsiz xarajat " +
        "sizga soliq bo'yicha hech qanday " +
        "foyda bermaydi.\n\n" +
        "Bu tadbirkorlar uchun eng ko'p " +
        "yo'qotish keltiradigan holat.\n\n" +
        "HUJJATLARGA TALABLAR: ular " +
        "belgilangan rekvizitlarni o'z " +
        "ichiga olishi, aniq va tushunarli " +
        "bo'lishi kerak.\n\n" +
        "HISOBVARAQ-FAKTURA alohida " +
        "ahamiyatga ega hujjat — u " +
        "realizatsiyani va soliqni " +
        "tasdiqlaydi.\n\n" +
        "SAQLASH MUDDATI: soliq hisoboti va " +
        "hisob hujjatlari belgilangan muddat " +
        "davomida saqlanadi.\n\n" +
        "⚠️ AMALIY QOIDA: muddat tugagunga " +
        "qadar hech narsani yo'q qilmang. " +
        "Tekshiruv ko'pincha bir necha yil " +
        "oldingi davrni qamrab oladi.\n\n" +
        "ELEKTRON NUSXA: qog'oz hujjatlar " +
        "yo'qolishi yoki shikastlanishi " +
        "mumkin. Barcha muhim hujjatlarni " +
        "skanerlab, elektron shaklda ham " +
        "saqlash — arzon va samarali " +
        "ehtiyot chorasi.\n\n" +
        "AMALIY MASLAHAT: hujjatlarni " +
        "yil va kontragent bo'yicha " +
        "tartiblab saqlang. Tekshiruv " +
        "paytida kerakli hujjatni tez " +
        "topa olish — jarayonni sezilarli " +
        "yengillashtiradi.",
      example:
        "Xarajat haqiqatda qilingan edi, lekin " +
        "hujjat saqlanmagan — u tan olinmadi.",
      keyPoints: [
        "Hujjatsiz xarajat tan olinmaydi",
        "Hujjatlar belgilangan rekvizitlarga ega bo'lishi kerak",
        "Saqlash muddati qonunda belgilangan",
        "Elektron nusxa qo'shimcha himoya beradi",
      ],
      warning:
        "Muddat tugagunga qadar hujjatlarni yo'q " +
        "qilmang.",
      lawRefs: [
        { code: "SK", article: "47" },
        { code: "SK", article: "79" },
        { code: "SK", article: "84" },
      ],
    },
    {
      heading: "Soliq hisobotini taqdim etish va tuzatish",
      text:
        "SOLIQ HISOBOTI belgilangan shakl bo'yicha " +
        "shakllantiriladi va tuziladi.\n\n" +
        "TAQDIM ETISH TARTIBI: hisobot belgilangan " +
        "muddatda va usulda (odatda elektron " +
        "shaklda) taqdim etiladi.\n\n" +
        "⚠️ MUDDATNI O'TKAZIB YUBORISH javobgarlikka " +
        "olib keladi — hatto soliq to'liq " +
        "to'langan bo'lsa ham.\n\n" +
        "Ya'ni \"men soliqni to'ladim-ku\" degan " +
        "dalil hisobotni topshirmaslikni " +
        "oqlamaydi.\n\n" +
        "O'ZGARTIRISH KIRITISH — ENG FOYDALI " +
        "IMKONIYAT: soliq to'lovchi topshirilgan " +
        "hisobotda xato yoki to'liqsizlikni " +
        "aniqlasa, unga o'zgartirish kiritishi " +
        "mumkin.\n\n" +
        "⚠️ NIMA UCHUN BU MUHIM: xatoni SIZ " +
        "O'ZINGIZ topib tuzatsangiz, " +
        "javobgarlik odatda yengillashadi " +
        "yoki umuman qo'llanilmaydi.\n\n" +
        "Xato soliq organi tomonidan " +
        "aniqlansa — javobgarlik to'liq " +
        "qo'llaniladi.\n\n" +
        "SHUNING UCHUN AMALIY QOIDA: xatoni " +
        "topsangiz kutmang. Aniqlangan " +
        "hisobotni darhol topshiring va " +
        "qo'shimcha soliq hamda penyani " +
        "to'lang.\n\n" +
        "Bu \"balki sezishmas\" degan " +
        "umiddan ancha arzonga tushadi.\n\n" +
        "MUHIM TAFSILOT: o'zgartirish " +
        "kiritish odatda tekshiruv " +
        "boshlangunga qadar imkoniyat " +
        "beradi — tekshiruv boshlangach bu " +
        "afzallik yo'qoladi.",
      example:
        "Xato soliq to'lovchi tomonidan " +
        "topilib tuzatildi — javobgarlik " +
        "yengillashdi.",
      keyPoints: [
        "Hisobot belgilangan muddatda topshiriladi",
        "Muddatni o'tkazish soliq to'langan bo'lsa ham javobgarlikka olib keladi",
        "Xatoni o'zingiz tuzatish afzallik beradi",
        "Tekshiruv boshlangach bu imkoniyat yo'qoladi",
      ],
      warning:
        "\"Sezishmas\" degan umid har doim " +
        "qimmatga tushadi.",
      lawRefs: [
        { code: "SK", article: "81" },
        { code: "SK", article: "82" },
        { code: "SK", article: "83" },
      ],
    },
    {
      heading: "Soliq to'lovchilarni hisobga qo'yish",
      text:
        "HISOBGA QO'YISH — soliq to'lovchining soliq " +
        "organida ro'yxatga olinishi.\n\n" +
        "IDENTIFIKATSIYA RAQAMI (STIR) har bir " +
        "soliq to'lovchiga beriladi va u barcha " +
        "soliq hujjatlarida ko'rsatiladi.\n\n" +
        "⚠️ AMALIY AHAMIYATI: STIRsiz na hisob " +
        "ochish, na shartnoma bo'yicha to'lov " +
        "olish, na hisobot topshirish " +
        "mumkin.\n\n" +
        "TARTIBI: hisobga qo'yish belgilangan " +
        "tartibda amalga oshiriladi. Ko'p " +
        "hollarda u davlat ro'yxatidan " +
        "o'tkazish bilan bir vaqtda " +
        "bajariladi.\n\n" +
        "SOLIQ SOLISH OBYEKTI BO'YICHA " +
        "HISOBGA QO'YISH: ayrim hollarda " +
        "soliq to'lovchi obyekt joylashgan " +
        "joyda ham hisobga qo'yiladi " +
        "(masalan ko'chmas mulk yoki " +
        "transport bo'lsa).\n\n" +
        "NOREZIDENTLAR uchun hisobga " +
        "qo'yishning o'ziga xos " +
        "xususiyatlari belgilangan.\n\n" +
        "HISOB MA'LUMOTLARI: soliq " +
        "to'lovchi to'g'risidagi ma'lumotlar " +
        "yangilanib boriladi.\n\n" +
        "⚠️ MA'LUMOTLARNI YANGILASH " +
        "MAJBURIYATI: manzil, rahbar, " +
        "faoliyat turi o'zgarganda soliq " +
        "organini xabardor qilish " +
        "shart.\n\n" +
        "Bu shunchaki rasmiyatchilik emas: " +
        "eski manzilga yuborilgan " +
        "talabnoma YETKAZILGAN hisoblanadi " +
        "va muddatlar boshlanadi.\n\n" +
        "BOSHQA ORGANLAR MAJBURIYATI: " +
        "organlar, muassasalar va " +
        "tashkilotlar soliq organlariga " +
        "ma'lumot taqdim etishi shart. " +
        "BANKLAR ham soliq nazorati bilan " +
        "bog'liq majburiyatlarni " +
        "bajaradi.\n\n" +
        "AMALIY XULOSA: sizning moliyaviy " +
        "operatsiyalaringiz haqidagi " +
        "ma'lumot turli manbalardan " +
        "soliq organiga tushadi — bu " +
        "hisobni to'g'ri yuritishning " +
        "yana bir sababi.",
      example:
        "Manzil o'zgardi, xabar berilmadi — " +
        "talabnoma eski manzilga borib, " +
        "muddat o'tib ketdi.",
      keyPoints: [
        "Har bir soliq to'lovchi hisobga qo'yiladi",
        "STIR barcha hujjatlarda ko'rsatiladi",
        "Ma'lumot o'zgarsa xabardor qilish shart",
        "Banklar va organlar soliqqa ma'lumot beradi",
      ],
      warning:
        "Eski manzilga yuborilgan hujjat " +
        "yetkazilgan hisoblanadi.",
      lawRefs: [
        { code: "SK", article: "126" },
        { code: "SK", article: "127" },
        { code: "SK", article: "128" },
        { code: "SK", article: "129" },
        { code: "SK", article: "130" },
        { code: "SK", article: "131" },
        { code: "SK", article: "132" },
        { code: "SK", article: "133" },
        { code: "SK", article: "134" },
      ],
    },
  ],
};

module.exports = { LESSON };
