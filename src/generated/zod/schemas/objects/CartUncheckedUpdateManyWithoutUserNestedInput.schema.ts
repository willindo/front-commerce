import * as z from 'zod';
import { CartCreateWithoutUserInputObjectSchema as CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema as CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema';
import { CartCreateOrConnectWithoutUserInputObjectSchema as CartCreateOrConnectWithoutUserInputObjectSchema } from './CartCreateOrConnectWithoutUserInput.schema';
import { CartUpsertWithWhereUniqueWithoutUserInputObjectSchema as CartUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './CartUpsertWithWhereUniqueWithoutUserInput.schema';
import { CartCreateManyUserInputEnvelopeObjectSchema as CartCreateManyUserInputEnvelopeObjectSchema } from './CartCreateManyUserInputEnvelope.schema';
import { CartWhereUniqueInputObjectSchema as CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartUpdateWithWhereUniqueWithoutUserInputObjectSchema as CartUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './CartUpdateWithWhereUniqueWithoutUserInput.schema';
import { CartUpdateManyWithWhereWithoutUserInputObjectSchema as CartUpdateManyWithWhereWithoutUserInputObjectSchema } from './CartUpdateManyWithWhereWithoutUserInput.schema';
import { CartScalarWhereInputObjectSchema as CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => CartCreateWithoutUserInputObjectSchema), z.lazy(() => CartCreateWithoutUserInputObjectSchema).array(), z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => CartCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => CartCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => CartUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CartUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => CartCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => CartWhereUniqueInputObjectSchema), z.lazy(() => CartWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => CartWhereUniqueInputObjectSchema), z.lazy(() => CartWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => CartWhereUniqueInputObjectSchema), z.lazy(() => CartWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => CartWhereUniqueInputObjectSchema), z.lazy(() => CartWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => CartUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => CartUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => CartUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => CartUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => CartScalarWhereInputObjectSchema), z.lazy(() => CartScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const CartUncheckedUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartUncheckedUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
