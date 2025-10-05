import * as z from 'zod';
import { OrderWhereInputObjectSchema as OrderWhereInputObjectSchema } from './objects/OrderWhereInput.schema';

export const OrderDeleteManySchema: z.ZodType<any> = z.object({ where: OrderWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<any>;

export const OrderDeleteManyZodSchema = z.object({ where: OrderWhereInputObjectSchema.optional() }).strict();