"use strict";
/** OILA MODULI — 5-DARS: BOLALAR ALIMENTI. Moddalar: OK 96–107, 112, 114–116. */

const LESSON = {
  key: "aliment-bolalar",
  category: "family",
  level: "basic",
  order: 4050,
  title: "Aliment: bolalar ta'minoti",
  desc:
    "Kim, kimga va qancha aliment to'laydi, u qanday hisoblanadi, " +
    "qanday undiriladi va to'lanmasa nima bo'ladi.",
  objectives: [
    "Ota-onaning ta'minlash majburiyati qayerdan kelib chiqishini bilasiz",
    "Aliment miqdori qanday belgilanishini tushunasiz",
    "Qanday daromaddan undirilishini va qo'shimcha xarajatlarni bilasiz",
    "To'lanmaganda qanday choralar ko'rilishini bilasiz",
  ],
  practicalSteps: [
    "Ixtiyoriy to'lovlarni hujjatlashtiring (o'tkazma izohi, tilxat)",
    "Aliment kelishuvini notarial rasmiylashtiring — u ijro hujjati kuchiga ega",
    "To'lovchining ish joyi o'zgarsa ijro organiga xabar bering",
    "Qarz yig'ilsa uni rasmiy hisoblatib oling",
  ],
  sections: [
    {
      heading: "Ota-onaning ta'minlash majburiyati",
      text:
        "Ota-ona o'zining voyaga yetmagan " +
        "bolalarini ta'minlashi SHART. Bu " +
        "majburiyat qonundan kelib chiqadi va " +
        "hech qanday kelishuv uni bekor qila " +
        "olmaydi.\n\n" +
        "⚠️ U ajralishga, nikoh bo'lgan-" +
        "bo'lmaganiga yoki ota-onaning " +
        "bir-biriga munosabatiga BOG'LIQ EMAS.\n\n" +
        "Aliment — jazo emas, bolani ta'minlash " +
        "vositasi. Shuning uchun u bolaning " +
        "manfaatiga xizmat qiladi, ota-onaning " +
        "emas.",
      example:
        "Ota \"u meni ko'rgani qo'ymayapti, " +
        "to'lamayman\" dedi. Ikki masala huquqan " +
        "bog'liq emas — ta'minlash majburiyati " +
        "saqlanadi.",
      keyPoints: [
        "Ota-ona voyaga yetmagan bolani ta'minlashi shart",
        "Majburiyat qonundan kelib chiqadi",
        "U ajralish yoki nikohga bog'liq emas",
        "Aliment jazo emas, ta'minlash vositasi",
      ],
      warning:
        "\"Ko'rishtirmayapti\" degan dalil " +
        "aliment to'lamaslik uchun asos emas.",
      lawRefs: [{ code: "OK", article: "96" }],
    },
    {
      heading: "Ota-ona majburiyatlarining tengligi",
      text:
        "Bolalarga ta'minot berishda ota va " +
        "onaning majburiyatlari TENG.\n\n" +
        "Bu shuni anglatadi: ikkalasi ham " +
        "bolaning ta'minotiga hissa qo'shishi " +
        "kerak; biri bola bilan yashasa ham " +
        "ikkinchisining majburiyati " +
        "yo'qolmaydi; xarajatlar imkoniyatga " +
        "qarab taqsimlanadi.\n\n" +
        "Amalda aliment odatda boladan alohida " +
        "yashovchi ota-onadan undiriladi — " +
        "chunki birga yashovchisi xarajatni " +
        "kundalik ko'taradi.",
      example:
        "Bola ona bilan qoldi. Ona kundalik " +
        "xarajatni ko'taradi, ota esa aliment " +
        "to'laydi — ikkalasining hissasi " +
        "hisobga olinadi.",
      keyPoints: [
        "Ota va onaning majburiyatlari teng",
        "Birga yashash ikkinchisining majburiyatini bekor qilmaydi",
        "Xarajatlar imkoniyatga qarab taqsimlanadi",
        "Aliment odatda alohida yashovchidan undiriladi",
      ],
      warning:
        "Ikkalasi ham alohida yashasa (bola " +
        "qarindoshda bo'lsa) aliment " +
        "ikkalasidan undiriladi.",
      lawRefs: [{ code: "OK", article: "97" }],
    },
    {
      heading: "Aliment to'lash tartibi",
      text:
        "Aliment ikki yo'l bilan to'lanadi: " +
        "IXTIYORIY (kelishuv asosida yoki o'z " +
        "xohishi bilan) va MAJBURIY (sud " +
        "qarori asosida).\n\n" +
        "Ixtiyoriy yo'l har doim afzal: u tez, " +
        "arzon va kamroq ziddiyat " +
        "keltiradi.\n\n" +
        "⚠️ Lekin ixtiyoriy to'lovlarni " +
        "HUJJATLASHTIRISH shart. Aks holda " +
        "keyinchalik \"to'lanmagan\" deb " +
        "hisoblanishi va qarz yig'ilishi " +
        "mumkin.",
      example:
        "Ota har oy naqd pul berdi, hech qanday " +
        "hujjat yo'q. Nizo chiqqanda to'lov " +
        "qilinganini isbotlay olmadi va qarz " +
        "hisoblab chiqildi.",
      keyPoints: [
        "Ixtiyoriy va majburiy yo'llar mavjud",
        "Ixtiyoriy yo'l tez va arzon",
        "To'lovlar hujjatlashtirilishi shart",
        "Hujjatsiz to'lov hisobga olinmasligi mumkin",
      ],
      warning:
        "Naqd berayotgan bo'lsangiz tilxat " +
        "oling; o'tkazma qilsangiz izohda " +
        "\"aliment\" deb yozing.",
      lawRefs: [{ code: "OK", article: "98" }],
    },
    {
      heading: "Aliment miqdori",
      text:
        "Voyaga yetmagan bolalarga to'lanadigan " +
        "aliment miqdori qonunda belgilangan va " +
        "u odatda daromadga nisbatan ULUSH " +
        "shaklida beriladi.\n\n" +
        "Ulush BOLALAR SONIGA qarab o'zgaradi: " +
        "bola qancha ko'p bo'lsa umumiy ulush " +
        "shuncha katta.\n\n" +
        "Aniq ulushlar quyidagi qonun matnida " +
        "— ular o'zgarishi mumkin, shuning " +
        "uchun joriy qiymatni tekshirish " +
        "kerak.",
      example:
        "Ikki bola uchun belgilangan ulush bir " +
        "bolanikidan katta bo'ladi. Uchinchi " +
        "bola tug'ilsa miqdorni qayta ko'rib " +
        "chiqish masalasi ko'tariladi.",
      keyPoints: [
        "Miqdor odatda daromadga nisbatan ulush shaklida",
        "Ulush bolalar soniga qarab o'zgaradi",
        "Aniq ulushlar qonunda ko'rsatilgan",
        "Bolalar soni o'zgarsa miqdor qayta ko'riladi",
      ],
      warning:
        "Ulush foizlari o'zgarishi mumkin — " +
        "hisob-kitobdan oldin joriy qiymatni " +
        "tekshiring.",
      lawRefs: [{ code: "OK", article: "99" }],
    },
    {
      heading: "Voyaga yetgan bolalarga aliment",
      text:
        "Aliment faqat voyaga yetmagan bolalar " +
        "uchun emas. Qonun ota-onaning voyaga " +
        "YETGAN bolalariga aliment to'lashini " +
        "ham nazarda tutadi.\n\n" +
        "Bu odatda bola MEHNATGA LAYOQATSIZ va " +
        "yordamga muhtoj bo'lgan holatlarga " +
        "tegishli.\n\n" +
        "Miqdor alohida moddada belgilanadi va " +
        "u voyaga yetmaganlarnikidan boshqacha " +
        "hisoblanishi mumkin.",
      example:
        "Voyaga yetgan farzand nogironligi " +
        "sababli mehnatga layoqatsiz va " +
        "yordamga muhtoj. Ota-onadan ta'minot " +
        "talab qilish huquqi saqlanadi.",
      keyPoints: [
        "Voyaga yetgan bolalarga ham aliment to'lanishi mumkin",
        "Shart — mehnatga layoqatsizlik va muhtojlik",
        "Miqdor alohida moddada belgilanadi",
        "Hisoblash tartibi boshqacha bo'lishi mumkin",
      ],
      warning:
        "Mehnatga layoqatsizlikni rasmiy hujjat " +
        "bilan tasdiqlash kerak.",
      lawRefs: [
        { code: "OK", article: "100" },
        { code: "OK", article: "101" },
      ],
    },
    {
      heading: "Miqdorni aniqlash tartibi",
      text:
        "Aliment miqdorini aniqlash tartibi " +
        "alohida moddada belgilangan.\n\n" +
        "Ulush usuli har doim ham " +
        "qo'llanilmaydi. QAT'IY PUL SUMMASI " +
        "belgilanadigan holatlar: daromad " +
        "nomuntazam bo'lsa; natura shaklida " +
        "olinsa; chet el valyutasida bo'lsa; " +
        "rasmiy daromadi umuman bo'lmasa.\n\n" +
        "Sud tomonlarning moddiy va oilaviy " +
        "ahvolini hamda boshqa e'tiborga loyiq " +
        "holatlarni hisobga oladi.",
      example:
        "Ota rasmiy ish joyisiz, daromadi " +
        "o'zgaruvchan. Sud ulush emas, qat'iy " +
        "summa belgiladi — bu bola ta'minotini " +
        "barqaror qiladi.",
      keyPoints: [
        "Ulush va qat'iy summa — ikki usul",
        "Nomuntazam daromadda qat'iy summa belgilanadi",
        "Sud moddiy va oilaviy ahvolni hisobga oladi",
        "Aralash usul ham qo'llanilishi mumkin",
      ],
      warning:
        "Daromadni yashirish uzoq muddatda " +
        "ishlamaydi — sud qat'iy summa " +
        "belgilashi mumkin.",
      lawRefs: [{ code: "OK", article: "102" }],
    },
    {
      heading: "Qo'shimcha xarajatlar",
      text:
        "Asosiy alimentdan tashqari QO'SHIMCHA " +
        "xarajatlarni undirish ham mumkin.\n\n" +
        "Bu alohida holatlarda qo'llaniladi: " +
        "bolaning og'ir kasalligi; jarohat; " +
        "davolanish yoki parvarish zarurati; " +
        "qonunda nazarda tutilgan boshqa " +
        "alohida holatlar.\n\n" +
        "⚠️ Bu ko'pincha unutiladigan huquq: " +
        "ota-ona faqat asosiy alimentni bilib, " +
        "qo'shimcha xarajatni talab " +
        "qilmaydi.",
      example:
        "Bola operatsiya bo'ldi va uzoq " +
        "davolandi. Davolanish xarajatlarining " +
        "bir qismini asosiy alimentdan tashqari " +
        "talab qilish mumkin.",
      keyPoints: [
        "Asosiy alimentdan tashqari qo'shimcha xarajat undiriladi",
        "Og'ir kasallik va jarohat asosiy holatlar",
        "Bu ko'pincha unutiladigan huquq",
        "Xarajat hujjat bilan asoslanishi kerak",
      ],
      warning:
        "Davolanish cheklarini saqlang — " +
        "qo'shimcha xarajat faqat hujjat bilan " +
        "undiriladi.",
      lawRefs: [{ code: "OK", article: "103" }],
    },
    {
      heading: "Qanday daromaddan undiriladi",
      text:
        "Aliment undirishda hisobga olinadigan " +
        "daromadlar ro'yxati qonunda " +
        "belgilangan.\n\n" +
        "U keng doirani qamraydi: ish haqi va " +
        "unga tenglashtirilgan to'lovlar; " +
        "mukofot va ustamalar; nafaqa va " +
        "stipendiya; tadbirkorlik faoliyatidan " +
        "olingan daromad; qonunda ko'rsatilgan " +
        "boshqa daromadlar.\n\n" +
        "Ya'ni faqat asosiy maosh emas — " +
        "daromad manbalari kengroq hisobga " +
        "olinadi.",
      example:
        "Ota \"maoshim kam\" dedi, lekin katta " +
        "mukofot olardi. Mukofot ham hisobga " +
        "olinadigan daromadga kiradi.",
      keyPoints: [
        "Hisobga olinadigan daromadlar ro'yxati qonunda",
        "Ish haqi, mukofot, nafaqa va stipendiya kiradi",
        "Tadbirkorlik daromadi ham hisobga olinadi",
        "Faqat asosiy maosh bilan cheklanmaydi",
      ],
      warning:
        "Daromad manbalari to'liq " +
        "ko'rsatilmasa aliment kam hisoblanadi " +
        "— ijro organiga ma'lumot bering.",
      lawRefs: [{ code: "OK", article: "104" }],
    },
    {
      heading: "Miqdorni kamaytirish va ozod qilish",
      text:
        "Aliment miqdorini kamaytirish yoki " +
        "to'lashdan ozod qilish MUMKIN — lekin " +
        "faqat SUD orqali va asosli sabab " +
        "bo'lganda.\n\n" +
        "Odatiy asoslar: to'lovchining moddiy " +
        "yoki oilaviy ahvolining jiddiy " +
        "o'zgarishi; mehnatga layoqatini " +
        "yo'qotishi; boshqa boqimlarning " +
        "paydo bo'lishi.\n\n" +
        "⚠️ Shunchaki to'lashni to'xtatib " +
        "qo'yish huquqbuzarlik — miqdorni " +
        "faqat sud o'zgartiradi.",
      example:
        "Ota daromadi keskin kamaydi. To'g'ri " +
        "yo'l — sudga murojaat qilib miqdorni " +
        "qayta ko'rib chiqtirish; noto'g'ri " +
        "yo'l — to'lashni to'xtatish.",
      keyPoints: [
        "Miqdorni kamaytirish sud orqali amalga oshiriladi",
        "Moddiy va oilaviy ahvol o'zgarishi asos bo'ladi",
        "Sud bo'yicha ozod qilish ham mumkin",
        "O'z-o'zicha to'xtatish huquqbuzarlik",
      ],
      warning:
        "Ahvolingiz o'zgarsa DARHOL sudga " +
        "murojaat qiling — kutish davomida " +
        "qarz yig'iladi.",
      lawRefs: [{ code: "OK", article: "105" }],
    },
    {
      heading: "Ota-ona qaramog'idan mahrum bolalar",
      text:
        "Ota-ona qaramog'idan mahrum bo'lgan " +
        "bolalarga ta'minot berish alohida " +
        "moddada tartibga solingan.\n\n" +
        "Bunday bolalar muassasaga " +
        "joylashtirilgan yoki boshqa shaxs " +
        "tarbiyasida bo'lishi mumkin. " +
        "Ota-onaning ta'minlash majburiyati " +
        "esa YO'QOLMAYDI.\n\n" +
        "Bolalar muassasalariga " +
        "joylashtirilgan bolalar uchun aliment " +
        "undirish tartibi ham alohida " +
        "belgilangan.",
      example:
        "Bola muassasaga joylashtirildi. " +
        "Ota-onadan aliment undirish davom " +
        "etadi va u bolaning hisobiga " +
        "o'tkaziladi.",
      keyPoints: [
        "Qaramog'idan mahrum bolalarga ta'minot alohida tartibga solingan",
        "Ota-onaning majburiyati yo'qolmaydi",
        "Muassasadagi bolalar uchun tartib belgilangan",
        "Aliment bolaning manfaatiga yo'naltiriladi",
      ],
      warning:
        "Ota-onalik huquqidan mahrum qilish " +
        "aliment majburiyatini BEKOR QILMAYDI.",
      lawRefs: [
        { code: "OK", article: "106" },
        { code: "OK", article: "107" },
      ],
    },
    {
      heading: "Nizo hal etilgunga qadar aliment",
      text:
        "Sud jarayoni oylab davom etishi " +
        "mumkin. Shu davrda bola ta'minotsiz " +
        "qolmasligi kerak.\n\n" +
        "Qonun nizo sudda hal etilgunga qadar " +
        "aliment undirish imkoniyatini " +
        "beradi — ya'ni sud yakuniy qaror " +
        "chiqarmasdan oldin ham vaqtinchalik " +
        "to'lovni belgilashi mumkin.\n\n" +
        "⚠️ Bu huquqdan foydalanish uchun " +
        "ALOHIDA iltimosnoma berish kerak — " +
        "u avtomatik qo'llanilmaydi.",
      example:
        "Ajralish ishi bir necha oy davom " +
        "etdi. Ona nizo hal etilgunga qadar " +
        "aliment undirishni so'radi va bola " +
        "shu davrda ta'minotsiz qolmadi.",
      keyPoints: [
        "Nizo hal etilgunga qadar aliment undirilishi mumkin",
        "Bu bolani jarayon davomida himoya qiladi",
        "Alohida iltimosnoma berish kerak",
        "Avtomatik qo'llanilmaydi",
      ],
      warning:
        "Da'vo arizasida shu talabni ham " +
        "yozing — keyinroq so'rash vaqt " +
        "yo'qotadi.",
      lawRefs: [{ code: "OK", article: "112" }],
    },
    {
      heading: "Sud qarorini ijro etish",
      text:
        "Sud qarori chiqdi — endi uni IJRO " +
        "etish kerak.\n\n" +
        "Aliment undirish to'g'risidagi sud " +
        "qarorini ijro etish alohida moddada " +
        "tartibga solingan.\n\n" +
        "Ijro jarayonida ish beruvchi muhim " +
        "rol o'ynaydi: u ijro hujjati asosida " +
        "aliment summasini ish haqidan ushlab " +
        "qolib oluvchiga o'tkazadi.\n\n" +
        "Bir necha hal qiluv qarori bo'lsa " +
        "undiriladigan miqdorni belgilash " +
        "tartibi ham alohida nazarda " +
        "tutilgan.",
      example:
        "Ota ikki turli nikohdan bolalari " +
        "uchun aliment to'laydi. Umumiy " +
        "undiriladigan miqdor belgilangan " +
        "qoidalar bo'yicha hisoblanadi.",
      keyPoints: [
        "Sud qarorini ijro etish alohida tartibga solingan",
        "Ish beruvchi alimentni ushlab qoladi",
        "Bir necha qaror bo'lsa maxsus qoida qo'llaniladi",
        "Ijro hujjati ijro organiga topshiriladi",
      ],
      warning:
        "Sud qarorini olgach uni IJRO ORGANIGA " +
        "topshiring — qarorning o'zi " +
        "avtomatik ishlamaydi.",
      lawRefs: [
        { code: "OK", article: "114" },
        { code: "OK", article: "115" },
      ],
    },
    {
      heading: "To'lashdan bosh tortganlik uchun javobgarlik",
      text:
        "Aliment to'lashdan bosh tortish " +
        "JAVOBGARLIKKA olib keladi va bu " +
        "alohida moddada belgilangan.\n\n" +
        "Javobgarlik bir necha darajada " +
        "bo'lishi mumkin: mulkiy (qarz va " +
        "qo'shimcha to'lovlar); ota-onalik " +
        "huquqidan mahrum qilish uchun asos " +
        "sifatida; qonunda nazarda tutilgan " +
        "boshqa choralar.\n\n" +
        "⚠️ MUHIM: javobgarlikka tortilish " +
        "qarzni BEKOR QILMAYDI — u baribir " +
        "to'lanishi kerak.",
      example:
        "Ota yillar davomida to'lamadi va " +
        "javobgarlikka tortildi. Shunga " +
        "qaramay yig'ilgan qarz saqlanib " +
        "qoldi va undirilishi davom etdi.",
      keyPoints: [
        "Bosh tortish javobgarlikka olib keladi",
        "U ota-onalik huquqidan mahrum qilish asosi bo'lishi mumkin",
        "Javobgarlik qarzni bekor qilmaydi",
        "Choralar bir necha darajada qo'llaniladi",
      ],
      warning:
        "Aliment qarzi vaqt o'tishi bilan " +
        "\"eskirmaydi\" — u yig'ilib boradi.",
      lawRefs: [{ code: "OK", article: "116" }],
    },
  ],
};

module.exports = { LESSON };
