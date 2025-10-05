import * as z from 'zod';
import { ProductCreateWithoutCartItemsInputObjectSchema as ProductCreateWithoutCartItemsInputObjectSchema } from './ProductCreateWithoutCartItemsInput.schema';
import { ProductUncheckedCreateWithoutCartItemsInputObjectSchema as ProductUncheckedCreateWithoutCartItemsInputObjectSchema } from './ProductUncheckedCreateWithoutCartItemsInput.schema';
import { ProductCreateOrConnectWithoutCartItemsInputObjectSchema as ProductCreateOrConnectWithoutCartItemsInputObjectSchema } from './ProductCreateOrConnectWithoutCartItemsInput.schema';
import { ProductWhereUniqueInputObjectSchema as ProductWhereUniqueInputObjectSchema } from './ProductWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => ProductCreateWithoutCartItemsInputObjectSchema), z.lazy(() => ProductUncheckedCreateWithoutCartItemsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => ProductCreateOrConnectWithoutCartItemsInputObjectSchema).optional(),
  connect: z.lazy(() => ProductWhereUniqueInputObjectSchema).optional()
}).strict();
export const ProductCreateNestedOneWithoutCartItemsInputObjectSchema: z.ZodType<any> = makeSchema() as unknown as z.ZodType<any>;
export const ProductCreateNestedOneWithoutCartItemsInputObjectZodSchema = makeSchema();
