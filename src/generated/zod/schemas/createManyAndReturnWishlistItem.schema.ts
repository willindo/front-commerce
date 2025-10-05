import * as z from 'zod';
import { WishlistItemSelectObjectSchema as WishlistItemSelectObjectSchema } from './objects/WishlistItemSelect.schema';
import { WishlistItemCreateManyInputObjectSchema as WishlistItemCreateManyInputObjectSchema } from './objects/WishlistItemCreateManyInput.schema';

export const WishlistItemCreateManyAndReturnSchema: z.ZodType<any> = z.object({ select: WishlistItemSelectObjectSchema.optional(), data: z.union([ WishlistItemCreateManyInputObjectSchema, z.array(WishlistItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistItemCreateManyAndReturnZodSchema = z.object({ select: WishlistItemSelectObjectSchema.optional(), data: z.union([ WishlistItemCreateManyInputObjectSchema, z.array(WishlistItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();