import * as z from 'zod';
import { ProductUpdateWithoutWishlistItemsInputObjectSchema as ProductUpdateWithoutWishlistItemsInputObjectSchema } from './ProductUpdateWithoutWishlistItemsInput.schema';
import { ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema as ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedUpdateWithoutWishlistItemsInput.schema';
import { ProductCreateWithoutWishlistItemsInputObjectSchema as ProductCreateWithoutWishlistItemsInputObjectSchema } from './ProductCreateWithoutWishlistItemsInput.schema';
import { ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema as ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema } from './ProductUncheckedCreateWithoutWishlistItemsInput.schema';
import { ProductWhereInputObjectSchema as ProductWhereInputObjectSchema } from './ProductWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => ProductUpdateWithoutWishlistItemsInputObjectSchema), z.lazy(() => ProductUncheckedUpdateWithoutWishlistItemsInputObjectSchema)]),
  create: z.union([z.lazy(() => ProductCreateWithoutWishlistItemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutWishlistItemsInputObjectSchema)]),
  where: z.lazy(() => ProductWhereInputObjectSchema).optional()
}).strict();
export const ProductUpsertWithoutWishlistItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductUpsertWithoutWishlistItemsInputObjectZodSchema = makeSchema();
