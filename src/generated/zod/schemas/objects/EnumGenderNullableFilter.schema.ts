import * as z from 'zod';
import { GenderSchema } from '../enums/Gender.schema';
import { NestedEnumGenderNullableFilterObjectSchema as NestedEnumGenderNullableFilterObjectSchema } from './NestedEnumGenderNullableFilter.schema'

const makeSchema = () => z.object({
  equals: GenderSchema.optional().nullable(),
  in: GenderSchema.array().optional().nullable(),
  notIn: GenderSchema.array().optional().nullable(),
  not: z.union([GenderSchema, z.lazy(() => NestedEnumGenderNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const EnumGenderNullableFilterObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumGenderNullableFilterObjectZodSchema = makeSchema();
