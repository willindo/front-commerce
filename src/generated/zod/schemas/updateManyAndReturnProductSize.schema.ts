import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeSelectObjectSchema as ProductSizeSelectObjectSchema } from './objects/ProductSizeSelect.schema';
import { ProductSizeUpdateManyMutationInputObjectSchema as ProductSizeUpdateManyMutationInputObjectSchema } from './objects/ProductSizeUpdateManyMutationInput.schema';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './objects/ProductSizeWhereInput.schema';

export const ProductSizeUpdateManyAndReturnSchema: z.ZodType<Prisma.ProductSizeUpdateManyAndReturnArgs> = z.object({ select: ProductSizeSelectObjectSchema.optional(), data: ProductSizeUpdateManyMutationInputObjectSchema, where: ProductSizeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductSizeUpdateManyAndReturnArgs>;

export const ProductSizeUpdateManyAndReturnZodSchema = z.object({ select: ProductSizeSelectObjectSchema.optional(), data: ProductSizeUpdateManyMutationInputObjectSchema, where: ProductSizeWhereInputObjectSchema.optional() }).strict();