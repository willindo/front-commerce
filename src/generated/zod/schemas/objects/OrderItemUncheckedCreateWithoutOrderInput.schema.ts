import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  quantity: z.number().int(),
  priceAtPurchase: z.number()
}).strict();
export const OrderItemUncheckedCreateWithoutOrderInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemUncheckedCreateWithoutOrderInputObjectZodSchema = makeSchema();
