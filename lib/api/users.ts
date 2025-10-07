// lib/api/users.ts
import { User, Role } from "../types/users";
import { api } from "./axios";

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
  const { data } = await api.get("/users", { params });
  return data;
}

export async function fetchUserById(id: string): Promise<User> {
  const { data } = await api.get(`/users/${id}`);
  return data;
}
