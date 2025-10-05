import * as z from 'zod';
import { ProductSizeSelectObjectSchema as ProductSizeSelectObjectSchema } from './objects/ProductSizeSelect.schema';
import { ProductSizeCreateManyInputObjectSchema as ProductSizeCreateManyInputObjectSchema } from './objects/ProductSizeCreateManyInput.schema';

export const ProductSizeCreateManyAndReturnSchema: z.ZodType<any> = z.object({ select: ProductSizeSelectObjectSchema.optional(), data: z.union([ ProductSizeCreateManyInputObjectSchema, z.array(ProductSizeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const ProductSizeCreateManyAndReturnZodSchema = z.object({ select: ProductSizeSelectObjectSchema.optional(), data: z.union([ ProductSizeCreateManyInputObjectSchema, z.array(ProductSizeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();