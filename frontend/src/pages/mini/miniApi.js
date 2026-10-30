/**
 * MINI APP API — alohida axios nusxasi.
 *
 * ⚠️ Token saytning `localStorage.token` iga YOZILMAYDI: mini app Telegram
 * hisobiga bog'langan, saytdagi boshqa hisob bilan aralashmasin. Token
 * xotirada (va sahifa yangilansa — sessionStorage'da) turadi.
 */
import axios from "axios";
import { API_BASE } from "../../utils/apiBase";

const KEY = "miniToken";
let token = null;
try {
  token = sessionStorage.getItem(KEY);
} catch {
  /* yopiq saqlash — xotirada ishlaydi */
}

export function setToken(t) {
  token = t;
  try {
    if (t) sessionStorage.setItem(KEY, t);
    else sessionStorage.removeItem(KEY);
  } catch {
    /* e'tiborsiz */
  }
}
export const hasToken = () => !!token;

/* Qurilma ID'si — admin analitikasi uchun (har qurilma BIR marta sanaladi).
   Shu qurilmada bir marta yaratiladi va saqlanadi; shaxsiy ma'lumot emas. */
const DEVICE_KEY = "miniDevice";
const deviceId = (() => {
  try {
    let id = localStorage.getItem(DEVICE_KEY);
    if (!id || !/^[A-Za-z0-9-]{16,64}$/.test(id)) {
      id = crypto.randomUUID ? crypto.randomUUID() : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 14)}`;
      localStorage.setItem(DEVICE_KEY, id);
    }
    return id;
  } catch {
    return "";
  }
})();

/* Kirish javobi kelguncha boshqa so'rovlar KUTADI (keshdagi yo'l darhol
   chizilganda foydalanuvchi tokendan oldin darsni bosib qo'yishi mumkin). */
let authWait = Promise.resolve();

/* Interfeys tili — har so'rovga `?lang=` qo'shiladi (server matnni shu tilda qaytaradi). */
let lang = "uz";
export const apiLang = () => lang;
export const setApiLang = (l) => {
  lang = l === "ru" ? "ru" : "uz";
  pre.clear(); // oldindan olingan dars eski tilda qolmasin
};

/** Mini app (`/api/mini`) va saytning o'z API'si (darslar, testlar) — bitta token bilan. */
function client(baseURL) {
  const c = axios.create({ baseURL, timeout: 45000 });
  c.interceptors.request.use(async (cfg) => {
    if (cfg.url !== "/auth") await authWait;
    if (token) cfg.headers.Authorization = `Bearer ${token}`;
    if (deviceId && baseURL.endsWith("/mini")) cfg.headers["X-Mini-Device"] = deviceId;
    cfg.params = { ...cfg.params, lang };
    return cfg;
  });
  /* Mobil internet bir lahza uzilsa — o'qish (GET) so'rovi 2 marta qayta yuboriladi.
     POST takrorlanmaydi: javob/XP ikki marta yozilib qolmasin. */
  c.interceptors.response.use(undefined, async (err) => {
    const cfg = err.config;
    if (!cfg || err.response || cfg.method !== "get" || (cfg._retry || 0) >= 2) throw err;
    cfg._retry = (cfg._retry || 0) + 1;
    await new Promise((r) => setTimeout(r, 1500 * cfg._retry));
    return c(cfg);
  });
  return c;
}
const api = client(`${API_BASE}/mini`);
const site = client(API_BASE);
const data = (r) => r.data;

/* Tariflar va to'lov — saytning o'z endpointlari (narx/limit bitta joyda: config/plans.js) */
export const siteApi = {
  plans: () => site.get("/payment/plans").then(data),
  plan: () => site.get("/payment/plan").then(data),
  checkout: (body) => site.post("/payment/checkout", body).then(data),
  testConfirm: (body) => site.post("/payment/test/confirm", body).then(data),
};

/* Joriy dars ma'lumoti yo'l ochilganda oldindan olinadi (bir marta ishlatiladi, 5 daqiqa) */
const pre = new Map();
const prefetchLesson = (id) => {
  if (!id || pre.has(id)) return;
  const p = api.get(`/c/${id}`).then(data);
  p.catch(() => pre.delete(id));
  pre.set(id, { p, at: Date.now() });
};
const takeLesson = (id) => {
  const x = pre.get(id);
  pre.delete(id);
  return x && Date.now() - x.at < 5 * 60 * 1000 ? x.p.catch(() => api.get(`/c/${id}`).then(data)) : api.get(`/c/${id}`).then(data);
};

export const mini = {
  // course berilsa javobda yo'l ham keladi (ikkinchi so'rov kutilmaydi)
  auth: (initData, course) => {
    const app = window.Telegram?.WebApp;
    const p = api.post("/auth", { initData, course: course ?? "", platform: app?.platform || "", version: app?.version || "" }).then((r) => {
      if (r.data.token) setToken(r.data.token);
      return r.data;
    });
    authWait = p.catch(() => {});
    return p;
  },
  prefetchLesson,
  path: (course) => api.get("/path", { params: { course } }).then((r) => r.data),
  courseLesson: takeLesson,
  courseAnswer: (id, i, option) => api.post(`/c/${id}/answer`, { i, option }).then(data),
  courseComplete: (id) => api.post(`/c/${id}/complete`).then(data),
  chest: (unit) => api.post(`/chest/${unit}`).then(data),
  order: (body) => api.post("/order", body).then(data),
  lesson: (id) => api.get(`/lesson/${id}`).then((r) => r.data),
  choice: (id, option) => api.post(`/lesson/${id}/choice`, { option }).then((r) => r.data),
  game: (id, body) => api.post(`/lesson/${id}/game`, body).then((r) => r.data),
  complete: (id, body) => api.post(`/lesson/${id}/complete`, body).then((r) => r.data),
  situations: () => api.get("/situations").then((r) => r.data),
  situation: (id) => api.get(`/situation/${id}`).then((r) => r.data),
  step: (id, step, option) => api.post(`/situation/${id}/step`, { step, option }).then((r) => r.data),
  finish: (id, answers) => api.post(`/situation/${id}/finish`, { answers }).then((r) => r.data),
  review: () => api.get("/review").then((r) => r.data),
  reviewAnswer: (key, option) => api.post("/review/answer", { key, option }).then((r) => r.data),
  me: () => api.get("/me").then((r) => r.data),
  goal: (goal) => api.post("/goal", { goal }).then((r) => r.data),
  rating: () => api.get("/rating").then((r) => r.data),
  exam: (unit) => api.get(`/exam/${unit}`).then((r) => r.data),
  examAnswer: (unit, key, option) => api.post(`/exam/${unit}/answer`, { key, option }).then((r) => r.data),
  examFinish: (unit, answers) => api.post(`/exam/${unit}/finish`, { answers }).then((r) => r.data),
  explain: (body) => api.post("/explain", body).then((r) => r.data),
  // Qalqonning ovozi — saytning keshlangan TTS'i (o'zbekcha neyron ovoz)
  speak: (text) =>
    axios
      .post(`${API_BASE}/voice/speak`, { text, lang }, { responseType: "arraybuffer", timeout: 20000, headers: token ? { Authorization: `Bearer ${token}` } : {} })
      .then((r) => r.data),
};
