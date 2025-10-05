import * as z from 'zod';

import { RoleSchema } from '../../enums/Role.schema';
// prettier-ignore
export const UserResultSchema = z.object({
    id: z.string(),
    email: z.string(),
    password: z.string(),
    name: z.string().nullable(),
    role: RoleSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    carts: z.array(z.unknown()),
    orders: z.array(z.unknown()),
    wishlists: z.array(z.unknown())
}).strict();

export type UserResultType = z.infer<typeof UserResultSchema>;
