import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { EnumSizeNullableFilterObjectSchema as EnumSizeNullableFilterObjectSchema } from './EnumSizeNullableFilter.schema';
import { SizeSchema } from '../enums/Size.schema';
import { IntFilterObjectSchema as IntFilterObjectSchema } from './IntFilter.schema';
import { DecimalFilterObjectSchema as DecimalFilterObjectSchema } from './DecimalFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema'

const cartitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => CartItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => CartItemScalarWhereInputObjectSchema), z.lazy(() => CartItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  cartId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  size: z.union([z.lazy(() => EnumSizeNullableFilterObjectSchema), SizeSchema]).optional().nullable(),
  quantity: z.union([z.lazy(() => IntFilterObjectSchema), z.number().int()]).optional(),
  productName: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productPrice: z.union([z.lazy(() => DecimalFilterObjectSchema), z.number()]).optional(),
  productDescription: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  productImage: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable()
}).strict();
export const CartItemScalarWhereInputObjectSchema: z.ZodType<any> = cartitemscalarwhereinputSchema as unknown as z.ZodType<any>;
export const CartItemScalarWhereInputObjectZodSchema = cartitemscalarwhereinputSchema;
