import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutCartsInputObjectSchema as UserUpdateWithoutCartsInputObjectSchema } from './UserUpdateWithoutCartsInput.schema';
import { UserUncheckedUpdateWithoutCartsInputObjectSchema as UserUncheckedUpdateWithoutCartsInputObjectSchema } from './UserUncheckedUpdateWithoutCartsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutCartsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutCartsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutCartsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpdateToOneWithWhereWithoutCartsInputObjectZodSchema = makeSchema();
