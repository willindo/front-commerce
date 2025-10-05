import * as z from 'zod';
import { WishlistSelectObjectSchema as WishlistSelectObjectSchema } from './objects/WishlistSelect.schema';
import { WishlistCreateManyInputObjectSchema as WishlistCreateManyInputObjectSchema } from './objects/WishlistCreateManyInput.schema';

export const WishlistCreateManyAndReturnSchema: z.ZodType<any> = z.object({ select: WishlistSelectObjectSchema.optional(), data: z.union([ WishlistCreateManyInputObjectSchema, z.array(WishlistCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistCreateManyAndReturnZodSchema = z.object({ select: WishlistSelectObjectSchema.optional(), data: z.union([ WishlistCreateManyInputObjectSchema, z.array(WishlistCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();