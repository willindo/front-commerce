import * as z from 'zod';
export const UserCreateResultSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  carts: z.array(z.unknown()),
  orders: z.array(z.unknown()),
  wishlists: z.array(z.unknown())
});