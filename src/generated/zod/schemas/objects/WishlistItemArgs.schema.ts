import * as z from 'zod';
import { WishlistItemSelectObjectSchema as WishlistItemSelectObjectSchema } from './WishlistItemSelect.schema';
import { WishlistItemIncludeObjectSchema as WishlistItemIncludeObjectSchema } from './WishlistItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => WishlistItemSelectObjectSchema).optional(),
  include: z.lazy(() => WishlistItemIncludeObjectSchema).optional()
}).strict();
export const WishlistItemArgsObjectSchema = makeSchema();
export const WishlistItemArgsObjectZodSchema = makeSchema();
