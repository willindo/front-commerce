import * as z from 'zod';
import { CartScalarWhereInputObjectSchema as CartScalarWhereInputObjectSchema } from './CartScalarWhereInput.schema';
import { CartUpdateManyMutationInputObjectSchema as CartUpdateManyMutationInputObjectSchema } from './CartUpdateManyMutationInput.schema';
import { CartUncheckedUpdateManyWithoutUserInputObjectSchema as CartUncheckedUpdateManyWithoutUserInputObjectSchema } from './CartUncheckedUpdateManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => CartScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => CartUpdateManyMutationInputObjectSchema), z.lazy(() => CartUncheckedUpdateManyWithoutUserInputObjectSchema)])
}).strict();
export const CartUpdateManyWithWhereWithoutUserInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartUpdateManyWithWhereWithoutUserInputObjectZodSchema = makeSchema();
