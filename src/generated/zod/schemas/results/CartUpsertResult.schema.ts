import * as z from 'zod';
export const CartUpsertResultSchema = z.object({
  id: z.string(),
  user: z.unknown(),
  userId: z.string(),
  items: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
});