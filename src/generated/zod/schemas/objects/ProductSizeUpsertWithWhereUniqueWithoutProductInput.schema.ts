import * as z from 'zod';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './ProductSizeWhereUniqueInput.schema';
import { ProductSizeUpdateWithoutProductInputObjectSchema as ProductSizeUpdateWithoutProductInputObjectSchema } from './ProductSizeUpdateWithoutProductInput.schema';
import { ProductSizeUncheckedUpdateWithoutProductInputObjectSchema as ProductSizeUncheckedUpdateWithoutProductInputObjectSchema } from './ProductSizeUncheckedUpdateWithoutProductInput.schema';
import { ProductSizeCreateWithoutProductInputObjectSchema as ProductSizeCreateWithoutProductInputObjectSchema } from './ProductSizeCreateWithoutProductInput.schema';
import { ProductSizeUncheckedCreateWithoutProductInputObjectSchema as ProductSizeUncheckedCreateWithoutProductInputObjectSchema } from './ProductSizeUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductSizeWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => ProductSizeUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductSizeCreateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductSizeUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
