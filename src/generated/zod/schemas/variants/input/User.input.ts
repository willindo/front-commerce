import * as z from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserInputSchema = z.object({
    id: z.string(),
    email: z.string(),
    password: z.string(),
    name: z.string().optional().nullable(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    cart: z.unknown().optional().nullable(),
    orders: z.array(z.unknown()),
    wishlists: z.array(z.unknown()),
    payments: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
