import * as z from 'zod';
import { WishlistCreateNestedOneWithoutItemsInputObjectSchema as WishlistCreateNestedOneWithoutItemsInputObjectSchema } from './WishlistCreateNestedOneWithoutItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  wishlist: z.lazy(() => WishlistCreateNestedOneWithoutItemsInputObjectSchema)
}).strict();
export const WishlistItemCreateWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemCreateWithoutProductInputObjectZodSchema = makeSchema();
