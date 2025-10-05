import * as z from 'zod';


const makeSchema = () => z.object({
  total: z.literal(true).optional()
}).strict();
export const OrderSumAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderSumAggregateInputObjectZodSchema = makeSchema();
