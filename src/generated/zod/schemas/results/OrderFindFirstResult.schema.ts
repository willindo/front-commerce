import * as z from 'zod';
export const OrderFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  total: z.number(),
  status: z.unknown(),
  createdAt: z.date(),
  updatedAt: z.date(),
  user: z.unknown(),
  items: z.array(z.unknown())
}));