import * as z from 'zod';

import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const PaymentInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    orderId: z.string(),
    razorpayOrderId: z.string().optional().nullable(),
    razorpayPaymentId: z.string().optional().nullable(),
    signature: z.string().optional().nullable(),
    amount: z.number().int(),
    currency: z.string(),
    status: PaymentStatusSchema,
    createdAt: z.date(),
    user: z.unknown()
}).strict();

export type PaymentInputType = z.infer<typeof PaymentInputSchema>;
