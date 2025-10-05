import * as z from 'zod';

import { OrderStatusSchema } from '../../enums/OrderStatus.schema';
// prettier-ignore
export const OrderResultSchema = z.object({
    id: z.string(),
    userId: z.string(),
    total: z.number(),
    status: OrderStatusSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    user: z.unknown(),
    items: z.array(z.unknown())
}).strict();

export type OrderResultType = z.infer<typeof OrderResultSchema>;
