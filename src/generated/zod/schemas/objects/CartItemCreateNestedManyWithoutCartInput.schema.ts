import * as z from 'zod';
import { CartItemCreateWithoutCartInputObjectSchema as CartItemCreateWithoutCartInputObjectSchema } from './CartItemCreateWithoutCartInput.schema';
import { CartItemUncheckedCreateWithoutCartInputObjectSchema as CartItemUncheckedCreateWithoutCartInputObjectSchema } from './CartItemUncheckedCreateWithoutCartInput.schema';
import { CartItemCreateOrConnectWithoutCartInputObjectSchema as CartItemCreateOrConnectWithoutCartInputObjectSchema } from './CartItemCreateOrConnectWithoutCartInput.schema';
import { CartItemCreateManyCartInputEnvelopeObjectSchema as CartItemCreateManyCartInputEnvelopeObjectSchema } from './CartItemCreateManyCartInputEnvelope.schema';
import { CartItemWhereUniqueInputObjectSchema as CartItemWhereUniqueInputObjectSchema } from './CartItemWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartItemCreateWithoutCartInputObjectSchema), z.lazy(() => CartItemCreateWithoutCartInputObjectSchema).array(), z.lazy(() => CartItemUncheckedCreateWithoutCartInputObjectSchema), z.lazy(() => CartItemUncheckedCreateWithoutCartInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartItemCreateOrConnectWithoutCartInputObjectSchema), z.lazy(() => CartItemCreateOrConnectWithoutCartInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartItemCreateManyCartInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CartItemWhereUniqueInputObjectSchema), z.lazy(() => CartItemWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CartItemCreateNestedManyWithoutCartInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartItemCreateNestedManyWithoutCartInputObjectZodSchema = makeSchema();
