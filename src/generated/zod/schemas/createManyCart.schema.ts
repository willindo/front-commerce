import * as z from 'zod';
import { CartCreateManyInputObjectSchema as CartCreateManyInputObjectSchema } from './objects/CartCreateManyInput.schema';

export const CartCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ CartCreateManyInputObjectSchema, z.array(CartCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const CartCreateManyZodSchema = z.object({ data: z.union([ CartCreateManyInputObjectSchema, z.array(CartCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();