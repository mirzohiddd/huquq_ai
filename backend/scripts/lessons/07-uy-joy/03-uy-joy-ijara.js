"use strict";
/**
 * UY-JOY MODULI — 3-DARS: TURAR JOYNI IJARAGA BERISH.
 * UJK 25, 33–37, 48–49, 57–60, 62–69, 75–84, 86–95 + FK2 600–616.
 */

const LESSON = {
  key: "uy-joy-ijara",
  category: "housing",
  level: "mid",
  order: 7030,
  title: "Turar joyni ijaraga berish va olish",
  desc:
    "Xususiy va davlat uy-joy fondida ijara, ijara haqi, tomonlar " +
    "majburiyatlari, ikkilamchi ijara, shartnomani o'zgartirish va " +
    "bekor qilish, xizmat turar joylari, yotoqxonalar hamda arenda.",
  objectives: [
    "Ijara shartnomasining shaklini va muhim shartlarini bilasiz",
    "Ijaraga oluvchining huquqlarini bilasiz",
    "Ijara haqi qanday belgilanishini bilasiz",
    "Shartnomani bekor qilish asoslarini bilasiz",
    "Xizmat turar joylari qoidalarini bilasiz",
    "Arenda va ijara farqini tushunasiz",
  ],
  practicalSteps: [
    "Ijara shartnomasini yozma tuzing va unda muddat hamda haqni aniq yozing",
    "Turar joy holatini ko'chib kirishda foto bilan qayd eting",
    "Kommunal to'lovlarni kim to'lashini shartnomada belgilang",
    "Ta'mir ishlarini kelishmasdan boshlamang",
    "Ko'chib chiqishda topshirish dalolatnomasini tuzing",
  ],
  sections: [
    {
      heading: "Turar joyni ijaraga berish: umumiy qoidalar",
      text:
        "Fuqarolar va yuridik shaxslarga tegishli uylar hamda " +
        "kvartiralardagi turar joylar IJARAGA yoki ARENDAGA " +
        "berilishi mumkin.\n\n" +
        "⚠️ IKKI ATAMANI AJRATING: IJARA odatda fuqaroga " +
        "yashash uchun berish; ARENDA esa ko'proq yuridik " +
        "shaxslar ishtirokidagi va boshqa shartlardagi " +
        "munosabat. Ular uchun alohida qoidalar amal " +
        "qiladi.\n\n" +
        "SHARTNOMA: turar joyni ijaraga berish shartnomasi " +
        "belgilangan shaklda tuziladi. Unda tomonlar, " +
        "turar joy, muddat, haq va tomonlarning huquq " +
        "hamda majburiyatlari ko'rsatiladi.\n\n" +
        "IJARAGA OLUVCHINING HUQUQLARI: fuqaroga mulk " +
        "huquqi asosida tegishli turar joyni ijaraga " +
        "olgan shaxsning huquqlari qonun bilan " +
        "himoyalanadi.\n\n" +
        "IJARA HAQI tomonlar kelishuvi bilan belgilanadi " +
        "— qonunda belgilangan cheklovlar doirasida.\n\n" +
        "⚠️ HAQIQIY EMAS DEB TOPILADIGAN SHARTLAR: " +
        "shartnomaning ijaraga oluvchining qonuniy " +
        "huquqlarini kamaytiruvchi shartlari HAQIQIY " +
        "EMAS.\n\n" +
        "Ya'ni shartnomada \"ijarachi istalgan paytda " +
        "chiqarib yuborilishi mumkin\" yoki \"barcha " +
        "ta'mir ijarachi hisobidan\" kabi shartlar " +
        "yozilgan bo'lsa ham, ular avtomatik " +
        "ishlamaydi.\n\n" +
        "MUDDAT: shartnoma muddati unda belgilanadi; " +
        "muddat masalasi qonunda alohida tartibga " +
        "solingan.",
      example:
        "Shartnomaga ijarachini istalgan paytda chiqarish " +
        "sharti kiritildi — bunday shart haqiqiy emas.",
      keyPoints: [
        "Turar joy ijaraga yoki arendaga berilishi mumkin",
        "Shartnoma belgilangan shaklda tuziladi",
        "Ijara haqi kelishuv bilan belgilanadi",
        "Huquqni kamaytiruvchi shartlar haqiqiy emas",
      ],
      warning:
        "Og'zaki ijara kelishuvi ikkala tomonni ham " +
        "himoyasiz qoldiradi.",
      lawRefs: [
        { code: "UJK", article: "25" },
        { code: "UJK", article: "33" },
        { code: "UJK", article: "34" },
        { code: "UJK", article: "36" },
        { code: "UJK", article: "37" },
      ],
    },
    {
      heading: "Davlat uy-joy fondida ijara",
      text:
        "DAVLAT UY-JOY FONDINING uylaridagi turar joyni " +
        "ijaraga berish shartnomasi alohida tartibga " +
        "solingan.\n\n" +
        "U vakolatli organ qarori va turar joy hujjati " +
        "(order) asosida tuziladi.\n\n" +
        "IJARAGA BERUVCHINING MAJBURIYATLARI: turar joyni " +
        "yashash uchun yaroqli holatda berish; uyni " +
        "belgilangan tartibda ta'mirlash; kommunal " +
        "xizmatlarning ko'rsatilishini ta'minlash; uyning " +
        "umumiy mol-mulkini saqlash.\n\n" +
        "⚠️ AMALIY XULOSA: uy-joy tashkiloti " +
        "majburiyatlarini bajarmasa (masalan kapital " +
        "ta'mir qilinmasa), bu shunchaki \"e'tibor " +
        "bermaslik\" emas — bu shartnoma buzilishi va " +
        "uni yozma talab bilan qo'yish mumkin.\n\n" +
        "IJARAGA OLUVCHINING MAJBURIYATLARI: turar joydan " +
        "maqsadiga muvofiq foydalanish; uni ozoda " +
        "saqlash; joriy ta'mirni bajarish; to'lovlarni " +
        "o'z vaqtida amalga oshirish; qo'shnilar " +
        "huquqlariga rioya qilish.\n\n" +
        "FOYDALANISH: ijaraga berish shartnomasi bo'yicha " +
        "turar joydan foydalanish qonunda belgilangan " +
        "tartibda amalga oshiriladi.\n\n" +
        "AMALIY MASLAHAT: ijaraga beruvchining " +
        "majburiyati bajarilmasa, murojaatni YOZMA " +
        "shaklda qiling va nusxasini saqlang — bu " +
        "keyingi talabning asosi bo'ladi.",
      example:
        "Uyda kapital ta'mir yillar davomida " +
        "qilinmadi — yashovchilar buni yozma talab " +
        "qilishga haqli.",
      keyPoints: [
        "Davlat fondida ijara order asosida tuziladi",
        "Ijaraga beruvchining aniq majburiyatlari bor",
        "Bajarilmasa bu shartnoma buzilishi hisoblanadi",
        "Murojaatni yozma qiling va nusxasini saqlang",
      ],
      warning:
        "Og'zaki shikoyat hech qanday huquqiy oqibat " +
        "keltirmaydi.",
      lawRefs: [
        { code: "UJK", article: "35" },
        { code: "UJK", article: "48" },
        { code: "UJK", article: "49" },
      ],
    },
    {
      heading: "Ikkilamchi ijara va vaqtincha yashovchilar",
      text:
        "IKKILAMCHI IJARA (subijara) — ijaraga oluvchi turar " +
        "joyni yoki uning bir qismini boshqa shaxsga " +
        "ijaraga berishi.\n\n" +
        "⚠️ SHART: bu faqat ijaraga beruvchining va u bilan " +
        "yashovchilarning ROZILIGI bilan mumkin.\n\n" +
        "Roziliksiz ikkilamchi ijara shartnomani buzish " +
        "hisoblanadi va u bekor qilish asosi bo'ladi.\n\n" +
        "YO'L QO'YILMAYDIGAN HOLATLAR: qonun ikkilamchi " +
        "ijaraga yo'l qo'yilmaydigan shart-sharoitlarni " +
        "belgilaydi — masalan natijada bir kishiga " +
        "to'g'ri keladigan maydon belgilangan normadan " +
        "kam bo'lib qolsa.\n\n" +
        "HAQ: ikkilamchi ijara shartnomasi bo'yicha " +
        "to'lanadigan haq qonunda belgilangan tartibda " +
        "aniqlanadi.\n\n" +
        "⚠️ IKKILAMCHI IJARACHI UCHUN MUHIM XAVF: uning " +
        "huquqi ASOSIY shartnomaga bog'liq. Asosiy " +
        "shartnoma bekor qilinsa, ikkilamchi ijara ham " +
        "bekor bo'ladi.\n\n" +
        "Ya'ni siz ijarachi bilan shartnoma tuzsangiz, " +
        "lekin u mulkdor bilan munosabatini buzsa — " +
        "siz ham joydan chiqishga majbur bo'lasiz.\n\n" +
        "AMALIY XULOSA: kvartira ijaraga olayotganda " +
        "shartnomani KIM bilan tuzayotganingizni " +
        "aniqlang. Mulkdor bo'lmasa — uning " +
        "roziligini yozma ko'ring.\n\n" +
        "VAQTINCHA YASHOVCHILARDA esa mustaqil " +
        "foydalanish huquqi umuman yuzaga kelmaydi va " +
        "ular talab qilinganda joyni bo'shatadi.",
      example:
        "Ijarachidan kvartira olindi, keyin asosiy " +
        "shartnoma bekor qilindi — ikkilamchi ijara ham " +
        "tugadi.",
      keyPoints: [
        "Ikkilamchi ijara uchun rozilik shart",
        "Qonunda yo'l qo'yilmaydigan holatlar belgilangan",
        "Ikkilamchi ijara asosiy shartnomaga bog'liq",
        "Shartnomani kim bilan tuzayotganingizni aniqlang",
      ],
      warning:
        "Mulkdor roziligisiz ijaraga olish — istalgan " +
        "paytda chiqib ketish xavfi.",
      lawRefs: [
        { code: "UJK", article: "57" },
        { code: "UJK", article: "58" },
        { code: "UJK", article: "59" },
        { code: "UJK", article: "60" },
      ],
    },
    {
      heading: "Ta'mirlash, qayta qurish va o'zgartirish",
      text:
        "TA'MIRLASH majburiyati tomonlar o'rtasida " +
        "taqsimlanadi: KAPITAL ta'mir odatda ijaraga " +
        "beruvchi, JORIY ta'mir esa ijaraga oluvchi " +
        "zimmasida bo'ladi.\n\n" +
        "⚠️ KAPITAL TA'MIR DAVRIDA: uy kapital " +
        "ta'mirlanayotganda va bu paytda unda yashash " +
        "mumkin bo'lmasa, fuqarolarga boshqa turar joy " +
        "berilishi kerak.\n\n" +
        "Ya'ni ta'mir sababli ko'chada qolib ketish " +
        "mumkin emas.\n\n" +
        "REKONSTRUKSIYA YOKI KAPITAL TA'MIR natijasida " +
        "uy-joy maydoni tubdan o'zgarsa, ijaraga " +
        "oluvchiga boshqa turar joy berilishi " +
        "mumkin.\n\n" +
        "QAYTA QURISH VA O'ZGARTIRISH — ENG KO'P " +
        "MUAMMO CHIQADIGAN MASALA: turar joyni va " +
        "yordamchi xonalarni qayta qurish hamda " +
        "o'zgartirish qonunda belgilangan tartibda va " +
        "RUXSAT bilan amalga oshiriladi.\n\n" +
        "Ruxsatsiz qayta qurish oqibatlari og'ir: " +
        "avvalgi holatni tiklash talab qilinishi " +
        "mumkin va bu barcha xarajat siz zimmangizda " +
        "bo'ladi.\n\n" +
        "Bundan tashqari ruxsatsiz o'zgartirilgan " +
        "kvartirani sotish ham qiyinlashadi — " +
        "hujjatlardagi reja haqiqiy holatga mos " +
        "kelmaydi.\n\n" +
        "⚠️ ENG XAVFLI O'ZGARTIRISHLAR: ko'taruvchi " +
        "devorlarga tegish, kommunikatsiyalarni " +
        "ko'chirish, balkonni birlashtirish. Ular " +
        "butun uy xavfsizligiga ta'sir qiladi.\n\n" +
        "AMALIY QOIDA: har qanday jiddiy " +
        "o'zgartirishdan OLDIN loyiha tayyorlang va " +
        "ruxsat oling.",
      example:
        "Kvartira ruxsatsiz qayta qurildi — sotish " +
        "paytida hujjatlar mos kelmagani aniqlandi.",
      keyPoints: [
        "Kapital ta'mir odatda ijaraga beruvchi zimmasida",
        "Ta'mir davrida boshqa turar joy beriladi",
        "Qayta qurish ruxsat bilan amalga oshiriladi",
        "Ruxsatsiz o'zgartirish tiklashga majbur qiladi",
      ],
      warning:
        "Ko'taruvchi devorga tegish — jinoiy " +
        "javobgarlikkacha olib borishi mumkin.",
      lawRefs: [
        { code: "UJK", article: "62" },
        { code: "UJK", article: "63" },
        { code: "UJK", article: "64" },
        { code: "UJK", article: "65" },
      ],
    },
    {
      heading: "Shartnomani o'zgartirish va bekor qilish",
      text:
        "IJARA SHARTNOMASINI O'ZGARTIRISH qonunda " +
        "ko'rsatilgan asoslarda amalga oshiriladi.\n\n" +
        "Uni ijaraga oluvchi OILA A'ZOSINING talabi " +
        "bo'yicha o'zgartirish mumkin — masalan " +
        "alohida shartnoma tuzish uchun.\n\n" +
        "Shuningdek bir oilaga BIRLASHGAN ijaraga " +
        "oluvchilarning talabi bo'yicha ham shartnoma " +
        "o'zgartiriladi — bu holatda aksincha, alohida " +
        "shartnomalar birlashtiriladi.\n\n" +
        "⚠️ BEKOR QILISH: shartnoma qonunda ko'rsatilgan " +
        "asoslarda bekor qilinadi.\n\n" +
        "Ijaraga oluvchi va u bilan yashovchilar " +
        "roziligi bilan shartnomani ISTALGAN PAYTDA " +
        "bekor qilishi mumkin.\n\n" +
        "IJARAGA BERUVCHI tashabbusi bilan bekor " +
        "qilish esa CHEKLANGAN va odatda faqat SUD " +
        "tartibida amalga oshiriladi.\n\n" +
        "Bu ijaraga oluvchi uchun asosiy himoya: uni " +
        "o'zboshimchalik bilan chiqarib yuborib " +
        "bo'lmaydi.\n\n" +
        "AMALIY XULOSA: agar sizga \"ertaga " +
        "chiqasiz\" deyilsa, bu talabning QONUNIY " +
        "ASOSINI so'rang. Sud qarori bo'lmasa, " +
        "majburan chiqarish qonunga xilof.\n\n" +
        "Qulfni almashtirish, narsalarni chiqarib " +
        "tashlash yoki kommunal xizmatni uzish — " +
        "bularning barchasi noqonuniy va ular uchun " +
        "javobgarlik yuzaga keladi.",
      example:
        "Mulkdor ijarachi narsalarini chiqarib tashladi " +
        "— bu noqonuniy va zarar qoplashga olib " +
        "keladi.",
      keyPoints: [
        "Shartnoma qonuniy asoslarda o'zgartiriladi",
        "Ijarachi shartnomani istalgan paytda bekor qila oladi",
        "Ijaraga beruvchi odatda sud orqali bekor qiladi",
        "O'zboshimchalik bilan chiqarish qonunga xilof",
      ],
      warning:
        "Qulfni almashtirish yoki xizmatni uzish — " +
        "javobgarlikka olib keladi.",
      lawRefs: [
        { code: "UJK", article: "66" },
        { code: "UJK", article: "67" },
        { code: "UJK", article: "68" },
        { code: "UJK", article: "69" },
      ],
    },
    {
      heading: "Xizmat turar joylari",
      text:
        "XIZMAT TURAR JOYLARI — mehnat munosabatlari " +
        "xarakteriga ko'ra ish joyiga yaqin yashashi " +
        "kerak bo'lgan xodimlarga beriladigan turar " +
        "joylar.\n\n" +
        "⚠️ ASOSIY XUSUSIYAT: yashash huquqi ISH bilan " +
        "bog'langan. Mehnat munosabatlari tugagach, " +
        "turar joydan foydalanish huquqi ham odatda " +
        "tugaydi.\n\n" +
        "SHARTNOMA: xizmat turar joyi bo'yicha ijara " +
        "shartnomasi belgilangan tartibda tuziladi va " +
        "unda xizmat maqomi aniq ko'rsatiladi.\n\n" +
        "FOYDALANISH: xizmat turar joyidan foydalanish " +
        "qoidalari qonunda belgilangan. Uni " +
        "ikkilamchi ijaraga berish odatda " +
        "taqiqlanadi.\n\n" +
        "BEKOR QILISH VA KO'CHIRISH: shartnoma " +
        "bekor qilinganda xodim va uning oila " +
        "a'zolari turar joydan ko'chiriladi.\n\n" +
        "⚠️ MUHIM HIMOYA: qonunda ayrim toifadagi " +
        "shaxslarni BOSHQA TURAR JOY BERMASDAN " +
        "ko'chirish TAQIQLANADI — ular uchun " +
        "boshqa turar joy berilishi shart.\n\n" +
        "Bu odatda ijtimoiy himoyaga muhtoj " +
        "toifalarga tegishli.\n\n" +
        "AMALIY XULOSA: xizmat turar joyiga " +
        "ko'chib kirayotganda shartnomada uning " +
        "MAQOMI va ish tugagandan keyingi tartib " +
        "qanday yozilganini aniq o'qing. Bu " +
        "keyinchalik kutilmagan holatlarni " +
        "oldini oladi.",
      example:
        "Ishdan bo'shagach xizmat turar joyidan " +
        "chiqish talab qilindi — bu shartnomaning " +
        "odatiy oqibati.",
      keyPoints: [
        "Xizmat turar joyi ish bilan bog'langan",
        "Ish tugagach foydalanish huquqi ham tugaydi",
        "Ikkilamchi ijaraga berish taqiqlanadi",
        "Ayrim toifalar boshqa joy berilmasdan ko'chirilmaydi",
      ],
      warning:
        "Xizmat turar joyini xususiylashtirish odatda " +
        "mumkin emas.",
      lawRefs: [
        { code: "UJK", article: "75" },
        { code: "UJK", article: "76" },
        { code: "UJK", article: "77" },
        { code: "UJK", article: "78" },
        { code: "UJK", article: "79" },
        { code: "UJK", article: "80" },
      ],
    },
    {
      heading: "Maxsus uylar va yotoqxonalar",
      text:
        "MAXSUS UYLAR — muayyan toifadagi fuqarolarni " +
        "joylashtirish uchun mo'ljallangan uylar.\n\n" +
        "YOTOQXONALAR ishchilar, xizmatchilar, " +
        "talabalar va o'quvchilarni ish yoki o'qish " +
        "davrida joylashtirish uchun beriladi.\n\n" +
        "⚠️ YOTOQXONADA YASHASH ODATIY IJARADAN FARQ " +
        "QILADI: joy berish va undan foydalanish " +
        "qonunda belgilangan maxsus tartibda amalga " +
        "oshiriladi va u odatda ish yoki o'qish " +
        "bilan bog'langan.\n\n" +
        "VAQTINCHALIK UY-JOY FONDI turar joylari " +
        "ham alohida tartibda beriladi — bu odatda " +
        "favqulodda holatlarda yoki vaqtincha " +
        "joylashtirish uchun.\n\n" +
        "MAXSUS MAQSADLI UYLARDAN turar joylar " +
        "berish ham alohida qoidalarga " +
        "bo'ysunadi.\n\n" +
        "KO'CHIRISH: maxsus uylardan ko'chirish " +
        "qonunda belgilangan asoslar va tartibda " +
        "amalga oshiriladi.\n\n" +
        "AMALIY XULOSA: yotoqxonada yoki maxsus " +
        "uyda yashayotgan bo'lsangiz, sizning " +
        "huquqingiz ODATIY IJARACHINIKIDAN " +
        "boshqacha — u ko'proq cheklangan.\n\n" +
        "Shuning uchun: joyni berish haqidagi " +
        "hujjatni (buyruq, qaror, shartnoma) " +
        "albatta saqlang va undagi muddat hamda " +
        "shartlarni biling. Ko'chirish talabi " +
        "kelganda avval uning qonuniy asosini " +
        "so'rang.",
      example:
        "O'qish tugagach yotoqxonadan chiqish talab " +
        "qilindi — bu joy berishning odatiy sharti.",
      keyPoints: [
        "Maxsus uylar muayyan toifalar uchun mo'ljallangan",
        "Yotoqxona ish yoki o'qish bilan bog'langan",
        "Vaqtinchalik fond alohida tartibda beriladi",
        "Ko'chirish qonuniy asos va tartibda amalga oshiriladi",
      ],
      warning:
        "Bunday turar joylarda huquqlar odatiy " +
        "ijaradagidan cheklangan.",
      lawRefs: [
        { code: "UJK", article: "81" },
        { code: "UJK", article: "82" },
        { code: "UJK", article: "83" },
        { code: "UJK", article: "84" },
      ],
    },
    {
      heading: "Turar joy arendasi",
      text:
        "TURAR JOY ARENDASI shartnomasi ijaradan alohida " +
        "tartibga solingan institut.\n\n" +
        "ARENDAGA BERISH belgilangan tartibda amalga " +
        "oshiriladi va shartnomada tomonlar, obyekt, " +
        "muddat hamda haq ko'rsatiladi.\n\n" +
        "TASARRUF ETISH: arendaga olingan turar joyni " +
        "tasarruf etish qonunda belgilangan doirada " +
        "amalga oshiriladi.\n\n" +
        "⚠️ ENG QIZIQARLI IMKONIYAT — KEYINCHALIK SOTIB " +
        "OLISH SHARTI BILAN ARENDA: shartnomada turar " +
        "joyni keyinchalik sotib olish sharti nazarda " +
        "tutilishi mumkin.\n\n" +
        "Bu amalda uy-joy olishning muqobil yo'li " +
        "bo'lib xizmat qiladi: arenda to'lovlari " +
        "sotib olish bahosining bir qismi sifatida " +
        "hisobga olinishi mumkin.\n\n" +
        "Bunday shartnomani tuzayotganda ikki narsani " +
        "aniq yozing: sotib olish bahosi (yoki uni " +
        "aniqlash usuli) va to'lovlarning qanday " +
        "hisobga olinishi.\n\n" +
        "ARENDA HAQI shartnomada belgilanadi.\n\n" +
        "YASHASH SHAROITLARINI YAXSHILASH: arendaga " +
        "berilgan turar joyda sharoitlarni " +
        "yaxshilash masalasi alohida tartibga " +
        "solingan.\n\n" +
        "⚠️ MUHIM HIMOYA: arendaga beruvchi " +
        "o'zgarganda (masalan mulk sotilganda) " +
        "arenda shartnomasi SAQLANIB qoladi.\n\n" +
        "BEKOR QILISH va QAYTA TIKLASH asoslari " +
        "hamda ikkilamchi arendaning bekor " +
        "bo'lishi qonunda belgilangan.",
      example:
        "Sotib olish sharti bilan arendaga olingan " +
        "kvartira bo'yicha to'lovlar bahoga hisobga " +
        "olindi.",
      keyPoints: [
        "Arenda ijaradan alohida tartibga solingan",
        "Keyinchalik sotib olish sharti bo'lishi mumkin",
        "Arendaga beruvchi o'zgarsa shartnoma saqlanadi",
        "Bekor qilish asoslari qonunda belgilangan",
      ],
      warning:
        "Sotib olish shartini noaniq yozish — " +
        "to'lovlarni yo'qotishga olib kelishi mumkin.",
      lawRefs: [
        { code: "UJK", article: "86" },
        { code: "UJK", article: "87" },
        { code: "UJK", article: "88" },
        { code: "UJK", article: "89" },
        { code: "UJK", article: "90" },
        { code: "UJK", article: "91" },
        { code: "UJK", article: "92" },
        { code: "UJK", article: "93" },
        { code: "UJK", article: "94" },
        { code: "UJK", article: "95" },
      ],
    },
    {
      heading: "Fuqarolik kodeksi bo'yicha uy-joy ijarasi",
      text:
        "Uy-joyni ijaraga berish Fuqarolik kodeksida ham " +
        "alohida tartibga solingan — bu qoidalar Uy-joy " +
        "kodeksi bilan birga qo'llaniladi.\n\n" +
        "SHARTNOMA OBYEKTI: yashash uchun yaroqli " +
        "izolyatsiyalangan turar joy bo'lishi kerak.\n\n" +
        "SHAKL: shartnoma yozma shaklda tuziladi.\n\n" +
        "⚠️ ENG MUHIM HIMOYA — MULKDOR O'ZGARGANDA: " +
        "uy-joyga bo'lgan mulk huquqi boshqa shaxsga " +
        "o'tganda IJARA SHARTNOMASI SAQLANADI.\n\n" +
        "Ya'ni kvartira sotilsa ham, ijarachi " +
        "shartnoma muddati tugaguncha yashashda davom " +
        "etadi. Yangi mulkdor shartnomaning yangi " +
        "tomoni bo'lib qoladi.\n\n" +
        "Bu ijarachi uchun juda kuchli kafolat va u " +
        "ko'pchilikka noma'lum.\n\n" +
        "IJARAGA BERUVCHI MAJBURIYATLARI: turar joyni " +
        "yashash uchun yaroqli holatda topshirish; " +
        "uyning to'g'ri ishlashini ta'minlash; " +
        "kapital ta'mirni amalga oshirish.\n\n" +
        "IJARAGA OLUVCHI MAJBURIYATLARI: turar joyni " +
        "faqat yashash uchun ishlatish; uni saqlash; " +
        "joriy ta'mirni bajarish; haqni o'z vaqtida " +
        "to'lash.\n\n" +
        "YANGI OILA A'ZOLARINI KIRITISH, VAQTINCHA " +
        "YASHOVCHILAR, IKKILAMCHI IJARA va IJARAGA " +
        "OLUVCHINI ALMASHTIRISH ham alohida " +
        "tartibga solingan.\n\n" +
        "BEKOR QILISH: ijarachi shartnomani belgilangan " +
        "muddatda ogohlantirib bekor qilishi mumkin; " +
        "ijaraga beruvchi esa odatda faqat sud orqali.",
      example:
        "Ijaradagi kvartira sotildi — ijara shartnomasi " +
        "yangi mulkdor uchun ham kuchda qoladi.",
      keyPoints: [
        "Uy-joy ijarasi Fuqarolik kodeksida ham tartibga solingan",
        "Mulkdor o'zgarsa shartnoma saqlanadi",
        "Ijaraga beruvchi kapital ta'mirni bajaradi",
        "Ijarachi ogohlantirib bekor qila oladi",
      ],
      warning:
        "\"Kvartirani sotdim, chiqing\" degan talab " +
        "shartnoma amal qilayotgan bo'lsa asossiz.",
      lawRefs: [
        { code: "FK2", article: "600" },
        { code: "FK2", article: "602" },
        { code: "FK2", article: "603" },
        { code: "FK2", article: "604" },
        { code: "FK2", article: "605" },
        { code: "FK2", article: "606" },
        { code: "FK2", article: "607" },
        { code: "FK2", article: "608" },
        { code: "FK2", article: "609" },
        { code: "FK2", article: "610" },
        { code: "FK2", article: "611" },
        { code: "FK2", article: "612" },
        { code: "FK2", article: "613" },
        { code: "FK2", article: "615" },
        { code: "FK2", article: "616" },
      ],
    },
  ],
};

module.exports = { LESSON };
