import * as z from 'zod';

// prettier-ignore
export const OrderItemResultSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    priceAtPurchase: z.number(),
    order: z.unknown(),
    product: z.unknown()
}).strict();

export type OrderItemResultType = z.infer<typeof OrderItemResultSchema>;
