import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WishlistCreateWithoutUserInputObjectSchema as WishlistCreateWithoutUserInputObjectSchema } from './WishlistCreateWithoutUserInput.schema';
import { WishlistUncheckedCreateWithoutUserInputObjectSchema as WishlistUncheckedCreateWithoutUserInputObjectSchema } from './WishlistUncheckedCreateWithoutUserInput.schema';
import { WishlistCreateOrConnectWithoutUserInputObjectSchema as WishlistCreateOrConnectWithoutUserInputObjectSchema } from './WishlistCreateOrConnectWithoutUserInput.schema';
import { WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema as WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema } from './WishlistUpsertWithWhereUniqueWithoutUserInput.schema';
import { WishlistCreateManyUserInputEnvelopeObjectSchema as WishlistCreateManyUserInputEnvelopeObjectSchema } from './WishlistCreateManyUserInputEnvelope.schema';
import { WishlistWhereUniqueInputObjectSchema as WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';
import { WishlistUpdateWithWhereUniqueWithoutUserInputObjectSchema as WishlistUpdateWithWhereUniqueWithoutUserInputObjectSchema } from './WishlistUpdateWithWhereUniqueWithoutUserInput.schema';
import { WishlistUpdateManyWithWhereWithoutUserInputObjectSchema as WishlistUpdateManyWithWhereWithoutUserInputObjectSchema } from './WishlistUpdateManyWithWhereWithoutUserInput.schema';
import { WishlistScalarWhereInputObjectSchema as WishlistScalarWhereInputObjectSchema } from './WishlistScalarWhereInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WishlistCreateWithoutUserInputObjectSchema), z.lazy(() => WishlistCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WishlistCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WishlistCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  upsert: z.union([z.lazy(() => WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WishlistCreateManyUserInputEnvelopeObjectSchema).optional(),
  set: z.union([z.lazy(() => WishlistWhereUniqueInputObjectSchema), z.lazy(() => WishlistWhereUniqueInputObjectSchema).array()]).optional(),
  disconnect: z.union([z.lazy(() => WishlistWhereUniqueInputObjectSchema), z.lazy(() => WishlistWhereUniqueInputObjectSchema).array()]).optional(),
  delete: z.union([z.lazy(() => WishlistWhereUniqueInputObjectSchema), z.lazy(() => WishlistWhereUniqueInputObjectSchema).array()]).optional(),
  connect: z.union([z.lazy(() => WishlistWhereUniqueInputObjectSchema), z.lazy(() => WishlistWhereUniqueInputObjectSchema).array()]).optional(),
  update: z.union([z.lazy(() => WishlistUpdateWithWhereUniqueWithoutUserInputObjectSchema), z.lazy(() => WishlistUpdateWithWhereUniqueWithoutUserInputObjectSchema).array()]).optional(),
  updateMany: z.union([z.lazy(() => WishlistUpdateManyWithWhereWithoutUserInputObjectSchema), z.lazy(() => WishlistUpdateManyWithWhereWithoutUserInputObjectSchema).array()]).optional(),
  deleteMany: z.union([z.lazy(() => WishlistScalarWhereInputObjectSchema), z.lazy(() => WishlistScalarWhereInputObjectSchema).array()]).optional()
}).strict();
export const WishlistUpdateManyWithoutUserNestedInputObjectSchema: z.ZodType<Prisma.WishlistUpdateManyWithoutUserNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistUpdateManyWithoutUserNestedInput>;
export const WishlistUpdateManyWithoutUserNestedInputObjectZodSchema = makeSchema();
