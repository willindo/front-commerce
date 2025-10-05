import * as z from 'zod';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema';
import { WishlistArgsObjectSchema as WishlistArgsObjectSchema } from './WishlistArgs.schema'

const makeSchema = () => z.object({
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  wishlist: z.union([z.boolean(), z.lazy(() => WishlistArgsObjectSchema)]).optional()
}).strict();
export const WishlistItemIncludeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemIncludeObjectZodSchema = makeSchema();
