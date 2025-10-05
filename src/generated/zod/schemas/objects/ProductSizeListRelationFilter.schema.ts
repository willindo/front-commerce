import * as z from 'zod';
import { ProductSizeWhereInputObjectSchema as ProductSizeWhereInputObjectSchema } from './ProductSizeWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProductSizeWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProductSizeWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProductSizeWhereInputObjectSchema).optional()
}).strict();
export const ProductSizeListRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeListRelationFilterObjectZodSchema = makeSchema();
