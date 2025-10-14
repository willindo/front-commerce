import * as z from 'zod';
export const CartItemAggregateResultSchema = z.object({  _count: z.object({
    id: z.number(),
    cartId: z.number(),
    productId: z.number(),
    size: z.number(),
    quantity: z.number(),
    cart: z.number(),
    product: z.number(),
    productName: z.number(),
    productPrice: z.number(),
    productDescription: z.number(),
    productImage: z.number()
  }).optional(),
  _sum: z.object({
    quantity: z.number().nullable(),
    productPrice: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    quantity: z.number().nullable(),
    productPrice: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    cartId: z.string().nullable(),
    productId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    productName: z.string().nullable(),
    productPrice: z.number().nullable(),
    productDescription: z.string().nullable(),
    productImage: z.string().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    cartId: z.string().nullable(),
    productId: z.string().nullable(),
    quantity: z.number().int().nullable(),
    productName: z.string().nullable(),
    productPrice: z.number().nullable(),
    productDescription: z.string().nullable(),
    productImage: z.string().nullable()
  }).nullable().optional()});