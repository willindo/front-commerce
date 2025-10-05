import * as z from 'zod';
import { WishlistCreateWithoutItemsInputObjectSchema as WishlistCreateWithoutItemsInputObjectSchema } from './WishlistCreateWithoutItemsInput.schema';
import { WishlistUncheckedCreateWithoutItemsInputObjectSchema as WishlistUncheckedCreateWithoutItemsInputObjectSchema } from './WishlistUncheckedCreateWithoutItemsInput.schema';
import { WishlistCreateOrConnectWithoutItemsInputObjectSchema as WishlistCreateOrConnectWithoutItemsInputObjectSchema } from './WishlistCreateOrConnectWithoutItemsInput.schema';
import { WishlistWhereUniqueInputObjectSchema as WishlistWhereUniqueInputObjectSchema } from './WishlistWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => WishlistCreateWithoutItemsInputObjectSchema), z.lazy(() => WishlistUncheckedCreateWithoutItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => WishlistCreateOrConnectWithoutItemsInputObjectSchema).optional(),
  connect: z.lazy(() => WishlistWhereUniqueInputObjectSchema).optional()
}).strict();
export const WishlistCreateNestedOneWithoutItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const WishlistCreateNestedOneWithoutItemsInputObjectZodSchema = makeSchema();
