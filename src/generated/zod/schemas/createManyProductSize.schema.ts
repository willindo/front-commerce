import * as z from 'zod';
import { ProductSizeCreateManyInputObjectSchema as ProductSizeCreateManyInputObjectSchema } from './objects/ProductSizeCreateManyInput.schema';

export const ProductSizeCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ ProductSizeCreateManyInputObjectSchema, z.array(ProductSizeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const ProductSizeCreateManyZodSchema = z.object({ data: z.union([ ProductSizeCreateManyInputObjectSchema, z.array(ProductSizeCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();