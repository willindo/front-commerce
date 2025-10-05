import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
import { WishlistArgsObjectSchema as WishlistArgsObjectSchema } from './WishlistArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  productId: z.boolean().optional(),
  wishlist: z.union([z.boolean(), z.lazy(() => WishlistArgsObjectSchema)]).optional(),
  wishlistId: z.boolean().optional()
}).strict();
export const WishlistItemSelectObjectSchema: z.ZodType<Prisma.WishlistItemSelect> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemSelect>;
export const WishlistItemSelectObjectZodSchema = makeSchema();
