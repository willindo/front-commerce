import * as z from 'zod';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const ProductSizeAvgAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeAvgAggregateInputObjectZodSchema = makeSchema();
