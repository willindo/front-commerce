import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema as WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema } from './WishlistItemUncheckedUpdateManyWithoutWishlistNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  items: z.lazy(() => WishlistItemUncheckedUpdateManyWithoutWishlistNestedInputObjectSchema).optional()
}).strict();
export const WishlistUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistUncheckedUpdateWithoutUserInputObjectZodSchema = makeSchema();
