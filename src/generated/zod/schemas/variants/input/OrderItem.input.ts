import * as z from 'zod';

// prettier-ignore
export const OrderItemInputSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    priceAtPurchase: z.number(),
    order: z.unknown(),
    product: z.unknown()
}).strict();

export type OrderItemInputType = z.infer<typeof OrderItemInputSchema>;
