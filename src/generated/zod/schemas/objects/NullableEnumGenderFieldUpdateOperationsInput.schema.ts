import * as z from 'zod';
import { GenderSchema } from '../enums/Gender.schema'

const makeSchema = () => z.object({
  set: GenderSchema.optional()
}).strict();
export const NullableEnumGenderFieldUpdateOperationsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const NullableEnumGenderFieldUpdateOperationsInputObjectZodSchema = makeSchema();
