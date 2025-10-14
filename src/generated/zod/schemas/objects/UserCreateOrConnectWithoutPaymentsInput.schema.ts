import * as z from 'zod';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutPaymentsInputObjectSchema as UserCreateWithoutPaymentsInputObjectSchema } from './UserCreateWithoutPaymentsInput.schema';
import { UserUncheckedCreateWithoutPaymentsInputObjectSchema as UserUncheckedCreateWithoutPaymentsInputObjectSchema } from './UserUncheckedCreateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutPaymentsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutPaymentsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutPaymentsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserCreateOrConnectWithoutPaymentsInputObjectZodSchema = makeSchema();
