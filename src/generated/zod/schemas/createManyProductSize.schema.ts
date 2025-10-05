import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ProductSizeCreateManyInputObjectSchema as ProductSizeCreateManyInputObjectSchema } from './objects/ProductSizeCreateManyInput.schema';

export const ProductSizeCreateManySchema: z.ZodType<Prisma.ProductSizeCreateManyArgs> = z.object({ data: z.union([ ProductSizeCreateManyInputObjectSchema, z.array(ProductSizeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ProductSizeCreateManyArgs>;

export const ProductSizeCreateManyZodSchema = z.object({ data: z.union([ ProductSizeCreateManyInputObjectSchema, z.array(ProductSizeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();