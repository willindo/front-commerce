import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string()
}).strict();
export const WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema: z.ZodType<Prisma.WishlistItemUncheckedCreateWithoutWishlistInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemUncheckedCreateWithoutWishlistInput>;
export const WishlistItemUncheckedCreateWithoutWishlistInputObjectZodSchema = makeSchema();
