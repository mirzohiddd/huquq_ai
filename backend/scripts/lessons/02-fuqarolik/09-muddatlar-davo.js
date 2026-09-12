"use strict";
/** FUQAROLIK MODULI — 9-DARS: MUDDATLAR VA DA'VO MUDDATI. FK 145–163. */

const LESSON = {
  key: "muddatlar-davo",
  category: "civil",
  level: "mid",
  order: 2090,
  title: "Muddatlar va da'vo muddati",
  desc:
    "Muddat qanday hisoblanadi, da'vo muddati nima, u qachon " +
    "boshlanadi, qanday to'xtatiladi va uziladi, tiklash imkoniyati " +
    "hamda da'vo muddati qo'llanilmaydigan talablar.",
  objectives: [
    "Muddat boshlanishi va tugashini to'g'ri hisoblay olasiz",
    "Da'vo muddati nima ekanini va u nima uchun kerakligini bilasiz",
    "Da'vo muddati qachon o'ta boshlashini aniqlay olasiz",
    "To'xtatish va uzilish farqini tushunasiz",
    "Muddatni tiklash imkoniyatini bilasiz",
    "Da'vo muddati qo'llanilmaydigan talablarni bilasiz",
  ],
  practicalSteps: [
    "Huquqingiz buzilgan sanani darhol yozib qo'ying — muddat shundan boshlanadi",
    "Qarzdordan yozma tan olish (xat, to'lov, imzo) olishga harakat qiling",
    "Muddat tugashiga yaqinlashsa kutmang — da'vo arizasini bering",
    "Yozishmalarni sana bilan saqlang: ular muddat uzilishini isbotlaydi",
    "Kasallik yoki boshqa uzrli sabab bo'lsa hujjatini saqlang",
  ],
  sections: [
    {
      heading: "Muddat qanday belgilanadi",
      text:
        "Qonun, bitim yoki sud belgilagan MUDDAT kalendar sana bilan " +
        "yoki yillar, oylar, haftalar, kunlar va soatlar bilan " +
        "hisoblanadigan vaqt davri o'tishi bilan belgilanadi.\n\n" +
        "Muddat, shuningdek, muqarrar ro'y berishi kerak bo'lgan " +
        "voqea ko'rsatilishi bilan ham belgilanishi mumkin.\n\n" +
        "⚠️ SO'NGGI SHARTGA E'TIBOR BERING — VOQEA MUQARRAR " +
        "BO'LISHI KERAK. \"Mablag' tushganda to'layman\" degan " +
        "shart muddat emas, chunki mablag' tushishi muqarrar " +
        "emas. Bunday shart amalda to'lovni cheksiz " +
        "kechiktirishga imkon beradi.\n\n" +
        "AMALIY XULOSA: shartnomada muddatni har doim ANIQ SANA " +
        "yoki aniq kunlar soni bilan yozing. \"Imkon bo'lganda\", " +
        "\"tez orada\", \"ish tugagach\" kabi iboralar nizoga " +
        "olib keladi va sudda ularni aniqlash qiyin bo'ladi.",
      example:
        "Shartnomada \"pul tushishi bilan to'lanadi\" deb " +
        "yozilgan — to'lov muddati amalda belgilanmagan " +
        "hisoblanadi.",
      keyPoints: [
        "Muddat sana yoki vaqt davri bilan belgilanadi",
        "Muqarrar voqea ham muddat belgilashi mumkin",
        "Muqarrar bo'lmagan voqea muddat emas",
        "Shartnomada aniq sana yoki kunlar sonini yozing",
      ],
      warning:
        "Noaniq muddat — to'lovni cheksiz kechiktirishning eng " +
        "keng tarqalgan usuli.",
      lawRefs: [{ code: "FK", article: "145" }],
    },
    {
      heading: "Muddat qanday hisoblanadi",
      text:
        "Vaqt davri bilan belgilangan muddatning o'tishi uning " +
        "boshlanishi aniqlangan kalendar sanadan yoki voqea ro'y " +
        "bergan kundan KEYINGI kunda boshlanadi.\n\n" +
        "⚠️ YA'NI HODISA KUNINING O'ZI HISOBGA OLINMAYDI. Bu " +
        "kichik ko'ringan tafsilot amalda muddatni bir kunga " +
        "surib beradi va chegaradagi holatlarda hal qiluvchi " +
        "bo'ladi.\n\n" +
        "TUGASHI: yil bilan hisoblanadigan muddat muddatning " +
        "oxirgi yilidagi tegishli oy va kunda tugaydi; oy bilan " +
        "hisoblanadigan muddat oxirgi oyning tegishli kunida " +
        "tugaydi.\n\n" +
        "Agar oxirgi oyda tegishli kun bo'lmasa, muddat o'sha " +
        "oyning oxirgi kunida tugaydi.\n\n" +
        "DAM OLISH KUNI: muddatning oxirgi kuni ish kuni bo'lmagan " +
        "kunga to'g'ri kelsa, muddatning tugash kuni undan " +
        "keyingi ish kuni hisoblanadi.\n\n" +
        "OXIRGI KUNDAGI HARAKAT: harakat muddatning oxirgi kuni " +
        "tegishli tashkilotning ish vaqti tugagunga qadar amalga " +
        "oshirilishi kerak. Yozma xabar aloqa tashkilotiga " +
        "muddatning oxirgi kuni soat yigirma to'rtgacha " +
        "topshirilgan bo'lsa, muddat o'tkazib yuborilmagan " +
        "hisoblanadi.",
      example:
        "Muddatning oxirgi kuni dam olish kuniga to'g'ri keldi — " +
        "keyingi ish kuni ham o'z vaqtida hisoblanadi.",
      keyPoints: [
        "Muddat hodisa kunidan keyingi kunda boshlanadi",
        "Yil va oy muddatlari tegishli kunda tugaydi",
        "Dam olish kuniga to'g'ri kelsa keyingi ish kuniga o'tadi",
        "Pochtaga topshirish oxirgi kunda ham hisobga olinadi",
      ],
      warning:
        "Muddatning oxirgi kunini kutish xavfli — bir kunlik " +
        "xato huquqni yo'qotadi.",
      lawRefs: [
        { code: "FK", article: "146" },
        { code: "FK", article: "147" },
        { code: "FK", article: "148" },
      ],
    },
    {
      heading: "Da'vo muddati nima va u nima uchun kerak",
      text:
        "DA'VO MUDDATI — huquqi buzilgan shaxsning da'vosi bo'yicha " +
        "huquqni himoya qilish uchun belgilangan muddat.\n\n" +
        "⚠️ NIMA UCHUN BU BOR: vaqt o'tishi bilan dalillar " +
        "yo'qoladi, guvohlar unutadi, hujjatlar saqlanmaydi. " +
        "Cheksiz muddat munosabatlarni doimiy noaniqlikda " +
        "qoldirardi. Ya'ni bu qoida adolatga zid emas — u " +
        "barqarorlikni ta'minlaydi.\n\n" +
        "UMUMIY DA'VO MUDDATI qonunda belgilangan va u " +
        "talablarning aksariyatiga qo'llaniladi.\n\n" +
        "MAXSUS DA'VO MUDDATLARI ayrim toifadagi talablar uchun " +
        "belgilanadi — ular umumiy muddatdan qisqaroq yoki " +
        "uzunroq bo'lishi mumkin.\n\n" +
        "AMALIY XULOSA: har bir talab uchun muddat aynan qanday " +
        "ekanini oldindan aniqlang. \"Umumiy muddat bor\" degan " +
        "taxminga tayanish xavfli — masalan tovar sifati yoki " +
        "tashish bilan bog'liq talablarda muddat ancha qisqa " +
        "bo'lishi mumkin.",
      example:
        "Talab bo'yicha qisqa maxsus muddat belgilangan edi, " +
        "shaxs esa umumiy muddatga tayandi — da'vo kech " +
        "berildi.",
      keyPoints: [
        "Da'vo muddati — sud himoyasi uchun belgilangan muddat",
        "U dalillarni saqlash va barqarorlik uchun kerak",
        "Umumiy va maxsus muddatlar mavjud",
        "Har bir talab uchun muddatni alohida aniqlang",
      ],
      warning:
        "Maxsus muddatlar ko'pincha qisqa — ularni umumiy muddat " +
        "deb o'ylash keng tarqalgan xato.",
      lawRefs: [
        { code: "FK", article: "149" },
        { code: "FK", article: "150" },
        { code: "FK", article: "151" },
      ],
    },
    {
      heading: "Da'vo muddatini o'zgartirish mumkinmi",
      text:
        "Da'vo muddatlari va ularni hisoblash tartibi TOMONLARNING " +
        "KELISHUVI bilan o'zgartirilishi mumkin emas — bunday " +
        "bitim HAQIQIY SANALMAYDI.\n\n" +
        "⚠️ NIMA UCHUN BU QOIDA MUHIM: kuchli tomon " +
        "shartnomada \"barcha talablar bir oy ichida qo'yiladi\" " +
        "kabi shart yozib, kuchsiz tomonni himoyadan mahrum " +
        "qila olardi. Qonun bunga yo'l qo'ymaydi.\n\n" +
        "Ya'ni shartnomada da'vo muddatini qisqartiruvchi (yoki " +
        "uzaytiruvchi) shart bo'lsa, u ISHLAMAYDI va qonuniy " +
        "muddat qo'llaniladi.\n\n" +
        "QO'LLASH TARTIBI: da'vo muddati SUD tomonidan faqat " +
        "NIZODAGI TOMONNING ARIZASIGA binoan qo'llaniladi.\n\n" +
        "BU AMALDA JUDA MUHIM: sud o'zi tashabbus ko'rsatib " +
        "\"muddat o'tgan\" demaydi. Javobgar bu haqda arizani " +
        "sud qaror chiqarguniga qadar bildirishi kerak.\n\n" +
        "IKKI TOMONGA XULOSA: da'vogar sifatida — muddat " +
        "o'tgan bo'lsa ham da'vo qo'yish ma'noli bo'lishi " +
        "mumkin; javobgar sifatida — muddat o'tgani haqida " +
        "arizani albatta bildiring, aks holda sud uni hisobga " +
        "olmaydi.",
      example:
        "Javobgar muddat o'tgani haqida ariza bermadi — sud " +
        "ishni mohiyati bo'yicha ko'rib chiqdi.",
      keyPoints: [
        "Da'vo muddatini kelishuv bilan o'zgartirib bo'lmaydi",
        "Bunday shart haqiqiy sanalmaydi",
        "Sud muddatni faqat ariza bo'yicha qo'llaydi",
        "Ariza qaror chiqarilgunga qadar bildirilishi kerak",
      ],
      warning:
        "Javobgar sifatida muddat haqida jim qolish — himoyani " +
        "yo'qotish.",
      lawRefs: [
        { code: "FK", article: "152" },
        { code: "FK", article: "153" },
      ],
    },
    {
      heading: "Da'vo muddati qachon o'ta boshlaydi",
      text:
        "Bu — butun mavzudagi eng muhim savol.\n\n" +
        "Da'vo muddatining o'tishi shaxs o'z huquqi BUZILGANINI " +
        "BILGAN yoki BILISHI KERAK BO'LGAN kundan boshlanadi.\n\n" +
        "⚠️ E'TIBOR BERING: huquq buzilgan kundan emas, BILGAN " +
        "kundan. Bu farq amalda katta ahamiyatga ega — " +
        "buzilishdan xabar topish ancha keyin bo'lishi " +
        "mumkin.\n\n" +
        "LEKIN \"BILISHI KERAK BO'LGAN\" iborasi bu himoyani " +
        "cheklaydi: agar oddiy ehtiyotkorlik bilan bilish mumkin " +
        "bo'lgan bo'lsa, \"men bilmadim\" degan dalil " +
        "ishlamaydi.\n\n" +
        "AYRIM HOLATLAR UCHUN QOIDALAR: bajarilish muddati aniq " +
        "belgilangan majburiyatlarda muddat o'sha muddat " +
        "tugagandan keyin boshlanadi; talab qilib olinguncha " +
        "bajariladigan majburiyatlarda esa kreditor talab " +
        "qo'yish huquqiga ega bo'lgan paytdan.\n\n" +
        "SHAXSLAR ALMASHINSA: majburiyatdagi shaxslar " +
        "almashinishi (masalan talab boshqa shaxsga o'tishi) " +
        "da'vo muddatini va uni hisoblash tartibini " +
        "O'ZGARTIRMAYDI. Ya'ni qarzni sotib olgan yangi kreditor " +
        "uchun muddat qaytadan boshlanmaydi.",
      example:
        "Qarz shartnomada belgilangan sanada to'lanmadi — " +
        "muddat aynan o'sha sanadan keyin o'ta boshlaydi.",
      keyPoints: [
        "Muddat huquq buzilganini bilgan kundan boshlanadi",
        "\"Bilishi kerak bo'lgan\" holat ham hisobga olinadi",
        "Aniq muddatli majburiyatda — muddat tugagach",
        "Kreditor almashinishi muddatni o'zgartirmaydi",
      ],
      warning:
        "Talabni sotib olayotganda uning muddati qancha " +
        "qolganini albatta tekshiring.",
      lawRefs: [
        { code: "FK", article: "154" },
        { code: "FK", article: "155" },
      ],
    },
    {
      heading: "Da'vo muddatining to'xtatilishi",
      text:
        "Muayyan holatlar mavjud bo'lganda da'vo muddatining " +
        "o'tishi TO'XTATILADI.\n\n" +
        "Asosiy asoslar: favqulodda va oldini olib bo'lmaydigan " +
        "holat (yengib bo'lmaydigan kuch) da'vo qo'yishga to'sqinlik " +
        "qilsa; da'vogar yoki javobgar harbiy holatga " +
        "o'tkazilgan Qurolli Kuchlar tarkibida bo'lsa; " +
        "majburiyatlarni bajarishni kechiktirish (moratoriy) " +
        "belgilangan bo'lsa; tegishli munosabatni tartibga " +
        "soluvchi qoidaning amal qilishi to'xtatilgan bo'lsa.\n\n" +
        "⚠️ MOHIYATI: to'xtatish davrida vaqt HISOBLANMAYDI. " +
        "To'siq yo'qolgach, muddat DAVOM ETADI — ya'ni " +
        "boshidan boshlanmaydi.\n\n" +
        "Bu \"uzilish\"dan asosiy farqi va uni chalkashtirmaslik " +
        "kerak.\n\n" +
        "Qonunda to'xtatish asoslari muddatning oxirgi " +
        "davrida yuzaga kelishi talabi va to'siq yo'qolgandan " +
        "keyingi qolgan muddat bo'yicha maxsus qoidalar " +
        "belgilangan.\n\n" +
        "MAXSUS DA'VO MUDDATLARI uchun to'xtatish, uzilish va " +
        "tiklash qoidalari alohida tartibga solingan.",
      example:
        "Favqulodda holat sababli sudlar ishlamadi — bu davr " +
        "muddat hisobiga kirmaydi.",
      keyPoints: [
        "To'xtatish davrida vaqt hisoblanmaydi",
        "To'siq yo'qolgach muddat davom etadi",
        "Asoslar: yengib bo'lmas kuch, moratoriy va boshqalar",
        "To'xtatish uzilishdan farq qiladi",
      ],
      warning:
        "To'xtatish asosini hujjat bilan tasdiqlash kerak — " +
        "og'zaki dalil yetarli emas.",
      lawRefs: [
        { code: "FK", article: "156" },
        { code: "FK", article: "160" },
      ],
    },
    {
      heading: "Da'vo muddatining uzilishi va tan olish",
      text:
        "Da'vo muddatining o'tishi ikki asosda UZILADI: belgilangan " +
        "tartibda DA'VO QO'YILISHI va qarzdorning qarzni TAN " +
        "OLISHINI ko'rsatuvchi harakatlar qilishi.\n\n" +
        "⚠️ ENG MUHIM FARQ: uzilishdan keyin muddat QAYTADAN " +
        "boshlanadi. Uzilishgacha o'tgan vaqt yangi muddatga " +
        "KIRITILMAYDI.\n\n" +
        "Ya'ni qarzdor qarzni tan olsa, muddat nol nuqtadan " +
        "qayta boshlanadi. Bu kreditor uchun juda kuchli " +
        "vosita.\n\n" +
        "TAN OLISH QANDAY KO'RINISHDA BO'LADI: qarzning bir " +
        "qismini to'lash; solishtirma dalolatnomani imzolash; " +
        "muddatni uzaytirish so'rovi; qarzni yozma tasdiqlash; " +
        "foizlarni to'lash.\n\n" +
        "AMALIY MASLAHAT KREDITORGA: muddat tugashiga yaqin " +
        "qolganda qarzdordan yozma tasdiq (solishtirma " +
        "dalolatnoma, kafolat xati, qisman to'lov) olishga " +
        "harakat qiling — bu muddatni tiklaydi.\n\n" +
        "DA'VO KO'RILMASDAN QOLDIRILSA: bu holatda muddat " +
        "o'tishi bo'yicha alohida qoida qo'llaniladi — ya'ni " +
        "da'vo berilgani har doim ham muddatni to'liq uzmaydi.",
      example:
        "Qarzdor solishtirma dalolatnomani imzoladi — da'vo " +
        "muddati shu sanadan qaytadan boshlanadi.",
      keyPoints: [
        "Uzilishdan keyin muddat qaytadan boshlanadi",
        "Da'vo qo'yish va qarzni tan olish uziladi",
        "Qisman to'lov ham tan olish hisoblanadi",
        "Da'vo ko'rilmasdan qoldirilsa alohida qoida qo'llaniladi",
      ],
      warning:
        "Qarzdor sifatida \"biroz to'lab qo'yay\" degan qadam " +
        "muddatni qaytadan boshlaydi.",
      lawRefs: [
        { code: "FK", article: "157" },
        { code: "FK", article: "158" },
      ],
    },
    {
      heading: "Da'vo muddatini tiklash",
      text:
        "Sud da'vo muddatining o'tkazib yuborilish sababini UZRLI " +
        "deb topsa, buzilgan huquq himoya qilinishi mumkin — " +
        "ya'ni muddat TIKLANADI.\n\n" +
        "⚠️ BU ISTISNO, QOIDA EMAS. Unga tayanib ish tutish " +
        "xavfli: uzrli sabab tor talqin qilinadi.\n\n" +
        "Uzrli deb topilishi mumkin bo'lgan holatlar odatda " +
        "DA'VOGARNING SHAXSI bilan bog'liq bo'ladi: og'ir " +
        "kasallik, nochor holat, savodsizlik va shu kabi " +
        "sabablar.\n\n" +
        "MUHIM CHEKLOV: sabab muddatning oxirgi davrida " +
        "yuzaga kelgan bo'lishi kerak — ya'ni butun muddat " +
        "davomida da'vo qo'yish mumkin bo'lgan bo'lsa, " +
        "keyingi kasallik muddatni tiklamaydi.\n\n" +
        "SHUNINGDEK: sabab HUJJAT bilan tasdiqlanishi kerak. " +
        "\"Vaqtim bo'lmadi\", \"bilmadim\", \"kutdim\" kabi " +
        "sabablar uzrli deb topilmaydi.\n\n" +
        "AMALIY XULOSA: muddatni tiklashga umid qilib " +
        "kechiktirmang. Da'voni muddat ichida berish — yagona " +
        "ishonchli yo'l.",
      example:
        "Uzoq davolanish hujjatlar bilan tasdiqlandi — sud " +
        "muddatni tiklashi mumkin.",
      keyPoints: [
        "Muddat uzrli sabab bo'lsa tiklanishi mumkin",
        "Bu istisno va tor talqin qilinadi",
        "Sabab da'vogarning shaxsi bilan bog'liq bo'lishi kerak",
        "Sabab hujjat bilan tasdiqlanadi",
      ],
      warning:
        "\"Keyinroq tiklataman\" degan reja deyarli hech qachon " +
        "ishlamaydi.",
      lawRefs: [{ code: "FK", article: "159" }],
    },
    {
      heading: "Muddat o'tgach nima bo'ladi",
      text:
        "Da'vo muddati o'tishi huquqni YO'Q QILMAYDI — u faqat " +
        "SUD ORQALI majburan amalga oshirish imkonini " +
        "cheklaydi.\n\n" +
        "⚠️ AMALIY OQIBAT MUHIM: da'vo muddati o'tganidan keyin " +
        "majburiyatni bajargan qarzdor bajarilgan narsani " +
        "QAYTARIB TALAB QILA OLMAYDI — hatto bajarish paytida " +
        "muddat o'tganini bilmagan bo'lsa ham.\n\n" +
        "Ya'ni to'lov qonuniy asosga ega hisoblanadi va u " +
        "\"asossiz boyish\" deb qaralmaydi.\n\n" +
        "QO'SHIMCHA TALABLAR: asosiy talab bo'yicha muddat " +
        "o'tgan bo'lsa, qo'shimcha talablar (neustoyka, garov, " +
        "kafillik va shu kabilar) bo'yicha ham muddat o'tgan " +
        "hisoblanadi.\n\n" +
        "BU JUDA MUHIM: asosiy qarz bo'yicha muddatni o'tkazib " +
        "yuborgan kreditor faqat foizlarni undirish " +
        "imkoniyatini ham yo'qotadi.\n\n" +
        "XULOSA: muddat butun talablar to'plamini bir vaqtda " +
        "tugatadi — shuning uchun uni kuzatib borish kreditor " +
        "uchun asosiy intizom masalasi.",
      example:
        "Muddat o'tgach qarzdor to'lovni amalga oshirdi — u " +
        "keyinchalik pulni qaytarishni talab qila olmaydi.",
      keyPoints: [
        "Muddat o'tishi huquqni yo'q qilmaydi",
        "Muddatdan keyin bajarilgan narsa qaytarilmaydi",
        "Qo'shimcha talablar asosiy talab bilan birga tugaydi",
        "Muddatni kuzatib borish kreditor mas'uliyati",
      ],
      warning:
        "Asosiy qarz muddati o'tsa neustoyka ham undirilmaydi.",
      lawRefs: [
        { code: "FK", article: "161" },
        { code: "FK", article: "162" },
      ],
    },
    {
      heading: "Da'vo muddati qo'llanilmaydigan talablar",
      text:
        "Ayrim talablarga da'vo muddati UMUMAN joriy " +
        "qilinmaydi.\n\n" +
        "Bunday talablar qatoriga kiradi: shaxsiy nomulkiy " +
        "huquqlarni va boshqa nomoddiy ne'matlarni himoya " +
        "qilish to'g'risidagi talablar (qonunda nazarda " +
        "tutilgan hollardan tashqari); omonatchilarning bankka " +
        "omonatlarni berish haqidagi talablari; fuqaroning " +
        "hayoti yoki sog'lig'iga yetkazilgan zararni qoplash " +
        "to'g'risidagi talablar; mulkdorning egalik qilishdan " +
        "mahrum etish bilan bog'liq bo'lmagan huquqbuzarliklarni " +
        "bartaraf etish haqidagi talablari.\n\n" +
        "⚠️ HAYOT VA SOG'LIQ ZARARI BO'YICHA MUHIM " +
        "TAFSILOT: talabning o'ziga muddat qo'llanilmaydi, " +
        "lekin o'tgan davr uchun to'lovlar odatda qonunda " +
        "belgilangan cheklangan davr uchun undiriladi. Ya'ni " +
        "kechiktirish baribir yo'qotishga olib keladi.\n\n" +
        "NEGATOR DA'VO — bu ro'yxatning eng amaliy qismi: " +
        "qo'shni to'sib qo'ygan yo'l yoki xalaqit yillar " +
        "davomida davom etsa ham, talab qo'yish huquqi " +
        "yo'qolmaydi.\n\n" +
        "Qonunchilikda boshqa talablar ham nazarda tutilishi " +
        "mumkin.",
      example:
        "Ko'p yillar davom etgan xalaqit bo'yicha talab " +
        "qo'yildi — bunday da'voga muddat qo'llanilmaydi.",
      keyPoints: [
        "Ayrim talablarga da'vo muddati qo'llanilmaydi",
        "Nomoddiy ne'matlar, omonat, hayot va sog'liq zarari",
        "Negator da'vo ham shu ro'yxatda",
        "Hayot va sog'liq zararida o'tgan davr to'lovi cheklanadi",
      ],
      warning:
        "Muddat yo'qligi kechiktirishni oqlamaydi — dalillar " +
        "baribir yo'qoladi.",
      lawRefs: [{ code: "FK", article: "163" }],
    },
  ],
};

module.exports = { LESSON };
