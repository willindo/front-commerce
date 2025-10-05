import * as z from 'zod';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema';
import { ProductUpdateWithoutWishlistItemsInputObjectSchema as ProductUpdateWithoutWishlistItemsInputObjectSchema } from './ProductUpdateWithoutWishlistItemsInput.schema';
import { ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema as ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutWishlistItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ProductWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => ProductUpdateWithoutWishlistItemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema)])
}).strict();
export const ProductUpdateToOneWithWhereWithoutWishlistItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpdateToOneWithWhereWithoutWishlistItemsInputObjectZodSchema = makeSchema();
