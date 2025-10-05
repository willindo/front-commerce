import * as z from 'zod';
import { CartUpdateManyMutationInputObjectSchema as CartUpdateManyMutationInputObjectSchema } from './objects/CartUpdateManyMutationInput.schema';
import { CartWhereInputObjectSchema as CartWhereInputObjectSchema } from './objects/CartWhereInput.schema';

export const CartUpdateManySchema: z.ZodType<any> = z.object({ data: CartUpdateManyMutationInputObjectSchema, where: CartWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const CartUpdateManyZodSchema = z.object({ data: CartUpdateManyMutationInputObjectSchema, where: CartWhereInputObjectSchema.optional() }).strict();