import * as z from 'zod';
import { WishlistUpdateManyMutationInputObjectSchema as WishlistUpdateManyMutationInputObjectSchema } from './objects/WishlistUpdateManyMutationInput.schema';
import { WishlistWhereInputObjectSchema as WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';

export const WishlistUpdateManySchema: z.ZodType<any> = z.object({ data: WishlistUpdateManyMutationInputObjectSchema, where: WishlistWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistUpdateManyZodSchema = z.object({ data: WishlistUpdateManyMutationInputObjectSchema, where: WishlistWhereInputObjectSchema.optional() }).strict();