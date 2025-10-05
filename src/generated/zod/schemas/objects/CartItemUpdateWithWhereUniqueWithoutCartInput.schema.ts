import * as z from 'zod';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutCartInputObjectSchema as CartItemUpdateWithoutCartInputObjectSchema } from './CartItemUpdateWithoutCartInput.schema';
import { CartItemUncheckedUpdateWithoutCartInputObjectSchema as CartItemUncheckedUpdateWithoutCartInputObjectSchema } from './CartItemUncheckedUpdateWithoutCartInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateWithoutCartInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutCartInputObjectSchema)])
}).strict();
export const CartItemUpdateWithWhereUniqueWithoutCartInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemUpdateWithWhereUniqueWithoutCartInputObjectZodSchema = makeSchema();
