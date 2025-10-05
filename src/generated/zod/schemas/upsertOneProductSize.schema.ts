import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeSelectObjectSchema as ProductSizeSelectObjectSchema } from './objects/ProductSizeSelect.schema';
import { ProductSizeIncludeObjectSchema as ProductSizeIncludeObjectSchema } from './objects/ProductSizeInclude.schema';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './objects/ProductSizeWhereUniqueInput.schema';
import { ProductSizeCreateInputObjectSchema as ProductSizeCreateInputObjectSchema } from './objects/ProductSizeCreateInput.schema';
import { ProductSizeUncheckedCreateInputObjectSchema as ProductSizeUncheckedCreateInputObjectSchema } from './objects/ProductSizeUncheckedCreateInput.schema';
import { ProductSizeUpdateInputObjectSchema as ProductSizeUpdateInputObjectSchema } from './objects/ProductSizeUpdateInput.schema';
import { ProductSizeUncheckedUpdateInputObjectSchema as ProductSizeUncheckedUpdateInputObjectSchema } from './objects/ProductSizeUncheckedUpdateInput.schema';

export const ProductSizeUpsertOneSchema: z.ZodType<Prisma.ProductSizeUpsertArgs> = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), where: ProductSizeWhereUniqueInputObjectSchema, create: z.union([ ProductSizeCreateInputObjectSchema, ProductSizeUncheckedCreateInputObjectSchema ]), update: z.union([ ProductSizeUpdateInputObjectSchema, ProductSizeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ProductSizeUpsertArgs>;

export const ProductSizeUpsertOneZodSchema = z.object({ select: ProductSizeSelectObjectSchema.optional(), include: ProductSizeIncludeObjectSchema.optional(), where: ProductSizeWhereUniqueInputObjectSchema, create: z.union([ ProductSizeCreateInputObjectSchema, ProductSizeUncheckedCreateInputObjectSchema ]), update: z.union([ ProductSizeUpdateInputObjectSchema, ProductSizeUncheckedUpdateInputObjectSchema ]) }).strict();