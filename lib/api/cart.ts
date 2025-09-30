// lib/api/cart.ts
import { api } from "./axios";
import { AddToCartInput, UpdateCartItemInput } from "../schemas/cart";
import type { Cart } from "../types/cart";

export async function fetchCart(): Promise<Cart> {
  const res = await api.get<Cart>("/cart");
  return res.data;
}

export async function addToCart(data: AddToCartInput): Promise<Cart> {
  const res = await api.post<Cart>("/cart/add", data);
  return res.data;
}

export async function updateCartItem({
  itemId,
  quantity,
}: UpdateCartItemInput): Promise<Cart> {
  const res = await api.put<Cart>(`/cart/item/${itemId}`, { quantity });
  return res.data;
}

export async function removeCartItem(itemId: string): Promise<Cart> {
  const res = await api.delete<Cart>(`/cart/item/${itemId}`);
  return res.data;
}

export async function clearCart(): Promise<Cart> {
  const res = await api.post<Cart>("/cart/clear");
  return res.data;
}
