import * as z from 'zod';
import { OrderScalarWhereInputObjectSchema as OrderScalarWhereInputObjectSchema } from './OrderScalarWhereInput.schema';
import { OrderUpdateManyMutationInputObjectSchema as OrderUpdateManyMutationInputObjectSchema } from './OrderUpdateManyMutationInput.schema';
import { OrderUncheckedUpdateManyWithoutUserInputObjectSchema as OrderUncheckedUpdateManyWithoutUserInputObjectSchema } from './OrderUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => OrderUpdateManyMutationInputObjectSchema), z.lazy(() => OrderUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const OrderUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
