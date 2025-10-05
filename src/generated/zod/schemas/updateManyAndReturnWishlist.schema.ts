import * as z from 'zod';
import { WishlistSelectObjectSchema as WishlistSelectObjectSchema } from './objects/WishlistSelect.schema';
import { WishlistUpdateManyMutationInputObjectSchema as WishlistUpdateManyMutationInputObjectSchema } from './objects/WishlistUpdateManyMutationInput.schema';
import { WishlistWhereInputObjectSchema as WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';

export const WishlistUpdateManyAndReturnSchema: z.ZodType<any> = z.object({ select: WishlistSelectObjectSchema.optional(), data: WishlistUpdateManyMutationInputObjectSchema, where: WishlistWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistUpdateManyAndReturnZodSchema = z.object({ select: WishlistSelectObjectSchema.optional(), data: WishlistUpdateManyMutationInputObjectSchema, where: WishlistWhereInputObjectSchema.optional() }).strict();