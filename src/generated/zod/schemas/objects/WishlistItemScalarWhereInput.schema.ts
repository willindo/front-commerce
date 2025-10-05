import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const wishlistitemscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WishlistItemScalarWhereInputObjectSchema), z.lazy(() => WishlistItemScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WishlistItemScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WishlistItemScalarWhereInputObjectSchema), z.lazy(() => WishlistItemScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  wishlistId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const WishlistItemScalarWhereInputObjectSchema: z.ZodType<Prisma.WishlistItemScalarWhereInput> = wishlistitemscalarwhereinputSchema as unknown as z.ZodType<Prisma.WishlistItemScalarWhereInput>;
export const WishlistItemScalarWhereInputObjectZodSchema = wishlistitemscalarwhereinputSchema;
