import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeSelectObjectSchema as ProductSizeSelectObjectSchema } from './objects/ProductSizeSelect.schema';
import { ProductSizeIncludeObjectSchema as ProductSizeIncludeObjectSchema } from './objects/ProductSizeInclude.schema';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './objects/ProductSizeWhereUniqueInput.schema';

export const ProductSizeDeleteOneSchema: z.ZodType<Prisma.ProductSizeDeleteArgs> = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), where: ProductSizeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductSizeDeleteArgs>;

export const ProductSizeDeleteOneZodSchema = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), where: ProductSizeWhereUniqueInputObjectSchema }).strict();