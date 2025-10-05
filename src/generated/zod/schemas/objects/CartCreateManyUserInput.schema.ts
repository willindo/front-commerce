import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const CartCreateManyUserInputObjectSchema: z.ZodType<Prisma.CartCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.CartCreateManyUserInput>;
export const CartCreateManyUserInputObjectZodSchema = makeSchema();
