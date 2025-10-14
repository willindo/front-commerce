import * as z from 'zod';
import { UserUpdateWithoutCartInputObjectSchema as UserUpdateWithoutCartInputObjectSchema } from './UserUpdateWithoutCartInput.schema';
import { UserUncheckedUpdateWithoutCartInputObjectSchema as UserUncheckedUpdateWithoutCartInputObjectSchema } from './UserUncheckedUpdateWithoutCartInput.schema';
import { UserCreateWithoutCartInputObjectSchema as UserCreateWithoutCartInputObjectSchema } from './UserCreateWithoutCartInput.schema';
import { UserUncheckedCreateWithoutCartInputObjectSchema as UserUncheckedCreateWithoutCartInputObjectSchema } from './UserUncheckedCreateWithoutCartInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutCartInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCartInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutCartInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCartInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutCartInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpsertWithoutCartInputObjectZodSchema = makeSchema();
