import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const wishlistitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  wishlistId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const WishlistItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<any> = wishlistitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<any>;
export const WishlistItemScalarWhereWithAggregatesInputObjectZodSchema = wishlistitemscalarwherewithaggregatesinputSchema;
