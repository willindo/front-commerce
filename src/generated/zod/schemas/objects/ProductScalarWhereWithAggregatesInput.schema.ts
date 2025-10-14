import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { StringNullableListFilterObjectSchema as StringNullableListFilterObjectSchema } from './StringNullableListFilter.schema';
import { EnumGenderNullableWithAggregatesFilterObjectSchema as EnumGenderNullableWithAggregatesFilterObjectSchema } from './EnumGenderNullableWithAggregatesFilter.schema';
import { GenderSchema } from '../enums/Gender.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const productscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => ProductScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  description: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  price: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  stock: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  images: z.lazy(() => StringNullableListFilterObjectSchema).optional(),
  categoryId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  gender: z.union([z.lazy(() => EnumGenderNullableWithAggregatesFilterObjectSchema), GenderSchema]).optional().nullable(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const ProductScalarWhereWithAggregatesInputObjectSchema: z.ZodType<any> = productscalarwherewithaggregatesinputSchema as unknown as z.ZodType<any>;
export const ProductScalarWhereWithAggregatesInputObjectZodSchema = productscalarwherewithaggregatesinputSchema;
