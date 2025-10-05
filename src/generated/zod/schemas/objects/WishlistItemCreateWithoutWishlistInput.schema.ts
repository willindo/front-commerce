import * as z from 'zod';
import { ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema as ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema } from './ProductCreateNestedOneWithoutWishlistItemsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  product: z.lazy(() => ProductCreateNestedOneWithoutWishlistItemsInputObjectSchema)
}).strict();
export const WishlistItemCreateWithoutWishlistInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemCreateWithoutWishlistInputObjectZodSchema = makeSchema();
