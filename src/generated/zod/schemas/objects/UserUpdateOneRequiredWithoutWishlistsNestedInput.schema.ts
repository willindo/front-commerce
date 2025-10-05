import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutWishlistsInputObjectSchema as UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema as UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema';
import { UserCreateOrConnectWithoutWishlistsInputObjectSchema as UserCreateOrConnectWithoutWishlistsInputObjectSchema } from './UserCreateOrConnectWithoutWishlistsInput.schema';
import { UserUpsertWithoutWishlistsInputObjectSchema as UserUpsertWithoutWishlistsInputObjectSchema } from './UserUpsertWithoutWishlistsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutWishlistsInputObjectSchema as UserUpdateToOneWithWhereWithoutWishlistsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutWishlistsInput.schema';
import { UserUpdateWithoutWishlistsInputObjectSchema as UserUpdateWithoutWishlistsInputObjectSchema } from './UserUpdateWithoutWishlistsInput.schema';
import { UserUncheckedUpdateWithoutWishlistsInputObjectSchema as UserUncheckedUpdateWithoutWishlistsInputObjectSchema } from './UserUncheckedUpdateWithoutWishlistsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWishlistsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWishlistsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutWishlistsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutWishlistsInputObjectSchema), z.lazy(() => UserUpdateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutWishlistsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutWishlistsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutWishlistsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutWishlistsNestedInput>;
export const UserUpdateOneRequiredWithoutWishlistsNestedInputObjectZodSchema = makeSchema();
