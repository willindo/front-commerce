import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  set: SizeSchema.optional()
}).strict();
export const NullableEnumSizeFieldUpdateOperationsInputObjectSchema: z.ZodType<Prisma.NullableEnumSizeFieldUpdateOperationsInput> = makeSchema() as unknown as z.ZodType<Prisma.NullableEnumSizeFieldUpdateOperationsInput>;
export const NullableEnumSizeFieldUpdateOperationsInputObjectZodSchema = makeSchema();
