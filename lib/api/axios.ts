// lib/api/axios.ts
import axios from "axios";

const isServer = typeof window === "undefined";
const isProd = process.env.NODE_ENV === "production";

const baseURL = isProd
  ? "https://backnest-vpjt.onrender.com"
  : isServer
  ? "http://localhost:3001"
  : "http://localhost:3001";

export const api = axios.create({ baseURL, withCredentials: true });

api.interceptors.request.use((config) => {
  const userId = localStorage.getItem("userId"); // dynamic
  if (userId) {
    config.headers["X-User-Id"] = userId;
  }
  return config;
});
