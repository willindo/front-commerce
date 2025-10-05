import * as z from 'zod';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateWithoutCategoryInputObjectSchema as ProductUpdateWithoutCategoryInputObjectSchema } from './ProductUpdateWithoutCategoryInput.schema';
import { ProductUncheckedUpdateWithoutCategoryInputObjectSchema as ProductUncheckedUpdateWithoutCategoryInputObjectSchema } from './ProductUncheckedUpdateWithoutCategoryInput.schema';
import { ProductCreateWithoutCategoryInputObjectSchema as ProductCreateWithoutCategoryInputObjectSchema } from './ProductCreateWithoutCategoryInput.schema';
import { ProductUncheckedCreateWithoutCategoryInputObjectSchema as ProductUncheckedCreateWithoutCategoryInputObjectSchema } from './ProductUncheckedCreateWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductUpdateWithoutCategoryInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutCategoryInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutCategoryInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCategoryInputObjectSchema)])
}).strict();
export const ProductUpsertWithWhereUniqueWithoutCategoryInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpsertWithWhereUniqueWithoutCategoryInputObjectZodSchema = makeSchema();
