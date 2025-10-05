import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const ProductSizeAvgAggregateInputObjectSchema: z.ZodType<Prisma.ProductSizeAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeAvgAggregateInputType>;
export const ProductSizeAvgAggregateInputObjectZodSchema = makeSchema();
