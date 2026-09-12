"use strict";
/** MEHNAT MODULI — 7-DARS: DAM OLISH VAQTI. MK 201–212.
 *  Ta'tillar (213–242) 8 va 9-darslarda. */

const LESSON = {
  key: "dam-olish-vaqti",
  category: "labor",
  level: "basic",
  order: 6070,
  title: "Dam olish vaqti: tanaffuslar va dam olish kunlari",
  desc:
    "Dam olish vaqtining turlari, tanaffuslar, haftalik dam olish, " +
    "bayram kunlari va ularda ishlash qoidalari.",
  objectives: [
    "Dam olish vaqtining turlarini bilasiz",
    "Tanaffuslar qanday beriladi va ular ish vaqtiga kiradimi — bilasiz",
    "Dam olish va bayram kunlarida ishlash taqiqini bilasiz",
    "Bunday kunlarda ishlatish qanday rasmiylashtirilishini bilasiz",
  ],
  practicalSteps: [
    "Tanaffus vaqti ichki hujjatda belgilanganini tekshiring",
    "Dam olish kunida ishlashga chaqirilsangiz buyruq talab qiling",
    "Bunday ish uchun oshirilgan haq hisoblanganini tekshiring",
    "Smenalar oralig'idagi dam olish davomiyligini nazorat qiling",
  ],
  sections: [
    {
      heading: "Dam olish vaqti tushunchasi va turlari",
      text:
        "Dam olish vaqti — xodim mehnat " +
        "majburiyatlaridan ozod bo'lgan va " +
        "uni O'Z IXTIYORICHA ishlatishi " +
        "mumkin bo'lgan vaqt.\n\n" +
        "Uning turlari qonunda belgilangan: " +
        "ish kuni (smena) davomidagi " +
        "tanaffuslar; har kungi (smenalar " +
        "oralig'idagi) dam olish; har " +
        "haftalik uzluksiz dam olish; " +
        "ishlanmaydigan bayram kunlari; " +
        "ta'tillar.\n\n" +
        "⚠️ Asosiy belgi — xodim bu vaqtni " +
        "O'ZI tasarruf etadi. Agar u " +
        "ish joyida bo'lishga yoki " +
        "chaqiruvni kutishga majbur " +
        "bo'lsa, bu dam olish emas.",
      example:
        "Xodim tushlik vaqtida ish joyidan " +
        "chiqa olmaydi va telefonga javob " +
        "berishi shart. Bu haqiqiy dam " +
        "olish emas.",
      keyPoints: [
        "Dam olish vaqtida xodim majburiyatlardan ozod",
        "Turlari qonunda ro'yxat bilan berilgan",
        "Xodim bu vaqtni o'zi tasarruf etadi",
        "Chaqiruvni kutish dam olish hisoblanmaydi",
      ],
      warning:
        "Tanaffusda ish joyidan chiqa " +
        "olmasangiz bu ish vaqti " +
        "hisoblanishi mumkin.",
      lawRefs: [{ code: "MK", article: "201" }],
    },
    {
      heading: "Dam olish vaqti bo'lmagan davrlar",
      text:
        "Qonun alohida moddada xodimni " +
        "mehnat majburiyatlarini " +
        "bajarishdan ozod etishning DAM " +
        "OLISH VAQTI BO'LMAGAN davrlarini " +
        "belgilaydi.\n\n" +
        "Ya'ni xodim ishlamayapti, lekin bu " +
        "dam olish ham emas.\n\n" +
        "Bunday davrlar odatda: davlat yoki " +
        "jamoat majburiyatlarini bajarish; " +
        "tibbiy ko'rikdan o'tish; " +
        "o'qish va malaka oshirish; " +
        "qonunda nazarda tutilgan boshqa " +
        "holatlar.\n\n" +
        "⚠️ Bu farq muhim: bunday davrlarda " +
        "odatda ish joyi va o'rtacha ish " +
        "haqi SAQLANADI — ya'ni bu " +
        "kafolatli to'lov davri.",
      example:
        "Xodim majburiy tibbiy ko'rikdan " +
        "o'tdi. Bu dam olish emas — ish " +
        "joyi va o'rtacha ish haqi " +
        "saqlanadi.",
      keyPoints: [
        "Ishlamaslikning hammasi dam olish emas",
        "Davlat majburiyatlari va ko'rik alohida davrlar",
        "Bunday davrlarda ish joyi saqlanadi",
        "O'rtacha ish haqi to'lanadi",
      ],
      warning:
        "Bunday davrni \"ta'til hisobidan\" " +
        "olishga majburlash qonunga zid.",
      lawRefs: [{ code: "MK", article: "202" }],
    },
    {
      heading: "Dam olish huquqini cheklovchi qoidalar haqiqiy emas",
      text:
        "⚠️ Bu — dam olish bo'limidagi eng " +
        "muhim himoya normasi.\n\n" +
        "Xodimning qonunchilik bilan " +
        "KAFOLATLANGAN dam olish huquqini " +
        "cheklaydigan hujjatlar qoidalari " +
        "HAQIQIY EMAS.\n\n" +
        "Bu shuni anglatadi: ichki hujjat, " +
        "jamoa shartnomasi yoki mehnat " +
        "shartnomasi dam olish huquqini " +
        "kamaytira olmaydi.\n\n" +
        "Imzolangan bo'lsa ham bunday " +
        "qoida ishlamaydi va uning " +
        "o'rniga qonun normasi " +
        "qo'llaniladi.\n\n" +
        "Amalda ko'p uchraydi: \"tanaffus " +
        "yo'q\", \"dam olish kunlarida " +
        "chaqiruvga javob berish shart\" " +
        "kabi bandlar.",
      example:
        "Ichki qoidada \"xodim dam olish " +
        "kunlarida ham aloqada bo'lishi " +
        "shart\" deb yozilgan. Bunday " +
        "qoida dam olish huquqini " +
        "cheklaydi.",
      keyPoints: [
        "Dam olish huquqini cheklovchi qoidalar haqiqiy emas",
        "Ichki hujjat va shartnoma uni kamaytira olmaydi",
        "Imzolangan bo'lsa ham ishlamaydi",
        "O'rniga qonun normasi qo'llaniladi",
      ],
      warning:
        "\"Hamma imzolagan\" degan dalil " +
        "bunday qoidani qonuniy qilmaydi.",
      lawRefs: [{ code: "MK", article: "203" }],
    },
    {
      heading: "Dam olish va ovqatlanish uchun tanaffuslar",
      text:
        "Ish kuni davomida xodimga dam olish " +
        "va ovqatlanish uchun TANAFFUS " +
        "beriladi.\n\n" +
        "Tanaffusning davomiyligi va berish " +
        "vaqti ichki mehnat tartibi " +
        "qoidalari yoki tomonlarning " +
        "kelishuvi bilan belgilanadi.\n\n" +
        "⚠️ ASOSIY QOIDA: bunday tanaffus " +
        "odatda ISH VAQTIGA KIRMAYDI — " +
        "ya'ni u to'lanmaydi va xodim uni " +
        "o'z ixtiyoricha ishlatadi.\n\n" +
        "Lekin ish sharoiti tanaffusda ish " +
        "joyini tark etishga imkon " +
        "bermasa, tartib boshqacha " +
        "bo'lishi mumkin.",
      example:
        "Xodimning tanaffusi bor, lekin u " +
        "ish joyidan chiqa olmaydi va " +
        "mijozlarga xizmat ko'rsatishda " +
        "davom etadi. Bunday holat " +
        "alohida baholanadi.",
      keyPoints: [
        "Ish kuni davomida tanaffus beriladi",
        "Davomiyligi ichki hujjatda belgilanadi",
        "Odatda tanaffus ish vaqtiga kirmaydi",
        "Ish joyini tark eta olmaslik holatni o'zgartiradi",
      ],
      warning:
        "Tanaffusda ishlashda davom " +
        "etsangiz buni qayd eting — bu " +
        "ish vaqti hisoblanishi mumkin.",
      lawRefs: [{ code: "MK", article: "204" }],
    },
    {
      heading: "Qo'shimcha tanaffuslar",
      text:
        "Asosiy tanaffusdan tashqari ish " +
        "kuni (smena) davomida QO'SHIMCHA " +
        "tanaffuslar ham beriladi — bu " +
        "alohida moddada belgilangan.\n\n" +
        "Ular odatda ish xarakteri yoki " +
        "sharoitidan kelib chiqadi: " +
        "isinish uchun; jismoniy zo'riqish " +
        "yuqori bo'lgan ishlarda; " +
        "kompyuterda uzoq ishlashda; bola " +
        "emizish uchun.\n\n" +
        "⚠️ MUHIM FARQ: qo'shimcha " +
        "tanaffuslar odatda ISH VAQTIGA " +
        "KIRADI va TO'LANADI — asosiy " +
        "tanaffusdan farqli o'laroq.\n\n" +
        "Bola emizish uchun tanaffuslar " +
        "alohida ahamiyatga ega.",
      example:
        "Sovuq havoda ishlaydigan xodimga " +
        "isinish uchun tanaffus berilmadi. " +
        "Bunday tanaffus qonunda nazarda " +
        "tutilgan.",
      keyPoints: [
        "Qo'shimcha tanaffuslar ish sharoitidan kelib chiqadi",
        "Ular odatda ish vaqtiga kiradi va to'lanadi",
        "Asosiy tanaffusdan farq qiladi",
        "Bola emizish uchun tanaffus alohida ahamiyatga ega",
      ],
      warning:
        "Qo'shimcha tanaffusga huquqingiz " +
        "bor-yo'qligini ish sharoitingizga " +
        "qarab aniqlang.",
      lawRefs: [{ code: "MK", article: "205" }],
    },
    {
      heading: "Har kungi (smenalar oralig'idagi) dam olish",
      text:
        "Ish tugagach keyingi ish " +
        "boshlanishigacha bo'lgan davr — " +
        "HAR KUNGI dam olish.\n\n" +
        "Uning davomiyligi qonunda " +
        "belgilangan va u eng kam " +
        "chegaraga ega.\n\n" +
        "⚠️ AMALIY AHAMIYATI: bu norma " +
        "smenali ishda ayniqsa muhim. U " +
        "xodimni ketma-ket smenalarda " +
        "ishlashdan himoya qiladi.\n\n" +
        "Ya'ni kechki smenani tugatib " +
        "darhol tungi smenaga qolish " +
        "qoidaga zid — orada " +
        "belgilangan dam olish bo'lishi " +
        "kerak.",
      example:
        "Xodim kechki smenani tugatdi va " +
        "bir necha soatdan keyin ertalabki " +
        "smenaga chaqirildi. Smenalar " +
        "oralig'idagi dam olish " +
        "davomiyligi buzilgan.",
      keyPoints: [
        "Smenalar oralig'idagi dam olish davomiyligi belgilangan",
        "U eng kam chegaraga ega",
        "Norma smenali ishda ayniqsa muhim",
        "Ketma-ket smenalarda ishlashdan himoya qiladi",
      ],
      warning:
        "Smenalar jadvalini olib, dam " +
        "olish davomiyligini o'zingiz " +
        "hisoblang.",
      lawRefs: [{ code: "MK", article: "206" }],
    },
    {
      heading: "Dam olish kunlari",
      text:
        "Har haftalik uzluksiz dam olish — " +
        "DAM OLISH KUNLARI.\n\n" +
        "Ularning soni va berish tartibi " +
        "qonunda belgilangan. Odatda ish " +
        "haftasining turiga qarab " +
        "aniqlanadi.\n\n" +
        "⚠️ Har haftalik uzluksiz dam " +
        "olishning eng kam davomiyligi " +
        "ham belgilangan — ya'ni dam " +
        "olish kunlari uzluksiz " +
        "bo'lishi kerak, bo'lak-bo'lak " +
        "emas.\n\n" +
        "Uzluksiz ishlab chiqarishda dam " +
        "olish kunlari jadval bo'yicha " +
        "beriladi va u har xil kunlarga " +
        "to'g'ri kelishi mumkin.",
      example:
        "Uzluksiz ishlab chiqarishda " +
        "xodimning dam olish kuni " +
        "chorshanbaga to'g'ri keldi. Bu " +
        "qonuniy — muhimi uzluksiz dam " +
        "olish ta'minlanishi.",
      keyPoints: [
        "Har haftalik uzluksiz dam olish beriladi",
        "Kunlar soni ish haftasi turiga bog'liq",
        "Eng kam uzluksiz davomiylik belgilangan",
        "Uzluksiz ishlab chiqarishda jadval bo'yicha beriladi",
      ],
      warning:
        "Dam olish kunlari bo'lak-bo'lak " +
        "berilsa bu normani buzishi " +
        "mumkin.",
      lawRefs: [{ code: "MK", article: "207" }],
    },
    {
      heading: "Ishlanmaydigan bayram kunlari",
      text:
        "Qonun ISHLANMAYDIGAN bayram " +
        "kunlarini belgilaydi.\n\n" +
        "Bu kunlar dam olish vaqtining " +
        "alohida turi hisoblanadi va " +
        "ularda ishlash umumiy qoida " +
        "bo'yicha taqiqlanadi.\n\n" +
        "⚠️ Bayram kuni dam olish kuniga " +
        "to'g'ri kelsa, dam olish kuni " +
        "odatda ko'chiriladi — bu " +
        "belgilangan tartibda amalga " +
        "oshiriladi.\n\n" +
        "Bayram kunlari arafasidagi ish " +
        "davomiyligi ham qisqartiriladi " +
        "(bu ish vaqti bo'limida " +
        "ko'rilgan).\n\n" +
        "Aniq kunlar ro'yxati qonun " +
        "matnida.",
      example:
        "Bayram kuni yakshanbaga to'g'ri " +
        "keldi. Belgilangan tartibda dam " +
        "olish kuni keyingi ish kuniga " +
        "ko'chirilishi mumkin.",
      keyPoints: [
        "Ishlanmaydigan bayram kunlari qonunda belgilangan",
        "Ularda ishlash umumiy qoida bo'yicha taqiqlanadi",
        "Dam olish kuniga to'g'ri kelsa ko'chiriladi",
        "Bayram arafasidagi ish qisqartiriladi",
      ],
      warning:
        "Bayram kunida ishlatilsangiz " +
        "oshirilgan haq yoki qo'shimcha " +
        "dam olish kuni beriladi.",
      lawRefs: [{ code: "MK", article: "208" }],
    },
    {
      heading: "Dam olish va bayram kunlarida ishlash taqiqi",
      text:
        "⚠️ ASOSIY QOIDA: dam olish " +
        "kunlarida va ishlanmaydigan " +
        "bayram kunlarida ishlash " +
        "TAQIQLANADI.\n\n" +
        "Bu taqiq alohida moddada " +
        "belgilangan va u umumiy qoida " +
        "hisoblanadi.\n\n" +
        "Qonun faqat ALOHIDA hollarni " +
        "istisno qiladi — ular ro'yxat " +
        "bilan belgilangan va odatda " +
        "favqulodda vaziyatlar, " +
        "avariyalarning oldini olish " +
        "yoki oqibatlarini bartaraf " +
        "etish bilan bog'liq.\n\n" +
        "Ya'ni \"bizda shunday, " +
        "shanbada ham ishlaymiz\" " +
        "degan amaliyot qonunga " +
        "zid.",
      example:
        "Kompaniyada shanba kunlari " +
        "muntazam ishlanadi va bu " +
        "\"odat\" deb hisoblanadi. " +
        "Muntazam ishlash istisno " +
        "hollarga kirmaydi.",
      keyPoints: [
        "Dam olish va bayram kunlarida ishlash taqiqlanadi",
        "Bu umumiy qoida hisoblanadi",
        "Istisno hollar ro'yxat bilan belgilangan",
        "Muntazam ishlash istisnoga kirmaydi",
      ],
      warning:
        "Muntazam dam olish kunlarida " +
        "ishlatilsangiz bu qonun " +
        "buzilishi — inspeksiyaga " +
        "murojaat qilish mumkin.",
      lawRefs: [{ code: "MK", article: "209" }],
    },
    {
      heading: "Roziliksiz jalb etishning alohida hollari",
      text:
        "Qonun xodimlarni dam olish va " +
        "bayram kunlari ULARNING " +
        "ROZILIGISIZ ishga jalb etishning " +
        "ALOHIDA hollarini belgilaydi.\n\n" +
        "Bular odatda favqulodda " +
        "vaziyatlar bilan bog'liq: " +
        "avariyaning oldini olish yoki " +
        "oqibatlarini bartaraf etish; " +
        "tabiiy ofat; aholi hayotiga " +
        "tahdid soluvchi holatlar.\n\n" +
        "⚠️ Bu ro'yxat TOR va kengaytirib " +
        "talqin qilinmaydi. \"Buyurtma " +
        "ko'p\" yoki \"reja bajarilmadi\" " +
        "degan sabab bunga kirmaydi.\n\n" +
        "Qolgan barcha hollarda xodimning " +
        "roziligi TALAB QILINADI.",
      example:
        "Xodim \"buyurtma ko'p\" degan sabab " +
        "bilan bayram kunida chaqirildi va " +
        "roziligi so'ralmadi. Bu istisno " +
        "hollarga kirmaydi.",
      keyPoints: [
        "Roziliksiz jalb etish alohida hollarda mumkin",
        "Ular favqulodda vaziyatlar bilan bog'liq",
        "Ro'yxat tor va kengaytirilmaydi",
        "Qolgan hollarda rozilik talab qilinadi",
      ],
      warning:
        "Roziligingiz so'ralmasa buni " +
        "yozma qayd eting.",
      lawRefs: [{ code: "MK", article: "210" }],
    },
    {
      heading: "Jalb etishni cheklash va rasmiylashtirish",
      text:
        "Dam olish va bayram kunlari ishga " +
        "jalb etish CHEKLANADI — bu " +
        "alohida moddada belgilangan.\n\n" +
        "Cheklovlar ikki yo'nalishda: ayrim " +
        "TOIFADAGI xodimlarni jalb etish " +
        "taqiqlanadi yoki faqat rozilik " +
        "bilan mumkin (homilador ayollar, " +
        "kichik bolali shaxslar, voyaga " +
        "yetmaganlar, nogironligi bo'lgan " +
        "xodimlar); jalb etishning " +
        "MIQDORI cheklanishi mumkin.\n\n" +
        "⚠️ RASMIYLASHTIRISH majburiy: " +
        "xodimni dam olish yoki bayram " +
        "kuni ishga jalb etish BUYRUQ " +
        "bilan rasmiylashtiriladi.\n\n" +
        "Buyruqsiz chaqirilsangiz bu " +
        "keyinchalik isbotlashni " +
        "qiyinlashtiradi.",
      example:
        "Xodim bayram kuni telefon orqali " +
        "chaqirildi, buyruq chiqarilmadi " +
        "va oshirilgan haq to'lanmadi. " +
        "Rasmiylashtirish majburiy edi.",
      keyPoints: [
        "Jalb etish qonunda cheklangan",
        "Ayrim toifalar uchun taqiq yoki rozilik talab qilinadi",
        "Jalb etish buyruq bilan rasmiylashtiriladi",
        "Buyruqsiz chaqiruv isbotlashni qiyinlashtiradi",
      ],
      warning:
        "Buyruqsiz chaqirilsangiz " +
        "yozishmani va chaqiruv " +
        "dalilini saqlang.",
      lawRefs: [
        { code: "MK", article: "211" },
        { code: "MK", article: "212" },
      ],
    },
  ],
};

module.exports = { LESSON };
