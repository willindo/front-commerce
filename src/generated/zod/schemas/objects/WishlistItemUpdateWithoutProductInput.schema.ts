import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { WishlistUpdateOneRequiredWithoutItemsNestedInputObjectSchema as WishlistUpdateOneRequiredWithoutItemsNestedInputObjectSchema } from './WishlistUpdateOneRequiredWithoutItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  wishlist: z.lazy(() => WishlistUpdateOneRequiredWithoutItemsNestedInputObjectSchema).optional()
}).strict();
export const WishlistItemUpdateWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUpdateWithoutProductInputObjectZodSchema = makeSchema();
