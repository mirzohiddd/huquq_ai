"use strict";
/**
 * HAYOTIY VAZIYATLAR — OILA.
 *
 * `match` — normallashtirilgan savol matni (kichik harf, apostrofsiz,
 * kirill o'zbekcha lotinga o'girilgan) ustida ishlaydi (situations.js).
 * `pins` — vaziyatga BEVOSITA tegishli moddalar. Har biri sayt
 * bazasidan (LegalChunk) raqami VA sarlavhasi bo'yicha tekshirilgan.
 * `steps` — amaliy yechim. ⚠️ Qadamlarda aniq muddat, summa, foiz yoki
 * modda raqami YOZILMAYDI — ular iqtibos qilingan modda matnida
 * jonli ko'rinadi (loyihaning asosiy huquqiy aniqlik qoidasi).
 */

const FAMILY =
  /\b(erim|erimni|erimdan|xotinim|xotinimni|turmush ortogim|kuyovim|qaynonam|qaynotam|qaynim|qaynsinglim|kelinim|otam|onam|akam|ukam|ogay)|муж|жена|свекров|свекор|отчим/;
const VIOLENCE =
  /\bur(di|adi|ar|ardi|ib|yapti|ayapti|moqda|gan|ishdi|ishyapti|adigan)\b|kaltak|dopposl|zoravon|zoravonlik|qiyna|tazyiq|shafqatsiz|tahdid|qorqit|бьет|бьёт|избил|избива|ударил|побои|насили/;

module.exports = [
  {
    id: "domestic_violence",
    match: (t) =>
      /(oilaviy|maishiy) zoravonlik|домашн\S* насили/.test(t) ||
      (FAMILY.test(t) && VIOLENCE.test(t)),
    title: { uz: "Oilaviy (maishiy) zo'ravonlik", ru: "Семейное (бытовое) насилие" },
    summary: {
      uz:
        "Oilada urish, kaltaklash, qo'rqitish va tazyiq — qonun bilan taqiqlangan harakat. " +
        "Oila kodeksi er va xotinni oilada teng huquqli deb belgilaydi, zo'ravonlik uchun esa " +
        "Ma'muriy javobgarlik va Jinoyat kodekslarida alohida javobgarlik nazarda tutilgan.",
      ru:
        "Побои, запугивание и давление в семье запрещены законом. Семейный кодекс закрепляет " +
        "равноправие супругов, а за насилие предусмотрена отдельная ответственность по Кодексу " +
        "об административной ответственности и Уголовному кодексу.",
    },
    pins: [["OK", "19"], ["MJK", "59-2"], ["JK", "126-1"], ["MJK", "206-1"], ["OK", "41"]],
    codes: ["OK", "MJK", "JK"],
    terms: "oilaviy maishiy zoʻravonlik tazyiq himoya orderi tan jarohati",
    steps: {
      uz: [
        "Hayotingiz yoki sog'lig'ingiz xavf ostida bo'lsa — darhol xavfsiz joyga o'ting va 102 raqamiga (ichki ishlar organlari) qo'ng'iroq qiling.",
        "Jarohat bo'lsa, tibbiyot muassasasiga murojaat qiling va jarohatlarni rasmiy qayd ettiring — bu keyinchalik asosiy dalil bo'ladi.",
        "Ichki ishlar organiga (profilaktika inspektoriga) yozma ariza bering va zo'ravonlik qilgan shaxsga nisbatan himoya orderi berilishini so'rang. Orderni bajarmaslikning o'zi ham alohida javobgarlikka sabab bo'ladi.",
        "Dalillarni saqlang: guvohlar, xabarlar, audio/video yozuvlar, tibbiy hujjatlar.",
        "Birga yashash imkonsiz bo'lsa, nikohdan ajratish, bolalar va aliment masalasida sudga murojaat qilish huquqingiz bor.",
      ],
      ru: [
        "Если есть угроза жизни или здоровью — немедленно уйдите в безопасное место и позвоните по номеру 102 (органы внутренних дел).",
        "При травмах обратитесь в медицинское учреждение и официально зафиксируйте повреждения — это главное доказательство.",
        "Подайте письменное заявление в органы внутренних дел (инспектору профилактики) и попросите выдать охранный ордер в отношении агрессора. Нарушение ордера само по себе влечёт ответственность.",
        "Сохраняйте доказательства: свидетели, сообщения, аудио/видео, медицинские документы.",
        "Если совместная жизнь невозможна, вы вправе обратиться в суд о расторжении брака, определении места жительства детей и алиментах.",
      ],
    },
  },
  {
    id: "alimony",
    match: (t) => /aliment|алимент|\b(bola|farzand)(m|ng|si|ga|mga|mni|ni|lar\S*|im\S*)?\b.{0,25}nafaqa|nafaqa.{0,25}\b(bola|farzand)(m|ng|si|ga|mga|mni|ni|lar\S*|im\S*)?\b/.test(t),
    title: { uz: "Aliment undirish", ru: "Взыскание алиментов" },
    summary: {
      uz:
        "Ota-ona voyaga yetmagan bolalarini ta'minlashga majbur. Ixtiyoriy to'lanmasa, aliment " +
        "kelishuv yoki sud orqali undiriladi; to'lashdan bosh tortish javobgarlikka sabab bo'ladi.",
      ru:
        "Родители обязаны содержать несовершеннолетних детей. Если алименты не платятся добровольно, " +
        "они взыскиваются по соглашению или через суд; уклонение от уплаты влечёт ответственность.",
    },
    pins: [["OK", "96"], ["OK", "98"], ["OK", "99"], ["OK", "136"]],
    codes: ["OK"],
    terms: "aliment undirish taʼminot miqdori",
    steps: {
      uz: [
        "Ikkinchi tomon bilan aliment to'lash to'g'risida kelishuv tuzish mumkin — u notarial tasdiqlanishi kerak.",
        "Kelishuv bo'lmasa, sudga aliment undirish to'g'risida ariza bering; miqdor qonunda belgilangan ulushlarda hisoblanadi.",
        "Sud qarori ijro etilmasa, ijro organiga murojaat qiling — aliment qarzi ham undiriladi.",
      ],
      ru: [
        "Можно заключить с другой стороной соглашение об уплате алиментов — оно подлежит нотариальному удостоверению.",
        "Если соглашения нет, подайте в суд заявление о взыскании алиментов; размер рассчитывается в долях, установленных законом.",
        "Если решение суда не исполняется, обратитесь в орган исполнения — задолженность по алиментам также взыскивается.",
      ],
    },
  },
  {
    id: "child_custody",
    match: (t) =>
      /(bola|farzand|qiz|ogil)\S*.{0,40}(kimda|kim bilan|qolad|korish|korsatmay|korishtirmay|olib ket)|с кем останется ребен|видеться с ребен/.test(t),
    title: { uz: "Ajrashganda bola kim bilan qoladi", ru: "С кем останется ребёнок" },
    summary: {
      uz:
        "Ota va ona bolaga nisbatan teng huquqli. Nikohdan ajratishda bolaning kim bilan yashashini " +
        "ota-ona kelisha olmasa, sud hal qiladi. Alohida yashayotgan ota (ona) ham bola bilan ko'rishish huquqiga ega.",
      ru:
        "Родители имеют равные права в отношении ребёнка. Если при разводе они не договорились, с кем " +
        "будет жить ребёнок, это решает суд. Родитель, живущий отдельно, сохраняет право на общение с ребёнком.",
    },
    pins: [["OK", "44"], ["OK", "71"], ["OK", "76"], ["OK", "78"]],
    codes: ["OK"],
    terms: "bolalar kim bilan yashashi ota-onalik huquqi koʻrishish",
    steps: {
      uz: [
        "Avval bolaning yashash joyi va ko'rishish tartibini ikkinchi tomon bilan kelishishga harakat qiling.",
        "Kelishuv bo'lmasa — sudga ariza bering; sud bolaning manfaatini, uning har bir ota-onaga bog'liqligini va sharoitlarni hisobga oladi.",
        "Bola bilan ko'rishishga to'sqinlik qilinsa, vasiylik va homiylik organiga, so'ng sudga murojaat qilishingiz mumkin.",
      ],
      ru: [
        "Сначала попробуйте договориться с другим родителем о месте жительства ребёнка и порядке общения.",
        "Если договориться не удалось — обратитесь в суд; суд учитывает интересы ребёнка, его привязанность к каждому из родителей и условия жизни.",
        "Если вам препятствуют в общении с ребёнком, обратитесь в орган опеки и попечительства, затем в суд.",
      ],
    },
  },
  {
    id: "divorce",
    match: (t) => /ajrash|ajral|ajrim|taloq|nikohdan ajrat|nikohni bekor|развод|развест|расторг\S* брак/.test(t),
    title: { uz: "Nikohdan ajralish", ru: "Расторжение брака" },
    summary: {
      uz:
        "Nikohdan ajratish ikki yo'l bilan bo'ladi: voyaga yetmagan bolalar bo'lmasa va ikkala tomon rozi " +
        "bo'lsa — FHDYo organida; aks holda — sud tartibida.",
      ru:
        "Брак расторгается двумя путями: при отсутствии несовершеннолетних детей и взаимном согласии — " +
        "в органах ЗАГС; в остальных случаях — в судебном порядке.",
    },
    pins: [["OK", "38"], ["OK", "40"], ["OK", "41"], ["OK", "42"], ["OK", "44"]],
    codes: ["OK"],
    terms: "nikohdan ajratish tartibi sud",
    steps: {
      uz: [
        "Voyaga yetmagan bolalar bo'lmasa va ikkalangiz rozi bo'lsangiz — FHDYo organiga birgalikda ariza bering.",
        "Bolalar bo'lsa yoki ikkinchi tomon rozi bo'lmasa — sudga nikohdan ajratish to'g'risida da'vo arizasi bering.",
        "Arizada bolalar kim bilan yashashi, aliment va umumiy mulkni bo'lish masalalarini ham ko'rsating — sud ularni birga hal qiladi.",
      ],
      ru: [
        "Если нет несовершеннолетних детей и вы оба согласны — подайте совместное заявление в орган ЗАГС.",
        "Если есть дети или другая сторона не согласна — подайте в суд исковое заявление о расторжении брака.",
        "Укажите в заявлении вопросы о месте жительства детей, алиментах и разделе общего имущества — суд решит их вместе.",
      ],
    },
  },
];
