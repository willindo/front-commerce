import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  wishlistId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WishlistItemUncheckedUpdateManyWithoutProductInputObjectSchema: z.ZodType<Prisma.WishlistItemUncheckedUpdateManyWithoutProductInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemUncheckedUpdateManyWithoutProductInput>;
export const WishlistItemUncheckedUpdateManyWithoutProductInputObjectZodSchema = makeSchema();
