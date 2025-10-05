import * as z from 'zod';
import { WishlistSelectObjectSchema as WishlistSelectObjectSchema } from './objects/WishlistSelect.schema';
import { WishlistIncludeObjectSchema as WishlistIncludeObjectSchema } from './objects/WishlistInclude.schema';
import { WishlistCreateInputObjectSchema as WishlistCreateInputObjectSchema } from './objects/WishlistCreateInput.schema';
import { WishlistUncheckedCreateInputObjectSchema as WishlistUncheckedCreateInputObjectSchema } from './objects/WishlistUncheckedCreateInput.schema';

export const WishlistCreateOneSchema: z.ZodType<any> = z.object({ select: WishlistSelectObjectSchema.optional(), include: WishlistIncludeObjectSchema.optional(), data: z.union([WishlistCreateInputObjectSchema, WishlistUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<any>;

export const WishlistCreateOneZodSchema = z.object({ select: WishlistSelectObjectSchema.optional(), include: WishlistIncludeObjectSchema.optional(), data: z.union([WishlistCreateInputObjectSchema, WishlistUncheckedCreateInputObjectSchema]) }).strict();