import * as z from 'zod';
import { PaymentSelectObjectSchema as PaymentSelectObjectSchema } from './objects/PaymentSelect.schema';
import { PaymentCreateManyInputObjectSchema as PaymentCreateManyInputObjectSchema } from './objects/PaymentCreateManyInput.schema';

export const PaymentCreateManyAndReturnSchema: z.ZodType<any> = z.object({ select: PaymentSelectObjectSchema.optional(), data: z.union([ PaymentCreateManyInputObjectSchema, z.array(PaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const PaymentCreateManyAndReturnZodSchema = z.object({ select: PaymentSelectObjectSchema.optional(), data: z.union([ PaymentCreateManyInputObjectSchema, z.array(PaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();