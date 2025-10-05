import * as z from 'zod';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  size: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  productId: z.literal(true).optional()
}).strict();
export const ProductSizeMaxAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeMaxAggregateInputObjectZodSchema = makeSchema();
