import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const wishlistscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WishlistScalarWhereInputObjectSchema), z.lazy(() => WishlistScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WishlistScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WishlistScalarWhereInputObjectSchema), z.lazy(() => WishlistScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WishlistScalarWhereInputObjectSchema: z.ZodType<Prisma.WishlistScalarWhereInput> = wishlistscalarwhereinputSchema as unknown as z.ZodType<Prisma.WishlistScalarWhereInput>;
export const WishlistScalarWhereInputObjectZodSchema = wishlistscalarwhereinputSchema;
