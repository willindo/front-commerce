import * as z from 'zod';
import { CartArgsObjectSchema as CartArgsObjectSchema } from './CartArgs.schema';
import { ProductArgsObjectSchema as ProductArgsObjectSchema } from './ProductArgs.schema'

const makeSchema = () => z.object({
  cart: z.union([z.boolean(), z.lazy(() => CartArgsObjectSchema)]).optional(),
  product: z.union([z.boolean(), z.lazy(() => ProductArgsObjectSchema)]).optional()
}).strict();
export const CartItemIncludeObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemIncludeObjectZodSchema = makeSchema();
