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
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });
  if (role) params.append("role", role);

  const res = await fetch(
    // `https://backnest-vpjt.onrender.com/users?${params.toString()}`
    `${api}/users?${params.toString()}`
  );
  if (!res.ok) throw new Error("Failed to fetch users");
  return res.json();
}
