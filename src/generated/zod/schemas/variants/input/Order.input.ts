import * as z from 'zod';

import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const OrderInputSchema = z.object({
    id: z.string(),
    userId: z.string(),
    total: z.number(),
    status: OrderStatusSchema,
    paymentId: z.string().optional().nullable(),
    paymentStatus: PaymentStatusSchema,
    address: z.unknown().optional().nullable(),
    notes: z.string().optional().nullable(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrderInputType = z.infer<typeof OrderInputSchema>;
