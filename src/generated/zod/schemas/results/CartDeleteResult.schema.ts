import * as z from 'zod';
export const CartDeleteResultSchema = z.nullable(z.object({
  id: z.string(),
  user: z.unknown(),
  userId: z.string(),
  items: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));