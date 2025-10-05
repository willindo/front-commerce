import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { ProductOrderByWithRelationInputObjectSchema as ProductOrderByWithRelationInputObjectSchema } from './ProductOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  size: SortOrderSchema.optional(),
  quantity: SortOrderSchema.optional(),
  productId: SortOrderSchema.optional(),
  product: z.lazy(() => ProductOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const ProductSizeOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.ProductSizeOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeOrderByWithRelationInput>;
export const ProductSizeOrderByWithRelationInputObjectZodSchema = makeSchema();
