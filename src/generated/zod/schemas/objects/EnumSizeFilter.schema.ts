import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema';
import { NestedEnumSizeFilterObjectSchema as NestedEnumSizeFilterObjectSchema } from './NestedEnumSizeFilter.schema'

const makeSchema = () => z.object({
  equals: SizeSchema.optional(),
  in: SizeSchema.array().optional(),
  notIn: SizeSchema.array().optional(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeFilterObjectSchema)]).optional()
}).strict();
export const EnumSizeFilterObjectSchema: z.ZodType<Prisma.EnumSizeFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSizeFilter>;
export const EnumSizeFilterObjectZodSchema = makeSchema();
