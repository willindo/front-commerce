import * as z from 'zod';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCategoryInputObjectSchema as ProductUpdateWithoutCategoryInputObjectSchema } from './ProductUpdateWithoutCategoryInput.schema';
import { ProductUncheckedUpdateWithoutCategoryInputObjectSchema as ProductUncheckedUpdateWithoutCategoryInputObjectSchema } from './ProductUncheckedUpdateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutCategoryInputObjectSchema)])
}).strict();
export const ProductUpdateWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpdateWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
