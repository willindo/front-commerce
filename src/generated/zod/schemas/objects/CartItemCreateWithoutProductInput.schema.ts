import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { CartCreateNestedOneWithoutItemsInputObjectSchema as CartCreateNestedOneWithoutItemsInputObjectSchema } from './CartCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: SizeSchema.optional().nullable(),
  quantity: z.number().int().optional(),
  productName: z.string().optional().nullable(),
  productPrice: z.number().optional().nullable(),
  productDescription: z.string().optional().nullable(),
  productImage: z.string().optional().nullable(),
  cart: z.lazy(() => CartCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const CartItemCreateWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemCreateWithoutProductInputObjectZodSchema = makeSchema();
