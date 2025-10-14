import * as z from 'zod';
import { SizeSchema } from '../enums/Size.schema'

const makeSchema = () => z.object({
  productId: z.string(),
  size: SizeSchema
}).strict();
export const ProductSizeProductIdSizeCompoundUniqueInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductSizeProductIdSizeCompoundUniqueInputObjectZodSchema = makeSchema();
