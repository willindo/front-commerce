import * as z from 'zod';
import { ProductUpdateWithoutSizesInputObjectSchema as ProductUpdateWithoutSizesInputObjectSchema } from './ProductUpdateWithoutSizesInput.schema';
import { ProductUncheckedUpdateWithoutSizesInputObjectSchema as ProductUncheckedUpdateWithoutSizesInputObjectSchema } from './ProductUncheckedUpdateWithoutSizesInput.schema';
import { ProductCreateWithoutSizesInputObjectSchema as ProductCreateWithoutSizesInputObjectSchema } from './ProductCreateWithoutSizesInput.schema';
import { ProductUncheckedCreateWithoutSizesInputObjectSchema as ProductUncheckedCreateWithoutSizesInputObjectSchema } from './ProductUncheckedCreateWithoutSizesInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutSizesInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSizesInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutSizesInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpsertWithoutSizesInputObjectZodSchema = makeSchema();
