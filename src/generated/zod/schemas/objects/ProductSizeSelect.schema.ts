import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  size: z.boolean().optional(),
  quantity: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  productId: z.boolean().optional()
}).strict();
export const ProductSizeSelectObjectSchema: z.ZodType<Prisma.ProductSizeSelect> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeSelect>;
export const ProductSizeSelectObjectZodSchema = makeSchema();
