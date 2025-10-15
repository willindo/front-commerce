// lib/api/cart.ts
import { api } from "./axios";

export type CartItem = {
  id: string;
  productId: string;
  quantity: number;
  product: {
    name: string;
    price: number;
    description?: string | null;
    image?: string | null;
  };
};

export type Cart = {
  id: string;
  userId: string;
  items: CartItem[];
  createdAt: string;
  updatedAt: string;
};

export type VerifyCartResponse = {
  cartId: string;
  items: {
    id: string;
    productId: string;
    productName: string;
    productImage: string | null;
    price: number;
    quantity: number;
    subtotal: number;
    reason?: string;
  }[];
  subtotal: number;
  totalQuantity: number;
  invalidItems: {
    id: string;
    productId: string;
    productName: string;
    reason: string;
  }[];
  isValid: boolean;
  verifiedAt: string;
};

// ✅ Authenticated-only endpoints (no userId in URL)
export async function getCart(): Promise<Cart> {
  const { data } = await api.get(`/cart`);
  return data;
}

export async function addToCart(
  productId: string,
  quantity = 1
): Promise<Cart> {
  const { data } = await api.post(`/cart/add`, { productId, quantity });
  return data;
}

export async function updateCartItem(
  itemId: string,
  quantity: number
): Promise<Cart> {
  const { data } = await api.put(`/cart/update`, { itemId, quantity });
  return data;
}

export async function removeCartItem(itemId: string): Promise<Cart> {
  const { data } = await api.delete(`/cart/item/${itemId}`);
  return data;
}

export async function clearCart(): Promise<Cart> {
  const { data } = await api.delete(`/cart/clear`);
  return data;
}

export async function verifyCart(): Promise<VerifyCartResponse> {
  const { data } = await api.get(`/cart/verify`);
  return data;
}
