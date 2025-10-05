import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const nestedenumsizenullablefilterSchema = z.object({
  equals: SizeSchema.optional().nullable(),
  in: SizeSchema.array().optional().nullable(),
  notIn: SizeSchema.array().optional().nullable(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumSizeNullableFilterObjectSchema: z.ZodType<Prisma.NestedEnumSizeNullableFilter> = nestedenumsizenullablefilterSchema as unknown as z.ZodType<Prisma.NestedEnumSizeNullableFilter>;
export const NestedEnumSizeNullableFilterObjectZodSchema = nestedenumsizenullablefilterSchema;
