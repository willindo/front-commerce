import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { CartUncheckedCreateNestedManyWithoutUserInputObjectSchema as CartUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './CartUncheckedCreateNestedManyWithoutUserInput.schema';
import { OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema as OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './OrderUncheckedCreateNestedManyWithoutUserInput.schema';
import { WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema as WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './WishlistUncheckedCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  carts: z.lazy(() => CartUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  orders: z.lazy(() => OrderUncheckedCreateNestedManyWithoutUserInputObjectSchema),
  wishlists: z.lazy(() => WishlistUncheckedCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
