import * as z from 'zod';
import { UserCreateWithoutPaymentsInputObjectSchema as UserCreateWithoutPaymentsInputObjectSchema } from './UserCreateWithoutPaymentsInput.schema';
import { UserUncheckedCreateWithoutPaymentsInputObjectSchema as UserUncheckedCreateWithoutPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutPaymentsInput.schema';
import { UserCreateOrConnectWithoutPaymentsInputObjectSchema as UserCreateOrConnectWithoutPaymentsInputObjectSchema } from './UserCreateOrConnectWithoutPaymentsInput.schema';
import { UserUpsertWithoutPaymentsInputObjectSchema as UserUpsertWithoutPaymentsInputObjectSchema } from './UserUpsertWithoutPaymentsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutPaymentsInputObjectSchema as UserUpdateToOneWithWhereWithoutPaymentsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutPaymentsInput.schema';
import { UserUpdateWithoutPaymentsInputObjectSchema as UserUpdateWithoutPaymentsInputObjectSchema } from './UserUpdateWithoutPaymentsInput.schema';
import { UserUncheckedUpdateWithoutPaymentsInputObjectSchema as UserUncheckedUpdateWithoutPaymentsInputObjectSchema } from './UserUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => UserUpdateToOneWithWhereWithoutPaymentsInputObjectSchema), z.lazy(() => UserUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPaymentsInputObjectSchema)]).optional()
}).strict();
export const UserUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpdateOneRequiredWithoutPaymentsNestedInputObjectZodSchema = makeSchema();
