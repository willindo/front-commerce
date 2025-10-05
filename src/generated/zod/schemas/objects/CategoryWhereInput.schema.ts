import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { ProductListRelationFilterObjectSchema as ProductListRelationFilterObjectSchema } from './ProductListRelationFilter.schema'

const categorywhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoryWhereInputObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoryWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoryWhereInputObjectSchema), z.lazy(() => CategoryWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  products: z.lazy(() => ProductListRelationFilterObjectSchema).optional()
}).strict();
export const CategoryWhereInputObjectSchema: z.ZodType<any> = categorywhereinputSchema as unknown as z.ZodType<any>;
export const CategoryWhereInputObjectZodSchema = categorywhereinputSchema;
