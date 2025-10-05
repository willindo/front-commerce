import * as z from 'zod';
import { CategoryUpdateWithoutProductsInputObjectSchema as CategoryUpdateWithoutProductsInputObjectSchema } from './CategoryUpdateWithoutProductsInput.schema';
import { CategoryUncheckedUpdateWithoutProductsInputObjectSchema as CategoryUncheckedUpdateWithoutProductsInputObjectSchema } from './CategoryUncheckedUpdateWithoutProductsInput.schema';
import { CategoryCreateWithoutProductsInputObjectSchema as CategoryCreateWithoutProductsInputObjectSchema } from './CategoryCreateWithoutProductsInput.schema';
import { CategoryUncheckedCreateWithoutProductsInputObjectSchema as CategoryUncheckedCreateWithoutProductsInputObjectSchema } from './CategoryUncheckedCreateWithoutProductsInput.schema';
import { CategoryWhereInputObjectSchema as CategoryWhereInputObjectSchema } from './CategoryWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => CategoryUpdateWithoutProductsInputObjectSchema), z.lazy(() => CategoryUncheckedUpdateWithoutProductsInputObjectSchema)]),
  create: z.union([z.lazy(() => CategoryCreateWithoutProductsInputObjectSchema), z.lazy(() => CategoryUncheckedCreateWithoutProductsInputObjectSchema)]),
  where: z.lazy(() => CategoryWhereInputObjectSchema).optional()
}).strict();
export const CategoryUpsertWithoutProductsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CategoryUpsertWithoutProductsInputObjectZodSchema = makeSchema();
