import * as z from 'zod';
import { CartItemUpdateManyMutationInputObjectSchema as CartItemUpdateManyMutationInputObjectSchema } from './objects/CartItemUpdateManyMutationInput.schema';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';

export const CartItemUpdateManySchema: z.ZodType<any> = z.object({ data: CartItemUpdateManyMutationInputObjectSchema, where: CartItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const CartItemUpdateManyZodSchema = z.object({ data: CartItemUpdateManyMutationInputObjectSchema, where: CartItemWhereInputObjectSchema.optional() }).strict();