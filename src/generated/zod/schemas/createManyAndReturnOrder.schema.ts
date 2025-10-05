import * as z from 'zod';
import { OrderSelectObjectSchema as OrderSelectObjectSchema } from './objects/OrderSelect.schema';
import { OrderCreateManyInputObjectSchema as OrderCreateManyInputObjectSchema } from './objects/OrderCreateManyInput.schema';

export const OrderCreateManyAndReturnSchema: z.ZodType<any> = z.object({ select: OrderSelectObjectSchema.optional(), data: z.union([ OrderCreateManyInputObjectSchema, z.array(OrderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<any>;

export const OrderCreateManyAndReturnZodSchema = z.object({ select: OrderSelectObjectSchema.optional(), data: z.union([ OrderCreateManyInputObjectSchema, z.array(OrderCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();