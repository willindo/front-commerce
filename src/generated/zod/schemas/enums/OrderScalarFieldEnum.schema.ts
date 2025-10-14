import * as z from 'zod';

export const OrderScalarFieldEnumSchema = z.enum(['id', 'userId', 'total', 'status', 'paymentId', 'paymentStatus', 'address', 'notes', 'createdAt', 'updatedAt'])

export type OrderScalarFieldEnum = z.infer<typeof OrderScalarFieldEnumSchema>;