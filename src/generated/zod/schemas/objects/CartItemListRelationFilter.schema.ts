import * as z from 'zod';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './CartItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CartItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => CartItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => CartItemWhereInputObjectSchema).optional()
}).strict();
export const CartItemListRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemListRelationFilterObjectZodSchema = makeSchema();
