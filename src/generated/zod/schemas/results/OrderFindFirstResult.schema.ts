import * as z from 'zod';
export const OrderFindFirstResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  total: z.number(),
  status: z.unknown(),
  paymentId: z.string().optional(),
  paymentStatus: z.unknown(),
  address: z.unknown().optional(),
  notes: z.string().optional(),
  user: z.unknown(),
  items: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date()
}));