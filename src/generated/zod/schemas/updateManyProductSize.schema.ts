import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeUpdateManyMutationInputObjectSchema as ProductSizeUpdateManyMutationInputObjectSchema } from './objects/ProductSizeUpdateManyMutationInput.schema';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './objects/ProductSizeWhereInput.schema';

export const ProductSizeUpdateManySchema: z.ZodType<Prisma.ProductSizeUpdateManyArgs> = z.object({ data: ProductSizeUpdateManyMutationInputObjectSchema, where: ProductSizeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductSizeUpdateManyArgs>;

export const ProductSizeUpdateManyZodSchema = z.object({ data: ProductSizeUpdateManyMutationInputObjectSchema, where: ProductSizeWhereInputObjectSchema.optional() }).strict();