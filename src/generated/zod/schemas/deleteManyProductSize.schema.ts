import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './objects/ProductSizeWhereInput.schema';

export const ProductSizeDeleteManySchema: z.ZodType<Prisma.ProductSizeDeleteManyArgs> = z.object({ where: ProductSizeWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ProductSizeDeleteManyArgs>;

export const ProductSizeDeleteManyZodSchema = z.object({ where: ProductSizeWhereInputObjectSchema.optional() }).strict();