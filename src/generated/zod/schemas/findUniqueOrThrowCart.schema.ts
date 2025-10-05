import * as z from 'zod';
import { CartSelectObjectSchema as CartSelectObjectSchema } from './objects/CartSelect.schema';
import { CartIncludeObjectSchema as CartIncludeObjectSchema } from './objects/CartInclude.schema';
import { CartWhereUniqueInputObjectSchema as CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';

export const CartFindUniqueOrThrowSchema: z.ZodType<any> = z.object({ select: CartSelectObjectSchema.optional(), include: CartIncludeObjectSchema.optional(), where: CartWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<any>;

export const CartFindUniqueOrThrowZodSchema = z.object({ select: CartSelectObjectSchema.optional(), include: CartIncludeObjectSchema.optional(), where: CartWhereUniqueInputObjectSchema }).strict();