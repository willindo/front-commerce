import * as z from 'zod';
import { OrderCreateManyInputObjectSchema as OrderCreateManyInputObjectSchema } from './objects/OrderCreateManyInput.schema';

export const OrderCreateManySchema: z.ZodType<any> = z.object({ data: z.union([ OrderCreateManyInputObjectSchema, z.array(OrderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const OrderCreateManyZodSchema = z.object({ data: z.union([ OrderCreateManyInputObjectSchema, z.array(OrderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();