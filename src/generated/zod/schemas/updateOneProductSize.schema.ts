import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeSelectObjectSchema as ProductSizeSelectObjectSchema } from './objects/ProductSizeSelect.schema';
import { ProductSizeIncludeObjectSchema as ProductSizeIncludeObjectSchema } from './objects/ProductSizeInclude.schema';
import { ProductSizeUpdateInputObjectSchema as ProductSizeUpdateInputObjectSchema } from './objects/ProductSizeUpdateInput.schema';
import { ProductSizeUncheckedUpdateInputObjectSchema as ProductSizeUncheckedUpdateInputObjectSchema } from './objects/ProductSizeUncheckedUpdateInput.schema';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './objects/ProductSizeWhereUniqueInput.schema';

export const ProductSizeUpdateOneSchema: z.ZodType<Prisma.ProductSizeUpdateArgs> = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), data: z.union([ProductSizeUpdateInputObjectSchema, ProductSizeUncheckedUpdateInputObjectSchema]), where: ProductSizeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductSizeUpdateArgs>;

export const ProductSizeUpdateOneZodSchema = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), data: z.union([ProductSizeUpdateInputObjectSchema, ProductSizeUncheckedUpdateInputObjectSchema]), where: ProductSizeWhereUniqueInputObjectSchema }).strict();