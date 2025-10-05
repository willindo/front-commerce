import * as z from 'zod';
import { WishlistItemSelectObjectSchema as WishlistItemSelectObjectSchema } from './objects/WishlistItemSelect.schema';
import { WishlistItemIncludeObjectSchema as WishlistItemIncludeObjectSchema } from './objects/WishlistItemInclude.schema';
import { WishlistItemCreateInputObjectSchema as WishlistItemCreateInputObjectSchema } from './objects/WishlistItemCreateInput.schema';
import { WishlistItemUncheckedCreateInputObjectSchema as WishlistItemUncheckedCreateInputObjectSchema } from './objects/WishlistItemUncheckedCreateInput.schema';

export const WishlistItemCreateOneSchema: z.ZodType<any> = z.object({ select: WishlistItemSelectObjectSchema.optional(), include: WishlistItemIncludeObjectSchema.optional(), data: z.union([WishlistItemCreateInputObjectSchema, WishlistItemUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<any>;

export const WishlistItemCreateOneZodSchema = z.object({ select: WishlistItemSelectObjectSchema.optional(), include: WishlistItemIncludeObjectSchema.optional(), data: z.union([WishlistItemCreateInputObjectSchema, WishlistItemUncheckedCreateInputObjectSchema]) }).strict();