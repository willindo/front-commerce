import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema as OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema } from './OrderItemUncheckedCreateNestedManyWithoutOrderInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string(),
  total: z.number(),
  status: OrderStatusSchema.optional(),
  createdAt: z.coerce.date().optional(),
  items: z.lazy(() => OrderItemUncheckedCreateNestedManyWithoutOrderInputObjectSchema)
}).strict();
export const OrderUncheckedCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderUncheckedCreateInputObjectZodSchema = makeSchema();
