import * as z from 'zod';

import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const PaymentModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    orderId: z.string(),
    razorpayOrderId: z.string().nullable(),
    razorpayPaymentId: z.string().nullable(),
    signature: z.string().nullable(),
    amount: z.number().int(),
    currency: z.string(),
    status: PaymentStatusSchema,
    createdAt: z.date(),
    user: z.unknown()
}).strict();

export type PaymentPureType = z.infer<typeof PaymentModelSchema>;
