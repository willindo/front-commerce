// apps/frontend/types/product.ts

// What backend returns
export type ProductResponseDto = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  price: number;
  stock: number;
  sku: string;
  currency: string;
  images: string[];
  createdAt: string;
  updatedAt: string;
};

// What frontend sends
export type CreateProductDto = {
  name: string;
  slug: string;
  description?: string;
  price: number;
  stock: number;
  sku: string;
  currency: string;
  images?: string[];
};

export type UpdateProductDto = Partial<CreateProductDto>;
