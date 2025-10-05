import * as z from 'zod';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { WishlistItemFindManySchema as WishlistItemFindManySchema } from '../findManyWishlistItem.schema';
import { WishlistCountOutputTypeArgsObjectSchema as WishlistCountOutputTypeArgsObjectSchema } from './WishlistCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  items: z.union([z.boolean(), z.lazy(() => WishlistItemFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => WishlistCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WishlistIncludeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistIncludeObjectZodSchema = makeSchema();
