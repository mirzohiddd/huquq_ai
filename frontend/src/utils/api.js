import axios from "axios";
import { API_BASE } from "./apiBase";
import { getDeviceId } from "./deviceId";

const api = axios.create({
  baseURL: API_BASE,
  timeout: 60000,
});

api.interceptors.request.use((config) => {
  // Brute-force himoyasi QURILMA bo'yicha ishlaydi (IP bo'yicha emas) —
  // aks holda umumiy Wi-Fi'dagi bitta xato butun tarmoqni bloklardi.
  config.headers["X-Device-Id"] = getDeviceId();
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  const lang = localStorage.getItem("lang") || "uz";
  config.headers["X-Lang"] = lang;
  if (!config.params || config.params.lang === undefined) {
    config.params = { ...(config.params || {}), lang };
  }

  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (!err.response) {
      err.response = {
        data: {
          error:
            err.code === "ECONNABORTED"
              ? "Server javob bermadi (vaqt tugadi). Internetni tekshiring va qayta urinib ko'ring."
              : "Serverga ulanib bo'lmadi. Internetni tekshiring va qayta urinib ko'ring.",
        },
      };
      return Promise.reject(err);
    }
    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      const path = window.location.pathname;

      const isPublic = [
        "/",
        "/about",
        "/services",
        "/articles",
        "/contact",
      ].includes(path);

      if (
        !isPublic &&
        !path.startsWith("/login") &&
        !path.startsWith("/register") &&
        !path.startsWith("/admin")
      ) {
        window.location.href = "/login";
      }
    }

    return Promise.reject(err);
  },
);

export default api;
