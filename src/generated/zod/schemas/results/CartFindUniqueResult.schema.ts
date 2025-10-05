import * as z from 'zod';
export const CartFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  user: z.unknown(),
  userId: z.string(),
  items: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));