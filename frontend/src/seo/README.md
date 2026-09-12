# SEO / AEO / GEO / LLMO / SMO — Huquq AI

Bu papka saytning qidiruv va AI ko'rinuvchanligini boshqaradi. Quyida
qaysi qism nima uchun javob berishi va **nimaga tegmaslik kerakligi**
yozilgan.

## Atamalar

| Qisqartma | Ma'nosi | Loyihada nima qiladi |
|---|---|---|
| **SEO** | Search Engine Optimization | Google/Bing/Yandex uchun: title, description, canonical, hreflang, sitemap, robots |
| **AEO** | Answer Engine Optimization | "Javob mashinalari" (Google AI Overview, Bing Copilot) uchun: `FAQPage`, `HowTo`, `Speakable` sxemalari |
| **GEO** | Generative Engine Optimization | Generativ tizimlar saytni MANBA sifatida keltirishi uchun: `llms.txt`, faktik `<noscript>` matni, aniq entity ta'riflari |
| **LLMO** | LLM Optimization | AI botlariga `robots.txt` da ochiq ruxsat + LLM uchun tayyorlangan matn fayllari |
| **SMO** | Social Media Optimization | Open Graph / Twitter kartalari, 1200×630 banner, ulashish tugmalari |

## Fayllar

| Fayl | Vazifasi |
|---|---|
| `siteMeta.js` | Domen, nom, ijtimoiy havolalar, GEO koordinatalar, tillar — **yagona manba** |
| `schema.js` | schema.org (JSON-LD) tuzuvchi sof funksiyalar |
| `head.js` | `<head>` bilan ishlash: meta, link, hreflang, JSON-LD |
| `../components/Seo.jsx` | SAHIFA darajasidagi teglar (bir sahifada bitta) |
| `../components/JsonLd.jsx` | BO'LIM darajasidagi sxema (masalan Narxlar) |
| `../components/ShareBar.jsx` | SMO — ulashish tugmalari |

Statik fayllar (`frontend/public/`):
`robots.txt` · `sitemap.xml` · `sitemap-sahifalar.xml` · `llms.txt` ·
`llms-full.txt` · `.well-known/llms.txt` · `site.webmanifest` ·
`og-image.jpg` · `og-image-ru.jpg`

## ⚠️ Ikki qatlam — nima uchun shunday

**AI botlari (GPTBot, PerplexityBot, ClaudeBot) JavaScript'ni ishga
tushirmaydi.** Sayt esa SPA — barcha kontent JS orqali chiziladi. Shu
sabab ikkita qatlam bor:

1. **Statik qatlam** — `index.html` dagi meta teglar, JSON-LD va
   `<noscript>` bloki hamda `public/llms.txt`. Botlar AYNAN shuni ko'radi.
2. **Dinamik qatlam** — `Seo.jsx` va `JsonLd.jsx`. Google (JS'ni render
   qiladi) va foydalanuvchi ulashuvi uchun; tilga mos, sahifaga xos.

Ikkalasi **to'qnashmasligi** uchun:

- `setAlternates()` BARCHA `link[rel=alternate][hreflang]` ni tozalab,
  keyin qayta yozadi — aks holda statik + dinamik = 6 ta hreflang.
- `index.html` dagi FAQPage/HowTo bloki `data-seo-fallback="true"`
  bilan belgilangan. Sahifa o'z sxemasini berganda `setJsonLd()` uni
  o'chiradi — bir sahifada ikkita FAQPage qolmasligi uchun.

## Qoidalar (buzilmasin)

1. **Sxemada faqat sahifada KO'RINADIGAN ma'lumot bo'lsin.** Ko'rinmaydigan
   matnni JSON-LD ga yozish — structured data spam, jarima olib keladi.
2. **Narx, limit va qonun raqamlari sxemaga QO'LDA yozilmasin.** Tariflar
   backenddan (`/payment/plans`) keladi; qonun raqamlari umuman yozilmaydi.
3. **`<noscript>` matni saytdagi haqiqiy mazmun bilan mos bo'lsin** — aks
   holda "cloaking" (bir narsani botga, boshqasini odamga ko'rsatish).
4. **`useMemo` majburiy** — sxema obyekti har renderda yangi bo'lsa,
   `<script>` teg cheksiz o'chirilib qayta qo'shiladi.
5. **Domen bitta joyda** — `siteMeta.js`. Statik fayllardagi domen ham shu
   bilan mos bo'lishi kerak (domen o'zgarsa: `siteMeta.js`, `index.html`,
   `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`).

## Ochiq qonun sahifalari (server tomonda chiziladi)

Saytning eng qimmatli kontenti — 20 kodeks va Konstitutsiya — endi
**login talab qilmaydigan, indekslanadigan sahifalarga** ega:

| Manzil | Nima |
|---|---|
| `/qonunlar` | Barcha kodekslar ro'yxati |
| `/qonun/{KOD}` | Bitta kodeksning modda ro'yxati |
| `/qonun/{KOD}/{MODDA}` | Modda matni (~7 100 sahifa) |
| `/sitemap-qonunlar.xml` | Ularning sayt xaritasi (bazadan) |

Rus tili: manzil oxiriga `?lang=ru`.

**⚠️ Ular React'da EMAS — backend'da chiziladi** (`backend/routes/publicSeo.js`
+ `backend/services/seoPages/`). Sabab: AI botlari JavaScript'ni ishga
tushirmaydi, ya'ni SPA ularga bo'sh sahifa bo'lib ko'rinadi. Foydalanuvchi
uchun ular asosiy domenda ochiladi — `vercel.json` dagi **rewrite** so'rovni
backendga uzatadi.

**⚠️ `vercel.json` da rewrite TARTIBI muhim:** `/qonunlar`, `/qonun/:path*`
va `/sitemap-qonunlar.xml` qoidalari `"/(.*)" → /index.html` catch-all dan
OLDIN turishi shart. Vercel qoidalarni tartib bo'yicha tekshiradi —
catch-all yuqorida bo'lsa hamma narsa SPA'ga ketardi.

**⚠️ `vercel.json` ga izoh qo'shib bo'lmaydi** (JSON), va rewrite obyektiga
notanish kalit (`comment`) qo'shilsa deploy yiqilishi mumkin — shuning
uchun tushuntirish shu yerda.

**Nima uchun aynan qonun matni ochiq:** u lex.uz da allaqachon bepul chop
etiladi, yashirishning biznes ma'nosi yo'q. Platformaning qiymati esa AI
maslahatchi, darslar, testlar va amaliyotda — ular avvalgidek ro'yxatdan
o'tishni talab qiladi va ochiq sahifalarda berilmaydi.

## Savol-javob markazi (AEO) — 2026-08-19

`/qonun/MK/106` sahifasi "Mehnat kodeksi 106-modda" so'roviga javob
beradi. Lekin odam ham, AI tizimi ham qonunni MODDA RAQAMI bilan emas,
**SAVOL** bilan qidiradi. Shu oraliqni to'ldirish uchun savol shaklidagi
ochiq sahifalar qurildi:

| Manzil | Nima |
|---|---|
| `/savollar` | 65 ta savol, 10 ta huquq sohasi bo'yicha |
| `/savol/{slug}` | Bitta savol — `QAPage` sxemasi bilan |
| `/metodologiya` | Javoblar qanday tayyorlanishi (E-E-A-T) |
| `/sitemap-savollar.xml` | Ularning sayt xaritasi |

**⚠️ Javob matniga aniq raqam yozilmagan** — muddat, foiz, summa va modda
raqami yo'q. Har bir savol `refs` orqali haqiqiy moddaga bog'langan va
matn `LegalChunk` dan JONLI olinadi. Havolalar bazadan tekshiriladi:
`node backend/scripts/verifyQaRefs.js`.

Kontent: `backend/services/qaContent/` · Chizuvchilar:
`backend/services/seoPages/qaPages.js` va `qaAnswerPage.js`.

## E-E-A-T: nima uchun `/metodologiya` bor

Huquq — **YMYL** ("Your Money or Your Life") sohasi. Google va AI qidiruv
tizimlari bunday mavzuda manbani baholashda ma'lumot QAYERDAN olinishi,
QANDAY tekshirilishi, QANCHA vaqtda yangilanishi va KIM javobgarligini
talab qiladi. Bu signallar bo'lmasa sayt "noma'lum manba" sifatida
baholanadi va iqtibos olmaydi.

`Organization.publishingPrinciples` shu sahifaga ishora qiladi — ya'ni
bot uchun bu shunchaki sahifa emas, **tahririy siyosat** deb belgilangan.

## Markdown nusxalari (LLMO)

Har bir ochiq sahifaning `.md` varianti bor: `/qonunlar.md` ·
`/qonun/{KOD}.md` · `/qonun/{KOD}/{MODDA}.md` · `/savollar.md` ·
`/savol/{slug}.md` · `/metodologiya.md`

HTML da navigatsiya, uslub va CTA bloklari bor — til modeli uchun bular
shovqin. Markdown variantida faqat ma'lumot qoladi. HTML sahifa
`<link rel="alternate" type="text/markdown">` orqali o'z nusxasiga ishora
qiladi, ya'ni bot uni O'ZI topadi.

**⚠️ MARSHRUT TARTIBI HAL QILUVCHI:** `.md` marshrutlari HTML
marshrutlaridan OLDIN ro'yxatdan o'tkazilishi SHART. Express qoidalarni
tartib bo'yicha tekshiradi va `/qonun/:code/:article` naqshi
`/qonun/MK/106.md` ni ham tutib olardi (article = "106.md") — natijada
bot Markdown so'raganda HTML olardi.

## Entity grafi — nima uchun har sahifada takrorlanadi

Ochiq qonun sahifalarida ilgari faqat `Legislation` va `BreadcrumbList`
bor edi. Lekin AI botlari eng ko'p AYNAN shu sahifalarni o'qiydi va ular
bosh sahifaga umuman kirmasligi mumkin — ya'ni `index.html` dagi
`Organization` sxemasini hech qachon ko'rmasdi.

Endi `backend/services/seoPages/entity.js` `Organization` + `WebSite`
tugunlarini HAR BIR ochiq sahifaga qo'shadi, `layout.js` esa sahifaning
o'zi uchun `WebPage` tugunini yasab, `publisher`/`isPartOf` orqali grafga
ulaydi.

**⚠️ `@id` qiymatlari `index.html` dagilar bilan AYNAN bir xil bo'lishi
shart** (`#organization`, `#website`). Farq qilsa qidiruv tizimi ikkita
ALOHIDA tashkilot bor deb hisoblaydi va ishonch ikkiga bo'linadi.

## Qolgan cheklov

Darslar (124 ta), testlar va AI amaliyoti hamon yopiq va indekslanmaydi —
bu ATAYLAB qilingan mahsulot qarori (ro'yxatdan o'tish rag'bati). Agar
kelajakda ularning bir qismini ham ochish kerak bo'lsa, xuddi shu naqsh
ishlaydi: backendda sahifa + `vercel.json` da rewrite.

Ikkinchi cheklov — infratuzilma: backend Render bepul tarifida uyquga
ketadi va sovuq start sekin bo'lishi mumkin. Shuning uchun ochiq sahifalar
uzoq `s-maxage` va `stale-while-revalidate` bilan beriladi.
