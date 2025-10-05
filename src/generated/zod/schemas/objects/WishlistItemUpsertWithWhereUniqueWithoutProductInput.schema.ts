import * as z from 'zod';
import { WishlistItemWhereUniqueInputObjectSchema as WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemUpdateWithoutProductInputObjectSchema as WishlistItemUpdateWithoutProductInputObjectSchema } from './WishlistItemUpdateWithoutProductInput.schema';
import { WishlistItemUncheckedUpdateWithoutProductInputObjectSchema as WishlistItemUncheckedUpdateWithoutProductInputObjectSchema } from './WishlistItemUncheckedUpdateWithoutProductInput.schema';
import { WishlistItemCreateWithoutProductInputObjectSchema as WishlistItemCreateWithoutProductInputObjectSchema } from './WishlistItemCreateWithoutProductInput.schema';
import { WishlistItemUncheckedCreateWithoutProductInputObjectSchema as WishlistItemUncheckedCreateWithoutProductInputObjectSchema } from './WishlistItemUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WishlistItemUpdateWithoutProductInputObjectSchema), z.lazy(() => WishlistItemUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => WishlistItemCreateWithoutProductInputObjectSchema), z.lazy(() => WishlistItemUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const WishlistItemUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
