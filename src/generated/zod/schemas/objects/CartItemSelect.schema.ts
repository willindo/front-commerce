import * as z from 'zod';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  cartId: z.boolean().optional(),
  productId: z.boolean().optional(),
  size: z.boolean().optional(),
  quantity: z.boolean().optional(),
  cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional(),
  productName: z.boolean().optional(),
  productPrice: z.boolean().optional(),
  productDescription: z.boolean().optional(),
  productImage: z.boolean().optional()
}).strict();
export const CartItemSelectObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemSelectObjectZodSchema = makeSchema();
