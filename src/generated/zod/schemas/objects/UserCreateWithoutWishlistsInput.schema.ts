import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { RoleSchema } from '../enums/Role.schema';
import { CartCreateNestedManyWithoutUserInputObjectSchema as CartCreateNestedManyWithoutUserInputObjectSchema } from './CartCreateNestedManyWithoutUserInput.schema';
import { OrderCreateNestedManyWithoutUserInputObjectSchema as OrderCreateNestedManyWithoutUserInputObjectSchema } from './OrderCreateNestedManyWithoutUserInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  email: z.string(),
  password: z.string(),
  name: z.string().optional().nullable(),
  role: RoleSchema.optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  carts: z.lazy(() => CartCreateNestedManyWithoutUserInputObjectSchema).optional(),
  orders: z.lazy(() => OrderCreateNestedManyWithoutUserInputObjectSchema).optional()
}).strict();
export const UserCreateWithoutWishlistsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutWishlistsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutWishlistsInput>;
export const UserCreateWithoutWishlistsInputObjectZodSchema = makeSchema();
