import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional()
}).strict();
export const ProductSizeMinOrderByAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeMinOrderByAggregateInputObjectZodSchema = makeSchema();
