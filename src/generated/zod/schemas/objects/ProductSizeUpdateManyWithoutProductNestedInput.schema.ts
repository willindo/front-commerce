import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductSizeCreateWithoutProductInputObjectSchema as ProductSizeCreateWithoutProductInputObjectSchema } from './ProductSizeCreateWithoutProductInput.schema';
import { ProductSizeUncheckedCreateWithoutProductInputObjectSchema as ProductSizeUncheckedCreateWithoutProductInputObjectSchema } from './ProductSizeUncheckedCreateWithoutProductInput.schema';
import { ProductSizeCreateOrConnectWithoutProductInputObjectSchema as ProductSizeCreateOrConnectWithoutProductInputObjectSchema } from './ProductSizeCreateOrConnectWithoutProductInput.schema';
import { ProductSizeUpsertWithWhereUniqueWithoutProductInputObjectSchema as ProductSizeUpsertWithWhereUniqueWithoutProductInputObjectSchema } from './ProductSizeUpsertWithWhereUniqueWithoutProductInput.schema';
import { ProductSizeCreateManyProductInputEnvelopeObjectSchema as ProductSizeCreateManyProductInputEnvelopeObjectSchema } from './ProductSizeCreateManyProductInputEnvelope.schema';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './ProductSizeWhereUniqueInput.schema';
import { ProductSizeUpdateWithWhereUniqueWithoutProductInputObjectSchema as ProductSizeUpdateWithWhereUniqueWithoutProductInputObjectSchema } from './ProductSizeUpdateWithWhereUniqueWithoutProductInput.schema';
import { ProductSizeUpdateManyWithWhereWithoutProductInputObjectSchema as ProductSizeUpdateManyWithWhereWithoutProductInputObjectSchema } from './ProductSizeUpdateManyWithWhereWithoutProductInput.schema';
import { ProductSizeScalarWhereInputObjectSchema as ProductSizeScalarWhereInputObjectSchema } from './ProductSizeScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductSizeCreateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ProductSizeUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductSizeCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ProductSizeCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => ProductSizeUpsertWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUpsertWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductSizeCreateManyProductInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => ProductSizeWhereUniqueInputObjectSchema), z.lazy(() => ProductSizeWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => ProductSizeWhereUniqueInputObjectSchema), z.lazy(() => ProductSizeWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => ProductSizeWhereUniqueInputObjectSchema), z.lazy(() => ProductSizeWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => ProductSizeWhereUniqueInputObjectSchema), z.lazy(() => ProductSizeWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => ProductSizeUpdateWithWhereUniqueWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUpdateWithWhereUniqueWithoutProductInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => ProductSizeUpdateManyWithWhereWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUpdateManyWithWhereWithoutProductInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => ProductSizeScalarWhereInputObjectSchema), z.lazy(() => ProductSizeScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const ProductSizeUpdateManyWithoutProductNestedInputObjectSchema: z.ZodType<Prisma.ProductSizeUpdateManyWithoutProductNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeUpdateManyWithoutProductNestedInput>;
export const ProductSizeUpdateManyWithoutProductNestedInputObjectZodSchema = makeSchema();
