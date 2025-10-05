import * as z from 'zod';
import { OrderStatusSchema } from '../enums/OrderStatus.schema'

const nestedenumorderstatusfilterSchema = z.object({
  equals: OrderStatusSchema.optional(),
  in: OrderStatusSchema.array().optional(),
  notIn: OrderStatusSchema.array().optional(),
  not: z.union([OrderStatusSchema, z.lazy(() => NestedEnumOrderStatusFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumOrderStatusFilterObjectSchema: z.ZodType<any> = nestedenumorderstatusfilterSchema as unknown as z.ZodType<any>;
export const NestedEnumOrderStatusFilterObjectZodSchema = nestedenumorderstatusfilterSchema;
