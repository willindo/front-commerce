import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { OrderItemCountOrderByAggregateInputObjectSchema as OrderItemCountOrderByAggregateInputObjectSchema } from './OrderItemCountOrderByAggregateInput.schema';
import { OrderItemAvgOrderByAggregateInputObjectSchema as OrderItemAvgOrderByAggregateInputObjectSchema } from './OrderItemAvgOrderByAggregateInput.schema';
import { OrderItemMaxOrderByAggregateInputObjectSchema as OrderItemMaxOrderByAggregateInputObjectSchema } from './OrderItemMaxOrderByAggregateInput.schema';
import { OrderItemMinOrderByAggregateInputObjectSchema as OrderItemMinOrderByAggregateInputObjectSchema } from './OrderItemMinOrderByAggregateInput.schema';
import { OrderItemSumOrderByAggregateInputObjectSchema as OrderItemSumOrderByAggregateInputObjectSchema } from './OrderItemSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  orderId: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  priceAtPurchase: SortOrderSchema.optional(),
  _count: z.lazy(() => OrderItemCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrderItemAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrderItemMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrderItemMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrderItemSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrderItemOrderByWithAggregationInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemOrderByWithAggregationInputObjectZodSchema = makeSchema();
