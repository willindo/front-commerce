// lib/types/user.ts
export type Role = "ADMIN" | "CUSTOMER";

export type User = {
  id: string; // Prisma UUID
  email: string;
  name?: string | null;
  role: Role;
  createdAt: string; // Prisma DateTime -> ISO string
  updatedAt?: string; // optional if you include it later
};
