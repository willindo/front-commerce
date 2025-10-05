import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema'

const wishlistitemscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => WishlistItemScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  wishlistId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional()
}).strict();
export const WishlistItemScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.WishlistItemScalarWhereWithAggregatesInput> = wishlistitemscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.WishlistItemScalarWhereWithAggregatesInput>;
export const WishlistItemScalarWhereWithAggregatesInputObjectZodSchema = wishlistitemscalarwherewithaggregatesinputSchema;
