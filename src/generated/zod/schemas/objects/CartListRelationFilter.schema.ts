import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './CartWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => CartWhereInputObjectSchema).optional(),
  some: z.lazy(() => CartWhereInputObjectSchema).optional(),
  none: z.lazy(() => CartWhereInputObjectSchema).optional()
}).strict();
export const CartListRelationFilterObjectSchema: z.ZodType<Prisma.CartListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.CartListRelationFilter>;
export const CartListRelationFilterObjectZodSchema = makeSchema();
