import * as z from 'zod';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema';
import { ProductCreateWithoutSizesInputObjectSchema as ProductCreateWithoutSizesInputObjectSchema } from './ProductCreateWithoutSizesInput.schema';
import { ProductUncheckedCreateWithoutSizesInputObjectSchema as ProductUncheckedCreateWithoutSizesInputObjectSchema } from './ProductUncheckedCreateWithoutSizesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductCreateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSizesInputObjectSchema)])
}).strict();
export const ProductCreateOrConnectWithoutSizesInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductCreateOrConnectWithoutSizesInputObjectZodSchema = makeSchema();
