import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema as ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutWishlistItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema).optional()
}).strict();
export const WishlistItemUpdateWithoutWishlistInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUpdateWithoutWishlistInputObjectZodSchema = makeSchema();
