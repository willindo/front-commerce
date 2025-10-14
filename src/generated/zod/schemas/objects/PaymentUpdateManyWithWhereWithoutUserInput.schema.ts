import * as z from 'zod';
import { PaymentScalarWhereInputObjectSchema as PaymentScalarWhereInputObjectSchema } from './PaymentScalarWhereInput.schema';
import { PaymentUpdateManyMutationInputObjectSchema as PaymentUpdateManyMutationInputObjectSchema } from './PaymentUpdateManyMutationInput.schema';
import { PaymentUncheckedUpdateManyWithoutUserInputObjectSchema as PaymentUncheckedUpdateManyWithoutUserInputObjectSchema } from './PaymentUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => PaymentScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => PaymentUpdateManyMutationInputObjectSchema), z.lazy(() => PaymentUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const PaymentUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const PaymentUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
