import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  items: z.boolean().optional()
}).strict();
export const WishlistCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.WishlistCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.WishlistCountOutputTypeSelect>;
export const WishlistCountOutputTypeSelectObjectZodSchema = makeSchema();
