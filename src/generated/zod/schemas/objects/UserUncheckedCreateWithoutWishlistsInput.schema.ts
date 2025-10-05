import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { CartUncheckedCreateNestedManyWithoutUserInputObjectSchema as CartUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  carts: z.lazy(() => CartUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserUncheckedCreateWithoutWishlistsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUncheckedCreateWithoutWishlistsInputObjectZodSchema = makeSchema();
