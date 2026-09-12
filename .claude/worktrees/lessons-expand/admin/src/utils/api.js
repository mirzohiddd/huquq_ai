import axios from "axios";
import { API_BASE } from "./apiBase";

const api = axios.create({
  // Manzil avtomatik tanlanadi (lokal / server) — utils/apiBase.js
  baseURL: API_BASE,
  timeout: 20000,
});

api.interceptors.request.use((cfg) => {
  const token = localStorage.getItem("adminToken");
  if (token) cfg.headers.Authorization = `Bearer ${token}`;
  return cfg;
});


api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");
      window.location.href = "/login";
    }
    return Promise.reject(err);
  }
);

export default api;
