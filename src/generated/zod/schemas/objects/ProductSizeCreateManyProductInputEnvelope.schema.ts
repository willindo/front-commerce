import * as z from 'zod';
import { ProductSizeCreateManyProductInputObjectSchema as ProductSizeCreateManyProductInputObjectSchema } from './ProductSizeCreateManyProductInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductSizeCreateManyProductInputObjectSchema), z.lazy(() => ProductSizeCreateManyProductInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductSizeCreateManyProductInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeCreateManyProductInputEnvelopeObjectZodSchema = makeSchema();
