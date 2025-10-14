import * as z from 'zod';
import { PaymentWhereInputObjectSchema as PaymentWhereInputObjectSchema } from './objects/PaymentWhereInput.schema';

export const PaymentDeleteManySchema: z.ZodType<any> = z.object({ where: PaymentWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const PaymentDeleteManyZodSchema = z.object({ where: PaymentWhereInputObjectSchema.optional() }).strict();