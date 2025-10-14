import * as z from 'zod';
export const ProductGroupByResultSchema = z.array(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  stock: z.number().int(),
  images: z.array(z.string()),
  categoryId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    name: z.number(),
    description: z.number(),
    price: z.number(),
    stock: z.number(),
    images: z.number(),
    categoryId: z.number(),
    category: z.number(),
    gender: z.number(),
    sizes: z.number(),
    createdAt: z.number(),
    updatedAt: z.number(),
    cartItems: z.number(),
    wishlistItems: z.number(),
    orderItems: z.number()
  }).optional(),
  _sum: z.object({
    price: z.number().nullable(),
    stock: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    price: z.number().nullable(),
    stock: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    stock: z.number().int().nullable(),
    images: z.array(z.string()).nullable(),
    categoryId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    name: z.string().nullable(),
    description: z.string().nullable(),
    price: z.number().nullable(),
    stock: z.number().int().nullable(),
    images: z.array(z.string()).nullable(),
    categoryId: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));