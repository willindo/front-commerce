import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { NestedIntNullableFilterObjectSchema as NestedIntNullableFilterObjectSchema } from './NestedIntNullableFilter.schema';
import { NestedEnumSizeNullableFilterObjectSchema as NestedEnumSizeNullableFilterObjectSchema } from './NestedEnumSizeNullableFilter.schema'

const nestedenumsizenullablewithaggregatesfilterSchema = z.object({
  equals: SizeSchema.optional().nullable(),
  in: SizeSchema.array().optional().nullable(),
  notIn: SizeSchema.array().optional().nullable(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeNullableWithAggregatesFilterObjectSchema)]).optional().nullable(),
  _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSizeNullableFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSizeNullableFilterObjectSchema).optional()
}).strict();
export const NestedEnumSizeNullableWithAggregatesFilterObjectSchema: z.ZodType<any> = nestedenumsizenullablewithaggregatesfilterSchema as unknown as z.ZodType<any>;
export const NestedEnumSizeNullableWithAggregatesFilterObjectZodSchema = nestedenumsizenullablewithaggregatesfilterSchema;
