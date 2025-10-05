import * as z from 'zod';
export const WishlistCreateResultSchema = z.object({
  id: z.string(),
  user: z.unknown(),
  userId: z.string(),
  items: z.array(z.unknown()),
  createdAt: z.date()
});