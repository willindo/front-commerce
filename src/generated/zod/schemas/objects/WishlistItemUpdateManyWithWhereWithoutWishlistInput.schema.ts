import * as z from 'zod';
import { WishlistItemScalarWhereInputObjectSchema as WishlistItemScalarWhereInputObjectSchema } from './WishlistItemScalarWhereInput.schema';
import { WishlistItemUpdateManyMutationInputObjectSchema as WishlistItemUpdateManyMutationInputObjectSchema } from './WishlistItemUpdateManyMutationInput.schema';
import { WishlistItemUncheckedUpdateManyWithoutWishlistInputObjectSchema as WishlistItemUncheckedUpdateManyWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedUpdateManyWithoutWishlistInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WishlistItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WishlistItemUpdateManyMutationInputObjectSchema), z.lazy(() => WishlistItemUncheckedUpdateManyWithoutWishlistInputObjectSchema)])
}).strict();
export const WishlistItemUpdateManyWithWhereWithoutWishlistInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUpdateManyWithWhereWithoutWishlistInputObjectZodSchema = makeSchema();
