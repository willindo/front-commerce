import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema';
import { NestedEnumSizeNullableWithAggregatesFilterObjectSchema as NestedEnumSizeNullableWithAggregatesFilterObjectSchema } from './NestedEnumSizeNullableWithAggregatesFilter.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumSizeNullableFilterObjectSchema as NestedEnumSizeNullableFilterObjectSchema } from './NestedEnumSizeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: SizeSchema.optional().nullable(),
  in: SizeSchema.array().optional().nullable(),
  notIn: SizeSchema.array().optional().nullable(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSizeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSizeNullableFilterObjectSchema).optional()
}).strict();
export const EnumSizeNullableWithAggregatesFilterObjectSchema: z.ZodType<Prisma.EnumSizeNullableWithAggregatesFilter> = makeSchema() as unknown as z.ZodType<Prisma.EnumSizeNullableWithAggregatesFilter>;
export const EnumSizeNullableWithAggregatesFilterObjectZodSchema = makeSchema();
