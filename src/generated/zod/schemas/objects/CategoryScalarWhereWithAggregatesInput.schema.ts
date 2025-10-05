import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const categoryscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CategoryScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const CategoryScalarWhereWithAggregatesInputObjectSchema: z.ZodType<any> = categoryscalarwherewithaggregatesinputSchema as unknown as z.ZodType<any>;
export const CategoryScalarWhereWithAggregatesInputObjectZodSchema = categoryscalarwherewithaggregatesinputSchema;
