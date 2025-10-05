import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutWishlistsInputObjectSchema as UserCreateNestedOneWithoutWishlistsInputObjectSchema } from './UserCreateNestedOneWithoutWishlistsInput.schema';
import { WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema as WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemCreateNestedManyWithoutWishlistInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWishlistsInputObjectSchema),
  items: z.lazy(() => WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema)
}).strict();
export const WishlistCreateInputObjectSchema: z.ZodType<Prisma.WishlistCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistCreateInput>;
export const WishlistCreateInputObjectZodSchema = makeSchema();
