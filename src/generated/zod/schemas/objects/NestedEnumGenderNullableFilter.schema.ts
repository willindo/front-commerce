import * as z from 'zod';
import { GenderSchema } from '../enums/Gender.schema'

const nestedenumgendernullablefilterSchema = z.object({
  equals: GenderSchema.optional().nullable(),
  in: GenderSchema.array().optional().nullable(),
  notIn: GenderSchema.array().optional().nullable(),
  not: z.union([GenderSchema, z.lazy(() => NestedEnumGenderNullableFilterObjectSchema)]).optional().nullable()
}).strict();
export const NestedEnumGenderNullableFilterObjectSchema: z.ZodType<any> = nestedenumgendernullablefilterSchema as unknown as z.ZodType<any>;
export const NestedEnumGenderNullableFilterObjectZodSchema = nestedenumgendernullablefilterSchema;
