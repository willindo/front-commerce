import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const nestedenumsizefilterSchema = z.object({
  equals: SizeSchema.optional(),
  in: SizeSchema.array().optional(),
  notIn: SizeSchema.array().optional(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeFilterObjectSchema)]).optional()
}).strict();
export const NestedEnumSizeFilterObjectSchema: z.ZodType<Prisma.NestedEnumSizeFilter> = nestedenumsizefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSizeFilter>;
export const NestedEnumSizeFilterObjectZodSchema = nestedenumsizefilterSchema;
