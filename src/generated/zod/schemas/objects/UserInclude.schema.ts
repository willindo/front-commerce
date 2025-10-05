import * as z from 'zod';
import { CartFindManySchema as CartFindManySchema } from '../findManyCart.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { WishlistFindManySchema as WishlistFindManySchema } from '../findManyWishlist.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  carts: z.union([z.boolean(), z.lazy(() => CartFindManySchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  wishlists: z.union([z.boolean(), z.lazy(() => WishlistFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserIncludeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserIncludeObjectZodSchema = makeSchema();
