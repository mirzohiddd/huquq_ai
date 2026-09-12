"use strict";
/** FUQAROLIK MODULI — 1-DARS: FUQAROLIK HUQUQI ASOSLARI. FK 1–15, 81–98. */

const LESSON = {
  key: "fuqarolik-asoslari",
  category: "civil",
  level: "basic",
  order: 2010,
  title: "Fuqarolik huquqi asoslari",
  desc:
    "Fuqarolik qonunchiligi nimani tartibga soladi, huquq qanday " +
    "vujudga keladi, uni himoya qilishning qanday usullari bor va " +
    "fuqarolik huquqlarining obyektlari nimalardan iborat.",
  objectives: [
    "Fuqarolik huquqi qanday munosabatlarni tartibga solishini bilasiz",
    "Huquq va burch qanday asoslarda vujudga kelishini tushunasiz",
    "Himoya qilishning barcha usullarini bilasiz",
    "Davlat organi hujjatini haqiqiy emas deb topish yo'lini bilasiz",
    "Qonun vaqt bo'yicha qanday amal qilishini tushunasiz",
    "Fuqarolik huquqlarining obyektlarini ajrata olasiz",
  ],
  practicalSteps: [
    "Nizo yuzaga kelganda avval qaysi himoya usuli sizga mos kelishini aniqlang",
    "Har qanday muomalada hujjat va yozishmalarni saqlang — ular huquq vujudga kelganini isbotlaydi",
    "Davlat organi qarori huquqingizni buzsa, uni sudda haqiqiy emas deb topishni so'rang",
    "Zarar ko'rsangiz uning miqdorini hujjat bilan qayd eting",
    "Yangi qonun chiqqanda u sizning eski munosabatingizga qo'llanadimi — tekshiring",
  ],
  sections: [
    {
      heading: "Fuqarolik qonunchiligining asosiy negizlari",
      text:
        "Fuqarolik huquqi ta'rifdan emas, PRINSIPLARDAN boshlanadi — " +
        "chunki aynan ular nizoli holatlarda javob beradi.\n\n" +
        "Asosiy negizlar: ishtirokchilarning TENGLIGI (hech kim " +
        "boshqasiga bo'ysunmaydi); mulk DAXLSIZLIGI; SHARTNOMA " +
        "ERKINLIGI; xususiy ishlarga o'zboshimchalik bilan " +
        "aralashishga yo'l qo'yilmasligi; huquqlarni TO'SIQSIZ amalga " +
        "oshirish; buzilgan huquqni TIKLASH va SUD himoyasi.\n\n" +
        "⚠️ TENGLIK PRINSIPI AMALDA ENG MUHIMI. Fuqarolik " +
        "munosabatida bank ham, davlat korxonasi ham, oddiy fuqaro " +
        "ham TENG ishtirokchi. Bank sizga buyruq bera olmaydi — u " +
        "faqat shartnoma shartini taklif qila oladi.\n\n" +
        "Shu bilan fuqarolik huquqi ma'muriy huquqdan farq qiladi: u " +
        "yerda organ va fuqaro bo'ysunish munosabatida bo'ladi, bu " +
        "yerda esa yo'q.",
      example:
        "Xizmat ko'rsatuvchi tashkilot \"bizning qoidamiz shunday\" " +
        "deb bir tomonlama shart qo'ydi — fuqarolik munosabatida " +
        "bunday \"qoida\" siz rozi bo'lmasangiz sizga nisbatan " +
        "majburiy emas.",
      keyPoints: [
        "Ishtirokchilar teng — bo'ysunish munosabati yo'q",
        "Mulk daxlsiz, shartnoma erkin",
        "Xususiy ishlarga aralashishga yo'l qo'yilmaydi",
        "Buzilgan huquq tiklanadi va sud himoyasi kafolatlanadi",
      ],
      warning:
        "Tashkilotning ichki \"qoidasi\" qonundan ustun emas va " +
        "sizga avtomatik qo'llanmaydi.",
      lawRefs: [{ code: "FK", article: "1" }],
    },
    {
      heading: "Qaysi munosabatlar fuqarolik huquqiga kiradi",
      text:
        "Fuqarolik qonunchiligi MULKIY munosabatlarni va ular bilan " +
        "bog'liq SHAXSIY NOMULKIY munosabatlarni tartibga soladi.\n\n" +
        "Mulkiy munosabat — bu qiymatga ega narsa yuzasidan yuzaga " +
        "keladigan aloqa: sotib olish, ijara, qarz, zarar qoplash. " +
        "Shaxsiy nomulkiy munosabat esa pul bilan o'lchanmaydi: " +
        "ism, sha'n, muallif nomi.\n\n" +
        "⚠️ NIMA KIRMAYDI: soliq, budjet va boshqa ma'muriy " +
        "bo'ysunishga asoslangan munosabatlar fuqarolik qonunchiligi " +
        "bilan tartibga solinmaydi — ular boshqa kodekslarda.\n\n" +
        "Bu farq amalda kerak bo'ladi: nizo qaysi sohaga tegishli " +
        "ekani qaysi sudga va qaysi tartibda murojaat qilishni " +
        "belgilaydi.",
      example:
        "Do'kon bilan tovar sifati bo'yicha nizo — fuqarolik " +
        "munosabati. Soliq inspeksiyasi bilan soliq summasi bo'yicha " +
        "nizo — fuqarolik emas, ma'muriy tartibda hal qilinadi.",
      keyPoints: [
        "Mulkiy va u bilan bog'liq shaxsiy nomulkiy munosabatlar",
        "Ma'muriy bo'ysunishga asoslangan munosabatlar kirmaydi",
        "Farq murojaat tartibini belgilaydi",
        "Har bir nizo avval \"qaysi soha\" deb aniqlanadi",
      ],
      warning:
        "Nizo turini noto'g'ri aniqlash arizani rad etilishiga olib " +
        "keladi — vaqt yo'qoladi.",
      lawRefs: [{ code: "FK", article: "2" }],
    },
    {
      heading: "Fuqarolik qonunchiligi hujjatlari va ularning ierarxiyasi",
      text:
        "Fuqarolik qonunchiligi Fuqarolik kodeksidan va unga muvofiq " +
        "qabul qilinadigan boshqa hujjatlardan iborat.\n\n" +
        "⚠️ IERARXIYA MUHIM: quyi hujjat yuqorisiga zid bo'lsa, " +
        "YUQORISI qo'llaniladi. Ya'ni vazirlik yoki idora hujjati " +
        "kodeks qoidasini o'zgartira olmaydi.\n\n" +
        "Amalda bu shunday ishlaydi: sizga \"bizda shunday " +
        "yo'riqnoma bor\" deyilsa, birinchi savol — bu yo'riqnoma " +
        "kodeksga zid emasmi. Zid bo'lsa, u qo'llanilmaydi.\n\n" +
        "Shuningdek xalqaro shartnoma milliy qoidadan boshqacha " +
        "qoida belgilagan bo'lsa, XALQARO SHARTNOMA qoidalari " +
        "qo'llaniladi.",
      example:
        "Idoraviy yo'riqnoma shartnomani bekor qilish uchun kodeksda " +
        "yo'q qo'shimcha shart belgiladi — bu shart qo'llanilmaydi.",
      keyPoints: [
        "Fuqarolik kodeksi — asosiy hujjat",
        "Quyi hujjat kodeksga zid bo'lsa qo'llanilmaydi",
        "Idoraviy hujjat kodeks qoidasini o'zgartira olmaydi",
        "Xalqaro shartnoma boshqacha qoida belgilashi mumkin",
      ],
      warning:
        "\"Bizda shunday qoida\" degan javobda hujjatning nomi va " +
        "darajasini so'rang.",
      lawRefs: [
        { code: "FK", article: "3" },
        { code: "FK", article: "7" },
      ],
    },
    {
      heading: "Qonun vaqt bo'yicha qanday amal qiladi",
      text:
        "Fuqarolik qonunchiligi hujjatlari ORQAGA QAYTA amal " +
        "QILMAYDI — ular kuchga kirgandan keyin vujudga kelgan " +
        "munosabatlarga qo'llaniladi.\n\n" +
        "⚠️ BU JUDA MUHIM HIMOYA: bugun tuzgan shartnomangiz ertaga " +
        "chiqadigan yangi qoida bilan qayta baholanmaydi. Siz " +
        "shartnoma tuzayotganda amal qilgan qoidalarga tayanasiz.\n\n" +
        "Istisno: qonunning o'zida orqaga qaytish aniq ko'rsatilgan " +
        "bo'lsa. Bunday holat kam uchraydi va odatda fuqaro " +
        "foydasiga bo'ladi.\n\n" +
        "DAVOM ETAYOTGAN munosabatlarda esa yangi qonun kuchga " +
        "kirgandan KEYINGI huquq va burchlarga qo'llanilishi mumkin " +
        "— shuning uchun uzoq muddatli shartnomalarda qonun " +
        "o'zgarishini kuzatib borish kerak.",
      example:
        "Yangi qoida shartnoma tuzilganidan keyin chiqdi — u eski " +
        "shartnomaning allaqachon bajarilgan qismini qayta " +
        "baholamaydi.",
      keyPoints: [
        "Qonun orqaga qayta amal qilmaydi",
        "Kuchga kirgandan keyingi munosabatlarga qo'llaniladi",
        "Istisno faqat qonunda aniq ko'rsatilganda",
        "Uzoq muddatli shartnomada o'zgarishlarni kuzating",
      ],
      warning:
        "\"Endi qonun o'zgardi, siz ham to'lashingiz kerak\" degan " +
        "talabda qoidaning amal qilish sanasini tekshiring.",
      lawRefs: [{ code: "FK", article: "4" }],
    },
    {
      heading: "Qonunda javob bo'lmasa: o'xshashlik va odatlar",
      text:
        "Hayotda qonun to'g'ridan-to'g'ri javob bermaydigan holatlar " +
        "uchraydi. Bunday paytda ikki vosita ishlaydi.\n\n" +
        "BIRINCHISI — O'XSHASHLIK (analogiya). Munosabat to'g'ridan-" +
        "to'g'ri tartibga solinmagan bo'lsa, o'xshash munosabatni " +
        "tartibga soluvchi qoida qo'llaniladi. Bunday qoida ham " +
        "bo'lmasa, fuqarolik qonunchiligining umumiy negizlari va " +
        "mazmunidan kelib chiqiladi.\n\n" +
        "IKKINCHISI — ISH MUOMALASI ODATLARI hamda mahalliy odat va " +
        "an'analar. Ular qonunga yoki shartnomaga zid bo'lmasa " +
        "qo'llanilishi mumkin.\n\n" +
        "⚠️ TARTIB QAT'IY: avval qonun, keyin shartnoma, undan keyin " +
        "o'xshashlik va odat. Odat qonunni ham, shartnomani ham " +
        "bekor qila olmaydi.",
      example:
        "Shartnomada ko'rsatilmagan tafsilot bo'yicha nizo chiqdi — " +
        "sud o'sha sohadagi odatiy amaliyotga tayanishi mumkin.",
      keyPoints: [
        "Qonunda javob bo'lmasa o'xshash qoida qo'llaniladi",
        "Undan keyin umumiy negizlar va mazmun",
        "Ish muomalasi odatlari va an'analar qo'llanilishi mumkin",
        "Odat qonun va shartnomadan ustun emas",
      ],
      warning:
        "\"Hammada shunday\" degan dalil shartnomadagi aniq shartni " +
        "bekor qilmaydi.",
      lawRefs: [
        { code: "FK", article: "5" },
        { code: "FK", article: "6" },
      ],
    },
    {
      heading: "Huquq va burch qanday asoslarda vujudga keladi",
      text:
        "Fuqarolik huquqi \"o'z-o'zidan\" paydo bo'lmaydi — u aniq " +
        "ASOSDAN kelib chiqadi. Kodeks asoslar ro'yxatini beradi.\n\n" +
        "Asosiy asoslar: SHARTNOMA va boshqa bitimlar; davlat " +
        "organlarining hujjatlari; SUD qarori; qonunda ruxsat " +
        "etilgan asoslarda mol-mulk olish; ijod natijasini yaratish; " +
        "ZARAR yetkazish; ASOSSIZ boyish; va shaxsning boshqa " +
        "harakatlari hamda voqealar.\n\n" +
        "⚠️ AMALIY MA'NOSI: \"menda huquq bor\" deyish yetarli emas " +
        "— uning ASOSINI ko'rsatish kerak. Sudda birinchi savol " +
        "aynan shu bo'ladi.\n\n" +
        "Shuning uchun har qanday muomalada asosni tasdiqlovchi " +
        "hujjatni saqlash zarur: shartnoma, chek, qabul qilish " +
        "dalolatnomasi, yozishma.",
      example:
        "Pul berilgan, lekin hech qanday hujjat rasmiylashtirilmagan " +
        "— huquq bor, ammo uning asosini isbotlash qiyinlashadi.",
      keyPoints: [
        "Huquq aniq asosdan kelib chiqadi",
        "Shartnoma, sud qarori, zarar yetkazish — asoslardan ba'zilari",
        "Sudda birinchi savol — huquqning asosi",
        "Asosni tasdiqlovchi hujjatni saqlang",
      ],
      warning:
        "Hujjatsiz muomala huquqni yo'q qilmaydi, lekin uni " +
        "isbotlashni juda qiyinlashtiradi.",
      lawRefs: [{ code: "FK", article: "8" }],
    },
    {
      heading: "Huquqni amalga oshirish va uning chegaralari",
      text:
        "Fuqarolar o'z fuqarolik huquqlarini O'Z IXTIYORI bilan va " +
        "o'z manfaatlarini ko'zlab amalga oshiradilar.\n\n" +
        "Ya'ni huquqdan foydalanish MAJBURIY emas: sizda huquq " +
        "bo'lsa ham, undan foydalanmaslik mumkin. Huquqdan " +
        "foydalanmaslik esa uni yo'qotishga olib kelmaydi (da'vo " +
        "muddati o'tgan holatlar bundan mustasno).\n\n" +
        "⚠️ CHEGARA BOR: huquqni amalga oshirishda boshqa " +
        "shaxslarning huquqlariga putur yetkazish mumkin emas. " +
        "Huquqdan SUISTE'MOL qilish — ya'ni uni faqat boshqaga zarar " +
        "yetkazish maqsadida ishlatish — himoyalanmaydi.\n\n" +
        "Bu qoida sudda kuchli dalil bo'ladi: qarshi tomon rasman " +
        "\"o'z huquqi\" doirasida ish ko'rsa ham, maqsadi zarar " +
        "yetkazish bo'lsa, sud himoya bermasligi mumkin.",
      example:
        "Qo'shni o'z uchastkasida faqat qo'shnining derazasini " +
        "to'sish maqsadida to'siq o'rnatdi — bu huquqdan " +
        "suiste'mol belgisi.",
      keyPoints: [
        "Huquq o'z ixtiyori bilan amalga oshiriladi",
        "Undan foydalanmaslik huquqni yo'qotmaydi",
        "Boshqalarning huquqlariga putur yetkazish mumkin emas",
        "Huquqdan suiste'mol himoyalanmaydi",
      ],
      warning:
        "Da'vo muddati o'tib ketishi — huquqdan foydalanmaslikning " +
        "eng keng tarqalgan zararli oqibati.",
      lawRefs: [{ code: "FK", article: "9" }],
    },
    {
      heading: "Sud orqali himoya qilish huquqi",
      text:
        "Buzilgan yoki nizo ostidagi fuqarolik huquqlarini SUD " +
        "himoya qiladi.\n\n" +
        "Bu umumiy qoida va u juda keng: sudga murojaat qilish " +
        "huquqidan oldindan VOZ KECHISH haqidagi kelishuv haqiqiy " +
        "emas. Ya'ni shartnomada \"sudga murojaat qilmayman\" degan " +
        "shart yozilgan bo'lsa ham, u ishlamaydi.\n\n" +
        "⚠️ SUDGACHA TARTIB masalasi alohida: qonun yoki shartnoma " +
        "ayrim toifadagi nizolar uchun avval qarshi tomonga " +
        "yozma da'vo (pretenziya) yuborishni talab qilishi mumkin. " +
        "Bu sudga murojaatni taqiqlamaydi, faqat uning oldiga bir " +
        "bosqich qo'yadi.\n\n" +
        "Shuning uchun shartnomada nizolarni hal qilish bandini " +
        "har doim o'qib chiqing — u sizdan qanday qadam talab " +
        "qilinishini ko'rsatadi.",
      example:
        "Shartnomada \"nizolar sudsiz hal qilinadi\" deb yozilgan — " +
        "bu sizni sud himoyasidan mahrum qilmaydi.",
      keyPoints: [
        "Buzilgan huquqni sud himoya qiladi",
        "Sud himoyasidan oldindan voz kechish haqiqiy emas",
        "Sudgacha yozma da'vo talab qilinishi mumkin",
        "Shartnomadagi nizo bandini oldindan o'qing",
      ],
      warning:
        "Sudgacha tartib bajarilmasa ariza ko'rilmasdan qaytarilishi " +
        "mumkin — bu vaqt yo'qotish.",
      lawRefs: [{ code: "FK", article: "10" }],
    },
    {
      heading: "Himoya qilishning usullari: to'liq ro'yxat",
      text:
        "Huquqni himoya qilish faqat \"pul undirish\" degani emas. " +
        "Kodeks bir necha usulni beradi va ularni BIRGA qo'llash " +
        "mumkin.\n\n" +
        "Asosiy usullar: huquqni TAN OLISH; huquq buzilgunga qadar " +
        "bo'lgan holatni TIKLASH; huquqni buzuvchi harakatlarni " +
        "TO'XTATISH; bitimni HAQIQIY EMAS deb topish va uning " +
        "oqibatlarini qo'llash; davlat organi hujjatini haqiqiy emas " +
        "deb topish; majburiyatni ASL HOLIDA bajarishga majbur " +
        "qilish; ZARARNI qoplash; NEUSTOYKA undirish; MA'NAVIY " +
        "zararni qoplash; huquqiy munosabatni bekor qilish yoki " +
        "o'zgartirish.\n\n" +
        "⚠️ USULNI TO'G'RI TANLASH — da'voning muvaffaqiyati shunga " +
        "bog'liq. Masalan mulkingiz boshqa shaxsda bo'lsa, sizga " +
        "\"zarar qoplash\" emas, \"ashyoni talab qilib olish\" " +
        "kerak.\n\n" +
        "Da'vo arizasida aynan nimani so'rayotganingizni ANIQ " +
        "yozish shart — sud so'ralmagan narsani o'zi bermaydi.",
      example:
        "Qurilish huquqni buzayotgan bo'lsa, faqat zarar so'rash " +
        "kifoya emas — harakatni to'xtatishni ham talab qilish " +
        "kerak.",
      keyPoints: [
        "Himoya usullari bir nechta va ularni birga qo'llash mumkin",
        "Tan olish, tiklash, to'xtatish, zarar, neustoyka va boshqalar",
        "Usulni noto'g'ri tanlash da'voni yo'qqa chiqaradi",
        "Sud so'ralmagan narsani o'zi bermaydi",
      ],
      warning:
        "Da'vo talabini noaniq yozish eng keng tarqalgan xato.",
      lawRefs: [{ code: "FK", article: "11" }],
    },
    {
      heading: "Davlat organi hujjatini haqiqiy emas deb topish",
      text:
        "Davlat organining yoki fuqarolarning o'zini o'zi boshqarish " +
        "organining qonunchilikka MUVOFIQ BO'LMAGAN hujjati sud " +
        "tomonidan haqiqiy emas deb topilishi mumkin.\n\n" +
        "⚠️ BU FUQARONING JIDDIY QUROLI. Ko'p odam organ qarorini " +
        "\"o'zgartirib bo'lmaydigan\" deb hisoblaydi — aslida u " +
        "sudda tekshiriladi.\n\n" +
        "Shart: hujjat sizning huquqingizni buzgan bo'lishi kerak. " +
        "Umuman begona hujjatga qarshi murojaat qilib bo'lmaydi.\n\n" +
        "MUHIM QO'SHIMCHA: hujjat haqiqiy emas deb topilsa, " +
        "buzilgan huquq tiklanadi va bu bilan bog'liq ZARAR ham " +
        "qoplanishi mumkin — ya'ni ikkita talabni birga qo'yish " +
        "mumkin.",
      example:
        "Organ qarori bilan huquq cheklandi — qaror sudda haqiqiy " +
        "emas deb topilsa, oldingi holat tiklanadi.",
      keyPoints: [
        "Organ hujjati sudda haqiqiy emas deb topilishi mumkin",
        "Shart — u sizning huquqingizni buzgan bo'lishi",
        "Huquq tiklanadi va zarar qoplanishi mumkin",
        "Ikkala talabni bitta arizada qo'yish mumkin",
      ],
      warning:
        "Bunday arizalar uchun qisqa muddat belgilangan bo'lishi " +
        "mumkin — kechiktirmang.",
      lawRefs: [{ code: "FK", article: "12" }],
    },
    {
      heading: "Huquqni shaxsning o'zi himoya qilishi",
      text:
        "Fuqarolik huquqlarini shaxsning O'ZI himoya qilishiga yo'l " +
        "qo'yiladi — ya'ni sudga murojaat qilmasdan, o'z harakati " +
        "bilan.\n\n" +
        "⚠️ LEKIN QAT'IY SHART BOR: himoya usuli buzilishga MUTANOSIB " +
        "bo'lishi va uni bartaraf etish uchun zarur chegaradan " +
        "chiqmasligi kerak.\n\n" +
        "Ruxsat etilgan misollar: o'z mulkini olib qo'yishga " +
        "yo'l qo'ymaslik, qarzdorning ashyosini qonunda nazarda " +
        "tutilgan holatlarda ushlab qolish, hujum paytida o'zini " +
        "himoya qilish.\n\n" +
        "TAQIQLANGANI: qarzni \"o'zi undirish\" maqsadida boshqa " +
        "shaxsning mulkini olib qo'yish, kuch ishlatish, " +
        "qo'rqitish. Bunday harakat o'z-o'zidan huquqbuzarlikka " +
        "aylanadi va endi SIZ javobgar bo'lasiz.",
      example:
        "Qarz to'lanmagani uchun qarzdorning mashinasi ruxsatsiz " +
        "olib qo'yildi — bu himoya emas, mustaqil huquqbuzarlik.",
      keyPoints: [
        "Huquqni o'zi himoya qilishga yo'l qo'yiladi",
        "Usul buzilishga mutanosib bo'lishi shart",
        "Zarur chegaradan chiqmaslik kerak",
        "O'zboshimchalik bilan undirish taqiqlanadi",
      ],
      warning:
        "Haqli bo'lsangiz ham noto'g'ri usul sizni javobgarga " +
        "aylantiradi.",
      lawRefs: [{ code: "FK", article: "13" }],
    },
    {
      heading: "Zararni qoplash: umumiy qoida",
      text:
        "Huquqi buzilgan shaxs o'ziga yetkazilgan zararning TO'LIQ " +
        "qoplanishini talab qilishi mumkin.\n\n" +
        "Zarar ikki qismdan iborat: HAQIQIY ZARAR (buzilgan huquqni " +
        "tiklash uchun qilingan yoki qilinishi lozim bo'lgan " +
        "xarajatlar, mol-mulkning yo'qotilishi yoki shikastlanishi) " +
        "va BOY BERILGAN FOYDA (huquq buzilmaganda olinishi mumkin " +
        "bo'lgan daromad).\n\n" +
        "⚠️ BOY BERILGAN FOYDA ENG KO'P E'TIBORDAN CHETDA QOLADI. " +
        "Uni talab qilish mumkin, lekin uni ISBOTLASH kerak: " +
        "shartnoma, buyurtma, oldingi davr daromadi kabi hujjatlar " +
        "bilan.\n\n" +
        "Qoplash hajmi qonun yoki shartnoma bilan KAMAYTIRILISHI " +
        "mumkin — shuning uchun shartnomadagi javobgarlikni " +
        "cheklovchi bandlarni diqqat bilan o'qing.",
      example:
        "Uskuna vaqtida yetkazilmadi: ta'mirlash xarajati — haqiqiy " +
        "zarar, bajarilmay qolgan buyurtma daromadi — boy berilgan " +
        "foyda.",
      keyPoints: [
        "Zararning to'liq qoplanishini talab qilish mumkin",
        "Zarar = haqiqiy zarar + boy berilgan foyda",
        "Boy berilgan foydani hujjat bilan isbotlash kerak",
        "Shartnoma qoplash hajmini cheklashi mumkin",
      ],
      warning:
        "Shartnomadagi \"javobgarlik shartnoma summasidan oshmaydi\" " +
        "bandi zararingizni sezilarli kamaytirishi mumkin.",
      lawRefs: [{ code: "FK", article: "14" }],
    },
    {
      heading: "Davlat organlari yetkazgan zararni qoplash",
      text:
        "Davlat organlari va fuqarolarning o'zini o'zi boshqarish " +
        "organlarining QONUNGA XILOF harakatlari (yoki " +
        "harakatsizligi) tufayli yetkazilgan zarar QOPLANADI.\n\n" +
        "⚠️ MUHIM TAFSILOT: zarar mansabdor shaxsning shaxsiy " +
        "hisobidan emas, tegishli budjet hisobidan qoplanadi. Ya'ni " +
        "javobgar — DAVLAT, aniq xodim emas.\n\n" +
        "Bu fuqaro uchun afzal: to'lov qobiliyati masalasi yuzaga " +
        "kelmaydi. Xodimga nisbatan esa keyinchalik regress " +
        "(qaytarib undirish) qo'llanilishi mumkin, lekin bu " +
        "sizning ishingiz emas.\n\n" +
        "Talab qo'yish uchun uchta narsani ko'rsatish kerak: " +
        "harakatning QONUNGA XILOFLIGI, ZARAR va ular o'rtasidagi " +
        "BOG'LIQLIK. Shuning uchun avval hujjatni haqiqiy emas deb " +
        "topish, keyin zarar talab qilish mantiqiy ketma-ketlik " +
        "bo'ladi.",
      example:
        "Organning qonunga xilof qarori tufayli faoliyat to'xtab " +
        "qoldi — qaror bekor qilingach, to'xtash davridagi zararni " +
        "talab qilish mumkin.",
      keyPoints: [
        "Organlarning qonunga xilof harakati zarari qoplanadi",
        "Javobgar — davlat, budjet hisobidan qoplanadi",
        "Harakatsizlik ham asos bo'ladi",
        "Qonunga xiloflik, zarar va bog'liqlik isbotlanadi",
      ],
      warning:
        "Zararni hujjatsiz \"taxminan\" ko'rsatish — rad etilishning " +
        "asosiy sababi.",
      lawRefs: [{ code: "FK", article: "15" }],
    },
    {
      heading: "Fuqarolik huquqlarining obyektlari nima",
      text:
        "Obyekt — bu huquq NIMA YUZASIDAN yuzaga kelayotgani.\n\n" +
        "Obyektlar turlari: ASHYOLAR (shu jumladan pul va qimmatli " +
        "qog'ozlar), boshqa MOL-MULK, shu jumladan mulkiy huquqlar; " +
        "ish va XIZMATLAR; INTELLEKTUAL faoliyat natijalari; " +
        "AXBOROT; nomoddiy ne'matlar.\n\n" +
        "⚠️ MUOMALADA BO'LISH masalasi: obyektlarning aksariyati " +
        "erkin muomalada bo'ladi — ularni sotish, hadya qilish, " +
        "meros qoldirish mumkin. Ayrimlari esa CHEKLANGAN muomalada " +
        "(faqat maxsus ruxsat bilan) yoki umuman muomaladan " +
        "chiqarilgan bo'ladi.\n\n" +
        "Amalda bu shuni bildiradi: har qanday narsani shartnoma " +
        "predmeti qilib bo'lmaydi. Muomaladan chiqarilgan obyekt " +
        "yuzasidan tuzilgan bitim haqiqiy emas.",
      example:
        "Muomalasi cheklangan obyekt bo'yicha maxsus ruxsatsiz " +
        "bitim tuzildi — bunday bitim haqiqiy emas deb topilishi " +
        "mumkin.",
      keyPoints: [
        "Obyekt — huquq nima yuzasidan yuzaga kelgani",
        "Ashyolar, mol-mulk, ish va xizmatlar, intellektual natijalar",
        "Ayrim obyektlar cheklangan muomalada bo'ladi",
        "Muomaladan chiqarilgan obyekt bo'yicha bitim haqiqiy emas",
      ],
      warning:
        "Predmet muomalada bo'lishini tekshirmasdan bitim tuzish " +
        "shartnomani yo'qqa chiqarishi mumkin.",
      lawRefs: [
        { code: "FK", article: "81" },
        { code: "FK", article: "82" },
      ],
    },
    {
      heading: "Mol-mulk turlari: ko'chmas va ko'char",
      text:
        "Mol-mulk KO'CHMAS va KO'CHAR turlarga bo'linadi.\n\n" +
        "KO'CHMAS mulk — yer uchastkalari, yer osti boyliklari " +
        "uchastkalari va yer bilan mustahkam bog'langan obyektlar, " +
        "ya'ni ularni nomutanosib zarar yetkazmasdan ko'chirish " +
        "mumkin bo'lmagan narsalar (binolar, inshootlar).\n\n" +
        "⚠️ ASOSIY AMALIY FARQ — DAVLAT RO'YXATIDAN O'TKAZISH. " +
        "Ko'chmas mulkka bo'lgan huquq, uning vujudga kelishi, " +
        "o'tishi va bekor bo'lishi davlat ro'yxatidan o'tkaziladi. " +
        "Ro'yxatdan o'tkazilmasa huquq yuzaga kelmasligi mumkin.\n\n" +
        "Ko'char mol-mulk uchun bunday talab umumiy qoida sifatida " +
        "yo'q — huquq odatda ashyoni topshirish bilan o'tadi.\n\n" +
        "Shuning uchun uy yoki yer bilan bog'liq har qanday " +
        "bitimda ro'yxatdan o'tkazish bosqichi ENG MUHIM qadam " +
        "hisoblanadi.",
      example:
        "Uy uchun pul to'landi va kalit olindi, lekin ro'yxatdan " +
        "o'tkazilmadi — xaridor hali to'liq himoyalanmagan holatda.",
      keyPoints: [
        "Mol-mulk ko'chmas va ko'char turlarga bo'linadi",
        "Ko'chmas mulk yer bilan mustahkam bog'langan",
        "Ko'chmas mulk huquqi davlat ro'yxatidan o'tkaziladi",
        "Ko'char mulkda huquq odatda topshirish bilan o'tadi",
      ],
      warning:
        "Ro'yxatdan o'tkazishni kechiktirish — ko'chmas mulk " +
        "bitimlaridagi eng xavfli xato.",
      lawRefs: [
        { code: "FK", article: "83" },
        { code: "FK", article: "84" },
      ],
    },
    {
      heading: "Ashyolarning tasnifi va u nima uchun kerak",
      text:
        "Kodeks ashyolarni bir necha mezon bo'yicha tasniflaydi va " +
        "har bir tasnifning amaliy oqibati bor.\n\n" +
        "XUSUSIY BELGILI (aniq bir ashyo — masalan ma'lum bir " +
        "kvartira) va TURGA XOS ALOMATLARI bilan belgilanadigan " +
        "(o'lchov, son bilan — masalan yuz kilogramm bug'doy) " +
        "ashyolar. Farqi: xususiy belgili ashyo nobud bo'lsa " +
        "majburiyat bajarilishi mumkin emas, turga xosini esa " +
        "boshqasi bilan almashtirib bajarish mumkin.\n\n" +
        "BO'LINADIGAN va BO'LINMAYDIGAN ashyolar — umumiy mulkni " +
        "taqsimlashda hal qiluvchi ahamiyatga ega.\n\n" +
        "ISTE'MOL QILINADIGAN va QILINMAYDIGAN — ijara predmeti " +
        "faqat iste'mol qilinmaydigan ashyo bo'la oladi.\n\n" +
        "ASOSIY va MANSUB ashyo — mansub ashyo asosiysining " +
        "taqdiriga ergashadi (aks holda shartnomada boshqacha " +
        "yozilishi kerak).",
      example:
        "Uskuna sotildi, lekin uning majburiy qismi berilmadi — " +
        "mansub ashyo asosiysi bilan birga o'tadi.",
      keyPoints: [
        "Xususiy belgili va turga xos ashyolar farqlanadi",
        "Bo'linadigan/bo'linmaydigan — taqsimlashda muhim",
        "Iste'mol qilinmaydigan ashyo ijaraga beriladi",
        "Mansub ashyo asosiysining taqdiriga ergashadi",
      ],
      warning:
        "Murakkab ashyoni qismlarga ajratib sotishda shartnomada " +
        "buni aniq yozish kerak.",
      lawRefs: [
        { code: "FK", article: "86" },
        { code: "FK", article: "87" },
        { code: "FK", article: "88" },
        { code: "FK", article: "89" },
        { code: "FK", article: "90" },
      ],
    },
    {
      heading: "Hosil, daromad, pul va qimmatli qog'ozlar",
      text:
        "Mol-mulkdan foydalanish natijasida olingan HOSIL, MAHSULOT " +
        "va DAROMADLAR — bu ham obyekt va ularga bo'lgan huquq " +
        "alohida tartibga solinadi. Umumiy qoida: ular mol-mulkdan " +
        "qonuniy asosda foydalanayotgan shaxsga tegishli " +
        "bo'ladi.\n\n" +
        "⚠️ AMALIY MISOL: ijaraga olingan yerda yetishtirilgan hosil " +
        "odatda ijarachiga tegishli. Lekin shartnomada boshqacha " +
        "yozilishi mumkin — shuning uchun bu bandni tekshirish " +
        "kerak.\n\n" +
        "PUL (valyuta) — universal obyekt. Qonuniy to'lov vositasi " +
        "milliy valyuta hisoblanadi; chet el valyutasidan " +
        "foydalanish tartibi qonun bilan belgilanadi.\n\n" +
        "QIMMATLI QOG'OZ — belgilangan shakl va majburiy " +
        "rekvizitlarga rioya qilgan holda mulkiy huquqlarni " +
        "tasdiqlovchi hujjat. Undagi huquq faqat qog'ozning o'zini " +
        "taqdim etish bilan amalga oshiriladi.",
      example:
        "Ijara shartnomasida hosil kimga tegishli ekani yozilmagan " +
        "— nizo chiqqanda umumiy qoida qo'llaniladi.",
      keyPoints: [
        "Hosil va daromad qonuniy foydalanuvchiga tegishli",
        "Shartnoma boshqacha qoida belgilashi mumkin",
        "Milliy valyuta — qonuniy to'lov vositasi",
        "Qimmatli qog'ozda majburiy rekvizitlar bo'lishi shart",
      ],
      warning:
        "Qimmatli qog'ozda rekvizit yetishmasa u haqiqiy " +
        "bo'lmasligi mumkin.",
      lawRefs: [
        { code: "FK", article: "92" },
        { code: "FK", article: "94" },
        { code: "FK", article: "96" },
      ],
    },
    {
      heading: "Intellektual natijalar, xizmat va tijorat siri",
      text:
        "INTELLEKTUAL FAOLIYAT NATIJALARI (asarlar, ixtirolar, " +
        "tovar belgilari va boshqalar) alohida obyekt hisoblanadi. " +
        "Ularni oddiy ashyo kabi \"topshirib\" bo'lmaydi — huquq " +
        "maxsus tartibda o'tkaziladi.\n\n" +
        "⚠️ ENG KENG TARQALGAN XATO: buyurtma bo'yicha yaratilgan " +
        "asar (logotip, dastur, matn) uchun to'lov qilinganda " +
        "avtomatik ravishda barcha huquqlar o'tadi deb " +
        "o'ylash. Aslida huquqlarning o'tishi SHARTNOMADA aniq " +
        "yozilishi kerak.\n\n" +
        "XIZMAT VA TIJORAT SIRI — uchinchi shaxslarga noma'lum " +
        "bo'lgan, haqiqiy yoki potensial tijorat qiymatiga ega " +
        "axborot. U himoyalanishi uchun egasi uning maxfiyligini " +
        "TA'MINLASH choralarini ko'rgan bo'lishi kerak.\n\n" +
        "Ya'ni \"bu bizning sirimiz edi\" degan da'vo maxfiylik " +
        "rejimi joriy etilmagan bo'lsa kuchsiz bo'ladi.",
      example:
        "Dastur buyurtma bo'yicha yozildi, shartnomada huquqlar " +
        "haqida hech narsa yo'q — buyurtmachi keyinchalik " +
        "cheklovga duch kelishi mumkin.",
      keyPoints: [
        "Intellektual natijalar alohida obyekt",
        "Huquqlarning o'tishi shartnomada aniq yozilishi kerak",
        "To'lov o'z-o'zidan barcha huquqni bermaydi",
        "Tijorat siri maxfiylik choralari ko'rilganda himoyalanadi",
      ],
      warning:
        "Ijodiy ish buyurtma qilganda huquqlar bandini albatta " +
        "kiritib qo'ying.",
      lawRefs: [
        { code: "FK", article: "97" },
        { code: "FK", article: "98" },
      ],
    },
  ],
};

module.exports = { LESSON };
