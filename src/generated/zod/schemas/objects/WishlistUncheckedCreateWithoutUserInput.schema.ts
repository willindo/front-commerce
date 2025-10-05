import * as z from 'zod';
import { WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema as WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateNestedManyWithoutWishlistInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema).optional()
}).strict();
export const WishlistUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
