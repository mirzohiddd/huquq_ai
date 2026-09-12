"use strict";
/** OILA MODULI — 6-DARS: ER-XOTIN VA QARINDOSHLAR TA'MINOTI.
 *  Moddalar: OK 108–111, 113, 117–129. Bolalar alimenti 5-darsda. */

const LESSON = {
  key: "aliment-oila",
  category: "family",
  level: "mid",
  order: 4060,
  title: "Ta'minot: er-xotin va boshqa qarindoshlar",
  desc:
    "Er-xotin, bolalar, bobo-buvi va boshqa qarindoshlarning " +
    "bir-birini ta'minlash majburiyatlari.",
  objectives: [
    "Er-xotinning bir-birini ta'minlash majburiyatini bilasiz",
    "Ajralishdan keyin ta'minot olish huquqi kimda ekanini bilasiz",
    "Bolalarning ota-onasini boqish majburiyatini tushunasiz",
    "Boshqa qarindoshlarning majburiyatlarini ajrata olasiz",
  ],
  practicalSteps: [
    "Ta'minot talabini asoslash uchun muhtojlik va layoqatsizlikni hujjatlashtiring",
    "Kelishuvga erishilsa uni notarial rasmiylashtiring",
    "Ahvolingiz o'zgarsa miqdorni qayta ko'rib chiqishni so'rang",
    "Ta'minotdan ozod qilish asoslarini oldindan bilib qo'ying",
  ],
  sections: [
    {
      heading: "Voyaga yetgan bolalarning ota-onaga ta'minoti",
      text:
        "Ta'minot faqat yuqoridan pastga emas. " +
        "Voyaga yetgan, MEHNATGA LAYOQATLI " +
        "bolalar o'z ota-onasini boqishi " +
        "SHART.\n\n" +
        "Shart: ota-ona mehnatga layoqatsiz va " +
        "yordamga muhtoj bo'lishi kerak.\n\n" +
        "Ta'minot miqdori va berish tartibi " +
        "alohida moddada belgilanadi — sud " +
        "tomonlarning moddiy va oilaviy " +
        "ahvolini hisobga oladi.",
      example:
        "Keksa ota nafaqasi yetmay qoldi va " +
        "kasal. Voyaga yetgan farzandlaridan " +
        "ta'minot talab qilish huquqi bor.",
      keyPoints: [
        "Voyaga yetgan bolalar ota-onani boqishi shart",
        "Shart — ota-onaning layoqatsizligi va muhtojligi",
        "Miqdor sud tomonidan belgilanadi",
        "Moddiy va oilaviy ahvol hisobga olinadi",
      ],
      warning:
        "Bu majburiyat farzandlar o'rtasida " +
        "taqsimlanadi — bittasiga yuklanmaydi.",
      lawRefs: [
        { code: "OK", article: "109" },
        { code: "OK", article: "110" },
      ],
    },
    {
      heading: "Ota-ona uchun qo'shimcha xarajatlar",
      text:
        "Asosiy ta'minotdan tashqari ota-ona " +
        "uchun QO'SHIMCHA xarajatlarni " +
        "undirish ham mumkin.\n\n" +
        "Bu og'ir kasallik, jarohat, parvarish " +
        "zarurati kabi alohida holatlarga " +
        "tegishli.\n\n" +
        "Xuddi bolalar bo'yicha bo'lgani kabi, " +
        "bu ham hujjat bilan asoslanishi " +
        "kerak: tibbiy xulosa, cheklar, " +
        "hisob-kitob.",
      example:
        "Keksa onaga doimiy parvarish kerak " +
        "bo'ldi. Asosiy ta'minotdan tashqari " +
        "parvarish xarajatlarini ham undirish " +
        "masalasi ko'tarilishi mumkin.",
      keyPoints: [
        "Asosiy ta'minotdan tashqari qo'shimcha xarajat undiriladi",
        "Og'ir kasallik va parvarish asosiy holatlar",
        "Xarajat hujjat bilan asoslanadi",
        "U barcha farzandlar o'rtasida taqsimlanadi",
      ],
      warning:
        "Tibbiy xulosa va cheklarsiz qo'shimcha " +
        "xarajat undirilmaydi.",
      lawRefs: [{ code: "OK", article: "111" }],
    },
    {
      heading: "Boqish majburiyatidan ozod qilish",
      text:
        "Bolalarni ota-onasini boqish " +
        "majburiyatidan OZOD QILISH mumkin.\n\n" +
        "Bu odatda ota-ona o'z vaqtida " +
        "ota-onalik majburiyatlarini " +
        "bajarmagan holatlarga tegishli — " +
        "masalan ota-onalik huquqidan mahrum " +
        "qilingan yoki boqishdan bo'yin " +
        "tovlagan bo'lsa.\n\n" +
        "Mantiq adolatli: o'z majburiyatini " +
        "bajarmagan ota-ona keyinchalik " +
        "bolasidan talab qila olmaydi.",
      example:
        "Ota bolalikda alimentdan bo'yin " +
        "tovlagan va tarbiyada qatnashmagan. " +
        "Keksayganda farzandidan ta'minot " +
        "talab qildi — sud uni ozod qilishi " +
        "mumkin.",
      keyPoints: [
        "Boqish majburiyatidan ozod qilish mumkin",
        "Asos — ota-onaning o'z majburiyatini bajarmaganligi",
        "Ota-onalik huquqidan mahrumlik ham asos",
        "Buni sud hal qiladi",
      ],
      warning:
        "Ozod qilish avtomatik emas — sudda " +
        "dalil bilan asoslash kerak.",
      lawRefs: [{ code: "OK", article: "113" }],
    },
    {
      heading: "Er-xotinning bir-birini ta'minlashi",
      text:
        "Er-xotin bir-birini moddiy " +
        "qo'llab-quvvatlashi shart. Bu " +
        "majburiyat NIKOH DAVRIDA amal " +
        "qiladi.\n\n" +
        "Ta'minot talab qilish huquqiga odatda " +
        "ega bo'ladi: mehnatga layoqatsiz va " +
        "yordamga muhtoj er (xotin); homilador " +
        "xotin; umumiy bolani parvarish " +
        "qilayotgan er (xotin); qonunda " +
        "nazarda tutilgan boshqa shaxslar.\n\n" +
        "Kelishuv bo'lmasa ta'minot sud " +
        "tartibida undiriladi.",
      example:
        "Xotin homilador va ishlay olmaydi, " +
        "er esa ta'minot bermayapti. Nikoh " +
        "davom etayotgan bo'lsa ham ta'minot " +
        "talab qilish huquqi bor.",
      keyPoints: [
        "Er-xotin bir-birini ta'minlashi shart",
        "Majburiyat nikoh davrida amal qiladi",
        "Layoqatsizlik, homiladorlik va bola parvarishi asos bo'ladi",
        "Kelishuv bo'lmasa sud orqali undiriladi",
      ],
      warning:
        "Bu huquq nikoh davom etayotganda ham " +
        "mavjud — ajralishni kutish shart emas.",
      lawRefs: [{ code: "OK", article: "117" }],
    },
    {
      heading: "Ajralganidan keyin ta'minot olish huquqi",
      text:
        "Ajralish ta'minot huquqini har doim " +
        "ham tugatmaydi. Sobiq er (xotin) " +
        "ma'lum shartlarda ta'minot olish " +
        "huquqini SAQLAB QOLADI.\n\n" +
        "Bu odatda quyidagilarga tegishli: " +
        "nikoh davrida yoki undan keyin " +
        "belgilangan muddat ichida mehnatga " +
        "layoqatsiz bo'lib qolgan sobiq er " +
        "(xotin); homilador sobiq xotin; " +
        "umumiy bolani parvarish qilayotgan " +
        "sobiq er (xotin).\n\n" +
        "Bu — ko'pchilik bilmaydigan huquq.",
      example:
        "Ayol ajrashgandan keyin kichik bolani " +
        "parvarish qilyapti va ishlay olmaydi. " +
        "Belgilangan shartlar bajarilsa u " +
        "ta'minot talab qilishi mumkin.",
      keyPoints: [
        "Ajralish ta'minot huquqini har doim tugatmaydi",
        "Layoqatsizlik, homiladorlik va bola parvarishi asos",
        "Muddat va shartlar qonunda belgilangan",
        "Bu ko'pchilik bilmaydigan huquq",
      ],
      warning:
        "Shartlar va muddatlar qat'iy — ularni " +
        "oldindan tekshiring.",
      lawRefs: [{ code: "OK", article: "118" }],
    },
    {
      heading: "Sud tartibida undiriladigan miqdor",
      text:
        "Er-xotin (sobiq er-xotin)dan sud " +
        "tartibida undiriladigan aliment " +
        "miqdori alohida moddada " +
        "belgilangan.\n\n" +
        "Bolalar alimentidan farqli o'laroq, " +
        "bu yerda odatda QAT'IY PUL SUMMASI " +
        "belgilanadi.\n\n" +
        "Sud tomonlarning moddiy va oilaviy " +
        "ahvolini hamda boshqa e'tiborga " +
        "loyiq holatlarni hisobga oladi.",
      example:
        "Sud sobiq xotinga ta'minot belgiladi. " +
        "Miqdor ulush emas, qat'iy summa " +
        "shaklida va tomonlarning ahvolidan " +
        "kelib chiqib aniqlandi.",
      keyPoints: [
        "Odatda qat'iy pul summasi belgilanadi",
        "Bolalar alimentidan farq qiladi",
        "Moddiy va oilaviy ahvol hisobga olinadi",
        "Boshqa e'tiborga loyiq holatlar ham baholanadi",
      ],
      warning:
        "Ahvolingiz o'zgarsa miqdorni qayta " +
        "ko'rib chiqishni so'rash mumkin.",
      lawRefs: [{ code: "OK", article: "119" }],
    },
    {
      heading: "Ta'minot majburiyatidan ozod qilish yoki cheklash",
      text:
        "Sud er yoki xotinni bir-biriga " +
        "ta'minot berish majburiyatidan OZOD " +
        "qilishi yoki bu majburiyatni MUAYYAN " +
        "MUDDAT bilan cheklashi mumkin.\n\n" +
        "Odatiy asoslar: nikoh qisqa muddat " +
        "davom etganligi; ta'minot talab " +
        "qilayotgan tomonning nomunosib " +
        "xatti-harakati; layoqatsizlik uning " +
        "o'z aybi bilan yuzaga kelganligi " +
        "(masalan spirtli ichimlik yoki " +
        "giyohvandlik).\n\n" +
        "Bu norma suiiste'molning oldini " +
        "oladi.",
      example:
        "Nikoh bir necha oy davom etdi va " +
        "sobiq xotin umrbod ta'minot talab " +
        "qildi. Sud majburiyatni muddat bilan " +
        "cheklashi mumkin.",
      keyPoints: [
        "Sud ta'minot majburiyatidan ozod qilishi mumkin",
        "Uni muddat bilan cheklash ham mumkin",
        "Qisqa nikoh va nomunosib xatti-harakat asos bo'ladi",
        "Norma suiiste'molning oldini oladi",
      ],
      warning:
        "Ozod qilish yoki cheklashni so'rasangiz " +
        "asosni dalil bilan ko'rsating.",
      lawRefs: [{ code: "OK", article: "120" }],
    },
    {
      heading: "Ta'minot olish huquqining tugashi",
      text:
        "Er (xotin)ning aliment olish huquqi " +
        "muayyan holatlarda TUGAYDI.\n\n" +
        "Odatiy asoslar: mehnat qobiliyatining " +
        "tiklanishi yoki muhtojlikning " +
        "yo'qolishi; ta'minot oluvchining " +
        "YANGI NIKOHGA kirishi; qonunda " +
        "nazarda tutilgan boshqa holatlar.\n\n" +
        "⚠️ Yangi nikoh asosi amalda muhim: " +
        "ta'minot to'lovchi bu haqda bilib " +
        "qolsa to'lovni to'xtatish uchun " +
        "murojaat qilishi mumkin.",
      example:
        "Sobiq xotin ta'minot olardi va yangi " +
        "nikoh tuzdi. Bu ta'minot huquqining " +
        "tugashi uchun asos bo'ladi.",
      keyPoints: [
        "Ta'minot huquqi muayyan holatlarda tugaydi",
        "Layoqat tiklanishi va muhtojlikning yo'qolishi asos",
        "Yangi nikoh ham huquqni tugatadi",
        "To'lovni to'xtatish uchun murojaat kerak",
      ],
      warning:
        "Huquq tugagan bo'lsa ham to'lov " +
        "avtomatik to'xtamaydi — rasmiy " +
        "murojaat qiling.",
      lawRefs: [{ code: "OK", article: "121" }],
    },
    {
      heading: "Bobo va buvining nevaralarga ta'minoti",
      text:
        "Ta'minot majburiyati faqat ota-ona " +
        "va bolalar bilan cheklanmaydi. " +
        "Qonun boshqa qarindoshlarni ham " +
        "qamraydi.\n\n" +
        "Bobo va buvi muayyan shartlarda " +
        "nevaralariga ta'minot berishi " +
        "mumkin. Bu odatda ota-onadan " +
        "ta'minot olish imkoni bo'lmagan " +
        "hollarda qo'llaniladi.\n\n" +
        "Ya'ni bu IKKINCHI DARAJALI " +
        "majburiyat: avval ota-ona, keyin " +
        "boshqa qarindoshlar.",
      example:
        "Bolaning ota-onasi vafot etgan va " +
        "boshqa manba yo'q. Bobo-buvidan " +
        "ta'minot talab qilish masalasi " +
        "ko'tarilishi mumkin.",
      keyPoints: [
        "Bobo-buvi nevaralarga ta'minot berishi mumkin",
        "Bu ikkinchi darajali majburiyat",
        "Ota-onadan olish imkoni bo'lmaganda qo'llaniladi",
        "Shartlar qonunda belgilangan",
      ],
      warning:
        "Bu majburiyat ota-onanikini " +
        "almashtirmaydi — u faqat " +
        "to'ldiradi.",
      lawRefs: [
        { code: "OK", article: "123" },
        { code: "OK", article: "122" },
      ],
    },
    {
      heading: "Nevaralarning bobo va buviga ta'minoti",
      text:
        "Teskari majburiyat ham mavjud: " +
        "nevaralar bobo va buvilariga " +
        "ta'minot berishi mumkin.\n\n" +
        "Shartlar odatiy: bobo yoki buvi " +
        "mehnatga layoqatsiz va yordamga " +
        "muhtoj bo'lishi; nevaralarda " +
        "buning imkoniyati bo'lishi; " +
        "boshqa manbalardan ta'minot olish " +
        "imkoni bo'lmasligi.\n\n" +
        "Bu ham ikkinchi darajali " +
        "majburiyat — avval bolalari, " +
        "keyin nevaralari.",
      example:
        "Keksa buvining farzandlari vafot " +
        "etgan. Voyaga yetgan nevaralaridan " +
        "ta'minot talab qilish masalasi " +
        "ko'tarilishi mumkin.",
      keyPoints: [
        "Nevaralar bobo-buviga ta'minot berishi mumkin",
        "Shart — layoqatsizlik va muhtojlik",
        "Nevaralarda imkoniyat bo'lishi kerak",
        "Bu ikkinchi darajali majburiyat",
      ],
      warning:
        "Talab uchun boshqa manbalar yo'qligi " +
        "isbotlanishi kerak.",
      lawRefs: [{ code: "OK", article: "124" }],
    },
    {
      heading: "Aka-uka va opa-singillarning majburiyati",
      text:
        "Aka-uka va opa-singillar ham " +
        "bir-biriga ta'minot berishi " +
        "mumkin.\n\n" +
        "Bu voyaga yetmagan yoki voyaga " +
        "yetgan mehnatga layoqatsiz " +
        "aka-uka hamda opa-singillarga " +
        "nisbatan qo'llaniladi.\n\n" +
        "Shartlar: ta'minot oluvchining " +
        "muhtojligi; ota-ona yoki " +
        "er-xotindan ta'minot olish " +
        "imkoni bo'lmasligi; ta'minot " +
        "beruvchining imkoniyati.",
      example:
        "Voyaga yetmagan uka ota-onasiz " +
        "qoldi va boshqa manba yo'q. " +
        "Voyaga yetgan akadan ta'minot " +
        "talab qilish masalasi " +
        "ko'tarilishi mumkin.",
      keyPoints: [
        "Aka-uka va opa-singillar ta'minot berishi mumkin",
        "Voyaga yetmagan va layoqatsizlarga nisbatan",
        "Boshqa manba bo'lmaganda qo'llaniladi",
        "Beruvchining imkoniyati hisobga olinadi",
      ],
      warning:
        "Bu majburiyat ham ikkinchi " +
        "darajali — avval yaqinroq " +
        "qarindoshlar.",
      lawRefs: [{ code: "OK", article: "125" }],
    },
    {
      heading: "Tarbiyachilar va o'gay ota-onalar",
      text:
        "Qonun qon-qarindosh bo'lmagan " +
        "shaxslar o'rtasidagi ta'minot " +
        "majburiyatlarini ham nazarda " +
        "tutadi.\n\n" +
        "DOIMIY TARBIYADA bo'lganlar o'z " +
        "tarbiyachilariga ta'minot berishi " +
        "mumkin.\n\n" +
        "O'GAY ota va o'gay ona o'gay " +
        "o'g'il va qizlariga, o'gay " +
        "farzandlar esa o'gay ota-onaga " +
        "ta'minot berishi mumkin.\n\n" +
        "Bu normalar amalda tarbiya va " +
        "g'amxo'rlik ko'rsatgan shaxslarni " +
        "himoya qiladi.",
      example:
        "O'gay ota bolani yillar davomida " +
        "tarbiyaladi va ta'minladi. " +
        "Keksayganda undan ta'minot talab " +
        "qilish masalasi ko'tarilishi " +
        "mumkin.",
      keyPoints: [
        "Tarbiyachilarga ta'minot berish majburiyati bor",
        "O'gay ota-ona va farzandlar o'rtasida ham",
        "Normalar amaldagi tarbiyani hisobga oladi",
        "Shartlar qonunda belgilangan",
      ],
      warning:
        "Tarbiya va ta'minlash faktini " +
        "isbotlash kerak — guvohlar va " +
        "hujjatlar.",
      lawRefs: [
        { code: "OK", article: "126" },
        { code: "OK", article: "127" },
        { code: "OK", article: "128" },
      ],
    },
    {
      heading: "Qarindoshlardan undiriladigan miqdor",
      text:
        "Qarindoshlar va boshqa shaxslardan " +
        "undiriladigan alimentning miqdori " +
        "alohida moddada belgilangan.\n\n" +
        "Sud hisobga oladi: ta'minot " +
        "oluvchining moddiy va oilaviy " +
        "ahvoli; ta'minot beruvchining " +
        "imkoniyati; majburiyatga ega " +
        "shaxslar soni.\n\n" +
        "⚠️ Muhim: agar bir necha shaxs " +
        "majburiyatga ega bo'lsa, sud " +
        "yukni ular o'rtasida " +
        "taqsimlashi mumkin — hattoki " +
        "ulardan biriga talab qo'yilgan " +
        "bo'lsa ham.",
      example:
        "Keksa onaga uch farzand bor, " +
        "lekin da'vo faqat bittasiga " +
        "qo'yildi. Sud yukni uchalasi " +
        "o'rtasida taqsimlashni hisobga " +
        "olishi mumkin.",
      keyPoints: [
        "Miqdor alohida moddada belgilanadi",
        "Ikkala tomonning ahvoli hisobga olinadi",
        "Majburiyatga ega shaxslar soni hisobga olinadi",
        "Yuk ular o'rtasida taqsimlanishi mumkin",
      ],
      warning:
        "Boshqa majburiyatga ega " +
        "qarindoshlar borligini sudga " +
        "aytish sizning foydangizga " +
        "ishlaydi.",
      lawRefs: [{ code: "OK", article: "129" }],
    },
    {
      heading: "Voyaga yetgan layoqatsiz bolalarning huquqi",
      text:
        "Voyaga yetgan mehnatga layoqatsiz " +
        "bolalar ta'minot talab qilish " +
        "huquqiga ega.\n\n" +
        "Shartlar: mehnatga layoqatsizlik " +
        "(rasmiy tasdiqlangan); yordamga " +
        "muhtojlik.\n\n" +
        "Bu huquq bolaning yoshi " +
        "kattaligiga qaramay saqlanadi — " +
        "chunki asos yosh emas, MEHNAT " +
        "QOBILIYATI.\n\n" +
        "Voyaga yetmagan va voyaga yetgan " +
        "layoqatsiz shaxslarga ta'minot " +
        "berish majburiyati alohida " +
        "moddada umumlashtirilgan.",
      example:
        "30 yoshli farzand nogironlik " +
        "sababli mehnatga layoqatsiz va " +
        "muhtoj. Ota-onadan ta'minot talab " +
        "qilish huquqi saqlanadi.",
      keyPoints: [
        "Voyaga yetgan layoqatsiz bolalar ta'minot talab qila oladi",
        "Asos yosh emas, mehnat qobiliyati",
        "Layoqatsizlik rasmiy tasdiqlanishi kerak",
        "Muhtojlik ham shart hisoblanadi",
      ],
      warning:
        "Layoqatsizlikni tibbiy-ijtimoiy " +
        "ekspertiza xulosasi bilan " +
        "tasdiqlang.",
      lawRefs: [
        { code: "OK", article: "108" },
        { code: "OK", article: "122" },
      ],
    },
  ],
};

module.exports = { LESSON };
