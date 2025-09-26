// lib/api.ts
import axios from "axios";
import { User } from "./types/user";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  withCredentials: true,
});

// ✅ Registration
export async function registerUser(payload: {
  email: string;
  password: string;
  name?: string;
}): Promise<User> {
  const res = await api.post("/auth/register", payload);
  return res.data;
}

// ✅ Login
export async function loginUser(payload: {
  email: string;
  password: string;
}): Promise<{ message: string; user: User }> {
  const res = await api.post("/auth/login", payload);
  return res.data;
}

// ✅ Profile
export async function fetchProfile(): Promise<User> {
  const res = await api.get("/auth/me"); // adjust when JWT ready
  return res.data;
}

export default api;
