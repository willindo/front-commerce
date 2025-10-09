import * as z from 'zod';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => CartWhereInputObjectSchema).optional().nullable(),
  isNot: z.lazy(() => CartWhereInputObjectSchema).optional().nullable()
}).strict();
export const CartNullableScalarRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartNullableScalarRelationFilterObjectZodSchema = makeSchema();
