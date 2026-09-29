"use strict";
/**
 * HUQUQIY ATAMALAR LUG'ATI — modda matnidagi murakkab so'zlar ustiga
 * bosilganda chiqadigan izoh.
 *
 * ⚠️ Izohlarda MUDDAT, SUMMA, FOIZ yoki MODDA RAQAMI YO'Q — ular qonun
 * tahririga bog'liq va eskiradi. Faqat atamaning barqaror MA'NOSI.
 *
 * `uz` / `ru` — matnda qidiriladigan so'z boshlari (kichik harf,
 * apostrof "'" ga keltirilgan). Frontend eng uzun mosni tanlaydi.
 */
const T = (id, uz, ru, defUz, defRu) => ({ id, uz, ru, defUz, defRu });

const GLOSSARY = [
  T("davo", ["da'vo"], ["иск"], "Sud orqali o'z buzilgan huquqini himoya qilish haqidagi talab.", "Требование о защите нарушенного права, обращённое в суд."),
  T("majburiyat", ["majburiyat"], ["обязательств", "обязанност"], "Shaxs qonun yoki shartnoma bo'yicha bajarishi shart bo'lgan harakat (yoki harakatdan tiyilish).", "Действие (или воздержание от действия), которое лицо обязано совершить по закону или договору."),
  T("javobgarlik", ["javobgarlik"], ["ответственност"], "Qonun buzilganda shaxs uchun yuzaga keladigan huquqiy oqibat (jarima, jazo, zararni qoplash).", "Правовые последствия нарушения закона: штраф, наказание, возмещение вреда."),
  T("dalolatnoma", ["dalolatnoma"], [], "Biror fakt yoki holatni rasmiy qayd etuvchi yozma hujjat.", "Письменный документ, официально фиксирующий факт или обстоятельство."),
  T("vakolat", ["vakolat"], ["полномочи"], "Shaxs yoki organga qonun bilan berilgan harakat qilish huquqi.", "Право действовать, предоставленное лицу или органу законом."),
  T("ishonchnoma", ["ishonchnoma"], ["доверенност"], "Bir shaxs boshqasiga o'z nomidan harakat qilish huquqini beradigan yozma hujjat.", "Письменное уполномочие одного лица другому действовать от его имени."),
  T("davogar", ["da'vogar"], ["истец", "истца"], "Sudga da'vo bilan murojaat qilgan shaxs.", "Лицо, обратившееся в суд с иском."),
  T("javobgar", ["javobgarning", "javobgarga", "javobgardan"], ["ответчик"], "Da'vo qaysi shaxsga nisbatan qo'zg'atilgan bo'lsa, o'sha shaxs (sud jarayonida).", "Лицо, к которому предъявлен иск."),
  T("apellyatsiya", ["apellyatsiya"], ["апелляц"], "Qonuniy kuchga kirmagan sud qarorini yuqori sudda qayta ko'rib chiqish tartibi.", "Порядок пересмотра не вступившего в силу судебного решения вышестоящим судом."),
  T("kassatsiya", ["kassatsiya"], ["кассац"], "Qonuniy kuchga kirgan sud qarorini qonuniyligi bo'yicha qayta ko'rib chiqish.", "Пересмотр вступившего в силу судебного решения на предмет законности."),
  T("ajrim", ["ajrim"], ["определени"], "Sudning ishni mazmunan hal qilmaydigan, jarayon masalalari bo'yicha qarori.", "Судебный акт по процессуальным вопросам, не разрешающий дело по существу."),
  T("hukm", ["hukm"], ["приговор"], "Jinoyat ishi bo'yicha sudning aybdorlik yoki aybsizlik haqidagi qarori.", "Решение суда по уголовному делу о виновности или невиновности."),
  T("gumon", ["gumon qilinuvchi"], ["подозреваем"], "Jinoyat sodir etganlikda gumon qilinib ushlangan yoki unga nisbatan chora qo'llangan shaxs.", "Лицо, задержанное или к которому применена мера по подозрению в преступлении."),
  T("ayblanuvchi", ["ayblanuvchi"], ["обвиняем"], "Ayblov e'lon qilingan shaxs.", "Лицо, которому предъявлено обвинение."),
  T("jabrlanuvchi", ["jabrlanuvchi"], ["потерпевш"], "Jinoyat yoki huquqbuzarlik natijasida zarar ko'rgan shaxs.", "Лицо, которому преступлением или правонарушением причинён вред."),
  T("himoyachi", ["himoyachi"], ["защитник"], "Gumon qilinuvchi yoki ayblanuvchining huquqlarini himoya qiluvchi advokat.", "Адвокат, защищающий права подозреваемого или обвиняемого."),
  T("prokuror", ["prokuror"], ["прокурор"], "Qonunlarning aniq bajarilishini nazorat qiluvchi va davlat ayblovini qo'llab-quvvatlovchi mansabdor.", "Должностное лицо, надзирающее за исполнением законов и поддерживающее обвинение."),
  T("muddat", ["da'vo muddati"], ["исковой давност"], "Buzilgan huquqni sud orqali himoya qilish mumkin bo'lgan vaqt oralig'i.", "Срок, в течение которого можно защитить нарушенное право через суд."),
  T("neustoyka", ["neustoyka"], ["неустойк"], "Majburiyat bajarilmaganda to'lanadigan, shartnoma yoki qonunda belgilangan pul summasi.", "Денежная сумма, выплачиваемая при неисполнении обязательства."),
  T("zarar", ["zarar"], ["убытк", "ущерб"], "Huquq buzilishi natijasida ko'rilgan moddiy yo'qotish yoki boy berilgan foyda.", "Материальные потери или упущенная выгода вследствие нарушения права."),
  T("kompensatsiya", ["ma'naviy zarar"], ["моральн"], "Jismoniy yoki ruhiy azob uchun pul bilan qoplanadigan zarar.", "Вред за физические или нравственные страдания, возмещаемый деньгами."),
  T("mulk", ["mulk huquqi"], ["право собственности"], "Mol-mulkka egalik qilish, undan foydalanish va uni tasarruf etish huquqi.", "Право владения, пользования и распоряжения имуществом."),
  T("tasarruf", ["tasarruf"], ["распоряж"], "Mol-mulk taqdirini hal qilish: sotish, hadya qilish, garovga qo'yish.", "Определение судьбы имущества: продажа, дарение, залог."),
  T("garov", ["garov"], ["залог"], "Qarz qaytmasa, kreditor to'lovni muayyan mol-mulk hisobidan olish huquqi.", "Право кредитора получить удовлетворение за счёт определённого имущества."),
  T("kafillik", ["kafillik", "kafil"], ["поручител"], "Boshqa shaxs qarzini u to'lamasa, uning o'rniga to'lash majburiyati.", "Обязательство отвечать за долг другого лица, если оно его не исполнит."),
  T("meros", ["meros qoldiruvchi"], ["наследодател"], "Vafot etgan va mol-mulki merosga o'tadigan shaxs.", "Умершее лицо, имущество которого переходит по наследству."),
  T("voris", ["voris"], ["наследник"], "Meros qoldiruvchining mol-mulkini qonun yoki vasiyat bo'yicha oluvchi shaxs.", "Лицо, получающее наследство по закону или завещанию."),
  T("vasiyatnoma", ["vasiyatnoma"], ["завещани"], "Shaxsning vafotidan keyin mol-mulki kimga o'tishi haqidagi yozma farmoyishi.", "Письменное распоряжение лица о судьбе имущества после смерти."),
  T("aliment", ["aliment"], ["алимент"], "Qonunga ko'ra oila a'zosini (bola, ota-ona, er-xotin) moddiy ta'minlash uchun to'lanadigan mablag'.", "Средства на содержание члена семьи, выплачиваемые по закону."),
  T("vasiylik", ["vasiylik", "homiylik"], ["опек", "попечительств"], "Ota-ona qaramog'idan mahrum bo'lgan yoki muomalaga layoqatsiz shaxsni himoya qilish shakli.", "Форма защиты лиц, оставшихся без попечения родителей или недееспособных."),
  T("layoqat", ["muomala layoqati"], ["дееспособност"], "O'z harakatlari bilan huquq olish va majburiyatni bajarish qobiliyati.", "Способность своими действиями приобретать права и исполнять обязанности."),
  T("yuridik", ["yuridik shaxs"], ["юридическ"], "Mustaqil mulkka ega bo'lgan va o'z nomidan huquq va majburiyatlarga ega tashkilot.", "Организация, имеющая обособленное имущество и выступающая от своего имени."),
  T("shartnoma", ["shartnoma"], ["договор"], "Ikki yoki undan ortiq shaxsning huquq va majburiyatlarni belgilash haqidagi kelishuvi.", "Соглашение двух или более лиц об установлении прав и обязанностей."),
  T("oferta", ["oferta"], ["оферт"], "Shartnoma tuzish haqidagi aniq va barcha muhim shartlarni o'z ichiga olgan taklif.", "Предложение заключить договор, содержащее все существенные условия."),
  T("aksept", ["aksept"], ["акцепт"], "Ofertani to'liq va so'zsiz qabul qilish.", "Полное и безоговорочное принятие оферты."),
  T("bitim", ["bitim"], ["сделк"], "Huquq va majburiyatlarni vujudga keltiruvchi, o'zgartiruvchi yoki bekor qiluvchi harakat.", "Действие, устанавливающее, изменяющее или прекращающее права и обязанности."),
  T("notarius", ["notarial"], ["нотариал"], "Hujjat yoki bitimni notarius tomonidan rasmiy tasdiqlash.", "Официальное удостоверение документа или сделки нотариусом."),
  T("jarima", ["jarima"], ["штраф"], "Huquqbuzarlik uchun qo'llaniladigan pul undiruvi.", "Денежное взыскание за правонарушение."),
  T("sudlanganlik", ["sudlanganlik"], ["судимост"], "Jinoyat uchun hukm qilinganlik holati va uning huquqiy oqibatlari.", "Правовое состояние лица, осуждённого за преступление."),
  T("amnistiya", ["amnistiya"], ["амнист"], "Davlat tomonidan muayyan toifadagi shaxslarni jazodan to'liq yoki qisman ozod qilish.", "Полное или частичное освобождение определённой категории лиц от наказания."),
  T("ehtiyot", ["ehtiyot chorasi"], ["мера пресечения"], "Tergov va sud davomida ayblanuvchining yashirinib qolishi yoki to'sqinlik qilishining oldini olish chorasi.", "Мера, предотвращающая уклонение обвиняемого от следствия и суда."),
  T("mehnat", ["mehnat shartnomasi"], ["трудовой договор"], "Xodim va ish beruvchi o'rtasidagi ish, haq va shartlar haqidagi kelishuv.", "Соглашение между работником и работодателем о работе, оплате и условиях."),
  T("soliq", ["soliq to'lovchi"], ["налогоплательщик"], "Qonunga ko'ra soliq to'lash majburiyati yuklangan shaxs.", "Лицо, на которое законом возложена обязанность уплачивать налоги."),
  T("servitut", ["servitut"], ["сервитут"], "Birovning yer uchastkasi yoki mulkidan cheklangan tarzda foydalanish huquqi.", "Право ограниченного пользования чужим земельным участком или имуществом."),
  T("reabilitatsiya", ["reabilitatsiya"], ["реабилитац"], "Asossiz jinoiy ta'qib qilingan shaxsning huquqlari va obro'sini tiklash.", "Восстановление прав и репутации незаконно преследованного лица."),
];

module.exports = { GLOSSARY };
