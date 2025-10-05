import * as z from 'zod';
import { UserCreateNestedOneWithoutWishlistsInputObjectSchema as UserCreateNestedOneWithoutWishlistsInputObjectSchema } from './UserCreateNestedOneWithoutWishlistsInput.schema';
import { WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema as WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemCreateNestedManyWithoutWishlistInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWishlistsInputObjectSchema),
  items: z.lazy(() => WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema)
}).strict();
export const WishlistCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistCreateInputObjectZodSchema = makeSchema();
