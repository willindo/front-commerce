import * as z from 'zod';
import { CartWhereUniqueInputObjectSchema as CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutItemsInputObjectSchema as CartCreateWithoutItemsInputObjectSchema } from './CartCreateWithoutItemsInput.schema';
import { CartUncheckedCreateWithoutItemsInputObjectSchema as CartUncheckedCreateWithoutItemsInputObjectSchema } from './CartUncheckedCreateWithoutItemsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CartCreateWithoutItemsInputObjectSchema), z.lazy(() => CartUncheckedCreateWithoutItemsInputObjectSchema)])
}).strict();
export const CartCreateOrConnectWithoutItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartCreateOrConnectWithoutItemsInputObjectZodSchema = makeSchema();
