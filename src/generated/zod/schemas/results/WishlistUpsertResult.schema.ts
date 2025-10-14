import * as z from 'zod';
export const WishlistUpsertResultSchema = z.object({
  id: z.string(),
  userId: z.string(),
  user: z.unknown(),
  items: z.array(z.unknown()),
  createdAt: z.date()
});