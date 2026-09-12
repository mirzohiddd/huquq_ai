"use strict";
/**
 * SOLIQ MODULI — 7-DARS: JISMONIY SHAXSLAR SOLIQLARI.
 * SK 368–401 (daromad solig'i) + 418–423 (mol-mulk) + 433–440 (yer).
 */

const LESSON = {
  key: "jismoniy-shaxs-soliq",
  category: "tax",
  level: "mid",
  order: 9070,
  title: "Jismoniy shaxslar uchun soliqlar",
  desc:
    "Daromad solig'i: jami daromad tarkibi, soliq solinmaydigan " +
    "daromadlar, imtiyozlar, soliq agenti orqali to'lash, yillik " +
    "deklaratsiya hamda jismoniy shaxslarning mol-mulk va yer " +
    "soliqlari.",
  objectives: [
    "Qanday daromadlar soliqqa tortilishini bilasiz",
    "Soliq solinmaydigan daromadlarni bilasiz",
    "Jami daromadni kamaytirish imkonini bilasiz",
    "Deklaratsiya qachon topshirilishini bilasiz",
    "Chet elda to'langan soliqni hisobga olishni bilasiz",
    "Mol-mulk va yer soliqlarini bilasiz",
  ],
  practicalSteps: [
    "Ish haqi qog'ozida ushlab qolingan soliqni tekshirib boring",
    "Imtiyozga haqli bo'lsangiz uni tasdiqlovchi hujjatni ish beruvchiga bering",
    "Deklaratsiya topshirish majburiyati bor-yo'qligini har yil tekshiring",
    "Mol-mulk va yer solig'i xabarnomasini o'z vaqtida oling",
    "Ortiqcha ushlangan soliqni qaytarishni talab qiling",
  ],
  sections: [
    {
      heading: "Jami daromad va uning tarkibi",
      text:
        "JISMONIY SHAXSLARDAN OLINADIGAN DAROMAD " +
        "SOLIG'I jami daromaddan hisoblanadi.\n\n" +
        "JAMI DAROMAD TARKIBI to'rt guruhdan " +
        "iborat:\n\n" +
        "(1) MEHNATGA HAQ TO'LASH tarzidagi " +
        "daromadlar — ish haqi, mukofot va shu " +
        "kabilar. Bunga rag'batlantirish " +
        "xususiyatiga ega to'lovlar, ayrim " +
        "kompensatsiya to'lovlari va ishlanmagan " +
        "vaqt uchun to'lovlar (ta'til, nafaqa) " +
        "ham kiradi.\n\n" +
        "(2) MULKIY DAROMADLAR — mol-mulkni " +
        "ijaraga berish, sotish, dividend va " +
        "foizlar.\n\n" +
        "(3) MODDIY NAF tarzidagi daromadlar — " +
        "ish beruvchi tomonidan tekin yoki " +
        "imtiyozli berilgan tovar, xizmat, " +
        "to'lovlar.\n\n" +
        "⚠️ UCHINCHI GURUH KO'PINCHA E'TIBORDAN " +
        "CHETDA QOLADI: ish beruvchi sizga " +
        "tekin uy-joy, transport yoki boshqa " +
        "naf bersa — bu ham daromad hisoblanib, " +
        "soliqqa tortilishi mumkin.\n\n" +
        "(4) BOSHQA DAROMADLAR — yuqoridagilarga " +
        "kirmaydigan barcha daromadlar.\n\n" +
        "JAMI DAROMADGA KIRITILMAYDIGAN " +
        "daromadlar alohida belgilangan — ular " +
        "umuman daromad hisoblanmaydi.\n\n" +
        "AMALIY XULOSA: soliq faqat ish " +
        "haqidan emas, boshqa daromadlardan " +
        "ham hisoblanadi. Kvartira ijarasi " +
        "yoki qo'shimcha faoliyatdan daromad " +
        "olsangiz, bu ham deklaratsiya " +
        "predmeti bo'lishi mumkin.",
      example:
        "Kvartira ijaraga berildi — bu mulkiy " +
        "daromad va u soliq predmeti " +
        "hisoblanadi.",
      keyPoints: [
        "Jami daromad to'rt guruhdan iborat",
        "Mehnat, mulkiy, moddiy naf va boshqa daromadlar",
        "Moddiy naf ham daromad hisoblanadi",
        "Ayrim daromadlar umuman hisobga olinmaydi",
      ],
      warning:
        "Qo'shimcha daromadni deklaratsiyada " +
        "ko'rsatmaslik javobgarlikka olib keladi.",
      lawRefs: [
        { code: "SK", article: "368" },
        { code: "SK", article: "369" },
        { code: "SK", article: "370" },
        { code: "SK", article: "371" },
        { code: "SK", article: "372" },
        { code: "SK", article: "373" },
        { code: "SK", article: "374" },
        { code: "SK", article: "375" },
        { code: "SK", article: "376" },
        { code: "SK", article: "377" },
      ],
    },
    {
      heading: "Soliq solinmaydigan daromadlar va imtiyozlar",
      text:
        "Bu — soliq to'lovchi uchun eng foydali " +
        "bo'lim va u ko'pincha to'liq " +
        "ishlatilmaydi.\n\n" +
        "SOLIQ SOLINMAYDIGAN DAROMADLAR ro'yxati " +
        "kodeksda belgilangan. Ularga odatda " +
        "ijtimoiy xarakterdagi to'lovlar, ayrim " +
        "nafaqalar, moddiy yordam turlari va shu " +
        "kabilar kiradi.\n\n" +
        "⚠️ AMALIY XULOSA: agar sizga to'langan " +
        "summadan soliq ushlab qolingan bo'lsa-yu, " +
        "u soliq solinmaydigan daromadlar " +
        "ro'yxatiga kirsa — ortiqcha ushlangan " +
        "soliqni qaytarishni talab qilishingiz " +
        "mumkin.\n\n" +
        "JISMONIY SHAXSLARNI SOLIQ SOLISHDAN " +
        "OZOD ETISH: ayrim toifadagi shaxslar " +
        "soliqdan butunlay ozod qilinadi.\n\n" +
        "JAMI DAROMADNI KAMAYTIRISH: ayrim " +
        "toifadagi soliq to'lovchilar jami " +
        "daromadini kamaytirish huquqiga " +
        "ega.\n\n" +
        "⚠️ IMTIYOZ AVTOMATIK QO'LLANMAYDI: " +
        "undan foydalanish uchun huquqni " +
        "tasdiqlovchi hujjatni ish " +
        "beruvchiga (soliq agentiga) taqdim " +
        "etish kerak.\n\n" +
        "Bu eng ko'p uchraydigan xato: " +
        "shaxs imtiyozga haqli bo'ladi, " +
        "lekin hujjat bermagani sababli " +
        "to'liq soliq to'lab yuradi.\n\n" +
        "STAVKALAR: rezidentlar va " +
        "norezidentlar uchun soliq stavkalari " +
        "alohida belgilangan.\n\n" +
        "SOLIQ DAVRI va HISOBOT DAVRI ham " +
        "kodeksda ko'rsatilgan.\n\n" +
        "AMALIY QADAM: yiliga bir marta " +
        "imtiyozlar ro'yxatini ko'rib " +
        "chiqing — oilaviy holat, sog'liq " +
        "yoki faoliyat o'zgarganda yangi " +
        "imtiyozga haqli bo'lishingiz " +
        "mumkin.",
      example:
        "Imtiyozga haqli shaxs hujjat " +
        "topshirmadi — to'liq soliq ushlab " +
        "qolinaverdi.",
      keyPoints: [
        "Soliq solinmaydigan daromadlar ro'yxati bor",
        "Ayrim toifalar soliqdan ozod qilinadi",
        "Jami daromadni kamaytirish imkoni mavjud",
        "Imtiyoz uchun hujjat topshirish shart",
      ],
      warning:
        "Imtiyoz hujjatini bermaslik — har oy " +
        "ortiqcha soliq to'lash demakdir.",
      lawRefs: [
        { code: "SK", article: "378" },
        { code: "SK", article: "379" },
        { code: "SK", article: "380" },
        { code: "SK", article: "381" },
        { code: "SK", article: "382" },
        { code: "SK", article: "384" },
      ],
    },
    {
      heading: "Soliq agenti orqali soliq to'lash",
      text:
        "Ko'pchilik jismoniy shaxslar uchun soliq " +
        "SOLIQ AGENTI (odatda ish beruvchi) " +
        "orqali to'lanadi.\n\n" +
        "SOLIQ AGENTINING MAJBURIYATI: soliqni " +
        "hisoblab chiqarish, ushlab qolish va " +
        "budjetga o'tkazish.\n\n" +
        "⚠️ MAJBURIYAT BAJARILMASA JAVOBGARLIK " +
        "SOLIQ AGENTIDA — ya'ni ish " +
        "beruvchida.\n\n" +
        "Lekin bu sizni befarq qoldirmasligi " +
        "kerak: ushlab qolinmagan yoki " +
        "o'tkazilmagan soliq sizning ijtimoiy " +
        "kafolatlaringizga ta'sir qilishi " +
        "mumkin.\n\n" +
        "HISOBLASH VA USHLAB QOLISH tartibi " +
        "kodeksda belgilangan.\n\n" +
        "HISOBOT: soliq agentlari soliq " +
        "hisobotini belgilangan tartibda va " +
        "muddatlarda taqdim etadi.\n\n" +
        "TO'LASH TARTIBI ham aniq " +
        "belgilangan.\n\n" +
        "⚠️ ORTIQCHA USHLANGAN SOLIQNI " +
        "QAYTARISH — SIZ UCHUN ENG MUHIM " +
        "QOIDA: ortiqcha ushlangan summa " +
        "belgilangan tartibda " +
        "qaytariladi.\n\n" +
        "Bu ko'pincha imtiyoz kech " +
        "qo'llanilganda yoki hisobda xato " +
        "bo'lganda yuzaga keladi.\n\n" +
        "AMALIY QADAM: ish haqi qog'ozini " +
        "(hisob varaqasini) muntazam " +
        "tekshiring: hisoblangan summa, " +
        "ushlab qolingan soliq va " +
        "qo'llanilgan imtiyoz to'g'ri " +
        "ko'rsatilganini ko'ring.\n\n" +
        "Xato topsangiz buxgalteriyaga " +
        "yozma murojaat qiling.",
      example:
        "Imtiyoz kech qo'llandi — oldingi " +
        "oylar uchun ortiqcha ushlangan soliq " +
        "qaytarilishi kerak.",
      keyPoints: [
        "Soliqni odatda ish beruvchi ushlab qoladi",
        "Majburiyat bajarilmasa javobgarlik unda",
        "Bu sizning ijtimoiy kafolatlaringizga ta'sir qiladi",
        "Ortiqcha ushlangan soliq qaytariladi",
      ],
      warning:
        "Ish haqi qog'ozini tekshirmaslik — " +
        "xatolarni sezmay qolish.",
      lawRefs: [
        { code: "SK", article: "385" },
        { code: "SK", article: "386" },
        { code: "SK", article: "387" },
        { code: "SK", article: "388" },
        { code: "SK", article: "389" },
        { code: "SK", article: "390" },
        { code: "SK", article: "391" },
      ],
    },
    {
      heading: "Yillik daromad deklaratsiyasi",
      text:
        "Ayrim holatlarda jismoniy shaxs soliqni " +
        "O'ZI hisoblab, DEKLARATSIYA topshirishi " +
        "kerak.\n\n" +
        "DEKLARATSIYA ASOSIDA SOLIQ SOLINADIGAN " +
        "DAROMADLAR kodeksda belgilangan — bu " +
        "odatda soliq agenti orqali " +
        "o'tmaydigan daromadlar.\n\n" +
        "⚠️ TIPIK HOLATLAR: chet eldan olingan " +
        "daromad; jismoniy shaxsdan olingan " +
        "ijara haqi; mol-mulkni sotishdan " +
        "olingan daromad (qonunda nazarda " +
        "tutilgan hollarda); bir necha " +
        "manbadan olingan daromadlar.\n\n" +
        "AYRIM TOIFADAGI SOLIQ TO'LOVCHILAR " +
        "va MUALLIFLIK HAQI bo'yicha soliq " +
        "solishning o'ziga xos xususiyatlari " +
        "belgilangan.\n\n" +
        "DEKLARATSIYA belgilangan shakl " +
        "bo'yicha tuziladi va belgilangan " +
        "muddatda taqdim etiladi. Soliq ham " +
        "belgilangan tartibda to'lanadi.\n\n" +
        "⚠️ CHET ELDA TO'LANGAN SOLIQNI " +
        "HISOBGA OLISH — JUDA MUHIM " +
        "IMKONIYAT: rezidentlar tomonidan " +
        "O'zbekiston hududidan tashqarida " +
        "to'langan soliq belgilangan " +
        "tartibda hisobga olinadi.\n\n" +
        "Ya'ni bir daromad ikki marta " +
        "soliqqa tortilmaydi. Buning uchun " +
        "chet elda soliq to'langanini " +
        "tasdiqlovchi hujjat kerak.\n\n" +
        "NOREZIDENTLAR daromadlariga soliq " +
        "solishning o'ziga xos " +
        "xususiyatlari va ushlab qolingan " +
        "soliqni qaytarish tartibi ham " +
        "belgilangan.\n\n" +
        "AMALIY QADAM: yil oxirida " +
        "daromadlaringizni ko'rib " +
        "chiqing va deklaratsiya " +
        "topshirish majburiyati bor-" +
        "yo'qligini aniqlang.",
      example:
        "Chet eldan daromad olindi va u yerda " +
        "soliq to'landi — hujjat bo'lsa u " +
        "hisobga olinadi.",
      keyPoints: [
        "Ayrim daromadlar deklaratsiya orqali e'lon qilinadi",
        "Deklaratsiya belgilangan muddatda topshiriladi",
        "Chet elda to'langan soliq hisobga olinadi",
        "Buning uchun tasdiqlovchi hujjat kerak",
      ],
      warning:
        "Deklaratsiyani topshirmaslik jarima va " +
        "penyaga olib keladi.",
      lawRefs: [
        { code: "SK", article: "393" },
        { code: "SK", article: "394" },
        { code: "SK", article: "395" },
        { code: "SK", article: "396" },
        { code: "SK", article: "397" },
        { code: "SK", article: "398" },
        { code: "SK", article: "399" },
        { code: "SK", article: "400" },
        { code: "SK", article: "401" },
      ],
    },
    {
      heading: "Jismoniy shaxslarning mol-mulk solig'i",
      text:
        "JISMONIY SHAXSLARDAN OLINADIGAN MOL-MULK " +
        "SOLIG'I mulkida soliq solish obyekti " +
        "bo'lgan shaxslardan olinadi.\n\n" +
        "SOLIQ TO'LOVCHILAR: mulkida soliq " +
        "solish obyekti bo'lgan jismoniy " +
        "shaxslar, shu jumladan chet el " +
        "fuqarolari.\n\n" +
        "SOLIQ SOLISH OBYEKTI: O'zbekiston " +
        "hududida joylashgan ko'chmas mulk " +
        "(uy-joy, kvartira, dala hovli, garaj " +
        "va boshqa imoratlar).\n\n" +
        "⚠️ MUHIM: soliq MULKDORDAN olinadi — " +
        "u yerda kim yashashidan qat'i " +
        "nazar.\n\n" +
        "Ya'ni kvartirani ijaraga bersangiz " +
        "ham, mol-mulk solig'ini siz " +
        "to'laysiz (shartnomada boshqacha " +
        "kelishilmagan bo'lsa — lekin bu " +
        "budjet oldidagi majburiyatni " +
        "o'zgartirmaydi).\n\n" +
        "SOLIQ BAZASI mol-mulkning " +
        "belgilangan qiymati asosida " +
        "aniqlanadi.\n\n" +
        "IMTIYOZLAR: ayrim toifadagi " +
        "shaxslar va ayrim obyektlar " +
        "bo'yicha imtiyozlar nazarda " +
        "tutilgan.\n\n" +
        "STAVKALAR va SOLIQ DAVRI " +
        "belgilangan.\n\n" +
        "HISOBLASH VA TO'LASH: soliq " +
        "odatda soliq organi tomonidan " +
        "hisoblanadi va xabarnoma " +
        "yuboriladi.\n\n" +
        "⚠️ AMALIY QOIDA: xabarnoma " +
        "kelmaganini soliq to'lash " +
        "majburiyati yo'qligi deb " +
        "tushunmang. Xabarnoma kelmasa " +
        "— soliq organiga o'zingiz " +
        "murojaat qiling.\n\n" +
        "Aks holda qarz va penya " +
        "to'planib boradi.",
      example:
        "Xabarnoma kelmadi va soliq " +
        "to'lanmadi — qarz va penya " +
        "to'plandi.",
      keyPoints: [
        "Soliq ko'chmas mulk mulkdoridan olinadi",
        "Kim yashashi ahamiyatga ega emas",
        "Imtiyozlar nazarda tutilgan",
        "Xabarnoma kelmasa o'zingiz murojaat qiling",
      ],
      warning:
        "Xabarnomaning kelmasligi majburiyatni " +
        "bekor qilmaydi.",
      lawRefs: [
        { code: "SK", article: "418" },
        { code: "SK", article: "419" },
        { code: "SK", article: "420" },
        { code: "SK", article: "421" },
        { code: "SK", article: "422" },
        { code: "SK", article: "423" },
      ],
    },
    {
      heading: "Jismoniy shaxslarning yer solig'i",
      text:
        "YER UCHASTKALARIDAN FOYDALANGANLIK UCHUN " +
        "budjetga to'lovlar YER SOLIG'I yoki YER " +
        "UCHUN IJARA TO'LOVI tarzida amalga " +
        "oshiriladi.\n\n" +
        "SOLIQ TO'LOVCHILAR: mulk huquqi, egalik " +
        "qilish, foydalanish yoki ijara huquqlari " +
        "asosida yer uchastkalariga ega bo'lgan " +
        "jismoniy shaxslar, shuningdek dehqon " +
        "xo'jaliklari.\n\n" +
        "⚠️ E'TIBOR BERING: soliq faqat " +
        "MULKDORLARDAN emas, FOYDALANUVCHILAR " +
        "va IJARACHILARDAN ham olinadi.\n\n" +
        "Ya'ni yer sizniki bo'lmasa ham, undan " +
        "foydalansangiz soliq majburiyati " +
        "yuzaga kelishi mumkin.\n\n" +
        "SOLIQ SOLISH OBYEKTI — yer " +
        "uchastkasi.\n\n" +
        "SOLIQ BAZASI odatda yer " +
        "uchastkasining maydoni asosida " +
        "aniqlanadi.\n\n" +
        "IMTIYOZLAR: ayrim toifadagi " +
        "shaxslar va yerlar bo'yicha " +
        "imtiyozlar belgilangan.\n\n" +
        "STAVKALAR yerning joylashuvi va " +
        "maqsadiga qarab farq qiladi.\n\n" +
        "HISOBLASH VA TO'LASH tartibi " +
        "belgilangan — mol-mulk solig'i " +
        "kabi, soliq odatda soliq organi " +
        "tomonidan hisoblanadi.\n\n" +
        "AMALIY XULOSA: uy sotib " +
        "olganingizda ikkita soliq " +
        "yuzaga keladi — mol-mulk va " +
        "yer solig'i.\n\n" +
        "Shuning uchun xarid " +
        "rejalashtirayotganda yillik " +
        "soliq yukini ham hisobga " +
        "oling.\n\n" +
        "⚠️ MULK O'TKAZILGANDA: mulkni " +
        "sotganingizda soliq organini " +
        "xabardor qilish va hisobdan " +
        "chiqarilganingizni tekshirish " +
        "kerak. Aks holda sotilgan mulk " +
        "uchun soliq sizga hisoblanib " +
        "borishi mumkin.",
      example:
        "Uy sotildi, lekin soliq hisobidan " +
        "chiqarilmadi — soliq eski mulkdorga " +
        "hisoblanaverdi.",
      keyPoints: [
        "Yer solig'i foydalanuvchi va ijarachidan ham olinadi",
        "Baza odatda maydon asosida aniqlanadi",
        "Imtiyozlar belgilangan",
        "Mulk sotilgach hisobdan chiqarishni tekshiring",
      ],
      warning:
        "Sotilgan mulk uchun soliq kelishda " +
        "davom etsa — darhol murojaat qiling.",
      lawRefs: [
        { code: "SK", article: "424" },
        { code: "SK", article: "433" },
        { code: "SK", article: "434" },
        { code: "SK", article: "435" },
        { code: "SK", article: "436" },
        { code: "SK", article: "437" },
        { code: "SK", article: "438" },
        { code: "SK", article: "439" },
        { code: "SK", article: "440" },
      ],
    },
  ],
};

module.exports = { LESSON };
