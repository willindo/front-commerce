import * as z from 'zod';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentCreateWithoutUserInputObjectSchema as PaymentCreateWithoutUserInputObjectSchema } from './PaymentCreateWithoutUserInput.schema';
import { PaymentUncheckedCreateWithoutUserInputObjectSchema as PaymentUncheckedCreateWithoutUserInputObjectSchema } from './PaymentUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => PaymentCreateWithoutUserInputObjectSchema), z.lazy(() => PaymentUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const PaymentCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
