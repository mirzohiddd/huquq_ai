"use strict";
/**
 * KUNDALIK TILDAGI SAVOLLAR — mehnat va oila (2026-10-20).
 *
 * Nima uchun alohida: mavjud savollar rasmiy tilda ("Aliment qanday
 * undiriladi?"). Odam esa Google'ga kundalik tilda yozadi ("aliment
 * qancha to'lanadi", "o'z xohishim bilan ishdan qanday ketaman").
 * Google va AI tizimlari javobni SO'ROV SHAKLIGA eng yaqin sahifadan oladi.
 *
 * ⚠️ `qaContent/` qoidasi: muddat, foiz, summa va modda raqami matnda YO'Q —
 * ular `refs` orqali bazadan jonli iqtibos bo'lib chiqadi.
 */
module.exports = [
  {
    slug: "oz-xohishim-bilan-ishdan-qanday-ketaman",
    area: "mehnat",
    q: { uz: "O'z xohishim bilan ishdan qanday ketaman?", ru: "Как уволиться по собственному желанию?" },
    short: {
      uz: "Ish beruvchini oldindan YOZMA ravishda ogohlantirasiz (ariza yozasiz). Ogohlantirish muddati qonunda belgilangan — u o'tgach shartnoma bekor qilinadi, oxirgi kuni buyruq nusxasi va to'liq hisob-kitob beriladi.",
      ru: "Нужно заранее ПИСЬМЕННО предупредить работодателя (подать заявление). Срок предупреждения установлен законом — по его истечении договор расторгается, в последний день выдаются копия приказа и полный расчёт.",
    },
    body: {
      uz: [
        "Arizani ikki nusxada yozing va ikkinchi nusxaga qabul qilingan sana bilan imzo qo'ydiring — ogohlantirish muddati shu kundan hisoblanadi. Ish beruvchi bilan kelishsangiz, shartnomani muddatdan oldin ham bekor qilish mumkin.",
        "Ishdagi oxirgi kuni ishdan bo'shatish buyrug'i rasmiylashtiriladi, ish haqi va foydalanilmagan ta'til uchun kompensatsiya to'lanadi. Hisob-kitob qilinmasa, mehnat inspeksiyasiga yoki sudga murojaat qilish mumkin.",
      ],
      ru: [
        "Напишите заявление в двух экземплярах и попросите отметку о принятии с датой на втором — срок предупреждения считается с этого дня. По соглашению с работодателем договор можно расторгнуть и раньше.",
        "В последний рабочий день оформляется приказ об увольнении, выплачиваются зарплата и компенсация за неиспользованный отпуск. Если расчёт не произведён, можно обратиться в инспекцию труда или в суд.",
      ],
    },
    refs: [{ code: "MK", article: "160" }, { code: "MK", article: "170" }, { code: "MK", article: "234" }],
  },
  {
    slug: "ishdan-boshatilganda-qanday-tolovlar-beriladi",
    area: "mehnat",
    q: { uz: "Ishdan bo'shatilganda qanday to'lovlar beriladi?", ru: "Какие выплаты положены при увольнении?" },
    short: {
      uz: "Har qanday asosda bo'shatilganda ishlangan kunlar uchun ish haqi va foydalanilmagan ta'til uchun pulli kompensatsiya to'lanadi. Ish beruvchi tashabbusi bilan va qonunda sanab o'tilgan boshqa hollarda qo'shimcha ravishda ishdan bo'shatish nafaqasi beriladi.",
      ru: "При любом увольнении выплачиваются зарплата за отработанные дни и денежная компенсация за неиспользованный отпуск. При увольнении по инициативе работодателя и в других случаях, перечисленных в законе, дополнительно выплачивается выходное пособие.",
    },
    body: {
      uz: [
        "Nafaqa qaysi hollarda va qancha miqdorda to'lanishi qonunda aniq sanab o'tilgan — quyidagi modda iqtibosida ko'rsatilgan. Mehnat yoki jamoa shartnomasida xodim uchun qulayroq shartlar ham belgilanishi mumkin.",
      ],
      ru: [
        "В каких случаях и в каком размере выплачивается пособие, прямо перечислено в законе — см. цитату статьи ниже. Трудовой или коллективный договор может предусматривать более выгодные для работника условия.",
      ],
    },
    refs: [{ code: "MK", article: "173" }, { code: "MK", article: "234" }, { code: "MK", article: "253" }],
  },
  {
    slug: "ishdan-noqonuniy-boshatishsa-nima-qilish-kerak",
    area: "mehnat",
    q: { uz: "Ishdan noqonuniy bo'shatishsa nima qilish kerak?", ru: "Что делать, если незаконно уволили?" },
    short: {
      uz: "Ish beruvchiga yozma shikoyat qiling yoki sudga murojaat qiling. Bo'shatish qonunga xilof deb topilsa, xodim avvalgi ishiga tiklanadi, majburiy ishlamagan vaqt uchun haq va ma'naviy ziyon qoplanadi.",
      ru: "Подайте письменную жалобу работодателю или обратитесь в суд. Если увольнение признано незаконным, работника восстанавливают на прежней работе, оплачивают вынужденный прогул и компенсируют моральный вред.",
    },
    body: {
      uz: [
        "Buyruq nusxasi, mehnat shartnomasi va ogohlantirish xatini saqlang — ular asosiy dalil. Bo'shatish uchun qonunda sanalgan asos bo'lishi shart, qonunda nazarda tutilgan hollarda esa ish beruvchi xodimni oldindan yozma ogohlantiradi.",
        "Shikoyat qilish muddati cheklangan, shuning uchun kechiktirmang. Aniq muddatni quyidagi moddalar va Mehnat kodeksining nizolar bo'limidan tekshiring.",
      ],
      ru: [
        "Сохраните копию приказа, трудовой договор и уведомление — это главные доказательства. Основание увольнения должно быть предусмотрено законом, а в установленных законом случаях работодатель заранее письменно предупреждает работника.",
        "Срок обжалования ограничен, поэтому не откладывайте. Точный срок проверьте по статьям ниже и разделу Трудового кодекса о спорах.",
      ],
    },
    refs: [{ code: "MK", article: "174" }, { code: "MK", article: "161" }, { code: "MK", article: "165" }],
  },
  {
    slug: "bolalar-uchun-aliment-qancha-tolanadi",
    area: "oila",
    q: { uz: "Bolalar uchun aliment qancha to'lanadi?", ru: "Сколько платят алименты на детей?" },
    short: {
      uz: "Voyaga yetmagan bolalar uchun aliment ota (ona) daromadining qonunda belgilangan ulushi miqdorida undiriladi — ulush bolalar soniga qarab ortadi. Aniq ulushlar quyidagi modda iqtibosida keltirilgan.",
      ru: "Алименты на несовершеннолетних детей взыскиваются в установленной законом доле от дохода родителя — доля растёт с числом детей. Точные доли приведены в цитате статьи ниже.",
    },
    body: {
      uz: [
        "Hisoblashda qaysi daromadlar inobatga olinishi alohida belgilangan. Daromadi doimiy bo'lmagan yoki pul o'rnida mol-mulk oladigan ota-onadan aliment qat'iy pul summasida ham belgilanishi mumkin.",
        "Sud muayyan holatlarda (masalan, to'lovchining moddiy ahvoli, boshqa bolalari) ulushni kamaytirishi yoki ko'paytirishi mumkin. Taraflar notarial kelishuv tuzib, alimentni sudsiz ham belgilashi mumkin.",
      ],
      ru: [
        "Отдельно определено, какие доходы учитываются. С родителя без постоянного дохода или получающего доход в натуре алименты могут быть назначены в твёрдой денежной сумме.",
        "Суд в определённых случаях (материальное положение плательщика, другие дети) может уменьшить или увеличить долю. Стороны могут заключить нотариальное соглашение и определить алименты без суда.",
      ],
    },
    refs: [{ code: "OK", article: "99" }, { code: "OK", article: "104" }, { code: "OK", article: "130" }],
  },
  {
    slug: "aliment-tolamasa-nima-boladi",
    area: "oila",
    q: { uz: "Aliment to'lamasa nima bo'ladi?", ru: "Что будет, если не платить алименты?" },
    short: {
      uz: "Sud qarorini bajarmaslik qarz to'planishiga va majburiy ijroga olib keladi. Bolalarga aliment to'lashdan bo'yin tovlagan shaxs ota-onalik huquqidan mahrum qilinishi yoki jinoiy javobgarlikka tortilishi mumkin.",
      ru: "Неисполнение решения суда ведёт к накоплению долга и принудительному исполнению. Уклоняющийся от уплаты алиментов на детей может быть лишён родительских прав или привлечён к уголовной ответственности.",
    },
    body: {
      uz: [
        "Aliment bo'yicha ijro varaqasi Majburiy ijro byurosiga beriladi: u to'lovchining ish haqidan, hisobvarag'idan va mol-mulkidan undiradi. Qarzdor ish joyini o'zgartirsa ham, ijro u bilan birga o'tadi.",
      ],
      ru: [
        "Исполнительный лист по алиментам передаётся в Бюро принудительного исполнения: взыскание обращается на зарплату, счета и имущество плательщика. При смене работы исполнение следует за должником.",
      ],
    },
    refs: [{ code: "OK", article: "116" }, { code: "OK", article: "114" }],
  },
  {
    slug: "er-ajrashishga-rozi-bolmasa-nima-boladi",
    area: "oila",
    q: { uz: "Turmush o'rtog'im ajrashishga rozi bo'lmasa nima bo'ladi?", ru: "Что делать, если супруг не согласен на развод?" },
    short: {
      uz: "Bunday holda ajrashish faqat SUD orqali bo'ladi. Sud yarashish uchun muhlat berishi mumkin, lekin oila saqlanib qolmasligini aniqlasa, ikkinchi tarafning roziligisiz ham nikohni bekor qiladi.",
      ru: "В этом случае развод возможен только через СУД. Суд может дать срок для примирения, но если установит, что семью сохранить нельзя, расторгнет брак и без согласия второго супруга.",
    },
    body: {
      uz: [
        "Oilaviy (maishiy) zo'ravonlikdan jabrlangan tarafning talabi bilan sud yarashish muhlatini tayinlamaydi. Xotin homilador bo'lgan vaqtda va bola tug'ilgandan keyin qonunda belgilangan davr ichida er uning roziligisiz ajrashish talabini qo'ya olmaydi.",
      ],
      ru: [
        "По требованию пострадавшего от семейного (бытового) насилия суд не назначает срок примирения. Во время беременности жены и в установленный законом период после рождения ребёнка муж не вправе требовать развода без её согласия.",
      ],
    },
    refs: [{ code: "OK", article: "40" }, { code: "OK", article: "41" }, { code: "OK", article: "39" }],
  },
  {
    slug: "oilaviy-zoravonlik-qayerga-murojaat-qilish-kerak",
    area: "oila",
    q: { uz: "Erim (xotinim) ursa qayerga murojaat qilish kerak?", ru: "Куда обращаться, если муж (жена) бьёт?" },
    short: {
      uz: "Oilaviy (maishiy) zo'ravonlik — huquqbuzarlik. Darhol ichki ishlar organiga (102) murojaat qiling: jabrlanuvchiga himoya orderi berilishi, zo'ravonga esa ma'muriy yoki takroriy holatda jinoiy javobgarlik qo'llanishi mumkin.",
      ru: "Семейное (бытовое) насилие — правонарушение. Сразу обращайтесь в органы внутренних дел (102): пострадавшему может быть выдан охранный ордер, а к агрессору применена административная, а при повторности — уголовная ответственность.",
    },
    body: {
      uz: [
        "Jarohat bo'lsa, tibbiy ko'rikdan o'ting — tibbiy hujjat asosiy dalil. Xabarlar, audio va guvohlar ham dalil bo'ladi. Er va xotin oilada teng huquqli; zo'ravonlikdan jabrlangan taraf sudda ajrashish so'raganda yarashish muhlati tayinlanmaydi.",
      ],
      ru: [
        "При травмах пройдите медосвидетельствование — медицинский документ главное доказательство. Доказательствами служат и сообщения, аудио, свидетели. Супруги равноправны; при иске о разводе пострадавшему от насилия срок примирения не назначается.",
      ],
    },
    refs: [{ code: "MJK", article: "59-2" }, { code: "JK", article: "126-1" }, { code: "OK", article: "19" }],
  },
];
