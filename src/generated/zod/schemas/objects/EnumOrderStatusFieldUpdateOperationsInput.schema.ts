import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema'

const makeSchema = () => z.object({
  set: OrderStatusSchema.optional()
}).strict();
export const EnumOrderStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumOrderStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
