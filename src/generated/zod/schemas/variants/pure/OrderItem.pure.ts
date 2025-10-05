import * as z from 'zod';

// prettier-ignore
export const OrderItemModelSchema = z.object({
    id: z.string(),
    orderId: z.string(),
    productId: z.string(),
    quantity: z.number().int(),
    priceAtPurchase: z.number(),
    order: z.unknown(),
    product: z.unknown()
}).strict();

export type OrderItemModelType = z.infer<typeof OrderItemModelSchema>;
