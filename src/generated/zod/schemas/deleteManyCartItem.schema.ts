import * as z from 'zod';
import { CartItemWhereInputObjectSchema as CartItemWhereInputObjectSchema } from './objects/CartItemWhereInput.schema';

export const CartItemDeleteManySchema: z.ZodType<any> = z.object({ where: CartItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const CartItemDeleteManyZodSchema = z.object({ where: CartItemWhereInputObjectSchema.optional() }).strict();