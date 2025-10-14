import * as z from 'zod';
export const UserUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  cart: z.unknown().optional(),
  orders: z.array(z.unknown()),
  wishlists: z.array(z.unknown()),
  payments: z.array(z.unknown())
}));