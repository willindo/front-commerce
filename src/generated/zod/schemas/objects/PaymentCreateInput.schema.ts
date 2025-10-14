import * as z from 'zod';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema';
import { UserCreateNestedOneWithoutPaymentsInputObjectSchema as UserCreateNestedOneWithoutPaymentsInputObjectSchema } from './UserCreateNestedOneWithoutPaymentsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  orderId: z.string(),
  razorpayOrderId: z.string().optional().nullable(),
  razorpayPaymentId: z.string().optional().nullable(),
  signature: z.string().optional().nullable(),
  amount: z.number().int(),
  currency: z.string(),
  status: PaymentStatusSchema,
  createdAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutPaymentsInputObjectSchema)
}).strict();
export const PaymentCreateInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentCreateInputObjectZodSchema = makeSchema();
