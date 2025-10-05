import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCartsInputObjectSchema as UserUpdateWithoutCartsInputObjectSchema } from './UserUpdateWithoutCartsInput.schema';
import { UserUncheckedUpdateWithoutCartsInputObjectSchema as UserUncheckedUpdateWithoutCartsInputObjectSchema } from './UserUncheckedUpdateWithoutCartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCartsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCartsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCartsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCartsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutCartsInput>;
export const UserUpdateToOneWithWhereWithoutCartsInputObjectZodSchema = makeSchema();
