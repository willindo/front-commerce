import * as z from 'zod';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { OrderCountOrderByAggregateInputObjectSchema as OrderCountOrderByAggregateInputObjectSchema } from './OrderCountOrderByAggregateInput.schema';
import { OrderAvgOrderByAggregateInputObjectSchema as OrderAvgOrderByAggregateInputObjectSchema } from './OrderAvgOrderByAggregateInput.schema';
import { OrderMaxOrderByAggregateInputObjectSchema as OrderMaxOrderByAggregateInputObjectSchema } from './OrderMaxOrderByAggregateInput.schema';
import { OrderMinOrderByAggregateInputObjectSchema as OrderMinOrderByAggregateInputObjectSchema } from './OrderMinOrderByAggregateInput.schema';
import { OrderSumOrderByAggregateInputObjectSchema as OrderSumOrderByAggregateInputObjectSchema } from './OrderSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  total: SortOrderSchema.optional(),
  status: SortOrderSchema.optional(),
  paymentId: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  paymentStatus: SortOrderSchema.optional(),
  address: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  notes: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  _count: z.lazy(() => OrderCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => OrderAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => OrderMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => OrderMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => OrderSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const OrderOrderByWithAggregationInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderOrderByWithAggregationInputObjectZodSchema = makeSchema();
