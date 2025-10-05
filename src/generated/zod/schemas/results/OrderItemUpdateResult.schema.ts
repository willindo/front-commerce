import * as z from 'zod';
export const OrderItemUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  priceAtPurchase: z.number(),
  order: z.unknown(),
  product: z.unknown()
}));