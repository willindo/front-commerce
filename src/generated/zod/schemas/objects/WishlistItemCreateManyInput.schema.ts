import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  productId: z.string(),
  wishlistId: z.string()
}).strict();
export const WishlistItemCreateManyInputObjectSchema: z.ZodType<Prisma.WishlistItemCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemCreateManyInput>;
export const WishlistItemCreateManyInputObjectZodSchema = makeSchema();
