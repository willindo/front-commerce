import * as z from 'zod';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema';
import { CartItemUpdateWithoutCartInputObjectSchema as CartItemUpdateWithoutCartInputObjectSchema } from './CartItemUpdateWithoutCartInput.schema';
import { CartItemUncheckedUpdateWithoutCartInputObjectSchema as CartItemUncheckedUpdateWithoutCartInputObjectSchema } from './CartItemUncheckedUpdateWithoutCartInput.schema';
import { CartItemCreateWithoutCartInputObjectSchema as CartItemCreateWithoutCartInputObjectSchema } from './CartItemCreateWithoutCartInput.schema';
import { CartItemUncheckedCreateWithoutCartInputObjectSchema as CartItemUncheckedCreateWithoutCartInputObjectSchema } from './CartItemUncheckedCreateWithoutCartInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => CartItemUpdateWithoutCartInputObjectSchema), z.lazy(() => CartItemUncheckedUpdateWithoutCartInputObjectSchema)]),
  create: z.union([z.lazy(() => CartItemCreateWithoutCartInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputObjectSchema)])
}).strict();
export const CartItemUpsertWithWhereUniqueWithoutCartInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemUpsertWithWhereUniqueWithoutCartInputObjectZodSchema = makeSchema();
