import * as z from 'zod';
import { CartWhereUniqueInputObjectSchema as CartWhereUniqueInputObjectSchema } from './CartWhereUniqueInput.schema';
import { CartCreateWithoutUserInputObjectSchema as CartCreateWithoutUserInputObjectSchema } from './CartCreateWithoutUserInput.schema';
import { CartUncheckedCreateWithoutUserInputObjectSchema as CartUncheckedCreateWithoutUserInputObjectSchema } from './CartUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => CartCreateWithoutUserInputObjectSchema), z.lazy(() => CartUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const CartCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
