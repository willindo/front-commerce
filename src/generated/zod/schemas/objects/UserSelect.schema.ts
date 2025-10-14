import * as z from 'zod';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { OrderFindManySchema as OrderFindManySchema } from '../findManyOrder.schema';
import { WishlistFindManySchema as WishlistFindManySchema } from '../findManyWishlist.schema';
import { PaymentFindManySchema as PaymentFindManySchema } from '../findManyPayment.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  password: z.boolean().optional(),
  name: z.boolean().optional(),
  role: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  orders: z.union([z.boolean(), z.lazy(() => OrderFindManySchema)]).optional(),
  wishlists: z.union([z.boolean(), z.lazy(() => WishlistFindManySchema)]).optional(),
  payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const UserSelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserSelectObjectZodSchema = makeSchema();
