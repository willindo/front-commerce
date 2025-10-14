import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  userId: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  razorpayOrderId: z.literal(true).optional(),
  razorpayPaymentId: z.literal(true).optional(),
  signature: z.literal(true).optional(),
  amount: z.literal(true).optional(),
  currency: z.literal(true).optional(),
  status: z.literal(true).optional(),
  createdAt: z.literal(true).optional()
}).strict();
export const PaymentMaxAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentMaxAggregateInputObjectZodSchema = makeSchema();
