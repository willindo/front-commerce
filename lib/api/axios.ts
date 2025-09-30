// lib/api/axios.ts
import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  withCredentials: true, // keep cookies/auth headers consistent
});
api.interceptors.request.use((config) => {
  const userId = localStorage.getItem("userId"); // dynamic
  if (userId) {
    config.headers["X-User-Id"] = userId;
  }
  return config;
});
