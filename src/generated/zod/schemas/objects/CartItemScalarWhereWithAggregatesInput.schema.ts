import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { EnumSizeNullableWithAggregatesFilterObjectSchema as EnumSizeNullableWithAggregatesFilterObjectSchema } from './EnumSizeNullableWithAggregatesFilter.schema';
import { SizeSchema } from '../enums/Size.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { DecimalWithAggregatesFilterObjectSchema as DecimalWithAggregatesFilterObjectSchema } from './DecimalWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema'

const cartitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => CartItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  cartId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => EnumSizeNullableWithAggregatesFilterObjectSchema), SizeSchema]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  productName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productPrice: z.union([z.lazy(() => DecimalWithAggregatesFilterObjectSchema), z.number()]).optional(),
  productDescription: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  productImage: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const CartItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<any> = cartitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<any>;
export const CartItemScalarWhereWithAggregatesInputObjectZodSchema = cartitemscalarwherewithaggregatesinputSchema;
