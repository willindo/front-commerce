import * as z from 'zod';
import { UserCreateWithoutPaymentsInputObjectSchema as UserCreateWithoutPaymentsInputObjectSchema } from './UserCreateWithoutPaymentsInput.schema';
import { UserUncheckedCreateWithoutPaymentsInputObjectSchema as UserUncheckedCreateWithoutPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutPaymentsInput.schema';
import { UserCreateOrConnectWithoutPaymentsInputObjectSchema as UserCreateOrConnectWithoutPaymentsInputObjectSchema } from './UserCreateOrConnectWithoutPaymentsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPaymentsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutPaymentsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserCreateNestedOneWithoutPaymentsInputObjectZodSchema = makeSchema();
