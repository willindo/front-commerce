import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string(),
  productId: z.string(),
  quantity: z.number().int(),
  priceAtPurchase: z.number()
}).strict();
export const OrderItemCreateManyInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemCreateManyInputObjectZodSchema = makeSchema();
