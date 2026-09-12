"use strict";
/**
 * OILA MODULI — 2-DARS: NIKOHDAN AJRATISH
 *
 * Qamrab olingan moddalar: OK 37–48 (ajratish asoslari va tartibi)
 * va OK 218–222 (ajralishni qayd etish). Mulk bo'lish va aliment
 * mavzulari BU YERGA OLIB KELINMAGAN — ular alohida darslarda.
 */

const LESSON = {
  key: "nikoh-bekor",
  category: "family",
  level: "basic",
  order: 4020,
  title: "Nikohdan ajratish (ajralish)",
  desc:
    "Nikoh qanday tugaydi, FHDYo va sud yo'llari qanday farq " +
    "qiladi, sud nimalarni hal qiladi va ajralish qachon kuchga " +
    "kiradi.",
  objectives: [
    "Nikoh qanday asoslar bilan tugashini bilasiz",
    "FHDYo va sud yo'llarining farqini ajrata olasiz",
    "Sud ajralishda qaysi masalalarni hal qilishini bilasiz",
    "Ajralish qachon kuchga kirishini va guvohnoma nima uchun kerakligini bilasiz",
  ],
  practicalSteps: [
    "Qaysi yo'l (FHDYo yoki sud) sizga tegishli ekanini oldindan aniqlang",
    "Mulk va aliment talablarini ajralish ishida BIRGA qo'ying",
    "Sud majlislariga o'z vaqtida boring — kelmaslik ishni cho'zadi",
    "Ajralish guvohnomasini albatta olib qo'ying",
  ],
  sections: [
    {
      heading: "Nikohning tugatilish asoslari",
      text:
        "Nikoh uch holatda tugaydi: er yoki xotinning " +
        "VAFOTI; ulardan biri sud tomonidan VAFOT " +
        "ETGAN deb e'lon qilinishi; NIKOHDAN " +
        "AJRATISH.\n\n" +
        "Birinchi ikkisida alohida ariza kerak emas — " +
        "nikoh o'z-o'zidan tugaydi. Uchinchisi tartib " +
        "va ariza talab qiladi.\n\n" +
        "⚠️ \"Amalda ajrashib ketish\" degan huquqiy " +
        "holat YO'Q: rasman tugatilmaguncha " +
        "er-xotinlik davom etadi.",
      example:
        "Er-xotin besh yil alohida yashadi, hujjat " +
        "rasmiylashtirmadi. Shu davrda er kvartira " +
        "oldi — rasman nikoh davom etgani uchun u " +
        "umumiy mulk deb topilishi mumkin.",
      keyPoints: [
        "Nikoh vafot, vafot deb e'lon qilish yoki ajralish bilan tugaydi",
        "\"Amalda ajrashish\" huquqiy holat emas",
        "Rasman ajrashmaguncha umumiy mulk rejimi davom etadi",
        "Yangi nikoh faqat rasmiy ajralishdan keyin tuziladi",
      ],
      warning:
        "Ajralishni cho'zish moddiy zarar keltiradi — " +
        "alohida yashash davridagi mulk ham bo'lish " +
        "predmetiga tushadi.",
      lawRefs: [{ code: "OK", article: "37" }],
    },
    {
      heading: "Nikohdan ajratish tartibi: ikki yo'l",
      text:
        "Ajralishning IKKI yo'li bor: FHDYo organi " +
        "orqali va SUD orqali. Qaysi biri " +
        "qo'llanishini tomonlar emas, VAZIYAT " +
        "belgilaydi.\n\n" +
        "FHDYo yo'li soddaroq va tezroq — u asosan " +
        "o'zaro rozilik bo'lgan va voyaga yetmagan " +
        "bolasi bo'lmagan holatlarda.\n\n" +
        "SUD yo'li voyaga yetmagan bolalar " +
        "bo'lganda, tomonlardan biri rozi " +
        "bo'lmaganda yoki nizo bo'lganda " +
        "qo'llaniladi.",
      example:
        "Er-xotin ikkalasi ham rozi, lekin 8 yoshli " +
        "bolasi bor. FHDYo yo'li ishlamaydi — ish " +
        "sudga boradi, chunki bola masalasini " +
        "faqat sud hal qila oladi.",
      keyPoints: [
        "Ikki yo'l bor: FHDYo va sud",
        "Yo'lni vaziyat belgilaydi, tomonlar emas",
        "Voyaga yetmagan bola bo'lsa — sud yo'li",
        "Rozilik va nizo ham yo'lni aniqlaydi",
      ],
      warning:
        "Bolasi bor er-xotin FHDYo orqali ajrasha " +
        "olmaydi — bunday urinish faqat vaqt " +
        "yo'qotadi.",
      lawRefs: [{ code: "OK", article: "38" }],
    },
    {
      heading: "Erning ajratish talab qila olmaydigan holati",
      text:
        "Qonunda alohida himoya normasi bor: muayyan " +
        "davrda ER nikohdan ajratish to'g'risida " +
        "talab qo'ya olmaydi.\n\n" +
        "Bu davr xotinning HOMILADORLIGI va bola " +
        "tug'ilgandan keyingi belgilangan muddat " +
        "bilan bog'liq.\n\n" +
        "Nima uchun? Aynan shu davrda ayol eng zaif " +
        "holatda: mehnat qobiliyati cheklangan, " +
        "chaqaloqqa qarash bilan band.\n\n" +
        "⚠️ Cheklov faqat ERGA nisbatan. XOTIN " +
        "istalgan paytda talab qo'ya oladi.",
      example:
        "Xotin homilador, er sudga ariza berdi — " +
        "ariza ko'rilmaydi. Xuddi shu davrda " +
        "xotinning o'zi ariza bersa qabul qilinadi.",
      keyPoints: [
        "Belgilangan davrda er ajralish talab qila olmaydi",
        "Davr homiladorlik va tug'ruqdan keyingi muddatni qamraydi",
        "Norma ayolni eng zaif paytda himoya qiladi",
        "Xotinga nisbatan bunday cheklov yo'q",
      ],
      warning:
        "Bu cheklov vaqtinchalik — davr tugagach " +
        "er ariza berishi mumkin.",
      lawRefs: [{ code: "OK", article: "39" }],
    },
    {
      heading: "Nikohdan sud tartibida ajratish",
      text:
        "Sud yo'li ko'proq uchraydi, chunki " +
        "aksariyat oilada voyaga yetmagan bola " +
        "bo'ladi yoki nizo mavjud.\n\n" +
        "Sud ish yuritishda tomonlarni chaqiradi, " +
        "ularning pozitsiyasini eshitadi va " +
        "nikohni saqlab qolish imkoniyati " +
        "bor-yo'qligini baholaydi.\n\n" +
        "Bola bilan bog'liq masalalarda vasiylik " +
        "va homiylik organi ham jalb qilinishi " +
        "mumkin.",
      example:
        "Xotin ariza berdi, er kelmadi va " +
        "pozitsiyasini bildirmadi. Sud majlislarga " +
        "kelmaslik ishni to'xtatmaydi — u belgilangan " +
        "tartibda ko'rib chiqiladi.",
      keyPoints: [
        "Sud yo'li bola yoki nizo bo'lganda qo'llaniladi",
        "Sud tomonlarni chaqiradi va pozitsiyani eshitadi",
        "Nikohni saqlash imkoniyati baholanadi",
        "Bola masalasida vasiylik organi jalb qilinadi",
      ],
      warning:
        "Sud majlisiga sababsiz kelmaslik sizning " +
        "manfaatlaringiz hisobga olinmasligiga olib " +
        "kelishi mumkin.",
      lawRefs: [{ code: "OK", article: "40" }],
    },
    {
      heading: "Sudning ajratish asoslari va yarashtirish muddati",
      text:
        "Sud nikohni ajratish uchun asos " +
        "bor-yo'qligini baholaydi. Asosiy mezon — " +
        "er-xotinning birgalikda yashashi va " +
        "oilani saqlab qolishi mumkin " +
        "emasligi.\n\n" +
        "⚠️ Muhim xususiyat: sud tomonlarni " +
        "YARASHTIRISHGA harakat qilishi va shu " +
        "maqsadda muddat belgilashi mumkin. Bu " +
        "muddat ichida ish ko'rilishi to'xtatib " +
        "turiladi.\n\n" +
        "Yarashtirish muddati rasmiyatchilik emas: " +
        "amalda ko'p oila shu davrda kelishib, " +
        "arizani qaytarib oladi.",
      example:
        "Xotin ariza berdi, sud yarashtirish uchun " +
        "muddat belgiladi. Shu davrda er-xotin " +
        "kelishdi va ariza qaytarib olindi — ish " +
        "yopildi.",
      keyPoints: [
        "Mezon — birgalikda yashash imkoniyati qolgan-qolmagani",
        "Sud yarashtirish uchun muddat belgilashi mumkin",
        "Muddat ichida ish to'xtatib turiladi",
        "Muddat tugagach fikr o'zgarmasa qaror chiqariladi",
      ],
      warning:
        "Yarashtirish muddati berilsa uni jiddiy " +
        "qabul qiling — bu qarorni qayta ko'rib " +
        "chiqish uchun berilgan haqiqiy imkoniyat.",
      lawRefs: [{ code: "OK", article: "41" }],
    },
    {
      heading: "O'zaro rozilik bo'lganda FHDYo'da ajratish",
      text:
        "Eng oddiy yo'l: er-xotinning o'zaro " +
        "roziligi bo'lsa va voyaga yetmagan " +
        "bolasi bo'lmasa, ajralish FHDYo " +
        "organida qayd etiladi.\n\n" +
        "Tartib: ikkala tomon birgalikda ariza " +
        "beradi, belgilangan muddat kutiladi va " +
        "shundan keyin ajralish qayd etiladi.\n\n" +
        "⚠️ FHDYo organi ajralish SABABINI " +
        "so'ramaydi va tomonlarni yarashtirishga " +
        "urinmaydi — bu sud yo'lidan asosiy " +
        "farqi.",
      example:
        "Er-xotinning bolasi yo'q, mulkni o'zaro " +
        "kelishib bo'lishdi va ikkalasi rozi. " +
        "Ular FHDYo organiga birgalikda ariza " +
        "berib guvohnoma olishadi.",
      keyPoints: [
        "Shart: o'zaro rozilik va voyaga yetmagan bola yo'qligi",
        "Ariza birgalikda beriladi",
        "FHDYo sabab so'ramaydi va yarashtirmaydi",
        "Belgilangan muddat kutiladi",
      ],
      warning:
        "Kutish muddati ichida biri fikridan " +
        "qaytsa jarayon to'xtaydi.",
      lawRefs: [
        { code: "OK", article: "42" },
        { code: "OK", article: "218" },
      ],
    },
    {
      heading: "Bir tomon arizasi bo'yicha FHDYo'da ajratish",
      text:
        "Alohida holat: ba'zan FHDYo organi " +
        "ikkinchi tomonning roziligisiz ham " +
        "ajralishni qayd etadi.\n\n" +
        "Bu istisno tor doirada qo'llaniladi va " +
        "ikkinchi tomonning huquqiy holati bilan " +
        "bog'liq: u sud tomonidan bedarak " +
        "yo'qolgan deb topilgan, muomalaga " +
        "layoqatsiz deb topilgan yoki " +
        "belgilangan muddatga ozodlikdan mahrum " +
        "qilingan bo'lsa.\n\n" +
        "Mantiq: bunday holatlarda rozilik olish " +
        "obyektiv ravishda imkonsiz.",
      example:
        "Er bir necha yildan beri bedarak yo'qolgan " +
        "va sud uni shunday deb topgan. Xotin " +
        "FHDYo organiga yolg'iz ariza berib " +
        "ajralishni qayd ettirishi mumkin.",
      keyPoints: [
        "Ba'zi holatlarda bir tomon arizasi yetarli",
        "Asoslar ikkinchi tomonning huquqiy holatiga bog'liq",
        "Sabab — rozilik olishning obyektiv imkonsizligi",
        "Holat sud qarori bilan tasdiqlangan bo'lishi shart",
      ],
      warning:
        "Shunchaki \"aloqa yo'q\" degani yetarli " +
        "emas — sud qarori kerak.",
      lawRefs: [
        { code: "OK", article: "43" },
        { code: "OK", article: "219" },
      ],
    },
    {
      heading: "Sud ajralishda qaysi masalalarni hal qiladi",
      text:
        "Sud nikohni ajratish haqida qaror " +
        "chiqarayotganda bir vaqtning o'zida bir " +
        "necha masalani hal qiladi — bu " +
        "jarayonning eng muhim qismi.\n\n" +
        "Asosiy masalalar: voyaga yetmagan bolalar " +
        "KIM BILAN yashashi; ularni ta'minlash " +
        "uchun kimdan qancha aliment undirilishi; " +
        "talab bo'lsa mehnatga layoqatsiz er " +
        "(xotin)ga ta'minot; talab bo'lsa umumiy " +
        "mol-mulkni bo'lish.\n\n" +
        "⚠️ Mulk va ta'minot faqat TALAB bo'lganda " +
        "ko'riladi. Bola masalasi esa talabdan " +
        "qat'i nazar hal qilinadi.",
      example:
        "Ajralishda xotin faqat bola masalasini " +
        "ko'tardi, mulk talabini qo'ymadi. Sud " +
        "mulkni bo'lmadi — buning uchun " +
        "keyinchalik alohida da'vo kerak bo'ladi.",
      keyPoints: [
        "Sud bola, aliment, ta'minot va mulk masalalarini ko'radi",
        "Mulk va ta'minot faqat talab bo'lganda hal qilinadi",
        "Bola masalasi talabsiz ham hal qilinadi",
        "Hammasini bir ishda hal qilish vaqt tejaydi",
      ],
      warning:
        "Mulk talabini ajralish ishida qo'ymaslik " +
        "— eng ko'p uchraydigan va eng qimmatga " +
        "tushadigan xato.",
      lawRefs: [{ code: "OK", article: "44" }],
    },
    {
      heading: "Davlat boji masalasi",
      text:
        "Sud nikohdan ajratish haqida hal qiluv " +
        "qarorini chiqarishda davlat boji " +
        "miqdorini belgilaydi — bu alohida " +
        "moddada nazarda tutilgan.\n\n" +
        "Boj miqdori va uni kim to'lashi " +
        "masalasi sud qarorida ko'rsatiladi.\n\n" +
        "Amaliy jihat: ajralish jarayonida " +
        "xarajatlar faqat boj bilan " +
        "cheklanmaydi. Ekspertiza, baholash va " +
        "vakil xizmatlari ham xarajat talab " +
        "qiladi.\n\n" +
        "Shuning uchun jarayonni boshlashdan " +
        "oldin taxminiy xarajatni hisoblab " +
        "chiqish foydali.",
      example:
        "Er-xotin mulkni bo'lish talabini ham " +
        "qo'shdi. Mulk qiymati katta bo'lgani " +
        "uchun umumiy xarajat sezilarli oshdi.",
      keyPoints: [
        "Davlat boji miqdori sud qarorida belgilanadi",
        "Kim to'lashi ham qarorda ko'rsatiladi",
        "Xarajat faqat boj bilan cheklanmaydi",
        "Ekspertiza va vakil xizmatlari ham hisobga olinadi",
      ],
      warning:
        "Jarayonni boshlashdan oldin taxminiy " +
        "xarajatni hisoblang — bu kutilmagan " +
        "moliyaviy yukning oldini oladi.",
      lawRefs: [{ code: "OK", article: "45" }],
    },
    {
      heading: "Ajratilganda familiyani o'zgartirish",
      text:
        "Nikohda familiyasini o'zgartirgan tomon " +
        "ajralishdan keyin tanlov qiladi: " +
        "nikohdagi familiyani SAQLAB QOLISH yoki " +
        "nikohgacha bo'lganiga QAYTISH.\n\n" +
        "⚠️ Bu SHAXSIY huquq: ikkinchi tomonning " +
        "roziligi kerak emas va u familiyani " +
        "qaytarishni TALAB QILA OLMAYDI.\n\n" +
        "Amalda ko'pchilik nikohdagi familiyani " +
        "saqlab qoladi — ayniqsa bolalar shu " +
        "familiyada bo'lsa.",
      example:
        "Ajrashgandan keyin er sobiq xotinidan " +
        "familiyani qaytarishni talab qildi. " +
        "Bunday talabning huquqiy asosi yo'q.",
      keyPoints: [
        "Familiyani saqlash yoki qaytarish — shaxsiy tanlov",
        "Ikkinchi tomonning roziligi talab qilinmaydi",
        "Talab qilish huquqiy asosga ega emas",
        "Tanlov ajralishni qayd etishda bildiriladi",
      ],
      warning:
        "Familiya qaytarilsa barcha hujjatni " +
        "yangilash kerak bo'ladi.",
      lawRefs: [
        { code: "OK", article: "46" },
        { code: "OK", article: "220" },
      ],
    },
    {
      heading: "Nikoh qachon tugagan hisoblanadi",
      text:
        "Sud qarori chiqdi — nikoh tugadimi? Bu " +
        "nuqta ko'p chalkashlik tug'diradi.\n\n" +
        "Sud tartibida ajratilganda nikoh " +
        "belgilangan huquqiy paytdan tugagan " +
        "hisoblanadi. FHDYo tartibida esa " +
        "ajralish QAYD ETILGAN kundan.\n\n" +
        "Nima uchun muhim? Aynan shu sanadan " +
        "boshlab: umumiy mulk rejimi to'xtaydi; " +
        "meros huquqi yo'qoladi; yangi nikoh " +
        "tuzish mumkin bo'ladi.",
      example:
        "Sud qarori chiqdi, lekin tomonlar " +
        "guvohnomani olishga bormadi. Yangi nikoh " +
        "tuzmoqchi bo'lganda FHDYo hujjat talab " +
        "qildi va jarayon to'xtadi.",
      keyPoints: [
        "Nikoh sud qarori chiqishi bilan darhol tugamaydi",
        "FHDYo tartibida qayd etilgan kundan tugaydi",
        "Shu sanadan umumiy mulk va meros huquqi to'xtaydi",
        "Yangi nikoh faqat shundan keyin tuziladi",
      ],
      warning:
        "Guvohnomani olmaslik yangi nikohga " +
        "to'sqinlik qiladi.",
      lawRefs: [{ code: "OK", article: "47" }],
    },
    {
      heading: "Ajralganlik to'g'risidagi guvohnoma",
      text:
        "Ajralish qayd etilgach tomonlarga " +
        "guvohnoma beriladi va hujjatlarga " +
        "tegishli belgi qo'yiladi.\n\n" +
        "Bu guvohnoma keyinchalik talab " +
        "qilinadi: yangi nikoh tuzishda; " +
        "ijtimoiy to'lovlarni " +
        "rasmiylashtirishda; mulk va meros " +
        "masalalarida; bola bilan bog'liq " +
        "hujjatlarda.\n\n" +
        "Yo'qolsa takroriy nusxa olish mumkin, " +
        "lekin bu vaqt oladi.",
      example:
        "Sobiq xotin ijtimoiy nafaqa " +
        "rasmiylashtirmoqchi bo'ldi, lekin " +
        "ajralish guvohnomasi yo'q edi. " +
        "Takroriy nusxa olguncha jarayon " +
        "kechikdi.",
      keyPoints: [
        "Ajralish qayd etilgach guvohnoma beriladi",
        "Hujjatlarga tegishli belgi qo'yiladi",
        "U yangi nikoh va ijtimoiy to'lovlarda kerak",
        "Yo'qolsa takroriy nusxa olish mumkin",
      ],
      warning:
        "Guvohnomani sud qarori chiqqach darhol " +
        "olib qo'ying — keyinroq bu ko'proq " +
        "vaqt oladi.",
      lawRefs: [{ code: "OK", article: "221" }],
    },
    {
      heading: "Bedarak yo'qolgan er (xotin) qaytib kelsa",
      text:
        "Alohida holat: sud tomonidan vafot " +
        "etgan deb e'lon qilingan yoki bedarak " +
        "yo'qolgan deb topilgan er (xotin) " +
        "qaytib kelsa nima bo'ladi?\n\n" +
        "Qonun nikohning TIKLANISHI imkoniyatini " +
        "nazarda tutadi. Buning uchun sud " +
        "qarori bekor qilinishi va tomonlarning " +
        "birgalikdagi arizasi bo'lishi kerak.\n\n" +
        "⚠️ Muhim cheklov: agar shu orada " +
        "tomonlardan biri YANGI nikoh tuzgan " +
        "bo'lsa, avvalgi nikoh tiklanmaydi.",
      example:
        "Er bedarak yo'qolgan deb topilgan, " +
        "xotin ajrashgan. Yillar o'tib er " +
        "qaytdi, lekin xotin yangi nikohda " +
        "edi — avvalgi nikoh tiklanmaydi.",
      keyPoints: [
        "Qaytib kelganda nikoh tiklanishi mumkin",
        "Sud qarori bekor qilinishi kerak",
        "Tomonlarning birgalikdagi arizasi talab qilinadi",
        "Yangi nikoh tuzilgan bo'lsa tiklanmaydi",
      ],
      warning:
        "Nikohning tiklanishi avtomatik emas — " +
        "u alohida tartibda amalga oshiriladi.",
      lawRefs: [{ code: "OK", article: "48" }],
    },
    {
      heading: "Chet el fuqarolarining ajralishini qayd etish",
      text:
        "O'zbekiston Respublikasida o'zaro nikoh " +
        "tuzgan chet el fuqarolarining " +
        "ajralishini qayd etish alohida moddada " +
        "tartibga solingan.\n\n" +
        "Shuningdek chet el elementi bilan " +
        "bog'liq ajralish masalalari xalqaro " +
        "xususiy huquq normalariga ham " +
        "bo'ysunadi.\n\n" +
        "Amaliy qiyinchiliklar: hujjatlarni " +
        "legalizatsiya qilish; notarial " +
        "tarjima; qaysi davlat huquqi " +
        "qo'llanilishini aniqlash; qarorning " +
        "boshqa davlatda tan olinishi.",
      example:
        "Chet el fuqarosi bilan tuzilgan nikoh " +
        "bekor qilindi. Qaror ikkinchi tomonning " +
        "davlatida tan olinishi uchun qo'shimcha " +
        "tartib talab qilindi.",
      keyPoints: [
        "Chet el fuqarolarining ajralishi alohida tartibga solingan",
        "Xalqaro xususiy huquq normalari ham qo'llaniladi",
        "Hujjatlar legalizatsiya va tarjima talab qiladi",
        "Qarorning boshqa davlatda tan olinishi alohida masala",
      ],
      warning:
        "Chet el elementi bo'lgan ishlarda " +
        "mutaxassisga murojaat qilish kuchli " +
        "tavsiya etiladi.",
      lawRefs: [
        { code: "OK", article: "222" },
        { code: "OK", article: "236" },
      ],
    },
    {
      heading: "Nikohni haqiqiy emas deb topishdan farqi",
      text:
        "Ajralish va nikohni haqiqiy emas deb " +
        "topish — BUTUNLAY boshqa narsa va " +
        "ularni chalkashtirish og'ir " +
        "oqibatlarga olib keladi.\n\n" +
        "AJRALISHDA nikoh bor edi va u tugadi. " +
        "Undan kelib chiqqan huquqlar (umumiy " +
        "mulk, ta'minot) saqlanadi.\n\n" +
        "HAQIQIY EMAS deb topilganda nikoh " +
        "BOSHIDANOQ bo'lmagan hisoblanadi: " +
        "umumiy mulk rejimi yuzaga kelmagan, " +
        "ta'minot huquqi yo'q, nikoh " +
        "shartnomasi ham haqiqiy emas.\n\n" +
        "⚠️ Bolalarning huquqlari esa har " +
        "ikkala holatda ham to'liq saqlanadi.",
      example:
        "Nikoh haqiqiy emas deb topildi. " +
        "Umumiy mulk bo'yicha da'volar barbod " +
        "bo'ldi, lekin shu nikohdan tug'ilgan " +
        "bolaning ta'minot va meros huquqlari " +
        "saqlanib qoldi.",
      keyPoints: [
        "Ajralish va haqiqiy emas deb topish — turli institutlar",
        "Ajralishda huquqlar saqlanadi",
        "Haqiqiy emas deb topilganda nikoh boshidanoq bo'lmagan hisoblanadi",
        "Bolalarning huquqlari ikkala holatda ham saqlanadi",
      ],
      warning:
        "Nikohni haqiqiy emas deb topishni faqat " +
        "SUD amalga oshiradi.",
      lawRefs: [
        { code: "OK", article: "49" },
        { code: "OK", article: "56" },
      ],
    },
  ],
};

module.exports = { LESSON };
