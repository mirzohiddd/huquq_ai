"use strict";
/** MEHNAT MODULI — 9-DARS: IJTIMOIY TA'TILLAR. MK 236–242.
 *  Mehnat ta'tillari (213–235) 8-darsda. */

const LESSON = {
  key: "ijtimoiy-tatil",
  category: "labor",
  level: "basic",
  order: 6090,
  title: "Ijtimoiy ta'tillar",
  desc:
    "Ijtimoiy ta'til nima, u mehnat ta'tilidan qanday farq qiladi, " +
    "qanday turlari bor va qanday beriladi.",
  objectives: [
    "Ijtimoiy ta'tilni mehnat ta'tilidan ajrata olasiz",
    "Qonunda belgilangan ijtimoiy ta'til turlarini bilasiz",
    "Ish haqi saqlanadigan va saqlanmaydigan ta'tillarni farqlaysiz",
    "Majburiy tartibda beriladigan ta'tillarni bilasiz",
  ],
  practicalSteps: [
    "Ta'til so'rayotganda qaysi turini so'rayotganingizni aniq yozing",
    "Ish haqi saqlanadimi — oldindan aniqlashtiring",
    "Majburiy ta'tilga huquqingiz bor-yo'qligini tekshiring",
    "Arizani rasmiy topshiring va qabul belgisini oling",
  ],
  sections: [
    {
      heading: "Ijtimoiy ta'tillar tushunchasi",
      text:
        "IJTIMOIY ta'tillar — mehnat " +
        "ta'tillaridan alohida turadigan " +
        "guruh.\n\n" +
        "⚠️ ASOSIY FARQ: mehnat ta'tili " +
        "ISHLAGANLIK uchun beriladi va " +
        "u dam olish maqsadini " +
        "ko'zlaydi. Ijtimoiy ta'til esa " +
        "muayyan IJTIMOIY EHTIYOJ " +
        "(bola, o'qish, sog'liq, oilaviy " +
        "holat) sababli beriladi.\n\n" +
        "Bundan kelib chiqadigan amaliy " +
        "natijalar: ijtimoiy ta'til " +
        "ish stajiga qarab " +
        "hisoblanmaydi; u har doim ham " +
        "to'lanmaydi; berish asoslari " +
        "boshqacha.\n\n" +
        "Tushuncha alohida moddada " +
        "belgilangan.",
      example:
        "Xodim \"ta'tilim bor\" deb o'yladi, " +
        "lekin bu ish haqi saqlanmaydigan " +
        "ijtimoiy ta'til edi. Tur " +
        "to'lovga bevosita ta'sir qiladi.",
      keyPoints: [
        "Ijtimoiy ta'til mehnat ta'tilidan farq qiladi",
        "U ijtimoiy ehtiyoj sababli beriladi",
        "Ish stajiga qarab hisoblanmaydi",
        "Har doim ham to'lanmaydi",
      ],
      warning:
        "Ariza yozayotganda qaysi ta'tilni " +
        "so'rayotganingizni aniq " +
        "ko'rsating.",
      lawRefs: [{ code: "MK", article: "236" }],
    },
    {
      heading: "Qonunchilikda belgilangan ijtimoiy ta'tillar",
      text:
        "Qonunchilikda belgilangan ijtimoiy " +
        "ta'tillar alohida moddada " +
        "sanab o'tilgan.\n\n" +
        "Odatiy turlari: homiladorlik va " +
        "tug'ruq ta'tili; bolani " +
        "parvarish qilish ta'tili; " +
        "o'qish bilan bog'liq ta'tillar; " +
        "ijodiy ta'tillar; ish haqi " +
        "qisman saqlanadigan ta'til; ish " +
        "haqi saqlanmaydigan ta'til.\n\n" +
        "⚠️ Har birining o'z asosi, " +
        "davomiyligi va to'lov tartibi " +
        "bor — ularni bir-biriga " +
        "o'xshatib bo'lmaydi.\n\n" +
        "Aniq ro'yxat va shartlar qonun " +
        "matnida.",
      example:
        "Xodim o'qish uchun ta'til so'radi " +
        "va \"bu ta'til hisobingizdan\" " +
        "deyildi. O'qish bilan bog'liq " +
        "ta'tillar alohida turda va " +
        "o'z shartlariga ega.",
      keyPoints: [
        "Ijtimoiy ta'til turlari qonunda sanab o'tilgan",
        "Homiladorlik, bola parvarishi va o'qish asosiy turlar",
        "Har birining o'z asosi va davomiyligi bor",
        "To'lov tartibi ham har xil",
      ],
      warning:
        "Bir ta'til turini boshqasi bilan " +
        "almashtirishga rozi bo'lmang — " +
        "shartlari boshqacha.",
      lawRefs: [{ code: "MK", article: "237" }],
    },
    {
      heading: "Ichki hujjatlarda belgilanadigan ijtimoiy ta'tillar",
      text:
        "Qonunda belgilanganlardan tashqari " +
        "ijtimoiy ta'tillar JAMOA " +
        "KELISHUVLARIDA, jamoa " +
        "shartnomasida yoki mehnat " +
        "haqidagi boshqa huquqiy " +
        "hujjatlarda ham belgilanishi " +
        "mumkin.\n\n" +
        "⚠️ MUHIM: bunday ta'tillar " +
        "qonundagilarni ALMASHTIRMAYDI " +
        "— ular QO'SHIMCHA imkoniyat " +
        "hisoblanadi.\n\n" +
        "Ya'ni ish beruvchi \"bizda " +
        "o'zimizning ta'til tizimi bor\" " +
        "deb qonundagi ta'tillarni bekor " +
        "qila olmaydi.\n\n" +
        "Jamoa shartnomasi xodim uchun " +
        "faqat YAXSHIROQ shart " +
        "belgilashi mumkin.",
      example:
        "Jamoa shartnomasida qo'shimcha " +
        "ijtimoiy ta'til nazarda " +
        "tutilgan. Bu qonundagi " +
        "ta'tillarga qo'shimcha " +
        "hisoblanadi.",
      keyPoints: [
        "Ichki hujjatlarda qo'shimcha ta'til belgilanishi mumkin",
        "Ular qonundagilarni almashtirmaydi",
        "Faqat qo'shimcha imkoniyat hisoblanadi",
        "Ichki hujjat faqat yaxshiroq shart belgilashi mumkin",
      ],
      warning:
        "Jamoa shartnomangizda qo'shimcha " +
        "ta'til bor-yo'qligini tekshiring " +
        "— ko'pchilik bundan bexabar.",
      lawRefs: [{ code: "MK", article: "238" }],
    },
    {
      heading: "Berish asoslari va foydalanish xususiyatlari",
      text:
        "Ijtimoiy ta'tillar berish asoslari " +
        "va xodim tomonidan ulardan " +
        "foydalanishning o'ziga xos " +
        "xususiyatlari alohida moddada " +
        "belgilangan.\n\n" +
        "Umumiy tamoyillar: ta'til " +
        "ARIZA asosida beriladi; " +
        "asosni tasdiqlovchi HUJJAT " +
        "talab qilinishi mumkin; " +
        "ayrim ta'tillar MAJBURIY " +
        "beriladi, ayrimlari esa ish " +
        "beruvchi bilan kelishuvga " +
        "bog'liq.\n\n" +
        "⚠️ Bu farqni bilish muhim: " +
        "majburiy ta'tilni rad etish " +
        "qonunga zid, kelishuvga " +
        "bog'liq ta'tilda esa rad " +
        "javobi qonuniy bo'lishi " +
        "mumkin.",
      example:
        "Xodim ijtimoiy ta'til so'radi va " +
        "rad javobi oldi. Bu ta'til " +
        "majburiy turga kirsa rad etish " +
        "qonunga zid.",
      keyPoints: [
        "Ta'til ariza asosida beriladi",
        "Asosni tasdiqlovchi hujjat talab qilinishi mumkin",
        "Ayrim ta'tillar majburiy beriladi",
        "Ayrimlari kelishuvga bog'liq",
      ],
      warning:
        "So'ragan ta'tilingiz majburiy " +
        "turga kiradimi — buni oldindan " +
        "aniqlang.",
      lawRefs: [{ code: "MK", article: "239" }],
    },
    {
      heading: "Ish haqi qisman saqlanadigan ta'til",
      text:
        "Alohida tur — ish haqi QISMAN " +
        "saqlanadigan ta'til.\n\n" +
        "Bu ta'tilda xodim ishlamaydi, " +
        "lekin ish haqining bir qismi " +
        "saqlanadi.\n\n" +
        "Berish asoslari va shartlari " +
        "qonunda belgilangan — u odatda " +
        "muayyan ijtimoiy holatlar bilan " +
        "bog'liq.\n\n" +
        "⚠️ Amaliy jihat: bunday ta'tilga " +
        "chiqishdan oldin qancha " +
        "to'lanishini ANIQ bilib oling. " +
        "\"Bir qismi\" degan ifoda " +
        "aniq raqamni bildirmaydi.\n\n" +
        "Bu daromadingizni " +
        "rejalashtirish uchun muhim.",
      example:
        "Xodim ish haqi qisman " +
        "saqlanadigan ta'tilga chiqdi va " +
        "kutganidan kam pul oldi. " +
        "Miqdorni oldindan " +
        "aniqlashtirish kerak edi.",
      keyPoints: [
        "Ish haqi qisman saqlanadigan ta'til alohida tur",
        "Xodim ishlamaydi, haqning bir qismi saqlanadi",
        "Asoslar va shartlar qonunda belgilangan",
        "Miqdorni oldindan aniqlashtirish kerak",
      ],
      warning:
        "Ta'tilga chiqishdan oldin " +
        "to'lanadigan summani yozma " +
        "aniqlashtiring.",
      lawRefs: [{ code: "MK", article: "240" }],
    },
    {
      heading: "Ish haqi saqlanmaydigan ta'til",
      text:
        "Eng ko'p uchraydigan tur — ish haqi " +
        "SAQLANMAYDIGAN ta'til.\n\n" +
        "Tushuncha va uni berishning umumiy " +
        "tartibi alohida moddada " +
        "belgilangan.\n\n" +
        "Umumiy qoida: bunday ta'til " +
        "tomonlarning KELISHUVI bilan " +
        "beriladi — ya'ni ish beruvchi " +
        "uni rad etishi mumkin.\n\n" +
        "⚠️ AMALDA ENG KO'P UCHRAYDIGAN " +
        "SUISTE'MOL: ish beruvchi " +
        "xodimni MAJBURAN shunday " +
        "ta'tilga chiqaradi (masalan " +
        "buyurtma kam bo'lganda). Bu " +
        "qonunga zid — ta'til " +
        "xodimning arizasi bilan " +
        "beriladi.\n\n" +
        "Majburan chiqarilsangiz bu " +
        "aslida BEKOR TURISH bo'lib, " +
        "unga to'lov qoidalari " +
        "qo'llaniladi.",
      example:
        "Ish kam bo'lgani uchun " +
        "xodimlarni \"o'z hisobidan " +
        "ta'tilga\" chiqarishdi. Bu " +
        "majburlash — aslida bekor " +
        "turish va u to'lanishi kerak.",
      keyPoints: [
        "Bu ta'til kelishuv bilan beriladi",
        "Ish beruvchi uni rad etishi mumkin",
        "Majburan chiqarish qonunga zid",
        "Majburiy holatda bu bekor turish hisoblanadi",
      ],
      warning:
        "\"O'z hisobidan ta'tilga chiqing\" " +
        "degan MAJBURLASHGA rozi " +
        "bo'lmang — arizani o'zingiz " +
        "yozmasangiz bu bekor turish.",
      lawRefs: [{ code: "MK", article: "241" }],
    },
    {
      heading: "Majburiy tartibda beriladigan ta'til",
      text:
        "⚠️ Bu — darsning eng foydali " +
        "mavzusi.\n\n" +
        "Qonun xodimning TALABIGA ko'ra " +
        "MAJBURIY tartibda ish haqi " +
        "saqlanmagan holda ta'til " +
        "berilishini nazarda tutadi — " +
        "bu alohida moddada " +
        "belgilangan.\n\n" +
        "Ya'ni ayrim holatlarda ish " +
        "beruvchi RAD ETA OLMAYDI.\n\n" +
        "Bunday holatlar odatda oilaviy " +
        "va shaxsiy sabablar bilan " +
        "bog'liq: yaqin qarindoshning " +
        "vafoti, nikoh, bola tug'ilishi " +
        "va qonunda ko'rsatilgan " +
        "boshqalar.\n\n" +
        "Aniq holatlar va davomiylik " +
        "qonun matnida.",
      example:
        "Xodimning yaqin qarindoshi vafot " +
        "etdi va ta'til so'radi, lekin " +
        "rad javobi oldi. Bunday holat " +
        "majburiy ta'til ro'yxatiga " +
        "kirsa rad etish qonunga zid.",
      keyPoints: [
        "Ayrim holatlarda ta'til majburiy beriladi",
        "Ish beruvchi rad eta olmaydi",
        "Oilaviy va shaxsiy sabablar asos bo'ladi",
        "Aniq holatlar qonunda ko'rsatilgan",
      ],
      warning:
        "Majburiy ta'til rad etilsa " +
        "arizangiz nusxasini saqlang — " +
        "bu keyinchalik dalil bo'ladi.",
      lawRefs: [{ code: "MK", article: "242" }],
    },
  ],
};

module.exports = { LESSON };
