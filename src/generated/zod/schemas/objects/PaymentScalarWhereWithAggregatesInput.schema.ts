import * as z from 'zod';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { StringNullableWithAggregatesFilterObjectSchema as StringNullableWithAggregatesFilterObjectSchema } from './StringNullableWithAggregatesFilter.schema';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { EnumPaymentStatusWithAggregatesFilterObjectSchema as EnumPaymentStatusWithAggregatesFilterObjectSchema } from './EnumPaymentStatusWithAggregatesFilter.schema';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const paymentscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  orderId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  razorpayOrderId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  razorpayPaymentId: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  signature: z.union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()]).optional().nullable(),
  amount: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  currency: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  status: z.union([z.lazy(() => EnumPaymentStatusWithAggregatesFilterObjectSchema), PaymentStatusSchema]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const PaymentScalarWhereWithAggregatesInputObjectSchema: z.ZodType<any> = paymentscalarwherewithaggregatesinputSchema as unknown as z.ZodType<any>;
export const PaymentScalarWhereWithAggregatesInputObjectZodSchema = paymentscalarwherewithaggregatesinputSchema;
