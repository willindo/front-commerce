import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string()
}).strict();
export const WishlistItemCreateManyWishlistInputObjectSchema: z.ZodType<Prisma.WishlistItemCreateManyWishlistInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemCreateManyWishlistInput>;
export const WishlistItemCreateManyWishlistInputObjectZodSchema = makeSchema();
