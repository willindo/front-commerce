import * as z from 'zod';


const makeSchema = () => z.object({
  price: z.literal(true).optional(),
  stock: z.literal(true).optional()
}).strict();
export const ProductAvgAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductAvgAggregateInputObjectZodSchema = makeSchema();
