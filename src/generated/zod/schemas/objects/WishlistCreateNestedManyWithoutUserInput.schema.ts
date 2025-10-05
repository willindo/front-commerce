import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WishlistCreateWithoutUserInputObjectSchema as WishlistCreateWithoutUserInputObjectSchema } from './WishlistCreateWithoutUserInput.schema';
import { WishlistUncheckedCreateWithoutUserInputObjectSchema as WishlistUncheckedCreateWithoutUserInputObjectSchema } from './WishlistUncheckedCreateWithoutUserInput.schema';
import { WishlistCreateOrConnectWithoutUserInputObjectSchema as WishlistCreateOrConnectWithoutUserInputObjectSchema } from './WishlistCreateOrConnectWithoutUserInput.schema';
import { WishlistCreateManyUserInputEnvelopeObjectSchema as WishlistCreateManyUserInputEnvelopeObjectSchema } from './WishlistCreateManyUserInputEnvelope.schema';
import { WishlistWhereUniqueInputObjectSchema as WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WishlistCreateWithoutUserInputObjectSchema), z.lazy(() => WishlistCreateWithoutUserInputObjectSchema).array(), z.lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => WishlistCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => WishlistCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => WishlistCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => WishlistWhereUniqueInputObjectSchema), z.lazy(() => WishlistWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const WishlistCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.WishlistCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistCreateNestedManyWithoutUserInput>;
export const WishlistCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
