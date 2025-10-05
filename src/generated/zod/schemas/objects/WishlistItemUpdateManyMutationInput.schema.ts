import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WishlistItemUpdateManyMutationInputObjectSchema: z.ZodType<Prisma.WishlistItemUpdateManyMutationInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemUpdateManyMutationInput>;
export const WishlistItemUpdateManyMutationInputObjectZodSchema = makeSchema();
