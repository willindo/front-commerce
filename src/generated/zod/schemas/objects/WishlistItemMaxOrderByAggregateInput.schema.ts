import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  wishlistId: SortOrderSchema.optional()
}).strict();
export const WishlistItemMaxOrderByAggregateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemMaxOrderByAggregateInputObjectZodSchema = makeSchema();
