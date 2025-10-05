import * as z from 'zod';
import { WishlistWhereInputObjectSchema as WishlistWhereInputObjectSchema } from './WishlistWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WishlistWhereInputObjectSchema).optional(),
  some: z.lazy(() => WishlistWhereInputObjectSchema).optional(),
  none: z.lazy(() => WishlistWhereInputObjectSchema).optional()
}).strict();
export const WishlistListRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistListRelationFilterObjectZodSchema = makeSchema();
