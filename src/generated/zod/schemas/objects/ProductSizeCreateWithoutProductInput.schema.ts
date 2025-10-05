import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: SizeSchema,
  quantity: z.number().int()
}).strict();
export const ProductSizeCreateWithoutProductInputObjectSchema: z.ZodType<Prisma.ProductSizeCreateWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeCreateWithoutProductInput>;
export const ProductSizeCreateWithoutProductInputObjectZodSchema = makeSchema();
