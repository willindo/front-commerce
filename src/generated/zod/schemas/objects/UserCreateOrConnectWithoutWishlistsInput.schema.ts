import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWishlistsInputObjectSchema as UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema as UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWishlistsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWishlistsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutWishlistsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutWishlistsInput>;
export const UserCreateOrConnectWithoutWishlistsInputObjectZodSchema = makeSchema();
