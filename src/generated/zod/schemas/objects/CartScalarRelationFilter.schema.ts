import * as z from 'zod';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CartWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => CartWhereInputObjectSchema).optional()
}).strict();
export const CartScalarRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartScalarRelationFilterObjectZodSchema = makeSchema();
