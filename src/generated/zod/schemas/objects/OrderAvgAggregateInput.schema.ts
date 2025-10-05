import * as z from 'zod';


const makeSchema = () => z.object({
  total: z.literal(true).optional()
}).strict();
export const OrderAvgAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderAvgAggregateInputObjectZodSchema = makeSchema();
