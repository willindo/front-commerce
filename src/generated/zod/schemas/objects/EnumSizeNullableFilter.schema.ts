import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema';
import { NestedEnumSizeNullableFilterObjectSchema as NestedEnumSizeNullableFilterObjectSchema } from './NestedEnumSizeNullableFilter.schema'

const makeSchema = () => z.object({
  equals: SizeSchema.optional().nullable(),
  in: SizeSchema.array().optional().nullable(),
  notIn: SizeSchema.array().optional().nullable(),
  not: z.union([SizeSchema, z.lazy(() => NestedEnumSizeNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumSizeNullableFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumSizeNullableFilterObjectZodSchema = makeSchema();
