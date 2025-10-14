import * as z from 'zod';
import { PaymentSelectObjectSchema as PaymentSelectObjectSchema } from './objects/PaymentSelect.schema';
import { PaymentIncludeObjectSchema as PaymentIncludeObjectSchema } from './objects/PaymentInclude.schema';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './objects/PaymentWhereUniqueInput.schema';

export const PaymentFindUniqueSchema: z.ZodType<any> = z.object({ select: PaymentSelectObjectSchema.optional(), include: PaymentIncludeObjectSchema.optional(), where: PaymentWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<any>;

export const PaymentFindUniqueZodSchema = z.object({ select: PaymentSelectObjectSchema.optional(), include: PaymentIncludeObjectSchema.optional(), where: PaymentWhereUniqueInputObjectSchema }).strict();