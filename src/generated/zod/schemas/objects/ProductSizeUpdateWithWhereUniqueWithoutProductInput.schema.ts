import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './ProductSizeWhereUniqueInput.schema';
import { ProductSizeUpdateWithoutProductInputObjectSchema as ProductSizeUpdateWithoutProductInputObjectSchema } from './ProductSizeUpdateWithoutProductInput.schema';
import { ProductSizeUncheckedUpdateWithoutProductInputObjectSchema as ProductSizeUncheckedUpdateWithoutProductInputObjectSchema } from './ProductSizeUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductSizeWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => ProductSizeUpdateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const ProductSizeUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductSizeUpdateWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeUpdateWithWhereUniqueWithoutProductInput>;
export const ProductSizeUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
