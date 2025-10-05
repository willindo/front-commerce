import * as z from 'zod';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema';
import { CartUpdateWithoutItemsInputObjectSchema as CartUpdateWithoutItemsInputObjectSchema } from './CartUpdateWithoutItemsInput.schema';
import { CartUncheckedUpdateWithoutItemsInputObjectSchema as CartUncheckedUpdateWithoutItemsInputObjectSchema } from './CartUncheckedUpdateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => CartUpdateWithoutItemsInputObjectSchema), z.lazy(() => CartUncheckedUpdateWithoutItemsInputObjectSchema)])
}).strict();
export const CartUpdateToOneWithWhereWithoutItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartUpdateToOneWithWhereWithoutItemsInputObjectZodSchema = makeSchema();
