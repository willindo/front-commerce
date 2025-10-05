import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  wishlistId: z.string()
}).strict();
export const WishlistItemUncheckedCreateInputObjectSchema: z.ZodType<Prisma.WishlistItemUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemUncheckedCreateInput>;
export const WishlistItemUncheckedCreateInputObjectZodSchema = makeSchema();
