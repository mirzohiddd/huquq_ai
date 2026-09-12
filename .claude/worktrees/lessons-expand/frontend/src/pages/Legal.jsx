import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";
import { useLang } from "../context/LangContext";
import Seo from "../components/Seo";
import shared from "../styles/site.module.css";
import s from "./Legal.module.css";

const LAST_UPDATED = "2026-08-04";

const OTHER_DOCS = [
  { to: "/terms", label: "Foydalanish shartlari" },
  { to: "/privacy", label: "Maxfiylik siyosati" },
  { to: "/disclaimer", label: "AI haqida bildirishnoma" },
];

/* ── Umumiy qatlam: sarlavha, sticky mundarija va hujjat matni ── */
function LegalPage({ title, seoTitle, sections, current, children }) {
  const { t } = useLang();
  return (
    <>
      <Seo title={seoTitle || title} description={t.seo_legal_desc} />
      <div className={`${shared.pageHero} animate-fade-up`}>
        <div className={shared.container}>
          <h1 className={shared.pageHeroTitle}>{title}</h1>
          <span className={s.updated}>
            <Clock size={13} /> Oxirgi yangilangan sana: {LAST_UPDATED}
          </span>
        </div>
      </div>

      <section className={shared.pageSection}>
        <div className={shared.container}>
          <div className={s.layout}>
            <nav className={s.toc} aria-label="Mundarija">
              {sections.map((sec) => (
                <a key={sec.id} href={`#${sec.id}`} className={s.tocLink}>
                  {sec.label}
                </a>
              ))}
            </nav>

            <div className={s.doc}>
              {children}

              <div className={s.otherDocs}>
                {OTHER_DOCS.filter((d) => d.to !== current).map((d) => (
                  <Link key={d.to} to={d.to} className={s.otherDocLink}>
                    {d.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════ FOYDALANISH SHARTLARI ══════════════════ */
const TERMS_SECTIONS = [
  { id: "terms-1", label: "1. Umumiy qoidalar" },
  { id: "terms-2", label: "2. Xizmat tavsifi" },
  { id: "terms-3", label: "3. Advokat emas" },
  { id: "terms-4", label: "4. Javoblarning aniqligi" },
  { id: "terms-5", label: "5. Muhim qarorlar" },
  { id: "terms-6", label: "6. Foydalanuvchi majburiyatlari" },
  { id: "terms-7", label: "7. Taqiqlangan foydalanish" },
  { id: "terms-8", label: "8. Intellektual mulk" },
  { id: "terms-9", label: "9. Xizmatni o'zgartirish" },
  { id: "terms-10", label: "10. Hisobni bloklash" },
  { id: "terms-11", label: "11. Uchinchi tomon xizmatlari" },
  { id: "terms-12", label: "12. Javobgarlikni cheklash" },
  { id: "terms-13", label: "13. Nizolar" },
  { id: "terms-14", label: "14. Shartlarni o'zgartirish" },
  { id: "terms-15", label: "15. Bog'lanish" },
];

export function Terms() {
  return (
    <LegalPage
      title="Foydalanish Shartlari"
      sections={TERMS_SECTIONS}
      current="/terms"
    >
      <section id="terms-1">
        <h2>1. Umumiy qoidalar</h2>
        <p>
          Huquq AI platformasidan foydalanish orqali foydalanuvchi ushbu
          Shartlarga to'liq rozilik bildiradi.
        </p>
      </section>

      <section id="terms-2">
        <h2>2. Xizmat tavsifi</h2>
        <p>
          Huquq AI sun'iy intellekt asosida O'zbekiston qonunchiligi bo'yicha
          umumiy ma'lumot va tushuntirishlar beradi.
        </p>
      </section>

      <section id="terms-3">
        <h2>3. Advokat emas</h2>
        <p>
          Huquq AI advokat, notarius yoki davlat organi hisoblanmaydi.
          Platforma tomonidan berilgan javoblar professional yuridik
          maslahat o'rnini bosa olmaydi.
        </p>
      </section>

      <section id="terms-4">
        <h2>4. Javoblarning aniqligi</h2>
        <p>
          Biz javoblarning aniqligini ta'minlashga harakat qilamiz, ammo
          ularning to'liq, dolzarb yoki xatosiz bo'lishini kafolatlamaymiz.
        </p>
      </section>

      <section id="terms-5">
        <h2>5. Muhim qarorlar</h2>
        <p>
          Sud ishlari, shartnomalar, moliyaviy yoki boshqa huquqiy
          oqibatlarga olib keladigan qarorlarni faqat Huquq AI javoblariga
          asoslanib qabul qilmaslik kerak.
        </p>
      </section>

      <section id="terms-6">
        <h2>6. Foydalanuvchi majburiyatlari</h2>
        <p>Foydalanuvchi:</p>
        <ul>
          <li>qonunlarga rioya qiladi;</li>
          <li>yolg'on yoki noqonuniy ma'lumot kiritmaydi;</li>
          <li>platformadan noqonuniy maqsadlarda foydalanmaydi.</li>
        </ul>
      </section>

      <section id="terms-7">
        <h2>7. Taqiqlangan foydalanish</h2>
        <p>Quyidagilar taqiqlanadi:</p>
        <ul>
          <li>tizimni buzishga urinish;</li>
          <li>spam yuborish;</li>
          <li>zararli kod yuklash;</li>
          <li>boshqa foydalanuvchilarga zarar yetkazish.</li>
        </ul>
      </section>

      <section id="terms-8">
        <h2>8. Intellektual mulk</h2>
        <p>
          Platforma dizayni, logotipi va dasturiy ta'minoti Huquq AI mulki
          hisoblanadi.
        </p>
      </section>

      <section id="terms-9">
        <h2>9. Xizmatni o'zgartirish</h2>
        <p>
          Huquq AI istalgan vaqtda xizmatni yangilashi, o'zgartirishi yoki
          vaqtincha to'xtatishi mumkin.
        </p>
      </section>

      <section id="terms-10">
        <h2>10. Hisobni bloklash</h2>
        <p>
          Qoidalarni buzgan foydalanuvchi ogohlantirilmasdan bloklanishi
          mumkin.
        </p>
      </section>

      <section id="terms-11">
        <h2>11. Uchinchi tomon xizmatlari</h2>
        <p>
          Platforma tashqi API yoki xizmatlardan foydalanishi mumkin.
          Ularning ishlashi uchun Huquq AI javobgar emas.
        </p>
      </section>

      <section id="terms-12">
        <h2>12. Javobgarlikni cheklash</h2>
        <p>
          Huquq AI xizmatdan foydalanish natijasida yuzaga kelgan bevosita
          yoki bilvosita zararlar uchun qonunchilikda nazarda tutilgan
          doirada javobgar bo'ladi.
        </p>
      </section>

      <section id="terms-13">
        <h2>13. Nizolar</h2>
        <p>
          Nizolar imkon qadar muzokara yo'li bilan hal qilinadi. Zarur
          hollarda O'zbekiston Respublikasi qonunchiligi qo'llaniladi.
        </p>
      </section>

      <section id="terms-14">
        <h2>14. Shartlarni o'zgartirish</h2>
        <p>Huquq AI ushbu shartlarni istalgan vaqtda yangilashi mumkin.</p>
      </section>

      <section id="terms-15">
        <h2>15. Bog'lanish</h2>
        <p>
          Email: <a href="mailto:support@huquqai.uz">support@huquqai.uz</a>
        </p>
      </section>
    </LegalPage>
  );
}

/* ══════════════════ MAXFIYLIK SIYOSATI ══════════════════ */
const PRIVACY_SECTIONS = [
  { id: "privacy-1", label: "1. Yig'iladigan ma'lumotlar" },
  { id: "privacy-2", label: "2. Ma'lumotlardan foydalanish" },
  { id: "privacy-3", label: "3. Himoya qilish" },
  { id: "privacy-4", label: "4. Uchinchi tomonlar" },
  { id: "privacy-5", label: "5. Cookies" },
  { id: "privacy-6", label: "6. Saqlash muddati" },
  { id: "privacy-7", label: "7. Foydalanuvchi huquqlari" },
  { id: "privacy-8", label: "8. Voyaga yetmaganlar" },
  { id: "privacy-9", label: "9. Xavfsizlik" },
  { id: "privacy-10", label: "10. AI treningi" },
  { id: "privacy-11", label: "11. Qonuniy talablar" },
  { id: "privacy-12", label: "12. Xalqaro uzatish" },
  { id: "privacy-13", label: "13. Siyosatni yangilash" },
  { id: "privacy-14", label: "14. Bog'lanish" },
  { id: "privacy-15", label: "15. Qo'llaniladigan huquq" },
];

export function Privacy() {
  return (
    <LegalPage
      title="Maxfiylik Siyosati"
      sections={PRIVACY_SECTIONS}
      current="/privacy"
    >
      <section id="privacy-1">
        <h2>1. Qanday ma'lumotlarni yig'amiz</h2>
        <ul>
          <li>Ism (ixtiyoriy)</li>
          <li>Email (agar ro'yxatdan o'tilsa)</li>
          <li>Savollar va AI bilan yozishmalar</li>
          <li>IP manzil</li>
          <li>Qurilma va brauzer ma'lumotlari</li>
        </ul>
      </section>

      <section id="privacy-2">
        <h2>2. Ma'lumotlardan foydalanish</h2>
        <ul>
          <li>AI javoblarini yaratish</li>
          <li>Xizmat sifatini yaxshilash</li>
          <li>Xavfsizlikni ta'minlash</li>
          <li>Statistik tahlil</li>
        </ul>
      </section>

      <section id="privacy-3">
        <h2>3. Shaxsiy ma'lumotlarni himoya qilish</h2>
        <p>Ma'lumotlar ruxsatsiz kirishdan himoyalanadi.</p>
      </section>

      <section id="privacy-4">
        <h2>4. Uchinchi tomonlar</h2>
        <p>
          Qonun talab qilmasa, foydalanuvchi ma'lumotlari uchinchi shaxslarga
          sotilmaydi.
        </p>
      </section>

      <section id="privacy-5">
        <h2>5. Cookies</h2>
        <p>
          Platforma cookies va shunga o'xshash texnologiyalardan
          foydalanishi mumkin.
        </p>
      </section>

      <section id="privacy-6">
        <h2>6. Saqlash muddati</h2>
        <p>
          Ma'lumotlar xizmat ko'rsatish uchun zarur muddat davomida
          saqlanadi.
        </p>
      </section>

      <section id="privacy-7">
        <h2>7. Foydalanuvchi huquqlari</h2>
        <p>Foydalanuvchi:</p>
        <ul>
          <li>ma'lumotlarini ko'rish;</li>
          <li>tuzatish;</li>
          <li>o'chirishni so'rash;</li>
          <li>roziligini bekor qilish huquqiga ega.</li>
        </ul>
      </section>

      <section id="privacy-8">
        <h2>8. Voyaga yetmaganlar</h2>
        <p>
          18 yoshgacha bo'lgan foydalanuvchilar ota-ona yoki qonuniy vakil
          roziligi bilan foydalanishi tavsiya etiladi.
        </p>
      </section>

      <section id="privacy-9">
        <h2>9. Xavfsizlik</h2>
        <p>
          SSL/TLS va zamonaviy texnik himoya choralaridan foydalaniladi.
        </p>
      </section>

      <section id="privacy-10">
        <h2>10. AI treningi</h2>
        <p>
          Foydalanuvchi ma'lumotlari alohida roziliksiz AI modelini
          o'qitish uchun ishlatilmaydi (agar amalda shunday siyosat
          yuritilsa).
        </p>
      </section>

      <section id="privacy-11">
        <h2>11. Qonuniy talablar</h2>
        <p>
          Davlat organlarining qonuniy talabi mavjud bo'lsa, ma'lumotlar
          amaldagi qonunchilikka muvofiq taqdim etilishi mumkin.
        </p>
      </section>

      <section id="privacy-12">
        <h2>12. Xalqaro uzatish</h2>
        <p>
          Agar ma'lumotlar xorijdagi xizmatlarga uzatilsa, ular tegishli
          himoya choralariga rioya qilgan holda qayta ishlanadi.
        </p>
      </section>

      <section id="privacy-13">
        <h2>13. Siyosatni yangilash</h2>
        <p>Siyosat istalgan vaqtda yangilanishi mumkin.</p>
      </section>

      <section id="privacy-14">
        <h2>14. Bog'lanish</h2>
        <p>
          <a href="mailto:privacy@huquqai.uz">privacy@huquqai.uz</a>
        </p>
      </section>

      <section id="privacy-15">
        <h2>15. Qo'llaniladigan huquq</h2>
        <p>
          Mazkur siyosat O'zbekiston Respublikasi qonunchiligiga muvofiq
          talqin qilinadi.
        </p>
      </section>
    </LegalPage>
  );
}

/* ══════════════════ AI DISCLAIMER ══════════════════ */
const DISCLAIMER_ITEMS = [
  "Huquq AI sun'iy intellekt texnologiyasidan foydalanadi.",
  "Barcha javoblar faqat axborot va tavsiya xarakteriga ega.",
  "Huquq AI advokat yoki davlat organi emas.",
  "Huquq AI javoblari rasmiy huquqiy xulosa hisoblanmaydi.",
  "Qonunchilik o'zgarishi sababli ayrim javoblar eskirishi mumkin.",
  "Muhim huquqiy masalalarda malakali yurist bilan maslahatlashing.",
  "Sud, prokuratura, ichki ishlar, soliq yoki boshqa davlat organlariga taqdim etiladigan hujjatlar AI javoblariga to'liq asoslanmasligi kerak.",
  "Huquq AI javoblari foydalanuvchi kiritgan ma'lumotlarga bog'liq.",
  "Noto'g'ri yoki to'liq bo'lmagan ma'lumot noto'g'ri javobga olib kelishi mumkin.",
  "Platforma favqulodda yoki hayot uchun xavfli vaziyatlarda foydalanish uchun mo'ljallanmagan.",
  "Platformadan foydalanish foydalanuvchining o'z mas'uliyati ostida amalga oshiriladi.",
  "Huquq AI qonunchilikdagi o'zgarishlarni imkon qadar tez yangilashga harakat qiladi, biroq doimiy ravishda dolzarblik kafolatlanmaydi.",
  "Rasmiy huquqiy manba sifatida amaldagi normativ-huquqiy hujjatlar ustuvor hisoblanadi.",
  "Platformadan foydalanish ushbu Disclaimer va Foydalanish Shartlariga rozilikni anglatadi.",
  "Agar ushbu shartlarga rozi bo'lmasangiz, platformadan foydalanishni to'xtatishingiz kerak.",
];

export function AIDisclaimer() {
  return (
    <LegalPage
      title="AI Disclaimer"
      sections={[{ id: "disclaimer", label: "Barcha bandlar" }]}
      current="/disclaimer"
    >
      <section id="disclaimer">
        <ol className={s.disclaimerList}>
          {DISCLAIMER_ITEMS.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      </section>
    </LegalPage>
  );
}
