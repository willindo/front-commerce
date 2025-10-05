import * as z from 'zod';
import { CartItemSelectObjectSchema as CartItemSelectObjectSchema } from './objects/CartItemSelect.schema';
import { CartItemUpdateManyMutationInputObjectSchema as CartItemUpdateManyMutationInputObjectSchema } from './objects/CartItemUpdateManyMutationInput.schema';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';

export const CartItemUpdateManyAndReturnSchema: z.ZodType<any> = z.object({ select: CartItemSelectObjectSchema.optional(), data: CartItemUpdateManyMutationInputObjectSchema, where: CartItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const CartItemUpdateManyAndReturnZodSchema = z.object({ select: CartItemSelectObjectSchema.optional(), data: CartItemUpdateManyMutationInputObjectSchema, where: CartItemWhereInputObjectSchema.optional() }).strict();