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

/* Interfeys tili — har so'rovga `?lang=` qo'shiladi (server matnni shu tilda qaytaradi). */
let lang = "uz";
export const setApiLang = (l) => {
  lang = l === "ru" ? "ru" : "uz";
};

/** Mini app (`/api/mini`) va saytning o'z API'si (darslar, testlar) — bitta token bilan. */
function client(baseURL) {
  const c = axios.create({ baseURL, timeout: 45000 });
  c.interceptors.request.use((cfg) => {
    if (token) cfg.headers.Authorization = `Bearer ${token}`;
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

/* Saytdagi BARCHA darslar va testlar — saytning endpointlari (tarif cheklovi,
   ruscha tarjima va progress sayt bilan umumiy). */
export const siteApi = {
  lessons: () => site.get("/lessons").then(data),
  lesson: (id) => site.get(`/lessons/${id}`).then(data),
  progress: () => site.get("/progress").then(data),
  completeLesson: (id) => site.post(`/progress/lesson/${id}/complete`).then(data),
  tests: () => site.get("/tests").then(data),
  test: (id) => site.get(`/tests/${id}`).then(data),
  answer: (id, i, choice) => site.post(`/tests/${id}/answer`, { i, choice }).then(data),
  submit: (id, answers) => site.post(`/tests/${id}/submit`, { answers }).then(data),
};

export const mini = {
  auth: (initData) => api.post("/auth", { initData }).then((r) => r.data),
  path: () => api.get("/path").then((r) => r.data),
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
  explain: (body) => api.post("/explain", body).then((r) => r.data),
  // Qalqonning ovozi — saytning keshlangan TTS'i (o'zbekcha neyron ovoz)
  speak: (text) =>
    axios
      .post(`${API_BASE}/voice/speak`, { text, lang }, { responseType: "arraybuffer", timeout: 20000, headers: token ? { Authorization: `Bearer ${token}` } : {} })
      .then((r) => r.data),
};
