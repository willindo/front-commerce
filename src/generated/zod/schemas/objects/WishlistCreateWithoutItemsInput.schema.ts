import * as z from 'zod';
import { UserCreateNestedOneWithoutWishlistsInputObjectSchema as UserCreateNestedOneWithoutWishlistsInputObjectSchema } from './UserCreateNestedOneWithoutWishlistsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWishlistsInputObjectSchema)
}).strict();
export const WishlistCreateWithoutItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistCreateWithoutItemsInputObjectZodSchema = makeSchema();
