import * as z from 'zod';
import { WishlistWhereInputObjectSchema as WishlistWhereInputObjectSchema } from './objects/WishlistWhereInput.schema';

export const WishlistDeleteManySchema: z.ZodType<any> = z.object({ where: WishlistWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const WishlistDeleteManyZodSchema = z.object({ where: WishlistWhereInputObjectSchema.optional() }).strict();