import * as z from 'zod';
import { OrderItemCreateManyInputObjectSchema as OrderItemCreateManyInputObjectSchema } from './objects/OrderItemCreateManyInput.schema';

export const OrderItemCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ OrderItemCreateManyInputObjectSchema, z.array(OrderItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const OrderItemCreateManyZodSchema = z.object({ data: z.union([ OrderItemCreateManyInputObjectSchema, z.array(OrderItemCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();