import * as z from 'zod';


const makeSchema = () => z.object({
  amount: z.literal(true).optional()
}).strict();
export const PaymentSumAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentSumAggregateInputObjectZodSchema = makeSchema();
