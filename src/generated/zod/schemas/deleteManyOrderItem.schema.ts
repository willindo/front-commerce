import * as z from 'zod';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';

export const OrderItemDeleteManySchema: z.ZodType<any> = z.object({ where: OrderItemWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const OrderItemDeleteManyZodSchema = z.object({ where: OrderItemWhereInputObjectSchema.optional() }).strict();