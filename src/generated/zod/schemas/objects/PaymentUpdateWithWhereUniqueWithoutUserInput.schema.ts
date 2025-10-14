import * as z from 'zod';
import { PaymentWhereUniqueInputObjectSchema as PaymentWhereUniqueInputObjectSchema } from './PaymentWhereUniqueInput.schema';
import { PaymentUpdateWithoutUserInputObjectSchema as PaymentUpdateWithoutUserInputObjectSchema } from './PaymentUpdateWithoutUserInput.schema';
import { PaymentUncheckedUpdateWithoutUserInputObjectSchema as PaymentUncheckedUpdateWithoutUserInputObjectSchema } from './PaymentUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateWithoutUserInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const PaymentUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
