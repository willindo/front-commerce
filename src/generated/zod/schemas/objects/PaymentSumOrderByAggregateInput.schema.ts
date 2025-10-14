import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  amount: SortOrderSchema.optional()
}).strict();
export const PaymentSumOrderByAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentSumOrderByAggregateInputObjectZodSchema = makeSchema();
