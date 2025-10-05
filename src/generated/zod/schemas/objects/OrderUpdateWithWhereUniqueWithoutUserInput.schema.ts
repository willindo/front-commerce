import * as z from 'zod';
import { OrderWhereUniqueInputObjectSchema as OrderWhereUniqueInputObjectSchema } from './OrderWhereUniqueInput.schema';
import { OrderUpdateWithoutUserInputObjectSchema as OrderUpdateWithoutUserInputObjectSchema } from './OrderUpdateWithoutUserInput.schema';
import { OrderUncheckedUpdateWithoutUserInputObjectSchema as OrderUncheckedUpdateWithoutUserInputObjectSchema } from './OrderUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => OrderUpdateWithoutUserInputObjectSchema), z.lazy(() => OrderUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const OrderUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
