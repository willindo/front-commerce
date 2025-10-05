import * as z from 'zod';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CartWhereInputObjectSchema).optional(),
  some: z.lazy(() => CartWhereInputObjectSchema).optional(),
  none: z.lazy(() => CartWhereInputObjectSchema).optional()
}).strict();
export const CartListRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartListRelationFilterObjectZodSchema = makeSchema();
