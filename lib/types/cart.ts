import { ProductResponseDto } from "./products";

export type CartItem = {
  id: string; // cart item id
  productId?: string;
  quantity?: number;
  product?: ProductResponseDto; // optional populated product
};

export type Cart = {
  id: string;
  userId: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
};
