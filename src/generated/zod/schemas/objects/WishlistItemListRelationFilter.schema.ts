import * as z from 'zod';
import { WishlistItemWhereInputObjectSchema as WishlistItemWhereInputObjectSchema } from './WishlistItemWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WishlistItemWhereInputObjectSchema).optional(),
  some: z.lazy(() => WishlistItemWhereInputObjectSchema).optional(),
  none: z.lazy(() => WishlistItemWhereInputObjectSchema).optional()
}).strict();
export const WishlistItemListRelationFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemListRelationFilterObjectZodSchema = makeSchema();
