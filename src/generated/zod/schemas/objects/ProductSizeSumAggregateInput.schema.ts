import * as z from 'zod';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const ProductSizeSumAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeSumAggregateInputObjectZodSchema = makeSchema();
