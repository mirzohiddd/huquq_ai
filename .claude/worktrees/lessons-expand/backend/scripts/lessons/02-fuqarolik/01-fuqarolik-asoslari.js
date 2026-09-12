"use strict";
/** FUQAROLIK MODULI — 1-DARS: FUQAROLIK HUQUQI ASOSLARI. FK 1–15. */

const LESSON = {
  key: "fuqarolik-asoslari",
  category: "civil",
  level: "basic",
  order: 2010,
  title: "Fuqarolik huquqi asoslari",
  desc:
    "Fuqarolik huquqi nimani tartibga soladi, huquqni himoya qilishning " +
    "qanday usullari bor va ulardan qanday foydalaniladi.",
  objectives: [
    "Fuqarolik huquqi qaysi munosabatlarni qamrab olishini bilasiz",
    "Qonun hujjatlarining o'zaro darajasini farqlay olasiz",
    "Huquqingiz qachondan boshlab paydo bo'lishini tushunasiz",
    "Himoya qilishning barcha usullarini bilasiz va mosini tanlay olasiz",
    "Davlat organi hujjati ustidan qanday kurashish mumkinligini bilasiz",
  ],
  practicalSteps: [
    "Nizoingiz fuqarolik huquqi doirasiga kirishini avval aniqlang",
    "Huquqingiz qaysi asosda paydo bo'lganini yozib qo'ying (shartnoma, qonun, hodisa)",
    "Himoya usullari ro'yxatidan holatingizga mosini tanlang",
    "Zarar ko'rgan bo'lsangiz uning hajmini hujjat bilan tasdiqlashga tayyorlang",
    "Davlat organi hujjatiga rozi bo'lmasangiz — uni sudda talashish mumkinligini yodda tuting",
  ],
  sections: [
    {
      heading: "Fuqarolik qonunchiligining asosiy negizlari",
      text:
        "Fuqarolik huquqi bir necha ASOSIY PRINSIPGA tayanadi va " +
        "ular butun kodeks bo'ylab ishlaydi. Ularni bilish " +
        "alohida moddalarni yodlashdan ko'ra foydaliroq: modda " +
        "topilmaganda ham prinsip yo'l ko'rsatadi.\n\n" +
        "Birinchisi — ishtirokchilarning TENGLIGI. Fuqarolik " +
        "munosabatida bir taraf ikkinchisiga buyruq bera " +
        "olmaydi. Bu uni ma'muriy munosabatdan ajratib " +
        "turadigan asosiy belgi.\n\n" +
        "Ikkinchisi — mulk daxlsizligi va SHARTNOMA ERKINLIGI: " +
        "kim bilan va qanday shartlarda shartnoma tuzishni " +
        "taraflarning o'zi hal qiladi.\n\n" +
        "Uchinchisi — shaxsiy ishlarga o'zboshimchalik bilan " +
        "aralashishga yo'l qo'yilmasligi va buzilgan huquqni " +
        "TIKLASH imkoni. Ya'ni huquq qog'ozda qolmasligi, " +
        "amalda tiklanishi kerak.",
      example:
        "Sotuvchi «bizda shunday tartib» deb bir tomonlama " +
        "shart qo'ymoqchi bo'ldi. Fuqarolik munosabatida " +
        "taraflar teng — bunday shart faqat siz rozi " +
        "bo'lsangiz kuchga kiradi.",
      keyPoints: [
        "Ishtirokchilar teng — biri ikkinchisiga buyruq bermaydi",
        "Shartnoma erkinligi asosiy prinsiplardan biri",
        "Shaxsiy ishlarga o'zboshimchalik bilan aralashib bo'lmaydi",
        "Buzilgan huquq tiklanishi kerak, faqat e'tirof etilishi emas",
      ],
      warning:
        "«Qonunda shunday» degan gapni tekshirmasdan qabul " +
        "qilmang. Ko'p hollarda bu qonun emas, tashkilotning " +
        "o'z ichki qoidasi bo'lib chiqadi va u sizga " +
        "majburiy emas.",
      lawRefs: [{ code: "FK", article: "1" }],
    },
    {
      heading: "Qaysi munosabatlar fuqarolik huquqiga kiradi",
      text:
        "Fuqarolik qonunchiligi ikki katta guruh munosabatni " +
        "tartibga soladi: MULKIY munosabatlar va ular bilan " +
        "bog'liq NOMULKIY munosabatlar.\n\n" +
        "Mulkiy munosabatlar — mol-mulkka egalik, undan " +
        "foydalanish, uni sotish, ijaraga berish, meros " +
        "qoldirish, shartnoma bo'yicha to'lov va shu " +
        "kabilar.\n\n" +
        "Nomulkiy munosabatlar — sha'n va qadr-qimmat, ism, " +
        "mualliflik va shunga o'xshash, pulda o'lchanmaydigan " +
        "qadriyatlar bilan bog'liq munosabatlar.\n\n" +
        "Bu chegarani bilish amaliy jihatdan muhim: nizo " +
        "fuqarolik huquqiga kirsa, uni fuqarolik tartibida " +
        "hal qilasiz. Agar u soliq, ma'muriy yoki mehnat " +
        "munosabati bo'lsa — tartib boshqacha bo'ladi va " +
        "noto'g'ri yo'ldan borish vaqt yo'qotishga olib " +
        "keladi.",
      example:
        "Qo'shni bilan yer chegarasi bo'yicha nizo — mulkiy " +
        "munosabat, ya'ni fuqarolik tartibida hal qilinadi. " +
        "Ish beruvchi bilan ish haqi bo'yicha nizo esa " +
        "mehnat huquqiga tegishli va u yerda boshqa qoidalar " +
        "ishlaydi.",
      keyPoints: [
        "Ikki guruh: mulkiy va u bilan bog'liq nomulkiy munosabatlar",
        "Mulkiy — mol-mulk, shartnoma, to'lov masalalari",
        "Nomulkiy — sha'n, ism, mualliflik kabi qadriyatlar",
        "Chegarani bilish to'g'ri tartibni tanlashga yordam beradi",
      ],
      warning:
        "Bir voqeadan bir vaqtda bir necha turdagi " +
        "munosabat kelib chiqishi mumkin. Shunday holatda " +
        "har biri o'z tartibida yuritiladi — hammasini " +
        "bitta arizaga jamlab bo'lmaydi.",
      lawRefs: [{ code: "FK", article: "2" }],
    },
    {
      heading: "Fuqarolik qonunchiligi hujjatlari va ularning darajasi",
      text:
        "Fuqarolik qonunchiligi bitta hujjatdan iborat emas — " +
        "u DARAJALARGA ega tizim. Yuqori darajadagi hujjat " +
        "pastdagisini bekor qiladi, teskarisi emas.\n\n" +
        "Eng yuqorida Konstitutsiya turadi. Undan keyin " +
        "Fuqarolik kodeksi, so'ngra boshqa qonunlar, keyin " +
        "esa qonunosti hujjatlari (qaror, nizom, yo'riqnoma) " +
        "keladi.\n\n" +
        "Amaliy natija: agar tashkilotning yo'riqnomasi " +
        "kodeksga zid bo'lsa, kodeks ustun turadi. Bu — " +
        "nizolarda eng ko'p ishlatiladigan argumentlardan " +
        "biri.\n\n" +
        "Shu sababli javob talab qilganingizda «qaysi " +
        "hujjatga asoslanyapsiz?» degan savol muhim: " +
        "javobdagi hujjat darajasi past bo'lsa, uni " +
        "yuqori darajadagi norma bilan taqqoslash mumkin.",
      example:
        "Tashkilot ichki yo'riqnomaga tayanib huquqingizni " +
        "cheklamoqchi bo'ldi. Agar bu cheklov kodeksda " +
        "nazarda tutilmagan bo'lsa, yo'riqnoma shu qismda " +
        "qo'llanilmaydi.",
      keyPoints: [
        "Qonunchilik darajalarga ega tizimdan iborat",
        "Yuqori darajadagi hujjat ustun turadi",
        "Ichki yo'riqnoma kodeksga zid bo'la olmaydi",
        "Har doim asos bo'lgan hujjat nomini so'rang",
      ],
      warning:
        "Og'zaki «bizda shunday qoida bor» degan javob " +
        "hujjat emas. Hujjatning nomi, sanasi va raqamini " +
        "so'rang — ko'pincha shundan keyin talab o'z-o'zidan " +
        "yo'qoladi.",
      lawRefs: [{ code: "FK", article: "3" }],
    },
    {
      heading: "Qonun vaqt bo'yicha qanday amal qiladi",
      text:
        "Umumiy qoida: fuqarolik qonunchiligi hujjatlari " +
        "ORQAGA QAYTA amal qilmaydi. Ya'ni yangi qoida " +
        "u kuchga kirgunga qadar yuzaga kelgan " +
        "munosabatlarga qo'llanilmaydi.\n\n" +
        "Bu qoidaning maqsadi — barqarorlik. Agar yangi " +
        "qonun eski munosabatlarni qayta ko'rib chiqsa, " +
        "hech kim bugungi shartnomasiga ishona olmasdi.\n\n" +
        "Muhim nuance: agar munosabat DAVOM ETAYOTGAN " +
        "bo'lsa (masalan uzoq muddatli shartnoma), yangi " +
        "qonun uning keyingi qismiga ta'sir qilishi " +
        "mumkin. Ya'ni o'tmish emas, kelajak " +
        "o'zgaradi.\n\n" +
        "Amaliy xulosa: nizoni baholashda voqea SODIR " +
        "BO'LGAN PAYTDAGI qonun tahririni topish kerak, " +
        "bugungisini emas. Bu ko'p uchraydigan xato.",
      example:
        "Bir necha yil oldin tuzilgan shartnoma bo'yicha " +
        "nizo chiqdi. Uni baholashda shartnoma tuzilgan " +
        "paytda amal qilgan qoidalar asos bo'ladi.",
      keyPoints: [
        "Qonun umumiy qoida bo'yicha orqaga qayta amal qilmaydi",
        "Maqsad — munosabatlarning barqarorligi",
        "Davom etayotgan munosabatga yangi qoida ta'sir qilishi mumkin",
        "Nizoda voqea sodir bo'lgan paytdagi tahrir muhim",
      ],
      warning:
        "Kutubxonadan qonun o'qiyotganda uning JORIY " +
        "tahriri ko'rsatilishini yodda tuting. Eski " +
        "voqea uchun o'sha davrdagi tahrirni alohida " +
        "aniqlashtirish kerak bo'ladi.",
      lawRefs: [{ code: "FK", article: "4" }],
    },
    {
      heading: "Qonunda javob bo'lmasa: o'xshashlik bo'yicha qo'llash",
      text:
        "Hayot qonundan boyroq — har bir holat uchun alohida " +
        "modda yozib bo'lmaydi. Shuning uchun kodeks " +
        "bo'shliqni to'ldirish yo'lini o'zi ko'rsatadi.\n\n" +
        "Agar munosabat to'g'ridan-to'g'ri qonun bilan " +
        "tartibga solinmagan bo'lsa, avval O'XSHASH " +
        "munosabatni tartibga soluvchi norma qo'llaniladi " +
        "(qonun o'xshashligi).\n\n" +
        "Agar bunday norma ham topilmasa, fuqarolik " +
        "qonunchiligining UMUMIY NEGIZLARI va mazmunidan " +
        "kelib chiqiladi (huquq o'xshashligi) — ya'ni " +
        "tenglik, adolat, insof va oqillik prinsiplariga " +
        "tayaniladi.\n\n" +
        "Amaliy ma'nosi: «bunday holat qonunda yozilmagan, " +
        "shuning uchun huquqingiz yo'q» degan javob " +
        "noto'g'ri. Bo'shliq huquqni yo'q qilmaydi.",
      example:
        "Yangi turdagi xizmat bo'yicha nizo chiqdi va unga " +
        "aniq modda yo'q. Sud unga eng yaqin turdagi " +
        "shartnoma qoidalarini qo'llashi mumkin.",
      keyPoints: [
        "Qonunda bo'shliq bo'lsa o'xshash norma qo'llaniladi",
        "U ham bo'lmasa umumiy negizlar va prinsiplar asos bo'ladi",
        "«Yozilmagan» degan asos huquqni yo'q qilmaydi",
        "Insof, adolat va oqillik — amaldagi mezonlar",
      ],
      warning:
        "O'xshashlik bo'yicha qo'llash — kuchli, lekin " +
        "murakkab argument. Uni ishlatishdan oldin " +
        "to'g'ridan-to'g'ri tegishli norma yo'qligiga " +
        "ishonch hosil qiling.",
      lawRefs: [{ code: "FK", article: "5" }],
    },
    {
      heading: "Ish muomalasi odatlari, mahalliy odat va an'analar",
      text:
        "Qonun va shartnomadan tashqari yana bir manba " +
        "bor: ISH MUOMALASI ODATLARI. Bu — biror sohada " +
        "keng qo'llaniladigan, hujjatda yozilmagan bo'lsa " +
        "ham amalda barqaror qoida.\n\n" +
        "Kodeks mahalliy odat va an'analarni ham tan " +
        "oladi. Ya'ni huquq faqat yozma matndan iborat " +
        "emas.\n\n" +
        "Lekin ularning o'rni aniq belgilangan: odat " +
        "qonunga va shartnomaga ZID bo'lsa qo'llanilmaydi. " +
        "Ya'ni tartib shunday — avval qonunning majburiy " +
        "normasi, keyin shartnoma sharti, keyin odat.\n\n" +
        "Amaliy ahamiyati: shartnomada biror tafsilot " +
        "yozilmay qolsa, uni «biz bu sohada odatda " +
        "shunday qilamiz» degan asosda to'ldirish " +
        "mumkin — lekin buni isbotlash kerak.",
      example:
        "Shartnomada tovarni topshirish joyi aniq " +
        "yozilmagan. Shu turdagi bitimlarda odatda " +
        "qabul qilingan tartib mezon bo'lib xizmat " +
        "qilishi mumkin.",
      keyPoints: [
        "Ish muomalasi odatlari huquq manbasi bo'la oladi",
        "Mahalliy odat va an'analar ham tan olinadi",
        "Odat qonun va shartnomaga zid bo'lsa qo'llanilmaydi",
        "Odatning mavjudligini isbotlash kerak bo'ladi",
      ],
      warning:
        "«Hamma shunday qiladi» — o'z-o'zidan huquqiy " +
        "argument emas. Odat barqaror va shu sohada " +
        "keng tarqalgan bo'lishi kerak; bir necha " +
        "holat buni tasdiqlamaydi.",
      lawRefs: [{ code: "FK", article: "6" }],
    },
    {
      heading: "Xalqaro shartnomalarning o'rni",
      text:
        "Fuqarolik munosabatlari faqat ichki qonun bilan " +
        "cheklanmaydi. Mamlakatning xalqaro shartnomalari " +
        "ham fuqarolik qonunchiligining bir qismi " +
        "hisoblanadi.\n\n" +
        "Bu ayniqsa chet el elementi bo'lgan " +
        "munosabatlarda muhim: chet el fuqarosi yoki chet " +
        "el tashkiloti ishtirok etgan bitimlar, chet elga " +
        "yuborilgan tovar, xalqaro tashish va shu " +
        "kabilar.\n\n" +
        "Amaliy natija: bunday holatda faqat ichki " +
        "kodeksga qarab xulosa chiqarish yetarli emas — " +
        "tegishli xalqaro shartnoma bor-yo'qligini " +
        "tekshirish kerak.\n\n" +
        "Bu qoida bitimlarga ham taalluqli: taraflar " +
        "qaysi davlat huquqini qo'llashni kelishib " +
        "olishlari mumkin va bu kelishuv hujjatda " +
        "aniq yozilishi kerak.",
      example:
        "Chet el kompaniyasi bilan tuzilgan shartnomada " +
        "qaysi davlat huquqi qo'llanishi yozilmagan. " +
        "Nizo chiqqanda bu masala alohida hal qilinishi " +
        "kerak bo'ladi va u ishni sezilarli " +
        "murakkablashtiradi.",
      keyPoints: [
        "Xalqaro shartnomalar qonunchilikning bir qismi",
        "Chet el elementi bo'lsa ular birinchi navbatda tekshiriladi",
        "Taraflar qo'llaniladigan huquqni kelishib olishlari mumkin",
        "Bu kelishuv shartnomada aniq yozilishi kerak",
      ],
      warning:
        "Chet el tomoni bilan shartnoma tuzayotganda " +
        "«qaysi huquq va qaysi sud» degan bandni bo'sh " +
        "qoldirmang. Nizo chiqqanda aynan shu band " +
        "hal qiluvchi bo'ladi.",
      lawRefs: [{ code: "FK", article: "7" }],
    },
    {
      heading: "Huquq va burchlar qanday asoslarda paydo bo'ladi",
      text:
        "Fuqarolik huquqi osmondan tushmaydi — u aniq " +
        "ASOSLARDAN kelib chiqadi va kodeks ularning " +
        "ro'yxatini beradi.\n\n" +
        "Eng keng tarqalgani — SHARTNOMA va boshqa " +
        "bitimlar. Ikkinchisi — qonunda nazarda tutilgan " +
        "hujjatlar (masalan davlat organining qarori). " +
        "Uchinchisi — sud qarori.\n\n" +
        "Yana bir guruh: mol-mulkni qonuniy asosda olish, " +
        "intellektual faoliyat natijasini yaratish, zarar " +
        "yetkazish (bu ham majburiyat keltirib chiqaradi), " +
        "asossiz boylik orttirish.\n\n" +
        "Va nihoyat — HODISALAR, ya'ni odamlarning " +
        "irodasiga bog'liq bo'lmagan voqealar (tug'ilish, " +
        "vafot, tabiiy hodisa). Ular ham huquqiy oqibat " +
        "keltiradi.\n\n" +
        "Amaliy foydasi: nizoda birinchi savol — " +
        "«huquqim qaysi asosdan kelib chiqadi?» Javob " +
        "aniq bo'lsa, dalil ham aniq bo'ladi.",
      example:
        "Fuqaro pul talab qilmoqda, lekin talabining " +
        "asosini ayta olmaydi. Asos aniqlanmaguncha " +
        "(shartnomami, zararmi, asossiz boylikmi) " +
        "qanday dalil kerakligi ham noma'lum qoladi.",
      keyPoints: [
        "Huquq aniq asoslardan kelib chiqadi",
        "Asosiy asos — shartnoma va boshqa bitimlar",
        "Sud qarori va davlat organi hujjati ham asos bo'ladi",
        "Hodisalar (tug'ilish, vafot) ham huquqiy oqibat keltiradi",
      ],
      warning:
        "Talabingizning asosini aniqlamasdan da'vo " +
        "yozmang. Noto'g'ri asos ko'rsatilsa, dalillar " +
        "to'g'ri bo'lsa ham talab qanoatlantirilmasligi " +
        "mumkin.",
      lawRefs: [{ code: "FK", article: "8" }],
    },
    {
      heading: "Huquqni amalga oshirish va uning chegarasi",
      text:
        "Fuqarolar va yuridik shaxslar o'z fuqarolik " +
        "huquqlarini O'Z IXTIYORIGA ko'ra amalga " +
        "oshiradilar. Ya'ni huquqdan foydalanish " +
        "majburiyat emas — undan foydalanmaslik ham " +
        "sizning tanlovingiz.\n\n" +
        "Muhim natija: huquqdan foydalanmaslik uning " +
        "BEKOR BO'LISHIGA olib kelmaydi (qonunda " +
        "boshqacha ko'rsatilgan hollardan tashqari). " +
        "Ya'ni «uzoq vaqt talab qilmadingiz, demak " +
        "huquqingiz yo'q» degan gap o'z-o'zidan " +
        "to'g'ri emas.\n\n" +
        "Lekin erkinlikning chegarasi bor: huquqni " +
        "amalga oshirish boshqa shaxslarning " +
        "huquqlarini buzmasligi kerak. Faqat " +
        "boshqasiga zarar yetkazish maqsadida " +
        "harakat qilish himoya qilinmaydi.\n\n" +
        "Bu chegara amalda «huquqni suiiste'mol " +
        "qilish» deb ataladi va u sudda alohida " +
        "e'tiborga olinadi.",
      example:
        "Mulkdor o'z yeridan foydalanish huquqiga ega, " +
        "lekin faqat qo'shnisiga ziyon berish maqsadida " +
        "qilingan harakat himoyaga loyiq emas.",
      keyPoints: [
        "Huquqdan foydalanish o'z ixtiyoringizda",
        "Foydalanmaslik huquqni bekor qilmaydi",
        "Chegara — boshqalarning huquqlari",
        "Faqat zarar berish maqsadidagi harakat himoyalanmaydi",
      ],
      warning:
        "Huquqdan foydalanmaslik uni bekor qilmasa ham, " +
        "DA'VO MUDDATI o'tib ketishi mumkin. Bu ikki " +
        "boshqa narsa — muddat masalasi alohida darsda " +
        "ko'rib chiqiladi.",
      lawRefs: [{ code: "FK", article: "9" }],
    },
    {
      heading: "Huquqni sud orqali himoya qilish",
      text:
        "Buzilgan yoki nizolashilayotgan huquqlarni " +
        "himoya qilishni SUD amalga oshiradi. Bu — " +
        "asosiy va universal yo'l.\n\n" +
        "Sud himoyasining qamrovi keng: u nafaqat " +
        "buzilgan, balki NIZOLASHILAYOTGAN huquqni " +
        "ham qamraydi. Ya'ni huquqingiz hali " +
        "buzilmagan, lekin uni kimdir inkor " +
        "qilayotgan bo'lsa ham sudga murojaat " +
        "qilish mumkin.\n\n" +
        "Ayrim hollarda huquqni himoya qilish " +
        "sudgacha, ma'muriy tartibda ham amalga " +
        "oshiriladi — lekin bu sud yo'lini " +
        "yopmaydi: ma'muriy tartibda qabul " +
        "qilingan qaror ustidan sudga shikoyat " +
        "qilish mumkin.\n\n" +
        "Amaliy xulosa: har qanday bosqichda sud " +
        "yo'li ochiq qoladi. «Bu masala sudga " +
        "tegishli emas» degan javobni tekshirmasdan " +
        "qabul qilmang.",
      example:
        "Tashkilot arizani rad etdi va «bu masalada " +
        "sudga murojaat qilib bo'lmaydi» dedi. " +
        "Aksincha — ma'muriy tartibdagi qaror " +
        "ustidan ham sudga shikoyat qilish mumkin.",
      keyPoints: [
        "Huquqni himoya qilishni asosan sud amalga oshiradi",
        "Buzilgan ham, nizolashilayotgan huquq ham himoyalanadi",
        "Ma'muriy tartib sud yo'lini yopmaydi",
        "Ma'muriy qaror ustidan sudga shikoyat qilinadi",
      ],
      warning:
        "Sudgacha majburiy tartib nazarda tutilgan " +
        "ayrim holatlar bor. Da'vo yozishdan oldin " +
        "shunday talab yo'qligini tekshiring — aks " +
        "holda ariza qaytarilishi mumkin.",
      lawRefs: [{ code: "FK", article: "10" }],
    },
    {
      heading: "Himoya qilishning usullari — to'liq ro'yxat",
      text:
        "Kodeks huquqni himoya qilishning aniq " +
        "USULLARINI sanab beradi. Bu ro'yxatni bilish " +
        "juda foydali: da'voda nimani so'rashingiz " +
        "aynan shu usullardan tanlanadi.\n\n" +
        "Asosiy usullar: huquqni TAN OLISH; huquq " +
        "buzilgunga qadar mavjud bo'lgan holatni " +
        "TIKLASH; buzilishga to'sqinlik qiluvchi " +
        "harakatlarni TO'XTATISH; bitimni haqiqiy " +
        "emas deb topish va uning oqibatlarini " +
        "qo'llash.\n\n" +
        "Mulkiy tomondan: majburiyatni ASLIDA " +
        "BAJARISHGA majburlash, ZARARNI qoplash, " +
        "NEUSTOYKA undirish, MA'NAVIY zararni " +
        "qoplash.\n\n" +
        "Shuningdek: davlat organi hujjatini " +
        "haqiqiy emas deb topish, huquqiy " +
        "munosabatni o'zgartirish yoki bekor " +
        "qilish.\n\n" +
        "Bir holatda bir necha usulni birga " +
        "qo'llash mumkin — masalan bitimni " +
        "haqiqiy emas deb topish va bir vaqtda " +
        "zararni qoplashni talab qilish.",
      example:
        "Sotib olingan mol-mulk bo'yicha nizoda " +
        "faqat «adolat» so'raldi. To'g'ri yo'l — " +
        "aniq usulni ko'rsatish: mulk huquqini " +
        "tan olish va mol-mulkni qaytarishni " +
        "talab qilish.",
      keyPoints: [
        "Kodeks himoya usullarining ro'yxatini beradi",
        "Da'vodagi talab shu usullardan tanlanadi",
        "Bir holatda bir necha usul birga qo'llanadi",
        "Aniq usul ko'rsatilmasa talab noaniq bo'lib qoladi",
      ],
      warning:
        "Da'voda «huquqimni tiklab bering» kabi " +
        "umumiy ibora yozmang. Sud aniq nima " +
        "qilishi kerakligini yozing — aks holda " +
        "qaror ham noaniq bo'ladi va uni ijro " +
        "etib bo'lmaydi.",
      lawRefs: [{ code: "FK", article: "11" }],
    },
    {
      heading: "Davlat organi hujjatini haqiqiy emas deb topish",
      text:
        "Alohida va juda kuchli himoya usuli: davlat " +
        "organining yoki fuqarolarning o'zini o'zi " +
        "boshqarish organining qonunga MUVOFIQ " +
        "BO'LMAGAN hujjatini sud haqiqiy emas deb " +
        "topishi mumkin.\n\n" +
        "Ya'ni davlat organi chiqargan hujjat " +
        "avtomatik ravishda daxlsiz emas — u " +
        "qonunga zid bo'lsa, sud uni bekor " +
        "qiladi.\n\n" +
        "Muhim davomi: bunday hujjat haqiqiy emas " +
        "deb topilsa, buzilgan huquq TIKLANADI " +
        "yoki boshqa usul bilan himoya qilinadi. " +
        "Ya'ni ish hujjatni bekor qilish bilan " +
        "tugamaydi — oqibatlari ham bartaraf " +
        "etiladi.\n\n" +
        "Bu usul ayniqsa ruxsat berilmagan, " +
        "mol-mulk olib qo'yilgan yoki cheklov " +
        "qo'yilgan holatlarda ishlatiladi.",
      example:
        "Organ qaror chiqarib mol-mulkdan " +
        "foydalanishni cheklab qo'ydi. Qaror " +
        "qonunga zid bo'lsa, uni haqiqiy emas " +
        "deb topish va cheklovni bekor qilish " +
        "talab qilinishi mumkin.",
      keyPoints: [
        "Qonunga zid hujjat sud tomonidan bekor qilinadi",
        "Davlat organi hujjati daxlsiz emas",
        "Bekor qilish bilan birga huquq ham tiklanadi",
        "Usul cheklov va olib qo'yish holatlarida samarali",
      ],
      warning:
        "Bunday shikoyatlar uchun ko'pincha " +
        "QISQA muddatlar belgilanadi. Hujjatni " +
        "olgan zahoti muddatni aniqlang — " +
        "kechikish huquqni yo'qotishi mumkin.",
      lawRefs: [{ code: "FK", article: "12" }],
    },
    {
      heading: "Huquqni shaxsning o'zi himoya qilishi",
      text:
        "Har bir holatda sudga borish shart emas — " +
        "kodeks huquqni O'ZINGIZ himoya qilish " +
        "imkonini ham beradi.\n\n" +
        "Lekin bu erkinlikning qat'iy chegarasi " +
        "bor: himoya usullari buzilishning " +
        "XARAKTERIGA MUTANOSIB bo'lishi va uni " +
        "to'xtatish uchun zarur bo'lgan " +
        "harakatlar doirasidan chiqmasligi " +
        "kerak.\n\n" +
        "Ya'ni o'zini o'zi himoya qilish " +
        "«o'z qo'li bilan hukm chiqarish» " +
        "degani emas. Mutanosiblik buzilsa, " +
        "himoya qilgan shaxsning o'zi " +
        "javobgar bo'lib qoladi.\n\n" +
        "Amalda bu ko'proq oldini olish " +
        "shaklida ishlaydi: mol-mulkni " +
        "ushlab qolish, kirishga yo'l " +
        "qo'ymaslik, bajarishni to'xtatib " +
        "turish kabi harakatlar.",
      example:
        "Ijaraga oluvchi to'lovni to'lamayotgan " +
        "bo'lsa, mutanosib chora ko'rish mumkin. " +
        "Lekin uning shaxsiy buyumlarini olib " +
        "qo'yish yoki kuch ishlatish — chegaradan " +
        "chiqish bo'ladi va javobgarlik keltiradi.",
      keyPoints: [
        "Huquqni o'zingiz himoya qilishingiz mumkin",
        "Usul buzilish xarakteriga mutanosib bo'lishi shart",
        "Zarur harakatlar doirasidan chiqib bo'lmaydi",
        "Chegaradan chiqilsa javobgarlik himoyalanuvchiga o'tadi",
      ],
      warning:
        "O'zini o'zi himoya qilishda kuch " +
        "ishlatish deyarli har doim chegaradan " +
        "chiqish deb baholanadi. Bunday holatda " +
        "haq bo'lsangiz ham ayblanuvchiga " +
        "aylanishingiz mumkin.",
      lawRefs: [{ code: "FK", article: "13" }],
    },
    {
      heading: "Zararni qoplash: real zarar va boy berilgan foyda",
      text:
        "Huquqi buzilgan shaxs o'ziga yetkazilgan " +
        "zararning to'liq qoplanishini talab " +
        "qilishi mumkin.\n\n" +
        "Zarar ikki qismdan iborat va ularni " +
        "ajrata bilish muhim. Birinchisi — REAL " +
        "ZARAR: huquqi buzilgan shaxsning " +
        "qilgan yoki qilishi lozim bo'lgan " +
        "xarajatlari, mol-mulkining yo'qolishi " +
        "yoki shikastlanishi.\n\n" +
        "Ikkinchisi — BOY BERILGAN FOYDA: " +
        "huquq buzilmaganda olinishi mumkin " +
        "bo'lgan, lekin olinmay qolgan daromad. " +
        "Uni ko'pchilik unutadi va faqat " +
        "xarajatni talab qiladi.\n\n" +
        "Umumiy prinsip — zarar TO'LIQ " +
        "qoplanadi. Kamroq hajmda qoplash " +
        "faqat qonun yoki shartnomada nazarda " +
        "tutilgan bo'lsa mumkin.\n\n" +
        "Amaliy talab: har ikki qism ham " +
        "hisob-kitob va hujjat bilan " +
        "asoslanishi kerak.",
      example:
        "Yetkazib beruvchi tovarni bermadi. " +
        "Real zarar — boshqa joydan qimmatroq " +
        "sotib olish farqi; boy berilgan foyda — " +
        "shu tovarni sotishdan olinishi mumkin " +
        "bo'lgan daromad.",
      keyPoints: [
        "Zarar to'liq qoplanadi — bu umumiy qoida",
        "Real zarar — xarajat va mol-mulk yo'qotilishi",
        "Boy berilgan foyda — olinmay qolgan daromad",
        "Har ikki qism hujjat bilan asoslanishi kerak",
      ],
      warning:
        "Boy berilgan foydani «taxminan» " +
        "ko'rsatish yetarli emas. Uni real " +
        "hisob-kitob bilan asoslang, aks " +
        "holda shu qism qanoatlantirilmaydi.",
      lawRefs: [{ code: "FK", article: "14" }],
    },
    {
      heading: "Davlat organlari yetkazgan zararni qoplash",
      text:
        "Alohida va muhim qoida: davlat organlari " +
        "hamda fuqarolarning o'zini o'zi boshqarish " +
        "organlari tomonidan yetkazilgan zarar ham " +
        "qoplanadi.\n\n" +
        "Bu zarar ularning qonunga xilof qarorlari, " +
        "harakatlari yoki HARAKATSIZLIGI natijasida " +
        "yuzaga kelishi mumkin. Harakatsizlik ham " +
        "asos bo'lishi — ko'pchilik bilmaydigan " +
        "muhim jihat.\n\n" +
        "Ya'ni organ biror ishni qilishi kerak " +
        "bo'lib, uni qilmagan bo'lsa va shu " +
        "sababdan zarar ko'rgan bo'lsangiz, " +
        "talab qo'yish mumkin.\n\n" +
        "Bu qoida Konstitutsiyadagi kafolatning " +
        "fuqarolik huquqidagi davomi — ya'ni u " +
        "shunchaki deklaratsiya emas, aniq " +
        "mexanizmga ega.",
      example:
        "Organ hujjatni qonunda belgilangan " +
        "muddatda rasmiylashtirmadi va shu " +
        "sababli bitim buzildi. Harakatsizlik " +
        "tufayli ko'rilgan zararni qoplash " +
        "talabini qo'yish mumkin.",
      keyPoints: [
        "Davlat organi yetkazgan zarar ham qoplanadi",
        "Asos — qonunga xilof qaror, harakat yoki harakatsizlik",
        "Harakatsizlik ham mustaqil asos bo'la oladi",
        "Bu Konstitutsiyaviy kafolatning amaliy mexanizmi",
      ],
      warning:
        "Bunday ishlarda sabab-oqibat bog'liqligini " +
        "isbotlash eng qiyin qism bo'ladi. " +
        "Murojaatlaringiz, javoblar va sanalarni " +
        "boshidanoq hujjat bilan qayd etib boring.",
      lawRefs: [{ code: "FK", article: "15" }],
    },
  ],
};

module.exports = { LESSON };
