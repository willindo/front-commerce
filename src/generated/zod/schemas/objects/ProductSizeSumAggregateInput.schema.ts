import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  quantity: z.literal(true).optional()
}).strict();
export const ProductSizeSumAggregateInputObjectSchema: z.ZodType<Prisma.ProductSizeSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeSumAggregateInputType>;
export const ProductSizeSumAggregateInputObjectZodSchema = makeSchema();
