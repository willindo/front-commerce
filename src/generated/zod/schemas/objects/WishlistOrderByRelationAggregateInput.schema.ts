import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const WishlistOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.WishlistOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistOrderByRelationAggregateInput>;
export const WishlistOrderByRelationAggregateInputObjectZodSchema = makeSchema();
