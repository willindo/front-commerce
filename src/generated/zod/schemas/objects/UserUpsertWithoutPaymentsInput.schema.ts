import * as z from 'zod';
import { UserUpdateWithoutPaymentsInputObjectSchema as UserUpdateWithoutPaymentsInputObjectSchema } from './UserUpdateWithoutPaymentsInput.schema';
import { UserUncheckedUpdateWithoutPaymentsInputObjectSchema as UserUncheckedUpdateWithoutPaymentsInputObjectSchema } from './UserUncheckedUpdateWithoutPaymentsInput.schema';
import { UserCreateWithoutPaymentsInputObjectSchema as UserCreateWithoutPaymentsInputObjectSchema } from './UserCreateWithoutPaymentsInput.schema';
import { UserUncheckedCreateWithoutPaymentsInputObjectSchema as UserUncheckedCreateWithoutPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutPaymentsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPaymentsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPaymentsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutPaymentsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpsertWithoutPaymentsInputObjectZodSchema = makeSchema();
