import * as z from 'zod';
import { WishlistItemSelectObjectSchema as WishlistItemSelectObjectSchema } from './objects/WishlistItemSelect.schema';
import { WishlistItemUpdateManyMutationInputObjectSchema as WishlistItemUpdateManyMutationInputObjectSchema } from './objects/WishlistItemUpdateManyMutationInput.schema';
import { WishlistItemWhereInputObjectSchema as WishlistItemWhereInputObjectSchema } from './objects/WishlistItemWhereInput.schema';

export const WishlistItemUpdateManyAndReturnSchema: z.ZodType<any> = z.object({ select: WishlistItemSelectObjectSchema.optional(), data: WishlistItemUpdateManyMutationInputObjectSchema, where: WishlistItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistItemUpdateManyAndReturnZodSchema = z.object({ select: WishlistItemSelectObjectSchema.optional(), data: WishlistItemUpdateManyMutationInputObjectSchema, where: WishlistItemWhereInputObjectSchema.optional() }).strict();