import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const PaymentOrderByRelationAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentOrderByRelationAggregateInputObjectZodSchema = makeSchema();
