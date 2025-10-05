import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  orderId: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  priceAtPurchase: z.literal(true).optional()
}).strict();
export const OrderItemMinAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemMinAggregateInputObjectZodSchema = makeSchema();
