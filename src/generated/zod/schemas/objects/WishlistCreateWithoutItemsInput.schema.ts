import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutWishlistsInputObjectSchema as UserCreateNestedOneWithoutWishlistsInputObjectSchema } from './UserCreateNestedOneWithoutWishlistsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutWishlistsInputObjectSchema)
}).strict();
export const WishlistCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.WishlistCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistCreateWithoutItemsInput>;
export const WishlistCreateWithoutItemsInputObjectZodSchema = makeSchema();
