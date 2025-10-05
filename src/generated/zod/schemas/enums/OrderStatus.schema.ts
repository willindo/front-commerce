import * as z from 'zod';

export const OrderStatusSchema = z.enum(['PENDING', 'PAID', 'SHIPPED', 'COMPLETED', 'CANCELLED'])

export type OrderStatus = z.infer<typeof OrderStatusSchema>;