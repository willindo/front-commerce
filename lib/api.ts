// lib/api.ts
import axios from "axios";
import { User, Role } from "./types/users";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  withCredentials: true,
});

// --- AUTH ---
export async function registerUser(payload: {
  email: string;
  password: string;
  name?: string;
}): Promise<User> {
  const res = await api.post("/auth/register", payload);
  return res.data;
}

export async function loginUser(payload: {
  email: string;
  password: string;
}): Promise<{ message: string; user: User }> {
  const res = await api.post("/auth/login", payload);
  return res.data;
}

export async function fetchProfile(): Promise<User> {
  const res = await api.get("/auth/me");
  return res.data;
}

// --- USERS ---
export type PaginatedUsers = {
  data: User[];
  total: number;
  page: number;
  limit: number;
};

export async function fetchUsers(
  page = 1,
  limit = 10,
  role?: Role
): Promise<PaginatedUsers> {
  const params = { page, limit, ...(role ? { role } : {}) };
  const res = await api.get("/users", { params });
  return res.data;
}

export default api;
