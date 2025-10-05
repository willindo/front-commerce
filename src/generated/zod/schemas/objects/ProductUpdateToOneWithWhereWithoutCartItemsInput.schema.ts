import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutCartItemsInputObjectSchema as ProductUpdateWithoutCartItemsInputObjectSchema } from './ProductUpdateWithoutCartItemsInput.schema';
import { ProductUncheckedUpdateWithoutCartItemsInputObjectSchema as ProductUncheckedUpdateWithoutCartItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutCartItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutCartItemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutCartItemsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutCartItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpdateToOneWithWhereWithoutCartItemsInputObjectZodSchema = makeSchema();
