// lib/api/cart.ts
import { VerifyCartResponse } from "@/src/shared/dto/checkout/verify-cart.dto";
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

// Temporary user until auth is integrated
const TEMP_USER_ID = "2b38ae62-d82f-4034-8419-c4c4737473ed";

export async function addToCart(
  productId: string,
  quantity = 1
): Promise<Cart> {
  const { data } = await api.post(`/cart/${TEMP_USER_ID}/add`, {
    productId,
    quantity,
  });
  return data;
}

export async function getCart(): Promise<Cart> {
  const { data } = await api.get(`/cart/${TEMP_USER_ID}`);
  return data;
}

export async function updateCartItem(
  itemId: string,
  quantity: number
): Promise<Cart> {
  const { data } = await api.put(`/cart/${TEMP_USER_ID}/update`, {
    itemId,
    quantity,
  });
  return data;
}

export async function removeCartItem(itemId: string): Promise<Cart> {
  const { data } = await api.delete(`/cart/${TEMP_USER_ID}/item/${itemId}`);
  return data;
}

export async function clearCart(): Promise<Cart> {
  const { data } = await api.delete(`/cart/${TEMP_USER_ID}/clear`);
  return data;
}

export async function verifyCart(cartId: string): Promise<VerifyCartResponse> {
  const { data } = await api.post(`/checkout/${TEMP_USER_ID}/verify`, {
    cartId,
  });
  return data;
}
