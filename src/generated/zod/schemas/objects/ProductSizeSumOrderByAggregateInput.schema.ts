import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const ProductSizeSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductSizeSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeSumOrderByAggregateInput>;
export const ProductSizeSumOrderByAggregateInputObjectZodSchema = makeSchema();
