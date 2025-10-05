import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  set: SizeSchema.optional()
}).strict();
export const EnumSizeFieldUpdateOperationsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumSizeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
