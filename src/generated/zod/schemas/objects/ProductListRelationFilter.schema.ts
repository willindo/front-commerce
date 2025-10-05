import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  some: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  none: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductListRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductListRelationFilterObjectZodSchema = makeSchema();
