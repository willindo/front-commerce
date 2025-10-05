import * as z from 'zod';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './ProductSizeWhereUniqueInput.schema';
import { ProductSizeCreateWithoutProductInputObjectSchema as ProductSizeCreateWithoutProductInputObjectSchema } from './ProductSizeCreateWithoutProductInput.schema';
import { ProductSizeUncheckedCreateWithoutProductInputObjectSchema as ProductSizeUncheckedCreateWithoutProductInputObjectSchema } from './ProductSizeUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductSizeWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => ProductSizeCreateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const ProductSizeCreateOrConnectWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeCreateOrConnectWithoutProductInputObjectZodSchema = makeSchema();
