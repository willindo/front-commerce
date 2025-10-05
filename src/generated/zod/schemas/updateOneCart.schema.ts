import * as z from 'zod';
import { CartSelectObjectSchema as CartSelectObjectSchema } from './objects/CartSelect.schema';
import { CartIncludeObjectSchema as CartIncludeObjectSchema } from './objects/CartInclude.schema';
import { CartUpdateInputObjectSchema as CartUpdateInputObjectSchema } from './objects/CartUpdateInput.schema';
import { CartUncheckedUpdateInputObjectSchema as CartUncheckedUpdateInputObjectSchema } from './objects/CartUncheckedUpdateInput.schema';
import { CartWhereUniqueInputObjectSchema as CartWhereUniqueInputObjectSchema } from './objects/CartWhereUniqueInput.schema';

export const CartUpdateOneSchema: z.ZodType<any> = z.object({ select: CartSelectObjectSchema.optional(), include: CartIncludeObjectSchema.optional(), data: z.union([CartUpdateInputObjectSchema, CartUncheckedUpdateInputObjectSchema]), where: CartWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<any>;

export const CartUpdateOneZodSchema = z.object({ select: CartSelectObjectSchema.optional(), include: CartIncludeObjectSchema.optional(), data: z.union([CartUpdateInputObjectSchema, CartUncheckedUpdateInputObjectSchema]), where: CartWhereUniqueInputObjectSchema }).strict();