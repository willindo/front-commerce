import * as z from 'zod';
import { UserCreateNestedOneWithoutCartsInputObjectSchema as UserCreateNestedOneWithoutCartsInputObjectSchema } from './UserCreateNestedOneWithoutCartsInput.schema';
import { CartItemCreateNestedManyWithoutCartInputObjectSchema as CartItemCreateNestedManyWithoutCartInputObjectSchema } from './CartItemCreateNestedManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartsInputObjectSchema),
  items: z.lazy(() => CartItemCreateNestedManyWithoutCartInputObjectSchema)
}).strict();
export const CartCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartCreateInputObjectZodSchema = makeSchema();
