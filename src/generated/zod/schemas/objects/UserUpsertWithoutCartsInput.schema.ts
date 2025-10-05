import * as z from 'zod';
import { UserUpdateWithoutCartsInputObjectSchema as UserUpdateWithoutCartsInputObjectSchema } from './UserUpdateWithoutCartsInput.schema';
import { UserUncheckedUpdateWithoutCartsInputObjectSchema as UserUncheckedUpdateWithoutCartsInputObjectSchema } from './UserUncheckedUpdateWithoutCartsInput.schema';
import { UserCreateWithoutCartsInputObjectSchema as UserCreateWithoutCartsInputObjectSchema } from './UserCreateWithoutCartsInput.schema';
import { UserUncheckedCreateWithoutCartsInputObjectSchema as UserUncheckedCreateWithoutCartsInputObjectSchema } from './UserUncheckedCreateWithoutCartsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCartsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCartsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCartsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCartsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCartsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpsertWithoutCartsInputObjectZodSchema = makeSchema();
