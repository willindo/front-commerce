import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWishlistsInputObjectSchema as UserUpdateWithoutWishlistsInputObjectSchema } from './UserUpdateWithoutWishlistsInput.schema';
import { UserUncheckedUpdateWithoutWishlistsInputObjectSchema as UserUncheckedUpdateWithoutWishlistsInputObjectSchema } from './UserUncheckedUpdateWithoutWishlistsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWishlistsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWishlistsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpdateToOneWithWhereWithoutWishlistsInputObjectZodSchema = makeSchema();
