import * as z from 'zod';

import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
import { PaymentStatusSchema } from '../../enums/PaymentStatus.schema';
// prettier-ignore
export const OrderModelSchema = z.object({
    id: z.string(),
    userId: z.string(),
    total: z.number(),
    status: OrderStatusSchema,
    paymentId: z.string().nullable(),
    paymentStatus: PaymentStatusSchema,
    address: z.unknown().nullable(),
    notes: z.string().nullable(),
    user: z.unknown(),
    items: z.array(z.unknown()),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OrderPureType = z.infer<typeof OrderModelSchema>;
