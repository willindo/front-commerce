import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  size: z.literal(true).optional(),
  quantity: z.literal(true).optional(),
  productId: z.literal(true).optional()
}).strict();
export const ProductSizeMaxAggregateInputObjectSchema: z.ZodType<Prisma.ProductSizeMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeMaxAggregateInputType>;
export const ProductSizeMaxAggregateInputObjectZodSchema = makeSchema();
