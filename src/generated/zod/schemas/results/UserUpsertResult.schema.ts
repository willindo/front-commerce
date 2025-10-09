import * as z from 'zod';
export const UserUpsertResultSchema = z.object({
  id: z.string(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional(),
  role: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  carts: z.unknown().optional(),
  orders: z.array(z.unknown()),
  wishlists: z.array(z.unknown())
});