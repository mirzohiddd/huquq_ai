"use strict";
/** SHARTNOMALAR MODULI — 11-DARS: QARZ, KREDIT VA BANK. FK2 732–816. */

const LESSON = {
  key: "qarz-kredit",
  category: "contracts",
  level: "mid",
  order: 3110,
  title: "Qarz, kredit va bank omonati",
  desc:
    "Qarz shartnomasi va uning shakli, foizlar, kredit shartnomasi, " +
    "faktoring, bank omonati va hisobvarag'i, hisob-kitob shakllari " +
    "hamda bank javobgarligi.",
  objectives: [
    "Qarz shartnomasi qachon tuzilgan hisoblanishini bilasiz",
    "Tilxat qanday yozilishi kerakligini bilasiz",
    "Foizlar qoidasini va aniq maqsadli qarzni bilasiz",
    "Kredit shartnomasining qarzdan farqini bilasiz",
    "Bank omonati bo'yicha huquqlaringizni bilasiz",
    "Hisobvaraqdan pul o'chirish asoslari va navbatini bilasiz",
  ],
  practicalSteps: [
    "Qarz berganda tilxat oling: summa, sana, tomonlar va qaytarish muddati bilan",
    "Qarz qaytarilganda tilxatni qaytarib oling yoki uni yo'q qilinganini qayd eting",
    "Kredit shartnomasida yillik to'liq xarajatni va jarimalarni tekshiring",
    "Omonat shartnomasida foiz o'zgartirish sharti borligini o'qing",
    "Hisobvaraqdan asossiz pul o'chirilsa bankka darhol yozma murojaat qiling",
  ],
  sections: [
    {
      heading: "Qarz shartnomasi: real shartnoma",
      text:
        "QARZ shartnomasi bo'yicha qarz beruvchi qarz oluvchining " +
        "mulkiga pul yoki turga xos alomatlari bilan " +
        "belgilanadigan ashyolarni beradi, qarz oluvchi esa " +
        "shuncha miqdordagi pul yoki shunday ashyolarni " +
        "qaytarish majburiyatini oladi.\n\n" +
        "⚠️ ENG MUHIM XUSUSIYAT — QARZ REAL SHARTNOMA: u pul " +
        "yoki ashyolar HAQIQATDA TOPSHIRILGAN paytdan " +
        "tuzilgan hisoblanadi.\n\n" +
        "Ya'ni \"qarz beraman\" degan va'da o'z-o'zidan qarz " +
        "shartnomasi emas va uni bajarishga majbur qilib " +
        "bo'lmaydi.\n\n" +
        "SHAKL: fuqarolar o'rtasida qonunda belgilangan " +
        "summadan ortiq qarz, qarz beruvchi yuridik shaxs " +
        "bo'lganda esa summasidan qat'i nazar — YOZMA " +
        "shaklda tuziladi.\n\n" +
        "TILXAT: yozma shakl sifatida qarz oluvchining " +
        "TILXATI yoki pul hamda ashyolar berilganini " +
        "tasdiqlovchi boshqa hujjat ham qabul " +
        "qilinadi.\n\n" +
        "⚠️ TILXATDA NIMA BO'LISHI KERAK: kim kimga, qancha " +
        "summa, qachon berdi, qachon qaytariladi, " +
        "tomonlarning to'liq ma'lumotlari va imzo. " +
        "Summani so'z bilan ham yozish xavfni " +
        "kamaytiradi.\n\n" +
        "DA'VOLASHISH: qarz oluvchi pul yoki ashyolar " +
        "haqiqatda olinmaganini yoki kamroq olinganini " +
        "isbotlab, shartnomani da'volashishga haqli. " +
        "Yozma shakl talab qilinganda esa buni guvohlar " +
        "ko'rsatuvi bilan isbotlab bo'lmaydi (aldash, " +
        "zo'rlik va shu kabi hollardan tashqari).",
      example:
        "Katta summa tilxatsiz berildi — nizoda uni " +
        "isbotlash uchun guvohlar yetarli bo'lmadi.",
      keyPoints: [
        "Qarz pul topshirilgan paytdan tuzilgan hisoblanadi",
        "Qarz berish va'dasi shartnoma emas",
        "Tilxat yozma shakl talabini qanoatlantiradi",
        "Yozma shakl buzilsa guvohlarga tayanib bo'lmaydi",
      ],
      warning:
        "Tilxatsiz qarz — deyarli isbotlab bo'lmaydigan " +
        "qarz.",
      lawRefs: [
        { code: "FK2", article: "732" },
        { code: "FK2", article: "733" },
        { code: "FK2", article: "737" },
      ],
    },
    {
      heading: "Qarz bo'yicha foizlar va qaytarish",
      text:
        "FOIZLAR: qarz beruvchi qarz summasidan foizlar olishga " +
        "haqli — shartnomada boshqacha nazarda tutilmagan " +
        "bo'lsa. Foiz miqdori va to'lash tartibi " +
        "shartnomada belgilanadi.\n\n" +
        "Shartnomada foiz miqdori ko'rsatilmagan bo'lsa, u " +
        "qonunda belgilangan tartibda aniqlanadi.\n\n" +
        "⚠️ FOIZSIZ QARZ ham bo'lishi mumkin — lekin buni " +
        "SHARTNOMADA aniq yozish kerak. Aks holda foiz " +
        "talab qilinishi mumkin.\n\n" +
        "QAYTARISH: qarz oluvchi summani shartnomada " +
        "belgilangan muddatda va tartibda qaytarishi " +
        "shart. Muddat belgilanmagan yoki talab qilib " +
        "olinguncha berilgan bo'lsa — qarz beruvchi " +
        "talab qilgan kundan qonunda belgilangan muddat " +
        "ichida qaytarilishi kerak.\n\n" +
        "QARZ QAYTARILGAN PAYT: summa qarz beruvchiga " +
        "berilgan yoki uning bank hisobvarag'iga " +
        "o'tkazilgan paytdan qaytarilgan hisoblanadi.\n\n" +
        "BUZILISH OQIBATI: qarz oluvchi summani o'z " +
        "vaqtida qaytarmasa, unga qonunda belgilangan " +
        "foizlar hisoblanadi — shartnomada nazarda " +
        "tutilgan foizlardan tashqari.\n\n" +
        "ANIQ MAQSADLI QARZ: qarz muayyan maqsadda " +
        "ishlatilishi sharti bilan berilishi mumkin. " +
        "Bunda qarz beruvchi maqsadli ishlatilishini " +
        "nazorat qilishga haqli; shart buzilsa u " +
        "qarzni MUDDATIDAN OLDIN qaytarishni va " +
        "foizlarni talab qilishi mumkin.\n\n" +
        "TA'MINOT: qarz garov, kafillik yoki boshqa " +
        "usul bilan ta'minlanishi mumkin. Ta'minot " +
        "yo'qolsa yoki yomonlashsa, qarz beruvchi " +
        "muddatidan oldin qaytarishni talab " +
        "qilishga haqli.",
      example:
        "Foizsiz qarz nazarda tutilgan edi, lekin " +
        "tilxatda yozilmadi — foiz talabi yuzaga " +
        "keldi.",
      keyPoints: [
        "Qarz odatda foizli deb hisoblanadi",
        "Foizsizlikni shartnomada aniq yozish kerak",
        "Kechiktirishda qo'shimcha foizlar hisoblanadi",
        "Maqsadli qarz buzilsa muddatidan oldin qaytariladi",
      ],
      warning:
        "\"Foizsiz\" degan og'zaki kelishuvni tilxatga " +
        "yozing.",
      lawRefs: [
        { code: "FK2", article: "734" },
        { code: "FK2", article: "735" },
        { code: "FK2", article: "736" },
        { code: "FK2", article: "738" },
        { code: "FK2", article: "739" },
      ],
    },
    {
      heading: "Veksel, obligatsiya va qarzni yangilash",
      text:
        "Qarz munosabatlari qimmatli qog'ozlar orqali ham " +
        "rasmiylashtirilishi mumkin.\n\n" +
        "VEKSEL — qarz oluvchining vekselda ko'rsatilgan " +
        "summani belgilangan muddatda to'lash haqidagi " +
        "shartsiz majburiyatini tasdiqlovchi qimmatli " +
        "qog'oz.\n\n" +
        "⚠️ \"SHARTSIZ\" SO'ZI JUDA MUHIM: veksel bo'yicha " +
        "to'lov asosiy bitim bilan bog'liq e'tirozlarga " +
        "tayanib rad etilmaydi. Bu vekselni kuchli, " +
        "lekin xavfli hujjatga aylantiradi.\n\n" +
        "OBLIGATSIYA — uni chiqargan shaxsdan belgilangan " +
        "muddatda nominal qiymatni va foizni olish " +
        "huquqini tasdiqlovchi qimmatli qog'oz.\n\n" +
        "DAVLAT ZAYOMI shartnomasi ham qarz " +
        "munosabatlarining bir turi bo'lib, unda " +
        "qarz oluvchi davlat hisoblanadi.\n\n" +
        "QARZNI YANGILASH (novatsiya): tomonlar " +
        "kelishuvi bilan oldi-sotdi, ijara yoki " +
        "boshqa asosdan kelib chiqqan qarz QARZ " +
        "MAJBURIYATIGA aylantirilishi mumkin.\n\n" +
        "AMALIY MISOL: yetkazib berilgan tovar uchun " +
        "qarz rasmiy qarz shartnomasiga " +
        "aylantiriladi — bu kreditorga aniqroq " +
        "hujjat va foiz olish imkonini beradi.\n\n" +
        "⚠️ LEKIN DIQQAT: yangilash asosiy " +
        "majburiyatni BEKOR qiladi — u bilan birga " +
        "ta'minot (garov, kafillik) ham bekor " +
        "bo'lishi mumkin. Shuning uchun yangilashda " +
        "ta'minotni saqlash haqida alohida yozish " +
        "kerak.",
      example:
        "Tovar qarzi qarz shartnomasiga aylantirildi, " +
        "lekin kafillik saqlanishi yozilmadi — u " +
        "bekor bo'ldi.",
      keyPoints: [
        "Veksel shartsiz to'lov majburiyatini tasdiqlaydi",
        "Obligatsiya nominal qiymat va foizni beradi",
        "Qarzni yangilash boshqa majburiyatdan hosil bo'ladi",
        "Yangilashda ta'minot bekor bo'lishi mumkin",
      ],
      warning:
        "Veksel imzolashdan oldin uning oqibatini aniq " +
        "tushuning — undan qaytish deyarli mumkin emas.",
      lawRefs: [
        { code: "FK2", article: "740" },
        { code: "FK2", article: "741" },
        { code: "FK2", article: "742" },
        { code: "FK2", article: "743" },
      ],
    },
    {
      heading: "Kredit shartnomasi",
      text:
        "KREDIT shartnomasi bo'yicha bank yoki boshqa kredit " +
        "tashkiloti qarz oluvchiga shartnomada nazarda " +
        "tutilgan miqdorda va shartlarda pul mablag'larini " +
        "berish majburiyatini oladi, qarz oluvchi esa " +
        "olingan summani qaytarish va foizlarni to'lash " +
        "majburiyatini oladi.\n\n" +
        "⚠️ QARZDAN IKKI ASOSIY FARQI:\n\n" +
        "(1) KREDIT — KONSENSUAL shartnoma: u imzolangan " +
        "paytdan kuchga kiradi. Ya'ni bank pulni berishga " +
        "MAJBUR bo'ladi (qarzda esa shartnoma pul " +
        "berilgandagina tuziladi).\n\n" +
        "(2) Kredit beruvchi faqat BANK yoki kredit " +
        "tashkiloti bo'la oladi va kredit har doim " +
        "foizli.\n\n" +
        "SHAKL: kredit shartnomasi YOZMA shaklda " +
        "tuziladi. Rioya qilmaslik uni HAQIQIY EMAS " +
        "qiladi.\n\n" +
        "BOSH TORTISH: kredit beruvchi qarz oluvchining " +
        "summani qaytara olmasligini ko'rsatuvchi " +
        "holatlar mavjud bo'lsa kredit berishdan bosh " +
        "tortishga haqli. Qarz oluvchi ham kreditni " +
        "olishdan bosh tortishi mumkin — bank " +
        "belgilangan muddatda xabardor qilingan " +
        "holda.\n\n" +
        "MUDDATIDAN OLDIN QAYTARISH: qonunda " +
        "kreditni muddatidan oldin qaytarishni talab " +
        "qilish asoslari nazarda tutilgan — masalan " +
        "maqsadli ishlatilmasa, ta'minot " +
        "yo'qolsa.\n\n" +
        "ASHYOLARNI KREDITGA BERISH va TIJORAT " +
        "KREDITI (bo'nak, oldindan to'lov, nasiya) " +
        "ham alohida tartibga solingan.\n\n" +
        "AMALIY MASLAHAT: kredit shartnomasida " +
        "eng muhim uch narsani tekshiring — to'liq " +
        "yillik xarajat, kechikish uchun jarima va " +
        "muddatidan oldin qaytarish sharti.",
      example:
        "Kredit shartnomasi imzolandi, bank pulni " +
        "bermadi — qarz oluvchi bajarishni talab " +
        "qilishi mumkin.",
      keyPoints: [
        "Kredit imzolangan paytdan kuchga kiradi",
        "Kredit beruvchi — bank yoki kredit tashkiloti",
        "Shartnoma yozma bo'lishi shart",
        "Muddatidan oldin qaytarish asoslari qonunda bor",
      ],
      warning:
        "Faqat oylik to'lovga qarash — to'liq xarajatni " +
        "yashiradi.",
      lawRefs: [
        { code: "FK2", article: "744" },
        { code: "FK2", article: "745" },
        { code: "FK2", article: "746" },
        { code: "FK2", article: "746-1" },
        { code: "FK2", article: "747" },
        { code: "FK2", article: "748" },
      ],
    },
    {
      heading: "Faktoring: pul talabini moliyalash",
      text:
        "FAKTORING shartnomasi bo'yicha bir tomon (moliya " +
        "agenti) mijozga pul mablag'larini beradi, mijoz " +
        "esa uchinchi shaxsga (qarzdorga) bo'lgan PUL " +
        "TALABINI moliya agentiga o'tkazadi.\n\n" +
        "⚠️ AMALDA BU NIMA UCHUN KERAK: tadbirkor tovarni " +
        "nasiyaga sotgan bo'lsa, pulni oy oxirigacha " +
        "kutishi kerak. Faktoring bilan u pulni DARHOL " +
        "oladi — komissiyani chegirib.\n\n" +
        "MOLIYA AGENTI odatda bank yoki maxsus " +
        "litsenziyaga ega tashkilot bo'ladi.\n\n" +
        "TALAB TURLARI: mavjud (muddati kelgan) va " +
        "kelajakda yuzaga keladigan pul talablari " +
        "o'tkazilishi mumkin.\n\n" +
        "TAQIQNING HAQIQIY EMASLIGI — JUDA MUHIM " +
        "QOIDA: mijoz va qarzdor o'rtasidagi " +
        "shartnomada talabni boshqa shaxsga " +
        "o'tkazish TAQIQLANGAN bo'lsa ham, bunday " +
        "taqiq faktoring uchun HAQIQIY EMAS.\n\n" +
        "Ya'ni shartnomadagi taqiq faktoringni " +
        "to'sib qo'ya olmaydi. Lekin mijoz shartnoma " +
        "buzilgani uchun qarzdor oldida javobgar " +
        "bo'lib qolishi mumkin.\n\n" +
        "QARZDOR MAJBURIYATI: qarzdor talab " +
        "o'tkazilgani haqida YOZMA xabar olgandan " +
        "keyin moliya agentiga to'laydi.\n\n" +
        "MIJOZ JAVOBGARLIGI: mijoz odatda " +
        "talabning HAQIQIYLIGI uchun javob beradi, " +
        "qarzdorning to'lash qobiliyati uchun " +
        "esa — kafolat bermagan bo'lsa — javob " +
        "bermaydi.\n\n" +
        "QARZDOR E'TIROZLARI: qarzdor moliya " +
        "agentiga qarshi mijozga bo'lgan " +
        "e'tirozlarini bildirishga haqli.",
      example:
        "Nasiyaga sotilgan tovar bo'yicha talab " +
        "bankka o'tkazildi — qarzdor endi bankka " +
        "to'laydi.",
      keyPoints: [
        "Faktoring pulni darhol olish imkonini beradi",
        "Shartnomadagi o'tkazish taqiqi faktoringni to'smaydi",
        "Qarzdor yozma xabardan keyin agentga to'laydi",
        "Mijoz talab haqiqiyligi uchun javob beradi",
      ],
      warning:
        "Faktoring komissiyasini hisoblab, uni " +
        "kutishdan keladigan foyda bilan " +
        "solishtiring.",
      lawRefs: [
        { code: "FK2", article: "749" },
        { code: "FK2", article: "750" },
        { code: "FK2", article: "751" },
        { code: "FK2", article: "752" },
        { code: "FK2", article: "753" },
        { code: "FK2", article: "755" },
        { code: "FK2", article: "757" },
      ],
    },
    {
      heading: "Bank omonati shartnomasi",
      text:
        "BANK OMONATI shartnomasi bo'yicha bank omonatchidan " +
        "kelib tushgan pul summasini qabul qiladi va uni " +
        "shartnomada belgilangan shartlarda qaytarish " +
        "hamda foizlar to'lash majburiyatini oladi.\n\n" +
        "SHAKL: shartnoma YOZMA shaklda tuziladi. Yozma " +
        "shakl omonat daftarchasi, omonat sertifikati " +
        "yoki qonun talablariga javob beradigan boshqa " +
        "hujjat bilan ham tasdiqlanadi. Shaklga rioya " +
        "qilmaslik shartnomani HAQIQIY EMAS qiladi.\n\n" +
        "TURLARI: TALAB QILIB OLINGUNCHA (istalgan " +
        "paytda qaytariladi) va MUDDATLI (belgilangan " +
        "muddatdan keyin qaytariladi).\n\n" +
        "⚠️ FUQARO UCHUN ENG MUHIM HIMOYA: fuqaro " +
        "bo'lgan omonatchining talabi bilan bank " +
        "omonatni ISTALGAN PAYTDA qaytarishi shart — " +
        "muddatli omonat bo'lsa ham.\n\n" +
        "Bunday holatda foizlar odatda talab qilib " +
        "olinguncha omonat stavkasi bo'yicha " +
        "to'lanadi. Ya'ni pulni olish mumkin, lekin " +
        "foiz kamayadi.\n\n" +
        "Bu huquqdan voz kechish haqidagi shart " +
        "HAQIQIY EMAS.\n\n" +
        "FOIZLAR: bank foiz miqdorini muddatli " +
        "omonat bo'yicha bir tomonlama " +
        "kamaytirishga odatda haqli emas.\n\n" +
        "UCHINCHI SHAXSLAR: omonatchi hisobvarag'iga " +
        "uchinchi shaxslar pul qo'yishi mumkin; " +
        "uchinchi shaxs foydasiga omonat ham " +
        "ochilishi mumkin.\n\n" +
        "QAYTARISHNI TA'MINLASH: omonatlarni " +
        "qaytarish qonunda belgilangan usullar " +
        "bilan ta'minlanadi.",
      example:
        "Muddatli omonat egasi pulni muddatdan oldin " +
        "oldi — bank qaytarishga majbur, lekin foiz " +
        "kamayadi.",
      keyPoints: [
        "Omonat shartnomasi yozma bo'lishi shart",
        "Fuqaro omonatni istalgan paytda qaytarib olishga haqli",
        "Bu huquqdan voz kechish haqiqiy emas",
        "Muddatli omonat foizi bir tomonlama kamaytirilmaydi",
      ],
      warning:
        "Muddatdan oldin olishda foiz qayta " +
        "hisoblanadi — shartni oldindan o'qing.",
      lawRefs: [
        { code: "FK2", article: "759" },
        { code: "FK2", article: "761" },
        { code: "FK2", article: "762" },
        { code: "FK2", article: "763" },
        { code: "FK2", article: "765" },
        { code: "FK2", article: "766" },
        { code: "FK2", article: "767" },
        { code: "FK2", article: "769" },
      ],
    },
    {
      heading: "Bank hisobvarag'i shartnomasi",
      text:
        "BANK HISOBVARAG'I shartnomasi bo'yicha bank mijoz " +
        "hisobvarag'iga kelib tushadigan pul mablag'larini " +
        "qabul qilish va hisobga olish, mijozning " +
        "topshiriqlarini bajarish majburiyatini oladi.\n\n" +
        "⚠️ ASOSIY QOIDA — PUL MIJOZNIKI: bank hisobvaraqda " +
        "turgan pul mablag'laridan foydalanishi mumkin, " +
        "lekin mijozning ular bilan bemalol tasarruf " +
        "etish huquqini kafolatlashi shart.\n\n" +
        "Bank mijozning pul mablag'laridan foydalanish " +
        "yo'nalishlarini belgilashga va uning " +
        "ixtiyoricha tasarruf etishiga cheklovlar " +
        "qo'yishga haqli emas — qonunda yoki " +
        "shartnomada nazarda tutilgan hollardan " +
        "tashqari.\n\n" +
        "MUDDATLAR: bank operatsiyalarni qonunda va " +
        "shartnomada belgilangan muddatlarda amalga " +
        "oshirishi shart.\n\n" +
        "PUL O'CHIRISH ASOSLARI: hisobvaraqdan pul " +
        "mablag'lari MIJOZNING TOPSHIRIG'I bo'yicha " +
        "o'chiriladi. Mijozning topshirig'isiz " +
        "o'chirish faqat SUD QARORI bo'yicha yoki " +
        "qonunda hamda shartnomada nazarda tutilgan " +
        "hollarda mumkin.\n\n" +
        "NAVBAT: hisobvaraqdagi mablag' barcha " +
        "talablarni qondirish uchun yetarli bo'lmasa, " +
        "o'chirish QONUNIY NAVBAT bo'yicha amalga " +
        "oshiriladi.\n\n" +
        "BANK SIRI: bank hisobvaraq, operatsiyalar va " +
        "mijoz ma'lumotlarining sirini saqlashi " +
        "shart. Ma'lumotlar faqat qonunda " +
        "ko'rsatilgan shaxslarga va tartibda " +
        "beriladi.\n\n" +
        "JAVOBGARLIK: bank operatsiyalarni o'z " +
        "vaqtida amalga oshirmasa yoki mablag'ni " +
        "asossiz o'chirsa javob beradi.",
      example:
        "Hisobvaraqdan asossiz pul o'chirildi — bank " +
        "javobgar bo'ladi va mablag' tiklanishi " +
        "kerak.",
      keyPoints: [
        "Bank mijozning tasarruf etish huquqini cheklamaydi",
        "Pul odatda faqat mijoz topshirig'i bilan o'chiriladi",
        "Mablag' yetmasa qonuniy navbat qo'llaniladi",
        "Bank siri saqlanadi",
      ],
      warning:
        "Asossiz o'chirish haqida darhol yozma " +
        "murojaat qiling — muddatlar qisqa.",
      lawRefs: [
        { code: "FK2", article: "771" },
        { code: "FK2", article: "772" },
        { code: "FK2", article: "773" },
        { code: "FK2", article: "778" },
        { code: "FK2", article: "783" },
        { code: "FK2", article: "784" },
        { code: "FK2", article: "785" },
        { code: "FK2", article: "786" },
      ],
    },
    {
      heading: "Hisobvaraqni cheklash va shartnomani bekor qilish",
      text:
        "HISOBVARAQNI TASARRUF QILISH CHEKLANISHI qonunda " +
        "nazarda tutilgan hollarda — masalan hisobvaraq " +
        "bo'yicha operatsiyalarni to'xtatib turish yoki " +
        "mablag'ga hibs qo'yish orqali amalga " +
        "oshiriladi.\n\n" +
        "⚠️ MUHIM: cheklov faqat QONUNIY ASOS bilan " +
        "qo'yiladi. Bank o'z tashabbusi bilan " +
        "mijozning pulini \"muzlatib\" qo'ya olmaydi.\n\n" +
        "Cheklov qo'yilganda uning asosini (qaysi " +
        "organ, qaysi hujjat, qaysi summa) so'rash " +
        "sizning huquqingiz.\n\n" +
        "SHARTNOMANI BEKOR QILISH: bank hisobvarag'i " +
        "shartnomasi MIJOZNING arizasiga binoan " +
        "ISTALGAN PAYTDA bekor qilinadi.\n\n" +
        "Bu mijoz uchun kuchli huquq va uni cheklovchi " +
        "shart odatda ishlamaydi.\n\n" +
        "BANK TASHABBUSI bilan bekor qilish esa " +
        "cheklangan: u faqat qonunda nazarda " +
        "tutilgan asoslarda va odatda sud tartibida " +
        "yoki mijozni oldindan ogohlantirgan holda " +
        "amalga oshiriladi.\n\n" +
        "QOLDIQ: shartnoma bekor qilinganda " +
        "hisobvaraqdagi qoldiq mijozga beriladi yoki " +
        "u ko'rsatgan hisobvaraqqa o'tkaziladi.\n\n" +
        "AMALIY MASLAHAT: hisobvaraqni yopayotganda " +
        "yozma ariza bering va yopilgani haqida " +
        "tasdiqnoma oling — aks holda keyinchalik " +
        "xizmat haqi hisoblanib borishi mumkin.",
      example:
        "Hisobvaraq og'zaki so'rov bilan yopilgan deb " +
        "o'ylandi — keyin xizmat haqi qarzi paydo " +
        "bo'ldi.",
      keyPoints: [
        "Cheklov faqat qonuniy asos bilan qo'yiladi",
        "Mijoz shartnomani istalgan paytda bekor qila oladi",
        "Bank tashabbusi bilan bekor qilish cheklangan",
        "Qoldiq mijozga beriladi",
      ],
      warning:
        "Hisobvaraqni yopganingizni yozma " +
        "tasdiqlamaslik — keyingi qarzning sababi.",
      lawRefs: [
        { code: "FK2", article: "787" },
        { code: "FK2", article: "788" },
        { code: "FK2", article: "789" },
      ],
    },
    {
      heading: "Hisob-kitob shakllari: to'lov topshiriqnomasi",
      text:
        "Hisob-kitoblar NAQD PUL bilan va NAQD PULSIZ amalga " +
        "oshiriladi. Yuridik shaxslar o'rtasidagi " +
        "hisob-kitoblar odatda naqd pulsiz shaklda " +
        "bo'ladi.\n\n" +
        "NAQD PULSIZ HISOB-KITOB SHAKLLARI: to'lov " +
        "topshiriqnomalari, akkreditiv, inkasso va " +
        "cheklar.\n\n" +
        "TO'LOV TOPSHIRIQNOMASI — eng keng tarqalgan " +
        "shakl: mijoz bankka o'z hisobvarag'idan " +
        "muayyan summani ko'rsatilgan shaxsning " +
        "hisobvarag'iga o'tkazishni topshiradi.\n\n" +
        "⚠️ BANK TOPSHIRIQNI QABUL QILISH SHARTLARI: " +
        "topshiriqnoma mazmuni va shakli qonun " +
        "talablariga javob berishi hamda " +
        "hisobvaraqda yetarli mablag' bo'lishi " +
        "kerak.\n\n" +
        "Shuning uchun rekvizitdagi kichik xato ham " +
        "to'lovni to'xtatadi — ularni har doim " +
        "ikki marta tekshiring.\n\n" +
        "IJRO: bank topshiriqni belgilangan " +
        "muddatda bajarishi va mijozning talabiga " +
        "binoan ijro haqida XABAR berishi shart.\n\n" +
        "JAVOBGARLIK: topshiriqni bajarmaslik yoki " +
        "lozim darajada bajarmaslik uchun bank " +
        "javob beradi.\n\n" +
        "Agar buzilish operatsiyaga jalb qilingan " +
        "boshqa bank tomonidan sodir etilgan " +
        "bo'lsa, javobgarlik o'sha bankka " +
        "yuklanishi mumkin.\n\n" +
        "AMALIY XULOSA: o'tkazma bajarilmasa yoki " +
        "noto'g'ri manzilga ketsa, birinchi " +
        "murojaat O'Z bankingizga bo'ladi va " +
        "murojaatni yozma qiling.",
      example:
        "Noto'g'ri rekvizit sabab pul boshqa hisobga " +
        "ketdi — mijoz avval o'z bankiga yozma " +
        "murojaat qiladi.",
      keyPoints: [
        "Hisob-kitob naqd va naqd pulsiz bo'ladi",
        "To'lov topshiriqnomasi eng keng tarqalgan shakl",
        "Rekvizit xatosi to'lovni to'xtatadi",
        "Bank topshiriqni bajarmaslik uchun javob beradi",
      ],
      warning:
        "Rekvizitlarni tekshirmasdan yuborilgan " +
        "o'tkazmani qaytarish uzoq davom etadi.",
      lawRefs: [
        { code: "FK2", article: "790" },
        { code: "FK2", article: "791" },
        { code: "FK2", article: "792" },
        { code: "FK2", article: "793" },
        { code: "FK2", article: "794" },
        { code: "FK2", article: "795" },
      ],
    },
    {
      heading: "Akkreditiv, inkasso va cheklar",
      text:
        "AKKREDITIV — xavfsiz hisob-kitob shakli: bank " +
        "to'lovchining topshirig'iga binoan pul " +
        "mablag'larini ajratadi va ularni faqat " +
        "belgilangan HUJJATLAR taqdim etilganda " +
        "to'laydi.\n\n" +
        "⚠️ NIMA UCHUN QULAY: sotuvchi tovarni " +
        "jo'natgandan keyin to'lov kafolatlangan " +
        "bo'ladi; xaridor esa hujjatlarsiz pulni " +
        "bermaydi. Ya'ni ikkala tomon ham " +
        "himoyalanadi.\n\n" +
        "TURLARI: CHAQIRIB OLINADIGAN akkreditiv " +
        "(bank uni benefitsiarni oldindan " +
        "ogohlantirmasdan o'zgartirishi yoki bekor " +
        "qilishi mumkin) va CHAQIRIB OLINMAYDIGAN " +
        "(benefitsiar roziligisiz o'zgartirilmaydi " +
        "va bekor qilinmaydi).\n\n" +
        "Sotuvchi uchun CHAQIRIB OLINMAYDIGAN " +
        "akkreditiv ancha xavfsiz.\n\n" +
        "IJRO: bank taqdim etilgan hujjatlarni " +
        "akkreditiv shartlariga muvofiqligini " +
        "tekshiradi. Hujjatlar mos kelmasa, u " +
        "qabul qilishdan bosh tortishi mumkin.\n\n" +
        "Shuning uchun akkreditiv shartlarini " +
        "diqqat bilan o'qish va hujjatlarni aynan " +
        "shunga mos tayyorlash zarur.\n\n" +
        "INKASSO — bank mijoz topshirig'iga binoan " +
        "to'lovchidan to'lovni olish bo'yicha " +
        "harakatlarni amalga oshiradi.\n\n" +
        "CHEK — chek beruvchining bankka chek " +
        "egasiga unda ko'rsatilgan summani to'lash " +
        "haqidagi shartsiz topshirig'ini o'z ichiga " +
        "olgan qimmatli qog'oz.\n\n" +
        "Chekda majburiy REKVIZITLAR bo'lishi shart " +
        "— ular yetishmasa chek haqiqiy emas.\n\n" +
        "To'lash rad etilsa, bu qonunda belgilangan " +
        "tartibda tasdiqlanadi va chek egasi " +
        "majburiyatli shaxslarga nisbatan talab " +
        "qo'yishga haqli bo'ladi.",
      example:
        "Akkreditiv shartlariga to'liq mos " +
        "kelmagan hujjatlar taqdim etildi — bank " +
        "to'lovni to'xtatdi.",
      keyPoints: [
        "Akkreditiv ikkala tomonni ham himoya qiladi",
        "Chaqirib olinmaydigan akkreditiv xavfsizroq",
        "Hujjatlar shartlarga aniq mos bo'lishi kerak",
        "Chekda majburiy rekvizitlar bo'lishi shart",
      ],
      warning:
        "Akkreditiv shartlarini noaniq yozish — " +
        "to'lovni to'xtatib qo'yadi.",
      lawRefs: [
        { code: "FK2", article: "796" },
        { code: "FK2", article: "798" },
        { code: "FK2", article: "799" },
        { code: "FK2", article: "800" },
        { code: "FK2", article: "801" },
        { code: "FK2", article: "804" },
        { code: "FK2", article: "807" },
        { code: "FK2", article: "808" },
        { code: "FK2", article: "814" },
        { code: "FK2", article: "816" },
      ],
    },
  ],
};

module.exports = { LESSON };
