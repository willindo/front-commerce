import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema as ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema } from './ProductUpdateOneRequiredWithoutWishlistItemsNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  product: z.lazy(() => ProductUpdateOneRequiredWithoutWishlistItemsNestedInputObjectSchema).optional()
}).strict();
export const WishlistItemUpdateWithoutWishlistInputObjectSchema: z.ZodType<Prisma.WishlistItemUpdateWithoutWishlistInput> = makeSchema() as unknown as z.ZodType<Prisma.WishlistItemUpdateWithoutWishlistInput>;
export const WishlistItemUpdateWithoutWishlistInputObjectZodSchema = makeSchema();
