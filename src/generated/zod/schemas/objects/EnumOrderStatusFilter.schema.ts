import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema';
import { NestedEnumOrderStatusFilterObjectSchema as NestedEnumOrderStatusFilterObjectSchema } from './NestedEnumOrderStatusFilter.schema'

const makeSchema = () => z.object({
  equals: OrderStatusSchema.optional(),
  in: OrderStatusSchema.array().optional(),
  notIn: OrderStatusSchema.array().optional(),
  not: z.union([OrderStatusSchema, z.lazy(() => NestedEnumOrderStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumOrderStatusFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumOrderStatusFilterObjectZodSchema = makeSchema();
