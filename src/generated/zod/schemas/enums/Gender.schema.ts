import * as z from 'zod';

export const GenderSchema = z.enum(['MENS', 'WOMENS', 'BOYS', 'GIRLS', 'UNISEX'])

export type Gender = z.infer<typeof GenderSchema>;