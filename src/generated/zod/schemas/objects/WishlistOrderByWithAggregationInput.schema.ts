import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { WishlistCountOrderByAggregateInputObjectSchema as WishlistCountOrderByAggregateInputObjectSchema } from './WishlistCountOrderByAggregateInput.schema';
import { WishlistMaxOrderByAggregateInputObjectSchema as WishlistMaxOrderByAggregateInputObjectSchema } from './WishlistMaxOrderByAggregateInput.schema';
import { WishlistMinOrderByAggregateInputObjectSchema as WishlistMinOrderByAggregateInputObjectSchema } from './WishlistMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  _count: z.lazy(() => WishlistCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => WishlistMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => WishlistMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const WishlistOrderByWithAggregationInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistOrderByWithAggregationInputObjectZodSchema = makeSchema();
