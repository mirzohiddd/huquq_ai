"use strict";
/**
 * Ochiq qonun sahifalarining uslubi.
 *
 * ⚠️ Sahifaga INLINE `<style>` sifatida qo'yiladi (alohida CSS fayl
 * emas): backend statik fayl bermaydi va qo'shimcha so'rov sahifa
 * ochilishini sekinlashtirardi. Hajmi kichik (~4 KB), gzip bilan ~1 KB.
 *
 * Palitra asosiy sayt bilan bir xil: navy #0b1322, oltin #c58b1c.
 */
const CSS = `
:root{
  --navy:#0b1322; --navy-2:#16233c; --gold:#c58b1c; --gold-soft:#e8c375;
  --ink:#0f172a; --muted:#5b6a83; --line:#e6e9f0; --bg:#fbfaf7; --card:#fff;
  --radius:14px;
}
*{box-sizing:border-box}
body{margin:0;background:var(--bg);color:var(--ink);
  font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
  line-height:1.65;overflow-wrap:break-word}
a{color:inherit}
.wrap{max-width:1080px;margin:0 auto;padding:0 20px}

/* ── Yuqori panel ── */
.nav{background:var(--navy);color:#fff;position:sticky;top:0;z-index:10;
  box-shadow:0 1px 0 rgba(255,255,255,.08)}
.nav .wrap{display:flex;align-items:center;gap:16px;height:62px}
.brand{display:flex;align-items:center;gap:10px;font-weight:700;
  letter-spacing:.04em;text-decoration:none;font-size:15px}
.brand img{width:32px;height:32px;border-radius:8px;background:#fdfbf4}
.nav-sp{flex:1}
.nav a.navlink{color:#c9d3e4;text-decoration:none;font-size:14px}
.nav a.navlink:hover{color:var(--gold-soft)}
.nav .cta{background:linear-gradient(135deg,var(--gold),#b8770a);color:#101a2e;
  padding:8px 16px;border-radius:8px;font-weight:600;font-size:14px;
  text-decoration:none;white-space:nowrap}

/* ── Hero ── */
.hero{background:radial-gradient(120% 130% at 10% 0%,var(--navy-2),var(--navy));
  color:#fff;padding:44px 0 40px}
.hero h1{margin:10px 0 12px;font-size:clamp(23px,3.6vw,38px);line-height:1.18;
  font-weight:700;letter-spacing:-.4px}
.hero p{margin:0;color:#b9c6dc;max-width:760px;font-size:15.5px}
.eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;
  font-weight:600;letter-spacing:.13em;text-transform:uppercase;
  color:var(--gold-soft);border:1px solid rgba(197,139,28,.45);
  background:rgba(197,139,28,.12);padding:6px 13px;border-radius:999px}
.meta{margin-top:18px;display:flex;flex-wrap:wrap;gap:10px}
.chip{background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16);
  color:#dbe4f2;padding:6px 12px;border-radius:999px;font-size:13px;
  text-decoration:none}
.chip:hover{border-color:var(--gold)}

/* ── Non ushlagich (breadcrumb) ── */
.crumbs{font-size:13px;color:#9fb0c9}
.crumbs a{color:#c4d1e4;text-decoration:none}
.crumbs a:hover{color:var(--gold-soft)}
.crumbs span{opacity:.55;margin:0 6px}

/* ── Asosiy qism ── */
main{padding:34px 0 56px}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);
  padding:26px 28px;box-shadow:0 1px 2px rgba(15,23,42,.04),0 10px 30px rgba(15,23,42,.05)}
.card+.card{margin-top:18px}
.artText{font-size:16.5px;white-space:pre-wrap}
.artText p{margin:0 0 14px}
h2{font-size:19px;margin:0 0 14px;font-weight:650}
.sub{color:var(--muted);font-size:14px;margin:0 0 18px}

/* ── Moddalar ro'yxati ── */
.chapter{margin-top:26px}
.chapter h3{font-size:14px;text-transform:uppercase;letter-spacing:.07em;
  color:var(--muted);font-weight:650;margin:0 0 10px;padding-bottom:8px;
  border-bottom:1px solid var(--line)}
ul.arts{list-style:none;margin:0;padding:0;display:grid;gap:2px;
  grid-template-columns:repeat(auto-fill,minmax(320px,1fr))}
ul.arts a{display:block;padding:9px 12px;border-radius:9px;text-decoration:none;
  font-size:14.5px;color:var(--ink);transition:background .15s}
ul.arts a:hover{background:#f4f1e9}
ul.arts b{color:var(--gold);font-weight:650;margin-right:7px}

/* ── Kodeks kartalari ── */
.grid{display:grid;gap:14px;grid-template-columns:repeat(auto-fill,minmax(280px,1fr))}
.lawCard{display:block;text-decoration:none;background:var(--card);
  border:1px solid var(--line);border-radius:var(--radius);padding:18px 20px;
  transition:transform .18s,box-shadow .18s,border-color .18s}
.lawCard:hover{transform:translateY(-2px);border-color:var(--gold);
  box-shadow:0 10px 26px rgba(15,23,42,.09)}
.lawCard .code{display:inline-block;font-size:11.5px;font-weight:700;
  letter-spacing:.08em;color:var(--gold);background:rgba(197,139,28,.1);
  border-radius:6px;padding:3px 8px;margin-bottom:9px}
.lawCard h3{margin:0 0 6px;font-size:16px;font-weight:650;line-height:1.35}
.lawCard span{color:var(--muted);font-size:13px}

/* ── Navigatsiya (oldingi/keyingi) ── */
.pager{display:flex;gap:12px;margin-top:18px;flex-wrap:wrap}
.pager a{flex:1;min-width:210px;text-decoration:none;border:1px solid var(--line);
  background:var(--card);border-radius:12px;padding:13px 16px}
.pager a:hover{border-color:var(--gold)}
.pager small{display:block;color:var(--muted);font-size:12px;margin-bottom:3px}
.pager b{font-weight:600;font-size:14.5px}

/* ── CTA ── */
.ctaBox{margin-top:22px;background:linear-gradient(135deg,var(--navy),var(--navy-2));
  color:#fff;border-radius:var(--radius);padding:28px}
.ctaBox h2{color:#fff;margin:0 0 8px}
.ctaBox p{color:#b9c6dc;margin:0 0 18px;font-size:15px}
.ctaBox a{display:inline-block;background:linear-gradient(135deg,var(--gold),#b8770a);
  color:#101a2e;font-weight:700;padding:12px 26px;border-radius:9px;
  text-decoration:none}

/* ── Savol-javob markazi (AEO) ── */
.lede{font-size:16.5px!important;color:#c9d5e8!important}
.answerBox{background:linear-gradient(180deg,#fffdf6,#fff);
  border:1px solid rgba(197,139,28,.4);border-left:4px solid var(--gold);
  border-radius:var(--radius);padding:22px 24px;margin-bottom:18px}
.answerBox .lbl{display:block;font-size:11.5px;font-weight:700;
  letter-spacing:.12em;text-transform:uppercase;color:#a06f0c;margin-bottom:8px}
.answerBox p{margin:0;font-size:17px;line-height:1.6;font-weight:500}
.lawQuote{border-left:3px solid var(--gold);padding:2px 0 2px 14px;margin:0 0 16px}
.lawQuote a{color:var(--gold);font-weight:650;text-decoration:none;font-size:14px}
.lawQuote a:hover{text-decoration:underline}
.lawQuote blockquote{margin:6px 0 0;font-style:italic;color:#3d4a60;font-size:14.5px}
.qaList{list-style:none;margin:0;padding:0;display:grid;gap:10px}
.qaList a{display:block;text-decoration:none;color:var(--ink);
  background:var(--card);border:1px solid var(--line);border-radius:12px;
  padding:14px 18px;font-size:15.5px;transition:border-color .15s,transform .15s}
.qaList a:hover{border-color:var(--gold);transform:translateX(2px)}
.areaNav{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:22px}
.areaNav a{text-decoration:none;font-size:13.5px;color:var(--ink);
  background:var(--card);border:1px solid var(--line);border-radius:999px;
  padding:7px 15px}
.areaNav a:hover{border-color:var(--gold);color:#a06f0c}

/* ── Pastki qism ── */
.note{margin-top:20px;font-size:13px;color:var(--muted);
  border-left:3px solid var(--gold);padding-left:13px}
footer{background:var(--navy);color:#8fa0ba;padding:26px 0;font-size:13.5px}
footer a{color:#c4d1e4;text-decoration:none;margin-right:16px}
footer a:hover{color:var(--gold-soft)}
.srOnly{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);
  white-space:nowrap}

@media(max-width:640px){
  .nav .wrap{height:56px;gap:10px}
  .nav a.navlink{display:none}
  .hero{padding:30px 0 28px}
  .card{padding:20px 18px}
  ul.arts{grid-template-columns:1fr}
  .artText{font-size:15.5px}
}
`;

module.exports = { CSS };
