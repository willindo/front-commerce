import * as z from 'zod';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutProductInputObjectSchema as CartItemUpdateWithoutProductInputObjectSchema } from './CartItemUpdateWithoutProductInput.schema';
import { CartItemUncheckedUpdateWithoutProductInputObjectSchema as CartItemUncheckedUpdateWithoutProductInputObjectSchema } from './CartItemUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => CartItemUpdateWithoutProductInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const CartItemUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
