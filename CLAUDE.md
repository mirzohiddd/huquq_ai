# Huquq AI — loyiha ko'rsatmalari

Bu loyihada ishlashda **Senior Full-Stack Developer**, **UI/UX Designer** va **AI Engineer** sifatida ish tut.

Huquq AI oddiy sayt emas — startup musobaqasida qatnashadi. Loyiha professional, zamonaviy va investorlar/hakamlar hayratda qoladigan darajada bo'lishi kerak.

## Eng muhim qoida

- Mavjud ishlayotgan kodlarni buzma.
- Loyihani boshqatdan yozma.
- Arxitekturani o'zgartirma.
- Keraksiz refaktor qilma.
- Faqat aytilgan vazifani bajar.
- Biror narsani yaxshilash kerak deb hisoblasang — avval sababini yoz va ruxsat ol (kod yozishdan oldin).
- Barcha fayllarda kod maximum 200 qator yozilishi kerak agar ko'payib ketsa alohida fayllarga bo'linsin

## Dizayn

Hozirgi dizayn yetarli darajada premium emas. Sayt zamonaviy AI startup ko'rinishiga ega bo'lishi kerak.

Ilhom: ChatGPT, Claude, Perplexity, Notion, Stripe, Linear.

Talablar: premium ko'rinish, chiroyli Landing Page, professional ranglar, yaxshi tipografiya, chiroyli animatsiyalar, kerakli joyda glass effect, yumshoq soyalar, gradientlar, toza/minimal dizayn, mobil telefonlarda mukammal ishlashi.

Maqsad: foydalanuvchi saytga kirganda "Bu haqiqiy AI startup ekan" degan taassurot olishi kerak — talabalar loyihasiga o'xshamasligi kerak.

## Landing Page

To'liq professional bo'lishi kerak, quyidagi bo'limlar bilan:
Hero, Huquq AI nima ekanligi, AI imkoniyatlari, Nima uchun aynan Huquq AI, Qanday ishlashi, Statistikalar, Afzalliklar, Foydalanuvchilar fikrlari (placeholder mumkin), FAQ, Narxlar (Pricing), CTA tugmalari, professional Footer. Har bir bo'lim premium ko'rinishda.

## AI

AI saytning eng muhim qismi — sifatini pasaytiradigan hech qanday o'zgarish qilinmasin. Yaxshilash yo'nalishlari: javob sifati, kontekstni eslab qolish, O'zbekiston qonunchiligiga moslik, mantiqiy fikrlash, ketma-ket savollarga to'g'ri javob berish, tezlik.

## To'lov tizimi

To'lov va tariflar Profil oynasi ICHIDA emas — foydalanuvchiga ko'rinadigan joyda (Landing Page'dagi professional Pricing bo'limida) bo'lishi kerak. Foydalanuvchi saytga kirishi bilan tariflarni, credit paketlarini va narxlarni darhol ko'rishi kerak.

## Credit tizimi

Creditlar Profil oynasida (shaxsiy holatda) yashiringan. Login qilgan foydalanuvchi Header'da (yoki ko'rinadigan joyda) quyidagilarni aniq ko'rib turishi kerak: limit tugashiga necha kun qolgani, tarif nomi.

## Limit tizimi

Admin har bir foydalanuvchiga QO'LDA alohida limit belgilamasligi kerak — bu noto'g'ri yondashuv. Limit avtomatik, tarifga bog'liq bo'lishi kerak: Bepul / Basic / Pro / Premium — har biri belgilangan Credit miqdoriga ega, foydalanuvchi tarifni sotib olganda shu limit avtomatik beriladi.

## Admin Panel

Faqat quyidagilarni boshqarsin: Foydalanuvchilar, To'lovlar, Buyurtmalar, Statistikalar, AI ishlatilishi, Dashboard, Support. Admin har bir foydalanuvchining Credit limitini qo'lda o'zgartirishi SHART EMAS (tarif-asosli avtomatik tizim buni almashtiradi).

## Kod yozish qoidalari

Har qanday faylni o'zgartirishdan oldin: 1) kodni to'liq o'qib chiq, 2) qanday ishlashini tushun, 3) eng kichik xavfsiz o'zgarishni qil, 4) ishlayotgan funksiyalarni buzma, 5) keraksiz fayllarga tegma. Boshqa qismlarga ta'sir qiladigan o'zgarish bo'lsa — avval tushuntir va ruxsat ol.

## Har bir vazifadan keyin hisobot

- Qaysi fayllar o'zgardi.
- Nima o'zgardi.
- Nima uchun aynan shunday qilindi.
- Qaysi fayllarga umuman tegilmadi.
- Hech qanday ishlayotgan funksiya buzilmaganini tasdiqla.

## Loyiha holati va tarix

To'liq texnik tarix (66 ta yozuv: nima o'zgardi, nima uchun, nimaga tegilmadi)
`loyiha-tarixi` skillida. **Mavjud funksiyani o'zgartirishdan yoki nosozlikni
tekshirishdan OLDIN uni yuklang** — aks holda allaqachon hal qilingan muammo
qaytadan takrorlanadi.

Asosiy tuzilma: `frontend/` — asosiy sayt (Vite + React) · `admin/` — HAQIQIY
ishlatiladigan standalone admin dashboard · `backend/` — Express + MongoDB API.

Jonli manzillar (2026-09-13): backend — **Render**
`https://huquq-ai-7v7a.onrender.com` (Railway manzili o'chgan, 404) · frontend —
`https://huquq-ai-teal.vercel.app` · admin — `https://huquq-ai-yalg.vercel.app`.

## ⚠️ Muhim tuzoqlar (har doim amal qiling)

Bular haqiqiy xatolardan olingan — har biri bir marta ishlab turgan narsani buzgan:

- **Logoga oq filtr qo'llanmasin** (`filter: brightness(0) invert(1)`) — logo tanib
  bo'lmas oq doiraga aylanadi. Rasmga filtr berishdan oldin rasmning O'ZIGA qarang.
- **CSS izohlari doim `/* */` ichida yopilsin** — izoh matni blokdan tashqarida
  qolgani uchun sayt IKKI marta buzilgan (bir marta illyustratsiya yo'qolgan,
  bir marta o'zgaruvchi e'lon qilinmagan).
- **Dars matniga aniq modda raqami, muddat, foiz yoki summa YOZILMASIN** — ular
  `lawRefs` orqali `LegalChunk` dan JONLI olinadi. Nusxalangan raqam qonun
  yangilanganda eskirib, foydalanuvchini chalg'itadi.
- **lex.uz hujjat ID'lari TAXMIN QILINMASIN** — har biri HTTP so'rov bilan
  tekshirilsin (sahifa ochiladimi, SARLAVHASI kutilganiga mos keladimi). Faqat
  "moddalar bor" tekshiruvi yetarli emas — butunlay boshqa hujjat tushishi mumkin.
- **Rim raqamlarida kirill homogliflari bor** (Х = U+0425, ekranda lotin X bilan
  bir xil). `[IVXLC]` ularni tanimaydi. Normallashtirish FAQAT raqamga qo'llansin,
  butun satrga emas — aks holda sarlavha buziladi.
- **`parseArticles()` va o'zbekcha `ingestLaws.js` ga TEGILMASIN** — 20 ta kodeks
  uchun to'g'ri ishlab turibdi, unga tegish hammasini buzadi.
- **`admin/` — haqiqiy admin panel.** Asosiy saytda `/admin` marshruti YO'Q
  (o'chirilgan). `frontend/src/pages/AdminPanel.jsx` ham yo'q.
- **`enabled: false` va `showInLibrary: false` — boshqa-boshqa narsa.** Birinchisi
  hujjatni butunlay o'chiradi (yangilanmaydi, AI qidiruvida qatnashmaydi),
  ikkinchisi faqat kutubxona ro'yxatidan yashiradi.
- **"Hostingdami?" tekshiruvi `process.env.RENDER` bilan YOZILMASIN** — Railway'da
  bunday o'zgaruvchi yo'q. Har doim `backend/utils/hosting.js` → `isHosted()`
  ishlatilsin, aks holda `DEV_OTP_TO_CONSOLE` kabi lokal bayroqlar production'da
  jim yoqilib qoladi va foydalanuvchi tasdiqlash kodini hech qachon olmaydi.
- **Backend manzili `.env` da `https://` bilan yozilsin** — protokolsiz manzil
  nisbiy yo'lga aylanib, barcha so'rovlar backend o'rniga frontendga ketadi.
- **Kod har faylda maksimum 200 qator** — oshsa alohida fayllarga bo'linsin.
