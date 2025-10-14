import * as z from 'zod';
import { UserCreateNestedOneWithoutCartInputObjectSchema as UserCreateNestedOneWithoutCartInputObjectSchema } from './UserCreateNestedOneWithoutCartInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartInputObjectSchema)
}).strict();
export const CartCreateWithoutItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const CartCreateWithoutItemsInputObjectZodSchema = makeSchema();
