import * as z from 'zod';
import { CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema as CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema } from './CartItemUncheckedCreateNestedManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  items: z.lazy(() => CartItemUncheckedCreateNestedManyWithoutCartInputObjectSchema).optional()
}).strict();
export const CartUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
