import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutSizesInputObjectSchema as ProductUpdateWithoutSizesInputObjectSchema } from './ProductUpdateWithoutSizesInput.schema';
import { ProductUncheckedUpdateWithoutSizesInputObjectSchema as ProductUncheckedUpdateWithoutSizesInputObjectSchema } from './ProductUncheckedUpdateWithoutSizesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutSizesInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutSizesInputObjectSchema: z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutSizesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductUpdateToOneWithWhereWithoutSizesInput>;
export const ProductUpdateToOneWithWhereWithoutSizesInputObjectZodSchema = makeSchema();
