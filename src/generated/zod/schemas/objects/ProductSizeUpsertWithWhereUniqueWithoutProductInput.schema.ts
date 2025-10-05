import * as z from 'zod';
import type { Prisma } from '@prisma/client';
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
export const ProductSizeUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductSizeUpsertWithWhereUniqueWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeUpsertWithWhereUniqueWithoutProductInput>;
export const ProductSizeUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
