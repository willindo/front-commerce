import * as z from 'zod';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './OrderItemWhereUniqueInput.schema';
import { OrderItemUpdateWithoutProductInputObjectSchema as OrderItemUpdateWithoutProductInputObjectSchema } from './OrderItemUpdateWithoutProductInput.schema';
import { OrderItemUncheckedUpdateWithoutProductInputObjectSchema as OrderItemUncheckedUpdateWithoutProductInputObjectSchema } from './OrderItemUncheckedUpdateWithoutProductInput.schema';
import { OrderItemCreateWithoutProductInputObjectSchema as OrderItemCreateWithoutProductInputObjectSchema } from './OrderItemCreateWithoutProductInput.schema';
import { OrderItemUncheckedCreateWithoutProductInputObjectSchema as OrderItemUncheckedCreateWithoutProductInputObjectSchema } from './OrderItemUncheckedCreateWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => OrderItemWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => OrderItemUpdateWithoutProductInputObjectSchema), z.lazy(() => OrderItemUncheckedUpdateWithoutProductInputObjectSchema)]),
  create: z.union([z.lazy(() => OrderItemCreateWithoutProductInputObjectSchema), z.lazy(() => OrderItemUncheckedCreateWithoutProductInputObjectSchema)])
}).strict();
export const OrderItemUpsertWithWhereUniqueWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const OrderItemUpsertWithWhereUniqueWithoutProductInputObjectZodSchema = makeSchema();
