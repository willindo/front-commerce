import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional()
}).strict();
export const ProductSizeMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductSizeMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeMaxOrderByAggregateInput>;
export const ProductSizeMaxOrderByAggregateInputObjectZodSchema = makeSchema();
