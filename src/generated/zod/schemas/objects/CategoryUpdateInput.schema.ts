import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateManyWithoutCategoryNestedInputObjectSchema as ProductUpdateManyWithoutCategoryNestedInputObjectSchema } from './ProductUpdateManyWithoutCategoryNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  products: z.lazy(() => ProductUpdateManyWithoutCategoryNestedInputObjectSchema).optional()
}).strict();
export const CategoryUpdateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryUpdateInputObjectZodSchema = makeSchema();
