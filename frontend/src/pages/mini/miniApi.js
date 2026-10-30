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

const api = axios.create({ baseURL: `${API_BASE}/mini`, timeout: 45000 });
api.interceptors.request.use((cfg) => {
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});

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
      .post(`${API_BASE}/voice/speak`, { text, lang: "uz" }, { responseType: "arraybuffer", timeout: 20000, headers: token ? { Authorization: `Bearer ${token}` } : {} })
      .then((r) => r.data),
};
