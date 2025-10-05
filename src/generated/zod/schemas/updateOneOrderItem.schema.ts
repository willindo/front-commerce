import * as z from 'zod';
import { OrderItemSelectObjectSchema as OrderItemSelectObjectSchema } from './objects/OrderItemSelect.schema';
import { OrderItemIncludeObjectSchema as OrderItemIncludeObjectSchema } from './objects/OrderItemInclude.schema';
import { OrderItemUpdateInputObjectSchema as OrderItemUpdateInputObjectSchema } from './objects/OrderItemUpdateInput.schema';
import { OrderItemUncheckedUpdateInputObjectSchema as OrderItemUncheckedUpdateInputObjectSchema } from './objects/OrderItemUncheckedUpdateInput.schema';
import { OrderItemWhereUniqueInputObjectSchema as OrderItemWhereUniqueInputObjectSchema } from './objects/OrderItemWhereUniqueInput.schema';

export const OrderItemUpdateOneSchema: z.ZodType<any> = z.object({ select: OrderItemSelectObjectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), data: z.union([OrderItemUpdateInputObjectSchema, OrderItemUncheckedUpdateInputObjectSchema]), where: OrderItemWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<any>;

export const OrderItemUpdateOneZodSchema = z.object({ select: OrderItemSelectObjectSchema.optional(), include: OrderItemIncludeObjectSchema.optional(), data: z.union([OrderItemUpdateInputObjectSchema, OrderItemUncheckedUpdateInputObjectSchema]), where: OrderItemWhereUniqueInputObjectSchema }).strict();