import * as z from 'zod';
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
export const WishlistUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistUpsertWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
