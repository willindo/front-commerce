import * as z from 'zod';
import { WishlistItemCreateManyInputObjectSchema as WishlistItemCreateManyInputObjectSchema } from './objects/WishlistItemCreateManyInput.schema';

export const WishlistItemCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ WishlistItemCreateManyInputObjectSchema, z.array(WishlistItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistItemCreateManyZodSchema = z.object({ data: z.union([ WishlistItemCreateManyInputObjectSchema, z.array(WishlistItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();