import * as z from 'zod';
export const OrderGroupByResultSchema = z.array(z.object({
  id: z.string(),
  userId: z.string(),
  total: z.number(),
  paymentId: z.string(),
  address: z.unknown(),
  notes: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  _count: z.object({
    id: z.number(),
    userId: z.number(),
    total: z.number(),
    status: z.number(),
    paymentId: z.number(),
    paymentStatus: z.number(),
    address: z.number(),
    notes: z.number(),
    user: z.number(),
    items: z.number(),
    createdAt: z.number(),
    updatedAt: z.number()
  }).optional(),
  _sum: z.object({
    total: z.number().nullable()
  }).nullable().optional(),
  _avg: z.object({
    total: z.number().nullable()
  }).nullable().optional(),
  _min: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    total: z.number().nullable(),
    paymentId: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional(),
  _max: z.object({
    id: z.string().nullable(),
    userId: z.string().nullable(),
    total: z.number().nullable(),
    paymentId: z.string().nullable(),
    notes: z.string().nullable(),
    createdAt: z.date().nullable(),
    updatedAt: z.date().nullable()
  }).nullable().optional()
}));