import * as z from 'zod';
import { WishlistScalarWhereInputObjectSchema as WishlistScalarWhereInputObjectSchema } from './WishlistScalarWhereInput.schema';
import { WishlistUpdateManyMutationInputObjectSchema as WishlistUpdateManyMutationInputObjectSchema } from './WishlistUpdateManyMutationInput.schema';
import { WishlistUncheckedUpdateManyWithoutUserInputObjectSchema as WishlistUncheckedUpdateManyWithoutUserInputObjectSchema } from './WishlistUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WishlistScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WishlistUpdateManyMutationInputObjectSchema), z.lazy(() => WishlistUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const WishlistUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
