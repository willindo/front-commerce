import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeSelectObjectSchema as ProductSizeSelectObjectSchema } from './objects/ProductSizeSelect.schema';
import { ProductSizeIncludeObjectSchema as ProductSizeIncludeObjectSchema } from './objects/ProductSizeInclude.schema';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './objects/ProductSizeWhereUniqueInput.schema';

export const ProductSizeFindUniqueOrThrowSchema: z.ZodType<Prisma.ProductSizeFindUniqueOrThrowArgs> = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), where: ProductSizeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ProductSizeFindUniqueOrThrowArgs>;

export const ProductSizeFindUniqueOrThrowZodSchema = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), where: ProductSizeWhereUniqueInputObjectSchema }).strict();