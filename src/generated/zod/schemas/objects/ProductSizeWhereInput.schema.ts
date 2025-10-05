import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSizeFilterObjectSchema as EnumSizeFilterObjectSchema } from './EnumSizeFilter.schema';
import { SizeSchema } from '../enums/Size.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { ProductScalarRelationFilterObjectSchema as ProductScalarRelationFilterObjectSchema } from './ProductScalarRelationFilter.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const productsizewhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductSizeWhereInputObjectSchema), z.lazy(() => ProductSizeWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductSizeWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductSizeWhereInputObjectSchema), z.lazy(() => ProductSizeWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => EnumSizeFilterObjectSchema), SizeSchema]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  product: z.union([z.lazy(() => ProductScalarRelationFilterObjectSchema), z.lazy(() => ProductWhereInputObjectSchema)]).optional()
}).strict();
export const ProductSizeWhereInputObjectSchema: z.ZodType<Prisma.ProductSizeWhereInput> = productsizewhereinputSchema as unknown as z.ZodType<Prisma.ProductSizeWhereInput>;
export const ProductSizeWhereInputObjectZodSchema = productsizewhereinputSchema;
