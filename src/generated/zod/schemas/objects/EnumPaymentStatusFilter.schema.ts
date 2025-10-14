import * as z from 'zod';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { NestedEnumPaymentStatusFilterObjectSchema as NestedEnumPaymentStatusFilterObjectSchema } from './NestedEnumPaymentStatusFilter.schema'

const makeSchema = () => z.object({
  equals: PaymentStatusSchema.optional(),
  in: PaymentStatusSchema.array().optional(),
  notIn: PaymentStatusSchema.array().optional(),
  not: z.union([PaymentStatusSchema, z.lazy(() => NestedEnumPaymentStatusFilterObjectSchema)]).optional()
}).strict();
export const EnumPaymentStatusFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumPaymentStatusFilterObjectZodSchema = makeSchema();
