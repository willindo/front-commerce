import * as z from 'zod';
import { WishlistItemWhereUniqueInputObjectSchema as WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemUpdateWithoutWishlistInputObjectSchema as WishlistItemUpdateWithoutWishlistInputObjectSchema } from './WishlistItemUpdateWithoutWishlistInput.schema';
import { WishlistItemUncheckedUpdateWithoutWishlistInputObjectSchema as WishlistItemUncheckedUpdateWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedUpdateWithoutWishlistInput.schema';
import { WishlistItemCreateWithoutWishlistInputObjectSchema as WishlistItemCreateWithoutWishlistInputObjectSchema } from './WishlistItemCreateWithoutWishlistInput.schema';
import { WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema as WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateWithoutWishlistInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WishlistItemUpdateWithoutWishlistInputObjectSchema), z.lazy(() => WishlistItemUncheckedUpdateWithoutWishlistInputObjectSchema)]),
  create: z.union([z.lazy(() => WishlistItemCreateWithoutWishlistInputObjectSchema), z.lazy(() => WishlistItemUncheckedCreateWithoutWishlistInputObjectSchema)])
}).strict();
export const WishlistItemUpsertWithWhereUniqueWithoutWishlistInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUpsertWithWhereUniqueWithoutWishlistInputObjectZodSchema = makeSchema();
