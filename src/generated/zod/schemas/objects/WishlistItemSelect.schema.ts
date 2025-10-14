import * as z from 'zod';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
import { WishlistArgsObjectSchema as WishlistArgsObjectSchema } from './WishlistArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  productId: z.boolean().optional(),
  wishlistId: z.boolean().optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  wishlist: z.union([z.boolean(), z.lazy(() => WishlistArgsObjectSchema)]).optional()
}).strict();
export const WishlistItemSelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemSelectObjectZodSchema = makeSchema();
