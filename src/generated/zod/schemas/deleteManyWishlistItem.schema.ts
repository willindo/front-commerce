import * as z from 'zod';
import { WishlistItemWhereInputObjectSchema as WishlistItemWhereInputObjectSchema } from './objects/WishlistItemWhereInput.schema';

export const WishlistItemDeleteManySchema: z.ZodType<any> = z.object({ where: WishlistItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistItemDeleteManyZodSchema = z.object({ where: WishlistItemWhereInputObjectSchema.optional() }).strict();