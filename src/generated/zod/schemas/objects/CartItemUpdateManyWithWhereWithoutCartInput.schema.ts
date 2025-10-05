import * as z from 'zod';
import { CartItemScalarWhereInputObjectSchema as CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';
import { CartItemUpdateManyMutationInputObjectSchema as CartItemUpdateManyMutationInputObjectSchema } from './CartItemUpdateManyMutationInput.schema';
import { CartItemUncheckedUpdateManyWithoutCartInputObjectSchema as CartItemUncheckedUpdateManyWithoutCartInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutCartInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateManyMutationInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateManyWithoutCartInputObjectSchema)])
}).strict();
export const CartItemUpdateManyWithWhereWithoutCartInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemUpdateManyWithWhereWithoutCartInputObjectZodSchema = makeSchema();
