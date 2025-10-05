import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ProductSizeOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ProductSizeOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeOrderByRelationAggregateInput>;
export const ProductSizeOrderByRelationAggregateInputObjectZodSchema = makeSchema();
