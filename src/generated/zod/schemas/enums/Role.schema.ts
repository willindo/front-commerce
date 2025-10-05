import * as z from 'zod';

export const RoleSchema = z.enum(['ADMIN', 'CUSTOMER'])

export type Role = z.infer<typeof RoleSchema>;