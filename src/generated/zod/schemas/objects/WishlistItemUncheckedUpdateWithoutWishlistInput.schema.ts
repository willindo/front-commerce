import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  productId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const WishlistItemUncheckedUpdateWithoutWishlistInputObjectSchema: z.ZodType<Prisma.WishlistItemUncheckedUpdateWithoutWishlistInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemUncheckedUpdateWithoutWishlistInput>;
export const WishlistItemUncheckedUpdateWithoutWishlistInputObjectZodSchema = makeSchema();
