import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  set: SizeSchema.optional()
}).strict();
export const EnumSizeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.EnumSizeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.EnumSizeFieldUpdateOperationsInput>;
export const EnumSizeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
