"use strict";
/** FUQAROLIK MODULI — 6-DARS: MULKNI HIMOYA QILISH. FK 228–233. */

const LESSON = {
  key: "mulk-himoya",
  category: "civil",
  level: "mid",
  order: 2060,
  title: "Mulkni himoya qilish: vindikatsiya va negator da'vo",
  desc:
    "Mulkni boshqa shaxsning qonunsiz egaligidan talab qilib olish, " +
    "insofli egallovchi tushunchasi, daromad va xarajatlar hisobi, " +
    "negator da'vo hamda mulkdor bo'lmagan eganing himoyasi.",
  objectives: [
    "Vindikatsiya da'vosi qachon qo'llanishini bilasiz",
    "Insofli va insofsiz egallovchi farqini tushunasiz",
    "Insofli egallovchidan mulk qachon qaytarilishini bilasiz",
    "Daromad va xarajatlar qanday hisoblanishini bilasiz",
    "Negator da'vo qanday holatda beriladi — bilasiz",
    "Mulkdor bo'lmagan eganing himoyasini tushunasiz",
  ],
  practicalSteps: [
    "Mulkingiz boshqa shaxsda bo'lsa — avval qanday yo'l bilan o'tganini aniqlang",
    "Xarid qilishdan oldin sotuvchining huquqini hujjat bilan tekshiring",
    "Mulkingizdan foydalanishga xalaqit berilsa yozma talab yuboring",
    "Qonunsiz egalikdagi davr uchun daromadni hisoblab boring",
    "Da'vo turini (vindikatsiya yoki negator) to'g'ri tanlang",
  ],
  sections: [
    {
      heading: "Vindikatsiya: mulkni qonunsiz egalikdan talab qilish",
      text:
        "Mulkdor o'z mol-mulkini BOSHQA SHAXSNING QONUNSIZ " +
        "EGALIGIDAN talab qilib olishga haqli. Huquqda bu " +
        "VINDIKATSIYA da'vosi deb ataladi.\n\n" +
        "SHARTLARI: (1) da'vogar mulkdor bo'lishi kerak; (2) " +
        "mol-mulk uning egaligidan chiqib ketgan bo'lishi kerak; " +
        "(3) mol-mulk javobgarda AYNAN turgan bo'lishi kerak; (4) " +
        "javobgarning egaligi qonuniy asossiz bo'lishi kerak.\n\n" +
        "⚠️ ENG MUHIM SHART — UCHINCHISI. Vindikatsiya faqat " +
        "AYNAN O'SHA ashyoga nisbatan qo'llaniladi. Ashyo nobud " +
        "bo'lgan yoki qayta ishlangan bo'lsa, vindikatsiya emas, " +
        "ZARARNI QOPLASH talabi qo'yiladi.\n\n" +
        "AMALIY XULOSA: da'vo turini noto'g'ri tanlash — rad " +
        "etilishning eng keng tarqalgan sababi. \"Mulkim qaytarib " +
        "berilsin\" va \"zararim qoplansin\" — bu ikki BOSHQA " +
        "talab.\n\n" +
        "Shuning uchun avval faktni aniqlang: ashyo bormi? Bo'lsa " +
        "— vindikatsiya; yo'q bo'lsa — zarar.",
      example:
        "O'g'irlangan uskuna boshqa shaxsda topildi — mulkdor uni " +
        "aynan qaytarishni talab qilishi mumkin.",
      keyPoints: [
        "Vindikatsiya — mulkni qonunsiz egalikdan talab qilish",
        "Ashyo aynan mavjud bo'lishi shart",
        "Ashyo yo'q bo'lsa zararni qoplash talab qilinadi",
        "Da'vo turini to'g'ri tanlash hal qiluvchi ahamiyatga ega",
      ],
      warning:
        "Noto'g'ri tanlangan da'vo turi vaqt va davlat bojini " +
        "yo'qotadi.",
      lawRefs: [{ code: "FK", article: "228" }],
    },
    {
      heading: "Insofli egallovchi kim va u nima uchun himoyalanadi",
      text:
        "INSOFLI EGALLOVCHI — mol-mulkni olayotganda uni sotishga " +
        "haqli bo'lmagan shaxsdan olayotganini BILMAGAN va " +
        "bilishi ham MUMKIN BO'LMAGAN shaxs.\n\n" +
        "INSOFSIZ EGALLOVCHI esa bilgan yoki bilishi kerak " +
        "bo'lgan shaxs.\n\n" +
        "⚠️ NIMA UCHUN BU AJRATISH KERAK: insofsiz egallovchidan " +
        "mol-mulk HAR DOIM talab qilib olinadi. Insofli " +
        "egallovchidan esa faqat MA'LUM HOLATLARDA.\n\n" +
        "\"BILISHI MUMKIN BO'LMAGAN\" degani qat'iy talab: agar " +
        "vaziyat shubha uyg'otgan bo'lsa (bozor narxidan ancha " +
        "arzon, hujjatlar to'liq emas, sotuvchi shoshiltiryapti), " +
        "xaridor insofli deb hisoblanmasligi mumkin.\n\n" +
        "AMALIY QOIDA: shubhali holatlar bo'lsa TEKSHIRING va " +
        "tekshirganingizni hujjatlashtiring. Bu keyinchalik " +
        "sizning insofliligingizni isbotlaydi.\n\n" +
        "Ana shu sabab qimmat xaridlarda hujjatlarni to'liq " +
        "olish faqat rasmiyatchilik emas — bu himoya.",
      example:
        "Bozor narxidan bir necha barobar arzon mulk " +
        "hujjatlarsiz sotib olindi — xaridorning insofliligi " +
        "shubha ostiga tushadi.",
      keyPoints: [
        "Insofli egallovchi huquqbuzarlikni bilmagan shaxs",
        "Insofsiz egallovchidan mulk har doim talab qilinadi",
        "Shubhali holatda tekshirmaslik insoflilikni yo'qotadi",
        "Tekshiruvni hujjatlashtirish o'zingizni himoya qiladi",
      ],
      warning:
        "Juda arzon narx — huquqiy muammoning eng keng tarqalgan " +
        "belgisi.",
      lawRefs: [{ code: "FK", article: "229" }],
    },
    {
      heading: "Insofli egallovchidan mulk qachon qaytariladi",
      text:
        "Bu — butun mavzuning eng muhim qoidasi va u ikki holatga " +
        "bo'linadi.\n\n" +
        "MOL-MULK TEKINGA OLINGAN bo'lsa (hadya, meros), u " +
        "insofli egallovchidan HAR QANDAY holatda talab qilib " +
        "olinadi. Mantiq sodda: u hech narsa sarflamagan, " +
        "shuning uchun yo'qotmaydi ham.\n\n" +
        "MOL-MULK HAQ EVAZIGA OLINGAN bo'lsa, u insofli " +
        "egallovchidan faqat mol-mulk mulkdorning egaligidan " +
        "UNING IXTIYORIGA BOG'LIQ BO'LMAGAN holda chiqqan " +
        "bo'lsa talab qilib olinadi — masalan o'g'irlangan yoki " +
        "yo'qotilgan bo'lsa.\n\n" +
        "⚠️ TESKARI HOLAT AMALDA JUDA MUHIM: agar mulkdor " +
        "mol-mulkni O'ZI ixtiyoriy ravishda boshqa shaxsga " +
        "bergan bo'lsa (ijaraga, saqlashga, foydalanishga) va " +
        "o'sha shaxs uni insofli xaridorga sotgan bo'lsa — " +
        "mulkdor mol-mulkni QAYTARIB OLA OLMAYDI.\n\n" +
        "Uning yagona yo'li — mol-mulkni bergan shaxsdan " +
        "ZARARNI undirish.\n\n" +
        "SABABI: qonun bu yerda ikki begunoh shaxs o'rtasida " +
        "tanlaydi va xavfni sherikni NOTO'G'RI TANLAGAN mulkdor " +
        "zimmasiga qo'yadi.\n\n" +
        "Pul va taqdim etuvchiga tegishli qimmatli qog'ozlar " +
        "insofli egallovchidan umuman talab qilib olinmaydi.",
      example:
        "Mashina ijaraga berildi, ijarachi uni insofli xaridorga " +
        "sotdi — mulkdor mashinani emas, ijarachidan zararni " +
        "talab qiladi.",
      keyPoints: [
        "Tekinga olingan mol-mulk har doim qaytariladi",
        "Haq evaziga olingani faqat ixtiyordan tashqari chiqqanda",
        "Ixtiyoriy berilgan mulk insofli xaridordan olinmaydi",
        "Bu holda mulkdor zararni bergan shaxsdan undiradi",
      ],
      warning:
        "Mulkingizni kimga ishonib berayotganingizni o'ylab " +
        "ko'ring — xavf sizda qoladi.",
      lawRefs: [{ code: "FK", article: "229" }],
    },
    {
      heading: "Daromadlar va xarajatlarni hisob-kitob qilish",
      text:
        "Mol-mulk qonunsiz egalikdan talab qilib olinganda tomonlar " +
        "o'rtasida hisob-kitob ham qilinadi.\n\n" +
        "INSOFSIZ EGALLOVCHIDAN mulkdor egalik butun davri uchun " +
        "olingan yoki olinishi mumkin bo'lgan barcha DAROMADLARNI " +
        "talab qilishi mumkin.\n\n" +
        "INSOFLI EGALLOVCHIDAN esa faqat u o'z egaligining " +
        "qonunsizligini BILGAN yoki bilishi kerak bo'lgan " +
        "paytdan boshlab.\n\n" +
        "⚠️ TESKARI TOMONI HAM BOR: egallovchi o'z navbatida " +
        "mol-mulkni saqlash uchun qilgan ZARUR XARAJATLARNI " +
        "qoplashni talab qilishga haqli — daromad hisobga " +
        "olinadigan davr uchun.\n\n" +
        "YAXSHILANISHLAR: insofli egallovchi ajraladigan " +
        "yaxshilanishlarni o'zida qoldirishga haqli; ajralmas " +
        "yaxshilanishlar uchun esa qonunda belgilangan doirada " +
        "tovon talab qilishi mumkin.\n\n" +
        "AMALIY MASLAHAT: bunday ishlarda barcha hujjatlarni " +
        "(ta'mirlash cheklari, ijara shartnomalari, daromad " +
        "hujjatlari) saqlang — hisob-kitob aynan ularga tayanadi. " +
        "Hujjatsiz talab deyarli har doim rad etiladi.",
      example:
        "Qonunsiz egalikdagi bino ijaraga berilgan edi — mulkdor " +
        "shu davr ijara daromadini talab qilishi mumkin.",
      keyPoints: [
        "Insofsizdan butun davr daromadi talab qilinadi",
        "Insoflidan — bilgan paytdan boshlab",
        "Egallovchi zarur xarajatlarni qoplashni talab qila oladi",
        "Ajraladigan yaxshilanishlar egallovchida qoladi",
      ],
      warning:
        "Daromadni \"taxminan\" ko'rsatish — talabning rad " +
        "etilishiga olib keladi.",
      lawRefs: [{ code: "FK", article: "230" }],
    },
    {
      heading: "Negator da'vo: xalaqitni bartaraf etish",
      text:
        "Mulkdor egalik qilishdan mahrum etish bilan BOG'LIQ " +
        "BO'LMAGAN huquqbuzarliklarni bartaraf etishni talab " +
        "qilishga haqli. Bu NEGATOR da'vo deb ataladi.\n\n" +
        "⚠️ VINDIKATSIYADAN FARQI ANIQ: bu yerda mulk SIZDA " +
        "qoladi, lekin undan to'liq foydalana olmaysiz.\n\n" +
        "Odatiy holatlar: qo'shni sizning uchastkangizga o'tishni " +
        "to'sib qo'ydi; qurilish sizning binongizga zarar " +
        "yetkazyapti; qo'shni faoliyati (shovqin, tutun, oqava) " +
        "yashashga xalaqit beryapti; kirish yo'li " +
        "to'silgan.\n\n" +
        "TALAB: xalaqit beruvchi harakatni TO'XTATISH va " +
        "buzilishning oqibatlarini BARTARAF ETISH. Bunga " +
        "qo'shimcha ravishda ZARARNI qoplashni ham talab qilish " +
        "mumkin.\n\n" +
        "MUHIM AFZALLIK: negator da'voga umumiy qoida bo'yicha " +
        "da'vo muddati qo'llanilmaydi, chunki huquqbuzarlik " +
        "DAVOM ETAYOTGAN hisoblanadi.\n\n" +
        "AMALIY QADAM: sudga murojaat qilishdan oldin buzuvchiga " +
        "YOZMA talab yuboring va xalaqitni (foto, video, " +
        "dalolatnoma, guvohlar) qayd eting.",
      example:
        "Qo'shni umumiy o'tish yo'lini to'sib qo'ydi — mulkdor " +
        "to'siqni olib tashlashni talab qilishi mumkin.",
      keyPoints: [
        "Negator da'vo — egalikdan mahrum qilmaydigan buzilishga qarshi",
        "Mulk sizda qoladi, lekin foydalanish cheklangan",
        "Harakatni to'xtatish va oqibatni bartaraf etish talab qilinadi",
        "Da'vo muddati odatda qo'llanilmaydi",
      ],
      warning:
        "Xalaqitni qayd etmasdan sudga murojaat qilish — " +
        "isbotlashni qiyinlashtiradi.",
      lawRefs: [{ code: "FK", article: "231" }],
    },
    {
      heading: "Mulkdor bo'lmagan eganing himoyasi",
      text:
        "Mulkdor bo'lmagan, lekin mol-mulkka QONUNIY asosda ega " +
        "bo'lgan shaxs ham yuqoridagi himoya usullaridan " +
        "foydalanishga haqli.\n\n" +
        "Bunday shaxslar: ijarachi, saqlovchi, operativ " +
        "boshqarish huquqiga ega tashkilot, garov ushlab turuvchi " +
        "va boshqalar.\n\n" +
        "⚠️ ENG MUHIM QOIDA: bunday shaxs o'z egaligini MULKDORGA " +
        "qarshi ham himoya qilishga haqli.\n\n" +
        "Ya'ni uy ijaraga berilgan bo'lsa, mulkdor shartnoma amal " +
        "qilib turgan paytda ijarachini o'zboshimchalik bilan " +
        "chiqarib yubora olmaydi — bu qonunga xilof va ijarachi " +
        "himoyalanadi.\n\n" +
        "Bu qoida ijara, saqlash va shu kabi munosabatlarga " +
        "haqiqiy barqarorlik beradi: shartnoma bo'yicha olingan " +
        "egalik shunchaki \"iltifot\" emas, himoyalanadigan " +
        "huquq.\n\n" +
        "MULK HUQUQI BEKOR BO'LISHI: qonun qabul qilinishi " +
        "natijasida mulk huquqi bekor bo'lsa, mulkdorga yetkazilgan " +
        "zarar (mol-mulk qiymati ham) qoplanadi. Nizolar sud " +
        "tartibida hal qilinadi.",
      example:
        "Mulkdor ijara shartnomasi tugamasdan turib qulfni " +
        "almashtirdi — ijarachi o'z egaligini himoya qilishga " +
        "haqli.",
      keyPoints: [
        "Qonuniy ega ham himoya usullaridan foydalanadi",
        "U o'z egaligini mulkdorga qarshi ham himoya qiladi",
        "Ijarachi shartnoma davrida himoyalanadi",
        "Qonun asosida bekor bo'lgan mulk huquqi uchun zarar qoplanadi",
      ],
      warning:
        "Ijarachini o'zboshimchalik bilan chiqarish mulkdorni " +
        "javobgarga aylantiradi.",
      lawRefs: [
        { code: "FK", article: "232" },
        { code: "FK", article: "233" },
      ],
    },
  ],
};

module.exports = { LESSON };
