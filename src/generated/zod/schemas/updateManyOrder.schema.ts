import * as z from 'zod';
import { OrderUpdateManyMutationInputObjectSchema as OrderUpdateManyMutationInputObjectSchema } from './objects/OrderUpdateManyMutationInput.schema';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';

export const OrderUpdateManySchema: z.ZodType<any> = z.object({ data: OrderUpdateManyMutationInputObjectSchema, where: OrderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const OrderUpdateManyZodSchema = z.object({ data: OrderUpdateManyMutationInputObjectSchema, where: OrderWhereInputObjectSchema.optional() }).strict();