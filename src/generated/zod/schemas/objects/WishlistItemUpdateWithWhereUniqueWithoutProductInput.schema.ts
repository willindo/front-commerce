import * as z from 'zod';
import { WishlistItemWhereUniqueInputObjectSchema as WishlistItemWhereUniqueInputObjectSchema } from './WishlistItemWhereUniqueInput.schema';
import { WishlistItemUpdateWithoutProductInputObjectSchema as WishlistItemUpdateWithoutProductInputObjectSchema } from './WishlistItemUpdateWithoutProductInput.schema';
import { WishlistItemUncheckedUpdateWithoutProductInputObjectSchema as WishlistItemUncheckedUpdateWithoutProductInputObjectSchema } from './WishlistItemUncheckedUpdateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WishlistItemWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => WishlistItemUpdateWithoutProductInputObjectSchema), z.lazy(() => WishlistItemUncheckedUpdateWithoutProductInputObjectSchema)])
}).strict();
export const WishlistItemUpdateWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUpdateWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
