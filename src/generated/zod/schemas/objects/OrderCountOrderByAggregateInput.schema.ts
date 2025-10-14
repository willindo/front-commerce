import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentId: SortOrderSchema.optional(),
  paymentStatus: SortOrderSchema.optional(),
  address: SortOrderSchema.optional(),
  notes: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional()
}).strict();
export const OrderCountOrderByAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderCountOrderByAggregateInputObjectZodSchema = makeSchema();
