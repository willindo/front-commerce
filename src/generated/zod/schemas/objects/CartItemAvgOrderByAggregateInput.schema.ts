import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional(),
  productPrice: SortOrderSchema.optional()
}).strict();
export const CartItemAvgOrderByAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemAvgOrderByAggregateInputObjectZodSchema = makeSchema();
