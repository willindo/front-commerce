import * as z from 'zod';
import { ProductSizeSelectObjectSchema as ProductSizeSelectObjectSchema } from './ProductSizeSelect.schema';
import { ProductSizeIncludeObjectSchema as ProductSizeIncludeObjectSchema } from './ProductSizeInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ProductSizeSelectObjectSchema).optional(),
  include: z.lazy(() => ProductSizeIncludeObjectSchema).optional()
}).strict();
export const ProductSizeArgsObjectSchema = makeSchema();
export const ProductSizeArgsObjectZodSchema = makeSchema();
