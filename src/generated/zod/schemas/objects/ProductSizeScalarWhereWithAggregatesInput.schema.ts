import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSizeWithAggregatesFilterObjectSchema as EnumSizeWithAggregatesFilterObjectSchema } from './EnumSizeWithAggregatesFilter.schema';
import { SizeSchema } from '../enums/Size.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema'

const productsizescalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductSizeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductSizeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductSizeScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductSizeScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductSizeScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => EnumSizeWithAggregatesFilterObjectSchema), SizeSchema]).optional(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const ProductSizeScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.ProductSizeScalarWhereWithAggregatesInput> = productsizescalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.ProductSizeScalarWhereWithAggregatesInput>;
export const ProductSizeScalarWhereWithAggregatesInputObjectZodSchema = productsizescalarwherewithaggregatesinputSchema;
