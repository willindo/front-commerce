import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductScalarRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductScalarRelationFilterObjectZodSchema = makeSchema();
