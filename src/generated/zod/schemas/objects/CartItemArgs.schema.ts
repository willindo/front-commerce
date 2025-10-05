import * as z from 'zod';
import { CartItemSelectObjectSchema as CartItemSelectObjectSchema } from './CartItemSelect.schema';
import { CartItemIncludeObjectSchema as CartItemIncludeObjectSchema } from './CartItemInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => CartItemSelectObjectSchema).optional(),
  include: z.lazy(() => CartItemIncludeObjectSchema).optional()
}).strict();
export const CartItemArgsObjectSchema = makeSchema();
export const CartItemArgsObjectZodSchema = makeSchema();
