import * as z from 'zod';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema as UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutCartsNestedInput.schema';
import { CartItemUpdateManyWithoutCartNestedInputObjectSchema as CartItemUpdateManyWithoutCartNestedInputObjectSchema } from './CartItemUpdateManyWithoutCartNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutCartsNestedInputObjectSchema).optional(),
  items: z.lazy(() => CartItemUpdateManyWithoutCartNestedInputObjectSchema).optional()
}).strict();
export const CartUpdateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartUpdateInputObjectZodSchema = makeSchema();
