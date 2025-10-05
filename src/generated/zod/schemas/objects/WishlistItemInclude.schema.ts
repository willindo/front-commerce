import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
import { WishlistArgsObjectSchema as WishlistArgsObjectSchema } from './WishlistArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  wishlist: z.union([z.boolean(), z.lazy(() => WishlistArgsObjectSchema)]).optional()
}).strict();
export const WishlistItemIncludeObjectSchema: z.ZodType<Prisma.WishlistItemInclude> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemInclude>;
export const WishlistItemIncludeObjectZodSchema = makeSchema();
