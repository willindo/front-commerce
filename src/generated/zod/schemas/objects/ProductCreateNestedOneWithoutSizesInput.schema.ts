import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateWithoutSizesInputObjectSchema as ProductCreateWithoutSizesInputObjectSchema } from './ProductCreateWithoutSizesInput.schema';
import { ProductUncheckedCreateWithoutSizesInputObjectSchema as ProductUncheckedCreateWithoutSizesInputObjectSchema } from './ProductUncheckedCreateWithoutSizesInput.schema';
import { ProductCreateOrConnectWithoutSizesInputObjectSchema as ProductCreateOrConnectWithoutSizesInputObjectSchema } from './ProductCreateOrConnectWithoutSizesInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutSizesInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutSizesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutSizesInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutSizesInputObjectSchema: z.ZodType<Prisma.ProductCreateNestedOneWithoutSizesInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductCreateNestedOneWithoutSizesInput>;
export const ProductCreateNestedOneWithoutSizesInputObjectZodSchema = makeSchema();
