import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  size: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  productId: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const ProductSizeCountAggregateInputObjectSchema: z.ZodType<Prisma.ProductSizeCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeCountAggregateInputType>;
export const ProductSizeCountAggregateInputObjectZodSchema = makeSchema();
