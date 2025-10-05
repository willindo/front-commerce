import * as z from 'zod';
import { ProductScalarWhereInputObjectSchema as ProductScalarWhereInputObjectSchema } from './ProductScalarWhereInput.schema';
import { ProductUpdateManyMutationInputObjectSchema as ProductUpdateManyMutationInputObjectSchema } from './ProductUpdateManyMutationInput.schema';
import { ProductUncheckedUpdateManyWithoutCategoryInputObjectSchema as ProductUncheckedUpdateManyWithoutCategoryInputObjectSchema } from './ProductUncheckedUpdateManyWithoutCategoryInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => ProductUpdateManyMutationInputObjectSchema), z.lazy(() => ProductUncheckedUpdateManyWithoutCategoryInputObjectSchema)])
}).strict();
export const ProductUpdateManyWithWhereWithoutCategoryInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpdateManyWithWhereWithoutCategoryInputObjectZodSchema = makeSchema();
