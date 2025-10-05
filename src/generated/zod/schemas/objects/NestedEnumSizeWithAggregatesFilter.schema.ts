import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { NestedIntFilterObjectSchema as NestedIntFilterObjectSchema } from './NestedIntFilter.schema';
import { NestedEnumSizeFilterObjectSchema as NestedEnumSizeFilterObjectSchema } from './NestedEnumSizeFilter.schema'

const nestedenumsizewithaggregatesfilterSchema = z.object({
  equals: SizeSchema.optional(),
  in: SizeSchema.array().optional(),
  notIn: SizeSchema.array().optional(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeWithAggregatesFilterObjectSchema)]).optional(),
  _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
  _min: z.lazy(() => NestedEnumSizeFilterObjectSchema).optional(),
  _max: z.lazy(() => NestedEnumSizeFilterObjectSchema).optional()
}).strict();
export const NestedEnumSizeWithAggregatesFilterObjectSchema: z.ZodType<any> = nestedenumsizewithaggregatesfilterSchema as unknown as z.ZodType<any>;
export const NestedEnumSizeWithAggregatesFilterObjectZodSchema = nestedenumsizewithaggregatesfilterSchema;
