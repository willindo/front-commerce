import * as z from 'zod';
import { CartItemScalarWhereInputObjectSchema as CartItemScalarWhereInputObjectSchema } from './CartItemScalarWhereInput.schema';
import { CartItemUpdateManyMutationInputObjectSchema as CartItemUpdateManyMutationInputObjectSchema } from './CartItemUpdateManyMutationInput.schema';
import { CartItemUncheckedUpdateManyWithoutProductInputObjectSchema as CartItemUncheckedUpdateManyWithoutProductInputObjectSchema } from './CartItemUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateManyMutationInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const CartItemUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
