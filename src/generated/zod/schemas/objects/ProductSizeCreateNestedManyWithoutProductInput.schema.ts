import * as z from 'zod';
import { ProductSizeCreateWithoutProductInputObjectSchema as ProductSizeCreateWithoutProductInputObjectSchema } from './ProductSizeCreateWithoutProductInput.schema';
import { ProductSizeUncheckedCreateWithoutProductInputObjectSchema as ProductSizeUncheckedCreateWithoutProductInputObjectSchema } from './ProductSizeUncheckedCreateWithoutProductInput.schema';
import { ProductSizeCreateOrConnectWithoutProductInputObjectSchema as ProductSizeCreateOrConnectWithoutProductInputObjectSchema } from './ProductSizeCreateOrConnectWithoutProductInput.schema';
import { ProductSizeCreateManyProductInputEnvelopeObjectSchema as ProductSizeCreateManyProductInputEnvelopeObjectSchema } from './ProductSizeCreateManyProductInputEnvelope.schema';
import { ProductSizeWhereUniqueInputObjectSchema as ProductSizeWhereUniqueInputObjectSchema } from './ProductSizeWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductSizeCreateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeCreateWithoutProductInputObjectSchema).array(), z.lazy(() => ProductSizeUncheckedCreateWithoutProductInputObjectSchema), z.lazy(() => ProductSizeUncheckedCreateWithoutProductInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => ProductSizeCreateOrConnectWithoutProductInputObjectSchema), z.lazy(() => ProductSizeCreateOrConnectWithoutProductInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => ProductSizeCreateManyProductInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => ProductSizeWhereUniqueInputObjectSchema), z.lazy(() => ProductSizeWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const ProductSizeCreateNestedManyWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeCreateNestedManyWithoutProductInputObjectZodSchema = makeSchema();
