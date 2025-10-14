import * as z from 'zod';
import { PaymentIncludeObjectSchema as PaymentIncludeObjectSchema } from './objects/PaymentInclude.schema';
import { PaymentOrderByWithRelationInputObjectSchema as PaymentOrderByWithRelationInputObjectSchema } from './objects/PaymentOrderByWithRelationInput.schema';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './objects/PaymentWhereInput.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './objects/PaymentWhereUniqueInput.schema';
import { PaymentScalarFieldEnumSchema } from './enums/PaymentScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const PaymentFindFirstOrThrowSelectSchema: z.ZodType<any> = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    orderId: z.boolean().optional(),
    razorpayOrderId: z.boolean().optional(),
    razorpayPaymentId: z.boolean().optional(),
    signature: z.boolean().optional(),
    amount: z.boolean().optional(),
    currency: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict() as unknown as z.ZodType<any>;

export const PaymentFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    orderId: z.boolean().optional(),
    razorpayOrderId: z.boolean().optional(),
    razorpayPaymentId: z.boolean().optional(),
    signature: z.boolean().optional(),
    amount: z.boolean().optional(),
    currency: z.boolean().optional(),
    status: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    user: z.boolean().optional()
  }).strict();

export const PaymentFindFirstOrThrowSchema: z.ZodType<any> = z.object({ select: PaymentFindFirstOrThrowSelectSchema.optional(), include: PaymentIncludeObjectSchema.optional(), orderBy: z.union([PaymentOrderByWithRelationInputObjectSchema, PaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PaymentWhereInputObjectSchema.optional(), cursor: PaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PaymentScalarFieldEnumSchema, PaymentScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<any>;

export const PaymentFindFirstOrThrowZodSchema = z.object({ select: PaymentFindFirstOrThrowSelectSchema.optional(), include: PaymentIncludeObjectSchema.optional(), orderBy: z.union([PaymentOrderByWithRelationInputObjectSchema, PaymentOrderByWithRelationInputObjectSchema.array()]).optional(), where: PaymentWhereInputObjectSchema.optional(), cursor: PaymentWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([PaymentScalarFieldEnumSchema, PaymentScalarFieldEnumSchema.array()]).optional() }).strict();