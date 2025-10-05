import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema as ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema } from './ProductCreateNestedOneWithoutWishlistItemsInput.schema';
import { WishlistCreateNestedOneWithoutItemsInputObjectSchema as WishlistCreateNestedOneWithoutItemsInputObjectSchema } from './WishlistCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema),
  wishlist: z.lazy(() => WishlistCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const WishlistItemCreateInputObjectSchema: z.ZodType<Prisma.WishlistItemCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemCreateInput>;
export const WishlistItemCreateInputObjectZodSchema = makeSchema();
