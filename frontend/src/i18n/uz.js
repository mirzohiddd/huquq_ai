// ⚠️ Faqat O'ZBEK tili. Tarjimalar tillar bo'yicha ALOHIDA fayllarda (2026-09-28,
// PageSpeed): avval ikkala til bitta faylda edi va har bir tashrifda ~130 KB
// behuda yuklanardi. Yuklash mantig'i — ./translations.js.
const uz = {
  nav_home: "Bosh sahifa",
  nav_about_us: "Biz haqimizda",
  nav_services: "Xizmatlar",
  nav_articles: "Maqolalar",
  nav_contact: "Manzil",
  nav_pricing: "Narxlar",
  nav_ai_assistant: "AI Yordamchi",
  // ── Platforma imkoniyatlari (Biz haqimizda bo'limida) ──
  feat_section_title: "Platforma imkoniyatlari",
  feat_section_sub: "Ro'yxatdan o'tgan foydalanuvchilar uchun to'liq ochiladi",
  feat_ai_title: "AI Yordamchi",
  feat_ai_desc: "Huquqiy savollaringizga tez va tushunarli javob oling.",
  feat_lessons_title: "Darslar",
  feat_lessons_desc: "Huquq fanlarini mavzular bo'yicha o'rganing.",
  feat_tests_title: "Testlar",
  feat_tests_desc: "Bilimingizni testlar orqali sinab ko'ring.",
  feat_library_title: "Qonunlar kutubxonasi",
  feat_library_desc: "Konstitutsiya va kodekslardan foydalaning.",

  /* Platforma imkoniyatlari kartalari BOSILGANDA ochiladigan batafsil
     oyna matnlari. Avval karta bosilishi bilan chat ochilar yoki
     darhol boshqa sahifaga o'tib ketilardi — foydalanuvchi modul
     nima ekanini bilib olishga ulgurmasdi. */
  feat_ai_long:
    "AI yordamchi — platformaning asosiy qismi. Savolingizni oddiy tilda yozasiz, tizim uni tahlil qilib, O'zbekiston qonunchiligidan tegishli moddani topadi va javobni aynan shu tekshirilgan matn asosida beradi. Suhbat davomida qo'shimcha savol berishingiz mumkin — kontekst saqlanadi.",
  feat_ai_points: [
    "Qonun matniga asoslangan javob: modda raqami va qonun nomi ko'rsatiladi",
    "Suhbat kontekstini eslab qoladi — ketma-ket savollarga izchil javob",
    "Shartnoma yoki hujjat rasmini yuklab, tahlil qildirish mumkin",
    "O'zbek va rus tillarida, kechayu kunduz ishlaydi",
    "Bepul tarifda ham sinab ko'rish mumkin",
  ],
  feat_lessons_long:
    "Darslar — huquqni noldan o'rganish uchun. Har bir dars sodda tilda yozilgan, hayotdan misollar bilan tushuntiriladi va har bo'limda haqiqiy qonun matnidan iqtibos keltiriladi. Dars oxirida amaliy qadamlar va bilimni mustahkamlash uchun topshiriqlar bor.",
  feat_lessons_points: [
    "Mehnat, oila, meros, yer, iste'molchi va jinoyat huquqi bo'yicha darslar",
    "Har bo'limda \"Qonun nima deydi\" — bazadagi haqiqiy modda matni",
    "Hayotdan misollar, asosiy fikrlar va ko'p uchraydigan xatolar",
    "AI baholaydigan amaliy topshiriqlar (yozma, savol-javob, og'zaki)",
    "Progress va XP — o'qilgan darslar belgilanadi",
  ],
  feat_tests_long:
    "Testlar — bilimingizni tekshirish uchun. Har bir savolga javob berganingizdan so'ng darhol to'g'ri yoki noto'g'ri ekani ko'rsatiladi va qisqa izoh beriladi, oxirida esa umumiy natija chiqadi.",
  feat_tests_points: [
    "10 ta test: mehnat, oila, meros, iste'molchi, jinoyat, yer, konstitutsiya va boshqalar",
    "Jami 110 dan ortiq savol, har birida izoh bilan",
    "Savollar va variantlar har safar aralashtiriladi — yodlab olib bo'lmaydi",
    "Natija foizda ko'rsatiladi, testni qayta topshirish mumkin",
  ],
  feat_library_long:
    "Qonunlar kutubxonasi — O'zbekistonning amaldagi kodekslari to'liq matni bilan. Ma'lumot lex.uz'dagi rasmiy manbadan olinadi va muntazam yangilanadi, ya'ni siz har doim amaldagi tahrirni o'qiysiz. Konstitutsiya uchun alohida sahifa ajratilgan.",
  feat_library_points: [
    "20 ta amaldagi kodeks va qonun, 6900 dan ortiq modda",
    "Konstitutsiya — 155 modda, bo'lim va boblar bo'yicha alohida sahifada",
    "Modda raqami bo'yicha aniq qidiruv (masalan \"23-modda\")",
    "Matn ichidan kalit so'z bo'yicha qidiruv",
    "Rus tilidagi rasmiy tarjima bilan",
  ],
  feat_open_ai: "AI yordamchini ochish",
  feat_open_lessons: "Darslarga o'tish",
  feat_open_tests: "Testlarga o'tish",
  feat_open_library: "Kutubxonaga o'tish",
  feat_login_note:
    "Bu bo'lim ro'yxatdan o'tgan foydalanuvchilar uchun ochiq — ro'yxatdan o'tish bepul.",
  feat_modal_eyebrow: "Platforma imkoniyati",
  // ── Qonunlar kutubxonasi sahifasi ──
  library_sub: "O'zbekiston Respublikasining amaldagi kodekslari va qonunlari — rasmiy manbadan.",
  // Hero bannerdagi to'rtta ikona ostidagi yorliqlar
  library_perk1: "Ishonchli manba",
  library_perk2: "Dolzarb hujjatlar",
  library_perk3: "Qulay izlash",
  library_perk4: "Huquqiy axborot",
  library_loading: "Yuklanmoqda...",
  library_empty: "Qonunlar bazasi hozircha bo'sh.",
  library_not_found: "Hech narsa topilmadi.",
  library_articles: "ta modda",
  /* Pastki mobil panel uchun QISQA nom. "Qonunlar kutubxonasi" u yerda
     sig'masdi va "Qonunlar kutu…" bo'lib qirqilardi (o'lchangan: 390px
     ekranda ham 117px kerak, 72px joy bor). Boshqa joylarda to'liq
     nom (`feat_library_title`) ishlatilaveradi. */
  bnav_library: "Kutubxona",
  nav_constitution: "Konstitutsiya",
  nav_legislation: "Qonunchilik",
  legis_title: "Qonunchilik hujjatlari",
  legis_sub: "O'zbekiston Respublikasining barcha protsessual kodekslari — sud ishlari qanday yuritilishini belgilovchi rasmiy matnlar.",
  const_title: "O'zbekiston Respublikasi Konstitutsiyasi",
  const_sub: "Eng yuqori yuridik kuchga ega hujjat — barcha 155 modda to'liq matni bilan",
  const_toc: "Boblar",
  const_sections: "Bo'limlar",
  const_section: "bo'lim",
  const_chapter: "bob",
  const_prev: "Oldingi bob",
  const_next: "Keyingi bob",
  const_back_to_doc: "Hujjatga qaytish",
  const_sections_count: "bo'lim",
  const_search_ph: "Modda raqami yoki matn bo'yicha qidirish...",
  const_article: "modda",
  const_articles_count: "modda",
  const_chapters_count: "bob",
  const_top: "Yuqoriga",
  seo_const_title: "O'zbekiston Konstitutsiyasi — barcha moddalar",
  library_preparing: "Tayyorlanmoqda…",
  library_translating: "Tarjima tayyorlanmoqda…",
  library_article_word: "modda",
  library_back: "Barcha qonunlar",
  library_search_ph: "Modda raqami yoki kalit so'z bo'yicha qidirish...",
  library_search_btn: "Qidirish",
  // ── Darslar sahifasi ──
  lessons_sub: "Huquq asoslarini mavzular bo'yicha bosqichma-bosqich o'rganing.",

  /* ── DARSLAR MODULLARI ──────────────────────────────────────
     Bazada faqat id saqlanadi (`Lesson.category`), nom esa shu
     yerdan olinadi. Sabab: nom bazada saqlansa AI tarjimasiga
     tushardi — kvota sarflanardi va bir modul ruscha rejimda
     turlicha atalib qolardi. Kalitlar `lessonModules.js` dagi
     id'lar bilan bir xil bo'lishi SHART. */
  lesson_mod_constitution: "Konstitutsiya va davlat",
  lesson_mod_civil: "Fuqarolik huquqi",
  lesson_mod_contracts: "Shartnomalar",
  lesson_mod_family: "Oila huquqi",
  lesson_mod_inheritance: "Meros huquqi",
  lesson_mod_labor: "Mehnat huquqi",
  lesson_mod_housing: "Uy-joy va yer",
  lesson_mod_consumer: "Iste'molchi huquqlari",
  lesson_mod_tax: "Soliq va tadbirkorlik",
  lesson_mod_administrative: "Ma'muriy huquq",
  lesson_mod_criminal: "Jinoyat huquqi",
  lesson_mod_process: "Sud va himoya",
  lesson_mod_special: "Maxsus sohalar",
  lesson_mod_other: "Boshqa mavzular",

  lessons_search_ph: "Dars qidirish…",
  lessons_all_modules: "Barchasi",
  lessons_found: "ta dars topildi",
  lessons_nothing_found: "Hech narsa topilmadi",
  lessons_nothing_hint: "Boshqa so'z bilan qidirib ko'ring yoki bo'limni o'zgartiring.",
  lessons_clear: "Tozalash",
  lessons_module_count: "ta dars",
  lessons_total: "Jami darslar",
  lesson_prev: "Orqaga",
  lesson_next: "Keyingi",
  lessons_sections: "ta bo'lim",
  lessons_back: "Barcha darslar",

  lessons_open_library: "Qonun matnini ochish",
  lessons_ask_ai: "AI'dan so'rash",
  lessons_toc: "Mundarija",
  // ── Darslar sahifasi (qayta dizayn) ──
  lessons_hero_title: "Huquqni bosqichma-bosqich o'rganing",
  lesson_min: "daq",
  lesson_start: "Boshlash",
  lesson_continue: "Davom ettirish",
  lesson_diff_basic: "Boshlang'ich",
  lesson_diff_mid: "O'rta",
  lesson_diff_deep: "Chuqur",
  lesson_progress_title: "Dars jarayoni",

  lesson_tip: "Amaliy maslahat",
  lesson_key_points: "Asosiy fikrlar",
  lesson_warning: "Diqqat qiling",
  lesson_did_you_know: "Bilasizmi?",

  lesson_quiz_check: "Javobni tekshirish",

  lesson_summary_title: "Nimalarni o'rgandingiz",
  lesson_example: "Hayotdan misol",
  lesson_law_says: "Qonun nima deydi",
  lesson_law_full: "To'liq matn",
  lesson_goals: "Ushbu darsdan keyin siz:",
  lesson_steps: "Amaliy qadamlar",
  lesson_steps_sub: "Bilimni natijaga aylantirish uchun",
  lesson_summary_sub: "Shu darsda ko'rib chiqilgan mavzular:",
  lesson_cta_title: "Savolingiz qoldimi?",
  lesson_cta_sub:
    "O'z holatingizni yozing — Huquq AI O'zbekiston qonunchiligi asosida javob beradi va keyingi qadamni aytadi.",
  lesson_cta_btn: "Huquq AI'dan so'rash",
  lesson_nav_title: "Dars bo'limlari",
  lesson_actions_title: "Tezkor amallar",
  lesson_action_download: "Konspektni yuklab olish",
  lesson_action_save: "Darsni saqlash",
  lesson_action_saved: "Saqlangan",
  lesson_related_title: "Aloqador darslar",
  // ── Darsni tugatish tizimi ──
  // ── AI amaliyot (yozma / savol-javob / modda / vaziyat) ──
  practice_title: "AI bilan mashq",
  practice_sub: "Bilimingizni AI yordamida mustahkamlang — javobingiz baholanadi",
  practice_tab_written: "Yozma",
  practice_tab_qa: "Savol-javob",
  practice_tab_article: "Modda",
  practice_tab_case: "Vaziyat",
  practice_tab_speaking: "Gapirish",
  practice_intro_speaking: "AI savol beradi, siz mikrofon orqali OG'ZAKI javob berasiz. AI javobingizni matnga aylantirib, to'g'ri yoki noto'g'ri ekanini aytadi.",
  practice_speak_start: "Javobni ayting",
  practice_speak_stop: "To'xtatish",
  practice_speak_processing: "Matnga aylantirilmoqda...",
  practice_speak_hint: "Mikrofonni bosing va javobingizni ovoz bilan ayting. Tugagach «To'xtatish» ni bosing.",
  practice_speak_placeholder: "Ovozli javobingiz shu yerda matn ko'rinishida chiqadi...",
  practice_speak_no_mic: "Mikrofonga ruxsat berilmadi. Brauzer sozlamalaridan ruxsat bering.",
  practice_speak_too_short: "Yozuv juda qisqa — biroz uzunroq gapiring.",
  practice_speak_empty: "Ovozdan matn ajratilmadi. Balandroq va aniqroq gapirib ko'ring.",
  practice_speak_failed: "Ovozni matnga aylantirib bo'lmadi. Qayta urinib ko'ring.",
  practice_intro_written: "Mavzuni o'z so'zlaringiz bilan tushuntiring — AI javobingizni baholaydi va nimani yaxshilash kerakligini aytadi.",
  practice_intro_qa: "AI shu mavzu bo'yicha savol beradi. Javobingizni yozing — AI tekshiradi va tushuntiradi.",
  practice_intro_article: "AI qonun bazasidan haqiqiy modda tanlaydi va u nimani tartibga solishini so'raydi. Eslab qolish usulini ham beradi.",
  practice_intro_case: "AI real hayotiy vaziyat beradi. Huquqiy yechimni yozing — AI yurist kabi fikrlashni o'rgatadi.",
  practice_get_task: "Topshiriq olish",
  practice_task_label: "Topshiriq",
  practice_answer_ph: "Javobingizni shu yerga yozing...",
  practice_check: "Javobni tekshirish",
  practice_checking: "Tekshirilmoqda...",
  practice_loading: "Tayyorlanmoqda...",
  practice_new_task: "Yangi topshiriq",
  practice_correct: "To'g'ri",
  practice_partial: "Qisman to'g'ri",
  practice_wrong: "Noto'g'ri",
  practice_tip: "Eslab qolish uchun",
  practice_xp_already: "XP allaqachon olingan",
  lesson_objective: "O'rganish maqsadi",
  lesson_outcomes: "Ushbu darsdan keyin siz:",
  lesson_outcome_tpl: "«{topic}» mavzusini tushunasiz va qo'llay olasiz",
  lesson_explain_btn: "Bu joyni tushuntirib ber",
  lesson_step_read: "Darsni o'qish",
  lesson_step_quiz: "Testdan o'tish",
  lesson_step_done: "Dars tugallandi",
  lesson_finish_title: "Darsni tugatish",
  lesson_finish_sub:
    "Darsni tugatish uchun {n} ta savolga javob bering. Dars faqat BARCHA javoblar to'g'ri bo'lgandagina tugallangan hisoblanadi.",
  lesson_finish_btn: "Darsni tugatish",
  lesson_finish_no_bank: "Bu mavzu bo'yicha test savollari hozircha qo'shilmagan.",
  lesson_quiz_rule: "Barcha javoblar to'g'ri bo'lishi shart",
  lesson_quiz_focus_warning:
    "Test davomida sahifadan chiqsangiz yoki boshqa oynaga o'tsangiz, urinish bekor qilinadi va yangi savollar beriladi.",
  lesson_quiz_new_questions: "Yangi savollar bilan urinish",
  lesson_quiz_cancelled_title: "Urinish bekor qilindi",
  lesson_quiz_cancelled_sub:
    "Siz test davomida sahifadan chiqdingiz. Halollik uchun urinish bekor qilindi — yangi savollar bilan qaytadan boshlashingiz mumkin.",
  lesson_pass_title: "Ajoyib! Dars tugallandi 🎉",
  lesson_pass_sub:
    "Barcha savollarga to'g'ri javob berdingiz. +10 XP hisobingizga qo'shildi.",
  lesson_fail_title: "Hali biroz mashq kerak",
  lesson_fail_sub:
    "{n} ta javob noto'g'ri. Darsni qayta ko'rib chiqing va yangi savollar bilan urinib ko'ring.",
  lesson_fail_review: "Darsni qayta o'qish",
  lesson_badge_done: "Tugallandi",
  lesson_completed_count: "dars tugallandi",
  lesson_review: "Takrorlash",
  lesson_next_unlocked: "Keyingi dars",
  // ── Testlar sahifasi ──
  tests_sub: "Bilimingizni qisqa testlar orqali sinab ko'ring.",

  /* Testlar sahifasi hero'sidagi uchta afzallik kartasi */
  tests_perk1_title: "Tez va qulay",
  tests_perk1_desc: "Qisqa testlar bilan vaqtingizni tejang.",
  tests_perk2_title: "Darajangizni biling",
  tests_perk2_desc: "Natijangizni ko'ring va rivojlaning.",
  tests_perk3_title: "Yutuqlaringizni saqlang",
  tests_perk3_desc: "Har bir test uchun XP oling.",

  /* Darslar hero'sidagi ko'rsatkich yorliqlari */
  lessons_xp_label: "Sizning tajribangiz",
  lessons_progress_label: "Biling va rivojlaning",

  /* Darslar sarlavhasi uch qismga bo'lingan — o'rtadagi qism oltin
     rangda ajratiladi. Bitta satrni so'z bo'yicha kesish boshqa
     tilda noto'g'ri joyni ajratib qo'yardi. `_tail` bo'sh bo'lishi
     mumkin (rus tilida so'z tartibi boshqacha). */
  lessons_hero_lead: "Huquqni",
  lessons_hero_accent: "bosqichma-bosqich",
  lessons_hero_tail: "o'rganing",
  tests_questions: "ta savol",
  tests_back: "Barcha testlar",
  tests_correct: "To'g'ri!",
  tests_wrong: "Noto'g'ri",
  tests_next: "Keyingi savol",
  tests_finish: "Yakunlash",
  tests_result_title: "Test yakunlandi",
  tests_retry: "Qayta urinish",
  tests_msg_great: "Ajoyib natija! Mavzuni yaxshi o'zlashtirgansiz.",
  tests_msg_ok: "Yaxshi, lekin ba'zi mavzularni takrorlash foydali bo'ladi.",
  tests_msg_low: "Darslar bo'limiga qaytib, mavzuni qayta o'qib chiqing.",
  // ── Test to'lov oynasi (merchant kalitlari hali kiritilmagan) ──
  testpay_badge: "Test rejimi",
  testpay_title: "Test to'lovni tasdiqlang",
  testpay_desc: "Bu tarif hali haqiqiy to'lov tizimiga ulanmagan — pul yechilmaydi. Tasdiqlasangiz tarif darhol yoqiladi.",
  testpay_note: "Haqiqiy pul olinmaydi — bu sinov rejimi",
  testpay_confirm: "To'lovni tasdiqlash",
  testpay_processing: "Yoqilmoqda...",
  testpay_error: "Xatolik yuz berdi, qayta urinib ko'ring",
  // ── Tarifni bekor qilish oynasi ──
  cancel_plan_title: "{plan} tarifini bekor qilasizmi?",
  cancel_plan_desc: "Bekor qilsangiz, tarif darhol Bepulga tushadi. To'langan pul QAYTARILMAYDI va tarifdan qayta foydalanish uchun uni yana sotib olishingiz kerak bo'ladi.",
  cancel_plan_keep: "Bekor qilmayman",
  cancel_plan_confirm: "Ha, bekor qilaman",
  cancel_plan_error: "Xatolik yuz berdi, qayta urinib ko'ring",
  // ── To'lov usulini tanlash oynasi (PaymentMethodModal) ──
  checkout_selected_plan: "Tanlangan tarif",
  checkout_choose_method: "To'lov usulini tanlang",
  checkout_secure_note: "Xavfsiz to'lov — kartangiz ma'lumotlari saqlanmaydi",
  checkout_back: "Orqaga",
  checkout_error: "Xatolik yuz berdi, qayta urinib ko'ring",
  // ── Profil > Pro tab qo'shimcha matnlari ──
  pro_activated: "Tarif muvaffaqiyatli yoqildi!",
  cancel_plan_done: "Tarif bekor qilindi, endi Bepul tarifdasiz.",
  cancel_plan_link: "Tarifni bekor qilish",
  pricing_trust_label: "To'lov:",
  pricing_cta_register: "Ro'yxatdan o'tish",
  pricing_free_note: "Pullik tarifni bekor qilsangiz, shu tarifga avtomatik tushasiz",
  pricing_current_sub: "Tarif faol — rahmat!",

  nav_login: "Kirish",
  nav_register: "Ro'yxatdan o'tish",

  nav_consult_free: "Bepul konsultatsiya",
  drawer_title: "AI Huquqiy maslahat",
  drawer_close: "Yopish",
  drawer_new_chat: "Yangi suhbat",

  drawer_limit_placeholder: "Limit tugadi — Telegram orqali yozing",

  drawer_history: "Suhbatlar tarixi",
  drawer_back_chat: "Chatga qaytish",
  drawer_no_history: "Hali suhbat tarixi yo'q",
  drawer_no_title: "Suhbat",
  nav_logo: "HUQUQ AI",
  // ── SEO (components/Seo.jsx orqali <title>/<meta> ga yoziladi) ──
  seo_home_title: "O'zbekiston qonunchiligi bo'yicha AI huquqiy maslahatchi",
  seo_home_desc:
    "Mehnat, oila, meros, yer va jinoyat huquqi bo'yicha savollaringizga O'zbekiston qonun moddalariga asoslangan aniq javob oling. Bepul boshlang — ro'yxatdan o'tish 1 daqiqa.",
  seo_login_title: "Hisobga kirish",
  seo_register_title: "Ro'yxatdan o'tish",
  seo_lessons_title: "Huquqiy darslar",
  seo_tests_title: "Huquqiy testlar",
  seo_library_title: "Qonunlar kutubxonasi",

  seo_legal_desc:
    "Huquq AI platformasidan foydalanish qoidalari, maxfiylik siyosati va sun'iy intellekt javoblariga oid rasmiy bildirishnoma.",
  seo_home_keywords:
    "huquq AI, yuridik maslahat O'zbekiston, onlayn yurist, O'zbekiston qonunchiligi, mehnat kodeksi, oila kodeksi, meros huquqi, iste'molchi huquqlari, huquqiy yordam onlayn, sun'iy intellekt yurist",

  // ── SMO: ulashish paneli (components/ShareBar.jsx) ──
  share_label: "Ulashish:",
  share_copy: "Havolani nusxalash",
  share_copied: "Nusxalandi",

  hero_title: "Huquqingizni biling, kelajagingizni himoya qiling",
  hero_subtitle:
    "Professional huquqiy yordam — mehnat, oila, meros, yer va boshqa sohalarda. AI maslahatchi va tajribali mutaxassislar yoningizda.",
  hero_cta: "Bepul konsultatsiya",
  features: [
    {
      icon: "💬",
      title: "Huquqiy maslahat",
      desc: "Muammongizni tahlil qilib, qonuniy yo'l ko'rsatamiz",
    },
    {
      icon: "📄",
      title: "Hujjatlar tayyorlash",
      desc: "Ariza, shartnoma va boshqa huquqiy hujjatlar",
    },
    {
      icon: "👥",
      title: "Vakillik qilish",
      desc: "Sud va davlat organlarida vakillik",
    },
    {
      icon: "🏛️",
      title: "Huquqiy tahlil",
      desc: "Shartnoma va hujjatlarni chuqur tahlil",
    },
  ],
  about_title: "Biz haqimizda",
  about_text:
    "Biz O'zbekiston fuqarolarining huquqlarini himoya qilish va qonuniy maslahat berish maqsadida tashkil etilgan huquqiy xizmat ko'rsatuvchi jamoa. Tajribali mutaxassislar va zamonaviy AI texnologiyasi yordamida har bir mijozga individual yondashuv taqdim etamiz.",
  stats: [
    { icon: "📅", value: "10+", label: "Yillik tajriba" },
    { icon: "✅", value: "500+", label: "Muvaffaqiyatli ishlar" },
    { icon: "😊", value: "1000+", label: "Mamnun mijozlar" },
  ],
  services_title: "Xizmatlarimiz",
  services: [
    {
      icon: "💬",
      title: "Huquqiy maslahat",
      desc: "Barcha huquq sohalarida professional maslahat",
      long: "Kundalik hayotda uchraydigan har qanday huquqiy savolga tushunarli tilda javob olasiz. AI yordamchi savolingizni tahlil qiladi, O'zbekiston qonunchiligidan tegishli normalarni topadi va nima qilish kerakligini bosqichma-bosqich tushuntiradi.",
      includes: [
        "Savolingizga qonun matniga asoslangan aniq javob",
        "Qaysi kodeks va modda tegishli ekanini ko'rsatish",
        "Huquqlaringiz va majburiyatlaringiz ro'yxati",
        "Keyingi qadamlar bo'yicha amaliy tavsiya",
        "Suhbat davomida qo'shimcha savol berish imkoni",
      ],
      examples: [
        "Ish beruvchi ish haqimni to'lamayapti, nima qilishim kerak?",
        "Qo'shnim mening yerimga qurilish boshladi — huquqim bormi?",
        "Shartnomani bekor qilmoqchiman, qanday tartibda amalga oshiriladi?",
      ],
    },
    {
      icon: "📄",
      title: "Hujjatlar tayyorlash",
      desc: "Ariza, shartnoma, da'vo arizalari tayyorlash",
      long: "Ariza, shikoyat, da'vo arizasi va shartnoma loyihalarini tayyorlashda yordam beradi. AI kerakli hujjat turini aniqlaydi, uning tuzilishini ko'rsatadi va sizning holatingizga moslashtirilgan matnni tayyorlab beradi.",
      includes: [
        "Da'vo arizasi va ariza loyihalari",
        "Mehnat, ijara va oldi-sotdi shartnomalari",
        "Yozma da'vo va shikoyat xatlari",
        "Hujjatda nima ko'rsatilishi shartligi",
        "Tayyor matnni ko'chirib olish va tahrirlash",
      ],
      examples: [
        "Ish haqini undirish bo'yicha da'vo arizasi tayyorlab ber",
        "Kvartira ijarasi shartnomasi namunasini yozib ber",
        "Sotuvchiga yozma da'vo xati tuzib ber",
      ],
    },
    {
      icon: "⚖️",
      title: "Sudda vakillik",
      desc: "Fuqarolik, jinoyat va ma'muriy ishlar",
      long: "Sud jarayoniga tayyorgarlik ko'rishda yordam beradi: qaysi sudga murojaat qilish, qanday hujjat to'plash, dalillarni qanday rasmiylashtirish va majlisda o'zingizni qanday tutish kerakligini tushuntiradi.",
      includes: [
        "Qaysi sudga va qanday tartibda murojaat qilish",
        "Da'vo arizasi va ilova qilinadigan hujjatlar ro'yxati",
        "Dalillarni to'plash va to'g'ri rasmiylashtirish",
        "Sud majlisiga tayyorgarlik va kutilayotgan savollar",
        "Qarordan shikoyat qilish tartibi va muddatlari",
      ],
      examples: [
        "Mehnat nizosi bo'yicha qaysi sudga murojaat qilaman?",
        "Da'vo arizasiga qanday hujjatlar ilova qilinadi?",
        "Sud qaroridan qanday tartibda shikoyat qilinadi?",
      ],
    },
    {
      icon: "🏢",
      title: "Korporativ huquq",
      desc: "Tadbirkorlik va kompaniya masalalari",
      long: "Tadbirkorlik faoliyati bilan bog'liq masalalar: biznesni ro'yxatdan o'tkazish, ta'sis hujjatlari, kontragentlar bilan shartnomalar, litsenziya va ruxsatnomalar hamda tadbirkorlar o'rtasidagi nizolar.",
      includes: [
        "Tashkiliy-huquqiy shaklni tanlash",
        "Ta'sis hujjatlari va ro'yxatdan o'tkazish tartibi",
        "Kontragent bilan shartnoma shartlarini tahlil qilish",
        "Majburiyat buzilganda javobgarlik choralari",
        "Tekshiruvlar va tadbirkorning huquqlari",
      ],
      examples: [
        "MChJ ochish uchun qanday hujjatlar kerak?",
        "Kontragent shartnomani bajarmayapti, nima qilaman?",
        "Tekshiruv paytida tadbirkorning huquqlari qanday?",
      ],
    },
    {
      icon: "👨‍👩‍👧",
      title: "Oila huquqi",
      desc: "Ajralish, aliment, bola egaligi",
      long: "Nikoh, ajralish, bolalar va oilaviy mulk bilan bog'liq masalalar. AI vaziyatingizni tahlil qilib, jarayon qanday kechishini, qanday hujjat kerakligini va qaysi organga murojaat qilish lozimligini tushuntiradi.",
      includes: [
        "Nikoh tuzish va bekor qilish tartibi",
        "Umumiy mol-mulkni bo'lish qoidalari",
        "Aliment va bolani ta'minlash majburiyati",
        "Bola kim bilan qolishi va muloqot tartibi",
        "Nikoh shartnomasi va uning imkoniyatlari",
      ],
      examples: [
        "Ajrashsak, nikohda olingan uy kimga qoladi?",
        "Aliment miqdori qanday belgilanadi?",
        "Bola bilan ko'rishishga to'sqinlik qilishyapti, nima qilaman?",
      ],
    },
    {
      icon: "💼",
      title: "Mehnat huquqi",
      desc: "Ish haqi, bo'shatish, mehnat nizolari",
      long: "Ish beruvchi bilan munosabatlarda huquqlaringizni aniq bilib olasiz: shartnoma shartlari, ish haqi, ta'til, ish vaqti va ishdan bo'shatish tartibi.",
      includes: [
        "Mehnat shartnomasi shartlarini tekshirish",
        "Ish haqi, ustama va qo'shimcha to'lovlar",
        "Ta'til va ish vaqti bo'yicha qoidalar",
        "Ishdan bo'shatish asoslari qonuniymi",
        "Mehnat nizosini hal qilish yo'llari",
      ],
      examples: [
        "Meni sababsiz ishdan bo'shatishdi, nima qilaman?",
        "Ta'til puli qanday hisoblanadi?",
        "Shartnomasiz ishlayapman — qanday huquqlarim bor?",
      ],
    },
    {
      icon: "🏠",
      title: "Ko'chmas mulk",
      desc: "Uy-joy, yer, ijara masalalari",
      long: "Uy-joy, yer uchastkasi va ijara bilan bog'liq bitimlar. Xarid qilishdan oldin nimani tekshirish kerakligi, huquqni qanday rasmiylashtirish va nizo chiqqanda qanday harakat qilish.",
      includes: [
        "Oldi-sotdi bitimini to'g'ri rasmiylashtirish",
        "Mulkni tekshirish: egalik, garov, hibs",
        "Ijara shartnomasining muhim shartlari",
        "Yerdan foydalanish va chegara nizolari",
        "Mulkni bo'lish va meros masalalari",
      ],
      examples: [
        "Uy sotib olishdan oldin nimani tekshirishim kerak?",
        "Ijarachi joyni bo'shatmayapti, nima qilaman?",
        "Qo'shni chegarani buzib qurilish qilyapti, huquqim qanday?",
      ],
    },
    {
      icon: "💰",
      title: "Qarz masalalari",
      desc: "Qarz undirish va moliyaviy nizolar",
      long: "Qarz berish va undirish, tilxatni to'g'ri rasmiylashtirish, kredit va moliyaviy nizolar. Qarz berilganini qanday isbotlash va qaytarishni qanday talab qilish kerakligi.",
      includes: [
        "Tilxat va qarz shartnomasini to'g'ri rasmiylashtirish",
        "Qarz berilganini isbotlovchi dalillar",
        "Ixtiyoriy qaytarishni talab qilish tartibi",
        "Sud orqali undirish bosqichlari",
        "Kredit, kafillik va garov masalalari",
      ],
      examples: [
        "Tilxatsiz qarz berganman, qaytarib ololamanmi?",
        "Qarzni sud orqali qanday undiraman?",
        "Tilxatda albatta nima yozilishi kerak?",
      ],
    },
  ],
  articles_title: "Maqolalar",
  articles: [
    {
      date: "12 May 2026",
      category: "Mehnat huquqi",
      readTime: "5 daq",
      title: "Mehnat shartnomasini bekor qilish tartibi",
      excerpt:
        "Ish beruvchi bilan mehnat munosabatlarini bekor qilishda nimalarga e'tibor berish kerak.",
      body: [
        "Mehnat shartnomasi uch yo'l bilan bekor qilinishi mumkin: xodimning o'z tashabbusi bilan, ish beruvchining tashabbusi bilan yoki tomonlarning kelishuviga ko'ra. Har bir yo'lning o'z tartibi bor va aynan shu tartibning buzilishi keyinchalik nizoga aylanadi.",
        "Xodim o'z xohishi bilan ketayotgan bo'lsa, ish beruvchini qonunda belgilangan muddatda YOZMA ogohlantirishi kerak. Arizaning ikkinchi nusxasiga qabul qilingani haqida belgi qo'ydirib olish muhim — aks holda ariza berilgani isbotlanmaydi.",
        "Ish beruvchi tashabbusi bilan bo'shatish esa faqat qonunda sanab o'tilgan asoslar bo'yicha amalga oshiriladi. \"Yoqmay qolding\" yoki \"shtat qisqaryapti\" degan og'zaki gap asos emas: asos buyruqda aniq ko'rsatilishi va hujjat bilan tasdiqlanishi shart.",
        "Bo'shatilgan kuni xodimga hisob-kitob to'liq to'lanadi va tegishli hujjatlar (buyruq nusxasi, mehnat daftarchasi) topshiriladi. Agar bu bajarilmasa yoki bo'shatish asosi noqonuniy deb hisoblasangiz, mehnat sohasidagi nazorat organiga yoki sudga murojaat qilish huquqingiz bor.",
      ],
      tips: [
        "Har qanday ariza va bildirishnomani yozma berib, nusxasini saqlang.",
        "Buyruq bilan tanishtirilganda uning nusxasini so'rang.",
        "Bo'shatish noqonuniy deb hisoblasangiz, muddatni o'tkazib yubormang — murojaat muddatlari qat'iy.",
      ],
    },
    {
      date: "5 May 2026",
      category: "Meros huquqi",
      readTime: "6 daq",
      title: "Meros huquqi: asosiy qoidalar",
      excerpt:
        "Vasiyatnoma tuzish va meros bo'linishi bo'yicha bilishingiz kerak bo'lgan muhim ma'lumotlar.",
      body: [
        "Meros shaxs vafot etgan paytdan ochiladi. Meros ishi vafot etgan shaxsning oxirgi doimiy yashash joyidagi notarius tomonidan yuritiladi — ariza aynan o'sha yerga beriladi.",
        "Meros ikki asosda o'tadi: vasiyatnoma bo'yicha yoki (vasiyatnoma bo'lmasa) qonun bo'yicha. Qonun bo'yicha merosxo'rlar qarindoshlik darajasiga qarab navbatlarga bo'linadi: oldingi navbat merosxo'rlari bo'lsa, keyingi navbatdagilar merosga chaqirilmaydi.",
        "Ko'pchilik e'tibordan chetda qoldiradigan muhim jihat: meros bilan birga vafot etgan shaxsning QARZLARI ham o'tadi. Merosxo'r qarzlar bo'yicha qabul qilingan mulk qiymati doirasida javob beradi. Shuning uchun meros qarz bilan kelayotgan bo'lsa, undan voz kechish ham to'liq qonuniy variant.",
        "Vasiyatnoma yozma shaklda tuziladi va notarial tasdiqdan o'tadi. Vasiyat qiluvchi uni istalgan vaqtda o'zgartirishi yoki bekor qilishi mumkin. Shu bilan birga, ayrim toifadagi merosxo'rlar (masalan, mehnatga layoqatsiz yaqinlar) vasiyatnomadan qat'i nazar majburiy ulushga ega bo'ladi.",
      ],
      tips: [
        "Merosni qabul qilish muddati qat'iy — kechiktirmang, muddat o'tsa uni tiklash sud orqali bo'ladi.",
        "Meros tarkibidagi qarzlarni oldindan aniqlang.",
        "Vasiyatnomani notarius orqali rasmiylashtiring — og'zaki xohish yuridik kuchga ega emas.",
      ],
    },
    {
      date: "28 Apr 2026",
      category: "Iste'molchi huquqlari",
      readTime: "4 daq",
      title: "Iste'molchi huquqlarini himoya qilish",
      excerpt:
        "Sifatsiz tovar sotib olganingizda qanday huquqlaringiz bor va ulardan qanday foydalanish kerak.",
      body: [
        "Tovarda nuqson topilsa, iste'molchi bir necha talabdan BIRINI o'zi tanlash huquqiga ega: nuqsonni bepul bartaraf etish, tovarni almashtirish, narxni kamaytirish yoki shartnomadan voz kechib pulni qaytarib olish. Tanlov sotuvchida emas, sizda.",
        "Talabni og'zaki bildirish deyarli hech qachon natija bermaydi. To'g'ri yo'l — yozma da'vo: unda tovar, xarid sanasi, aniqlangan nuqson va aniq talabingiz yoziladi. Ikkinchi nusxaga sotuvchining qabul qilgani haqida belgi qo'ydirib oling.",
        "Xaridni tasdiqlovchi hujjat (chek, to'lov tasdig'i, hisob-faktura) — asosiy dalil. Chek yo'qolgan bo'lsa ham huquqingiz yo'qolmaydi: to'lov bank orqali o'tgan bo'lsa, hisobdagi yozuv ham dalil bo'ladi.",
        "Sotuvchi nuqson sizning aybingiz bilan yuzaga kelgan deb hisoblasa, ekspertiza o'tkaziladi. Umumiy qoida bo'yicha ekspertiza sotuvchi hisobidan o'tkaziladi; natija sizning aybingizni ko'rsatsagina xarajat sizdan undiriladi.",
      ],
      tips: [
        "Chek va qadoqni kafolat muddati tugagunicha saqlang.",
        "Har qanday talabni yozma bildiring va nusxasini saqlang.",
        "Onlayn xaridda ham iste'molchi huquqlari to'liq amal qiladi.",
      ],
    },
    {
      date: "20 Apr 2026",
      category: "Oila huquqi",
      readTime: "5 daq",
      title: "Ajralishda mol-mulk qanday bo'linadi",
      excerpt:
        "Qaysi mulk umumiy, qaysi biri shaxsiy hisoblanadi va bo'linish qanday tartibda amalga oshiriladi.",
      body: [
        "Asosiy qoida sodda: nikoh davomida orttirilgan mulk er-xotinning UMUMIY mulki hisoblanadi va bo'linishda teng ulushlarga bo'linadi. Mulk kimning nomiga rasmiylashtirilgani, qoida tariqasida, ahamiyatga ega emas.",
        "Shaxsiy mulk esa bo'linmaydi. Bunga nikohga qadar tegishli bo'lgan mulk, shuningdek nikoh davomida meros yoki hadya tariqasida olingan mulk kiradi. Muhim istisno bor: agar shaxsiy mulk umumiy mablag' hisobidan sezilarli darajada yaxshilangan bo'lsa, u umumiy deb topilishi mumkin.",
        "Sud ayrim hollarda ulushni tengdan chetga chiqarishi mumkin — masalan voyaga yetmagan bolalar manfaatini hisobga olib. Bu avtomatik emas: bunday talabni asoslash va dalil keltirish kerak bo'ladi.",
        "Mulkni bo'lish har doim ham sud orqali bo'lishi shart emas. Er-xotin kelishuvga erishsa, uni yozma rasmiylashtirish mumkin — bu vaqt va xarajatni sezilarli tejaydi.",
      ],
      tips: [
        "Xarid hujjatlarini saqlang — mulk qachon va qanday mablag'ga olingani muhim.",
        "Nikoh shartnomasi mulkiy nizolarning oldini olishning eng samarali yo'li.",
        "Qarzlar ham bo'linadi — faqat mulk emas.",
      ],
    },
    {
      date: "14 Apr 2026",
      category: "Ko'chmas mulk",
      readTime: "5 daq",
      title: "Uy sotib olishdan oldin tekshiriladigan 5 narsa",
      excerpt:
        "Bitim tuzishdan oldin bajarilgan bir necha tekshiruv keyinchalik yillab davom etadigan nizodan saqlaydi.",
      body: [
        "Birinchisi — mulkdor. Sotuvchi haqiqatan ham mulk egasi ekanini rasmiy hujjat bilan tasdiqlash kerak. Ishonchnoma bo'yicha sotilayotgan bo'lsa, ishonchnomaning amal qilish muddati va vakolat doirasini alohida tekshiring.",
        "Ikkinchisi — cheklovlar. Mulkda garov, hibs yoki boshqa cheklov bo'lmasligi kerak. Bunday ma'lumot rasmiy reyestrdan olinadi va u eng muhim tekshiruv hisoblanadi: cheklov bor mulk bo'yicha bitim ro'yxatdan o'tmaydi.",
        "Uchinchisi — ro'yxatda qayd etilgan shaxslar va ularning turar joyga bo'lgan huquqi. To'rtinchisi — qayta rejalashtirish: uy hujjatdagi rejaga mos kelmasa, qonuniylashtirish majburiyati yangi egaga o'tishi mumkin.",
        "Beshinchisi — bitimning o'zi. Ko'chmas mulkka bo'lgan huquq davlat ro'yxatidan o'tkazilgan paytdan yuzaga keladi. Pul to'langani, kalit topshirilgani yoki og'zaki kelishuv — bularning hech biri mulk huquqini bermaydi.",
      ],
      tips: [
        "Avans yoki bo'nak to'lashdan oldin ham reyestrdan ma'lumot oling.",
        "Barcha to'lovlarni hujjat bilan rasmiylashtiring.",
        "Shartnomada narx haqiqiy ko'rsatilsin — pasaytirilgan narx nizoda sizga qarshi ishlaydi.",
      ],
    },
    {
      date: "7 Apr 2026",
      category: "Fuqarolik huquqi",
      readTime: "4 daq",
      title: "Qarz berganda tilxat qanday yoziladi",
      excerpt:
        "Bir varaq to'g'ri yozilgan tilxat qarzni qaytarib olish imkoniyatini bir necha barobar oshiradi.",
      body: [
        "Tilxatda kamida beshta narsa bo'lishi kerak: kim kimga berdi (ism-familiya va pasport ma'lumotlari), qancha summa (raqam va so'z bilan), qachon berildi, qachon qaytariladi va qarz oluvchining imzosi.",
        "Eng ko'p uchraydigan xato — summani faqat raqam bilan yozish. Summani so'z bilan ham yozib qo'yish keyinchalik \"raqam o'zgartirilgan\" degan bahsning oldini oladi.",
        "Pulni bank orqali o'tkazish tilxatdan ham kuchli dalil bo'ladi: o'tkazma izohida \"qarz\" deb yozib qo'ying. Naqd berilgan bo'lsa, tilxat yagona ishonchli dalil bo'lib qoladi.",
        "Tilxat umuman bo'lmasa ham holat umidsiz emas: yozishmalar, ovozli xabarlar, guvohlar va pul o'tkazmasi ham dalil sifatida qaraladi. Lekin bunday ishni yuritish ancha murakkab bo'ladi — shuning uchun tilxat yozish har doim arziydi.",
      ],
      tips: [
        "Tilxatni qarz oluvchining O'Z QO'LI bilan yozdirish yaxshiroq.",
        "Qaytarish muddatini aniq sana bilan ko'rsating.",
        "Qarz qaytarilganda tilxatni qaytarib bering yoki unga qaytarilgani haqida yozuv qo'ying.",
      ],
    },
    {
      date: "1 Apr 2026",
      category: "Mehnat huquqi",
      readTime: "5 daq",
      title: "Ish haqi to'lanmasa qanday harakat qilish kerak",
      excerpt:
        "Ish haqi kechiktirilganda birinchi qadam sudga borish emas — to'g'ri ketma-ketlik natijani tezlashtiradi.",
      body: [
        "Birinchi qadam — yozma ariza. Ish beruvchiga to'lanmagan davr va summa ko'rsatilgan ariza berilib, ikkinchi nusxaga qabul qilingani haqida belgi qo'ydiriladi. Bu hujjat keyingi barcha bosqichlarda asosiy dalil bo'ladi.",
        "Ikkinchi qadam — ish haqi hisoblanganini tasdiqlovchi ma'lumotlarni to'plash: mehnat shartnomasi, buyruqlar, hisob varaqasi, bank ko'chirmasi, ish vaqti tabeli. Rasmiy shartnoma bo'lmasa ham yozishmalar, guvohlar va o'tkazmalar dalil bo'lib xizmat qiladi.",
        "Uchinchi qadam — mehnat sohasidagi davlat nazorati organiga murojaat. Bu bosqich ko'p hollarda sudsiz natija beradi va ish beruvchi uchun qo'shimcha javobgarlik masalasini ham ko'taradi.",
        "To'rtinchi qadam — sud. Bu yerda muddat muhim: mehnat nizolari bo'yicha murojaat muddatlari qat'iy va ularni o'tkazib yuborish talabni himoya qilishni sezilarli qiyinlashtiradi.",
      ],
      tips: [
        "Ishni tashlab ketmang — bu sizning pozitsiyangizni zaiflashtiradi.",
        "Har bir murojaatni yozma qiling va nusxasini saqlang.",
        "Rasmiy shartnomasiz ishlayotgan bo'lsangiz ham murojaat qilish huquqingiz bor.",
      ],
    },
    {
      date: "25 Mar 2026",
      category: "Ma'muriy huquq",
      readTime: "4 daq",
      title: "Ma'muriy jarima bilan rozi bo'lmasangiz",
      excerpt:
        "Bayonnoma tuzilayotgan paytdagi bir necha to'g'ri harakat keyingi shikoyat natijasini hal qiladi.",
      body: [
        "Eng muhim payt — bayonnoma tuzilayotgan lahza. Aynan o'shanda sizda tushuntirish berish, e'tiroz yozish va hujjat nusxasini olish huquqi bor. Ko'pchilik shu imkoniyatni qo'ldan boy beradi va faqat keyin shikoyat qilishga urinadi.",
        "Bayonnomaga imzo chekishdan bosh tortish odatda foyda bermaydi: bu holat shunchaki qayd etiladi va ish baribir ko'rib chiqilaveradi. Ancha samarali yo'l — imzo chekib, yoniga o'z e'tirozingizni yozib qo'yish.",
        "Dalillarni darhol to'plang: voqea joyi surati, videoyozuv, guvohlarning ma'lumotlari. Vaqt o'tgan sari dalil to'plash qiyinlashadi va ba'zilari umuman yo'qoladi.",
        "Shikoyat belgilangan muddatda yuqori organga yoki sudga beriladi. Muddat o'tkazib yuborilsa, qaror ijroga qaratiladi va uni bekor qildirish ancha murakkab bo'ladi.",
      ],
      tips: [
        "Bayonnomaning nusxasini albatta talab qiling.",
        "Rozi bo'lmasangiz — \"e'tirozim bor\" deb yozib, sababini qisqacha bayon eting.",
        "Jarima to'lansa, to'lovni tasdiqlovchi hujjatni saqlang.",
      ],
    },
    {
      date: "18 Mar 2026",
      category: "Sud jarayoni",
      readTime: "6 daq",
      title: "Sudga da'vo arizasi qanday yoziladi",
      excerpt:
        "Da'vo arizasining tuzilishi va unda albatta ko'rsatilishi kerak bo'lgan ma'lumotlar.",
      body: [
        "Da'vo arizasi erkin shakldagi xat emas — u belgilangan tuzilishga ega. Unda sud nomi, da'vogar va javobgar haqidagi ma'lumotlar, talab mohiyati, uni asoslovchi holatlar va dalillar hamda ilova qilinayotgan hujjatlar ro'yxati ko'rsatiladi.",
        "Eng ko'p uchraydigan xato — his-tuyg'uga to'la uzun hikoya yozish. Sudni voqeaning hissiy tomoni emas, HOLATLAR va ularni tasdiqlovchi dalillar qiziqtiradi. Har bir da'voni qaysi hujjat tasdiqlashini yoniga ko'rsatib chiqish ancha samarali.",
        "Talab aniq va o'lchovli bo'lishi kerak: \"adolat tiklansin\" emas, balki nima undirilishi yoki nima qilinishi so'ralayotgani aniq yozilishi lozim. Summa talab qilinayotgan bo'lsa, uning hisob-kitobi ilova qilinadi.",
        "Ariza talablarga javob bermasa, u harakatsiz qoldirilishi yoki qaytarilishi mumkin — bu vaqt yo'qotish demakdir. Shuning uchun topshirishdan oldin tuzilish va ilovalar ro'yxatini yana bir marta tekshirib chiqish arziydi.",
      ],
      tips: [
        "Har bir dalilga arizada havola qiling — \"ilova 3\" kabi.",
        "Barcha hujjatlarning nusxasini o'zingizda saqlang.",
        "Ba'zi toifadagi nizolarda sudgacha yozma murojaat majburiy — buni oldindan aniqlang.",
      ],
    },
  ],
  articles_btn: "Barcha maqolalar",
  articles_btn_less: "Kamroq ko'rsatish",
  articles_read: "O'qish",
  articles_tips: "Amaliy maslahatlar",
  service_eyebrow: "Xizmat",
  service_includes: "Nima kiradi",
  service_examples: "Namunaviy savollar",
  service_cta: "AI yordamchidan so'rash",
  service_note: "Bu ma'lumot umumiy tanishtiruv uchun. Aniq holatingiz bo'yicha AI yordamchiga savol bering yoki advokatga murojaat qiling.",
  service_more: "Batafsil",
  modal_close: "Yopish",
  contact_title: "Aloqa",
  contact_address:
    "Toshkent Shahri, Mirzo Ulug'bek tumani, Buyuk Ipak Yo'li ko'chasi Soul Cafe 4-qavat",
  contact_phone: "Telefon raqami",
  contact_email: "Bog'lanish uchun",
  footer_copyright: "© 2026 Huquq. Barcha huquqlar himoyalangan.",
  badge: "O'zbekiston Qonunchiligi · AI Maslahat",

  btn_telegram: "Telegram bot",

  section_cats_title: "Qaysi sohalarda yordam beraman?",
  cats: [
    {
      icon: "💼",
      title: "Mehnat huquqi",
      desc: "Maosh, ishdan bo'shatish, mehnat shartnomasi",
    },
    {
      icon: "👨‍👩‍👧",
      title: "Oila huquqi",
      desc: "Aliment, ajralish, bola egaligi",
    },
    {
      icon: "🏠",
      title: "Meros va mulk",
      desc: "Vasiyat, meros bo'linishi, notarius",
    },
    {
      icon: "🌾",
      title: "Yer masalalari",
      desc: "Uchastka, kadastr, noqonuniy tortib olish",
    },
    {
      icon: "🛒",
      title: "Iste'molchi",
      desc: "Sifatsiz tovar, qaytarish, kafolat",
    },
    {
      icon: "⚖️",
      title: "Jinoyat huquqi",
      desc: "Firibgarlik, shikoyat, prokuratura",
    },
  ],
  section_steps_title: "Qanday ishlaydi?",
  steps: [
    { n: "01", t: "Ro'yxatdan o'ting", d: "Bepul hisob yarating" },
    { n: "02", t: "Muammoni yozing", d: "Oddiy o'zbek tilida tushuntiring" },
    {
      n: "03",
      t: "Yo'l-yo'riq oling",
      d: "Qonun moddalari asosida aniq javob",
    },
  ],
  cta_title: "Huquqingizni bilish — kuchingiz",
  cta_desc: "Bepul, 24/7, o'zbek tilida",
  cta_btn: "Hozir boshlash →",
  footer_desc: "O'zbekiston huquqiy AI maslahatchi",
  footer_warn:
    "Umumiy ma'lumot beradi. Murakkab ishlarda advokat bilan maslahatlashing.",
  footer_legal_terms: "Foydalanish shartlari",
  footer_legal_privacy: "Maxfiylik siyosati",
  footer_legal_disclaimer: "AI haqida bildirishnoma",
  footer_col_info: "Foydali ma'lumot",
  footer_col_company: "Kompaniya",
  // Footer'dagi ochiq qonun sahifalariga havola (server tomonda
  // chiziladi — SEO uchun muhim ichki havola)
  footer_public_laws: "Qonunlar matni",
  footer_qa: "Savol-javob",
  footer_method: "Metodologiya",
  footer_ssl: "SSL himoyalangan",
  footer_made_in: "O'zbekistonda ishlab chiqilgan",
  install_app: "Ilovani yuklash",
  install_guide_title: "Huquq AI ilovasini o'rnating",
  install_guide_sub: "Ilova telefoningiz bosh ekraniga qo'shiladi va alohida ilova kabi ochiladi.",
  install_sub_ios: "iPhone'da ilova Safari orqali bir necha soniyada o'rnatiladi.",
  install_sub_android: "Ilova telefoningiz bosh ekraniga qo'shiladi va alohida ilova kabi ochiladi.",
  install_sub_inapp: "Telegram yoki Instagram ichidagi brauzer ilova o'rnatishni qo'llab-quvvatlamaydi.",
  install_sub_desktop: "Ilovani telefoningizga o'rnatish uchun saytni telefonda oching.",
  install_steps_ios: [
    "Safari'ning pastki panelidagi «Ulashish» (kvadrat va yuqoriga strelka) tugmasini bosing",
    "Ro'yxatdan «Bosh ekranga qo'shish» (Add to Home Screen) bandini tanlang",
    "Yuqori o'ng burchakdagi «Qo'shish» tugmasini bosing — ilova bosh ekranda paydo bo'ladi",
  ],
  install_steps_android: [
    "Brauzerning yuqori o'ng burchagidagi ⋮ menyusini oching",
    "«Ilovani o'rnatish» yoki «Bosh ekranga qo'shish» bandini tanlang",
    "«O'rnatish» tugmasini bosing — ilova bosh ekranda paydo bo'ladi",
  ],
  install_lock_title: "Belgi qo'shilmadimi?",
  install_lock_hint:
    "«Bosh ekran qulflangan» xabari chiqsa: bosh ekranni bosib turing → Sozlamalar → «Bosh ekran joylashuvini qulflash» ni o'chiring va qayta urinib ko'ring.",
  install_steps_inapp: [
    "Yuqoridagi ⋮ yoki ••• menyusini oching",
    "«Brauzerda ochish» (Chrome yoki Safari) bandini tanlang",
    "Ochilgan sahifada yana «Ilovani yuklash» tugmasini bosing",
  ],
  install_steps_desktop: [
    "Telefoningizda Chrome yoki Safari brauzerini oching",
    "Quyidagi manzilni kiriting yoki havolani o'zingizga yuboring",
    "Saytdagi «Ilovani yuklash» tugmasini bosing — ilova telefonga o'rnatiladi",
  ],
  install_copy: "Nusxalash",
  install_copied: "Nusxalandi",
  install_close: "Yopish",
  install_desktop_here: "Yoki shu kompyuterga o'rnatish",
  install_note: "App Store yoki Play Market shart emas · bepul · joy deyarli egallamaydi",
  auth_legal_prefix: "Davom etish orqali siz",
  auth_legal_and: "va",
  login_title: "Kirish",
  login_sub: "Hisobingizga kiring",
  login_username: "Username",
  login_password: "Parol",
  login_btn: "Kirish",
  login_loading: "Kirilmoqda...",
  login_no_account: "Hisobingiz yo'qmi?",
  login_register_link: "Ro'yxatdan o'ting",
  tech_support: "Parolni unutdingizmi ?",

  support_error: "Xatolik yuz berdi",

  register_title: "Ro'yxatdan o'tish",
  register_sub: "Bepul hisob yarating",
  register_fullname: "Ism (ixtiyoriy)",
  register_fullname_ph: "To'liq ismingiz",
  register_username_ph: "falonchi123",
  register_password_ph: "Kamida 6 belgi",
  register_btn: "Hisob yaratish",
  register_loading: "Yaratilmoqda...",
  register_have_account: "Hisobingiz bormi?",
  register_login_link: "Kirish",
  error_generic: "Xatolik yuz berdi",

  chat_messages: "xabar",

  chat_welcome_title: "Salom",
  chat_welcome_desc:
    "Huquqiy muammoingizni oddiy o'zbek tilida yozing. Faqat O'zbekiston qonunchiligi bo'yicha yordam beraman.",
  chat_placeholder: "Huquqiy muammoingizni yozing...",

  chat_error: "Xatolik yuz berdi. Qayta urinib ko'ring.",
  quick_questions: [
    "Maosh 2 oy berilmadi, nima qilaman?",
    "Aliment miqdori qancha bo'lishi kerak?",
    "Nohaq ishdan bo'shatilsam nima qilaman?",
    "Meros 6 oy ichida olinmasa nima bo'ladi?",
    "Sifatsiz tovarni qaytarish mumkinmi?",
    "Yer uchastkamni qanday rasmiylashtiraman?",
  ],

  about_lead:
    "\"HUQUQ AI\" — O'zbekiston Respublikasi qonunchiligi bo'yicha AI huquqiy maslahatchi. Ko'pchilik fuqarolar o'z huquqlarini bilmaydi va advokatga murojaat imkoni yo'q — bu xizmat shu bo'shliqni to'ldiradi.",
  about_laws_title: "Qonunlar bazasi",
  about_warn:
    "⚠️ Bu xizmat umumiy huquqiy ma'lumot beradi va professional advokat maslahati o'rnini bosa olmaydi.",

  /* ── "Biz haqimizda" ALOHIDA SAHIFA ──
     Landing Page'dan olib chiqilib, /about manziliga ko'chirildi. */
  about_page_lead:
    "\"HUQUQ AI\" — O'zbekiston Respublikasi qonunchiligi bo'yicha sun'iy intellekt texnologiyalari asosida tez, ishonchli va aniq huquqiy yordam beruvchi platforma.",

  about_mission_title: "Bizning vazifamiz",
  about_mission_text:
    "Har bir fuqaroning huquqiy savollariga oson, tezkor va ishonchli javob topishini ta'minlash. Qonunchilikni tushunarli tilda izohlash va adolatga erishishda texnologiya orqali yordam berish.",

  about_how_title: "Biz qanday ishlaymiz?",
  about_how_steps: [
    "Savolingizni yozing",
    "AI tahlil qiladi va izlaydi",
    "Aniq javob va manbalar",
    "Sizga eng maqbul yechim",
  ],

  about_why_title: "Nega bizni tanlashadi?",
  about_why_items: [
    "O'zbekiston qonunchiligiga 100% mos javoblar",
    "Oson va qulay foydalanish",
    "Tezkor, 24/7 xizmat",
    "Doimiy yangilanib boruvchi qonunlar bazasi",
    "Sun'iy intellekt va huquqshunoslar hamkorligi",
    "Maxfiylik va xavfsizlik kafolati",
  ],

  about_quote: "Adolat — bu faqat qonunda emas, uni tushunishda hamdir.",
  about_quote_author: "— HUQUQ AI",

  about_highlights: [
    {
      title: "Keng qonunlar bazasi",
      desc: "O'zbekiston Respublikasining amaldagi qonunlari va kodekslari",
    },
    {
      title: "Aniq va ishonchli javoblar",
      desc: "Savollaringizga aniq va asosli javob beramiz",
    },
    {
      title: "Maxfiylik kafolati",
      desc: "Sizning shaxsiy ma'lumotlaringiz to'liq himoyalangan",
    },
    {
      title: "24/7 xizmat",
      desc: "Kunu tun, istalgan vaqtda sizga yordam beramiz",
    },
  ],

  about_metrics: [
    {
      value: "10+",
      label: "Yillik tajriba",
      desc: "Huquq sohasidagi tajribali ekspertlar jamoasi",
    },
    {
      value: "500+",
      label: "Muvaffaqiyatli ishlar",
      desc: "Mijozlarimizga amaliy yordam ko'rsatish tajribamiz",
    },
    {
      value: "1000+",
      label: "Mamnun mijozlar",
      desc: "Butun O'zbekistonda bizga ishonadigan mijozlar",
    },
    {
      value: "98%",
      label: "Aniqlik darajasi",
      desc: "Sun'iy intellekt javoblarining yuqori aniqlik ko'rsatkichi",
    },
    {
      value: "5 soniya",
      label: "O'rtacha javob vaqti",
      desc: "Savolingizga javob olishning o'rtacha vaqti",
    },
  ],

  about_timeline_title: "Bizning yo'l bosqichlarimiz",
  about_timeline_sub: "Qisqa vaqt ichida katta yutuqlarga erishdik!",
  about_timeline: [
    {
      year: "2025",
      title: "Boshlanish",
      desc: "HUQUQ AI loyihasi o'z faoliyatini boshladi",
    },
    {
      year: "2025",
      title: "Birinchi foydalanuvchilar",
      desc: "Qisqa vaqt ichida ilk foydalanuvchilarimiz bilan ish boshladik",
    },
    {
      year: "2025",
      title: "AI texnologiyasi joriy etildi",
      desc: "Sun'iy intellekt asosidagi tizim ishlab chiqildi va testdan o'tkazildi",
    },
    {
      year: "2025",
      title: "1000+ mijoz",
      desc: "Mingdan ortiq mijoz bizga ishonch bildirdi",
    },
    {
      year: "2026",
      title: "Rivojlanish va kengayish",
      desc: "Xizmat sifatini oshirib va kengaytirib, millionlab odamlarga yetish",
    },
  ],


  /* ── "Biz haqimizda" kengaytmasi ── */
  about_text_2:
    "Huquq AI — shunchaki chatbot emas. Har bir javob lex.uz'dagi rasmiy qonun matniga asoslanadi: tizim savolingizni tahlil qilib, amaldagi kodekslardan tegishli moddani topadi va javobni aynan shu tekshirilgan matn asosida shakllantiradi. Shuning uchun javobda modda raqami va qonun nomi ko'rsatiladi — siz uni o'zingiz tekshirib ko'rishingiz mumkin.",
  about_text_3:
    "Maqsadimiz — huquqiy bilimni hamma uchun ochiq qilish. Shu sababli platformada nafaqat maslahat, balki darslar, testlar va to'liq qonunlar kutubxonasi ham bor: foydalanuvchi bir marta javob olib qolmay, o'z huquqini bosqichma-bosqich o'rganib boradi.",

  about_problem_title: "Muammo va yechim",
  about_problem_sub: "Bu platforma nima uchun kerakligi",
  about_problem_label: "Muammo",
  about_solution_label: "Bizning yechim",
  about_problems: [
    "Ko'pchilik o'z huquqini bilmaydi — qonun matnini o'qishga na vaqt, na tayyorgarlik bor.",
    "Advokat maslahati qimmat: oddiy bitta savol uchun murojaat qilish har kimga ham qulay emas.",
    "Internetdagi ma'lumot tarqoq va tez eskiradi — qonun tahriri o'zgarsa ham eski maqola qolib ketaveradi.",
    "Rasmiy manbalar murakkab tilda yozilgan: kerakli modda topilsa ham, uni tushunish alohida mehnat.",
  ],
  about_solutions: [
    "Savolni oddiy tilda yozasiz — javob ham tushunarli tilda va bosqichma-bosqich keladi.",
    "Bepul tarifdan boshlaysiz: kundalik savollar uchun to'lov shart emas.",
    "Qonun bazasi lex.uz'dan muntazam yangilanadi — javob har doim amaldagi tahrirga asoslanadi.",
    "Har bir javobda modda raqami va qonun nomi ko'rsatiladi, matnini kutubxonadan o'qib tekshirasiz.",
  ],

  about_numbers_title: "Raqamlarda platforma",
  about_numbers_sub: "Bilim bazasi va o'quv materiallari",
  about_numbers: [
    { value: "20", label: "Amaldagi kodeks va qonun" },
    { value: "6900+", label: "Qonun moddasi bazada" },
    { value: "155", label: "Konstitutsiya moddasi" },
    { value: "110+", label: "Test savoli" },
    { value: "6", label: "Interaktiv dars" },
    { value: "24/7", label: "Uzluksiz ishlaydi" },
  ],

  about_values_title: "Qadriyatlarimiz",
  about_values_sub: "Platformani qurishda tayanadigan tamoyillar",
  about_values: [
    {
      title: "Aniqlik",
      desc: "Javob taxminga emas, qonun matniga asoslanadi. Tizim moddani topa olmasa, o'zidan raqam yoki muddat to'qib chiqarmaydi — huquqiy mahsulotda bu eng muhim qoida.",
      long: "Oddiy chatbot javobni o'z \"xotirasidan\" tuzadi va shu sababli mavjud bo'lmagan modda raqamini yoki noto'g'ri muddatni ishonch bilan aytib yuborishi mumkin. Huquqiy masalada bunday xato qimmatga tushadi. Shuning uchun Huquq AI boshqacha ishlaydi: har bir javobdan OLDIN qonun bazasidan tegishli moddani qidirib topadi va javobni aynan shu tekshirilgan matn asosida tuzadi.",
      points: [
        "Har bir javob oldidan tizim bazadan tegishli moddani qidiradi",
        "Javobda modda raqami va qonun nomi ko'rsatiladi — o'zingiz tekshira olasiz",
        "Muddat, foiz yoki summa faqat tekshirilgan qonun matnida bo'lsa keltiriladi",
        "Baza lex.uz'dagi rasmiy manbadan muntazam yangilanadi",
        "Darslardagi iqtiboslar bazadan jonli olinadi — qonun o'zgarsa, dars ham yangilanadi",
      ],
    },
    {
      title: "Ochiqlik",
      desc: "Asosiy imkoniyatlar bepul tarifda ham ochiq. Huquqini bilish — imtiyoz emas, har bir fuqaroning haqqi.",
      long: "Advokat maslahati qimmat bo'lgani uchun ko'pchilik oddiy savoliga ham javob topa olmaydi. Biz buni asosiy muammo deb bilamiz, shuning uchun platformaning asosiy qismi bepul: to'lov faqat kunlik limitni oshirish va kuchliroq AI modeliga o'tish uchun kerak bo'ladi.",
      points: [
        "Bepul tarifda kunlik savollar — to'lov kartasi so'ralmaydi",
        "Ro'yxatdan o'tmasdan ham AI'ni sinab ko'rish mumkin",
        "Kutubxona, Konstitutsiya, darslar va testlar ro'yxatdan o'tgan har kim uchun bepul",
        "O'zbek va rus tillarida, telefonda ham to'liq ishlaydi",
        "Pullik tariflar yangi bo'lim ochmaydi — faqat limit va AI darajasini oshiradi",
      ],
    },
    {
      title: "Maxfiylik",
      desc: "Suhbatlaringiz shaxsiy. Savolingizni hech kim ko'rmaydi va uchinchi shaxslarga oshkor qilinmaydi.",
      long: "Huquqiy savol ko'pincha eng shaxsiy mavzuga tegadi: oila, qarz, ish joyidagi nizo, sog'liq. Shuning uchun maxfiylik biz uchun qo'shimcha imkoniyat emas, asosiy shart. Suhbatlaringiz sizning hisobingizga bog'langan va faqat sizga ko'rinadi.",
      points: [
        "Suhbatlar faqat sizga ko'rinadi va uchinchi shaxslarga berilmaydi",
        "Savollaringiz reklama yoki boshqa maqsadda ishlatilmaydi",
        "Har bir suhbatni o'zingiz o'chirib tashlashingiz mumkin",
        "Ulanish SSL bilan shifrlanadi",
        "Maxfiylik siyosati saytda ochiq e'lon qilingan",
      ],
    },
    {
      title: "Mas'uliyat",
      desc: "AI imkoniyatini oshirib ko'rsatmaymiz. Murakkab ishda advokat kerakligini ochiq aytamiz — noto'g'ri maslahatdan ko'ra rost gap yaxshiroq.",
      long: "AI huquqiy ma'lumot berishda kuchli, lekin u advokat emas: u sizning ishingiz bo'yicha sudda vakillik qila olmaydi va barcha holatlarni bilmaydi. Buni yashirish foydalanuvchiga zarar keltiradi, shuning uchun biz chegarani ochiq aytamiz va kerak bo'lganda mutaxassisga yo'naltiramiz.",
      points: [
        "Javoblarda AI maslahat advokat o'rnini bosmasligi eslatiladi",
        "Tizim qonun matnini topa olmasa, taxminiy javob berilmaydi",
        "Murakkab va nizoli ishlarda mutaxassisga murojaat tavsiya etiladi",
        "Saytda AI haqida alohida ochiq bildirishnoma bor",
        "Xato yoki noaniqlik topsangiz, texnik yordamga xabar berishingiz mumkin",
      ],
    },
  ],

  about_value_eyebrow: "Qadriyat",
  about_value_points: "Bu amalda qanday ko'rinadi",
  about_who_title: "Kimlar uchun",
  about_who_sub: "Platformadan kim foydalanadi",
  about_who: [
    {
      title: "Fuqarolar",
      desc: "Kundalik savollar: mehnat, oila, meros, ijara, xarid. Advokatga bormasdan oldin nima qilish kerakligini bilib olasiz.",
    },
    {
      title: "Talabalar va yosh yuristlar",
      desc: "Kodekslar bo'yicha qidiruv, darslar va testlar — nazariyani amaliyot bilan mustahkamlash uchun.",
    },
    {
      title: "Tadbirkorlar",
      desc: "Shartnoma shartlari, kontragent bilan nizo, tekshiruv paytidagi huquqlar — biznesga oid savollarga tezkor javob.",
    },
    {
      title: "Kadrlar va HR mutaxassislari",
      desc: "Mehnat shartnomasi, ta'til, ishdan bo'shatish tartibi — qonun talablarini aniq bilish uchun.",
    },
  ],

  profile_username_required: "Username bo'sh bo'lishi mumkin emas",
  profile_updated: "Profil yangilandi",
  profile_saving: "Saqlanmoqda…",
  profile_save: "Saqlash",
  profile_full_name: "To'liq ism",
  profile_full_name_ph: "Ismingizni kiriting",
  profile_username_label: "Username",
  profile_username_ph: "username",
  profile_email_label: "Email",
  password_mismatch: "Yangi parollar mos kelmadi",
  password_min_length: "Parol kamida 6 ta belgi bo'lsin",
  password_changed: "Parol o'zgartirildi",
  password_changing: "O'zgartirilmoqda…",
  password_change: "Parolni o'zgartirish",
  password_current: "Joriy parol",
  password_current_ph: "Hozirgi parolingiz",
  password_new: "Yangi parol",
  password_new_ph: "Kamida 6 ta belgi",
  password_confirm: "Yangi parolni tasdiqlang",
  password_confirm_ph: "Yangi parolni takrorlang",
  profile_tab: "Profil",
  password_tab: "Parol",
  telegram_tab: "Telegram",
  pro_tab: "Pro",
  pro_current_plan: "Joriy tarif",

  pro_plan_pro: "Pro",
  pro_expires_at: "Amal qilish muddati",
  pro_no_expiry: "Muddatsiz",

  pro_price_label: "oyiga",
  pro_days_left: "{n} kun qoldi",
  pro_features_title: "Tarifingiz imkoniyatlari",
  pro_upgrade_hint: "{plan} tarifiga o'ting",
  pro_see_all_plans: "Barcha tariflarni ko'rish",
  forgot_title: "Parolni unutdingizmi?",
  forgot_desc:
    "Ro'yxatdan o'tgan email manzilingizni kiriting. Administrator parolingizni yangilaydi va yangi parol shu email manzilga yuboriladi.",
  forgot_email_label: "Email manzilingiz",
  forgot_note_label: "Qo'shimcha izoh (ixtiyoriy)",
  forgot_note_ph: "Masalan: username'imni ham eslay olmayapman",
  forgot_submit: "So'rov yuborish",
  forgot_sending: "Yuborilmoqda...",
  forgot_success:
    "So'rovingiz adminga yuborildi. Yangi parol tez orada emailingizga keladi — pochtangizni, jumladan \"Spam\" papkasini ham tekshiring.",
  forgot_back_to_login: "Kirish sahifasiga qaytish",

  pricing_title: "Sizga mos tarifni tanlang",
  pricing_subtitle:
    "Har bir tarif kuniga aniq savol limiti va sun'iy intellekt sifati bilan keladi — istalgan vaqt bekor qilish mumkin.",
  pricing_badge_popular: "Eng mashhur",

  pricing_per_month: "/ oyiga",
  currency_uzs: "so'm",

  pricing_feature_daily: "Kuniga {n} ta savol",
  pricing_feature_ai_standard: "Standart AI",
  pricing_feature_ai_premium: "Premium AI (Claude) — chuqurroq, professional javoblar",
  /* ⚠️ Bu ro'yxatlar backendda HAQIQATDA majburlanadigan imkoniyatlarni
     aks ettiradi (`backend/config/plans.js`). Amalga oshirilmagan
     narsani ("reklama", "suhbat tarixi muddati", "xatolar tahlili")
     yozish mumkin emas — u sotib olgan foydalanuvchini aldaydi. */
  pricing_features_free: [
    "Kuniga 5 ta AI savoli",
    "1 ta dars — tanishib chiqish uchun",
    "1 ta amaliy test",
    "Kuniga 2 ta ovozli savol",
    "Qonunlar kutubxonasi va Konstitutsiya — to'liq",
  ],
  pricing_features_basic: [
    "Kuniga 30 ta AI savoli",
    "5 ta dars ochiladi",
    "5 ta amaliy test ochiladi",
    "Kuniga 5 ta ovozli savol",
    "Standart AI",
  ],
  pricing_features_pro: [
    "Kuniga 200 ta AI savoli",
    "30 ta dars ochiladi",
    "BARCHA amaliy testlar — cheklovsiz",
    "Premium AI (Claude) — chuqurroq javoblar",
    "Kuniga 15 ta ovozli savol",
  ],
  pricing_features_premium: [
    "Kuniga 500 ta AI savoli",
    "BARCHA darslar — cheklovsiz",
    "BARCHA amaliy testlar — cheklovsiz",
    "Premium AI (Claude) — chuqurroq javoblar",
    "Kuniga 30 ta ovozli savol",
  ],

  // ── Tarif qulfi (darslar va testlar) ──
  plan_locked_badge: "Yopiq",
  plan_unlock_cta: "Tarifni oching",
  /* ⚠️ Tarif nomi ({plan}) matnga QOTIRILMAYDI: endi cheklov faqat
     bepul tarifda emas — Basic'da 5 ta, Pro'da 30 ta dars ochiq.
     "Bepul tarifda…" deb yozilsa Basic egasiga yolg'on ko'rinardi. */
  plan_lessons_locked_title: "Darslarning bir qismi yopiq",
  plan_lessons_locked_sub:
    "{plan} tarifida {open} ta dars ochiq. Yana {locked} ta dars yuqoriroq tarifda ochiladi.",
  plan_tests_locked_title: "Testlarning bir qismi yopiq",
  plan_tests_locked_sub:
    "{plan} tarifida {open} ta test ochiq. Yana {locked} ta test yuqoriroq tarifda ochiladi.",

  pricing_cta_buy: "Sotib olish",
  pricing_cta_current: "Joriy tarifingiz",

  // ── AI imkoniyatlari ──
  capabilities_title: "Sun'iy intellekt imkoniyatlari",
  capabilities_subtitle:
    "Huquq AI oddiy chatbot emas — O'zbekiston qonunchiligiga ixtisoslashgan huquqiy yordamchi.",
  cap_1_title: "24/7 mavjud",
  cap_1_desc: "Kechayu kunduz, dam olish kunlari ham — navbatsiz, kutmasdan javob oling.",
  cap_2_title: "Kontekstni eslab qoladi",
  cap_2_desc: "Suhbat davomida oldingi savollaringizni hisobga olib, izchil javob beradi.",
  cap_3_title: "O'zbekiston qonunlariga ixtisoslashgan",
  cap_3_desc: "Mehnat, oila, meros, yer, jinoyat va boshqa kodekslar bo'yicha aniq javoblar.",
  cap_4_title: "Ko'p tilli",
  cap_4_desc: "O'zbek va rus tillarida — qaysi tilda yozsangiz, shu tilda javob beradi.",
  cap_5_title: "Hujjat tahlili",
  cap_5_desc: "Shartnoma yoki hujjat rasmini yuklang — AI uni tahlil qilib, tushuntirib beradi.",
  cap_6_title: "Tezkor javob",
  cap_6_desc: "Soniyalar ichida aniq va tushunarli javob — vaqtingizni tejaydi.",

  // ── Nima uchun aynan Huquq AI ──
  whyus_title: "Nima uchun aynan Huquq AI",
  whyus_subtitle: "Oddiy qidiruv yoki umumiy chatbotlardan farqli — biz aniq muammoingizga mos yechim beramiz.",
  whyus_1_title: "Mutaxassis darajasidagi tahlil",
  whyus_1_desc: "Pro tarifda so'rovlaringiz Claude — dunyodagi eng ilg'or AI modellaridan biriga yo'naltiriladi.",
  whyus_2_title: "To'liq maxfiylik",
  whyus_2_desc: "Suhbatlaringiz shaxsiy va himoyalangan — uchinchi shaxslarga oshkor qilinmaydi.",
  whyus_3_title: "Tabiiy o'zbek tili",
  whyus_3_desc: "Rasmiy va so'zlashuv uslubidagi savollarni ham tushunadi — lotin va kirilcha, farqi yo'q.",
  whyus_4_title: "Doimiy yangilanish",
  whyus_4_desc: "AI modeli va bilim bazasi muntazam takomillashtiriladi — sifat doim oshib boradi.",

  // ── Foydalanuvchilar fikrlari (placeholder) ──
  testimonials_title: "Foydalanuvchilar fikri",
  testimonials_subtitle: "Huquq AI'dan foydalanganlar shunday deydi",
  testimonials_note: "* Namunaviy fikrlar — loyiha rivojlanishi bilan haqiqiy sharhlar bilan almashtiriladi",
  test_1_name: "Dilnoza R.",
  test_1_role: "Tadbirkor",
  test_1_text: "Shartnomamdagi noaniq bandni bir necha daqiqada tushuntirib berdi. Advokatga borishdan oldin juda foydali bo'ldi.",
  test_2_name: "Jasur T.",
  test_2_role: "Xodim",
  test_2_text: "Ishdan noqonuniy bo'shatilganimda nima qilishni bilmasdim. AI aniq qadamlarni ko'rsatdi, huquqlarimni himoya qildim.",
  test_3_name: "Malika A.",
  test_3_role: "Talaba",
  test_3_text: "Kechqurun kech bo'lsa ham javob oldim. Oddiy tilda tushuntirgani juda yoqdi.",

  // ── FAQ ──
  faq_title: "Ko'p beriladigan savollar",
  faq_subtitle: "Savolingiz javobini topolmadingizmi? Bizga yozing.",
  faq_1_q: "Huquq AI professional advokatni almashtiradimi?",
  faq_1_a: "Yo'q. Huquq AI dastlabki yo'naltirish va umumiy huquqiy ma'lumot beradi. Murakkab yoki sud jarayoni talab qiladigan holatlarda malakali advokatga murojaat qilishni tavsiya qilamiz.",
  faq_2_q: "Ma'lumotlarim maxfiymi?",
  faq_2_a: "Ha. Suhbatlaringiz shaxsiy hisobingizga bog'liq va uchinchi shaxslarga oshkor qilinmaydi.",
  faq_3_q: "Pro tarifda oddiy tarifdan nima farq qiladi?",
  faq_3_a: "Pro va Premium tariflarda so'rovlaringiz kuchliroq AI modeliga (Claude) yo'naltiriladi — bu chuqurroq, aniqroq va professionalroq javoblar degani. Shuningdek kunlik savol limiti ham ancha yuqori.",
  faq_4_q: "To'lovni qanday amalga oshiraman?",
  faq_4_a: "Click yoki Payme orqali, bir necha soniyada. To'lovdan so'ng tarifingiz avtomatik faollashadi.",
  faq_5_q: "Bepul tarifda nima beriladi?",
  faq_5_a: "Ro'yxatdan o'tgan har bir foydalanuvchiga kuniga bir nechta bepul savol imkoniyati beriladi — kredit karta shart emas.",

  // ── Mehmon (ro'yxatdan o'tmagan) foydalanuvchi limiti ──
  guest_limit_title: "Ro'yxatdan o'ting",
  guest_limit_desc:
    "AI yordamchidan foydalanishni davom ettirish uchun ro'yxatdan o'ting. Bepul {n} ta savolingiz tugadi.",
  guest_limit_bar: "Bepul {n} ta savol tugadi — davom ettirish uchun bosing",
  guest_have_account: "Hisobingiz bormi? Kirish",
  speak_listen: "Eshitish",
  speak_loading: "Tayyorlanmoqda...",
  speak_stop: "To'xtatish",
  speak_error: "Ovoz tayyorlanmadi",
  guest_feature_ai: "Cheksiz AI huquqiy maslahat",
  guest_feature_lessons: "Darslar — mavzular bo'yicha o'rganish",
  guest_feature_tests: "Testlar — bilimni tekshirish",
  guest_feature_library: "Qonunlar kutubxonasi",

  tier_free: "Bepul",
  tier_basic: "Basic",
  tier_pro: "Pro",
  tier_premium: "Premium",
  header_days_left: "{n} kun qoldi",
  header_no_expiry: "muddatsiz",
  google_password_warning:
    "Google orqali kirgan hisobda parol o'zgartirib bo'lmaydi.",
  logout: "Chiqish",

  telegram_connected: "Telegram bog'langan",
  telegram_connected_desc:
    "Endi Telegram botdan ham foydalanishingiz mumkin ✓",
  telegram_link_title: "Telegram bot bilan bog'lash:",
  telegram_link_step1: "Quyidagi tugmani bosing",
  telegram_link_step2: "Telegram ilovasida bot ochiladi",
  telegram_link_step3: "Botga /start tugmasini bosing",
  telegram_link_step4: "Hisobingiz avtomatik bog'lanadi ✅",

  telegram_loading: "Yuklanmoqda…",
  hero_cta_login: "Kirish va maslahat olish",
  hero_note: "🔒 AI maslahatdan foydalanish uchun ro'yxatdan o'ting",
  laws_labor: "Mehnat Kodeksi",
  laws_labor_items: [
    "Ish haqi (100-102)",
    "Bo'shatish (154-157)",
    "Ta'til (182)",
    "Nizolar (220)",
  ],
  laws_family: "Oila Kodeksi",
  laws_family_items: [
    "Aliment (99-110)",
    "Ajralish (37-40)",
    "Bola egaligi (73)",
  ],
  laws_civil: "Fuqarolik Kodeksi",
  laws_civil_items: [
    "Meros (1135-1260)",
    "Mulk huquqi",
    "Vasiyatnoma (1151)",
  ],
  laws_land: "Yer Kodeksi",
  laws_land_items: ["Egalik turlari (16)", "Ijara (28)", "Tortib olish (34)"],
  laws_criminal: "Jinoyat Kodeksi",
  laws_criminal_items: [
    "Firibgarlik (168)",
    "Korrupsiya (210-212)",
    "Zo'ravonlik (110)",
  ],
  laws_consumer: "Iste'molchi Huquqlari",
  laws_consumer_items: [
    "Qaytarish (14-m)",
    "Kafolat (19-m)",
    "Xizmat nuqsoni (16)",
  ],
  google_btn: "Google bilan kirish",
  google_btn_register: "Google bilan ro'yxatdan o'tish",
  google_btn_disabled: "Google (sozlanmagan)",
  google_unavailable:
    "Google bilan kirish hozircha mavjud emas. Quyidagi forma orqali email va parol bilan kiring.",
  google_error: "Google orqali kirishda xatolik",
  divider_or: "yoki",
  divider_or_email: "yoki email bilan",
  otp_title: "Emailni tasdiqlang",
  otp_sent: "manziliga 6 xonali kod yuborildi",
  otp_resent: "✅ Yangi kod yuborildi!",
  otp_timer: "Qayta yuborish",
  otp_resend: "Kodni qayta yuborish",
  otp_back: "← Orqaga",
  otp_verify: "Tasdiqlash",
  otp_verifying: "Tekshirilmoqda...",
  otp_error: "Tasdiqlash xatosi",
  otp_send_error: "Yuborishda xato",
  otp_length_error: "6 xonali kodni kiriting",
  otp_dev_console:
    "⚠️ Test rejimi: email xizmati sozlanmagani uchun kod pochtaga YUBORILMADI — u backend ishlab turgan terminalga yozildi.",

  support_email_required: "Email kiritish shart",
  login_username_ph: "username yoki email",
  login_password_ph: "••••••",
  register_email_ph: "misol@gmail.com",
  register_success_title: "Ro'yxatdan o'tdingiz!",
  register_tg_desc:
    "Telegram botni ulang — AI maslahatdan Telegram orqali ham foydalaning",
  register_tg_btn: "Telegram botni ulash →",
  register_tg_skip: "Keyinroq ulash →",

  drawer_limit_reached: "⚠️ Kunlik limit tugadi ({n} ta savol). Ertaga qayta foydalanishingiz mumkin.",
  chat_image_size_error: "Rasm hajmi 5MB dan oshmasligi kerak",
  chat_upload_image: "Rasm yuklash",
  telegram_saved_msg: "Username saqlandi! Endi botga o'ting va /start bosing.",
  telegram_username_label: "Telegram username",
  telegram_confirm: "Tasdiqlash",
};

export default uz;
