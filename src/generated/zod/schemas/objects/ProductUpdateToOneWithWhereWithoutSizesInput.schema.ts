import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutSizesInputObjectSchema as ProductUpdateWithoutSizesInputObjectSchema } from './ProductUpdateWithoutSizesInput.schema';
import { ProductUncheckedUpdateWithoutSizesInputObjectSchema as ProductUncheckedUpdateWithoutSizesInputObjectSchema } from './ProductUncheckedUpdateWithoutSizesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutSizesInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutSizesInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpdateToOneWithWhereWithoutSizesInputObjectZodSchema = makeSchema();
