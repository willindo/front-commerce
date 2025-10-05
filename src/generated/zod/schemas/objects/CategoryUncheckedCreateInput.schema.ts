import * as z from 'zod';
import { ProductUncheckedCreateNestedManyWithoutCategoryInputObjectSchema as ProductUncheckedCreateNestedManyWithoutCategoryInputObjectSchema } from './ProductUncheckedCreateNestedManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  products: z.lazy(() => ProductUncheckedCreateNestedManyWithoutCategoryInputObjectSchema)
}).strict();
export const CategoryUncheckedCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryUncheckedCreateInputObjectZodSchema = makeSchema();
