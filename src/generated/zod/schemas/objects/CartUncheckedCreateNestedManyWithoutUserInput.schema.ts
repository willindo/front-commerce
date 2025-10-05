import * as z from 'zod';
import { CartCreateWithoutUserInputObjectSchema as CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema as CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';
import { CartCreateOrConnectWithoutUserInputObjectSchema as CartCreateOrConnectWithoutUserInputObjectSchema } from './CartCreateOrConnectWithoutUserInput.schema';
import { CartCreateManyUserInputEnvelopeObjectSchema as CartCreateManyUserInputEnvelopeObjectSchema } from './CartCreateManyUserInputEnvelope.schema';
import { CartWhereUniqueInputObjectSchema as CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartCreateWithoutUserInputObjectSchema), z.lazy(() => CartCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CartCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => CartWhereUniqueInputObjectSchema), z.lazy(() => CartWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const CartUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
