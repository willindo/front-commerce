import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const CartOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.CartOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.CartOrderByRelationAggregateInput>;
export const CartOrderByRelationAggregateInputObjectZodSchema = makeSchema();
