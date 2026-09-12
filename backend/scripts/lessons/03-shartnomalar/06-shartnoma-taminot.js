"use strict";
/** SHARTNOMALAR MODULI — 6-DARS: MAJBURIYAT TA'MINOTI. FK 259–312. */

const LESSON = {
  key: "shartnoma-taminot",
  category: "contracts",
  level: "mid",
  order: 3060,
  title: "Majburiyat ta'minoti: neustoyka, garov, kafillik",
  desc:
    "Ta'minot usullari: neustoyka, garov va uning turlari, undiruvni " +
    "garovga qaratish, ushlab qolish, kafillik, kafolat va zakalat.",
  objectives: [
    "Ta'minot usullarining to'liq ro'yxatini bilasiz",
    "Neustoyka turlarini va uni kamaytirish imkonini bilasiz",
    "Garov qanday rasmiylashtirilishini bilasiz",
    "Undiruv garovga qanday qaratilishini bilasiz",
    "Kafillik va kafolat farqini tushunasiz",
    "Zakalat va bo'nak farqini bilasiz",
  ],
  practicalSteps: [
    "Shartnomada neustoyka miqdorini aniq foiz va bazasi bilan yozing",
    "Garov shartnomasini yozma tuzing va zarur hollarda ro'yxatdan o'tkazing",
    "Kafil bo'lishdan oldin asosiy qarz summasini va muddatini aniqlang",
    "Zakalatni bo'nakdan ajratish uchun hujjatda \"zakalat\" so'zini yozing",
    "Garov predmetining holatini bitim paytida foto bilan qayd eting",
  ],
  sections: [
    {
      heading: "Ta'minot nima uchun kerak va uning usullari",
      text:
        "Majburiyatlarning bajarilishi NEUSTOYKA, GAROV, " +
        "qarzdorning mol-mulkini USHLAB QOLISH, KAFILLIK, " +
        "KAFOLAT, ZAKALAT va qonun yoki shartnomada nazarda " +
        "tutilgan boshqa usullar bilan ta'minlanishi mumkin.\n\n" +
        "⚠️ TA'MINOT NIMA BERADI: shartnoma buzilganda " +
        "kreditorning ahvolini yengillashtiradi. Ta'minotsiz " +
        "kreditor faqat sudga murojaat qilib zararni " +
        "isbotlashi kerak; ta'minot bilan esa uning " +
        "pozitsiyasi ancha kuchli bo'ladi.\n\n" +
        "ASOSIY QOIDA: ta'minot to'g'risidagi kelishuvning " +
        "haqiqiy emasligi ASOSIY majburiyatning haqiqiy " +
        "emasligiga olib kelmaydi.\n\n" +
        "TESKARI QOIDA ESA BOSHQACHA: asosiy majburiyatning " +
        "haqiqiy emasligi ta'minot majburiyatining ham " +
        "haqiqiy emasligiga olib keladi.\n\n" +
        "Ya'ni ta'minot asosiy majburiyatga BOG'LIQ " +
        "(aksessuar) — u mustaqil yashamaydi. Bankning " +
        "kafolati esa bunga istisno bo'ladi.\n\n" +
        "AMALIY XULOSA: kreditor sifatida — har doim " +
        "kamida bitta ta'minot usulini so'rang; qarzdor " +
        "sifatida — ta'minot hajmini asosiy majburiyatga " +
        "mutanosib qilishga harakat qiling.",
      example:
        "Shartnoma haqiqiy emas deb topildi — u bilan " +
        "bog'liq garov ham kuchini yo'qotadi.",
      keyPoints: [
        "Ta'minot usullari: neustoyka, garov, ushlab qolish va boshqalar",
        "Ta'minot kreditor pozitsiyasini kuchaytiradi",
        "Ta'minotning kuchsizligi asosiy majburiyatga ta'sir qilmaydi",
        "Asosiy majburiyat kuchsiz bo'lsa ta'minot ham kuchsiz",
      ],
      warning:
        "Ta'minotsiz katta summali shartnoma — undirish " +
        "bosqichida jiddiy muammo.",
      lawRefs: [
        { code: "FK", article: "259" },
        { code: "FK", article: "259-1" },
      ],
    },
    {
      heading: "Neustoyka: tushunchasi, shakli va turlari",
      text:
        "NEUSTOYKA (jarima, penya) — qonun yoki shartnoma bilan " +
        "belgilangan, majburiyat bajarilmaganda yoki lozim " +
        "darajada bajarilmaganda qarzdor kreditorga to'lashi " +
        "shart bo'lgan pul summasi.\n\n" +
        "⚠️ ENG KATTA AFZALLIGI: neustoykani talab qilishda " +
        "kreditor ZARAR KO'RGANINI ISBOTLASHI SHART EMAS. " +
        "Bu zarardan tubdan farq qiladi va shuning uchun " +
        "neustoyka amalda eng qulay vosita.\n\n" +
        "SHAKLLARI: JARIMA — bir martalik summa yoki foiz; " +
        "PENYA — har bir kechikkan kun uchun hisoblanadigan " +
        "davomiy to'lov.\n\n" +
        "SHAKL TALABI QAT'IY: neustoyka to'g'risidagi " +
        "kelishuv YOZMA shaklda tuzilishi kerak — asosiy " +
        "majburiyat shaklidan qat'i nazar. Yozma shaklga " +
        "rioya qilmaslik kelishuvni HAQIQIY EMAS " +
        "qiladi.\n\n" +
        "QONUNIY NEUSTOYKA: qonunda nazarda tutilgan " +
        "neustoykani kreditor shartnomada ko'rsatilmagan " +
        "bo'lsa ham talab qilishi mumkin. Uning miqdori " +
        "tomonlar kelishuvi bilan oshirilishi mumkin — " +
        "qonun taqiqlamasa.\n\n" +
        "AMALIY MASLAHAT: shartnomada neustoykani aniq " +
        "yozing — foiz miqdori, hisoblash bazasi va eng " +
        "yuqori chegara.",
      example:
        "Yetkazib berish kechikdi — kreditor zararni " +
        "isbotlamasdan shartnomadagi penyani talab qila " +
        "oladi.",
      keyPoints: [
        "Neustoyka uchun zararni isbotlash shart emas",
        "Shakllari: jarima va penya",
        "Kelishuv yozma bo'lishi shart",
        "Qonuniy neustoyka shartnomasiz ham talab qilinadi",
      ],
      warning:
        "Og'zaki kelishilgan neustoyka undirilmaydi — uni " +
        "shartnomaga yozing.",
      lawRefs: [
        { code: "FK", article: "260" },
        { code: "FK", article: "261" },
        { code: "FK", article: "262" },
        { code: "FK", article: "263" },
      ],
    },
    {
      heading: "Neustoyka va zarar, neustoykani kamaytirish",
      text:
        "Neustoyka bilan zarar qanday munosabatda bo'ladi — bu " +
        "amalda tez-tez chalkashtiriladi.\n\n" +
        "UMUMIY QOIDA: zarar neustoyka bilan qoplanmagan " +
        "qismda undiriladi. Ya'ni avval neustoyka " +
        "hisoblanadi, zarar undan katta bo'lsa farqi " +
        "undiriladi.\n\n" +
        "SHARTNOMADA BOSHQACHA BELGILANISHI MUMKIN: faqat " +
        "neustoyka undirilishi; zarar to'liq undirilishi; " +
        "kreditorning tanloviga ko'ra neustoyka yoki zarar " +
        "undirilishi.\n\n" +
        "⚠️ NEUSTOYKANI KAMAYTIRISH — QARZDOR UCHUN ENG " +
        "MUHIM HIMOYA: to'lanishi lozim bo'lgan neustoyka " +
        "majburiyatning buzilishi oqibatlariga aniq " +
        "NOMUTANOSIB bo'lsa, sud uni KAMAYTIRISHGA " +
        "haqli.\n\n" +
        "Ya'ni shartnomada juda katta penya yozilgan " +
        "bo'lsa ham, u avtomatik to'liq undirilmaydi.\n\n" +
        "AMALIY XULOSA QARZDORGA: sudda neustoykani " +
        "kamaytirish haqida ALOHIDA ariza bering va " +
        "nomutanosiblikni asoslang — kreditor haqiqiy " +
        "zarar ko'rmaganini, kechikish qisqa bo'lganini, " +
        "penya stavkasi bozor darajasidan yuqoriligini " +
        "ko'rsating.\n\n" +
        "PUL MAJBURIYATI bo'yicha kechikish uchun esa " +
        "alohida qoida bor: begona pul mablag'laridan " +
        "foydalanganlik uchun foizlar to'lanadi.",
      example:
        "Kunlik penya bir necha oy davomida hisoblanib " +
        "asosiy qarzdan oshib ketdi — sud uni " +
        "kamaytirishi mumkin.",
      keyPoints: [
        "Zarar odatda neustoykadan ortiq qismda undiriladi",
        "Shartnoma boshqacha qoida belgilashi mumkin",
        "Nomutanosib neustoykani sud kamaytiradi",
        "Kamaytirish haqida alohida ariza berish kerak",
      ],
      warning:
        "Sud neustoykani o'zi kamaytirmasligi mumkin — " +
        "ariza bering.",
      lawRefs: [
        { code: "FK", article: "325" },
        { code: "FK", article: "326" },
        { code: "FK", article: "327" },
      ],
    },
    {
      heading: "Garov: tushunchasi va vujudga kelishi",
      text:
        "GAROV — kreditorning (garovga oluvchining) qarzdor " +
        "majburiyatni bajarmaganda garovga qo'yilgan " +
        "mol-mulk qiymatidan boshqa kreditorlarga nisbatan " +
        "USTUN tarzda qondirilish huquqi.\n\n" +
        "⚠️ \"USTUN TARZDA\" — GAROVNING BUTUN MOHIYATI SHU. " +
        "Qarzdorda ko'p kreditor bo'lsa, garovga oluvchi " +
        "birinchi navbatda qondiriladi.\n\n" +
        "GAROVGA QO'YUVCHI mol-mulk mulkdori yoki qonunda " +
        "nazarda tutilgan hollarda boshqa shaxs bo'lishi " +
        "mumkin. Ya'ni UCHINCHI SHAXSNING mol-mulki ham " +
        "garovga qo'yilishi mumkin.\n\n" +
        "GAROV NARSASI: har qanday mol-mulk, shu jumladan " +
        "ashyolar va mulkiy huquqlar — muomaladan " +
        "chiqarilgan mol-mulk va shaxs bilan uzviy " +
        "bog'liq talablardan tashqari.\n\n" +
        "SHAKL: garov to'g'risidagi shartnoma YOZMA " +
        "shaklda tuziladi. Ipoteka va qonunda nazarda " +
        "tutilgan boshqa hollarda notarial tasdiqlanadi " +
        "va ro'yxatdan o'tkaziladi.\n\n" +
        "SHAKLGA RIOYA QILMASLIK garovni HAQIQIY EMAS " +
        "qiladi — bu qat'iy qoida.\n\n" +
        "GAROV TURLARI: mol-mulk garovga oluvchida " +
        "qoldirilishi yoki unga topshirilishi mumkin " +
        "(ikkinchisi zaklad deb ataladi).",
      example:
        "Kredit bo'yicha uy garovga qo'yildi va shartnoma " +
        "ro'yxatdan o'tkazildi — bank ustun huquqqa ega " +
        "bo'ladi.",
      keyPoints: [
        "Garov ustun tarzda qondirilish huquqini beradi",
        "Uchinchi shaxsning mol-mulki ham garovga qo'yiladi",
        "Shartnoma yozma bo'lishi shart",
        "Ipoteka notarial tasdiqlanadi va ro'yxatdan o'tkaziladi",
      ],
      warning:
        "Boshqa shaxs qarzi uchun mulkingizni garovga " +
        "qo'yish — uni yo'qotish xavfini olish demakdir.",
      lawRefs: [
        { code: "FK", article: "264" },
        { code: "FK", article: "265" },
        { code: "FK", article: "266" },
        { code: "FK", article: "267" },
        { code: "FK", article: "271" },
      ],
    },
    {
      heading: "Garovga qo'yilgan mol-mulk bilan bog'liq huquqlar",
      text:
        "SAQLASH VA ASRASH: garovga qo'yilgan mol-mulk kimda " +
        "bo'lsa, o'sha uni saqlash va asrash majburiyatini " +
        "ko'taradi. Shuningdek uni sug'urtalash va boshqa " +
        "tomonni tekshirishga yo'l qo'yish majburiyati " +
        "yuzaga kelishi mumkin.\n\n" +
        "YO'QOLISH YOKI SHIKASTLANISH: mol-mulk garovga " +
        "oluvchida bo'lgan paytda yo'qolsa yoki " +
        "shikastlansa, u javobgar bo'ladi.\n\n" +
        "ALMASHTIRISH VA TIKLASH: garov narsasi nobud " +
        "bo'lsa yoki unga bo'lgan huquq bekor bo'lsa, " +
        "garovga qo'yuvchi uni oqilona muddat ichida " +
        "tiklash yoki teng qiymatli mol-mulk bilan " +
        "almashtirish huquqiga ega.\n\n" +
        "⚠️ FOYDALANISH VA TASARRUF ETISH: garovga " +
        "qo'yuvchi mol-mulkdan odatda foydalanishda davom " +
        "etadi, lekin uni TASARRUF ETISH (sotish, hadya " +
        "qilish, keyingi garovga qo'yish) uchun garovga " +
        "oluvchining ROZILIGI kerak — shartnomada " +
        "boshqacha nazarda tutilmagan bo'lsa.\n\n" +
        "GAROV MOL-MULK BILAN BIRGA O'TADI: garovga " +
        "qo'yilgan mol-mulkka bo'lgan huquq boshqa shaxsga " +
        "o'tsa, GAROV SAQLANADI. Bu xaridor uchun jiddiy " +
        "xavf.\n\n" +
        "AMALIY XULOSA XARIDORGA: qimmat mol-mulk sotib " +
        "olishdan oldin u garovda emasligini " +
        "tekshiring — aks holda uni to'lagan pulingiz " +
        "bilan birga yo'qotishingiz mumkin.\n\n" +
        "NAVBATDAGI GAROV: mol-mulk bir necha marta " +
        "garovga qo'yilishi mumkin va talablar navbat " +
        "bo'yicha qondiriladi.",
      example:
        "Garovdagi mashina sotildi — yangi egasi uchun ham " +
        "garov saqlanadi va unga undiruv qaratilishi " +
        "mumkin.",
      keyPoints: [
        "Mol-mulk kimda bo'lsa u saqlash yukini ko'taradi",
        "Tasarruf etish uchun garovga oluvchi roziligi kerak",
        "Garov mol-mulk bilan birga yangi egasiga o'tadi",
        "Bir mol-mulk bir necha marta garovga qo'yilishi mumkin",
      ],
      warning:
        "Xarid oldidan garov ro'yxatini tekshirmaslik — eng " +
        "qimmat xato.",
      lawRefs: [
        { code: "FK", article: "273" },
        { code: "FK", article: "274" },
        { code: "FK", article: "275" },
        { code: "FK", article: "276" },
        { code: "FK", article: "277" },
        { code: "FK", article: "284" },
      ],
    },
    {
      heading: "Undiruvni garovga qaratish va garovning bekor bo'lishi",
      text:
        "Undiruv garovga qo'yilgan mol-mulkka qarzdor " +
        "majburiyatni BAJARMAGANDA yoki lozim darajada " +
        "bajarmaganda qaratiladi.\n\n" +
        "⚠️ MUHIM HIMOYA: buzilish JUDA KICHIK bo'lsa va " +
        "garovga oluvchining talablari garov predmeti " +
        "qiymatiga aniq NOMUTANOSIB bo'lsa, undiruv " +
        "qaratilishi rad etilishi mumkin.\n\n" +
        "Ya'ni bir oylik kechikish uchun butun uyni olib " +
        "qo'yish mumkin emas.\n\n" +
        "TARTIBI: undiruv odatda SUD tartibida " +
        "qaratiladi. Qonunda nazarda tutilgan hollarda " +
        "sudsiz tartib ham qo'llanilishi mumkin.\n\n" +
        "SOTISH: garovga qo'yilgan mol-mulk qonunda " +
        "belgilangan tartibda, odatda ochiq savdo orqali " +
        "sotiladi. Sotishdan tushgan summa talabdan " +
        "ortiq bo'lsa, farq garovga qo'yuvchiga " +
        "qaytariladi; yetmasa, garovga oluvchi " +
        "qarzdorning boshqa mol-mulkidan undirishga " +
        "haqli.\n\n" +
        "BEKOR BO'LISHI: garov majburiyat bekor " +
        "bo'lganda; garov narsasi nobud bo'lganda; " +
        "mol-mulk ochiq savdoda sotilganda va qonunda " +
        "nazarda tutilgan boshqa hollarda bekor " +
        "bo'ladi.\n\n" +
        "LOMBARD garovi va MUOMALADAGI TOVARLAR garovi " +
        "uchun alohida qoidalar amal qiladi.",
      example:
        "Garovdagi uy sotildi va summa qarzdan ortdi — " +
        "farq garovga qo'yuvchiga qaytariladi.",
      keyPoints: [
        "Undiruv majburiyat bajarilmaganda qaratiladi",
        "Nomutanosib holatda undiruv rad etilishi mumkin",
        "Mol-mulk odatda ochiq savdoda sotiladi",
        "Ortiqcha summa garovga qo'yuvchiga qaytariladi",
      ],
      warning:
        "Kichik kechikishda ham banklar undiruvni " +
        "boshlashi mumkin — muddatlarni kuzating.",
      lawRefs: [
        { code: "FK", article: "279" },
        { code: "FK", article: "280" },
        { code: "FK", article: "281" },
        { code: "FK", article: "283" },
        { code: "FK", article: "289" },
      ],
    },
    {
      heading: "Ushlab qolish huquqi",
      text:
        "USHLAB QOLISH — kam ma'lum, lekin juda samarali " +
        "vosita.\n\n" +
        "Qarzdorga topshirilishi lozim bo'lgan ASHYO " +
        "kreditorda bo'lsa, u qarzdor majburiyatni " +
        "bajarmaguncha ashyoni USHLAB QOLISHGA haqli.\n\n" +
        "⚠️ AMALIY MISOLLAR: ta'mirlangan texnikani " +
        "to'lovgacha bermaslik; saqlashga topshirilgan " +
        "ashyoni saqlash haqi to'langunicha ushlab " +
        "qolish; bajarilgan ish natijasini to'lovgacha " +
        "topshirmaslik.\n\n" +
        "Bu — SUDSIZ ishlaydigan vositalardan biri, " +
        "shuning uchun u amalda juda foydali.\n\n" +
        "TALABLARNI QONDIRISH: ushlab qolingan ashyo " +
        "hisobidan talablar GAROV uchun nazarda tutilgan " +
        "tartibda va hajmda qondiriladi.\n\n" +
        "MUHIM CHEGARA: ushlab qolish faqat KREDITORDA " +
        "QONUNIY asosda bo'lgan ashyoga nisbatan " +
        "qo'llaniladi. Qarzdorning ashyosini o'zi olib " +
        "qo'yish ushlab qolish EMAS — bu " +
        "o'zboshimchalik va u huquqbuzarlik " +
        "hisoblanadi.\n\n" +
        "AMALIY MASLAHAT: ushlab qolayotganingizda " +
        "qarzdorga YOZMA xabar bering va sababni " +
        "ko'rsating — bu keyinchalik sizning " +
        "harakatingizni qonuniy asoslashga yordam " +
        "beradi.",
      example:
        "Ta'mirlangan uskuna to'lov qilinmagani uchun " +
        "ustaxonada qoldirildi — bu qonuniy ushlab " +
        "qolish.",
      keyPoints: [
        "Ushlab qolish sudsiz ishlaydigan vosita",
        "Ashyo kreditorda qonuniy asosda bo'lishi kerak",
        "Talablar garov tartibida qondiriladi",
        "Qarzdor ashyosini o'zi olib qo'yish taqiqlanadi",
      ],
      warning:
        "Ushlab qolish sababini yozma bildirmaslik — uni " +
        "noqonuniy egallashga o'xshatib qo'yadi.",
      lawRefs: [
        { code: "FK", article: "290" },
        { code: "FK", article: "291" },
      ],
    },
    {
      heading: "Kafillik: eng xavfli majburiyat",
      text:
        "KAFILLIK shartnomasi bo'yicha kafil boshqa shaxsning " +
        "kreditori oldida uning majburiyatini to'liq yoki " +
        "qisman bajarish uchun JAVOB BERISH majburiyatini " +
        "oladi.\n\n" +
        "SHAKL: kafillik shartnomasi YOZMA shaklda tuziladi. " +
        "Rioya qilmaslik uni HAQIQIY EMAS qiladi.\n\n" +
        "⚠️ JAVOBGARLIK HAJMI KO'PCHILIKKA NOMA'LUM: kafil " +
        "va qarzdor umumiy qoida bo'yicha kreditor oldida " +
        "SOLIDAR javob beradi. Ya'ni kreditor to'g'ridan-" +
        "to'g'ri KAFILGA murojaat qilishi mumkin — avval " +
        "qarzdordan undirishga urinish SHART EMAS.\n\n" +
        "Kafil asosiy qarz, foizlar, sud xarajatlari va " +
        "kreditorning boshqa zararlari uchun ham javob " +
        "beradi — shartnomada boshqacha nazarda " +
        "tutilmagan bo'lsa.\n\n" +
        "KAFIL HUQUQLARI: majburiyatni bajargan kafilga " +
        "kreditor huquqlari o'tadi — ya'ni u qarzdordan " +
        "to'langan summani, foizlarni va zararni talab " +
        "qilishi mumkin.\n\n" +
        "Kafil qarzdorning kreditorga qarshi e'tirozlarini " +
        "ham bildirishga haqli.\n\n" +
        "BEKOR BO'LISHI: asosiy majburiyat bekor " +
        "bo'lganda; kafil roziligisiz majburiyat " +
        "o'zgartirilib javobgarlik oshganda; qarz boshqa " +
        "shaxsga o'tkazilib kafil rozi bo'lmaganda; " +
        "muddat tugaganda.\n\n" +
        "AMALIY MASLAHAT: kafillikda MUDDAT va ENG " +
        "YUQORI SUMMA cheklovini albatta yozing.",
      example:
        "Qarzdor to'lamadi — kreditor to'g'ridan-to'g'ri " +
        "kafilga da'vo qo'ydi va bu qonuniy.",
      keyPoints: [
        "Kafil boshqa shaxs majburiyati uchun javob beradi",
        "Javobgarlik odatda solidar bo'ladi",
        "Kreditor to'g'ridan-to'g'ri kafilga murojaat qila oladi",
        "To'lagan kafilga kreditor huquqlari o'tadi",
      ],
      warning:
        "\"Faqat rasmiyatchilik uchun\" kafil bo'lish " +
        "degan narsa yo'q — bu haqiqiy qarz.",
      lawRefs: [
        { code: "FK", article: "292" },
        { code: "FK", article: "293" },
        { code: "FK", article: "294" },
        { code: "FK", article: "295" },
        { code: "FK", article: "298" },
      ],
    },
    {
      heading: "Kafolat va uning kafillikdan farqi",
      text:
        "KAFOLAT bo'yicha kafil (odatda bank yoki sug'urta " +
        "tashkiloti) boshqa shaxsning (prinsipalning) " +
        "iltimosiga ko'ra kreditorga (benefitsiarga) " +
        "yozma majburiyat beradi va uning yozma talabiga " +
        "binoan pul summasini to'laydi.\n\n" +
        "⚠️ KAFILLIKDAN ENG MUHIM FARQI — MUSTAQILLIK: " +
        "kafolat bo'yicha majburiyat ASOSIY MAJBURIYATDAN " +
        "MUSTAQIL. Asosiy majburiyat bekor bo'lgan yoki " +
        "haqiqiy emas deb topilgan bo'lsa ham, kafolat " +
        "amal qilishda davom etadi.\n\n" +
        "Bu kafolatni kreditor uchun ancha ishonchli " +
        "qiladi va shuning uchun u yirik bitimlarda " +
        "ishlatiladi.\n\n" +
        "CHAQIRIB OLINMASLIK: kafolat chaqirib olinmaydi " +
        "— unda boshqacha nazarda tutilmagan bo'lsa.\n\n" +
        "O'TKAZILMASLIK: benefitsiarning kafolat bo'yicha " +
        "talab huquqi boshqa shaxsga o'tkazilmaydi — " +
        "kafolatda boshqacha nazarda tutilmagan bo'lsa.\n\n" +
        "TALAB QO'YISH: benefitsiar yozma talab qo'yadi " +
        "va unda prinsipal majburiyatni qanday " +
        "buzganini ko'rsatadi. Kafil talabni ko'rib " +
        "chiqadi va shartlarga mos kelmasa rad etishi " +
        "mumkin.\n\n" +
        "REGRESS: to'lagan kafil prinsipaldan summani " +
        "qaytarishni talab qilishga haqli.\n\n" +
        "AMALIY XULOSA: kafolat matnini diqqat bilan " +
        "o'qing — talab qo'yish shartlari va muddati " +
        "aynan unda belgilanadi.",
      example:
        "Bank kafolati bo'yicha talab qo'yildi — kafil " +
        "asosiy shartnoma bo'yicha bahsga kirmasdan " +
        "to'laydi.",
      keyPoints: [
        "Kafolat asosiy majburiyatdan mustaqil",
        "U odatda chaqirib olinmaydi",
        "Talab yozma shaklda qo'yiladi",
        "To'lagan kafil prinsipaldan qaytarishni talab qiladi",
      ],
      warning:
        "Kafolat muddati o'tib ketsa talab qo'yish imkoni " +
        "yo'qoladi.",
      lawRefs: [
        { code: "FK", article: "299" },
        { code: "FK", article: "301" },
        { code: "FK", article: "302" },
        { code: "FK", article: "305" },
        { code: "FK", article: "309" },
        { code: "FK", article: "310" },
      ],
    },
    {
      heading: "Zakalat va uning bo'nakdan farqi",
      text:
        "ZAKALAT — shartnoma bo'yicha to'lanishi lozim bo'lgan " +
        "to'lovlar hisobiga bir tomon ikkinchisiga beradigan " +
        "va shartnoma tuzilganini isbotlash hamda uning " +
        "bajarilishini ta'minlash uchun xizmat qiladigan " +
        "pul summasi.\n\n" +
        "SHAKL: zakalat to'g'risidagi kelishuv YOZMA " +
        "shaklda tuziladi — summasidan qat'i nazar.\n\n" +
        "⚠️ ZAKALATNING ASOSIY QOIDASI — JAZO FUNKSIYASI:\n\n" +
        "Shartnoma ZAKALAT BERGAN tomon aybi bilan " +
        "bajarilmasa — zakalat unda QOLADI (ya'ni " +
        "qaytarilmaydi).\n\n" +
        "Shartnoma ZAKALAT OLGAN tomon aybi bilan " +
        "bajarilmasa — u zakalatni IKKI BARAVAR " +
        "miqdorda qaytaradi.\n\n" +
        "BO'NAKDAN FARQI AYNAN SHU: bo'nak faqat oldindan " +
        "to'lov, u jazo funksiyasini bajarmaydi va " +
        "shartnoma bajarilmasa oddiy qaytariladi.\n\n" +
        "MUHIM AMALIY QOIDA: agar hujjatda \"zakalat\" " +
        "so'zi yozilmagan bo'lsa va shubha bo'lsa, " +
        "to'langan summa BO'NAK deb hisoblanadi.\n\n" +
        "Ya'ni zakalat kuchini olish uchun uni ATAYLAB " +
        "shunday nomlash kerak.\n\n" +
        "AMALIY XULOSA: kuchli ta'minot istasangiz " +
        "hujjatda aniq \"zakalat\" deb yozing; " +
        "aksincha, xavfni kamaytirmoqchi bo'lsangiz " +
        "\"bo'nak\" deb yozing. Bitta so'z summaning " +
        "taqdirini o'zgartiradi.",
      example:
        "Hujjatda \"bo'nak\" deb yozilgan edi — shartnoma " +
        "buzilganda u oddiy qaytarildi, ikki baravar " +
        "emas.",
      keyPoints: [
        "Zakalat isbot va ta'minot vazifasini bajaradi",
        "Bergan tomon aybi bilan buzilsa zakalat qolib ketadi",
        "Olgan tomon aybi bilan buzilsa ikki baravar qaytariladi",
        "Shubha bo'lsa summa bo'nak deb hisoblanadi",
      ],
      warning:
        "Hujjatda atamani aniq yozmaslik — himoyani " +
        "yo'qotish demakdir.",
      lawRefs: [
        { code: "FK", article: "311" },
        { code: "FK", article: "312" },
      ],
    },
  ],
};

module.exports = { LESSON };
