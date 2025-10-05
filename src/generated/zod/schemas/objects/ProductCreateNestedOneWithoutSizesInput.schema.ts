import * as z from 'zod';
import { ProductCreateWithoutSizesInputObjectSchema as ProductCreateWithoutSizesInputObjectSchema } from './ProductCreateWithoutSizesInput.schema';
import { ProductUncheckedCreateWithoutSizesInputObjectSchema as ProductUncheckedCreateWithoutSizesInputObjectSchema } from './ProductUncheckedCreateWithoutSizesInput.schema';
import { ProductCreateOrConnectWithoutSizesInputObjectSchema as ProductCreateOrConnectWithoutSizesInputObjectSchema } from './ProductCreateOrConnectWithoutSizesInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSizesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSizesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutSizesInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductCreateNestedOneWithoutSizesInputObjectZodSchema = makeSchema();
