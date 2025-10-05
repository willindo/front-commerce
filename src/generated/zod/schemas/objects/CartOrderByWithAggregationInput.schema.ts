import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { CartCountOrderByAggregateInputObjectSchema as CartCountOrderByAggregateInputObjectSchema } from './CartCountOrderByAggregateInput.schema';
import { CartMaxOrderByAggregateInputObjectSchema as CartMaxOrderByAggregateInputObjectSchema } from './CartMaxOrderByAggregateInput.schema';
import { CartMinOrderByAggregateInputObjectSchema as CartMinOrderByAggregateInputObjectSchema } from './CartMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => CartCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => CartMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => CartMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const CartOrderByWithAggregationInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartOrderByWithAggregationInputObjectZodSchema = makeSchema();
