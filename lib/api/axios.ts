// lib/api/axios.ts
import axios from "axios";

const isServer = typeof window === "undefined";
const isProd = process.env.NODE_ENV === "production";

export const api = axios.create({
  baseURL: isServer
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001" // SSR
    : isProd
    ? process.env.NEXT_PUBLIC_API_URL // CSR in prod
    : "http://localhost:3001", // CSR dev
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const userId = localStorage.getItem("userId");
    if (userId) config.headers["X-User-Id"] = userId;
  }
  return config;
});
