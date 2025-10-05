import * as z from 'zod';
import { CartSelectObjectSchema as CartSelectObjectSchema } from './objects/CartSelect.schema';
import { CartCreateManyInputObjectSchema as CartCreateManyInputObjectSchema } from './objects/CartCreateManyInput.schema';

export const CartCreateManyAndReturnSchema: z.ZodType<any> = z.object({ select: CartSelectObjectSchema.optional(), data: z.union([ CartCreateManyInputObjectSchema, z.array(CartCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const CartCreateManyAndReturnZodSchema = z.object({ select: CartSelectObjectSchema.optional(), data: z.union([ CartCreateManyInputObjectSchema, z.array(CartCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();