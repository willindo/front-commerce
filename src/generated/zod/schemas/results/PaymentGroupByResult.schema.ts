import * as z from 'zod';
export const PaymentGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  orderId: z.string(),
  razorpayOrderId: z.string(),
  razorpayPaymentId: z.string(),
  signature: z.string(),
  amount: z.number().int(),
  currency: z.string(),
  createdAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    orderId: z.number(),
    razorpayOrderId: z.number(),
    razorpayPaymentId: z.number(),
    signature: z.number(),
    amount: z.number(),
    currency: z.number(),
    status: z.number(),
    createdAt: z.number(),
    user: z.number()
  }).optional(),
  _sum: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    amount: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    orderId: z.string().nullable(),
    razorpayOrderId: z.string().nullable(),
    razorpayPaymentId: z.string().nullable(),
    signature: z.string().nullable(),
    amount: z.number().int().nullable(),
    currency: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    orderId: z.string().nullable(),
    razorpayOrderId: z.string().nullable(),
    razorpayPaymentId: z.string().nullable(),
    signature: z.string().nullable(),
    amount: z.number().int().nullable(),
    currency: z.string().nullable(),
    createdAt: z.date().nullable()
  }).nullable().optional()
}));