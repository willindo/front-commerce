import * as z from 'zod';
import { UserCreateNestedOneWithoutCartInputObjectSchema as UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema';
import { CartItemCreateNestedManyWithoutCartInputObjectSchema as CartItemCreateNestedManyWithoutCartInputObjectSchema } from './CartItemCreateNestedManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema),
  items: z.lazy(() => CartItemCreateNestedManyWithoutCartInputObjectSchema)
}).strict();
export const CartCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartCreateInputObjectZodSchema = makeSchema();
