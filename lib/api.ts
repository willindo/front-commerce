// "use client";
// frontend/lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  withCredentials: true, // keep true if you later use cookies
});

export type User = {
  id: string;
  email: string;
  name?: string | null;
  role?: "ADMIN" | "CUSTOMER" | null;
};

export async function registerUser(payload: {
  email: string;
  password: string;
  name?: string;
}) {
  const res = await api.post("/auth/register", payload);
  // adapt to whatever backend returns
  return res.data;
}

export async function loginUser(payload: { email: string; password: string }) {
  const res = await api.post("/auth/login", payload);
  return res.data;
}

export async function fetchProfile() {
  // endpoint may be /auth/me or /users/me depending on your backend
  try {
    const res = await api.get("/auth/me");
    return res.data;
  } catch (e) {
    // fallback: some backends return the user in login response only
    throw e;
  }
}

export default api;
