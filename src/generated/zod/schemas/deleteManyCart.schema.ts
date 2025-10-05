import * as z from 'zod';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';

export const CartDeleteManySchema: z.ZodType<any> = z.object({ where: CartWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const CartDeleteManyZodSchema = z.object({ where: CartWhereInputObjectSchema.optional() }).strict();