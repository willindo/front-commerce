import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutCartsInputObjectSchema as UserCreateWithoutCartsInputObjectSchema } from './UserCreateWithoutCartsInput.schema';
import { UserUncheckedCreateWithoutCartsInputObjectSchema as UserUncheckedCreateWithoutCartsInputObjectSchema } from './UserUncheckedCreateWithoutCartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => UserCreateWithoutCartsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutCartsInputObjectSchema)])
}).strict();
export const UserCreateOrConnectWithoutCartsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutCartsInput>;
export const UserCreateOrConnectWithoutCartsInputObjectZodSchema = makeSchema();
