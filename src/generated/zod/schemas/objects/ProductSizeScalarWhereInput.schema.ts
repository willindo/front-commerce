import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSizeFilterObjectSchema as EnumSizeFilterObjectSchema } from './EnumSizeFilter.schema';
import { SizeSchema } from '../enums/Size.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema'

const productsizescalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductSizeScalarWhereInputObjectSchema), z.lazy(() => ProductSizeScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductSizeScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductSizeScalarWhereInputObjectSchema), z.lazy(() => ProductSizeScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => EnumSizeFilterObjectSchema), SizeSchema]).optional(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const ProductSizeScalarWhereInputObjectSchema: z.ZodType<Prisma.ProductSizeScalarWhereInput> = productsizescalarwhereinputSchema as unknown as z.ZodType<Prisma.ProductSizeScalarWhereInput>;
export const ProductSizeScalarWhereInputObjectZodSchema = productsizescalarwhereinputSchema;
