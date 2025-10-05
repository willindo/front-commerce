import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductSizeScalarWhereInputObjectSchema as ProductSizeScalarWhereInputObjectSchema } from './ProductSizeScalarWhereInput.schema';
import { ProductSizeUpdateManyMutationInputObjectSchema as ProductSizeUpdateManyMutationInputObjectSchema } from './ProductSizeUpdateManyMutationInput.schema';
import { ProductSizeUncheckedUpdateManyWithoutProductInputObjectSchema as ProductSizeUncheckedUpdateManyWithoutProductInputObjectSchema } from './ProductSizeUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductSizeScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductSizeUpdateManyMutationInputObjectSchema), z.lazy(() => ProductSizeUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const ProductSizeUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductSizeUpdateManyWithWhereWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeUpdateManyWithWhereWithoutProductInput>;
export const ProductSizeUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
