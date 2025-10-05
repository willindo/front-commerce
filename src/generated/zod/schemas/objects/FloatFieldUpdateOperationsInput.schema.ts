import * as z from 'zod';


const makeSchema = () => z.object({
  set: z.number().optional(),
  increment: z.number().optional(),
  decrement: z.number().optional(),
  multiply: z.number().optional(),
  divide: z.number().optional()
}).strict();
export const FloatFieldUpdateOperationsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const FloatFieldUpdateOperationsInputObjectZodSchema = makeSchema();
