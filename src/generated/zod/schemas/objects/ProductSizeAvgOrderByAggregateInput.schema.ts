import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  quantity: SortOrderSchema.optional()
}).strict();
export const ProductSizeAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ProductSizeAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeAvgOrderByAggregateInput>;
export const ProductSizeAvgOrderByAggregateInputObjectZodSchema = makeSchema();
