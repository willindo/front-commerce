import * as z from 'zod';
import { PaymentStatusSchema } from '../enums/PaymentStatus.schema'

const makeSchema = () => z.object({
  set: PaymentStatusSchema.optional()
}).strict();
export const EnumPaymentStatusFieldUpdateOperationsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const EnumPaymentStatusFieldUpdateOperationsInputObjectZodSchema = makeSchema();
