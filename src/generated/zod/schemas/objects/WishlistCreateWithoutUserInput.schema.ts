import * as z from 'zod';
import { WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema as WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema } from './WishlistItemCreateNestedManyWithoutWishlistInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => WishlistItemCreateNestedManyWithoutWishlistInputObjectSchema).optional()
}).strict();
export const WishlistCreateWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistCreateWithoutUserInputObjectZodSchema = makeSchema();
