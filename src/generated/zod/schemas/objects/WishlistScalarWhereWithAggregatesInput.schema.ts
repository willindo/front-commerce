import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const wishlistscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WishlistScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WishlistScalarWhereWithAggregatesInputObjectSchema: z.ZodType<any> = wishlistscalarwherewithaggregatesinputSchema as unknown as z.ZodType<any>;
export const WishlistScalarWhereWithAggregatesInputObjectZodSchema = wishlistscalarwherewithaggregatesinputSchema;
