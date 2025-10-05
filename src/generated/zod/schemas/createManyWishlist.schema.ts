import * as z from 'zod';
import { WishlistCreateManyInputObjectSchema as WishlistCreateManyInputObjectSchema } from './objects/WishlistCreateManyInput.schema';

export const WishlistCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ WishlistCreateManyInputObjectSchema, z.array(WishlistCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistCreateManyZodSchema = z.object({ data: z.union([ WishlistCreateManyInputObjectSchema, z.array(WishlistCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();