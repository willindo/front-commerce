import * as z from 'zod';
import { WishlistItemScalarWhereInputObjectSchema as WishlistItemScalarWhereInputObjectSchema } from './WishlistItemScalarWhereInput.schema';
import { WishlistItemUpdateManyMutationInputObjectSchema as WishlistItemUpdateManyMutationInputObjectSchema } from './WishlistItemUpdateManyMutationInput.schema';
import { WishlistItemUncheckedUpdateManyWithoutProductInputObjectSchema as WishlistItemUncheckedUpdateManyWithoutProductInputObjectSchema } from './WishlistItemUncheckedUpdateManyWithoutProductInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => WishlistItemScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => WishlistItemUpdateManyMutationInputObjectSchema), z.lazy(() => WishlistItemUncheckedUpdateManyWithoutProductInputObjectSchema)])
}).strict();
export const WishlistItemUpdateManyWithWhereWithoutProductInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistItemUpdateManyWithWhereWithoutProductInputObjectZodSchema = makeSchema();
