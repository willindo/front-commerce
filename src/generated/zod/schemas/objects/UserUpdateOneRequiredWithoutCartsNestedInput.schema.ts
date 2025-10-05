import * as z from 'zod';
import { UserCreateWithoutCartsInputObjectSchema as UserCreateWithoutCartsInputObjectSchema } from './UserCreateWithoutCartsInput.schema';
import { UserUncheckedCreateWithoutCartsInputObjectSchema as UserUncheckedCreateWithoutCartsInputObjectSchema } from './UserUncheckedCreateWithoutCartsInput.schema';
import { UserCreateOrConnectWithoutCartsInputObjectSchema as UserCreateOrConnectWithoutCartsInputObjectSchema } from './UserCreateOrConnectWithoutCartsInput.schema';
import { UserUpsertWithoutCartsInputObjectSchema as UserUpsertWithoutCartsInputObjectSchema } from './UserUpsertWithoutCartsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutCartsInputObjectSchema as UserUpdateToOneWithWhereWithoutCartsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutCartsInput.schema';
import { UserUpdateWithoutCartsInputObjectSchema as UserUpdateWithoutCartsInputObjectSchema } from './UserUpdateWithoutCartsInput.schema';
import { UserUncheckedUpdateWithoutCartsInputObjectSchema as UserUncheckedUpdateWithoutCartsInputObjectSchema } from './UserUncheckedUpdateWithoutCartsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCartsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCartsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCartsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutCartsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutCartsInputObjectSchema), z.lazy(() => UserUpdateWithoutCartsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCartsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpdateOneRequiredWithoutCartsNestedInputObjectZodSchema = makeSchema();
