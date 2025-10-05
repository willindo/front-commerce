import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { WishlistWhereUniqueInputObjectSchema as WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema';
import { WishlistUpdateWithoutUserInputObjectSchema as WishlistUpdateWithoutUserInputObjectSchema } from './WishlistUpdateWithoutUserInput.schema';
import { WishlistUncheckedUpdateWithoutUserInputObjectSchema as WishlistUncheckedUpdateWithoutUserInputObjectSchema } from './WishlistUncheckedUpdateWithoutUserInput.schema';
import { WishlistCreateWithoutUserInputObjectSchema as WishlistCreateWithoutUserInputObjectSchema } from './WishlistCreateWithoutUserInput.schema';
import { WishlistUncheckedCreateWithoutUserInputObjectSchema as WishlistUncheckedCreateWithoutUserInputObjectSchema } from './WishlistUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WishlistWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => WishlistUpdateWithoutUserInputObjectSchema), z.lazy(() => WishlistUncheckedUpdateWithoutUserInputObjectSchema)]),
  create: z.union([z.lazy(() => WishlistCreateWithoutUserInputObjectSchema), z.lazy(() => WishlistUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.WishlistUpsertWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistUpsertWithWhereUniqueWithoutUserInput>;
export const WishlistUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
