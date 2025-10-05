import * as z from 'zod';
import { WishlistWhereInputObjectSchema as WishlistWhereInputObjectSchema } from './WishlistWhereInput.schema'

const makeSchema = () => z.object({
  is: z.lazy(() => WishlistWhereInputObjectSchema).optional(),
  isNot: z.lazy(() => WishlistWhereInputObjectSchema).optional()
}).strict();
export const WishlistScalarRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistScalarRelationFilterObjectZodSchema = makeSchema();
