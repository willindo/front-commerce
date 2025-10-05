import * as z from 'zod';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './ProductSizeWhereUniqueInput.schema';
import { ProductSizeUpdateWithoutProductInputObjectSchema as ProductSizeUpdateWithoutProductInputObjectSchema } from './ProductSizeUpdateWithoutProductInput.schema';
import { ProductSizeUncheckedUpdateWithoutProductInputObjectSchema as ProductSizeUncheckedUpdateWithoutProductInputObjectSchema } from './ProductSizeUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductSizeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductSizeUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const ProductSizeUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
