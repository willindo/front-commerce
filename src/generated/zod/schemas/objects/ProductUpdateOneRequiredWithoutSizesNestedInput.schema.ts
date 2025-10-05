import * as z from 'zod';
import { ProductCreateWithoutSizesInputObjectSchema as ProductCreateWithoutSizesInputObjectSchema } from './ProductCreateWithoutSizesInput.schema';
import { ProductUncheckedCreateWithoutSizesInputObjectSchema as ProductUncheckedCreateWithoutSizesInputObjectSchema } from './ProductUncheckedCreateWithoutSizesInput.schema';
import { ProductCreateOrConnectWithoutSizesInputObjectSchema as ProductCreateOrConnectWithoutSizesInputObjectSchema } from './ProductCreateOrConnectWithoutSizesInput.schema';
import { ProductUpsertWithoutSizesInputObjectSchema as ProductUpsertWithoutSizesInputObjectSchema } from './ProductUpsertWithoutSizesInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductUpdateToOneWithWhereWithoutSizesInputObjectSchema as ProductUpdateToOneWithWhereWithoutSizesInputObjectSchema } from './ProductUpdateToOneWithWhereWithoutSizesInput.schema';
import { ProductUpdateWithoutSizesInputObjectSchema as ProductUpdateWithoutSizesInputObjectSchema } from './ProductUpdateWithoutSizesInput.schema';
import { ProductUncheckedUpdateWithoutSizesInputObjectSchema as ProductUncheckedUpdateWithoutSizesInputObjectSchema } from './ProductUncheckedUpdateWithoutSizesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSizesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSizesInputObjectSchema).optional(),
  upsert: z.lazy(() => ProductUpsertWithoutSizesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => ProductUpdateToOneWithWhereWithoutSizesInputObjectSchema), z.lazy(() => ProductUpdateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutSizesInputObjectSchema)]).optional()
}).strict();
export const ProductUpdateOneRequiredWithoutSizesNestedInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpdateOneRequiredWithoutSizesNestedInputObjectZodSchema = makeSchema();
