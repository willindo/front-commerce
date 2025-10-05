import * as z from 'zod';
import { UserCreateNestedOneWithoutCartsInputObjectSchema as UserCreateNestedOneWithoutCartsInputObjectSchema } from './UserCreateNestedOneWithoutCartsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartsInputObjectSchema)
}).strict();
export const CartCreateWithoutItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartCreateWithoutItemsInputObjectZodSchema = makeSchema();
