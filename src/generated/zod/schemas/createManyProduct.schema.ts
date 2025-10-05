import * as z from 'zod';
import { ProductCreateManyInputObjectSchema as ProductCreateManyInputObjectSchema } from './objects/ProductCreateManyInput.schema';

export const ProductCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const ProductCreateManyZodSchema = z.object({ data: z.union([ ProductCreateManyInputObjectSchema, z.array(ProductCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();