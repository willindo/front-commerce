import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductSizeCountOrderByAggregateInputObjectSchema as ProductSizeCountOrderByAggregateInputObjectSchema } from './ProductSizeCountOrderByAggregateInput.schema';
import { ProductSizeAvgOrderByAggregateInputObjectSchema as ProductSizeAvgOrderByAggregateInputObjectSchema } from './ProductSizeAvgOrderByAggregateInput.schema';
import { ProductSizeMaxOrderByAggregateInputObjectSchema as ProductSizeMaxOrderByAggregateInputObjectSchema } from './ProductSizeMaxOrderByAggregateInput.schema';
import { ProductSizeMinOrderByAggregateInputObjectSchema as ProductSizeMinOrderByAggregateInputObjectSchema } from './ProductSizeMinOrderByAggregateInput.schema';
import { ProductSizeSumOrderByAggregateInputObjectSchema as ProductSizeSumOrderByAggregateInputObjectSchema } from './ProductSizeSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  _count: z.lazy(() => ProductSizeCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => ProductSizeAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ProductSizeMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ProductSizeMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => ProductSizeSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ProductSizeOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ProductSizeOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeOrderByWithAggregationInput>;
export const ProductSizeOrderByWithAggregationInputObjectZodSchema = makeSchema();
