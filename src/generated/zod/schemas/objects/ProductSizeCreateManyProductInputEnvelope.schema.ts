import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductSizeCreateManyProductInputObjectSchema as ProductSizeCreateManyProductInputObjectSchema } from './ProductSizeCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductSizeCreateManyProductInputObjectSchema), z.lazy(() => ProductSizeCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductSizeCreateManyProductInputEnvelopeObjectSchema: z.ZodType<Prisma.ProductSizeCreateManyProductInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeCreateManyProductInputEnvelope>;
export const ProductSizeCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
