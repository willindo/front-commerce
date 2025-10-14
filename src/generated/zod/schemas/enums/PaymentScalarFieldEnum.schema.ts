import * as z from 'zod';

export const PaymentScalarFieldEnumSchema = z.enum(['id', 'userId', 'orderId', 'razorpayOrderId', 'razorpayPaymentId', 'signature', 'amount', 'currency', 'status', 'createdAt'])

export type PaymentScalarFieldEnum = z.infer<typeof PaymentScalarFieldEnumSchema>;