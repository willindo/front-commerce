import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional(),
  priceAtPurchase: SortOrderSchema.optional()
}).strict();
export const OrderItemAvgOrderByAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
