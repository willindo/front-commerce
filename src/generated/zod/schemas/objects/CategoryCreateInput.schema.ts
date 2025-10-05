import * as z from 'zod';
import { ProductCreateNestedManyWithoutCategoryInputObjectSchema as ProductCreateNestedManyWithoutCategoryInputObjectSchema } from './ProductCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  products: z.lazy(() => ProductCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const CategoryCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryCreateInputObjectZodSchema = makeSchema();
