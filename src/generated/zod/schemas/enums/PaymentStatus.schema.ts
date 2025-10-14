import * as z from 'zod';

export const PaymentStatusSchema = z.enum(['PENDING', 'PAID', 'FAILED', 'REFUNDED'])

export type PaymentStatus = z.infer<typeof PaymentStatusSchema>;