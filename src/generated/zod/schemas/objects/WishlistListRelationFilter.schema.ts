import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WishlistWhereInputObjectSchema as WishlistWhereInputObjectSchema } from './WishlistWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => WishlistWhereInputObjectSchema).optional(),
  some: z.lazy(() => WishlistWhereInputObjectSchema).optional(),
  none: z.lazy(() => WishlistWhereInputObjectSchema).optional()
}).strict();
export const WishlistListRelationFilterObjectSchema: z.ZodType<Prisma.WishlistListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.WishlistListRelationFilter>;
export const WishlistListRelationFilterObjectZodSchema = makeSchema();
