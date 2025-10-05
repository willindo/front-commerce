import * as z from 'zod';
import { WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema as WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemUncheckedCreateNestedManyWithoutWishlistInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => WishlistItemUncheckedCreateNestedManyWithoutWishlistInputObjectSchema)
}).strict();
export const WishlistUncheckedCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistUncheckedCreateInputObjectZodSchema = makeSchema();
