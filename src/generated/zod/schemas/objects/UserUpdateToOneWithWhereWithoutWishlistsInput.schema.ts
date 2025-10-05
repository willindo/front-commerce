import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutWishlistsInputObjectSchema as UserUpdateWithoutWishlistsInputObjectSchema } from './UserUpdateWithoutWishlistsInput.schema';
import { UserUncheckedUpdateWithoutWishlistsInputObjectSchema as UserUncheckedUpdateWithoutWishlistsInputObjectSchema } from './UserUncheckedUpdateWithoutWishlistsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWishlistsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutWishlistsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWishlistsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutWishlistsInput>;
export const UserUpdateToOneWithWhereWithoutWishlistsInputObjectZodSchema = makeSchema();
