import { api } from "./axios";

api;
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

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";

// temporary until auth phase
const TEMP_USER_ID = "2b38ae62-d82f-4034-8419-c4c4737473ed";
export async function addToCart(
  productId: string,
  quantity = 1
): Promise<Cart> {
  const res = await fetch(`${api}/cart/${TEMP_USER_ID}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ productId, quantity }),
  });
  if (!res.ok) throw new Error("Failed to add product to cart");
  return res.json();
}

export async function getCart(): Promise<Cart> {
  const res = await fetch(`${api}/cart/${TEMP_USER_ID}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
}

export async function updateCartItem(
  itemId: string,
  quantity: number
): Promise<Cart> {
  const res = await fetch(`${api}/cart/${TEMP_USER_ID}/update`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ itemId, quantity }),
  });
  if (!res.ok) throw new Error("Failed to update cart item");
  return res.json();
}

export async function removeCartItem(itemId: string): Promise<Cart> {
  const res = await fetch(`${api}/cart/${TEMP_USER_ID}/item/${itemId}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to remove cart item");
  return res.json();
}

export async function clearCart(): Promise<Cart> {
  const res = await fetch(`${api}/cart/${TEMP_USER_ID}/clear`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to clear cart");
  return res.json();
}
