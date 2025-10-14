import * as z from 'zod';
export const ProductUpdateResultSchema = z.nullable(z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().optional(),
  price: z.number(),
  stock: z.number().int(),
  images: z.array(z.string()),
  categoryId: z.string().optional(),
  category: z.unknown().optional(),
  gender: z.unknown().optional(),
  sizes: z.array(z.unknown()),
  createdAt: z.date(),
  updatedAt: z.date(),
  cartItems: z.array(z.unknown()),
  wishlistItems: z.array(z.unknown()),
  orderItems: z.array(z.unknown())
}));