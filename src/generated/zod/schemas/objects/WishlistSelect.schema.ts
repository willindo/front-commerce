import * as z from 'zod';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { WishlistItemFindManySchema as WishlistItemFindManySchema } from '../findManyWishlistItem.schema';
import { WishlistCountOutputTypeArgsObjectSchema as WishlistCountOutputTypeArgsObjectSchema } from './WishlistCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  userId: z.boolean().optional(),
  items: z.union([z.boolean(), z.lazy(() => WishlistItemFindManySchema)]).optional(),
  createdAt: z.boolean().optional(),
  _count: z.union([z.boolean(), z.lazy(() => WishlistCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const WishlistSelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistSelectObjectZodSchema = makeSchema();
