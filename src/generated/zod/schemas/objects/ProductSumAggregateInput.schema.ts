import * as z from 'zod';


const makeSchema = () => z.object({
  price: z.literal(true).optional(),
  stock: z.literal(true).optional()
}).strict();
export const ProductSumAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSumAggregateInputObjectZodSchema = makeSchema();
