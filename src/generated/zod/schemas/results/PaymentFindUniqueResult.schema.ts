import * as z from 'zod';
export const PaymentFindUniqueResultSchema = z.nullable(z.object({
  id: z.string(),
  userId: z.string(),
  orderId: z.string(),
  razorpayOrderId: z.string().optional(),
  razorpayPaymentId: z.string().optional(),
  signature: z.string().optional(),
  amount: z.number().int(),
  currency: z.string(),
  status: z.unknown(),
  createdAt: z.date(),
  user: z.unknown()
}));