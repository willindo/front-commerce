import * as z from 'zod';


const makeSchema = () => z.object({
  set: z.coerce.date().optional()
}).strict();
export const DateTimeFieldUpdateOperationsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const DateTimeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
