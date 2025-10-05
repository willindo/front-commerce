import * as z from 'zod';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CategoryWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CategoryWhereInputObjectSchema).optional().nullable()
}).strict();
export const CategoryNullableScalarRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryNullableScalarRelationFilterObjectZodSchema = makeSchema();
