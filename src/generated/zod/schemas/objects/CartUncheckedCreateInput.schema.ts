import * as z from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema)
}).strict();
export const CartUncheckedCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartUncheckedCreateInputObjectZodSchema = makeSchema();
