import * as z from 'zod';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema';
import { UserScalarRelationFilterObjectSchema as UserScalarRelationFilterObjectSchema } from './UserScalarRelationFilter.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { WishlistItemListRelationFilterObjectSchema as WishlistItemListRelationFilterObjectSchema } from './WishlistItemListRelationFilter.schema'

const wishlistwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WishlistWhereInputObjectSchema), z.lazy(() => WishlistWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WishlistWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WishlistWhereInputObjectSchema), z.lazy(() => WishlistWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  user: z.union([z.lazy(() => UserScalarRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
  items: z.lazy(() => WishlistItemListRelationFilterObjectSchema).optional()
}).strict();
export const WishlistWhereInputObjectSchema: z.ZodType<any> = wishlistwhereinputSchema as unknown as z.ZodType<any>;
export const WishlistWhereInputObjectZodSchema = wishlistwhereinputSchema;
