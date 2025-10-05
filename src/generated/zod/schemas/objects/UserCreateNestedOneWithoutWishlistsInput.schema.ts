import * as z from 'zod';
import { UserCreateWithoutWishlistsInputObjectSchema as UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema as UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema';
import { UserCreateOrConnectWithoutWishlistsInputObjectSchema as UserCreateOrConnectWithoutWishlistsInputObjectSchema } from './UserCreateOrConnectWithoutWishlistsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWishlistsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutWishlistsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutWishlistsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserCreateNestedOneWithoutWishlistsInputObjectZodSchema = makeSchema();
