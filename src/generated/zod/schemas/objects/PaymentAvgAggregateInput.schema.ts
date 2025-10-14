import * as z from 'zod';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const PaymentAvgAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentAvgAggregateInputObjectZodSchema = makeSchema();
