import * as z from 'zod';
import { CartItemCreateManyInputObjectSchema as CartItemCreateManyInputObjectSchema } from './objects/CartItemCreateManyInput.schema';

export const CartItemCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ CartItemCreateManyInputObjectSchema, z.array(CartItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const CartItemCreateManyZodSchema = z.object({ data: z.union([ CartItemCreateManyInputObjectSchema, z.array(CartItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();