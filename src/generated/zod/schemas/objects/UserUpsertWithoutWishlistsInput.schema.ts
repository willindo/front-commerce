import * as z from 'zod';
import { UserUpdateWithoutWishlistsInputObjectSchema as UserUpdateWithoutWishlistsInputObjectSchema } from './UserUpdateWithoutWishlistsInput.schema';
import { UserUncheckedUpdateWithoutWishlistsInputObjectSchema as UserUncheckedUpdateWithoutWishlistsInputObjectSchema } from './UserUncheckedUpdateWithoutWishlistsInput.schema';
import { UserCreateWithoutWishlistsInputObjectSchema as UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema as UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWishlistsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWishlistsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutWishlistsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpsertWithoutWishlistsInputObjectZodSchema = makeSchema();
