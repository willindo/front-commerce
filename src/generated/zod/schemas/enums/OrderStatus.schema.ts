import * as z from 'zod';

export const OrderStatusSchema = z.enum(['PENDING', 'PROCESSING', 'SHIPPED', 'COMPLETED', 'CANCELLED'])

export type OrderStatus = z.infer<typeof OrderStatusSchema>;