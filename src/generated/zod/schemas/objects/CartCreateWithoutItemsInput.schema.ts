import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { UserCreateNestedOneWithoutCartsInputObjectSchema as UserCreateNestedOneWithoutCartsInputObjectSchema } from './UserCreateNestedOneWithoutCartsInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutCartsInputObjectSchema)
}).strict();
export const CartCreateWithoutItemsInputObjectSchema: z.ZodType<Prisma.CartCreateWithoutItemsInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateWithoutItemsInput>;
export const CartCreateWithoutItemsInputObjectZodSchema = makeSchema();
