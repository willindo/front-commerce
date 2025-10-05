import * as z from 'zod';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutWishlistsInputObjectSchema as UserCreateWithoutWishlistsInputObjectSchema } from './UserCreateWithoutWishlistsInput.schema';
import { UserUncheckedCreateWithoutWishlistsInputObjectSchema as UserUncheckedCreateWithoutWishlistsInputObjectSchema } from './UserUncheckedCreateWithoutWishlistsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutWishlistsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutWishlistsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutWishlistsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserCreateOrConnectWithoutWishlistsInputObjectZodSchema = makeSchema();
