import * as z from 'zod';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutPaymentsInputObjectSchema as UserUpdateWithoutPaymentsInputObjectSchema } from './UserUpdateWithoutPaymentsInput.schema';
import { UserUncheckedUpdateWithoutPaymentsInputObjectSchema as UserUncheckedUpdateWithoutPaymentsInputObjectSchema } from './UserUncheckedUpdateWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutPaymentsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutPaymentsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutPaymentsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUpdateToOneWithWhereWithoutPaymentsInputObjectZodSchema = makeSchema();
