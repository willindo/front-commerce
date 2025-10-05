import * as z from 'zod';
import type { Prisma } from '@prisma/client';
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
export const ProductUpsertWithoutSizesInputObjectSchema: z.ZodType<Prisma.ProductUpsertWithoutSizesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpsertWithoutSizesInput>;
export const ProductUpsertWithoutSizesInputObjectZodSchema = makeSchema();
