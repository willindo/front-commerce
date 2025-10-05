import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  size: SizeSchema,
  quantity: z.number().int()
}).strict();
export const ProductSizeCreateManyProductInputObjectSchema: z.ZodType<Prisma.ProductSizeCreateManyProductInput> = makeSchema() as unknown as z.ZodType<Prisma.ProductSizeCreateManyProductInput>;
export const ProductSizeCreateManyProductInputObjectZodSchema = makeSchema();
