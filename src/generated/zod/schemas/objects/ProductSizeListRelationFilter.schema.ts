import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './ProductSizeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProductSizeWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProductSizeWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProductSizeWhereInputObjectSchema).optional()
}).strict();
export const ProductSizeListRelationFilterObjectSchema: z.ZodType<Prisma.ProductSizeListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeListRelationFilter>;
export const ProductSizeListRelationFilterObjectZodSchema = makeSchema();
