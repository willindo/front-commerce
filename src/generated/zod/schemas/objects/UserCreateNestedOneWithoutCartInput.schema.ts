import * as z from 'zod';
import { UserCreateWithoutCartInputObjectSchema as UserCreateWithoutCartInputObjectSchema } from './UserCreateWithoutCartInput.schema';
import { UserUncheckedCreateWithoutCartInputObjectSchema as UserUncheckedCreateWithoutCartInputObjectSchema } from './UserUncheckedCreateWithoutCartInput.schema';
import { UserCreateOrConnectWithoutCartInputObjectSchema as UserCreateOrConnectWithoutCartInputObjectSchema } from './UserCreateOrConnectWithoutCartInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCartInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCartInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCartInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCartInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserCreateNestedOneWithoutCartInputObjectZodSchema = makeSchema();
