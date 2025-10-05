import * as z from 'zod';
import { RoleSchema } from '../enums/Role.schema';
import { CartCreateNestedManyWithoutUserInputObjectSchema as CartCreateNestedManyWithoutUserInputObjectSchema } from './CartCreateNestedManyWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema as OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema';
import { WishlistCreateNestedManyWithoutUserInputObjectSchema as WishlistCreateNestedManyWithoutUserInputObjectSchema } from './WishlistCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  carts: z.lazy(() => CartCreateNestedManyWithoutUserInputObjectSchema),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema),
  wishlists: z.lazy(() => WishlistCreateNestedManyWithoutUserInputObjectSchema)
}).strict();
export const UserCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const UserCreateInputObjectZodSchema = makeSchema();
