import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema as ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutWishlistItemsNestedInput.schema';
import { WishlistUpdateOneRequiredWithoutItemsNestedInputObjectSchema as WishlistUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './WishlistUpdateOneRequiredWithoutItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema).optional(),
  wishlist: z.lazy(() => WishlistUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional()
}).strict();
export const WishlistItemUpdateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUpdateInputObjectZodSchema = makeSchema();
