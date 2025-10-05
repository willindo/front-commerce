import * as z from 'zod';
import { WishlistItemUpdateManyMutationInputObjectSchema as WishlistItemUpdateManyMutationInputObjectSchema } from './objects/WishlistItemUpdateManyMutationInput.schema';
import { WishlistItemWhereInputObjectSchema as WishlistItemWhereInputObjectSchema } from './objects/WishlistItemWhereInput.schema';

export const WishlistItemUpdateManySchema: z.ZodType<any> = z.object({ data: WishlistItemUpdateManyMutationInputObjectSchema, where: WishlistItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistItemUpdateManyZodSchema = z.object({ data: WishlistItemUpdateManyMutationInputObjectSchema, where: WishlistItemWhereInputObjectSchema.optional() }).strict();