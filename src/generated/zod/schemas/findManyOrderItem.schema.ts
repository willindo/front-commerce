import * as z from 'zod';
import { OrderItemIncludeObjectSchema as OrderItemIncludeObjectSchema } from './objects/OrderItemInclude.schema';
import { OrderItemOrderByWithRelationInputObjectSchema as OrderItemOrderByWithRelationInputObjectSchema } from './objects/OrderItemOrderByWithRelationInput.schema';
import { OrderItemWhereInputObjectSchema as OrderItemWhereInputObjectSchema } from './objects/OrderItemWhereInput.schema';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';
import { OrderItemScalarFieldEnumSchema } from './enums/OrderItemScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OrderItemFindManySelectSchema: z.ZodType<any> = z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    productId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    priceAtPurchase: z.boolean().optional(),
    order: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict() as unknown as z.ZodType<any>;

export const OrderItemFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    orderId: z.boolean().optional(),
    productId: z.boolean().optional(),
    quantity: z.boolean().optional(),
    priceAtPurchase: z.boolean().optional(),
    order: z.boolean().optional(),
    product: z.boolean().optional()
  }).strict();

export const OrderItemFindManySchema: z.ZodType<any> = z.object({ select: OrderItemFindManySelectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithRelationInputObjectSchema, OrderItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrderItemWhereInputObjectSchema.optional(), cursor: OrderItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderItemScalarFieldEnumSchema, OrderItemScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<any>;

export const OrderItemFindManyZodSchema = z.object({ select: OrderItemFindManySelectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), orderBy: z.union([OrderItemOrderByWithRelationInputObjectSchema, OrderItemOrderByWithRelationInputObjectSchema.array()]).optional(), where: OrderItemWhereInputObjectSchema.optional(), cursor: OrderItemWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OrderItemScalarFieldEnumSchema, OrderItemScalarFieldEnumSchema.array()]).optional() }).strict();