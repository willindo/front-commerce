import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  createdAt: z.coerce.date().optional()
}).strict();
export const WishlistCreateManyUserInputObjectSchema: z.ZodType<Prisma.WishlistCreateManyUserInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistCreateManyUserInput>;
export const WishlistCreateManyUserInputObjectZodSchema = makeSchema();
