// lib/api/axios.ts
import axios from "axios";

const isServer = typeof window === "undefined";
const isProd = process.env.NODE_ENV === "production";

export const api = axios.create({
  baseURL: isServer
    ? process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"
    : isProd
    ? process.env.NEXT_PUBLIC_API_URL
    : "http://localhost:3001",
  withCredentials: true, // ✅ critical for cookie-based JWT auth
});
