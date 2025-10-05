import * as z from 'zod';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional(),
  priceAtPurchase: z.literal(true).optional()
}).strict();
export const OrderItemAvgAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemAvgAggregateInputObjectZodSchema = makeSchema();
