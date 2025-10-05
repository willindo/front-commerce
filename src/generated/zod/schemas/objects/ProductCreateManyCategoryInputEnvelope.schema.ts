import * as z from 'zod';
import { ProductCreateManyCategoryInputObjectSchema as ProductCreateManyCategoryInputObjectSchema } from './ProductCreateManyCategoryInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ProductCreateManyCategoryInputObjectSchema), z.lazy(() => ProductCreateManyCategoryInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ProductCreateManyCategoryInputEnvelopeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductCreateManyCategoryInputEnvelopeObjectZodSchema = makeSchema();
