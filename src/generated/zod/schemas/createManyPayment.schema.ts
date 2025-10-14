import * as z from 'zod';
import { PaymentCreateManyInputObjectSchema as PaymentCreateManyInputObjectSchema } from './objects/PaymentCreateManyInput.schema';

export const PaymentCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ PaymentCreateManyInputObjectSchema, z.array(PaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const PaymentCreateManyZodSchema = z.object({ data: z.union([ PaymentCreateManyInputObjectSchema, z.array(PaymentCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();