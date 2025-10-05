import * as z from 'zod';


const makeSchema = () => z.object({
  set: z.string().optional()
}).strict();
export const NullableStringFieldUpdateOperationsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const NullableStringFieldUpdateOperationsInputObjectZodSchema = makeSchema();
