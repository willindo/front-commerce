import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateWithoutCartsInputObjectSchema as UserCreateWithoutCartsInputObjectSchema } from './UserCreateWithoutCartsInput.schema';
import { UserUncheckedCreateWithoutCartsInputObjectSchema as UserUncheckedCreateWithoutCartsInputObjectSchema } from './UserUncheckedCreateWithoutCartsInput.schema';
import { UserCreateOrConnectWithoutCartsInputObjectSchema as UserCreateOrConnectWithoutCartsInputObjectSchema } from './UserCreateOrConnectWithoutCartsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutCartsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCartsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutCartsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutCartsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutCartsInput>;
export const UserCreateNestedOneWithoutCartsInputObjectZodSchema = makeSchema();
