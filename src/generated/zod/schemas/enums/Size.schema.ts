import * as z from 'zod';

export const SizeSchema = z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL'])

export type Size = z.infer<typeof SizeSchema>;