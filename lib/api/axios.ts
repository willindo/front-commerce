// lib/api/axios.ts
import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL ||
  (typeof window === "undefined"
    ? "http://localhost:3001" // for local SSR
    : "http://localhost:3001"); // fallback for browser dev

export const api = axios.create({
  baseURL,
  withCredentials: true,
});

console.log("[Axios] Base URL:", baseURL);

api.interceptors.request.use((config) => {
  const userId = localStorage.getItem("userId"); // dynamic
  if (userId) {
    config.headers["X-User-Id"] = userId;
  }
  return config;
});
