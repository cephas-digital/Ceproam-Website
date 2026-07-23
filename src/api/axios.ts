import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../stores/auth.store.ts";

const api = axios.create({
  baseURL: "https://cepromas-backend-api.onrender.com",
});

// Attach token automatically
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = useAuthStore.getState().token;

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;
